/**
 * [INPUT]: Depends on @/lib/paypal's decodePayPalCustomId/getPayPalSubscription/
 *          getPayPalCapture and the webhook payload types, @/config/pricing's
 *          plan resolution (getPlanById/findPlanByProviderPriceId/getPlanCredits/
 *          isSubscriptionPlan), ./fulfillment's provider-agnostic core, ./cancel's
 *          provider-side cancel funnel, ./duplicate's duplicate-subscription
 *          settlement funnel (injected refundPayPalCapture closure: an already
 *          fully refunded sale is normalized to success, a v1 id the endpoint
 *          refuses becomes a PermanentFulfillmentError),
 *          @/lib/discord/notifications' notifyPaymentDenied, @/lib/db and the
 *          schema's orders/user tables
 * [OUTPUT]: Exports mapPayPalSubscriptionStatus, fulfillPayPalCapture,
 *           fulfillPayPalCaptureById (three states: paid/failed/pending),
 *           recordPendingPayPalCapture (pending-order trace of an in-flight
 *           capture),
 *           syncPayPalSubscriptionById,
 *           handlePayPalCaptureCompleted, handlePayPalCaptureDenied,
 *           handlePayPalCaptureRefunded, handlePayPalSaleCompleted,
 *           handlePayPalSaleRefunded, handlePayPalSubscriptionActivated,
 *           handlePayPalSubscriptionSuspended, handlePayPalSubscriptionEnded,
 *           handlePayPalSubscriptionPaymentFailed
 * [POS]: The PayPal adapter of lib/billing — the only fulfillment file where
 *        PayPal payload types appear: it translates the PayPal objects obtained
 *        from webhook/capture-order into ./types inputs and calls the core;
 *        custom_id (userId|planId|…|organizationId) carries the subject and the
 *        plan, and the sole writer of user.paypalPayerId also lives here; amounts
 *        always go "PayPal decimal string → integer cents"; PayPal-side
 *        cancellation for full refunds and superseded subscriptions goes through
 *        ./cancel, and PayPal-specific policies such as the PAYMENT.SALE
 *        initial-vs-renewal decision all live here
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import {
  findPlanByProviderPriceId,
  getPlanById,
  getPlanCredits,
  isSubscriptionPlan,
  type SubscriptionPlan,
} from '@/config/pricing';
import { db } from '@/lib/db';
import { orders, user as userSchema } from '@/lib/db/schema';
import {
  decodePayPalCustomId,
  getPayPalCapture,
  getPayPalSubscription,
  refundPayPalCapture,
} from '@/lib/paypal';
import { notifyPaymentDenied } from '@/lib/discord/notifications';
import type {
  PayPalCapture,
  PayPalLink,
  PayPalPaymentCaptureRefunded,
  PayPalPaymentSaleRefunded,
  PayPalSaleResource,
  PayPalSubscription,
} from '@/lib/paypal/types';
import { and, eq, inArray } from 'drizzle-orm';
import { cancelProviderSubscription } from './cancel';
import { settleDuplicateSubscription } from './duplicate';
import {
  applyRefund,
  fulfillOneTimePurchase,
  fulfillSubscriptionPayment,
  handleSubscriptionEnded,
  PermanentFulfillmentError,
  recordPendingOneTimePurchase,
  resolveValidOrganizationId,
  resolveValidUserId,
  syncSubscription,
} from './fulfillment';
import type {
  BillingSubject,
  CanonicalSubscriptionStatus,
  SubscriptionSyncInput,
} from './types';

// ============================================================================
// Status mapping — normalizing PayPal subscription status. APPROVED/
// APPROVAL_PENDING mean "approved but the first payment has not landed": until
// the money arrives it is always incomplete. SUSPENDED matches the dunning
// period of a failed charge, mapped to past_due (ENTITLED benefits are kept
// while PayPal retries).
// ============================================================================

export function mapPayPalSubscriptionStatus(
  status: string
): CanonicalSubscriptionStatus {
  switch (status) {
    case 'ACTIVE':
      return 'active'
    case 'APPROVED':
    case 'APPROVAL_PENDING':
      return 'incomplete'
    case 'SUSPENDED':
      return 'past_due'
    case 'CANCELLED':
      return 'canceled'
    case 'EXPIRED':
      return 'expired'
    default:
      return 'incomplete'
  }
}

// ----------------------------------------------------------------------------
// Helpers — amount and time conversion, payer id persistence, subject resolution
// ----------------------------------------------------------------------------

/** PayPal decimal amount string ("9.99") → integer cents. */
function toCents(amount: string | null | undefined): number {
  return Math.round(parseFloat(amount || '0') * 100)
}

function toDate(value: string | null | undefined): Date | null {
  if (!value) return null
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

/** The "up" link of a refund/reversal resource → the original capture/sale id. */
function idFromUpLink(links: PayPalLink[] | undefined): string | null {
  const up = links?.find((link) => link.rel === 'up')
  return up?.href?.split('/').pop() ?? null
}

/**
 * The sole writer of user.paypalPayerId (written on first sight, never
 * overwritten — a payer id maps one-to-one to an account, so a conflict is only
 * logged as a warning). Fire-and-safe: a failure must never make the webhook 5xx.
 */
async function savePayPalPayerId(
  userId: string,
  payerId: string
): Promise<void> {
  try {
    const [row] = await db
      .select({ paypalPayerId: userSchema.paypalPayerId })
      .from(userSchema)
      .where(eq(userSchema.id, userId))
      .limit(1)
    if (!row) return
    if (row.paypalPayerId) {
      if (row.paypalPayerId !== payerId) {
        console.warn(
          `[PayPal] User ${userId} already has a different paypalPayerId: ${row.paypalPayerId} vs ${payerId}`
        )
      }
      return
    }
    await db
      .update(userSchema)
      .set({ paypalPayerId: payerId })
      .where(eq(userSchema.id, userId))
  } catch (error) {
    console.error(`[PayPal] Failed to save payerId for user ${userId}:`, error)
  }
}

/**
 * userId resolution: explicitly carried by custom_id → local paypalPayerId
 * mapping. Both levels go through an existence check (a ghost id becomes null,
 * see fulfillment's resolveValidUserId).
 */
async function resolvePayPalUserId(params: {
  candidateUserId?: string | null
  payerId?: string | null
}): Promise<string | null> {
  const fromCustomId = await resolveValidUserId(params.candidateUserId)
  if (fromCustomId) return fromCustomId

  if (!params.payerId) return null
  const [row] = await db
    .select({ id: userSchema.id })
    .from(userSchema)
    .where(eq(userSchema.paypalPayerId, params.payerId))
    .limit(1)
  return row?.id ?? null
}

async function resolvePayPalSubject(params: {
  candidateUserId?: string | null
  organizationId?: string | null
  payerId?: string | null
}): Promise<BillingSubject> {
  const [userId, organizationId] = await Promise.all([
    resolvePayPalUserId(params),
    resolveValidOrganizationId(params.organizationId),
  ])
  return { userId, organizationId }
}

// ----------------------------------------------------------------------------
// One-time credit pack purchase (capture)
// ----------------------------------------------------------------------------

/**
 * One-time credit pack fulfillment: the single entry point shared by the
 * capture-order route (the synchronous source of truth) and the webhook
 * PAYMENT.CAPTURE.COMPLETED (the idempotent backstop). The idempotency key is
 * (paypal, capture id) — when the two paths collide, the later one gets
 * created:false. providerPaymentId is the capture id as well: PayPal refunds
 * take the capture as their handle.
 */
export async function fulfillPayPalCapture(params: {
  captureId: string
  customId: string | null | undefined
  /** PayPal decimal amount string, e.g. "9.99" */
  amountValue: string | null | undefined
  currencyCode: string | null | undefined
  payerId?: string | null
  metadata?: Record<string, unknown> | null
}): Promise<{ created: boolean; planId: string | null }> {
  const decoded = decodePayPalCustomId(params.customId)
  if (!decoded) {
    // A missing/corrupt custom_id is permanent — retrying will not grow one.
    // The synchronous capture path (which carries the full decoded info) is the
    // source of truth, so here we only warn and do not block the webhook.
    console.warn(
      `[PayPal] Capture ${params.captureId} has no decodable custom_id, skipping fulfillment.`
    )
    return { created: false, planId: null }
  }

  const plan = getPlanById(decoded.planId)
  if (plan && isSubscriptionPlan(plan)) {
    // The money event of subscription payments is PAYMENT.SALE.COMPLETED — for
    // a subscription the capture event is only an echo, and fulfilling it here
    // would grant credits twice.
    return { created: false, planId: plan.id }
  }
  if (!plan) {
    // Money taken but the plan cannot be resolved — throw so the webhook retries
    // and alerts; never silently swallow the payment.
    throw new Error(
      `Cannot resolve credit pack plan for PayPal capture ${params.captureId} (planId: ${decoded.planId})`
    )
  }

  const subject = await resolvePayPalSubject({
    candidateUserId: decoded.userId,
    organizationId: decoded.organizationId,
    payerId: params.payerId,
  })

  if (params.payerId && subject.userId) {
    await savePayPalPayerId(subject.userId, params.payerId)
  }

  const { created } = await fulfillOneTimePurchase({
    provider: 'paypal',
    providerOrderId: params.captureId,
    providerPaymentId: params.captureId,
    subject,
    planId: plan.id,
    credits: getPlanCredits(plan),
    amountTotal: toCents(params.amountValue),
    currency: (params.currencyCode ?? 'USD').toLowerCase(),
    metadata: params.metadata ?? { customId: params.customId },
  })
  return { created, planId: plan.id }
}

/**
 * Local trace of a PENDING capture (in-flight money such as an eCheck): writes a
 * status='pending' order row with 0 credits — visible to the user and the admin
 * side, traceable by the reconcile cron, so the money does not go missing even
 * when the COMPLETED webhook is lost and the user never revisits the success
 * page. On settlement fulfillPayPalCapture promotes the row in place; on a
 * bounce/denial handlePayPalCaptureDenied marks it 'failed'.
 */
export async function recordPendingPayPalCapture(params: {
  captureId: string
  customId: string | null | undefined
  /** PayPal decimal amount string, e.g. "9.99" */
  amountValue: string | null | undefined
  currencyCode: string | null | undefined
  payerId?: string | null
  metadata?: Record<string, unknown> | null
}): Promise<{ created: boolean }> {
  const decoded = decodePayPalCustomId(params.customId)
  if (!decoded) {
    console.warn(
      `[PayPal] Pending capture ${params.captureId} has no decodable custom_id, skipping local trace.`
    )
    return { created: false }
  }

  const plan = getPlanById(decoded.planId)
  if (plan && isSubscriptionPlan(plan)) {
    // The money event of a subscription is PAYMENT.SALE.* — a capture trace
    // belongs to one-time credit packs only.
    return { created: false }
  }

  const subject = await resolvePayPalSubject({
    candidateUserId: decoded.userId,
    organizationId: decoded.organizationId,
    payerId: params.payerId,
  })

  return recordPendingOneTimePurchase({
    provider: 'paypal',
    providerOrderId: params.captureId,
    providerPaymentId: params.captureId,
    subject,
    planId: decoded.planId,
    credits: 0, // nothing while pending; settlement brings the real credits on promotion
    amountTotal: toCents(params.amountValue),
    currency: (params.currencyCode ?? 'USD').toLowerCase(),
    metadata: params.metadata ?? { customId: params.customId },
  })
}

/**
 * PAYMENT.CAPTURE.COMPLETED: the idempotent backstop of the capture-order route
 * — the money still lands on the books when that route dies. The custom_id on
 * the resource is the purchase unit custom_id written when the order was created.
 */
export async function handlePayPalCaptureCompleted(
  capture: PayPalCapture & { custom_id?: string }
): Promise<void> {
  if (capture.status !== 'COMPLETED') return

  await fulfillPayPalCapture({
    captureId: capture.id,
    customId: capture.custom_id,
    amountValue: capture.amount?.value,
    currencyCode: capture.amount?.currency_code,
    metadata: { paypalCaptureId: capture.id, customId: capture.custom_id },
  })
}

/**
 * Idempotent fulfillment entry point for the success page (mirrors stripe's
 * fulfillCheckoutSessionById / creem's fulfillCreemCheckoutById): fetches the
 * settlement status from source by capture id and, when the ownership check
 * passes and it has settled (COMPLETED), runs the same idempotent fulfillment as
 * the webhook. This is the user-side self-healing channel for a PENDING capture
 * (eCheck) after a lost COMPLETED webhook — revisiting/refreshing the success
 * page re-verifies and re-grants, and the idempotency key makes a collision with
 * the webhook harmless.
 *
 * Three states rather than two: PENDING means "still waiting to settle"
 * (refreshing is meaningful), while every other non-COMPLETED status
 * (DECLINED/FAILED/REFUNDED/…) is terminal — failed:true lets the success page
 * render a failure card instead of showing a dead payment as "processing"
 * forever.
 */
export async function fulfillPayPalCaptureById(
  captureId: string,
  expectedUserId: string
): Promise<{
  paid: boolean
  failed: boolean
  planId: string | null
  userId: string | null
}> {
  const capture = await getPayPalCapture(captureId)
  const decoded = decodePayPalCustomId(capture.custom_id)

  const paid = capture.status === 'COMPLETED'
  const failed = !paid && capture.status !== 'PENDING'
  const planId = decoded?.planId ?? null
  const userId = decoded?.userId ?? null

  // Only trigger fulfillment for a settled capture belonging to the signed-in
  // user; someone else's capture just gets its status back.
  if (!paid || userId !== expectedUserId) {
    return { paid, failed, planId, userId }
  }

  await fulfillPayPalCapture({
    captureId: capture.id,
    customId: capture.custom_id,
    amountValue: capture.amount?.value,
    currencyCode: capture.amount?.currency_code,
    metadata: { paypalCaptureId: capture.id, customId: capture.custom_id },
  })
  return { paid, failed, planId, userId }
}

/**
 * PAYMENT.CAPTURE.DENIED / DECLINED: the death notice of a pending capture (an
 * eCheck bounce, a risk-control rejection). Marks the local pending trace row
 * with the terminal status 'failed' (0 credits, so nothing to roll back; the row
 * is kept as an audit trace) and alerts operations — "the in-flight money is
 * gone" must land both in the local books and in the alert channel, never only
 * in the PayPal dashboard.
 */
export async function handlePayPalCaptureDenied(
  capture: PayPalCapture & { custom_id?: string }
): Promise<void> {
  await db
    .update(orders)
    .set({ status: 'failed' })
    .where(
      and(
        eq(orders.provider, 'paypal'),
        eq(orders.providerOrderId, capture.id),
        eq(orders.status, 'pending')
      )
    )

  const decoded = decodePayPalCustomId(capture.custom_id)
  await notifyPaymentDenied({
    provider: 'paypal',
    providerPaymentId: capture.id,
    planId: decoded?.planId ?? 'unknown',
    userId: decoded?.userId ?? 'unknown',
  })
}

// ----------------------------------------------------------------------------
// Subscription lifecycle
// ----------------------------------------------------------------------------

/** PayPal subscription object → core SubscriptionSyncInput (subject + plan resolved). */
async function buildPayPalSyncInput(
  sub: PayPalSubscription,
  statusOverride?: CanonicalSubscriptionStatus
): Promise<{ input: SubscriptionSyncInput; plan: SubscriptionPlan } | null> {
  const decoded = decodePayPalCustomId(sub.custom_id)

  // Plan resolution: the plan slug in custom_id wins, with a reverse lookup by
  // PayPal Billing Plan id as the fallback.
  const fromCustomId = decoded?.planId ? getPlanById(decoded.planId) : undefined
  const plan =
    fromCustomId ?? findPlanByProviderPriceId('paypal', sub.plan_id)
  if (!plan || !isSubscriptionPlan(plan)) {
    console.error(
      `[PayPal] No subscription plan matches ${sub.plan_id} for subscription ${sub.id}`
    )
    return null
  }

  // A deleted buyer (resolving to null) still syncs — the subscription row is
  // financial history. A team subscription's organizationId is pinned into
  // custom_id, routing grants, bucket resets and clawbacks to the org pool.
  const subject = await resolvePayPalSubject({
    candidateUserId: decoded?.userId,
    organizationId: decoded?.organizationId,
    payerId: sub.subscriber?.payer_id,
  })

  return {
    plan,
    input: {
      provider: 'paypal',
      providerSubscriptionId: sub.id,
      subject,
      planId: plan.id,
      providerCustomerId: sub.subscriber?.payer_id ?? null,
      providerPriceId: sub.plan_id,
      status: statusOverride ?? mapPayPalSubscriptionStatus(sub.status),
      interval: plan.interval,
      currentPeriodStart: toDate(sub.billing_info?.last_payment?.time),
      currentPeriodEnd: toDate(sub.billing_info?.next_billing_time),
      cancelAtPeriodEnd: false, // PayPal has no such concept: a cancel takes effect immediately
      canceledAt:
        sub.status === 'CANCELLED' ? (toDate(sub.update_time) ?? new Date()) : null,
      endedAt:
        sub.status === 'EXPIRED' ? (toDate(sub.update_time) ?? new Date()) : null,
      monthlyCredits: plan.monthlyCredits,
      metadata: {
        customId: sub.custom_id ?? null,
        paypalPlanId: sub.plan_id,
        paypalPayerId: sub.subscriber?.payer_id ?? null,
      },
    },
  }
}

/**
 * Fetches the latest PayPal subscription status and upserts the local row. A
 * webhook payload may be stale or incomplete (PayPal guarantees no event order,
 * nor does it push period advances), so we always fetch from source — the
 * re-sync strategy proven by the old implementation. Never touches drip; that
 * belongs to payment fulfillment.
 */
export async function syncPayPalSubscriptionById(
  subscriptionId: string,
  statusOverride?: CanonicalSubscriptionStatus
): Promise<SubscriptionSyncInput | null> {
  const sub = await getPayPalSubscription(subscriptionId)
  const built = await buildPayPalSyncInput(sub, statusOverride)
  if (!built) return null

  await syncSubscription(built.input)

  if (sub.subscriber?.payer_id && built.input.subject.userId) {
    await savePayPalPayerId(built.input.subject.userId, sub.subscriber.payer_id)
  }
  return built.input
}

/** BILLING.SUBSCRIPTION.ACTIVATED / UPDATED: sync the latest status from source. */
export async function handlePayPalSubscriptionActivated(
  resource: PayPalSubscription
): Promise<void> {
  await syncPayPalSubscriptionById(resource.id)
}

/** BILLING.SUBSCRIPTION.SUSPENDED: charge failure stalls it → past_due (dunning). */
export async function handlePayPalSubscriptionSuspended(
  resource: PayPalSubscription
): Promise<void> {
  // If the status fetched from source is back to ACTIVE, the sync naturally
  // writes active back — no forced downgrade.
  await syncPayPalSubscriptionById(resource.id)
}

/**
 * BILLING.SUBSCRIPTION.PAYMENT.FAILED: PayPal still reports ACTIVE during its
 * retry window, but locally we must enter dunning semantics — force past_due
 * (inside the ENTITLED set, so benefits are kept).
 */
export async function handlePayPalSubscriptionPaymentFailed(
  resource: PayPalSubscription
): Promise<void> {
  const input = await syncPayPalSubscriptionById(resource.id, 'past_due')

  // The renewal-failure mail in lib/billing/notify is bound to the
  // Stripe.Invoice shape and PayPal has no invoice object to fill it with —
  // skip the mail and only log, so as not to fake the type.
  console.warn(
    `[PayPal] Subscription payment failed for ${resource.id}` +
      (input?.subject.userId ? ` (user ${input.subject.userId})` : '')
  )
}

/**
 * BILLING.SUBSCRIPTION.CANCELLED / EXPIRED: first a full sync from source
 * (keeping subject/plan fresh), then the core termination path (terminal status
 * + stop drip + clear the bucket only if the subject has no other live
 * subscription). A failed fetch does not block termination — the event itself is
 * already an authoritative death notice.
 */
export async function handlePayPalSubscriptionEnded(
  resource: PayPalSubscription
): Promise<void> {
  const status = mapPayPalSubscriptionStatus(resource.status)

  try {
    await syncPayPalSubscriptionById(resource.id)
  } catch (error) {
    console.error(
      `[PayPal] Failed to re-sync subscription ${resource.id} before ending:`,
      error
    )
  }

  const endedAt = toDate(resource.update_time) ?? new Date()
  await handleSubscriptionEnded('paypal', resource.id, {
    status: status === 'expired' ? 'expired' : 'canceled',
    canceledAt: status === 'canceled' ? endedAt : undefined,
    endedAt: status === 'expired' ? endedAt : undefined,
  })
}

// ----------------------------------------------------------------------------
// Subscription payments (PAYMENT.SALE.COMPLETED — legacy v1 sale resource)
// ----------------------------------------------------------------------------

/**
 * PAYMENT.SALE.COMPLETED: the only money event for subscription initial payments
 * and renewals. The idempotency key is (paypal, sale id). Initial vs renewal is
 * decided by whether this subscription already has a subscription-type order —
 * PayPal's sale resource carries no billing_reason, so the local order history is
 * the criterion. Period endpoints come from the subscription object fetched from
 * source (the sale payload has no next_billing_time).
 */
export async function handlePayPalSaleCompleted(
  sale: PayPalSaleResource
): Promise<void> {
  const subscriptionId = sale.billing_agreement_id
  if (!subscriptionId) {
    // Common in the sample payloads of the PayPal Webhook Simulator (a
    // non-subscription sale). A real subscription charge always carries
    // billing_agreement_id.
    console.error(
      `[PayPal] Sale ${sale.id} has no billing_agreement_id, skipping. ` +
        `If this came from PayPal Simulator, inject billing_agreement_id into the payload.`
    )
    return
  }

  const fresh = await getPayPalSubscription(subscriptionId)

  // custom_id fallback chain: subscription object → sale.custom_id → the legacy
  // field sale.custom.
  const subForBuild: PayPalSubscription = fresh.custom_id
    ? fresh
    : { ...fresh, custom_id: sale.custom_id ?? sale.custom }

  const built = await buildPayPalSyncInput(subForBuild)
  if (!built) {
    // Money taken but the plan cannot be resolved — throw so the webhook retries
    // and an admin alert fires.
    throw new Error(
      `Cannot fulfill PayPal sale ${sale.id}: subscription ${subscriptionId} did not resolve to a plan`
    )
  }

  if (fresh.subscriber?.payer_id && built.input.subject.userId) {
    await savePayPalPayerId(built.input.subject.userId, fresh.subscriber.payer_id)
  }

  // Initial vs renewal: decided from the local order history (a duplicate
  // delivery of the same sale computes the same answer both times, and the
  // idempotency key backstops a duplicate order row).
  const [priorOrder] = await db
    .select({ id: orders.id })
    .from(orders)
    .where(
      and(
        eq(orders.provider, 'paypal'),
        eq(orders.providerSubscriptionId, subscriptionId),
        inArray(orders.orderType, [
          'subscription_initial',
          'subscription_renewal',
        ])
      )
    )
    .limit(1)

  const { duplicate } = await fulfillSubscriptionPayment({
    subscription: built.input,
    orderType: priorOrder ? 'subscription_renewal' : 'subscription_initial',
    providerOrderId: sale.id,
    providerPaymentId: sale.id,
    amountTotal: toCents(sale.amount?.total),
    currency: (sale.amount?.currency ?? 'USD').toLowerCase(),
    periodStart:
      toDate(sale.create_time) ?? built.input.currentPeriodStart,
    metadata: {
      paypalSaleId: sale.id,
      paypalSubscriptionId: subscriptionId,
      paypalParentPayment: sale.parent_payment ?? null,
    },
  })

  // Defense #2 settlement: the first to fulfill wins and this
  // subscription was judged a duplicate — hand it to ./duplicate for uniform
  // settlement (PayPal-side cancel + automatic refund + deduped alert; a
  // retryable refund failure throws so PayPal redelivers, and on re-entry the
  // core replay restates duplicate and refunds again).
  if (duplicate) {
    await settleDuplicateSubscription({
      provider: 'paypal',
      providerSubscriptionId: subscriptionId,
      providerOrderId: sale.id,
      winner: duplicate,
      amountTotal: toCents(sale.amount?.total),
      currency: (sale.amount?.currency ?? 'USD').toLowerCase(),
      userId: built.input.subject.userId,
      // Idempotency: on a replay, refunding an already fully refunded sale is
      // rejected with CAPTURE_FULLY_REFUNDED — normalize that to success.
      // Subscription money is a v1 sale, and on some accounts the v2 captures
      // refund endpoint does not accept a v1 id (RESOURCE_NOT_FOUND) — errors
      // of that kind never get better on retry, so throw
      // PermanentFulfillmentError to let the route ack and escalate the alert to
      // a human; everything else (rate limiting, network, 5xx) is rethrown as is
      // to await a retry.
      refund: async () => {
        try {
          await refundPayPalCapture(sale.id)
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error)
          if (/CAPTURE_FULLY_REFUNDED/i.test(message)) return
          if (/RESOURCE_NOT_FOUND|INVALID_RESOURCE_ID|\b404\b/i.test(message)) {
            throw new PermanentFulfillmentError(
              `PayPal refuses to refund sale ${sale.id} (${message}) — refund it manually in the PayPal dashboard`
            )
          }
          throw error
        }
      },
    })
  }
}

// ----------------------------------------------------------------------------
// Refunds — the core advances idempotently on the cumulative refunded amount;
// on a full refund of a subscription this adapter cancels it on the PayPal side
// ----------------------------------------------------------------------------

/** Cumulative refund fields on the v2 refund resource (not modeled in lib/paypal/types). */
type PayPalCaptureRefundResource = PayPalPaymentCaptureRefunded['resource'] & {
  seller_payable_breakdown?: {
    total_refunded_amount?: { currency_code: string; value: string }
  }
}

/**
 * PAYMENT.CAPTURE.REFUNDED / REVERSED: refunds and chargebacks of a one-time
 * capture. The original capture is located through the "up" link first (the
 * standard shape of a v2 refund resource), falling back to resource.id when the
 * link is missing — REVERSED events have historically been delivered in a shape
 * where the resource is the capture itself (no "up" link, resource.id is the
 * capture id); should that fallback value in fact be the refund's own id, no
 * local order can possibly be found, so it still throws and retries rather than
 * silently mismatching. Both a failed lookup and a missing local order throw and
 * go 5xx: within the webhook retry window a late COMPLETED order lands and the
 * replay then advances idempotently, and once retries are exhausted a failure
 * record is left in the PayPal dashboard — never a silent ack. The cumulative
 * refunded amount prefers seller_payable_breakdown.
 * total_refunded_amount (PayPal's official cumulative figure, naturally
 * idempotent under duplicate delivery), falling back to this event's amount when
 * absent — for a single refund (overwhelmingly the norm) the two are equal.
 */
export async function handlePayPalCaptureRefunded(
  resource: PayPalCaptureRefundResource
): Promise<void> {
  const captureId = idFromUpLink(resource.links) ?? resource.id
  if (!captureId) {
    throw new Error(
      `PayPal refund/reversal carries neither an "up" link nor a resource id — cannot locate the local order`
    )
  }

  const cumulativeValue =
    resource.seller_payable_breakdown?.total_refunded_amount?.value ??
    resource.amount?.value

  const { orderFound, fullRefundOfSubscription, providerSubscriptionId } =
    await applyRefund({
      provider: 'paypal',
      providerPaymentId: captureId,
      amountRefunded: toCents(cumulativeValue),
    })

  if (!orderFound) {
    throw new Error(
      `PayPal refund ${resource.id}: no local order for capture ${captureId} — retrying until the completed-capture order lands`
    )
  }

  if (fullRefundOfSubscription && providerSubscriptionId) {
    await cancelProviderSubscription(
      'paypal',
      providerSubscriptionId,
      'Fully refunded'
    )
  }
}

/** Cumulative refund field on the v1 sale refund resource (not modeled in lib/paypal/types). */
type PayPalSaleRefundResource = PayPalPaymentSaleRefunded['resource'] & {
  total_refunded_amount?: { currency: string; value: string }
}

/**
 * PAYMENT.SALE.REFUNDED / REVERSED: refunds and chargebacks of subscription
 * money (a sale). The original sale is located by sale_id or the "up" link; the
 * cumulative figure works as in the capture refund. A failed lookup and a missing
 * local order throw and go 5xx just as on the capture path — a chargeback must
 * never vanish silently. A full refund → the core stops drip and hands back the
 * subscription id, which is cancelled on the PayPal side to stop the bleeding.
 */
export async function handlePayPalSaleRefunded(
  resource: PayPalSaleRefundResource
): Promise<void> {
  const saleId = resource.sale_id ?? idFromUpLink(resource.links)
  if (!saleId) {
    throw new Error(
      `PayPal refund ${resource.id} carries neither sale_id nor an "up" link — cannot locate the local order`
    )
  }

  const cumulativeValue =
    resource.total_refunded_amount?.value ?? resource.amount?.total

  const { orderFound, fullRefundOfSubscription, providerSubscriptionId } =
    await applyRefund({
      provider: 'paypal',
      providerPaymentId: saleId,
      amountRefunded: toCents(cumulativeValue),
    })

  if (!orderFound) {
    throw new Error(
      `PayPal refund ${resource.id}: no local order for sale ${saleId} — retrying until the sale order lands`
    )
  }

  if (fullRefundOfSubscription && providerSubscriptionId) {
    await cancelProviderSubscription(
      'paypal',
      providerSubscriptionId,
      'Fully refunded'
    )
  }
}
