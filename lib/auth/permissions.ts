/**
 * [INPUT]: depends on the user role field from @/lib/db/schema
 * [OUTPUT]: exposes pure functions isAdminUserRole / isSuperAdminUserRole
 * [POS]: permission helpers under lib/auth, usable in both Server/Client components and API routes
 * [PROTOCOL]: update this header on changes, then review CLAUDE.md
 */


/**
 * Checks whether the role has admin privileges (admin or superadmin).
 * Pure function with no session/redirect dependency, safe to use in client components.
 */
export function isAdminUserRole(
  role: string | null | undefined
): boolean {
  return role === "admin" || role === "superadmin";
}

/**
 * Checks whether the role is superadmin.
 * Pure function with no session/redirect dependency.
 */
export function isSuperAdminUserRole(
  role: string | null | undefined
): boolean {
  return role === "superadmin";
}
