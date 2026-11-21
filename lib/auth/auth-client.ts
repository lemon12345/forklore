/**
 * [INPUT]: Depends on better-auth/react's createAuthClient and the
 *          oneTap/magicLink/emailOTP/lastLoginMethod/organization/admin client
 *          plugins from better-auth/client/plugins, ./admin-access for the
 *          access table shared with the server plugin
 * [OUTPUT]: Exports authClient (the client-side Better Auth instance, including
 *           organization's team/invitation/activeOrganization hooks; the
 *           session type carries impersonatedBy, which ImpersonationBanner
 *           reads to recognise a borrowed session)
 * [POS]: The client entry point of lib/auth, each plugin here matching its
 *        server-side counterpart in index.ts
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { adminAccessControl, adminAccessRoles } from "@/lib/auth/admin-access";
import { adminClient, emailOTPClient, lastLoginMethodClient, magicLinkClient, oneTapClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || process.env.NEXT_PUBLIC_SITE_URL,
  plugins: [
    ...(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ? [oneTapClient({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      // Optional client configuration:
      autoSelect: false,
      cancelOnTapOutside: true,
      context: "signin",
      additionalOptions: {
        use_fedcm_for_prompt: process.env.NODE_ENV === "production"
      },
      promptOptions: {
        fedCM: false, // Force better-auth to use the Google JS script (which respects additionalOptions)
      }
    })] : []),
    magicLinkClient(),
    emailOTPClient(),
    lastLoginMethodClient(),
    organizationClient(),
    // Same access table as the server-side admin plugin
    adminClient({ ac: adminAccessControl, roles: adminAccessRoles })
  ]
})
