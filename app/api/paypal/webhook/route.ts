/**
 * [INPUT]: Depends on @/lib/paypal for isPayPalEnabled/verifyPayPalWebhookSignature/
 *          decodePayPalCustomId and the PayPalWebhookEvent type,
 *          @/lib/billing/paypal for the PayPal adapter's fulfillment functions
 *          (including recordPendingPayPalCapture),
 *          @/lib/billing/notify for notifyCreditGrantFailed, @/lib/api-response
 * [OUTPUT]: Exports POST (PayPal webhook endpoint /api/paypal/webhook)
 * [POS]: The webhook route of app/api/paypal — verifies the signature (skipped
 *        in development), then dispatches the event to lib/billing/paypal;
 *        holds no business logic itself; PENDING events record a pending trace
 *        row (the fallback for when the capture-order route is down);
 *        transient/recoverable errors return 5xx so PayPal retries
 *        automatically, PermanentFulfillmentError is alerted (deduplicated)
 *        then acked so it never enters the retry loop, and a failed money
 *        event alerts the admin (mirrors the stripe webhook route)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { apiResponse } from '@/lib/api-response';
import { PermanentFulfillmentError } from '@/lib/billing/fulfillment';
import { notifyCreditGrantFailed } from '@/lib/billing/notify';
import {
  handlePayPalCaptureCompleted,
  handlePayPalCaptureDenied,
  handlePayPalCaptureRefunded,
  handlePayPalSaleCompleted,
  handlePayPalSaleRefunded,
  handlePayPalSubscriptionActivated,
  handlePayPalSubscriptionEnded,
  handlePayPalSubscriptionPaymentFailed,
  handlePayPalSubscriptionSuspended,
  recordPendingPayPalCapture,
} from '@/lib/billing/paypal';
import { getErrorMessage } from '@/lib/error-utils';
import { decodePayPalCustomId, isPayPalEnabled } from '@/lib/paypal';
import type { PayPalWebhookEvent } from '@/lib/paypal/types';
import { verifyPayPalWebhookSignature } from '@/lib/paypal/webhook-verify';
import { headers } from 'next/headers';

export const maxDuration = 60

export async function POST(req: Request) {
  if (!isPayPalEnabled) {
    return apiResponse.serverError('PayPal is not configured.')
  }

  const rawBody = await req.text()
  const headerPayload = await headers()

  // Signature verification (exponential-backoff retry: see webhook-verify).
  // Skipped in local development — PayPal cannot deliver a verifiable real
  // event to localhost.
  const skipWebhookVerify = process.env.NODE_ENV === 'development'
  if (!skipWebhookVerify) {
    const webhookHeaders = {
      authAlgo: headerPayload.get('paypal-auth-algo') || '',
      certUrl: headerPayload.get('paypal-cert-url') || '',
      transmissionId: headerPayload.get('paypal-transmission-id') || '',
      transmissionSig: headerPayload.get('paypal-transmission-sig') || '',
      transmissionTime: headerPayload.get('paypal-transmission-time') || '',
    }

    if (!webhookHeaders.transmissionId || !webhookHeaders.transmissionSig) {
      return apiResponse.badRequest('Missing PayPal webhook signature headers.')
    }

    const isValid = await verifyPayPalWebhookSignature(webhookHeaders, rawBody)
    if (!isValid) {
      return apiResponse.badRequest('Webhook signature verification failed.')
    }
  } else {
    console.warn(
      '[PayPal Webhook] Skipping signature verification (NODE_ENV=development)'
    )
  }

  let event: PayPalWebhookEvent
  try {
    event = JSON.parse(rawBody)
  } catch {
    return apiResponse.badRequest('Invalid JSON payload.')
  }

  try {
    switch (event.event_type) {
      // ------------------------------------------------------------------
      // One-time capture events
      // ------------------------------------------------------------------
      case 'PAYMENT.CAPTURE.COMPLETED':
        // The capture-order route is the synchronous source of truth; this
        // is the idempotent fallback.
        await handlePayPalCaptureCompleted(event.resource)
        break

      case 'PAYMENT.CAPTURE.REFUNDED':
      case 'PAYMENT.CAPTURE.REVERSED':
        await handlePayPalCaptureRefunded(event.resource)
        break

      case 'PAYMENT.CAPTURE.DENIED':
      case 'PAYMENT.CAPTURE.DECLINED':
        // Death notice for a pending capture (eCheck bounce / risk decline):
        // no local order, no credits (PENDING never grants), nothing to roll
        // back — alert ops to close out the in-flight money.
        await handlePayPalCaptureDenied(event.resource)
        break

      case 'PAYMENT.CAPTURE.PENDING':
        // The capture-order route is the synchronous trace source of truth;
        // this is the idempotent fallback — if that route is down, in-flight
        // money still leaves a pending order row to trace. When PENDING turns
        // COMPLETED, PAYMENT.CAPTURE.COMPLETED promotes it in place and grants
        // the credits.
        await recordPendingPayPalCapture({
          captureId: event.resource.id,
          customId: event.resource.custom_id,
          amountValue: event.resource.amount?.value,
          currencyCode: event.resource.amount?.currency_code,
          metadata: {
            paypalCaptureId: event.resource.id,
            customId: event.resource.custom_id,
          },
        })
        break

      // ------------------------------------------------------------------
      // Subscription payment events (legacy v1 sale resource)
      // ------------------------------------------------------------------
      case 'PAYMENT.SALE.COMPLETED':
        await handlePayPalSaleCompleted(event.resource)
        break

      case 'PAYMENT.SALE.REFUNDED':
      case 'PAYMENT.SALE.REVERSED':
        await handlePayPalSaleRefunded(event.resource)
        break

      // ------------------------------------------------------------------
      // Subscription lifecycle events
      // ------------------------------------------------------------------
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
      case 'BILLING.SUBSCRIPTION.UPDATED':
        await handlePayPalSubscriptionActivated(event.resource)
        break

      case 'BILLING.SUBSCRIPTION.SUSPENDED':
        await handlePayPalSubscriptionSuspended(event.resource)
        break

      case 'BILLING.SUBSCRIPTION.PAYMENT.FAILED':
        await handlePayPalSubscriptionPaymentFailed(event.resource)
        break

      case 'BILLING.SUBSCRIPTION.CANCELLED':
      case 'BILLING.SUBSCRIPTION.EXPIRED':
        await handlePayPalSubscriptionEnded(event.resource)
        break

      default:
        break // Silently ack unsubscribed event types (CHECKOUT.ORDER.APPROVED, etc.)
    }
    return apiResponse.success({ received: true })
  } catch (error) {
    console.error(
      `[PayPal Webhook] Handler failed for ${event.event_type}:`,
      error
    )

    // A failed fulfillment rolls back atomically (no order, no credits) and
    // PayPal retries — but the user who paid is waiting, so alert the admin
    // when a money event fails (mirrors the stripe webhook route).
    if (
      event.event_type === 'PAYMENT.CAPTURE.COMPLETED' ||
      event.event_type === 'PAYMENT.SALE.COMPLETED'
    ) {
      const decoded = decodePayPalCustomId(
        event.resource?.custom_id ?? event.resource?.custom
      )
      await notifyCreditGrantFailed({
        userId: decoded?.userId ?? 'unknown',
        orderId: event.resource?.id ?? 'unknown',
        planId: decoded?.planId ?? 'unknown',
        error,
      })
    }

    // Permanent business errors (the purchaser deleted their account, etc.)
    // will never succeed on retry — the alert is already sent, so ack and stay
    // out of the retry loop; recoverable errors still return 5xx to keep the
    // self-heal window open.
    if (error instanceof PermanentFulfillmentError) {
      return apiResponse.success({ received: true, permanentError: true })
    }

    // 5xx triggers PayPal's exponential-backoff retry — every handler is idempotent.
    return apiResponse.serverError(
      `Webhook handler failed: ${getErrorMessage(error)}`
    )
  }
}
