/**
 * [INPUT]: Depends on the Creem adapter fulfillment functions of
 *          @/lib/billing/creem, notifyCreditGrantFailed of @/lib/billing/notify,
 *          the event types of @/lib/creem/types, @/lib/api-response,
 *          creem/webhooks' verifyWebhookSignature (HMAC-SHA256, accepts both
 *          the three Standard Webhooks headers and the legacy single
 *          creem-signature header) / parseWebhookEvent /
 *          parseWebhookEventEntity (CREEM_WEBHOOK_SECRET)
 * [OUTPUT]: Exports POST (Creem webhook endpoint /api/creem/webhook)
 * [POS]: The only route of app/api/creem — verifies the signature, then
 *        dispatches the event to lib/billing/creem; carries no business logic
 *        itself. Unsubscribed event types are acked silently; handled types go
 *        through the SDK's strict parse (schema drift throws → 5xx, Creem
 *        retries with backoff within 24h and we alert). Transient/recoverable
 *        errors return 5xx so Creem retries automatically;
 *        PermanentFulfillmentError is alerted (deduplicated) and then acked so
 *        it never enters the retry loop; money events (checkout.completed /
 *        subscription.paid) additionally raise an email alert on failure
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { apiResponse } from '@/lib/api-response';
import {
  applyCreemRefund,
  fulfillCreemCheckout,
  fulfillCreemSubscriptionPaid,
  handleCreemDispute,
  handleCreemSubscriptionEnded,
  syncCreemSubscription,
} from '@/lib/billing/creem';
import { PermanentFulfillmentError } from '@/lib/billing/fulfillment';
import { notifyCreditGrantFailed } from '@/lib/billing/notify';
import type { CreemWebhookEventType } from '@/lib/creem/types';
import { getErrorMessage } from '@/lib/error-utils';
import {
  parseWebhookEvent,
  parseWebhookEventEntity,
  verifyWebhookSignature,
} from 'creem/webhooks';

export const maxDuration = 60

/** Events this route actually handles; other types are acked right after signature verification, never strictly parsed. */
const HANDLED_EVENTS: ReadonlySet<CreemWebhookEventType> = new Set<CreemWebhookEventType>([
  'checkout.completed',
  'subscription.paid',
  'subscription.active',
  'subscription.update',
  'subscription.trialing',
  'subscription.paused',
  'subscription.scheduled_cancel',
  'subscription.past_due',
  'subscription.unpaid',
  'subscription.canceled',
  'subscription.expired',
  'refund.created',
  'dispute.created',
])

const MONEY_EVENTS: ReadonlySet<string> = new Set([
  'checkout.completed',
  'subscription.paid',
])

/** Minimal payload shape for alerting — only id and metadata from the raw JSON, independent of the strict parse. */
type RawEventObject = { id?: string; metadata?: Record<string, unknown> }

export async function POST(req: Request) {
  const rawBody = await req.text()
  const secret = process.env.CREEM_WEBHOOK_SECRET

  if (!secret) {
    console.error('CREEM_WEBHOOK_SECRET not configured.')
    return apiResponse.serverError('Webhook secret not configured.')
  }

  try {
    await verifyWebhookSignature(rawBody, req.headers, { secret })
  } catch (error) {
    console.error('Creem webhook signature verification failed:', getErrorMessage(error))
    return apiResponse.badRequest('Signature verification failed.')
  }

  let envelope: ReturnType<typeof parseWebhookEvent<RawEventObject>>
  try {
    envelope = parseWebhookEvent<RawEventObject>(rawBody)
  } catch {
    return apiResponse.badRequest('Invalid webhook payload.')
  }

  const eventType = envelope.type
  if (!HANDLED_EVENTS.has(eventType as CreemWebhookEventType)) {
    return apiResponse.success({ received: true }) // unsubscribed event types are acknowledged silently
  }

  try {
    // Strict, typed parse (camelCase entities). A schema drift here is a
    // genuine "our code is stale" error: it 5xxs into Creem's retry window.
    const event = parseWebhookEventEntity(rawBody)

    switch (event.eventType) {
      case 'checkout.completed':
        await fulfillCreemCheckout(event.object)
        break

      case 'subscription.paid':
        await fulfillCreemSubscriptionPaid(event.object)
        break

      case 'subscription.active':
      case 'subscription.update':
      case 'subscription.trialing':
      case 'subscription.paused':
      case 'subscription.scheduled_cancel':
      case 'subscription.past_due':
      case 'subscription.unpaid':
        await syncCreemSubscription(event.object)
        break

      case 'subscription.canceled':
      case 'subscription.expired':
        await handleCreemSubscriptionEnded(event.object)
        break

      case 'refund.created':
        await applyCreemRefund(event.object)
        break

      case 'dispute.created':
        await handleCreemDispute(event.object)
        break
    }
    return apiResponse.success({ received: true })
  } catch (error) {
    console.error(`Creem webhook handler failed for ${eventType}:`, error)

    // A failed fulfillment rolls back atomically (no order, no credits) and
    // Creem will retry — but a paying user is waiting, so page the admin.
    if (MONEY_EVENTS.has(eventType)) {
      const metadata = envelope.data?.metadata ?? {}
      await notifyCreditGrantFailed({
        userId: typeof metadata.userId === 'string' ? metadata.userId : 'unknown',
        orderId: envelope.data?.id ?? 'unknown',
        planId: typeof metadata.planId === 'string' ? metadata.planId : 'unknown',
        error,
      })
    }

    // A permanent business error (buyer account deleted, etc.) will never
    // succeed on retry — the alert is already out, so ack it and keep it out of
    // the retry loop; recoverable errors still 5xx to keep the self-heal window.
    if (error instanceof PermanentFulfillmentError) {
      return apiResponse.success({ received: true, permanentError: true })
    }

    // 5xx makes Creem retry with backoff — our handlers are idempotent.
    return apiResponse.serverError(
      `Creem webhook handler failed: ${getErrorMessage(error)}`
    )
  }
}
