/**
 * [INPUT]: Depends on better-auth/plugins/access's createAccessControl and
 *          better-auth/plugins/admin/access's defaultStatements (the admin
 *          action vocabulary)
 * [OUTPUT]: Exports adminAccessControl (the ac instance), adminAccessRoles
 *           (action grants for user / admin / superadmin) and
 *           IMPERSONATION_SESSION_DURATION_SECONDS
 * [POS]: The admin-plugin access table of lib/auth, shared verbatim by the
 *        server (index.ts) and the client (auth-client.ts); complements
 *        permissions.ts — that file holds this app's own role predicates,
 *        this one only feeds better-auth's built-in admin endpoints
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements } from "better-auth/plugins/admin/access";

/* -------------------------------------------------------------------------- */
/*  Role grants                                                               */
/*                                                                            */
/*  The admin plugin ships knowing only two roles, admin and user. This app    */
/*  has a third, superadmin — leave it undeclared and every authorize() call   */
/*  fails silently (hasPermission returns false for unknown roles). While      */
/*  declaring it, impersonate is handed to superadmin alone: borrowing a       */
/*  session exposes everything the user can see and spends their credits, so   */
/*  its bar sits above day-to-day admin work.                                  */
/* -------------------------------------------------------------------------- */

export const adminAccessControl = createAccessControl(defaultStatements);

/** Day-to-day ops: look up, change roles, ban, delete, edit — no impersonate */
const ADMIN_USER_ACTIONS = [
  "create",
  "list",
  "set-role",
  "ban",
  "delete",
  "set-password",
  "get",
  "update",
] as const;

const SESSION_ACTIONS = ["list", "revoke", "delete"] as const;

export const adminAccessRoles = {
  user: adminAccessControl.newRole({ user: [], session: [] }),
  admin: adminAccessControl.newRole({
    user: [...ADMIN_USER_ACTIONS],
    session: [...SESSION_ACTIONS],
  }),
  superadmin: adminAccessControl.newRole({
    user: [...ADMIN_USER_ACTIONS, "impersonate"],
    session: [...SESSION_ACTIONS],
  }),
} as const;

/** Borrowed-session lifetime: long enough to debug one issue, short enough to forget (seconds) */
export const IMPERSONATION_SESSION_DURATION_SECONDS = 60 * 60;
