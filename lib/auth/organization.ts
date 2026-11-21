/**
 * [INPUT]: Depends on better-auth's organization plugin and APIError, the
 *          member/invitation/subscriptions/creditTransactions tables of
 *          @/lib/db and schema, @/config/pricing's getPlanSeats, @/lib/credits'
 *          ENTITLED_SUBSCRIPTION_STATUSES (sole source of truth for a "live
 *          subscription") and DbTransaction, @/lib/mail's sendEmail and the
 *          @/emails/organization-invitation template
 * [OUTPUT]: Exports organizationPlugin (a fully configured Better Auth
 *           organization plugin instance)
 * [POS]: Organization layer of lib/auth — two-path seat-cap defense: the
 *        pre-checks (beforeCreateInvitation counts pending placeholders /
 *        beforeAcceptInvitation covers the invited-join main path /
 *        beforeAddMember — better-auth 1.4.7's accept-invitation does not fire
 *        the addMember hooks, so both pairs must be hung) +
 *        reclaimSeatIfOverCap concurrency compensation (advisory lock
 *        serializes, the newest over-cap row is evicted; throw only after the
 *        deleting transaction commits — never delete+throw in one transaction);
 *        seat decisions funnel through getOrgSeatCap: liveness = ENTITLED
 *        (dunning keeps seats, same law as credits/the team page), no
 *        subscription means seats=1 holding only the owner, config/pricing.ts
 *        is the source of truth for seat counts; beforeDeleteOrganization is
 *        the deletion guard (refuses on a live subscription or any funding
 *        history, FK RESTRICT is the database backstop);
 *        invitation email link /accept-invitation/{id}; mounted into plugins
 *        by index.ts
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { getPlanSeats } from '@/config/pricing';
import { siteConfig } from '@/config/site';
import { OrganizationInvitationEmail } from '@/emails/organization-invitation';
import { ENTITLED_SUBSCRIPTION_STATUSES, type DbTransaction } from '@/lib/credits';
import { db } from '@/lib/db';
import {
  creditTransactions,
  invitation,
  member,
  subscriptions,
} from '@/lib/db/schema';
import { sendEmail } from '@/lib/mail';
import { and, asc, count, desc, eq, gt, inArray, sql } from 'drizzle-orm';
import { APIError } from 'better-auth/api';
import { organization } from 'better-auth/plugins';

/**
 * Seat cap = planId of the organization's current "live" team subscription →
 * getPlanSeats. Sole outlet in this file for seat and subscription-liveness
 * decisions. Liveness reuses ENTITLED_SUBSCRIPTION_STATUSES (same source of
 * truth as credits/retention/team pages): during dunning (past_due/unpaid)
 * seats are retained like every other entitlement — members are not kicked,
 * the cap does not shrink, and UI display always matches hook enforcement.
 * No subscription collapses to 1 (owner only), so "no team subscription means
 * no inviting" needs zero special branches.
 */
async function getOrgSeatCap(
  dbOrTx: typeof db | DbTransaction,
  organizationId: string
): Promise<{ seats: number; hasTeamSubscription: boolean }> {
  const [sub] = await dbOrTx
    .select({ planId: subscriptions.planId })
    .from(subscriptions)
    .where(
      and(
        eq(subscriptions.organizationId, organizationId),
        inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES)
      )
    )
    .orderBy(desc(subscriptions.createdAt))
    .limit(1)
  return { seats: getPlanSeats(sub?.planId), hasTeamSubscription: !!sub }
}

const seatsFullMessage = (seats: number) =>
  `All ${seats} seats of your team plan are taken. Remove a member or upgrade your plan.`

/**
 * Seat gate, shared by the invite hook (counts pending invitations too, so
 * outstanding invites reserve seats) and the join hook (members only — an
 * accepted invite consumes the seat it reserved).
 */
async function assertSeatAvailable(
  organizationId: string,
  opts: { includePendingInvitations: boolean }
): Promise<void> {
  const { seats, hasTeamSubscription } = await getOrgSeatCap(db, organizationId)

  const [{ value: memberCount }] = await db
    .select({ value: count() })
    .from(member)
    .where(eq(member.organizationId, organizationId))

  let reserved = 0
  if (opts.includePendingInvitations) {
    const [{ value }] = await db
      .select({ value: count() })
      .from(invitation)
      .where(
        and(
          eq(invitation.organizationId, organizationId),
          eq(invitation.status, 'pending'),
          gt(invitation.expiresAt, new Date())
        )
      )
    reserved = value
  }

  if (memberCount + reserved >= seats) {
    throw new APIError('FORBIDDEN', {
      message: hasTeamSubscription
        ? seatsFullMessage(seats)
        : 'Inviting members requires an active team subscription.',
    })
  }
}

/**
 * Concurrency compensation for the seat cap: the before hooks are lock-free
 * count-then-act, so two concurrent accepts/joins can both pass the pre-check
 * and push the member count past the paid seats. The plugin's member insert is
 * not inside our transaction, so we cannot cover check+insert with a lock —
 * instead we converge after the fact: advisory lock serializes → recount →
 * when over cap, order by (createdAt, id) to pick the "newest N over-cap"
 * rows, and each call rolls back only the row it just inserted. Deterministic
 * selection guarantees that in a concurrent double-overshoot each intruder
 * evicts exactly itself, never an existing member.
 *
 * Deleting and throwing MUST be separated: delete-then-throw inside one
 * transaction rolls back its own delete (the member stays, yet the user sees
 * an error). The transaction is only responsible for "delete the row and
 * carry out the seat count"; we throw AFTER it commits — the rejected user
 * sees seats-full and the member table stays within the cap.
 */
async function reclaimSeatIfOverCap(added: {
  id: string
  organizationId: string
}): Promise<void> {
  const rejectedSeats = await db.transaction(async (tx) => {
    await tx.execute(
      sql`select pg_advisory_xact_lock(hashtext(${'org-seats-' + added.organizationId}))`
    )

    const { seats } = await getOrgSeatCap(tx, added.organizationId)

    const rows = await tx
      .select({ id: member.id })
      .from(member)
      .where(eq(member.organizationId, added.organizationId))
      .orderBy(asc(member.createdAt), asc(member.id))

    const excess = rows.length - seats
    if (excess <= 0) return null

    // Over-cap rows = the last `excess` rows in order; only dispose of the
    // one this very call inserted.
    const newest = rows.slice(-excess)
    if (!newest.some((row) => row.id === added.id)) return null

    await tx.delete(member).where(eq(member.id, added.id))
    return seats
  })

  if (rejectedSeats !== null) {
    throw new APIError('FORBIDDEN', {
      message: seatsFullMessage(rejectedSeats),
    })
  }
}

export const organizationPlugin = organization({
  creatorRole: 'owner',
  // Orgs a user may create — creating is free, entitlements come from the
  // team subscription, so this is only an abuse backstop.
  organizationLimit: 5,
  // Real seat caps live in the hooks below (they follow the subscription);
  // the plugin-level limit is a generous safety net.
  membershipLimit: 100,
  invitationExpiresIn: 60 * 60 * 48,
  cancelPendingInvitationsOnReInvite: true,
  sendInvitationEmail: async (data) => {
    const adminEmail = process.env.DEFAULT_ADMIN_EMAIL
    if (!adminEmail) {
      throw new Error('DEFAULT_ADMIN_EMAIL is not configured')
    }

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/accept-invitation/${data.id}`
    const result = await sendEmail({
      to: data.email,
      from: {
        email: adminEmail,
        name: process.env.DEFAULT_ADMIN_NAME || siteConfig.name,
      },
      subject: `You're invited to join ${data.organization.name} on ${siteConfig.name}`,
      react: OrganizationInvitationEmail,
      reactProps: {
        url,
        organizationName: data.organization.name,
        inviterName: data.inviter.user?.name,
        inviterEmail: data.inviter.user?.email,
      },
    })
    if (!result.success) {
      throw result.error ?? new Error('Failed to send invitation email')
    }
  },
  organizationHooks: {
    beforeCreateInvitation: async ({ invitation: pending }) => {
      await assertSeatAvailable(pending.organizationId, {
        includePendingInvitations: true,
      })
    },
    /**
     * Guard on the invited-join main path: better-auth 1.4.7's
     * accept-invitation route calls adapter.createMember directly and only
     * fires before/afterAcceptInvitation — before/afterAddMember never run on
     * this main path (they only cover createOrganization and the server-side
     * addMember endpoint). Seat enforcement must hang on BOTH hook pairs.
     * The accepter consumes the seat its own invitation reserved, so this
     * pre-check no longer counts pending invitations.
     */
    beforeAcceptInvitation: async ({ invitation: accepting }) => {
      await assertSeatAvailable(accepting.organizationId, {
        includePendingInvitations: false,
      })
    },
    /**
     * Concurrency compensation (see reclaimSeatIfOverCap). When the
     * compensation throws, the invitation has already flipped to accepted and
     * activeOrganizationId already points at the org: the invitation is
     * consumed (the owner simply re-invites; we don't reverse its status),
     * and the workspace pointer degrades back to personal naturally via
     * getWorkspaceContext's live membership check — nothing to clean up here.
     */
    afterAcceptInvitation: async ({ member: added }) => {
      await reclaimSeatIfOverCap(added)
    },
    beforeAddMember: async ({ member: joining }) => {
      await assertSeatAvailable(joining.organizationId, {
        includePendingInvitations: false,
      })
    },
    afterAddMember: async ({ member: added }) => {
      await reclaimSeatIfOverCap(added)
    },
    /**
     * Organization deletion guard:
     * 1. A live team subscription (incl. dunning — the provider is still
     *    retrying payment) → refuse: the shared pool is a paid entitlement,
     *    and deleting the subject would leave late subscription webhooks with
     *    nowhere to land;
     * 2. Any funding history (subscription rows / ledger rows) → refuse:
     *    financial records must not evaporate with their subject — the
     *    schema-level FK RESTRICT is the database backstop of this same rule.
     * Only "clean" organizations that never touched money may hard-delete.
     */
    beforeDeleteOrganization: async ({ organization: org }) => {
      const { hasTeamSubscription } = await getOrgSeatCap(db, org.id)
      if (hasTeamSubscription) {
        throw new APIError('FORBIDDEN', {
          message:
            'This team has an active subscription. Cancel it before deleting the team.',
        })
      }

      const [anySub] = await db
        .select({ id: subscriptions.id })
        .from(subscriptions)
        .where(eq(subscriptions.organizationId, org.id))
        .limit(1)
      const [anyLedger] = await db
        .select({ id: creditTransactions.id })
        .from(creditTransactions)
        .where(eq(creditTransactions.organizationId, org.id))
        .limit(1)
      if (anySub || anyLedger) {
        throw new APIError('FORBIDDEN', {
          message:
            'This team has billing history and cannot be deleted. Contact support if you need it archived.',
        })
      }
    },
  },
})
