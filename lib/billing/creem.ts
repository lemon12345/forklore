/**
 * [INPUT]: Depends on @/lib/creem/client for retrieveCreemCheckoutSession/
 *          retrieveCreemSubscription/refundCreemTransaction,
 *          @/lib/creem/types for the entity types (official SDK camelCase
 *          shapes), @/config/pricing for plan resolution (getPlanById/
 *          findPlanByProviderPriceId/isSubscriptionPlan/getPlanCredits),
 *          ./fulfillment for the provider-agnostic core, ./cancel for the
 *          provider-side cancel funnel, ./duplicate for duplicate-subscription
 *          settlement (injected with a Creem refund closure),
 *          @/lib/discord/notifications for notifyDispute,
 *          @/lib/db and schema for the orders/user tables
 * [OUTPUT]: Exports mapCreemSubscriptionStatus, resolveCreemSubject,
 *           fulfillCreemCheckout, fulfillCreemCheckoutById,
 *           fulfillCreemSubscriptionPaid, syncCreemSubscription,
 *           handleCreemSubscriptionEnded, applyCreemRefund,
 *           handleCreemDispute, reconcileCreemSubscription
 * [POS]: The Creem adapter of lib/billing — the only fulfillment file where
 *        Creem payload types appear: it translates the Creem objects pulled
 *        from webhooks / the success page / reconciliation into ./types inputs
 *        and calls the core; Creem amounts are already integer cents and are
 *        always passed through untouched, never converted;
 *        idempotency keys: one-time = creem order id, subscription = creem
 *        transaction id; the sole writer of user.creemCustomerId (pinned on
 *        first sight); Creem-side cancels for full refunds / superseded
 *        subscriptions go through ./cancel, duplicate refunds through
 *        POST /v1/refunds (full amount only) — the core never calls back into
 *        a provider API
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import {
  findPlanByProviderPriceId,
  getPlanById,
  getPlanCredits,
  isSubscriptionPlan,
  type PricingPlan,
  type SubscriptionPlan,
} from '@/config/pricing';
import {
  refundCreemTransaction,
  retrieveCreemCheckoutSession,
  retrieveCreemSubscription,
} from '@/lib/creem/client';
import type {
  CreemCheckout,
  CreemDispute,
  CreemRefund,
  CreemSubscription,
  CreemTransaction,
} from '@/lib/creem/types';
import { db } from '@/lib/db';
import { orders, user as userSchema } from '@/lib/db/schema';
import { notifyDispute } from '@/lib/discord/notifications';
import { and, eq, isNull, ne } from 'drizzle-orm';
import { cancelProviderSubscription } from './cancel';
import { settleDuplicateSubscription } from './duplicate';
import {
  applyRefund,
  fulfillOneTimePurchase,
  fulfillSubscriptionPayment,
  handleSubscriptionEnded,
  PermanentFulfillmentError,
  resolveSubject,
  syncSubscription,
} from './fulfillment';
import type {
  BillingSubject,
  CanonicalSubscriptionStatus,
  SubscriptionSyncInput,
} from './types';

// ============================================================================
// Status mapping — Creem's vocabulary is close to canonical. The one policy
// call: 'scheduled_cancel' means "still entitled until period end", so it
// normalizes to 'active' (cancelAtPeriodEnd carries the scheduling fact).
// Anything unknown degrades to 'incomplete' — never entitled by accident.
// ============================================================================

export function mapCreemSubscriptionStatus(
  creemStatus: string
): CanonicalSubscriptionStatus {
  switch (creemStatus) {
    case 'active':
    case 'trialing':
    case 'past_due':
    case 'unpaid':
    case 'canceled':
    case 'expired':
    case 'paused':
      return creemStatus
    case 'scheduled_cancel':
      return 'active'
    default:
      return 'incomplete'
  }
}

// ----------------------------------------------------------------------------
// Payload helpers — the SDK inlines related objects on webhooks but may ship
// bare ids on API reads; every accessor below tolerates both shapes.
// ----------------------------------------------------------------------------

function toDate(value: Date | null | undefined): Date | null {
  if (!value) return null
  return Number.isNaN(value.getTime()) ? null : value
}

/** Creem transaction period stamps are epoch numbers; seconds and ms both occur. */
function epochToDate(value: number | null | undefined): Date | null {
  if (!value) return null
  return new Date(value > 1e12 ? value : value * 1000)
}

function idOf(value: string | { id: string } | null | undefined): string | null {
  if (!value) return null
  return typeof value === 'string' ? value : (value.id ?? null)
}

function objectOf<T extends { id: string }>(
  value: T | string | null | undefined
): T | null {
  return value && typeof value === 'object' ? value : null
}

/** metadata.planId wins; falls back to a reverse lookup by Creem product id (both the test and live columns are matched). */
function resolveCreemPlan(params: {
  metadata?: Record<string, unknown> | null
  productId?: string | null
}): PricingPlan | null {
  const { metadata, productId } = params
  const fromMetadata =
    typeof metadata?.planId === 'string' ? getPlanById(metadata.planId) : undefined
  if (fromMetadata) return fromMetadata
  const fromProduct = productId
    ? findPlanByProviderPriceId('creem', productId)
    : undefined
  return fromProduct ?? null
}

/**
 * metadata {userId, planId, organizationId} is pinned onto the Creem checkout
 * by the checkout action and propagates onto the subscription object; existence
 * is validated level by level by the core's resolveSubject (ghost ids → null).
 */
export async function resolveCreemSubject(
  metadata: Record<string, unknown> | null | undefined
): Promise<BillingSubject> {
  return resolveSubject({
    userId: typeof metadata?.userId === 'string' ? metadata.userId : null,
    organizationId:
      typeof metadata?.organizationId === 'string'
        ? metadata.organizationId
        : null,
  })
}

/**
 * First sight of a Creem customer id pins it on the user row — this adapter
 * is the sole writer of user.creemCustomerId (mirroring how customer.ts owns
 * stripeCustomerId). Never overwrites, never fails the webhook: the column is
 * unique and a concurrent write is a race we simply lose gracefully.
 */
async function rememberCreemCustomerId(
  userId: string | null,
  customerId: string | null
): Promise<void> {
  if (!userId || !customerId) return
  try {
    await db
      .update(userSchema)
      .set({ creemCustomerId: customerId })
      .where(
        and(eq(userSchema.id, userId), isNull(userSchema.creemCustomerId))
      )
  } catch (error) {
    console.warn(
      `Failed to store creemCustomerId ${customerId} for user ${userId}:`,
      error
    )
  }
}

// ----------------------------------------------------------------------------
// One-time credit pack purchase (checkout.completed, order.type === 'onetime')
// ----------------------------------------------------------------------------

/**
 * Fulfills a completed Creem checkout for a one-time credit pack: records the
 * order and grants purchased credits atomically through the core. Subscription
 * checkouts are ignored here — their money event is `subscription.paid`.
 * Amounts pass through untouched: Creem order fields are already integer cents.
 */
export async function fulfillCreemCheckout(
  checkout: CreemCheckout
): Promise<void> {
  const order = checkout.order
  if (!order || order.type !== 'onetime') return
  if (checkout.status !== 'completed') return

  const metadata = checkout.metadata ?? {}
  const subject = await resolveCreemSubject(metadata)
  if (!subject.userId) {
    // An account never comes back, so this is a permanent error: the route
    // alerts (deduped) then acks — the same branch the stripe adapter has;
    // never let Creem back off and retry a doomed event for a whole day.
    throw new PermanentFulfillmentError(
      `Cannot resolve user for Creem checkout ${checkout.id} — check metadata.userId`
    )
  }

  const productId = idOf(checkout.product) ?? order.product
  const plan = resolveCreemPlan({ metadata, productId })
  if (!plan || plan.kind !== 'credit_pack') {
    throw new Error(
      `Cannot resolve credit pack plan for Creem checkout ${checkout.id} (planId: ${String(metadata.planId)}, productId: ${productId})`
    )
  }

  await fulfillOneTimePurchase({
    provider: 'creem',
    providerOrderId: order.id,
    providerPaymentId: order.transaction ?? null,
    subject,
    planId: plan.id,
    credits: getPlanCredits(plan),
    amountTotal: order.amountPaid ?? order.amount,
    amountSubtotal: order.subTotal ?? null,
    amountDiscount: order.discountAmount ?? 0,
    amountTax: order.taxAmount ?? 0,
    currency: order.currency,
    metadata,
  })

  await rememberCreemCustomerId(subject.userId, idOf(checkout.customer))
}

/**
 * Success-page entry point: fetch the checkout from Creem and fulfill it
 * through the same idempotent path the webhook uses, so one-time buyers see
 * their credits immediately. Subscription checkouts only sync the local row —
 * their credits land via the `subscription.paid` webhook.
 *
 * `expectedUserId` is the signed-in caller — fulfillment only runs when the
 * checkout's metadata.userId matches; foreign ids get a read-only status.
 */
export async function fulfillCreemCheckoutById(
  checkoutId: string,
  expectedUserId: string
): Promise<{
  paid: boolean
  planId: string | null
  userId: string | null
}> {
  const checkout = await retrieveCreemCheckoutSession(checkoutId)

  const paid = checkout.status === 'completed'
  const metadata = checkout.metadata ?? {}
  const planId = typeof metadata.planId === 'string' ? metadata.planId : null
  const userId = typeof metadata.userId === 'string' ? metadata.userId : null

  if (!paid || userId !== expectedUserId) return { paid, planId, userId }

  const subscription = objectOf(checkout.subscription)
  if (checkout.order?.type === 'onetime') {
    await fulfillCreemCheckout(checkout)
  } else if (subscription) {
    // Checkout metadata is authoritative for the subject (Creem may lag in
    // propagating it onto the subscription object) — it must WIN the merge,
    // so the possibly-stale subscription copy only fills gaps.
    await syncCreemSubscription({
      ...subscription,
      metadata: { ...(subscription.metadata ?? {}), ...metadata },
    })
  }

  return { paid, planId, userId }
}

// ----------------------------------------------------------------------------
// Subscription lifecycle
// ----------------------------------------------------------------------------

/** Creem subscription object → core SubscriptionSyncInput (subject and plan resolved). */
async function buildCreemSyncInput(sub: CreemSubscription): Promise<{
  input: SubscriptionSyncInput
  plan: SubscriptionPlan
} | null> {
  const productId = idOf(sub.product) ?? sub.items?.[0]?.productId ?? null
  const metadata = sub.metadata ?? {}

  const plan = resolveCreemPlan({ metadata, productId })
  if (!plan || !isSubscriptionPlan(plan)) {
    console.error(
      `syncCreemSubscription: no subscription plan matches product ${productId} for ${sub.id}`
    )
    return null
  }

  // A deleted purchaser (resolves to null) still gets synced: the
  // subscription row is financial history. Team subscriptions carry
  // organizationId in metadata (pinned at checkout) — it routes every grant,
  // clear and clawback to the org pool instead of the purchaser's buckets.
  const subject = await resolveCreemSubject(metadata)

  const status = mapCreemSubscriptionStatus(sub.status)
  const canceledAt = toDate(sub.canceledAt)
  const isEnded = status === 'canceled' || status === 'expired'

  return {
    plan,
    input: {
      provider: 'creem',
      providerSubscriptionId: sub.id,
      subject,
      planId: plan.id,
      providerCustomerId: idOf(sub.customer),
      providerPriceId: productId,
      status,
      interval: plan.interval,
      currentPeriodStart: toDate(sub.currentPeriodStartDate),
      currentPeriodEnd: toDate(sub.currentPeriodEndDate),
      cancelAtPeriodEnd: sub.status === 'scheduled_cancel',
      canceledAt,
      endedAt: isEnded ? (canceledAt ?? toDate(sub.currentPeriodEndDate)) : null,
      monthlyCredits: plan.monthlyCredits,
    },
  }
}

/**
 * Upserts the local subscription row from a Creem subscription object
 * (subscription.active / .update / .trialing / .paused / .scheduled_cancel /
 * .past_due / .unpaid). Never touches the drip schedule — that belongs to
 * payment fulfillment. Dunning mail for past_due is Creem's own job.
 */
export async function syncCreemSubscription(
  sub: CreemSubscription
): Promise<{
  subject: BillingSubject
  plan: SubscriptionPlan
} | null> {
  const built = await buildCreemSyncInput(sub)
  if (!built) return null
  await syncSubscription(built.input)
  await rememberCreemCustomerId(
    built.input.subject.userId,
    built.input.providerCustomerId ?? null
  )
  return { subject: built.input.subject, plan: built.plan }
}

/**
 * Fulfills a paid Creem subscription transaction (initial or renewal): syncs
 * the subscription, records the order, grants this period's credits and
 * (re)initializes the yearly drip. Idempotent via (creem, transaction id).
 * initial/renewal is derived from our own ledger: any OTHER order already
 * recorded for this subscription makes this payment a renewal.
 */
export async function fulfillCreemSubscriptionPaid(
  sub: CreemSubscription
): Promise<void> {
  let tx: CreemTransaction | null = sub.lastTransaction ?? null
  if (!tx) {
    // Some deliveries ship the subscription without the inlined transaction —
    // refetch; a money event without its transaction cannot be fulfilled.
    const fresh = await retrieveCreemSubscription(sub.id)
    tx = fresh.lastTransaction ?? null
    sub = { ...fresh, metadata: { ...(sub.metadata ?? {}), ...(fresh.metadata ?? {}) } }
  }

  const built = await buildCreemSyncInput(sub)
  if (!built) {
    throw new Error(
      `Cannot fulfill Creem subscription payment for ${sub.id}: no plan resolved`
    )
  }

  if (!tx) {
    throw new Error(
      `Cannot fulfill Creem subscription payment for ${sub.id}: no transaction on payload`
    )
  }

  // Not settled yet — keep the row fresh, let a later delivery fulfill.
  if (tx.status !== 'paid') {
    await syncSubscription(built.input)
    return
  }

  const transactionId = tx.id

  // Initial vs renewal: our ledger already knows. The ne() guard keeps a
  // replay of the first transaction classified as 'subscription_initial'.
  const [priorOrder] = await db
    .select({ id: orders.id })
    .from(orders)
    .where(
      and(
        eq(orders.provider, 'creem'),
        eq(orders.providerSubscriptionId, sub.id),
        ne(orders.providerOrderId, transactionId)
      )
    )
    .limit(1)

  const amountTotal = tx.amountPaid ?? tx.amount

  const { duplicate } = await fulfillSubscriptionPayment({
    subscription: built.input,
    orderType: priorOrder ? 'subscription_renewal' : 'subscription_initial',
    providerOrderId: transactionId,
    providerPaymentId: transactionId,
    amountTotal,
    amountSubtotal: tx.amount ?? null,
    amountDiscount: tx.discountAmount ?? 0,
    amountTax: tx.taxAmount ?? 0,
    currency: tx.currency,
    periodStart:
      epochToDate(tx.periodStart) ?? toDate(sub.currentPeriodStartDate),
    metadata: sub.metadata ?? null,
  })

  // Defense #2 settlement: the first to fulfill wins, so this subscription is
  // judged a duplicate — ./duplicate settles it. Creem's refund API refunds a
  // whole transaction and is naturally idempotent: refunding an already
  // refunded transaction reports "already refunded", normalized to success; a
  // nonexistent transaction can never be refunded, so throw
  // PermanentFulfillmentError and escalate to a human; everything else
  // (403/5xx/network) throws and waits for a retry.
  if (duplicate) {
    await settleDuplicateSubscription({
      provider: 'creem',
      providerSubscriptionId: sub.id,
      providerOrderId: transactionId,
      winner: duplicate,
      amountTotal,
      currency: tx.currency,
      userId: built.input.subject.userId,
      refund: async () => {
        try {
          await refundCreemTransaction(transactionId)
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error)
          if (/already.*refund|fully refunded/i.test(message)) return
          if (/not found|does not exist|\b404\b/i.test(message)) {
            throw new PermanentFulfillmentError(
              `Creem refuses to refund transaction ${transactionId} (${message}) — refund it manually in the Creem dashboard`
            )
          }
          throw error
        }
      },
    })
    return
  }

  await rememberCreemCustomerId(
    built.input.subject.userId,
    built.input.providerCustomerId ?? null
  )
}

/**
 * Subscription ended (subscription.canceled / .expired): sync final state,
 * stop the drip, clear the bucket when the subject has no other live
 * subscription. The mapped status is forced terminal — an ended event must
 * never leave the row entitled.
 */
export async function handleCreemSubscriptionEnded(
  sub: CreemSubscription
): Promise<void> {
  // Full sync first (keeps subject/plan fresh); the end handler then reads
  // the local row for the subject — covering the case where sync bailed on
  // an unresolvable plan but an older row still exists.
  await syncCreemSubscription(sub)

  const mapped = mapCreemSubscriptionStatus(sub.status)
  const canceledAt = toDate(sub.canceledAt)
  await handleSubscriptionEnded('creem', sub.id, {
    status: mapped === 'active' || mapped === 'trialing' ? 'canceled' : mapped,
    canceledAt,
    endedAt: canceledAt ?? toDate(sub.currentPeriodEndDate) ?? new Date(),
  })
}

/**
 * Cron reconciliation entry: pull the subscription from Creem and push it
 * through the exact webhook path it would have taken — the (creem,
 * transaction id) unique order key makes replays harmless.
 */
export async function reconcileCreemSubscription(
  providerSubscriptionId: string
): Promise<'ended' | 'fulfilled' | 'synced'> {
  const sub = await retrieveCreemSubscription(providerSubscriptionId)

  if (sub.status === 'canceled') {
    await handleCreemSubscriptionEnded(sub)
    return 'ended'
  }
  if (sub.lastTransaction?.status === 'paid') {
    await fulfillCreemSubscriptionPaid(sub)
    return 'fulfilled'
  }
  await syncCreemSubscription(sub)
  return 'synced'
}

// ----------------------------------------------------------------------------
// Refunds
// ----------------------------------------------------------------------------

/**
 * Applies a Creem refund through the provider-agnostic core, then — when a
 * subscription order became fully refunded — cancels the Creem subscription
 * (network call stays out of the core's transaction). Order locator mirrors
 * our idempotency keys: one-time orders were stored under the creem order id,
 * subscription orders under the transaction id — the refund payload may ship
 * the order as a bare id, so both keys are tried in turn.
 */
export async function applyCreemRefund(refund: CreemRefund): Promise<void> {
  // Dead refunds move no money — acknowledge without touching the ledger.
  if (refund.status === 'failed' || refund.status === 'canceled') return

  const tx = refund.transaction
  const orderId = idOf(refund.order)

  // The core wants the CUMULATIVE refunded total; the transaction carries it.
  // Fall back to this event's own amount (first refund ⇒ they coincide).
  const amountRefunded =
    tx.refundedAmount && tx.refundedAmount > 0
      ? tx.refundedAmount
      : Math.abs(refund.refundAmount)

  const locators = [...new Set([orderId, tx.id].filter((id): id is string => !!id))]
  let result: Awaited<ReturnType<typeof applyRefund>> | null = null
  for (const providerOrderId of locators) {
    result = await applyRefund({
      provider: 'creem',
      providerOrderId,
      providerPaymentId: tx.id,
      amountRefunded,
    })
    if (result.orderFound) break
  }

  // No local order means never ack silently (mirrors the PayPal refund path):
  // fulfillment may still be retrying, and swallowing a refund that arrives
  // first would leave the order landing later carrying full credits and
  // showing as never refunded. Throwing yields a 5xx — once the order lands
  // within the retry window, the replay advances idempotently.
  if (!result?.orderFound) {
    throw new Error(
      `Creem refund ${refund.id}: no local order for ${locators.join(' / ')} — retrying until the order lands`
    )
  }

  // The resulting subscription.canceled event clears the credit bucket.
  if (result.fullRefundOfSubscription && result.providerSubscriptionId) {
    await cancelProviderSubscription(
      'creem',
      result.providerSubscriptionId,
      'Fully refunded'
    )
  }
}

// ----------------------------------------------------------------------------
// Disputes
// ----------------------------------------------------------------------------

/**
 * dispute.created: a chargeback was opened. Money has NOT moved yet — the
 * ledger stays untouched (a lost dispute surfaces as a refund.created that
 * the refund path settles). This only pages operations with everything they
 * need to respond to the dispute in the Creem dashboard.
 */
export async function handleCreemDispute(dispute: CreemDispute): Promise<void> {
  const subscription = objectOf(dispute.subscription)
  const checkout = objectOf(dispute.checkout)
  const metadata = subscription?.metadata ?? checkout?.metadata ?? {}

  await notifyDispute({
    provider: 'creem',
    disputeId: dispute.id,
    providerPaymentId: dispute.transaction.id,
    providerOrderId: idOf(dispute.order),
    amount: dispute.amount,
    currency: dispute.currency,
    userId: typeof metadata.userId === 'string' ? metadata.userId : null,
    planId: typeof metadata.planId === 'string' ? metadata.planId : null,
  })
}
