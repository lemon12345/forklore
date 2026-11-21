/**
 * [INPUT]: Depends on @/lib/db for the db instance, on @/lib/db/schema for the
 *          creditBalances/organizationCreditBalances/creditTransactions tables
 *          and CreditTransactionType
 * [OUTPUT]: Exports InsufficientCreditsError, CreditBuckets, DbTransaction,
 *           SpendResult, grantPurchasedCredits, resetSubscriptionCredits,
 *           grantSubscriptionUpgradeCredits (mid-cycle upgrade increment: the
 *           subscription bucket only grows, never resets),
 *           sumSubscriptionGrantsSince (grant-window watermark query, the
 *           basis for computing the upgrade increment), spendCredits (returns
 *           the ledger row id and the per-bucket split), refundSpentCredits
 *           (returns a failed task's credits to the original pool and bucket;
 *           callable only from trusted server code),
 *           revokeCreditsForRefund, clearSubscriptionCredits, adjustCredits,
 *           grantSignupBonusCredits; every operation except the signup bonus
 *           accepts an optional organizationId — the accounting subject then
 *           switches to the organization's shared pool and userId degrades to
 *           the acting member
 * [POS]: The write layer of lib/credits — the only module allowed to modify
 *        credit balances (personal two-bucket balances and the team pool share
 *        the same primitive); every change atomically updates the balance and
 *        appends a ledger record carrying the per-bucket delta (a subscription
 *        reset writes two rows: the previous cycle's unused credits expiring +
 *        the full grant, never a net difference)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { db } from '@/lib/db';
import {
  CreditTransactionType,
  creditBalances,
  creditTransactions,
  organizationCreditBalances,
} from '@/lib/db/schema';
import { and, eq, gte, isNull, sql } from 'drizzle-orm';

// ============================================================================
// Credit ledger — the single write path for balances.
//
// Design: every operation is a pure transition function over the two buckets.
// One primitive (`mutateCredits`) owns locking, upsert, snapshotting and the
// ledger insert; operations cannot get those wrong because they never touch
// them. Subscription credits reset on grant and vanish when the subscription
// ends; purchased credits only ever shrink by spending or refund clawback.
//
// Accounting subject: every mutation targets either a user's personal buckets
// (organizationId absent) or an organization's shared pool (organizationId
// set — userId then records the acting member, not the subject). Both pools
// share the same two-bucket shape, so the transitions, snapshots and
// idempotency machinery are identical; only the balance row differs.
//
// Every operation accepts an optional `tx` so callers (webhook handlers,
// drip processing) can bundle a balance change with their own writes into
// one atomic transaction.
// ============================================================================

/** Drizzle transaction handle, as passed to db.transaction callbacks. */
export type DbTransaction = Parameters<
  Parameters<typeof db.transaction>[0]
>[0]

export interface CreditBuckets {
  subscription: number
  purchased: number
}

export class InsufficientCreditsError extends Error {
  constructor(requested: number, available: number) {
    super(`Insufficient credits: requested ${requested}, available ${available}`)
    this.name = 'InsufficientCreditsError'
  }
}

interface MutationContext {
  /**
   * Personal subject — or the acting member when organizationId is set.
   * NULL only for org-pool mutations whose actor no longer exists (the
   * purchaser deleted their account after the subscription ended); a
   * personal mutation always has a live subject.
   */
  userId: string | null
  /** Set = the org's shared pool is the accounting subject. */
  organizationId?: string | null
  type: CreditTransactionType
  note?: string
  orderId?: string | null
  /** usage_refund only: the usage row being reversed (UNIQUE → idempotent). */
  refundedTransactionId?: string | null
}

interface MutationResult {
  buckets: CreditBuckets
  /** Ledger row id; null when the transition was a no-op. */
  txId: string | null
}

type Subject = Pick<MutationContext, 'userId' | 'organizationId'>

/**
 * Ensure the subject's balance row exists and take its row lock. The two
 * pool tables share the bucket shape; only the key differs, so this is the
 * single place that knows which table a subject lives in.
 */
async function lockBuckets(
  tx: DbTransaction,
  subject: Subject
): Promise<CreditBuckets> {
  if (subject.organizationId) {
    await tx
      .insert(organizationCreditBalances)
      .values({ organizationId: subject.organizationId })
      .onConflictDoNothing()
    const [row] = await tx
      .select({
        subscription: organizationCreditBalances.subscriptionCredits,
        purchased: organizationCreditBalances.purchasedCredits,
      })
      .from(organizationCreditBalances)
      .where(
        eq(organizationCreditBalances.organizationId, subject.organizationId)
      )
      .for('update')
    return row ?? { subscription: 0, purchased: 0 }
  }
  if (!subject.userId) {
    throw new Error('Personal credit mutation requires a userId subject')
  }
  await tx
    .insert(creditBalances)
    .values({ userId: subject.userId })
    .onConflictDoNothing()
  const [row] = await tx
    .select({
      subscription: creditBalances.subscriptionCredits,
      purchased: creditBalances.purchasedCredits,
    })
    .from(creditBalances)
    .where(eq(creditBalances.userId, subject.userId))
    .for('update')
  return row ?? { subscription: 0, purchased: 0 }
}

async function writeBuckets(
  tx: DbTransaction,
  subject: Subject,
  next: CreditBuckets
): Promise<void> {
  const values = {
    subscriptionCredits: next.subscription,
    purchasedCredits: next.purchased,
  }
  if (subject.organizationId) {
    await tx
      .update(organizationCreditBalances)
      .set(values)
      .where(
        eq(organizationCreditBalances.organizationId, subject.organizationId)
      )
    return
  }
  if (!subject.userId) {
    throw new Error('Personal credit mutation requires a userId subject')
  }
  await tx
    .update(creditBalances)
    .set(values)
    .where(eq(creditBalances.userId, subject.userId))
}

/**
 * Atomically apply a bucket transition and journal it.
 * Returns the resulting buckets and the ledger row id. A `null` transition
 * result means no-op (nothing written — avoids ledger noise for zero-value
 * revokes).
 */
async function mutateCredits(
  ctx: MutationContext,
  transition: (current: CreditBuckets) => CreditBuckets | null,
  outerTx?: DbTransaction
): Promise<MutationResult> {
  const run = async (tx: DbTransaction): Promise<MutationResult> => {
    const current = await lockBuckets(tx, ctx)
    const next = transition(current)
    if (next === null) return { buckets: current, txId: null }

    await writeBuckets(tx, ctx, next)

    const [journal] = await tx
      .insert(creditTransactions)
      .values({
        userId: ctx.userId,
        organizationId: ctx.organizationId ?? null,
        type: ctx.type,
        amount:
          next.subscription + next.purchased - current.subscription - current.purchased,
        subscriptionDelta: next.subscription - current.subscription,
        purchasedDelta: next.purchased - current.purchased,
        subscriptionCreditsAfter: next.subscription,
        purchasedCreditsAfter: next.purchased,
        note: ctx.note,
        orderId: ctx.orderId ?? null,
        refundedTransactionId: ctx.refundedTransactionId ?? null,
      })
      .returning({ id: creditTransactions.id })

    return { buckets: next, txId: journal.id }
  }

  return outerTx ? run(outerTx) : db.transaction(run)
}

// ----------------------------------------------------------------------------
// Operations
// ----------------------------------------------------------------------------

/** Credit pack purchase: purchased credits accumulate and never expire. */
export async function grantPurchasedCredits(
  params: {
    userId: string | null
    organizationId?: string | null
    amount: number
    orderId?: string
    note?: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, organizationId, amount, orderId, note } = params
  const { buckets } = await mutateCredits(
    { userId, organizationId, type: 'purchase', note, orderId },
    (b) => ({ subscription: b.subscription, purchased: b.purchased + amount }),
    tx
  )
  return buckets
}

/**
 * Subscription grant (initial, renewal, or yearly drip): the subscription
 * bucket RESETS to the plan amount — unused subscription credits do not
 * roll over.
 *
 * Journals as TWO rows, not one net delta: first the unused remainder
 * expires (its own row, no-op when the bucket is empty), then the full
 * grant lands. A single net row would show a renewal as "+40" when the
 * user kept 60 and the plan grants 100 — reads like a shorted grant.
 */
export async function resetSubscriptionCredits(
  params: {
    userId: string | null
    organizationId?: string | null
    amount: number
    orderId?: string
    note?: string
  },
  outerTx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, organizationId, amount, orderId, note } = params
  const run = async (tx: DbTransaction): Promise<CreditBuckets> => {
    await mutateCredits(
      {
        userId,
        organizationId,
        type: 'subscription_cycle_expire',
        note: 'Unused subscription credits expired on new grant',
        orderId,
      },
      (b) =>
        b.subscription === 0 ? null : { subscription: 0, purchased: b.purchased },
      tx
    )
    const { buckets } = await mutateCredits(
      { userId, organizationId, type: 'subscription_grant', note, orderId },
      (b) => ({ subscription: amount, purchased: b.purchased }),
      tx
    )
    return buckets
  }
  return outerTx ? run(outerTx) : db.transaction(run)
}

/**
 * Mid-cycle upgrade increment: the subscription bucket **only grows, never
 * resets**, topping the watermark up to the new plan's monthly amount. The
 * caller (the billing fulfillment layer) computes the increment from the
 * window watermark given by sumSubscriptionGrantsSince — within one grant
 * window the cumulative grant never exceeds the highest plan monthly amount
 * ever reached, so switching plans back and forth cannot mint credits by
 * construction. amount <= 0 converges to a no-op, producing no ledger noise.
 */
export async function grantSubscriptionUpgradeCredits(
  params: {
    userId: string | null
    organizationId?: string | null
    amount: number
    orderId?: string
    note?: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, organizationId, amount, orderId, note } = params
  const { buckets } = await mutateCredits(
    { userId, organizationId, type: 'subscription_grant', note, orderId },
    (b) =>
      amount <= 0
        ? null
        : { subscription: b.subscription + amount, purchased: b.purchased },
    tx
  )
  return buckets
}

/**
 * Grant-window watermark: the sum of the subscription-bucket deltas over the
 * subject's `subscription_grant` ledger rows since `since` (the deltas of both
 * reset grants and upgrade increments are always positive, so no sign filter
 * is needed). Upgrade fulfillment computes its increment from this — read-only,
 * the supporting query behind the write path's invariant.
 */
export async function sumSubscriptionGrantsSince(
  subject: { userId: string | null; organizationId?: string | null },
  since: Date,
  tx?: DbTransaction
): Promise<number> {
  const subjectPredicate = subject.organizationId
    ? eq(creditTransactions.organizationId, subject.organizationId)
    : subject.userId
      ? and(
          eq(creditTransactions.userId, subject.userId),
          isNull(creditTransactions.organizationId)
        )
      : null
  if (!subjectPredicate) {
    throw new Error('sumSubscriptionGrantsSince requires a subject')
  }

  const [row] = await (tx ?? db)
    .select({
      total: sql<number>`coalesce(sum(${creditTransactions.subscriptionDelta}), 0)::int`,
    })
    .from(creditTransactions)
    .where(
      and(
        subjectPredicate,
        eq(creditTransactions.type, 'subscription_grant'),
        gte(creditTransactions.createdAt, since)
      )
    )
  return row?.total ?? 0
}

export interface SpendResult {
  buckets: CreditBuckets
  /** Ledger row id of the usage — pass to refundSpentCredits on task failure. */
  txId: string
  spentFromSubscription: number
  spentFromPurchased: number
}

/**
 * Feature consumption: drains the subscription bucket first (it expires),
 * then purchased credits. Throws InsufficientCreditsError when short.
 * Returns the usage ledger row id so a failed task can be refunded.
 */
export async function spendCredits(
  params: {
    userId: string
    /** Set = spend from the org's shared pool (workspace context). */
    organizationId?: string | null
    amount: number
    note: string
  },
  tx?: DbTransaction
): Promise<SpendResult> {
  const { userId, organizationId, amount, note } = params
  let fromSubscription = 0
  const { buckets, txId } = await mutateCredits(
    { userId, organizationId, type: 'usage', note },
    (b) => {
      const total = b.subscription + b.purchased
      if (total < amount) throw new InsufficientCreditsError(amount, total)
      fromSubscription = Math.min(b.subscription, amount)
      return {
        subscription: b.subscription - fromSubscription,
        purchased: b.purchased - (amount - fromSubscription),
      }
    },
    tx
  )
  // The transition always writes (insufficient balance throws), so txId is set.
  return {
    buckets,
    txId: txId!,
    spentFromSubscription: fromSubscription,
    spentFromPurchased: amount - fromSubscription,
  }
}

/**
 * Reverses a usage after a failed task: returns the exact per-bucket split
 * to the buckets it came from. Never route this through a client-callable
 * server action — a user who can refund at will turns every successful task
 * into a free one; only trusted server code (task failure handlers) may call.
 *
 * Idempotent by construction: refunds serialize on the balance row lock and
 * the UNIQUE refundedTransactionId admits at most one refund per usage row —
 * replays return the current balance untouched.
 *
 * Refunding into the subscription bucket may momentarily exceed the plan
 * amount if a monthly reset happened in between — accepted, errs in the
 * user's favor. Refunding into `purchased` instead would let users launder
 * expiring credits into permanent ones via deliberately failed tasks.
 */
export async function refundSpentCredits(
  params: {
    /**
     * Expected actor, when known. NULL/undefined only for tasks whose
     * creator deleted their account (task row userId went SET NULL) — the
     * usage row then still identifies the pool to refund.
     */
    userId?: string | null
    spendTxId: string
    note?: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, spendTxId, note } = params
  const run = async (tx: DbTransaction): Promise<CreditBuckets> => {
    // The usage row is the source of truth for WHERE the refund goes: its
    // organizationId (or absence) picks the pool, its deltas pick the split.
    // Ledger rows are append-only, so this unlocked read is stable.
    const [spend] = await tx
      .select({
        userId: creditTransactions.userId,
        subscriptionDelta: creditTransactions.subscriptionDelta,
        purchasedDelta: creditTransactions.purchasedDelta,
        organizationId: creditTransactions.organizationId,
      })
      .from(creditTransactions)
      .where(
        and(
          eq(creditTransactions.id, spendTxId),
          eq(creditTransactions.type, 'usage')
        )
      )
      .limit(1)
    if (!spend) {
      throw new Error(
        `refundSpentCredits: no usage transaction ${spendTxId}`
      )
    }
    // Actor integrity check — only enforceable when both sides still exist
    // (either may be NULL after the actor's account deletion).
    if (userId && spend.userId && spend.userId !== userId) {
      throw new Error(
        `refundSpentCredits: usage transaction ${spendTxId} does not belong to user ${userId}`
      )
    }

    const subject: Subject = {
      userId: spend.userId ?? userId ?? null,
      organizationId: spend.organizationId,
    }

    // Fully-null subject: a deleted user's personal usage row (userId went
    // SET NULL, no organization). The balance row cascaded away with the
    // account — nothing to refund into, so converge to a no-op instead of
    // throwing; a late failure webhook produces no error noise.
    if (!subject.userId && !subject.organizationId) {
      return { subscription: 0, purchased: 0 }
    }

    // Take the same lock mutateCredits uses, so check-then-write is race-free.
    const balance = await lockBuckets(tx, subject)

    const [already] = await tx
      .select({ id: creditTransactions.id })
      .from(creditTransactions)
      .where(eq(creditTransactions.refundedTransactionId, spendTxId))
      .limit(1)
    if (already) return balance

    // Usage deltas are negative; subtracting them adds the credits back.
    const { buckets } = await mutateCredits(
      {
        ...subject,
        type: 'usage_refund',
        note,
        refundedTransactionId: spendTxId,
      },
      (b) => ({
        subscription: b.subscription - spend.subscriptionDelta,
        purchased: b.purchased - spend.purchasedDelta,
      }),
      tx
    )
    return buckets
  }
  return tx ? run(tx) : db.transaction(run)
}

/**
 * Refund clawback. Removes up to `amount` from one bucket, clamped at zero —
 * a user who already spent the credits cannot go negative.
 */
export async function revokeCreditsForRefund(
  params: {
    userId: string | null
    organizationId?: string | null
    amount: number
    bucket: 'subscription' | 'purchased'
    orderId?: string
    note?: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, organizationId, amount, bucket, orderId, note } = params
  const { buckets } = await mutateCredits(
    { userId, organizationId, type: 'refund_revoke', note, orderId },
    (b) => {
      const next = { ...b }
      next[bucket] = Math.max(0, b[bucket] - amount)
      return next[bucket] === b[bucket] ? null : next
    },
    tx
  )
  return buckets
}

/** Subscription ended/canceled: remaining subscription credits are cleared. */
export async function clearSubscriptionCredits(
  params: {
    userId: string | null
    organizationId?: string | null
    note?: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, organizationId, note } = params
  const { buckets } = await mutateCredits(
    { userId, organizationId, type: 'subscription_end_revoke', note },
    (b) =>
      b.subscription === 0 ? null : { subscription: 0, purchased: b.purchased },
    tx
  )
  return buckets
}

/**
 * One-time welcome credits on registration. Lands in the purchased bucket
 * (must survive later subscription resets). Idempotent by design: at most
 * one `signup_bonus` ledger row may ever exist per user — the check and the
 * grant share one transaction, so replays are harmless no-ops.
 */
export async function grantSignupBonusCredits(
  params: {
    userId: string
    amount: number
    note?: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, amount, note } = params
  const run = async (tx: DbTransaction): Promise<CreditBuckets> => {
    const [existing] = await tx
      .select({ id: creditTransactions.id })
      .from(creditTransactions)
      .where(
        and(
          eq(creditTransactions.userId, userId),
          eq(creditTransactions.type, 'signup_bonus')
        )
      )
      .limit(1)

    if (existing) {
      const [row] = await tx
        .select({
          subscription: creditBalances.subscriptionCredits,
          purchased: creditBalances.purchasedCredits,
        })
        .from(creditBalances)
        .where(eq(creditBalances.userId, userId))
      return row ?? { subscription: 0, purchased: 0 }
    }

    const { buckets } = await mutateCredits(
      { userId, type: 'signup_bonus', note },
      (b) => ({ subscription: b.subscription, purchased: b.purchased + amount }),
      tx
    )
    return buckets
  }
  return tx ? run(tx) : db.transaction(run)
}

/**
 * Manual admin adjustment. Positive deltas land in the purchased bucket
 * (they should not vanish on the next subscription reset); negative deltas
 * drain purchased first, then subscription, clamped at zero overall.
 */
export async function adjustCredits(
  params: {
    userId: string
    organizationId?: string | null
    delta: number
    note: string
  },
  tx?: DbTransaction
): Promise<CreditBuckets> {
  const { userId, organizationId, delta, note } = params
  const { buckets } = await mutateCredits(
    { userId, organizationId, type: 'admin_adjustment', note },
    (b) => {
      if (delta === 0) return null
      if (delta > 0) {
        return { subscription: b.subscription, purchased: b.purchased + delta }
      }
      const toRemove = Math.min(-delta, b.subscription + b.purchased)
      const fromPurchased = Math.min(b.purchased, toRemove)
      return {
        subscription: b.subscription - (toRemove - fromPurchased),
        purchased: b.purchased - fromPurchased,
      }
    },
    tx
  )
  return buckets
}
