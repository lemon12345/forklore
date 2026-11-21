/**
 * [INPUT]: Depends on @/lib/db and schema for the four auth tables + the
 *          organization/member/invitation trio + subscriptions, ./organization
 *          for organizationPlugin (organizations/invitations/seats), @/lib/mail
 *          for sendEmail with the emails/ templates, @/lib/credits for
 *          ENTITLED_SUBSCRIPTION_STATUSES, ./signup-rewards for
 *          grantSignupRewards (cluster gate + welcome gift),
 *          @/lib/signup-gift-gate/shared for the device-signal cookie name,
 *          @/lib/tracking and @/lib/redis,
 *          @/lib/signup-blocklist for the signup email / IP blocklist check,
 *          @/lib/ip for CLIENT_IP_HEADERS (the session IP header order) and
 *          getClientIPFromHeaders + UNKNOWN_IP (the signup IP check),
 *          ./admin-access for the admin access table (impersonate is
 *          superadmin-only)
 * [OUTPUT]: Exports auth (the Better Auth instance: social login/magic link/OTP/
 *           admin/anonymous/captcha/organization plugins + rate limiting +
 *           user.create hooks (before: signup email / IP blocklist rejection / after:
 *           signup rewards via ./signup-rewards, attribution, welcome email) +
 *           deleteUser.beforeDelete's two guards; the admin plugin's
 *           adminRoles includes superadmin, which makes admin accounts
 *           un-impersonatable — the entry point is actions/users/impersonation)
 * [POS]: Configuration hub of lib/auth; the user.create.before hook reads the
 *        Redis blocklist live and rejects signups from matching emails or IPs (a single
 *        choke point for every channel), the user.create.after hook lifts the
 *        source IP and the device-signal cookie and hands them to
 *        ./signup-rewards (cluster gate, then the ledger-enforced once-only
 *        welcome gift), then handles source attribution and the welcome email;
 *        beforeDelete's two guards block account deletion
 *        (① a live subscription — under the SET NULL semantics of financial rows
 *        the subscription must be cancelled first; ② organization owner identity
 *        — transfer it or delete the organization first); server.ts provides the
 *        session guards
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */

import { sendEmail } from "@/lib/mail";
import { CLIENT_IP_HEADERS, getClientIPFromHeaders, UNKNOWN_IP } from "@/lib/ip";
import { siteConfig } from "@/config/site";
import { ENTITLED_SUBSCRIPTION_STATUSES } from "@/lib/credits";
import { grantSignupRewards } from "@/lib/auth/signup-rewards";
import { DEVICE_SIGNAL_COOKIE_NAME } from "@/lib/signup-gift-gate/shared";
import MagicLinkEmail from '@/emails/magic-link-email';
import OTPCodeEmail from '@/emails/otp-code-email';
import { UserWelcomeEmail } from "@/emails/user-welcome";
import {
  adminAccessControl,
  adminAccessRoles,
  IMPERSONATION_SESSION_DURATION_SECONDS,
} from "@/lib/auth/admin-access";
import { organizationPlugin } from "@/lib/auth/organization";
import { db } from "@/lib/db";
import {
  account,
  invitation,
  member,
  organization,
  session,
  subscriptions,
  user,
  verification,
} from "@/lib/db/schema";
import {
  buildUserSourceData,
  parseTrackingCookie,
  saveUserSource,
  TRACKING_COOKIE_NAME,
} from "@/lib/tracking/server";
import { isTrackingEnabled } from "@/lib/tracking/shared";
import { redis } from "@/lib/redis";
import {
  getSignupBlocklist,
  isSignupEmailBlocked,
  isSignupIpBlocked,
} from "@/lib/signup-blocklist";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import { and, eq, inArray } from "drizzle-orm";
import { nextCookies } from "better-auth/next-js";
import { admin, anonymous, captcha, emailOTP, lastLoginMethod, magicLink, oneTap } from "better-auth/plugins";
import { cookies } from "next/headers";

export const auth = betterAuth({
  appName: siteConfig.name,
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || process.env.NEXT_PUBLIC_SITE_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  advanced: {
    database: {
      generateId: () => crypto.randomUUID(),
    },
    // Same header order as lib/ip: the rate limiter, session.ipAddress and
    // every signup hook must see one and the same IP, otherwise the address
    // a guard blocks is not the address the limiter counted
    ipAddress: {
      ipAddressHeaders: [...CLIENT_IP_HEADERS],
    },
  },
  // IP-based rate limiting configuration
  rateLimit: {
    enabled: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_RATE_LIMIT_ENABLED === 'true',
    window: 60, // 60 seconds default window
    max: 100, // 100 requests per window (global default)
    customRules: {
      "/get-session": false,
      "/sign-in/magic-link": {
        window: 60, // 60 seconds
        max: 3, // Max 3 magic link requests per 60 seconds
      },
      "/email-otp/send-verification-otp": {
        window: 60,
        max: 3,
      },
      "/sign-in/email-otp": {
        window: 60,
        max: 5,
      },
    },
    // Use Upstash Redis for rate limit storage (works with serverless)
    ...(redis && {
      customStorage: {
        get: async (key: string) => {
          const data = await redis!.get<{ key: string; count: number; lastRequest: number }>(key);
          return data || undefined;
        },
        set: async (key: string, value: { key: string; count: number; lastRequest: number }) => {
          // TTL of 2 minutes (120 seconds) - enough for rate limit windows
          await redis!.set(key, value, { ex: 120 });
        },
      },
    }),
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 10 * 60, // Cache duration in seconds
    },
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
    // freshAge: 0
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ['google', 'github'],
    },
  },
  user: {
    deleteUser: {
      enabled: true,
      // Deletion guards — two, both blocking:
      // ① Live personal subscription: financial rows survive deletion via
      //    SET NULL, so a live subscription must be cancelled BEFORE the user
      //    row goes away. Otherwise the provider keeps charging a ghost: the
      //    next renewal webhook has no live user to fulfill against, and an
      //    annual sub's un-cleared drip schedule becomes a poison row the
      //    credits cron re-selects forever. ENTITLED includes dunning
      //    (past_due/unpaid) — the provider is still collecting.
      // ② Organization owner: member rows cascade away with the user, which
      //    would orphan the whole team (members stranded, org subscription
      //    billing-owned by a ghost). Ownership must be transferred or the
      //    organization deleted first.
      beforeDelete: async (deletingUser) => {
        const [live] = await db
          .select({ id: subscriptions.id })
          .from(subscriptions)
          .where(
            and(
              eq(subscriptions.userId, deletingUser.id),
              inArray(subscriptions.status, ENTITLED_SUBSCRIPTION_STATUSES)
            )
          )
          .limit(1);
        if (live) {
          throw new APIError("BAD_REQUEST", {
            message:
              "You have an active subscription. Cancel it in the billing portal before deleting your account.",
          });
        }

        const [owned] = await db
          .select({ id: member.id })
          .from(member)
          .where(
            and(eq(member.userId, deletingUser.id), eq(member.role, "owner"))
          )
          .limit(1);
        if (owned) {
          throw new APIError("BAD_REQUEST", {
            message:
              "You own a team. Transfer ownership or delete the team before deleting your account.",
          });
        }
      },
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
      organization: organization,
      member: member,
      invitation: invitation,
    },
  }),
  socialProviders: {
    github: {
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (data) => {
          // Signup blocklist: prefix / suffix / exact-email rules plus an IP list
          // configured in admin/users, a match is rejected; user creation through
          // every channel (OAuth / Magic Link / OTP / anonymous) funnels through
          // here, existing accounts are unaffected; rules live in Redis and the
          // hook reads them live on every call, so saving takes effect
          // immediately. One read serves both the email and the IP test.
          const blocklist = await getSignupBlocklist();
          if (data.email && (await isSignupEmailBlocked(data.email, blocklist))) {
            throw new APIError("FORBIDDEN", {
              message: "Registration with this email is not allowed.",
            });
          }

          // Same IP reader as the rate limiter and session.ipAddress (@/lib/ip);
          // a miss yields the UNKNOWN_IP sentinel and a direct connection without
          // proxy headers is never blocked
          const ip = await getClientIPFromHeaders();
          if (ip !== UNKNOWN_IP && (await isSignupIpBlocked(ip, blocklist))) {
            throw new APIError("FORBIDDEN", {
              message: "Registration from your network is not allowed.",
            });
          }
          return { data };
        },
        after: async (createdUser) => {
          const cookieStore = await cookies();

          // Signup rewards (gift amount, identity-cluster gate, failure
          // tolerance) are orchestrated in ./signup-rewards; the hook only lifts
          // the signals and hands them over. Never throws: an undelivered
          // reward is an ops issue, not a reason to block the signup.
          await grantSignupRewards({
            userId: createdUser.id,
            email: createdUser.email,
            ip: await getClientIPFromHeaders(),
            deviceHash: cookieStore.get(DEVICE_SIGNAL_COOKIE_NAME)?.value,
          })

          // Only track user source if enabled via environment variable
          const isTrackingEnabledValue = await isTrackingEnabled()
          if (isTrackingEnabledValue) {
            try {
              const trackingCookie = cookieStore.get(TRACKING_COOKIE_NAME);
              const clientData = parseTrackingCookie(trackingCookie?.value);

              const sourceData = await buildUserSourceData(createdUser.id, clientData || undefined);
              await saveUserSource(sourceData);

              cookieStore.delete(TRACKING_COOKIE_NAME);
            } catch (error) {
              console.error('Failed to save user source data:', error);
            }
          }

          // Send welcome email
          if (createdUser.email) {
            try {
              const adminEmail = process.env.DEFAULT_ADMIN_EMAIL;
              if (!adminEmail) {
                console.warn('DEFAULT_ADMIN_EMAIL is not configured, skipping welcome email.');
              } else {
                const unsubscribeToken = Buffer.from(createdUser.email).toString('base64');
                const unsubscribeLink = `${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe/newsletter?token=${unsubscribeToken}`;
                const result = await sendEmail({
                  to: createdUser.email,
                  from: { email: adminEmail, name: process.env.DEFAULT_ADMIN_NAME || siteConfig.name },
                  subject: `Welcome to ${siteConfig.name}!`,
                  react: UserWelcomeEmail,
                  reactProps: { name: createdUser.name, email: createdUser.email, unsubscribeLink },
                  addToContacts: true,
                });
                if (result.success) {
                  console.log(`Welcome email sent to ${createdUser.email}`);
                } else {
                  console.error('Failed to send welcome email:', result.error);
                }
              }
            } catch (error) {
              console.error('Failed to send welcome email:', error);
            }
          }
        },
      },
    },
  },
  trustedOrigins: process.env.NODE_ENV === 'development' ? [process.env.NEXT_PUBLIC_SITE_URL!, 'http://localhost:3000'] : [process.env.NEXT_PUBLIC_SITE_URL!],
  plugins: [
    ...(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ? [oneTap()] : []),
    ...(process.env.TURNSTILE_SECRET_KEY ? [captcha({
      provider: "cloudflare-turnstile",
      secretKey: process.env.TURNSTILE_SECRET_KEY,
    })] : []),
    magicLink({
      sendMagicLink: async ({ email, url, token }) => {
        const adminEmail = process.env.DEFAULT_ADMIN_EMAIL;
        if (!adminEmail) {
          throw new Error('DEFAULT_ADMIN_EMAIL is not configured');
        }

        const result = await sendEmail({
          to: email,
          from: { email: adminEmail, name: process.env.DEFAULT_ADMIN_NAME || siteConfig.name },
          subject: `Sign in to ${siteConfig.name}`,
          react: MagicLinkEmail,
          reactProps: { url },
        });

        if (!result.success) {
          throw result.error ?? new Error('Failed to send magic link email');
        }
      },
      expiresIn: 60 * 5,
    }),
    emailOTP({
      otpLength: 6,
      expiresIn: 60 * 10, // 10 minutes
      sendVerificationOTP: async ({ email, otp, type }) => {
        const adminEmail = process.env.DEFAULT_ADMIN_EMAIL;
        if (!adminEmail) {
          throw new Error('DEFAULT_ADMIN_EMAIL is not configured');
        }

        const result = await sendEmail({
          to: email,
          from: { email: adminEmail, name: process.env.DEFAULT_ADMIN_NAME || siteConfig.name },
          subject: `Your ${siteConfig.name} verification code: ${otp}`,
          react: OTPCodeEmail,
          reactProps: { otp, type },
        });

        if (!result.success) {
          throw result.error ?? new Error('Failed to send OTP email');
        }
      },
    }),
    lastLoginMethod(),
    // adminRoles counts superadmin as an admin: it gates impersonation (the
    // access table lives in ./admin-access) and doubles as the "admins cannot
    // be impersonated" rule — with allowImpersonatingAdmins left off, the
    // plugin refuses to borrow the session of anyone on this list.
    admin({
      ac: adminAccessControl,
      roles: adminAccessRoles,
      adminRoles: ["admin", "superadmin"],
      impersonationSessionDuration: IMPERSONATION_SESSION_DURATION_SECONDS,
    }),
    anonymous(),
    organizationPlugin,
    nextCookies() // make sure this is the last plugin in the array
  ]
});
