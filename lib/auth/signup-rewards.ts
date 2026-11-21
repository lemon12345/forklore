/**
 * [INPUT]: Depends on @/config/credits' signupBonusCredits and signupGiftClusterCaps,
 *          @/lib/credits/ledger's grantSignupBonusCredits, @/lib/signup-gift-gate's
 *          decideSignupGift, @/lib/discord/notifications' notifySignupGiftWithheld,
 *          @/lib/logger
 * [OUTPUT]: Exports grantSignupRewards (signup reward orchestration: cluster
 *           decision -> welcome gift; a failure in either step is logged and never
 *           blocks the signup) and the SignupRewardsInput type
 * [POS]: The signup reward orchestration layer of lib/auth, called by index.ts'
 *        user.create.after hook. Division of labour with index.ts: the hook only
 *        lifts the signals (source IP, device-fingerprint cookie) and hands them
 *        over; "whether, how much and what on failure" all live here
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */
import 'server-only'

import { creditsConfig } from '@/config/credits'
import { grantSignupBonusCredits } from '@/lib/credits/ledger'
import { notifySignupGiftWithheld } from '@/lib/discord/notifications'
import { getLogger } from '@/lib/logger'
import { decideSignupGift } from '@/lib/signup-gift-gate'

const logger = getLogger('auth')

export interface SignupRewardsInput {
  userId: string
  email: string
  /** Cluster-decision signals: source IP and device-fingerprint cookie (missing = let through) */
  ip?: string
  deviceHash?: string
}

// ============================================================================
// Signup reward orchestration
//
// Two steps, each fault tolerant, in a fixed order:
//   1. Cluster decision. The ledger guarantees "once per user"; this step
//      guarantees "a bounded number of times per cluster". One person cycling
//      throwaway emails and VPN exits gets a fresh account each time, but not
//      a fresh device or network exit. A failure inside the decision itself
//      counts as "let through": the gate must never spoil a genuine new
//      user's first impression.
//   2. Welcome gift. The ledger's signup_bonus is once per user, so a replay
//      is harmless by construction.
//
// Why a file of its own instead of the hook in index.ts: the hook is auth
// configuration, the reward is an operations policy. The policy is long
// (decision -> gift -> log -> ops notification) and will keep growing; a
// referral bonus or an affiliate binding would be a third step appended
// here, and neither the hook nor the decision would have to change.
//
// Nothing here throws. Whether the signup succeeds is decided by the account
// alone; an undelivered reward is an ops issue, never a reason to leave the
// user stuck on the login page.
// ============================================================================
export async function grantSignupRewards(input: SignupRewardsInput): Promise<void> {
  const { userId, email, ip, deviceHash } = input
  if (creditsConfig.signupBonusCredits <= 0) return

  // ── 1. Identity-cluster decision ────────────────────────────────
  let rewardAllowed = true
  try {
    const decision = await decideSignupGift({ ip, deviceHash })
    rewardAllowed = decision.grant
    if (!decision.grant) {
      logger.warn({ userId, email, ...decision }, 'signup_gift_withheld')
      void notifySignupGiftWithheld({
        userId,
        email,
        reason: decision.reason ?? 'ip_cap',
        ip: decision.ip,
        deviceHash: decision.deviceHash,
        ipCount: decision.ipCount,
        deviceCount: decision.deviceCount,
      })
    }
  } catch (error) {
    logger.error({ userId, error }, 'signup_gift_gate_failed')
    rewardAllowed = true
  }
  if (!rewardAllowed) return

  // ── 2. Welcome gift ─────────────────────────────────────────────
  try {
    await grantSignupBonusCredits({
      userId,
      amount: creditsConfig.signupBonusCredits,
      note: 'Welcome bonus',
    })
  } catch (error) {
    logger.error({ userId, error }, 'signup_bonus_grant_failed')
  }
}
