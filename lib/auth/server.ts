/**
 * [INPUT]: Depends on @/lib/auth's auth instance, @/lib/auth/permissions' pure role
 *          functions, @/lib/db and schema's member table (live workspace membership
 *          check), react's cache for per-request dedupe
 * [OUTPUT]: Exports getSession / getFreshSession / isAdmin / isSuperAdmin /
 *           getWorkspaceContext / WorkspaceContext
 * [POS]: The server-side session guard of lib/auth (server-only). Two session
 *        channels: getSession is the hot path (cookie cache, may lag the database
 *        by up to session.cookieCache.maxAge), getFreshSession bypasses the cache
 *        and is what privileged checks run on — bans, revocations and demotions
 *        take effect immediately, and it writes no cookie back, so the actions
 *        guarded by it do not drag a route re-render along. isAdmin /
 *        isSuperAdmin are pure booleans over the fresh channel; page-level
 *        redirects belong to components/auth/AuthGuard.
 *        getWorkspaceContext is the single exit for deciding the site-wide "billing
 *        subject" — activeOrganizationId is verified against the member table on
 *        every call, silently degrading to the personal workspace once stale
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import 'server-only';

import { auth } from "@/lib/auth";
import { isAdminUserRole, isSuperAdminUserRole } from "@/lib/auth/permissions";
import { db } from '@/lib/db';
import { member } from '@/lib/db/schema';
import { and, eq } from 'drizzle-orm';
import { headers } from "next/headers";
import { cache } from 'react';

/* -------------------------------------------------------------------------- */
/*  Session channels                                                          */
/*                                                                            */
/*  Better Auth trusts the signed cookie cache until it expires               */
/*  (session.cookieCache.maxAge); nothing done to the session or user row is  */
/*  visible through it before then. Reads that only personalise a response    */
/*  take the cached channel; reads that authorise a mutation on someone       */
/*  else's account take the fresh one. Both are deduped per request with      */
/*  React cache(), so a guard followed by a later read costs one lookup.      */
/* -------------------------------------------------------------------------- */

/** Hot path: cookie-cached session (may lag the database by up to maxAge). */
export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() })
);

/**
 * Guard path: bypasses the cookie cache and reads the session + user rows.
 * A banned, revoked or demoted account fails here immediately.
 *
 * `disableRefresh` keeps this a side-effect-free read. Without it Better Auth
 * rewrites the session-data cookie on every call, `nextCookies()` replays that
 * through `next/headers`, and a cookie written inside a Server Action makes
 * Next re-render the whole route — every admin action would pay for a full RSC
 * pass, and any effect keyed on a value the layout re-creates (a next-intl `t`,
 * say) would re-enter forever. The hot path still slides the session expiry
 * once its own cookie cache lapses.
 */
export const getFreshSession = cache(async () =>
  auth.api.getSession({
    headers: await headers(),
    query: { disableCookieCache: true, disableRefresh: true },
  })
);

export interface WorkspaceContext {
  userId: string
  /** Active team workspace; null = personal workspace. */
  organizationId: string | null
}

/**
 * The workspace a request acts in: the session's active organization when the
 * user is (still) a member of it, otherwise personal. Membership is verified
 * on every call — a stale activeOrganizationId (kicked member, deleted org)
 * silently degrades to personal instead of spending someone else's pool.
 * Returns null when unauthenticated.
 */
export const getWorkspaceContext =
  async (): Promise<WorkspaceContext | null> => {
    const session = await getSession()
    if (!session?.user) return null

    const activeOrganizationId = session.session.activeOrganizationId ?? null
    if (!activeOrganizationId) {
      return { userId: session.user.id, organizationId: null }
    }

    const [membership] = await db
      .select({ id: member.id })
      .from(member)
      .where(
        and(
          eq(member.organizationId, activeOrganizationId),
          eq(member.userId, session.user.id)
        )
      )
      .limit(1)

    return {
      userId: session.user.id,
      organizationId: membership ? activeOrganizationId : null,
    }
  };

/* -------------------------------------------------------------------------- */
/*  Role guards — booleans only. Signed out reads as false; the caller        */
/*  decides between a 403 and a redirect (AuthGuard does the latter for       */
/*  pages), so these are safe inside route-handler try/catch blocks.          */
/* -------------------------------------------------------------------------- */

export const isAdmin = async (): Promise<boolean> => {
  const session = await getFreshSession()
  return isAdminUserRole(session?.user.role)
}

export const isSuperAdmin = async (): Promise<boolean> => {
  const session = await getFreshSession()
  return isSuperAdminUserRole(session?.user.role)
}
