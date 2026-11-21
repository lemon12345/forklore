/**
 * [INPUT]: Depends on @/lib/credits' adjustCredits/getUserCredits, @/lib/db and
 *          schema's creditTransactions/user tables, @/lib/auth/server's
 *          getSession + isAdmin
 * [OUTPUT]: exports adjustUserCredits, getUserCreditsForAdmin,
 *           getAdminCreditTransactions, grantCreditsToUsers (server actions)
 * [POS]: The admin side of actions/credits — manual adjustment, batch grants and
 *        global ledger audit; every change requires a note and is written to the
 *        ledger (including the acting admin)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

'use server';

import { actionResponse, ActionResult } from '@/lib/action-response';
import { getSession, isAdmin } from '@/lib/auth/server';
import {
  adjustCredits,
  getUserCredits,
  type UserCredits,
} from '@/lib/credits';
import { db } from '@/lib/db';
import {
  CreditTransactionType,
  creditTransactions,
  user as userSchema,
} from '@/lib/db/schema';
import { and, count, desc, eq, ilike, inArray, sql } from 'drizzle-orm';

/** Hard cap for one batch grant — keeps the transaction bounded. */
const BATCH_GRANT_MAX_RECIPIENTS = 200

/**
 * Manually grant (positive) or remove (negative) credits for a user.
 * The acting admin and reason are recorded in the ledger note.
 */
export async function adjustUserCredits(params: {
  userId: string
  delta: number
  reason: string
}): Promise<ActionResult<UserCredits>> {
  if (!(await isAdmin())) return actionResponse.forbidden()
  const session = await getSession()

  const { userId, delta, reason } = params
  if (!Number.isInteger(delta) || delta === 0) {
    return actionResponse.badRequest('Delta must be a non-zero integer.')
  }
  if (!reason.trim()) {
    return actionResponse.badRequest('A reason is required.')
  }

  try {
    const buckets = await adjustCredits({
      userId,
      delta,
      note: `${reason.trim()} (by admin ${session?.user?.email ?? 'unknown'})`,
    })
    return actionResponse.success({
      subscriptionCredits: buckets.subscription,
      purchasedCredits: buckets.purchased,
      totalCredits: buckets.subscription + buckets.purchased,
    })
  } catch (error) {
    console.error('adjustUserCredits failed:', error)
    return actionResponse.error('Failed to adjust credits.')
  }
}

/** Read a user's balances for the admin users table. */
export async function getUserCreditsForAdmin(params: {
  userId: string
}): Promise<ActionResult<UserCredits>> {
  if (!(await isAdmin())) return actionResponse.forbidden()

  try {
    return actionResponse.success(await getUserCredits(params.userId))
  } catch (error) {
    console.error('getUserCreditsForAdmin failed:', error)
    return actionResponse.error('Failed to load user credits.')
  }
}

export interface AdminCreditTransactionItem {
  id: string
  /** Null after account deletion — the ledger is de-identified, not erased. */
  userId: string | null
  userEmail: string | null
  userName: string | null
  type: CreditTransactionType
  amount: number
  subscriptionCreditsAfter: number
  purchasedCreditsAfter: number
  note: string | null
  orderId: string | null
  createdAt: Date
}

/**
 * Global credit ledger for admin audit — one query serves both the
 * credits page (no userId) and the user-detail drilldown (userId set).
 */
export async function getAdminCreditTransactions(params: {
  pageIndex: number
  pageSize: number
  /** Restrict to one user (user-detail page) */
  userId?: string
  type?: CreditTransactionType
  /** Matches user email or ledger note (partial, case-insensitive) */
  search?: string
}): Promise<
  ActionResult<{ items: AdminCreditTransactionItem[]; total: number }>
> {
  if (!(await isAdmin())) return actionResponse.forbidden()

  const { pageIndex, pageSize, userId, type, search } = params
  const where = and(
    userId ? eq(creditTransactions.userId, userId) : undefined,
    type ? eq(creditTransactions.type, type) : undefined,
    search
      ? sql`(${ilike(userSchema.email, `%${search}%`)} OR ${ilike(
          creditTransactions.note,
          `%${search}%`
        )})`
      : undefined
  )

  try {
    const [items, [{ total }]] = await Promise.all([
      db
        .select({
          id: creditTransactions.id,
          userId: creditTransactions.userId,
          userEmail: userSchema.email,
          userName: userSchema.name,
          type: creditTransactions.type,
          amount: creditTransactions.amount,
          subscriptionCreditsAfter: creditTransactions.subscriptionCreditsAfter,
          purchasedCreditsAfter: creditTransactions.purchasedCreditsAfter,
          note: creditTransactions.note,
          orderId: creditTransactions.orderId,
          createdAt: creditTransactions.createdAt,
        })
        .from(creditTransactions)
        .leftJoin(userSchema, eq(creditTransactions.userId, userSchema.id))
        .where(where)
        // seq tiebreak: rows written in one transaction (cycle expire + grant)
        // share createdAt; insertion order must win.
        .orderBy(desc(creditTransactions.createdAt), desc(creditTransactions.seq))
        .limit(pageSize)
        .offset(pageIndex * pageSize),
      db
        .select({ total: count() })
        .from(creditTransactions)
        .leftJoin(userSchema, eq(creditTransactions.userId, userSchema.id))
        .where(where),
    ])

    return actionResponse.success({ items, total })
  } catch (error) {
    console.error('getAdminCreditTransactions failed:', error)
    return actionResponse.error('Failed to load credit transactions.')
  }
}

export interface BatchGrantResult {
  granted: { email: string; userId: string }[]
  notFoundEmails: string[]
}

/**
 * Grant the same amount of credits to a list of users by email — campaign
 * gifts, incident compensation. All grants share ONE transaction: either
 * every matched user is credited or none are. Unmatched emails are reported
 * back, never silently dropped.
 */
export async function grantCreditsToUsers(params: {
  emails: string[]
  amount: number
  reason: string
}): Promise<ActionResult<BatchGrantResult>> {
  if (!(await isAdmin())) return actionResponse.forbidden()
  const session = await getSession()

  const { amount, reason } = params
  if (!Number.isInteger(amount) || amount <= 0) {
    return actionResponse.badRequest('Amount must be a positive integer.')
  }
  if (!reason.trim()) {
    return actionResponse.badRequest('A reason is required.')
  }

  const emails = Array.from(
    new Set(
      params.emails.map((e) => e.trim().toLowerCase()).filter(Boolean)
    )
  )
  if (emails.length === 0) {
    return actionResponse.badRequest('At least one email is required.')
  }
  if (emails.length > BATCH_GRANT_MAX_RECIPIENTS) {
    return actionResponse.badRequest(
      `At most ${BATCH_GRANT_MAX_RECIPIENTS} recipients per batch.`
    )
  }

  const note = `${reason.trim()} (by admin ${session?.user?.email ?? 'unknown'})`

  try {
    const recipients = await db
      .select({ id: userSchema.id, email: userSchema.email })
      .from(userSchema)
      .where(inArray(sql`lower(${userSchema.email})`, emails))

    const foundEmails = new Set(recipients.map((r) => r.email.toLowerCase()))
    const notFoundEmails = emails.filter((e) => !foundEmails.has(e))

    if (recipients.length > 0) {
      await db.transaction(async (tx) => {
        for (const recipient of recipients) {
          await adjustCredits(
            { userId: recipient.id, delta: amount, note },
            tx
          )
        }
      })
    }

    return actionResponse.success({
      granted: recipients.map((r) => ({ email: r.email, userId: r.id })),
      notFoundEmails,
    })
  } catch (error) {
    console.error('grantCreditsToUsers failed:', error)
    return actionResponse.error('Failed to grant credits.')
  }
}
