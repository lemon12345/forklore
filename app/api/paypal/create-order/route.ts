/**
 * [INPUT]: Depends on @/lib/auth/server's getSession/getWorkspaceContext,
 *          @/config/pricing's getPlanById/getPlanCopy, @/lib/paypal's
 *          createPayPalOrder/isPayPalEnabled, @/lib/api-response,
 *          @/lib/error-utils' getErrorMessage
 * [OUTPUT]: Exports POST (/api/paypal/create-order),
 *           takes {planId}, returns {success:true, data:{orderId}} on success
 * [POS]: The order-creation route of app/api/paypal — first hop of
 *        PayPalCheckoutButton's one-time payment flow: after validating the
 *        plan (an active paypal credit pack) and the team-workspace guard
 *        (409, the same iron rule as the checkout action's
 *        TEAM_WORKSPACE_CREDIT_PACK), it creates a PayPal Order priced
 *        dynamically from config, with custom_id pinning
 *        {userId, planId} (credit packs are personal assets, no organizationId);
 *        PayPal subscriptions do not use this route (the checkout action
 *        redirects to the approval URL)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { getPlanById, getPlanCopy } from '@/config/pricing';
import { apiResponse } from '@/lib/api-response';
import { getSession, getWorkspaceContext } from '@/lib/auth/server';
import { getErrorMessage } from '@/lib/error-utils';
import { createPayPalOrder, isPayPalEnabled } from '@/lib/paypal';

export async function POST(req: Request) {
  const session = await getSession()
  const user = session?.user
  if (!user) {
    return apiResponse.unauthorized()
  }

  if (!isPayPalEnabled) {
    return apiResponse.serverError('PayPal is not configured.')
  }

  let planId: string | undefined
  try {
    ;({ planId } = await req.json())
  } catch {
    return apiResponse.badRequest('Invalid request body.')
  }
  if (!planId) {
    return apiResponse.badRequest('Missing planId.')
  }

  // config/pricing.ts is the pricing source of truth — no plans in the database,
  // and amounts are never trusted from the client.
  const plan = getPlanById(planId)
  if (!plan || plan.active === false) {
    return apiResponse.notFound(`Unknown plan: ${planId}`)
  }
  if (plan.provider !== 'paypal') {
    return apiResponse.badRequest(
      `Plan ${planId} is not a PayPal plan (provider: ${plan.provider}).`
    )
  }
  if (plan.kind !== 'credit_pack') {
    return apiResponse.badRequest(
      'PayPal subscriptions are purchased through checkout, not the PayPal button flow.'
    )
  }

  // Credit packs are personal assets (custom_id carries no organizationId), so
  // buying one inside a team workspace would mean "paid, yet the current
  // workspace balance never moves" — the same iron rule as
  // createCheckoutSession's TEAM_WORKSPACE_CREDIT_PACK guard. 409 is this
  // route's only conflict semantic; PayPalCheckoutButton uses it to prompt
  // switching back to the personal workspace.
  const workspace = await getWorkspaceContext()
  if (workspace?.organizationId) {
    return apiResponse.conflict(
      'Credit packs are personal purchases. Switch to your personal workspace to buy one.'
    )
  }

  try {
    // plan.price is in major currency units (9.9 = $9.90); PayPal wants a decimal string.
    const paypalOrder = await createPayPalOrder({
      amount: plan.price.toFixed(2),
      currency: plan.currency,
      description: getPlanCopy(plan, 'en').name,
      customIdData: {
        userId: user.id,
        planId: plan.id,
      },
    })

    return apiResponse.success({ orderId: paypalOrder.id })
  } catch (error) {
    console.error('[PayPal Create Order] Error:', error)
    return apiResponse.serverError(
      `Failed to create PayPal order: ${getErrorMessage(error)}`
    )
  }
}
