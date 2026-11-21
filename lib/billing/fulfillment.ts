/**
 * [INPUT]: Depends on ./types for the core input contracts and
 *          TERMINAL_SUBSCRIPTION_STATUSES, @/lib/credits for the ledger
 *          primitives and ENTITLED_SUBSCRIPTION_STATUSES, @/lib/db and schema
 *          for the orders/subscriptions/user/organization tables,
 *          @/lib/discord/notifications for notifyNewOrder (fired via after()
 *          once the transaction commits)
 * [OUTPUT]: Exports fulfillOneTimePurchase (incl. in-place pending → completed
 *           promotion), recordPendingOneTimePurchase (in-flight payment traced
 *           with 0 credits), fulfillSubscriptionPayment,
 *           fulfillSubscriptionUpgrade (mid-cycle plan change, incremental
 *           fulfillment: high-water delta × remaining-time fraction, never
 *           resets the bucket), PermanentFulfillmentError (permanent
 *           fulfillment failure — webhook routes alert on it and then ack
 *           instead of 5xx), syncSubscription, handleSubscriptionEnded,
 *           applyRefund, resolveValidUserId, resolveValidOrganizationId,
 *           resolveSubject
 * [POS]: The provider-agnostic fulfillment core of lib/billing — the only
 *        module that turns "money events" into orders, subscription rows and
 *        credits; no provider SDK type appears here, webhook payloads are
 *        translated into ./types inputs by the adapters (./stripe, ./creem,
 *        ./paypal). Idempotency rests on the (provider, providerOrderId)
 *        composite unique constraint; the order write and the credit grant
 *        happen inside the same db.transaction; syncSubscription refuses to
 *        let a live status overwrite a terminal row (out-of-order webhook
 *        resurrection guard); subscription fulfillment runs "first order
 *        wins" inside a subject-level advisory lock — when a live sibling
 *        subscription already has an order, this payment is judged a
 *        duplicate: 0-credit order, canceled inside the lock, winner returned
 *        as duplicate so the adapter cancels + refunds on the provider side;
 *        the accounting subject is decided by subject (team subscriptions
 *        route to the organization's shared pool); the subject resolvers
 *        validate existence at every level (metadata may carry the ghost id
 *        of a deleted account, and writing it back would raise an FK
 *        violation and wedge the webhook retries); refunds advance
 *        idempotently by cumulative amount, and a full refund of an
 *        initial/renewal order stops the drip and returns the subscription id
 *        to the adapter for cancellation (a refund of a proration upgrade
 *        order only claws back the increment and never cancels the
 *        subscription — the provider-side plan does not roll back with the
 *        refund) — the core never calls a provider API
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import {
  addMonthsClamped,
  clearSubscriptionCredits,
  ENTITLED_SUBSCRIPTION_STATUSES,
  grantPurchasedCredits,
  grantSubscriptionUpgradeCredits,
  resetSubscriptionCredits,
  revokeCreditsForRefund,
  sumSubscriptionGrantsSince,
} from '@/lib/credits';
import { db } from '@/lib/db';
import {
  orders,
  organization as organizationSchema,
  subscriptions,
  user as userSchema,
} from '@/lib/db/schema';
import { notifyNewOrder } from '@/lib/discord/notifications';
import { and, eq, exists, inArray, isNull, ne, not, notInArray, sql } from 'drizzle-orm';
import { after } from 'next/server';
import type { PaymentProvider } from '@/config/pricing';
import type { DbTransaction } from '@/lib/credits';
import { TERMINAL_SUBSCRIPTION_STATUSES } from './types';
import type {
  BillingSubject,
  CanonicalSubscriptionStatus,
  OneTimePaymentInput,
  RefundInput,
  SubscriptionPaymentInput,
  SubscriptionRef,
  SubscriptionSyncInput,
  SubscriptionUpdatePaymentInput,
} from './types';

// ============================================================================
// Fulfillment — the only module that turns provider money events into orders,
// subscription rows and credits. Webhook routes, success pages and the
// reconcile cron all converge here; the composite unique on
// (provider, providerOrderId) makes every entry point idempotent, so double
// delivery is harmless by design.
// ============================================================================

/** Composite subscription key — (provider, providerSubscriptionId) is the business primary key of a subscription row. */
function subscriptionKey(provider: PaymentProvider, providerSubscriptionId: string) {
  return and(
    eq(subscriptions.provider, provider),
    eq(subscriptions.providerSubscriptionId, providerSubscriptionId)
  )
}

/**
 * Permanent fulfillment failure — a business error retrying can never fix
 * (e.g. the purchaser deleted their account and there is no organization
 * subject: the account never comes back, so 5xx only makes the provider
 * hammer us for 3 days for nothing). Webhook routes classify on it: alert
 * (Redis-deduped), then ack (2xx) instead of entering the retry loop; every
 * other error still 5xx — a plan-resolution failure counts as "fixable by
 * redeploying", so keep the retry window open to self-heal.
 */
export class PermanentFulfillmentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'PermanentFulfillmentError'
  }
}

// ----------------------------------------------------------------------------
// Subject resolution — every candidate id is validated against the database.
// Metadata (ours or the provider customer's) can carry the uuid of a
// since-deleted account: writing that ghost back into a SET NULL column would
// violate the FK and wedge the webhook in permanent retries. The uuid-format
// guard exists for the same reason — the columns are uuid-typed and a
// malformed string would abort the whole statement.
// ----------------------------------------------------------------------------

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/** Candidate userId → living userId, or null (malformed or deleted both map to null). */
export async function resolveValidUserId(
  candidate: string | null | undefined
): Promise<string | null> {
  if (!candidate || !UUID_RE.test(candidate)) return null
  const [row] = await db
    .select({ id: userSchema.id })
    .from(userSchema)
    .where(eq(userSchema.id, candidate))
    .limit(1)
  return row ? row.id : null
}

/** Candidate organizationId → living organization id, or null. */
export async function resolveValidOrganizationId(
  candidate: string | null | undefined
): Promise<string | null> {
  if (!candidate || !UUID_RE.test(candidate)) return null
  const [row] = await db
    .select({ id: organizationSchema.id })
    .from(organizationSchema)
    .where(eq(organizationSchema.id, candidate))
    .limit(1)
  return row ? row.id : null
}

/**
 * Candidate subject carried in metadata → a validated BillingSubject. Shared
 * by every provider adapter: a ghost id silently becomes null, and each core
 * function decides what that means for it (sync proceeds, a personal grant
 * throws, clearing the bucket is skipped).
 */
export async function resolveSubject(params: {
  userId?: string | null
  organizationId?: string | null
}): Promise<BillingSubject> {
  const [userId, organizationId] = await Promise.all([
    resolveValidUserId(params.userId),
    resolveValidOrganizationId(params.organizationId),
  ])
  return { userId, organizationId }
}

// ----------------------------------------------------------------------------
// One-time credit pack purchase
// ----------------------------------------------------------------------------

/**
 * One-time purchase fulfillment: write the order + grant purchased credits in
 * one transaction. On conflict (webhook racing the success page, duplicate
 * delivery) → an already completed order returns created:false and grants
 * nothing; an existing pending row (the eCheck in-flight trace) is promoted in
 * place to completed and granted — the conditional UPDATE
 * (WHERE status='pending') is serialized by the row lock, so concurrent
 * promotions leave exactly one winner and credits are granted once.
 */
export async function fulfillOneTimePurchase(
  input: OneTimePaymentInput
): Promise<{ created: boolean }> {
  const { subject } = input
  if (!subject.userId && !subject.organizationId) {
    // A paid pack with no living subject cannot be granted anywhere. The
    // money is NOT silently swallowed: the route alerts the admin for manual
    // handling — but a deleted account never comes back, so this is
    // permanent (ack, don't burn 3 days of provider retries).
    throw new PermanentFulfillmentError(
      `Cannot fulfill one-time purchase ${input.provider}/${input.providerOrderId}: no living subject`
    )
  }

  const created = await db.transaction(async (tx) => {
    const inserted = await tx
      .insert(orders)
      .values({
        userId: subject.userId,
        organizationId: subject.organizationId,
        planId: input.planId,
        orderType: 'one_time',
        status: 'completed',
        creditsGranted: input.credits,
        amountTotal: input.amountTotal,
        amountSubtotal: input.amountSubtotal ?? null,
        amountDiscount: input.amountDiscount ?? 0,
        amountTax: input.amountTax ?? 0,
        currency: input.currency,
        provider: input.provider,
        providerOrderId: input.providerOrderId,
        providerPaymentId: input.providerPaymentId ?? null,
        metadata: input.metadata ?? null,
      })
      .onConflictDoNothing({
        target: [orders.provider, orders.providerOrderId],
      })
      .returning({ id: orders.id })

    let orderId = inserted[0]?.id
    if (!orderId) {
      // Idempotency-key conflict: usually a duplicate delivery (already
      // completed, short-circuit). The one exception is a pending trace row
      // awaiting settlement — promote it in place and fill in the real
      // post-settlement amounts / payment handles. The settled event's amounts
      // outrank the estimate recorded when the row was created.
      const [promoted] = await tx
        .update(orders)
        .set({
          status: 'completed',
          creditsGranted: input.credits,
          amountTotal: input.amountTotal,
          amountSubtotal: input.amountSubtotal ?? null,
          amountDiscount: input.amountDiscount ?? 0,
          amountTax: input.amountTax ?? 0,
          currency: input.currency,
          providerPaymentId: input.providerPaymentId ?? null,
          metadata: input.metadata ?? null,
        })
        .where(
          and(
            eq(orders.provider, input.provider),
            eq(orders.providerOrderId, input.providerOrderId),
            eq(orders.status, 'pending')
          )
        )
        .returning({ id: orders.id })

      // Already fulfilled — idempotent replay, nothing to do.
      if (!promoted) return false
      orderId = promoted.id
    }

    await grantPurchasedCredits(
      {
        userId: subject.userId,
        organizationId: subject.organizationId,
        amount: input.credits,
        orderId,
        note: `Credit pack purchase (${input.planId})`,
      },
      tx
    )
    return true
  })

  // Notify only after the transaction commits; replays never ping the channel.
  if (created) {
    after(() =>
      notifyNewOrder({
        orderType: 'one_time',
        planId: input.planId,
        creditsGranted: input.credits,
        amountTotal: input.amountTotal,
        currency: input.currency,
        userId: subject.userId ?? '(deleted user)',
      })
    )
  }

  return { created }
}

/**
 * Trace for an in-flight one-time payment (PayPal eCheck and the like: capture
 * accepted, not settled): write one order row with status='pending' and 0
 * credits — visible to the user in my-orders, queryable in the admin,
 * traceable by the reconcile cron, so the money never goes missing even when
 * both the webhook and the success page are lost. Credits are never granted
 * here (grant only once the money lands); the settlement event promotes the
 * row in place via fulfillOneTimePurchase, and a denial is marked 'failed' by
 * the adapter. Idempotent: if a completed row landed first, this insert
 * silently yields.
 */
export async function recordPendingOneTimePurchase(
  input: OneTimePaymentInput
): Promise<{ created: boolean }> {
  const { subject } = input
  if (!subject.userId && !subject.organizationId) {
    // An in-flight payment with no living subject has no account to hang on
    // — the route-side Discord alert still fires; here we only skip the
    // trace, never block the synchronous response.
    console.warn(
      `recordPendingOneTimePurchase(${input.provider}/${input.providerOrderId}): no living subject, skipping local trace`
    )
    return { created: false }
  }

  const inserted = await db
    .insert(orders)
    .values({
      userId: subject.userId,
      organizationId: subject.organizationId,
      planId: input.planId,
      orderType: 'one_time',
      status: 'pending',
      creditsGranted: 0,
      amountTotal: input.amountTotal,
      amountSubtotal: input.amountSubtotal ?? null,
      amountDiscount: input.amountDiscount ?? 0,
      amountTax: input.amountTax ?? 0,
      currency: input.currency,
      provider: input.provider,
      providerOrderId: input.providerOrderId,
      providerPaymentId: input.providerPaymentId ?? null,
      metadata: input.metadata ?? null,
    })
    .onConflictDoNothing({
      target: [orders.provider, orders.providerOrderId],
    })
    .returning({ id: orders.id })

  return { created: inserted.length > 0 }
}

// ----------------------------------------------------------------------------
// Subscription lifecycle
// ----------------------------------------------------------------------------

/**
 * Subscription status upsert. Never touches the drip counters
 * (remainingGrants/nextGrantAt) — those belong to the payment-fulfillment and
 * the refund/termination paths. A deleted purchaser (userId null) still syncs:
 * the subscription row is financial history, and aborting the sync would
 * freeze the local row at its pre-deletion state.
 *
 * Out-of-order defense: webhooks carry no delivery-order guarantee (Stripe
 * says so explicitly, and 5xx retries widen the window further), so an updated
 * event queued before the cancellation can arrive after the deleted one. A
 * terminal state is irreversible on the provider side, so once the local row
 * is canceled/expired a late write carrying a live status is skipped wholesale
 * (DO UPDATE ... WHERE); terminal over terminal still applies — backfilling
 * endedAt and similar fields must take effect.
 */
export async function syncSubscription(
  input: SubscriptionSyncInput
): Promise<void> {
  const values = {
    userId: input.subject.userId,
    organizationId: input.subject.organizationId,
    planId: input.planId,
    providerCustomerId: input.providerCustomerId ?? null,
    providerPriceId: input.providerPriceId ?? null,
    status: input.status satisfies CanonicalSubscriptionStatus,
    interval: input.interval,
    currentPeriodStart: input.currentPeriodStart ?? null,
    currentPeriodEnd: input.currentPeriodEnd ?? null,
    cancelAtPeriodEnd: input.cancelAtPeriodEnd ?? false,
    canceledAt: input.canceledAt ?? null,
    endedAt: input.endedAt ?? null,
    monthlyCredits: input.monthlyCredits,
    ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
  }

  const incomingIsTerminal = TERMINAL_SUBSCRIPTION_STATUSES.includes(
    input.status
  )

  await db
    .insert(subscriptions)
    .values({
      ...values,
      provider: input.provider,
      providerSubscriptionId: input.providerSubscriptionId,
    })
    .onConflictDoUpdate({
      target: [subscriptions.provider, subscriptions.providerSubscriptionId],
      set: values,
      // A live status must not overwrite a terminal row; terminal input
      // passes unconditionally.
      ...(incomingIsTerminal
        ? {}
        : {
            setWhere: notInArray(
              subscriptions.status,
              TERMINAL_SUBSCRIPTION_STATUSES
            ),
          }),
    })
}

/**
 * Subscription payment fulfillment: sync the subscription row, write the order
 * idempotently, reset subscription credits; a yearly plan initializes the drip
 * in the same transaction (this order is month 1, the schedule covers the
 * other 11 months).
 * Proration / plan-change invoices must not reach this function — the caller
 * filters them out.
 *
 * Single-subscription invariant (defense #2): the checkout guard is
 * check-then-act and cannot stop "open a session, buy elsewhere, then come
 * back and pay the old session" (a Stripe session stays payable for ~24h;
 * defense #1 expires stale sessions on the checkout side as best it can).
 * Here it is enforced where the money lands: inside a subject-level advisory
 * xact lock, **the first order to land wins** — when a live sibling
 * subscription already has an order, this payment is judged a duplicate:
 * write a 0-credit order (the money must leave a trace so the refund
 * write-back has somewhere to go), set this subscription row to canceled
 * inside the lock (never two live rows within the concurrency window), and
 * return the winner as duplicate — the adapter handles the provider-side
 * cancel + automatic refund (idempotency key = providerOrderId) + alert. The
 * verdict rests on order existence, not on subscription-row status: a row that
 * has only been synced is not a winner, and two concurrent initial payments,
 * serialized by the lock, produce exactly one winner and one loser — never
 * two refunds, never two live subscriptions. A replay (the order already
 * exists) restates the first verdict: a legitimate order is never overturned
 * into a duplicate.
 */
export async function fulfillSubscriptionPayment(
  input: SubscriptionPaymentInput
): Promise<{ created: boolean; duplicate: SubscriptionRef | null }> {
  const sub = input.subscription
  const { subject } = sub

  await syncSubscription(sub)

  // A paid personal invoice must have a living user (personal buckets cascade
  // away with the account — nowhere to grant); the org pool outlives the
  // purchaser, so a null userId with an organization subject still fulfills.
  // Permanent: a deleted account never comes back — alert + ack, not 5xx.
  if (!subject.userId && !subject.organizationId) {
    throw new PermanentFulfillmentError(
      `Cannot fulfill subscription payment ${sub.provider}/${input.providerOrderId}: purchaser deleted and no organization subject`
    )
  }

  const periodStart = input.periodStart ?? new Date()

  const result = await db.transaction(async (tx) => {
    // Subject-level serialization: subscription fulfillments for the same
    // subject (across providers) pass the gate one at a time, and the verdict
    // is read and written only inside the lock.
    const subjectKey = subject.organizationId
      ? `org:${subject.organizationId}`
      : `user:${subject.userId}`
    await tx.execute(
      sql`select pg_advisory_xact_lock(hashtext(${'sub-fulfill-' + subjectKey}))`
    )

    // Replay short-circuit: this payment has already been fulfilled (normally
    // or as a duplicate) — restate that verdict. It comes before the winner
    // check: otherwise a single webhook redelivery could overturn an already
    // granted, legitimate subscription into a duplicate and refund the user's
    // money.
    const [replay] = await tx
      .select({ metadata: orders.metadata })
      .from(orders)
      .where(
        and(
          eq(orders.provider, sub.provider),
          eq(orders.providerOrderId, input.providerOrderId)
        )
      )
      .limit(1)
    if (replay) {
      return {
        created: false,
        duplicate: duplicateFromOrderMetadata(replay.metadata),
      }
    }

    const winner = await findFulfilledSibling(tx, sub)

    if (winner) {
      const now = new Date()
      const inserted = await tx
        .insert(orders)
        .values({
          userId: subject.userId,
          organizationId: subject.organizationId,
          planId: sub.planId,
          orderType: input.orderType,
          status: 'completed',
          // A duplicate order grants no credits — the proportional clawback
          // on refund is then always 0 and the credit buckets never move
          creditsGranted: 0,
          amountTotal: input.amountTotal,
          amountSubtotal: input.amountSubtotal ?? null,
          amountDiscount: input.amountDiscount ?? 0,
          amountTax: input.amountTax ?? 0,
          currency: input.currency,
          provider: sub.provider,
          providerOrderId: input.providerOrderId,
          providerPaymentId: input.providerPaymentId ?? null,
          providerSubscriptionId: sub.providerSubscriptionId,
          metadata: {
            ...(input.metadata ?? {}),
            duplicateSubscription: true,
            winnerProvider: winner.provider,
            winnerProviderSubscriptionId: winner.providerSubscriptionId,
          },
        })
        .onConflictDoNothing({
          target: [orders.provider, orders.providerOrderId],
        })
        .returning({ id: orders.id })

      // Set canceled inside the lock: at no moment after the commit does this
      // row present itself as live; the provider-side cancel/refund are
      // network calls, done by the adapter outside the transaction.
      await tx
        .update(subscriptions)
        .set({
          status: 'canceled',
          canceledAt: now,
          endedAt: now,
          remainingGrants: 0,
          nextGrantAt: null,
        })
        .where(subscriptionKey(sub.provider, sub.providerSubscriptionId))

      return { created: inserted.length > 0, duplicate: winner }
    }

    const inserted = await tx
      .insert(orders)
      .values({
        userId: subject.userId,
        organizationId: subject.organizationId,
        planId: sub.planId,
        orderType: input.orderType,
        status: 'completed',
        creditsGranted: sub.monthlyCredits,
        amountTotal: input.amountTotal,
        amountSubtotal: input.amountSubtotal ?? null,
        amountDiscount: input.amountDiscount ?? 0,
        amountTax: input.amountTax ?? 0,
        currency: input.currency,
        provider: sub.provider,
        providerOrderId: input.providerOrderId,
        providerPaymentId: input.providerPaymentId ?? null,
        providerSubscriptionId: sub.providerSubscriptionId,
        metadata: input.metadata ?? null,
      })
      .onConflictDoNothing({
        target: [orders.provider, orders.providerOrderId],
      })
      .returning({ id: orders.id })

    // Invoice already fulfilled — idempotent replay.
    if (inserted.length === 0) return { created: false, duplicate: null }

    // Yearly plans drip monthly: this grant covers month 1, the schedule
    // covers the remaining 11. Monthly plans have no schedule.
    // Month-end clamping keeps the anniversary day (bought on the 31st →
    // 2/28, not 3/3); every later period is derived by the settlement
    // primitives from "period anchor + month index", never by chaining, so it
    // cannot drift.
    const isYearly = sub.interval === 'year'
    await tx
      .update(subscriptions)
      .set({
        remainingGrants: isYearly ? 11 : 0,
        nextGrantAt: isYearly ? addMonthsClamped(periodStart, 1) : null,
      })
      .where(subscriptionKey(sub.provider, sub.providerSubscriptionId))

    await resetSubscriptionCredits(
      {
        userId: subject.userId,
        organizationId: subject.organizationId,
        amount: sub.monthlyCredits,
        orderId: inserted[0].id,
        note: `Subscription ${input.orderType === 'subscription_initial' ? 'started' : 'renewed'} (${sub.planId})`,
      },
      tx
    )
    return { created: true, duplicate: null }
  })

  if (result.created && !result.duplicate) {
    after(() =>
      notifyNewOrder({
        orderType: input.orderType,
        planId: sub.planId,
        creditsGranted: sub.monthlyCredits,
        amountTotal: input.amountTotal,
        currency: input.currency,
        userId: subject.userId ?? '(deleted user)',
      })
    )
  }

  return result
}

/**
 * The sibling that was fulfilled first: same subject, ENTITLED, and already
 * carrying a subscription order that is not fully refunded. "Has an order" is
 * the heart of the verdict — a row that has only been synced is not a winner
 * (its money is not processed yet, and when its turn to fulfill comes it will
 * see our order and judge itself the duplicate); a duplicate order is itself a
 * 0-credit order whose subscription row is set canceled in the same
 * transaction, so it can never become a winner in reverse. Detection spans
 * providers: each plan has one provider, so duplicate subscriptions may well
 * belong to two different ones.
 */
async function findFulfilledSibling(
  tx: DbTransaction,
  sub: SubscriptionSyncInput
): Promise<SubscriptionRef | null> {
  const { subject } = sub
  const subjectPredicate = subject.organizationId
    ? eq(subscriptions.organizationId, subject.organizationId)
    : subject.userId
      ? and(
          eq(subscriptions.userId, subject.userId),
          isNull(subscriptions.organizationId)
        )
      : null
  if (!subjectPredicate) return null

  const [winner] = await tx
    .select({
      provider: subscriptions.provider,
      providerSubscriptionId: subscriptions.providerSubscriptionId,
    })
    .from(subscriptions)
    .where(
      and(
        subjectPredicate,
        inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES),
        not(
          and(
            eq(subscriptions.provider, sub.provider),
            eq(subscriptions.providerSubscriptionId, sub.providerSubscriptionId)
          )!
        ),
        exists(
          tx
            .select({ id: orders.id })
            .from(orders)
            .where(
              and(
                eq(orders.provider, subscriptions.provider),
                eq(
                  orders.providerSubscriptionId,
                  subscriptions.providerSubscriptionId
                ),
                inArray(orders.orderType, [
                  'subscription_initial',
                  'subscription_renewal',
                  'subscription_upgrade',
                ]),
                ne(orders.status, 'refunded')
              )
            )
        )
      )
    )
    .limit(1)

  return winner
    ? {
        provider: winner.provider as PaymentProvider,
        providerSubscriptionId: winner.providerSubscriptionId,
      }
    : null
}

/** On replay, recover the winner ref from a duplicate order's metadata (a normal order returns null). */
function duplicateFromOrderMetadata(
  metadata: unknown
): SubscriptionRef | null {
  const m = metadata as Record<string, unknown> | null
  if (!m || m.duplicateSubscription !== true) return null
  const provider = m.winnerProvider
  const id = m.winnerProviderSubscriptionId
  return typeof provider === 'string' && typeof id === 'string'
    ? { provider: provider as PaymentProvider, providerSubscriptionId: id }
    : null
}

// ----------------------------------------------------------------------------
// Mid-cycle plan change (paid proration)
// ----------------------------------------------------------------------------

/** Fallback window width when the grant window cannot be derived (31 days ≥ any monthly grant window). */
const GRANT_WINDOW_FALLBACK_MS = 31 * 24 * 60 * 60 * 1000

/**
 * Start of the current grant window (the lower bound of the high-water sum):
 * monthly = the billing period start; yearly = the period anchor advanced by
 * calendar months to the start of the drip month containing now
 * (addMonthsClamped, the same algorithm as the drip schedule — it does not
 * depend on the remainingGrants counter, so a lagging cron still points at the
 * real current month). A missing anchor, or one in the future (an
 * out-of-order corner case), returns null and the caller falls back to a
 * 31-day window.
 */
function grantWindowStartAt(
  interval: 'month' | 'year',
  anchor: Date | null,
  now: Date
): Date | null {
  if (!anchor || anchor > now) return null
  if (interval === 'month') return anchor
  let start = anchor
  for (let k = 1; k < 12; k++) {
    const next = addMonthsClamped(anchor, k)
    if (next > now) break
    start = next
  }
  return start
}

/**
 * Remaining-time fraction of the new grant window, clamped to [0,1]. The
 * monthly window is the billing period itself; a yearly drip grants monthly,
 * so its window is the current drip month reached by advancing the period
 * anchor by calendar months. Missing period data yields 1 — the money is
 * already collected, so we would rather top up for a whole window (the
 * high-water cap still applies) than silently swallow a paid upgrade.
 */
function remainingWindowFraction(
  interval: 'month' | 'year',
  periodStart: Date | null,
  periodEnd: Date | null,
  now: Date
): number {
  if (!periodStart) return 1
  let start = periodStart
  let end = periodEnd
  if (interval === 'year') {
    for (let k = 0; k < 12; k++) {
      const monthStart = addMonthsClamped(periodStart, k)
      const monthEnd = addMonthsClamped(periodStart, k + 1)
      if (now < monthEnd) {
        start = monthStart
        end = monthEnd
        break
      }
    }
  }
  if (!end || end <= start) return 1
  const fraction =
    (end.getTime() - now.getTime()) / (end.getTime() - start.getTime())
  return Math.min(1, Math.max(0, fraction))
}

/**
 * Mid-cycle plan-change fulfillment (proration invoice, e.g. Stripe
 * billing_reason=subscription_update): sync the subscription row, write the
 * order idempotently, and top the subscription bucket up by
 * **high-water × time fraction** —
 *
 *   delta = round(max(0, new plan's monthly credits - credits already granted
 *                        in the window) × remaining-time fraction of window)
 *
 * The bucket is never reset. The high-water mark (derived from the ledger, so
 * no old-plan baseline is needed — naturally immune to webhook reordering)
 * plays two roles: it is both the baseline of the upgrade difference and the
 * anti-farming cap; the time fraction keeps the grant strictly commensurate
 * with the prorated charge. With both defenses conjoined:
 *   - flip-flopping between plans (a downgrade's credit balance offsets the
 *     next upgrade invoice → ~0 actually paid) farms no credits: the window's
 *     cumulative grants stay ≤ the highest plan's monthly credits ever
 *     reached, so a second upgrade's delta is always 0;
 *   - a cheap end-of-period upgrade cannot skim a whole month's difference:
 *     only the fraction matching the remaining time is granted.
 * A downgrade neither grants nor claws back (the high-water mark does not
 * fall), and the next period's invoice resets it naturally. There is no
 * amount-paid threshold: a 0-cost upgrade fully offset by credit balance is
 * topped up like any other (the high-water mark already makes it safe).
 *
 * Cross-interval plan change (month ↔ year): the payment re-based the
 * billing period — a yearly target re-anchors the drip (this order is the
 * first month's delta, 11 periods go into the schedule), a monthly target
 * clears the drip. A same-interval yearly upgrade does not touch the drip:
 * later settlements read monthlyCredits off the subscription row, which sync
 * has already updated, so they grant the new allowance automatically.
 *
 * A subscription already settled as a duplicate (locally terminal) keeps only
 * the trace of the money (a 0-credit order) and grants nothing further; a
 * proration invoice with 0 amount and 0 delta (a pure downgrade or lateral
 * move) has neither money nor credits, so no order is written.
 */
export async function fulfillSubscriptionUpgrade(
  input: SubscriptionUpdatePaymentInput
): Promise<{ created: boolean; creditsGranted: number }> {
  const sub = input.subscription
  const { subject } = sub

  // Read the old local row first: the old interval and old period anchor
  // define the high-water window — every pre-upgrade grant happened inside
  // the old window structure, and sync is about to overwrite both fields.
  const [before] = await db
    .select({
      interval: subscriptions.interval,
      currentPeriodStart: subscriptions.currentPeriodStart,
    })
    .from(subscriptions)
    .where(subscriptionKey(sub.provider, sub.providerSubscriptionId))
    .limit(1)

  await syncSubscription(sub)

  // Wholly empty subject (purchaser deleted, no organization): money actually
  // paid has nowhere to be granted and nothing to belong to — a permanent
  // error, the route alerts then acks; a 0-amount proration invoice has no
  // money to record, so the sync alone completes it.
  if (!subject.userId && !subject.organizationId) {
    if (input.amountTotal <= 0) return { created: false, creditsGranted: 0 }
    throw new PermanentFulfillmentError(
      `Cannot fulfill subscription upgrade ${sub.provider}/${input.providerOrderId}: purchaser deleted and no organization subject`
    )
  }

  const result = await db.transaction(async (tx) => {
    // The same subject lock as initial/renewal payments: upgrades serialize
    // with every other fulfillment, leaving no concurrency gap between reading
    // the window's high-water mark and writing the delta.
    const subjectKey = subject.organizationId
      ? `org:${subject.organizationId}`
      : `user:${subject.userId}`
    await tx.execute(
      sql`select pg_advisory_xact_lock(hashtext(${'sub-fulfill-' + subjectKey}))`
    )

    // Replay short-circuit: this payment has already been fulfilled.
    const [replay] = await tx
      .select({ id: orders.id })
      .from(orders)
      .where(
        and(
          eq(orders.provider, sub.provider),
          eq(orders.providerOrderId, input.providerOrderId)
        )
      )
      .limit(1)
    if (replay) return { created: false, creditsGranted: 0 }

    const [current] = await tx
      .select({ status: subscriptions.status })
      .from(subscriptions)
      .where(subscriptionKey(sub.provider, sub.providerSubscriptionId))
      .limit(1)
    const terminal =
      current != null &&
      (TERMINAL_SUBSCRIPTION_STATUSES as string[]).includes(current.status)

    // The high-water window comes from the old row (every pre-upgrade grant
    // happened inside the old window structure); no local row / a broken
    // anchor → fall back to a 31-day window. A wider window grants less, a
    // narrower one never over-grants; neither breaks the invariant.
    const now = new Date()
    const windowStart =
      (before
        ? grantWindowStartAt(before.interval, before.currentPeriodStart, now)
        : null) ?? new Date(now.getTime() - GRANT_WINDOW_FALLBACK_MS)

    const alreadyGranted = await sumSubscriptionGrantsSince(
      { userId: subject.userId, organizationId: subject.organizationId },
      windowStart,
      tx
    )
    // High-water delta × the new window's remaining-time fraction — see the
    // conjoined defenses in the header comment.
    const creditsGranted = terminal
      ? 0
      : Math.round(
          Math.max(0, sub.monthlyCredits - alreadyGranted) *
            remainingWindowFraction(
              sub.interval,
              sub.currentPeriodStart ?? null,
              sub.currentPeriodEnd ?? null,
              now
            )
        )

    // No money and no credits (the 0-amount proration invoice of a pure
    // downgrade or lateral move): the sync is done, there is no order to write.
    if (input.amountTotal <= 0 && creditsGranted <= 0) {
      return { created: false, creditsGranted: 0 }
    }

    const inserted = await tx
      .insert(orders)
      .values({
        userId: subject.userId,
        organizationId: subject.organizationId,
        planId: sub.planId,
        orderType: 'subscription_upgrade',
        status: 'completed',
        creditsGranted,
        amountTotal: input.amountTotal,
        amountSubtotal: input.amountSubtotal ?? null,
        amountDiscount: input.amountDiscount ?? 0,
        amountTax: input.amountTax ?? 0,
        currency: input.currency,
        provider: sub.provider,
        providerOrderId: input.providerOrderId,
        providerPaymentId: input.providerPaymentId ?? null,
        providerSubscriptionId: sub.providerSubscriptionId,
        metadata: input.metadata ?? null,
      })
      .onConflictDoNothing({
        target: [orders.provider, orders.providerOrderId],
      })
      .returning({ id: orders.id })

    // A concurrent replay caught by the unique constraint (e.g. another
    // provider instance outside this advisory lock).
    if (inserted.length === 0) return { created: false, creditsGranted: 0 }

    if (creditsGranted > 0) {
      await grantSubscriptionUpgradeCredits(
        {
          userId: subject.userId,
          organizationId: subject.organizationId,
          amount: creditsGranted,
          orderId: inserted[0].id,
          note: `Subscription upgraded mid-cycle (${sub.planId})`,
        },
        tx
      )
    }

    // A cross-interval plan change re-based the billing period: the drip is
    // re-anchored / cleared with it (terminal rows excepted; with no local row
    // `before` is empty and we treat it as "came from monthly" — a yearly
    // target must get a drip).
    if (!terminal && (before?.interval ?? 'month') !== sub.interval) {
      const isYearly = sub.interval === 'year'
      const periodStart = sub.currentPeriodStart ?? now
      await tx
        .update(subscriptions)
        .set({
          remainingGrants: isYearly ? 11 : 0,
          nextGrantAt: isYearly ? addMonthsClamped(periodStart, 1) : null,
        })
        .where(subscriptionKey(sub.provider, sub.providerSubscriptionId))
    }

    return { created: true, creditsGranted }
  })

  if (result.created) {
    after(() =>
      notifyNewOrder({
        orderType: 'subscription_upgrade',
        planId: sub.planId,
        creditsGranted: result.creditsGranted,
        amountTotal: input.amountTotal,
        currency: input.currency,
        userId: subject.userId ?? '(deleted user)',
      })
    )
  }

  return result
}

/** Terminal fields optionally backfilled when a subscription ends (a fallback for a failed adapter sync). */
export interface SubscriptionEndPatch {
  status?: CanonicalSubscriptionStatus
  canceledAt?: Date | null
  endedAt?: Date | null
  cancelAtPeriodEnd?: boolean
}

/**
 * Subscription ended: write the terminal state, stop the drip, and clear the
 * subscription bucket when the subject has no other live subscription. The
 * subject is taken from the local subscription row — no local row means this
 * system never granted credits for it, so there is nothing to do.
 */
export async function handleSubscriptionEnded(
  provider: PaymentProvider,
  providerSubscriptionId: string,
  patch: SubscriptionEndPatch = {}
): Promise<void> {
  const key = subscriptionKey(provider, providerSubscriptionId)

  const [row] = await db
    .select({
      id: subscriptions.id,
      userId: subscriptions.userId,
      organizationId: subscriptions.organizationId,
    })
    .from(subscriptions)
    .where(key)
    .limit(1)
  if (!row) return

  await db
    .update(subscriptions)
    .set({
      status: patch.status ?? 'canceled',
      ...(patch.canceledAt !== undefined ? { canceledAt: patch.canceledAt } : {}),
      ...(patch.endedAt !== undefined ? { endedAt: patch.endedAt } : {}),
      ...(patch.cancelAtPeriodEnd !== undefined
        ? { cancelAtPeriodEnd: patch.cancelAtPeriodEnd }
        : {}),
      remainingGrants: 0,
      nextGrantAt: null,
    })
    .where(key)

  // The subject predicate doubles as the guard: the org pool outlives the
  // purchaser, so a null userId must still clear it (the ledger's row-driven
  // primitives accept userId null by design). For a personal subject a
  // deleted purchaser has no bucket left to clear (credit_balances cascade
  // away with the account) — return.
  const subjectPredicate = row.organizationId
    ? eq(subscriptions.organizationId, row.organizationId)
    : row.userId
      ? and(
          eq(subscriptions.userId, row.userId),
          isNull(subscriptions.organizationId)
        )
      : null
  if (!subjectPredicate) return

  // The credit bucket is per-subject but this event is per-subscription:
  // if the subject still has another live subscription (e.g. the plan was
  // replaced and the old subscription's deletion arrives late), the bucket
  // now belongs to that subscription's grants — leave it alone. "Live" is
  // the ENTITLED set: a past_due sibling keeps its dunning entitlements.
  const [otherLiveSub] = await db
    .select({ id: subscriptions.id })
    .from(subscriptions)
    .where(
      and(
        subjectPredicate,
        ne(subscriptions.id, row.id),
        inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES)
      )
    )
    .limit(1)

  if (!otherLiveSub) {
    await clearSubscriptionCredits({
      userId: row.userId,
      organizationId: row.organizationId,
      note: `Subscription ${providerSubscriptionId} ended`,
    })
  }
}

// ----------------------------------------------------------------------------
// Refunds
// ----------------------------------------------------------------------------

/**
 * Refund: locate the original order (by providerOrderId first, then
 * providerPaymentId) and advance it under a row lock by the cumulative
 * refunded amount (refunds never create rows), clawing credits back
 * proportionally (one_time → purchased bucket, subscription → subscription
 * bucket, clamped at 0). A full refund of a subscription order stops the drip
 * and returns the subscription id to the adapter for the provider-side cancel
 * — the core never calls a provider API. orderFound=false means no such order
 * exists locally — the core does not rule on how to handle that (late
 * bookkeeping vs. a foreign event); the adapter decides whether to swallow it
 * or throw and retry.
 */
export async function applyRefund(input: RefundInput): Promise<{
  orderFound: boolean
  fullRefundOfSubscription: boolean
  providerSubscriptionId: string | null
}> {
  const locator = input.providerOrderId
    ? eq(orders.providerOrderId, input.providerOrderId)
    : input.providerPaymentId
      ? eq(orders.providerPaymentId, input.providerPaymentId)
      : null
  if (!locator) {
    console.warn(
      `applyRefund(${input.provider}): neither providerOrderId nor providerPaymentId given`
    )
    return {
      orderFound: false,
      fullRefundOfSubscription: false,
      providerSubscriptionId: null,
    }
  }

  const [existing] = await db
    .select({ id: orders.id })
    .from(orders)
    .where(and(eq(orders.provider, input.provider), locator))
    .limit(1)

  if (!existing) {
    console.warn(
      `applyRefund(${input.provider}): no order found for ${input.providerOrderId ?? input.providerPaymentId}`
    )
    return {
      orderFound: false,
      fullRefundOfSubscription: false,
      providerSubscriptionId: null,
    }
  }

  const refundedTotal = input.amountRefunded
  let fullyRefundedSubscriptionId: string | null = null

  await db.transaction(async (tx) => {
    // Row lock serializes concurrent refund events for the same order, so
    // cumulative refunded amounts are applied in a consistent order and no
    // event's clawback is ever dropped.
    const [order] = await tx
      .select()
      .from(orders)
      .where(eq(orders.id, existing.id))
      .for('update')

    if (!order || refundedTotal <= order.amountRefunded) return // replay/stale

    const isFullRefund = refundedTotal >= order.amountTotal
    const refundDelta = refundedTotal - order.amountRefunded
    const creditsToRevoke =
      order.amountTotal > 0
        ? Math.round((order.creditsGranted * refundDelta) / order.amountTotal)
        : 0

    await tx
      .update(orders)
      .set({
        amountRefunded: refundedTotal,
        status: isFullRefund ? 'refunded' : 'partially_refunded',
        refundedAt: new Date(),
      })
      .where(eq(orders.id, order.id))

    // Subject fully empty = a personal order whose purchaser deleted their
    // account (userId SET NULL): the balance rows cascaded away, so there is
    // nothing to claw back — record the refund facts and never let the
    // webhook fail over a ghost subject. The order row's organizationId
    // routes an org order's clawback to the shared pool even after the
    // purchaser is gone.
    const hasRevokeSubject = order.userId || order.organizationId
    if (creditsToRevoke > 0 && hasRevokeSubject) {
      await revokeCreditsForRefund(
        {
          userId: order.userId,
          organizationId: order.organizationId,
          amount: creditsToRevoke,
          bucket: order.orderType === 'one_time' ? 'purchased' : 'subscription',
          orderId: order.id,
          note: `Refund of ${refundDelta} ${order.currency.toUpperCase()} (order ${order.id})`,
        },
        tx
      )
    }

    // Fully refunding one subscription **period** (an initial/renewal order)
    // means this period's money was not collected: stop the yearly drip and
    // hand the subscription id back to the adapter for the provider-side
    // cancel.
    //
    // A proration upgrade order (subscription_upgrade) is **not** in this set:
    // refunding the difference only claws back the incremental credits granted
    // above; the provider-side plan does not roll back with it, and the
    // underlying subscription still bills at the new plan — cancelling here
    // would cut off a service the user is still paying for. To undo an upgrade
    // and drop back to the old plan, change the plan in the provider's portal,
    // not via a refund.
    if (
      isFullRefund &&
      (order.orderType === 'subscription_initial' ||
        order.orderType === 'subscription_renewal') &&
      order.providerSubscriptionId
    ) {
      await tx
        .update(subscriptions)
        .set({ remainingGrants: 0, nextGrantAt: null })
        .where(
          subscriptionKey(input.provider, order.providerSubscriptionId)
        )
      fullyRefundedSubscriptionId = order.providerSubscriptionId
    }
  })

  return {
    orderFound: true,
    fullRefundOfSubscription: fullyRefundedSubscriptionId !== null,
    providerSubscriptionId: fullyRefundedSubscriptionId,
  }
}
