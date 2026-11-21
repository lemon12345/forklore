/**
 * [INPUT]: Depends on @/lib/stripe's getStripe, @/config/pricing's plan
 *          resolution (getPlanById/findPlanByProviderPriceId/isSubscriptionPlan),
 *          ./fulfillment's provider-agnostic core, ./cancel's provider-side
 *          cancel funnel, ./duplicate's duplicate-subscription settlement
 *          funnel, ./notify's mail notifications,
 *          @/lib/db and schema's orders/user tables
 * [OUTPUT]: Exports mapStripeSubscriptionStatus, resolveStripeUserId,
 *           fulfillCheckoutSession, fulfillCheckoutSessionById,
 *           fulfillInvoicePaid, syncStripeSubscription,
 *           handleSubscriptionDeleted, applyRefundForCharge,
 *           handleInvoicePaymentFailed, handleEarlyFraudWarning
 * [POS]: The Stripe adapter of lib/billing — the only fulfillment file where
 *        Stripe SDK types appear: it translates the Stripe objects pulled from
 *        webhooks / the success page / reconciliation into ./types inputs and
 *        calls the core; proportional invoice routing (billing_reason:
 *        create/cycle full reset, subscription_update mid-cycle upgrade
 *        incremental fulfillment (no amount-paid threshold), everything else
 *        sync-only), Stripe-side cancellation of fully refunded subscriptions
 *        (via ./cancel), duplicate-subscription settlement (via ./duplicate,
 *        injecting only the idempotencyKey refund closure), Radar fraud
 *        handling — every Stripe-specific policy lives here; assumes one Stripe
 *        account runs this product alone — a plan that fails to resolve means a
 *        pricing.ts entry was physically deleted (forbidden): throw and retry
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import {
  findPlanByProviderPriceId,
  getPlanById,
  isSubscriptionPlan,
  type PricingPlan,
  type SubscriptionPlan,
} from '@/config/pricing';
import { db } from '@/lib/db';
import { orders, user as userSchema } from '@/lib/db/schema';
import { getStripe } from '@/lib/stripe';
import { and, eq } from 'drizzle-orm';
import type Stripe from 'stripe';
import { cancelProviderSubscription } from './cancel';
import { settleDuplicateSubscription } from './duplicate';
import {
  applyRefund,
  fulfillOneTimePurchase,
  fulfillSubscriptionPayment,
  fulfillSubscriptionUpgrade,
  handleSubscriptionEnded,
  PermanentFulfillmentError,
  resolveSubject,
  resolveValidUserId,
  syncSubscription,
} from './fulfillment';
import {
  notifyFraudRefundUser,
  notifyFraudWarningAdmin,
  notifyInvoicePaymentFailed,
} from './notify';
import type {
  BillingSubject,
  CanonicalSubscriptionStatus,
  SubscriptionSyncInput,
} from './types';

// ============================================================================
// Status mapping — Stripe statuses are already ~canonical; the only outlier
// is incomplete_expired, which normalizes to 'expired'.
// ============================================================================

export function mapStripeSubscriptionStatus(
  stripeStatus: Stripe.Subscription.Status
): CanonicalSubscriptionStatus {
  switch (stripeStatus) {
    case 'incomplete_expired':
      return 'expired'
    case 'active':
    case 'trialing':
    case 'past_due':
    case 'unpaid':
    case 'canceled':
    case 'incomplete':
    case 'paused':
      return stripeStatus
  }
}

function tsToDate(seconds: number | null | undefined): Date | null {
  return seconds ? new Date(seconds * 1000) : null
}

// ----------------------------------------------------------------------------
// Resolution helpers
// ----------------------------------------------------------------------------

/**
 * userId resolution: explicit metadata → local mapping → Stripe customer.
 * Every level is validated against the user table (see fulfillment's
 * resolveValidUserId) — a deleted purchaser resolves to null; callers treat
 * that as "subject has no living user".
 */
export async function resolveStripeUserId(params: {
  metadata?: Stripe.Metadata | null
  customerId?: string | null
}): Promise<string | null> {
  const { metadata, customerId } = params

  const fromMetadata = await resolveValidUserId(metadata?.userId)
  if (fromMetadata) return fromMetadata

  if (!customerId) return null

  // Local mapping selects FROM the user table — existence by construction.
  const [row] = await db
    .select({ id: userSchema.id })
    .from(userSchema)
    .where(eq(userSchema.stripeCustomerId, customerId))
    .limit(1)
  if (row) return row.id

  const customer = await getStripe().customers.retrieve(customerId)
  if (!customer.deleted) {
    return resolveValidUserId(customer.metadata?.userId)
  }
  return null
}

async function resolveStripeSubject(params: {
  metadata?: Stripe.Metadata | null
  customerId?: string | null
}): Promise<BillingSubject> {
  const [userId, subject] = await Promise.all([
    resolveStripeUserId(params),
    resolveSubject({ organizationId: params.metadata?.organizationId }),
  ])
  return { userId, organizationId: subject.organizationId }
}

function resolvePlan(params: {
  metadata?: Stripe.Metadata | null
  priceId?: string | null
}): PricingPlan | null {
  const { metadata, priceId } = params
  const fromMetadata = metadata?.planId ? getPlanById(metadata.planId) : undefined
  if (fromMetadata) return fromMetadata
  const fromPrice = priceId
    ? findPlanByProviderPriceId('stripe', priceId)
    : undefined
  return fromPrice ?? null
}

// ----------------------------------------------------------------------------
// One-time credit pack purchase (checkout mode=payment)
// ----------------------------------------------------------------------------

/** 'paid', plus 100%-discounted sessions where Stripe collects nothing. */
function isSettled(session: Stripe.Checkout.Session): boolean {
  return (
    session.payment_status === 'paid' ||
    session.payment_status === 'no_payment_required'
  )
}

/**
 * Fulfills a completed checkout session in `payment` mode: records the order
 * and grants purchased credits atomically. Subscription-mode sessions are
 * ignored here — their money event is `invoice.paid`.
 */
export async function fulfillCheckoutSession(
  session: Stripe.Checkout.Session
): Promise<void> {
  if (session.mode !== 'payment') return
  if (!isSettled(session)) return

  const subject = await resolveStripeSubject({
    metadata: session.metadata,
    customerId: typeof session.customer === 'string' ? session.customer : null,
  })
  if (!subject.userId) {
    // Every session of this product carries metadata.userId (pinned at
    // checkout); failing to resolve it means the purchaser deleted their
    // account — accounts never come back, so this is a permanent error: the
    // route alerts (deduped) and acks.
    throw new PermanentFulfillmentError(
      `Cannot resolve user for checkout session ${session.id} — check metadata.userId`
    )
  }

  const plan = resolvePlan({ metadata: session.metadata })
  if (!plan || plan.kind !== 'credit_pack') {
    // Assumption: one Stripe account runs one product, so every payment-mode
    // session comes from this system's checkout (metadata.planId is pinned at
    // checkout). Reaching here means the plan entry was physically deleted
    // from config/pricing.ts (forbidden — retire with active:false); throwing
    // to retry and alert is deliberate.
    throw new Error(
      `Cannot resolve credit pack plan for checkout session ${session.id} (planId: ${session.metadata?.planId})`
    )
  }

  await fulfillOneTimePurchase({
    provider: 'stripe',
    providerOrderId: session.id,
    providerPaymentId:
      typeof session.payment_intent === 'string' ? session.payment_intent : null,
    subject,
    planId: plan.id,
    credits: plan.credits,
    amountTotal: session.amount_total ?? 0,
    amountSubtotal: session.amount_subtotal,
    amountDiscount: session.total_details?.amount_discount ?? 0,
    amountTax: session.total_details?.amount_tax ?? 0,
    currency: session.currency ?? 'usd',
    metadata: session.metadata,
  })
}

/**
 * Success-page entry point: fetch the session from Stripe and fulfill it
 * through the same idempotent path the webhook uses, so the user sees their
 * credits immediately even when the webhook is lagging.
 *
 * `expectedUserId` is the signed-in caller — fulfillment (and its Stripe
 * subscription/invoice lookups) only run when the session belongs to them.
 * The webhook remains the source of truth for everyone else.
 */
export async function fulfillCheckoutSessionById(
  sessionId: string,
  expectedUserId: string
): Promise<{
  paid: boolean
  planId: string | null
  userId: string | null
}> {
  const stripe = getStripe()
  const session = await stripe.checkout.sessions.retrieve(sessionId)

  const paid = isSettled(session)
  const planId = session.metadata?.planId ?? null
  const userId = session.metadata?.userId ?? null

  if (!paid || userId !== expectedUserId) return { paid, planId, userId }

  if (session.mode === 'payment') {
    await fulfillCheckoutSession(session)
  } else if (session.mode === 'subscription' && session.subscription) {
    const subscriptionId =
      typeof session.subscription === 'string'
        ? session.subscription
        : session.subscription.id
    const stripeSub = await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ['latest_invoice'],
    })
    const latestInvoice = stripeSub.latest_invoice as Stripe.Invoice | null
    if (latestInvoice?.status === 'paid') {
      await fulfillInvoicePaid(latestInvoice)
    } else {
      await syncStripeSubscription(stripeSub)
    }
  }

  return { paid, planId, userId }
}

// ----------------------------------------------------------------------------
// Subscription lifecycle
// ----------------------------------------------------------------------------

/** Stripe subscription object → core SubscriptionSyncInput (resolves subject and plan). */
async function buildSyncInput(stripeSub: Stripe.Subscription): Promise<{
  input: SubscriptionSyncInput
  plan: SubscriptionPlan
} | null> {
  const item = stripeSub.items.data[0]
  const priceId = item?.price?.id ?? null

  const plan = resolvePlan({ metadata: stripeSub.metadata, priceId })
  if (!plan || !isSubscriptionPlan(plan)) {
    console.error(
      `syncStripeSubscription: no subscription plan matches price ${priceId} for ${stripeSub.id}`
    )
    return null
  }

  // A deleted purchaser (resolves to null) still gets synced: the
  // subscription row is financial history. Team subscriptions carry
  // organizationId in subscription metadata (pinned at checkout, immutable
  // on the Stripe object) — it routes every grant, clear and clawback to
  // the org pool instead of the purchaser's buckets.
  const subject = await resolveStripeSubject({
    metadata: stripeSub.metadata,
    customerId:
      typeof stripeSub.customer === 'string' ? stripeSub.customer : null,
  })

  return {
    plan,
    input: {
      provider: 'stripe',
      providerSubscriptionId: stripeSub.id,
      subject,
      planId: plan.id,
      providerCustomerId:
        typeof stripeSub.customer === 'string' ? stripeSub.customer : null,
      providerPriceId: priceId,
      status: mapStripeSubscriptionStatus(stripeSub.status),
      interval: plan.interval,
      currentPeriodStart: tsToDate(item?.current_period_start),
      currentPeriodEnd: tsToDate(item?.current_period_end),
      cancelAtPeriodEnd: stripeSub.cancel_at_period_end,
      canceledAt: tsToDate(stripeSub.canceled_at),
      endedAt: tsToDate(stripeSub.ended_at),
      monthlyCredits: plan.monthlyCredits,
    },
  }
}

/**
 * Upserts the local subscription row from a Stripe subscription object.
 * Never touches the drip schedule — that belongs to invoice fulfillment.
 */
export async function syncStripeSubscription(
  stripeSub: Stripe.Subscription
): Promise<{
  subject: BillingSubject
  plan: SubscriptionPlan
} | null> {
  const built = await buildSyncInput(stripeSub)
  if (!built) return null
  await syncSubscription(built.input)
  return { subject: built.input.subject, plan: built.plan }
}

/** Invoice → refund handle (payment intent id); invoice.payments needs an explicit expand. */
async function resolveInvoicePaymentIntentId(
  invoiceId: string
): Promise<string | null> {
  const invoiceWithPayments = await getStripe().invoices.retrieve(invoiceId, {
    expand: ['payments'],
  })
  return (
    (invoiceWithPayments.payments?.data[0]?.payment
      ?.payment_intent as string | null) ?? null
  )
}

/**
 * Fulfills a paid subscription invoice: syncs the subscription, records the
 * order, grants this period's credits and (re)initializes the yearly drip
 * schedule. Idempotent via the (provider, invoice id) unique order key.
 *
 * billing_reason routing:
 *   subscription_create/cycle → a period opens, full-reset fulfillment;
 *   subscription_update → mid-cycle plan change, incremental fulfillment
 *     (watermark × remaining-time ratio; the core's conjunction of the two
 *     guarantees both anti-gaming and proportional granting; no amount-paid
 *     threshold — a $0 upgrade fully covered by credit balance still tops up,
 *     and the core skips a pure-downgrade $0 invoice on its own);
 *   everything else (manual, subscription_threshold …) → sync only.
 */
export async function fulfillInvoicePaid(invoice: Stripe.Invoice): Promise<void> {
  const subscriptionId =
    typeof invoice.parent?.subscription_details?.subscription === 'string'
      ? invoice.parent.subscription_details.subscription
      : null

  if (invoice.status !== 'paid' || !subscriptionId || !invoice.id) {
    return
  }

  const stripe = getStripe()
  const stripeSub = await stripe.subscriptions.retrieve(subscriptionId)

  if (
    invoice.billing_reason !== 'subscription_create' &&
    invoice.billing_reason !== 'subscription_cycle'
  ) {
    if (invoice.billing_reason === 'subscription_update') {
      const built = await buildSyncInput(stripeSub)
      if (!built) {
        // Same resolution-failure semantics as create/cycle below — see that comment.
        throw new Error(
          `Cannot fulfill invoice ${invoice.id}: subscription ${subscriptionId} did not resolve to a plan`
        )
      }
      await fulfillSubscriptionUpgrade({
        subscription: built.input,
        providerOrderId: invoice.id,
        providerPaymentId: await resolveInvoicePaymentIntentId(invoice.id),
        amountTotal: invoice.amount_paid,
        amountSubtotal: invoice.subtotal,
        amountDiscount:
          invoice.total_discount_amounts?.reduce(
            (sum, d) => sum + d.amount,
            0
          ) ?? 0,
        amountTax:
          invoice.total_taxes?.reduce((sum, t) => sum + t.amount, 0) ?? 0,
        currency: invoice.currency,
        metadata: { billingReason: invoice.billing_reason },
      })
      return
    }

    await syncStripeSubscription(stripeSub)
    return
  }

  const built = await buildSyncInput(stripeSub)
  if (!built) {
    // Assumption: one Stripe account runs one product — every subscription
    // invoice reaching this endpoint comes from this system's checkout, so
    // planId/price must resolve. The only realistic explanation for landing
    // here is that the plan entry was physically deleted from
    // config/pricing.ts (forbidden — always retire with active:false):
    // throwing so Stripe retries (up to 3 days) and alerting the admin every
    // time is deliberate — the money is already collected, and this must not
    // go quiet until it is fixed.
    throw new Error(
      `Cannot fulfill invoice ${invoice.id}: subscription ${subscriptionId} did not resolve to a plan`
    )
  }

  const paymentIntentId = await resolveInvoicePaymentIntentId(invoice.id)

  const { duplicate } = await fulfillSubscriptionPayment({
    subscription: built.input,
    orderType:
      invoice.billing_reason === 'subscription_create'
        ? 'subscription_initial'
        : 'subscription_renewal',
    providerOrderId: invoice.id,
    providerPaymentId: paymentIntentId,
    amountTotal: invoice.amount_paid,
    amountSubtotal: invoice.subtotal,
    amountDiscount:
      invoice.total_discount_amounts?.reduce((sum, d) => sum + d.amount, 0) ?? 0,
    amountTax: invoice.total_taxes?.reduce((sum, t) => sum + t.amount, 0) ?? 0,
    currency: invoice.currency,
    periodStart: tsToDate(stripeSub.items.data[0]?.current_period_start),
    metadata: { billingReason: invoice.billing_reason },
  })

  // Defense #2 settlement: first to fulfill wins, and this invoice's
  // subscription was judged a duplicate — hand it to ./duplicate for uniform
  // settlement (Stripe-side cancel + automatic refund + deduped alert; a
  // failed refund throws so Stripe retries, and on re-entry the core's replay
  // reports the duplicate again and refunds once more). The charge.refunded
  // event the refund triggers advances the zero-credit duplicate order to
  // refunded.
  if (duplicate) {
    const invoiceId = invoice.id
    await settleDuplicateSubscription({
      provider: 'stripe',
      providerSubscriptionId: subscriptionId,
      providerOrderId: invoiceId,
      winner: duplicate,
      amountTotal: invoice.amount_paid,
      currency: invoice.currency,
      userId: built.input.subject.userId,
      // Idempotency: idempotencyKey makes a replay within 24h return the same
      // refund; past that window a second refund raises
      // charge_already_refunded — normalized to success, so a replay is never
      // counted as a failure.
      refund: paymentIntentId
        ? async () => {
            try {
              await stripe.refunds.create(
                { payment_intent: paymentIntentId, reason: 'duplicate' },
                { idempotencyKey: `dup-refund-${invoiceId}` }
              )
            } catch (error) {
              if (isStripeAlreadyRefunded(error)) return
              throw error
            }
          }
        : undefined,
    })
  }
}

/** Stripe raises charge_already_refunded when a fully refunded charge is refunded again. */
function isStripeAlreadyRefunded(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: string }).code === 'charge_already_refunded'
  )
}

/** Subscription ended: sync final state, stop the drip, clear the bucket. */
export async function handleSubscriptionDeleted(
  stripeSub: Stripe.Subscription
): Promise<void> {
  // Full sync first (keeps subject/plan fresh); the end handler then reads
  // the local row for the subject — covering the case where sync bailed on
  // an unresolvable plan but an older row still exists.
  await syncStripeSubscription(stripeSub)

  await handleSubscriptionEnded('stripe', stripeSub.id, {
    status: mapStripeSubscriptionStatus(stripeSub.status),
    canceledAt: tsToDate(stripeSub.canceled_at),
    endedAt: tsToDate(stripeSub.ended_at),
  })
}

// ----------------------------------------------------------------------------
// Refunds & fraud
// ----------------------------------------------------------------------------

/**
 * Applies a charge refund to its order via the provider-agnostic core, then —
 * when a subscription order became fully refunded — cancels the Stripe
 * subscription (network call stays out of the core's transaction).
 */
export async function applyRefundForCharge(charge: Stripe.Charge): Promise<void> {
  const paymentIntentId =
    typeof charge.payment_intent === 'string' ? charge.payment_intent : null
  if (!paymentIntentId) return

  const { orderFound, fullRefundOfSubscription, providerSubscriptionId } =
    await applyRefund({
      provider: 'stripe',
      providerPaymentId: paymentIntentId,
      amountRefunded: charge.amount_refunded,
    })

  // Never silently ack when no local order is found (mirrors the PayPal refund
  // path): fulfillment may still be retrying, and swallowing a refund that
  // arrives first would leave the order that lands later holding full credits
  // and showing as never refunded forever. Throw so the response is 5xx — once
  // the order lands within the retry window, the replay advances idempotently.
  if (!orderFound) {
    throw new Error(
      `Stripe refund for charge ${charge.id}: no local order for payment intent ${paymentIntentId} — retrying until the order lands`
    )
  }

  // The resulting customer.subscription.deleted event clears the credit bucket.
  if (fullRefundOfSubscription && providerSubscriptionId) {
    await cancelProviderSubscription(
      'stripe',
      providerSubscriptionId,
      'Fully refunded'
    )
  }
}

/** Sync latest state and warn the user their renewal payment failed. */
export async function handleInvoicePaymentFailed(
  invoice: Stripe.Invoice
): Promise<void> {
  const subscriptionId =
    typeof invoice.parent?.subscription_details?.subscription === 'string'
      ? invoice.parent.subscription_details.subscription
      : null
  if (!subscriptionId) return

  const stripeSub = await getStripe().subscriptions.retrieve(subscriptionId)
  await syncStripeSubscription(stripeSub)

  const userId = await resolveStripeUserId({
    metadata: stripeSub.metadata,
    customerId:
      typeof stripeSub.customer === 'string' ? stripeSub.customer : null,
  })
  if (!userId) return

  await notifyInvoicePaymentFailed({
    invoice,
    subscriptionId,
    userId,
    planId: stripeSub.metadata?.planId ?? null,
  })
}

/**
 * Stripe Radar early fraud warning. Behavior is controlled by
 * STRIPE_RADAR_EARLY_FRAUD_WARNING_TYPE ("refund", "email" or "refund,email"):
 * refund the charge (cancelling any subscription behind it) and/or notify.
 */
export async function handleEarlyFraudWarning(
  warning: Stripe.Radar.EarlyFraudWarning
): Promise<void> {
  const stripe = getStripe()
  const chargeId =
    typeof warning.charge === 'string' ? warning.charge : warning.charge.id

  const actions = (process.env.STRIPE_RADAR_EARLY_FRAUD_WARNING_TYPE ?? '')
    .toLowerCase()
    .split(',')
    .map((a) => a.trim())
  const shouldRefund = actions.includes('refund')
  const shouldEmail = actions.includes('email')
  if (!shouldRefund && !shouldEmail) return

  const charge = await stripe.charges.retrieve(chargeId)
  const actionsTaken: string[] = []

  if (shouldRefund && !charge.refunded) {
    await stripe.refunds.create({ charge: chargeId, reason: 'fraudulent' })
    actionsTaken.push('Automatic refund initiated')
    // The refund lands as charge.refunded and claws credits back there.

    // A fraudulent subscription payment should also stop future renewals.
    // Our own ledger knows which subscription a payment belongs to.
    const paymentIntentId =
      typeof charge.payment_intent === 'string' ? charge.payment_intent : null
    if (paymentIntentId) {
      const [order] = await db
        .select({ providerSubscriptionId: orders.providerSubscriptionId })
        .from(orders)
        .where(
          and(
            eq(orders.provider, 'stripe'),
            eq(orders.providerPaymentId, paymentIntentId)
          )
        )
        .limit(1)
      if (order?.providerSubscriptionId) {
        // Go through the single provider-side cancel funnel (cancel.ts): it
        // tolerates an already-cancelled subscription and never throws, so
        // when the subscription is long dead the refund and notifications
        // still go out and the handler does not 5xx into resending mail.
        const cancelled = await cancelProviderSubscription(
          'stripe',
          order.providerSubscriptionId,
          'Fraudulent payment (Radar early fraud warning)'
        )
        if (cancelled) {
          actionsTaken.push(
            `Subscription ${order.providerSubscriptionId} cancelled`
          )
        }
      }
    }

    await notifyFraudRefundUser({ charge })
  }

  if (shouldEmail) {
    actionsTaken.push('Fraud warning email sent to administrators')
    await notifyFraudWarningAdmin({
      warningId: warning.id,
      charge,
      actionsTaken,
    })
  }
}
