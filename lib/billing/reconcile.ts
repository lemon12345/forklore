/**
 * [INPUT]: Depends on @/lib/stripe's getStripe, ./stripe's
 *          fulfillInvoicePaid/syncStripeSubscription/handleSubscriptionDeleted,
 *          ./creem's reconcileCreemSubscription, @/lib/creem/client's
 *          isCreemEnabled, ./paypal's fulfillPayPalCapture/
 *          handlePayPalCaptureDenied, @/lib/paypal's getPayPalCapture/
 *          isPayPalEnabled, @/config/pricing's PaymentProvider,
 *          @/lib/db and schema's subscriptions/orders tables
 * [OUTPUT]: Exports reconcileOverdueRenewals, reconcilePendingPayPalCaptures
 * [POS]: The reconciliation layer of lib/billing — cron-driven self-healing for
 *        lost webhooks: renewal reconciliation (subscriptions whose local
 *        period has passed without advancing are dispatched by provider to each
 *        adapter's "pull the latest invoice/transaction → replay the same
 *        idempotent fulfillment path"; stripe + creem, paypal see the TODO in
 *        this file) + PayPal pending-capture reconciliation (one-time orders
 *        with status='pending' are re-read from the source for their latest
 *        settlement state: COMPLETED promotes and grants credits / a terminal
 *        state marks them failed / still PENDING backs off and keeps waiting)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import type { PaymentProvider } from '@/config/pricing';
import { isCreemEnabled } from '@/lib/creem/client';
import { db } from '@/lib/db';
import { orders, subscriptions } from '@/lib/db/schema';
import { getPayPalCapture, isPayPalEnabled } from '@/lib/paypal';
import { getStripe } from '@/lib/stripe';
import { and, eq, inArray, lte } from 'drizzle-orm';
import type Stripe from 'stripe';
import { reconcileCreemSubscription } from './creem';
import {
  fulfillPayPalCapture,
  handlePayPalCaptureDenied,
} from './paypal';
import {
  fulfillInvoicePaid,
  handleSubscriptionDeleted,
  syncStripeSubscription,
} from './stripe';

// ============================================================================
// Renewal reconciliation — the scheduled safety net under the renewal webhook.
//
// Credits are always granted against money (invoice.paid / subscription.paid),
// never blindly on a timer: granting at period end regardless of payment
// would hand out free months during the provider's multi-week retry window.
// What the cron guarantees instead is DELIVERY: if the webhook is lost, any
// subscription whose local period ended over an hour ago gets its latest
// invoice/transaction pulled from the provider and pushed through the exact
// same idempotent fulfillment path.
//
// Backoff needs no extra state: every outcome (fulfill, sync, deletion,
// explicit touch on failure) bumps `updatedAt`, and the due-query requires
// `updatedAt` to also be older than the grace window — so each subscription
// is examined at most once per hour.
//
// TODO(paypal): PayPal renewals rely on their webhooks until the adapter
// grows an equivalent "pull latest sale" path (v1 sale ids are not readable
// through the v2 API).
// ============================================================================

/** Webhooks get this long to arrive before the cron chases the provider. */
const RENEWAL_GRACE_MS = 60 * 60 * 1000

/** Statuses that can still renew; canceled/unpaid rows are left alone. */
const RECONCILABLE_STATUSES = ['active', 'trialing', 'past_due']

type ReconcileOutcome = 'ended' | 'fulfilled' | 'synced'

/** Missed deletion → end-of-life path; missed invoice.paid → fulfill; else sync. */
async function reconcileStripeSubscription(
  providerSubscriptionId: string
): Promise<ReconcileOutcome> {
  const stripeSub = await getStripe().subscriptions.retrieve(
    providerSubscriptionId,
    { expand: ['latest_invoice'] }
  )

  if (
    stripeSub.status === 'canceled' ||
    stripeSub.status === 'incomplete_expired'
  ) {
    await handleSubscriptionDeleted(stripeSub)
    return 'ended'
  }

  const latestInvoice = stripeSub.latest_invoice as Stripe.Invoice | null
  if (latestInvoice?.status === 'paid') {
    // The (provider, invoice id) unique order key makes replays harmless.
    await fulfillInvoicePaid(latestInvoice)
    return 'fulfilled'
  }

  // Not paid yet (provider retrying, or invoice still open): sync the real
  // status; the updatedAt bump defers the next check an hour.
  await syncStripeSubscription(stripeSub)
  return 'synced'
}

/**
 * One "pull the latest → replay the webhook path" reconciler per provider;
 * unconfigured providers never enter the query — SDK calls without credentials
 * would only manufacture `failed` noise.
 */
const RENEWAL_RECONCILERS: Partial<
  Record<PaymentProvider, (providerSubscriptionId: string) => Promise<ReconcileOutcome>>
> = {
  stripe: reconcileStripeSubscription,
  ...(isCreemEnabled ? { creem: reconcileCreemSubscription } : {}),
}

/**
 * Reconciles up to `limit` subscriptions (any provider with a reconciler)
 * whose current period ended more than an hour ago without the local row
 * advancing. Oldest first. One provider API call per row — keep `limit`
 * modest.
 */
export async function reconcileOverdueRenewals(
  limit: number
): Promise<{ overdue: number; fulfilled: number; ended: number; failed: number }> {
  const cutoff = new Date(Date.now() - RENEWAL_GRACE_MS)
  const providers = Object.keys(RENEWAL_RECONCILERS) as PaymentProvider[]

  const overdue = await db
    .select({
      id: subscriptions.id,
      provider: subscriptions.provider,
      providerSubscriptionId: subscriptions.providerSubscriptionId,
    })
    .from(subscriptions)
    .where(
      and(
        inArray(subscriptions.provider, providers),
        lte(subscriptions.currentPeriodEnd, cutoff),
        lte(subscriptions.updatedAt, cutoff),
        inArray(subscriptions.status, RECONCILABLE_STATUSES)
      )
    )
    .orderBy(subscriptions.currentPeriodEnd)
    .limit(limit)

  let fulfilled = 0
  let ended = 0
  let failed = 0

  for (const row of overdue) {
    const reconcile = RENEWAL_RECONCILERS[row.provider]
    if (!reconcile) continue
    try {
      const outcome = await reconcile(row.providerSubscriptionId)
      if (outcome === 'fulfilled') fulfilled += 1
      else if (outcome === 'ended') ended += 1
    } catch (error) {
      failed += 1
      console.error(
        `reconcileOverdueRenewals: ${row.provider} subscription ${row.providerSubscriptionId} failed:`,
        error
      )
      // Never auto-cancel on lookup errors (a wrong-mode API key would 404
      // every live subscription). Touch the row so the retry backs off.
      await db
        .update(subscriptions)
        .set({ updatedAt: new Date() })
        .where(eq(subscriptions.id, row.id))
        .catch(() => {})
    }
  }

  return { overdue: overdue.length, fulfilled, ended, failed }
}

// ============================================================================
// PayPal pending-capture reconciliation — the safety net under the
// PAYMENT.CAPTURE.COMPLETED webhook. An accepted-but-unsettled capture
// (eCheck) is recorded locally as a status='pending', zero-credit order; if
// the settlement webhook is lost AND the buyer never revisits the success
// page, this sweep pulls the capture from PayPal and pushes it through the
// exact same idempotent promote-and-grant path. Backoff mirrors the renewal
// sweep: every outcome bumps `updatedAt` (drizzle $onUpdate), and the
// due-query requires it to be older than the grace window.
// ============================================================================

/** eCheck settlement takes days — querying PayPal at most hourly per row is plenty. */
const PENDING_CAPTURE_GRACE_MS = 60 * 60 * 1000

/**
 * Reconciles up to `limit` pending PayPal captures, oldest first. One PayPal
 * API call per row — keep `limit` modest. No-op when PayPal isn't configured.
 */
export async function reconcilePendingPayPalCaptures(
  limit: number
): Promise<{ pending: number; fulfilled: number; failed: number; errors: number }> {
  if (!isPayPalEnabled) {
    return { pending: 0, fulfilled: 0, failed: 0, errors: 0 }
  }

  const cutoff = new Date(Date.now() - PENDING_CAPTURE_GRACE_MS)

  const rows = await db
    .select({
      id: orders.id,
      captureId: orders.providerOrderId,
      metadata: orders.metadata,
    })
    .from(orders)
    .where(
      and(
        eq(orders.provider, 'paypal'),
        eq(orders.orderType, 'one_time'),
        eq(orders.status, 'pending'),
        lte(orders.createdAt, cutoff),
        lte(orders.updatedAt, cutoff)
      )
    )
    .orderBy(orders.createdAt)
    .limit(limit)

  let fulfilled = 0
  let failed = 0
  let errors = 0

  for (const row of rows) {
    try {
      const capture = await getPayPalCapture(row.captureId)
      // custom_id fallback: when the API payload omits it, use the original
      // value pinned in the trace row's metadata.
      const customId =
        capture.custom_id ??
        ((row.metadata as Record<string, unknown> | null)?.customId as
          | string
          | undefined)

      if (capture.status === 'COMPLETED') {
        // Missed settlement webhook: identical idempotent promote path.
        await fulfillPayPalCapture({
          captureId: capture.id,
          customId,
          amountValue: capture.amount?.value,
          currencyCode: capture.amount?.currency_code,
          metadata: { paypalCaptureId: capture.id, customId },
        })
        fulfilled += 1
      } else if (capture.status === 'PENDING') {
        // Still settling — touch the row so the next check backs off an hour.
        await db
          .update(orders)
          .set({ updatedAt: new Date() })
          .where(eq(orders.id, row.id))
      } else {
        // Terminal non-settlement (DECLINED/FAILED/...): same path as the
        // DENIED webhook — mark the trace failed and alert operations.
        await handlePayPalCaptureDenied({ ...capture, custom_id: customId })
        failed += 1
      }
    } catch (error) {
      errors += 1
      console.error(
        `reconcilePendingPayPalCaptures: capture ${row.captureId} failed:`,
        error
      )
      await db
        .update(orders)
        .set({ updatedAt: new Date() })
        .where(eq(orders.id, row.id))
        .catch(() => {})
    }
  }

  return { pending: rows.length, fulfilled, failed, errors }
}
