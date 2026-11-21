/**
 * [INPUT]: Depends on ./ledger for the credit write primitives, on @/lib/db for
 *          the db instance, on @/lib/db/schema for the creditBalances/
 *          organizationCreditBalances/subscriptions/member tables
 * [OUTPUT]: Exports UserCredits, getUserCredits, getUserBillingSummary,
 *           getOrganizationCredits, getOrganizationBillingSummary,
 *           BillingSummary, ENTITLED_SUBSCRIPTION_STATUSES (source of truth for
 *           the status set meaning "currently subscribed"),
 *           hasEntitledSubscription (true when a personal subscription, or the
 *           team subscription of any organization the user belongs to, is
 *           alive), CreditSubject, settleDripForSubscription,
 *           settleDueDripGrants (per accounting subject: user or organization),
 *           settleDueDripGrantsBatch (the cron batch entry point),
 *           addMonthsClamped (month addition with end-of-month clamping — the
 *           only algorithm for drip scheduling dates, shared with the billing
 *           fulfillment layer), spendCredits (shadows the raw ledger version:
 *           settle first, then spend; accepts organizationId to use the team
 *           pool); re-exports the remaining ledger operations
 * [POS]: The read layer and public facade of lib/credits — the settlement core
 *        for yearly monthly grants converges on subscriptionId (personal and
 *        team subscriptions share one primitive; the grant target is decided by
 *        the subscription row's organizationId, independent of the payment
 *        provider); the cron batch settlement is the primary path, lazy
 *        settlement before a balance read / credit spend is the fallback
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { db } from '@/lib/db';
import {
  creditBalances,
  member,
  organizationCreditBalances,
  subscriptions,
} from '@/lib/db/schema';
import {
  and,
  desc,
  eq,
  gt,
  inArray,
  isNull,
  lte,
  or,
  type SQL,
} from 'drizzle-orm';
import {
  resetSubscriptionCredits,
  spendCredits as spendCreditsRaw,
  type DbTransaction,
  type SpendResult,
} from './ledger';

export * from './ledger';

export interface UserCredits {
  subscriptionCredits: number
  purchasedCredits: number
  totalCredits: number
}

export interface BillingSummary extends UserCredits {
  subscription: {
    planId: string
    status: string
    interval: 'month' | 'year'
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean
    /** Next yearly-drip grant date, if the plan drips monthly */
    nextGrantAt: Date | null
    monthlyCredits: number
  } | null
}

const GRANTABLE_STATUSES = ['active', 'trialing']

/**
 * Canonical (provider-normalized) statuses that count as "the user currently
 * has a subscription" for entitlement reads (billing summary, storage
 * retention). past_due/unpaid keep entitlements during the dunning window;
 * reconciliation or webhook eventually flips them out.
 */
export const ENTITLED_SUBSCRIPTION_STATUSES = [
  'active',
  'trialing',
  'past_due',
  'unpaid',
]

/**
 * Month addition with end-of-month clamping: naive setMonth overflows into the
 * following month (1/31 + 1 month = 3/3); this clamps to the last day of the
 * target month (1/31 + 1 = 2/28, +2 = 3/31). Yearly drip scheduling dates are
 * ALWAYS derived as "period anchor + month index" through this function — never
 * by chaining month by month, because chaining grinds the 31st permanently down
 * to the 28th even with clamping. Hours/minutes/seconds are preserved as-is.
 */
export function addMonthsClamped(date: Date, months: number): Date {
  const next = new Date(date)
  const anchorDay = next.getDate()
  next.setDate(1) // Snap to the 1st first, so setMonth cannot overflow itself
  next.setMonth(next.getMonth() + months)
  const lastDay = new Date(
    next.getFullYear(),
    next.getMonth() + 1,
    0
  ).getDate()
  next.setDate(Math.min(anchorDay, lastDay))
  return next
}

/** Drip grants that are due right now, as a reusable filter fragment. */
function dueDripFilter(now: Date) {
  return and(
    gt(subscriptions.remainingGrants, 0),
    lte(subscriptions.nextGrantAt, now),
    inArray(subscriptions.status, GRANTABLE_STATUSES)
  )
}

/**
 * Settles one subscription's due drip grants. The single settlement
 * primitive — the per-minute cron, the lazy fallback and any future
 * multi-subscription path all converge here. Row lock + re-check make
 * concurrent triggers (cron tick racing a user spend) collapse into one
 * grant. Because a grant RESETS the subscription bucket, several overdue
 * months collapse into one reset — no fake per-month history is fabricated.
 *
 * Returns true when a grant was written.
 */
export async function settleDripForSubscription(
  subscriptionId: string,
  outerTx?: DbTransaction
): Promise<boolean> {
  const now = new Date()

  const run = async (tx: DbTransaction): Promise<boolean> => {
    // Re-read under lock; a concurrent trigger may have settled already.
    const [sub] = await tx
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.id, subscriptionId))
      .for('update')

    if (
      !sub ||
      sub.remainingGrants <= 0 ||
      !sub.nextGrantAt ||
      sub.nextGrantAt > now ||
      !GRANTABLE_STATUSES.includes(sub.status)
    ) {
      return false
    }

    // `periodStart` tracks the latest due month — the one the reset bucket
    // now represents. It makes the ledger row self-explanatory even though
    // its createdAt is the settlement moment, not the entitlement date.
    //
    // Scheduling dates anchor on the yearly period start: the k-th grant =
    // anchor + k months (end-of-month clamped), k = 12 - remaining. Bought on
    // the 31st → 2/28, 3/31, 4/30… always aligned to the anniversary day.
    // A missing anchor (legacy rows with a null currentPeriodStart) degrades to
    // chained clamped advancement.
    const anchor = sub.currentPeriodStart
    let remaining = sub.remainingGrants
    let nextGrantAt: Date | null = sub.nextGrantAt
    let periodStart = sub.nextGrantAt
    let elapsed = 0
    while (remaining > 0 && nextGrantAt && nextGrantAt <= now) {
      periodStart = nextGrantAt
      elapsed += 1
      remaining -= 1
      nextGrantAt =
        remaining > 0
          ? anchor
            ? addMonthsClamped(anchor, 12 - remaining)
            : addMonthsClamped(nextGrantAt, 1)
          : null
    }

    await tx
      .update(subscriptions)
      .set({ remainingGrants: remaining, nextGrantAt })
      .where(eq(subscriptions.id, sub.id))

    // The subscription row's organizationId routes the grant: team plans
    // land in the org pool, personal plans in the purchaser's buckets.
    await resetSubscriptionCredits(
      {
        userId: sub.userId,
        organizationId: sub.organizationId,
        amount: sub.monthlyCredits,
        note: `Yearly plan monthly credits (period starting ${periodStart.toISOString().slice(0, 10)}, ${elapsed > 1 ? `${elapsed} periods elapsed, ` : ''}plan ${sub.planId})`,
      },
      tx
    )
    return true
  }

  return outerTx ? run(outerTx) : db.transaction(run)
}

/** The accounting subject a read/spend acts on: a user or an org pool. */
export interface CreditSubject {
  userId?: string
  organizationId?: string | null
}

/** Which subscriptions entitle this subject's pool. */
function subjectScope(subject: CreditSubject): SQL {
  if (subject.organizationId) {
    return eq(subscriptions.organizationId, subject.organizationId)
  }
  if (!subject.userId) {
    throw new Error('CreditSubject requires userId or organizationId')
  }
  return and(
    eq(subscriptions.userId, subject.userId),
    isNull(subscriptions.organizationId)
  )!
}

/**
 * Lazy fallback: settles every due drip grant entitling a subject's pool
 * before a balance read or spend. The cron is the primary trigger; this
 * guarantees a subject whose grant came due seconds ago (before the next
 * cron tick, or while the cron is down) can still spend immediately.
 */
export async function settleDueDripGrants(
  subject: CreditSubject,
  outerTx?: DbTransaction
): Promise<void> {
  // Cheap unlocked probe — almost every call returns here.
  const due = await (outerTx ?? db)
    .select({ id: subscriptions.id })
    .from(subscriptions)
    .where(and(subjectScope(subject), dueDripFilter(new Date())))

  for (const { id } of due) {
    await settleDripForSubscription(id, outerTx)
  }
}

/**
 * Cron entry point: settles up to `limit` due drip grants across all users,
 * oldest due first. Each subscription settles in its own transaction so one
 * failure never blocks the rest of the batch. All timestamps are UTC —
 * `nextGrantAt` is timezone-aware and comparisons happen in the database.
 */
export async function settleDueDripGrantsBatch(
  limit: number
): Promise<{ due: number; settled: number; failed: number }> {
  const due = await db
    .select({ id: subscriptions.id })
    .from(subscriptions)
    .where(dueDripFilter(new Date()))
    .orderBy(subscriptions.nextGrantAt)
    .limit(limit)

  let settled = 0
  let failed = 0
  for (const { id } of due) {
    try {
      if (await settleDripForSubscription(id)) settled += 1
    } catch (error) {
      failed += 1
      console.error(`settleDueDripGrantsBatch: subscription ${id} failed:`, error)
    }
  }
  return { due: due.length, settled, failed }
}

/**
 * Spend credits, settling any due yearly-drip grant first — a returning
 * yearly subscriber's entitled credits must be spendable immediately.
 * Shadows the raw ledger export so every consumer of `@/lib/credits`
 * gets the settled path by construction; the unsettled primitive stays
 * private to this module.
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
  await settleDueDripGrants(params, tx)
  return spendCreditsRaw(params, tx)
}

/** Current balances. Settles any due yearly-drip grants first. */
export async function getUserCredits(userId: string): Promise<UserCredits> {
  await settleDueDripGrants({ userId })

  const [row] = await db
    .select({
      subscriptionCredits: creditBalances.subscriptionCredits,
      purchasedCredits: creditBalances.purchasedCredits,
    })
    .from(creditBalances)
    .where(eq(creditBalances.userId, userId))

  const subscriptionCredits = row?.subscriptionCredits ?? 0
  const purchasedCredits = row?.purchasedCredits ?? 0
  return {
    subscriptionCredits,
    purchasedCredits,
    totalCredits: subscriptionCredits + purchasedCredits,
  }
}

/** Org pool balances. Settles the org's due yearly-drip grants first. */
export async function getOrganizationCredits(
  organizationId: string
): Promise<UserCredits> {
  await settleDueDripGrants({ organizationId })

  const [row] = await db
    .select({
      subscriptionCredits: organizationCreditBalances.subscriptionCredits,
      purchasedCredits: organizationCreditBalances.purchasedCredits,
    })
    .from(organizationCreditBalances)
    .where(eq(organizationCreditBalances.organizationId, organizationId))

  const subscriptionCredits = row?.subscriptionCredits ?? 0
  const purchasedCredits = row?.purchasedCredits ?? 0
  return {
    subscriptionCredits,
    purchasedCredits,
    totalCredits: subscriptionCredits + purchasedCredits,
  }
}

/**
 * Whether the user is entitled by ANY live subscription — a personal one they
 * purchased, or a team one on any organization they belong to (member or
 * owner alike). Promo surfaces use this to stop pitching subscriptions to
 * people who already have one.
 */
export async function hasEntitledSubscription(userId: string): Promise<boolean> {
  const memberOrgIds = db
    .select({ organizationId: member.organizationId })
    .from(member)
    .where(eq(member.userId, userId))

  const [row] = await db
    .select({ id: subscriptions.id })
    .from(subscriptions)
    .where(
      and(
        inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES),
        or(
          and(
            eq(subscriptions.userId, userId),
            isNull(subscriptions.organizationId)
          ),
          inArray(subscriptions.organizationId, memberOrgIds)
        )
      )
    )
    .limit(1)

  return row !== undefined
}

function toSummarySubscription(
  sub: typeof subscriptions.$inferSelect | undefined
): BillingSummary['subscription'] {
  return sub
    ? {
        planId: sub.planId,
        status: sub.status,
        interval: sub.interval,
        currentPeriodEnd: sub.currentPeriodEnd,
        cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
        nextGrantAt: sub.nextGrantAt,
        monthlyCredits: sub.monthlyCredits,
      }
    : null
}

/**
 * Balances plus the user's current PERSONAL subscription, for billing UIs.
 * Team subscriptions the user purchased live on the team page — the personal
 * billing center never conflates the two subjects.
 */
export async function getUserBillingSummary(
  userId: string
): Promise<BillingSummary> {
  const credits = await getUserCredits(userId)

  const [sub] = await db
    .select()
    .from(subscriptions)
    .where(
      and(
        eq(subscriptions.userId, userId),
        isNull(subscriptions.organizationId),
        inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES)
      )
    )
    .orderBy(desc(subscriptions.createdAt))
    .limit(1)

  return { ...credits, subscription: toSummarySubscription(sub) }
}

/** Org pool balances plus the org's current team subscription. */
export async function getOrganizationBillingSummary(
  organizationId: string
): Promise<BillingSummary> {
  const credits = await getOrganizationCredits(organizationId)

  const [sub] = await db
    .select()
    .from(subscriptions)
    .where(
      and(
        eq(subscriptions.organizationId, organizationId),
        inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES)
      )
    )
    .orderBy(desc(subscriptions.createdAt))
    .limit(1)

  return { ...credits, subscription: toSummarySubscription(sub) }
}
