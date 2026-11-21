/**
 * [INPUT]: Depends on @/lib/stripe for the stripe client, @/lib/billing/stripe
 *          for the Stripe adapter's fulfillment functions, @/lib/billing/notify
 *          for email notifications, @/lib/api-response
 * [OUTPUT]: Exports POST (Stripe webhook endpoint /api/stripe/webhook)
 * [POS]: The only route in app/api/stripe — verifies the signature, then
 *        dispatches the event to lib/billing/stripe and holds no business
 *        logic of its own; transient/fixable errors return 5xx so Stripe
 *        retries automatically (fulfillment catches up once a fix is
 *        deployed), while a PermanentFulfillmentError (the buyer's account is
 *        deleted and other errors where retrying can never succeed) is
 *        alerted (deduped) and then acked so it never enters the retry loop
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { apiResponse } from '@/lib/api-response';
import { PermanentFulfillmentError } from '@/lib/billing/fulfillment';
import { notifyCreditGrantFailed } from '@/lib/billing/notify';
import {
  applyRefundForCharge,
  fulfillCheckoutSession,
  fulfillInvoicePaid,
  handleEarlyFraudWarning,
  handleInvoicePaymentFailed,
  handleSubscriptionDeleted,
  syncStripeSubscription,
} from '@/lib/billing/stripe';
import { getErrorMessage } from '@/lib/error-utils';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import type Stripe from 'stripe';

export const maxDuration = 60

export async function POST(req: Request) {
  const body = await req.text()
  const sig = (await headers()).get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !webhookSecret) {
    return apiResponse.badRequest('Webhook secret not configured')
  }
  if (!stripe) {
    return apiResponse.serverError('Stripe is not initialized')
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    return apiResponse.badRequest(`Webhook Error: ${getErrorMessage(err)}`)
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await fulfillCheckoutSession(event.data.object)
        break

      case 'invoice.paid':
        await fulfillInvoicePaid(event.data.object)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await syncStripeSubscription(event.data.object)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object)
        break

      case 'charge.refunded':
        await applyRefundForCharge(event.data.object)
        break

      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object)
        break

      case 'radar.early_fraud_warning.created':
        await handleEarlyFraudWarning(event.data.object)
        break

      default:
        break // unsubscribed event types are acknowledged silently
    }
    return apiResponse.success({ received: true })
  } catch (error) {
    console.error(`Webhook handler failed for ${event.type}:`, error)

    // A failed fulfillment rolls back atomically (no order, no credits) and
    // Stripe will retry — but a paying user is waiting, so page the admin
    // (deduped per object: retries and the reconcile cron only log).
    if (
      event.type === 'checkout.session.completed' ||
      event.type === 'invoice.paid'
    ) {
      const object = event.data.object as {
        id: string
        metadata?: Stripe.Metadata | null
      }
      await notifyCreditGrantFailed({
        userId: object.metadata?.userId ?? 'unknown',
        orderId: object.id,
        planId: object.metadata?.planId ?? 'unknown',
        error,
      })
    }

    // Retrying a permanent business error (the buyer deleted their account,
    // etc.) can never succeed — the alert is already out, so ack it instead of
    // letting Stripe hammer for 3 days for nothing; fixable errors such as a
    // failed plan lookup still return 5xx to keep the retry window open
    // (fulfillment catches up once a fix is deployed).
    if (error instanceof PermanentFulfillmentError) {
      return apiResponse.success({ received: true, permanentError: true })
    }

    // 5xx makes Stripe retry with backoff — our handlers are idempotent.
    return apiResponse.serverError(
      `Webhook handler failed: ${getErrorMessage(error)}`
    )
  }
}
