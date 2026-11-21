/**
 * Cloudflare Workers / OpenNext expects Next.js middleware at middleware.ts.
 * Locale routing + signup-attribution cookie capture (from former proxy.ts).
 */
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { captureAttributionCookie } from "./lib/tracking/capture";

const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  const intlResponse = intlMiddleware(request);
  captureAttributionCookie(request, intlResponse);
  return intlResponse;
}

export const config = {
  matcher: [
    "/",
    // Keep in sync with i18n/routing LOCALES (currently English-only)
    "/(en)/:path*",
    "/((?!api|_next|_vercel|auth|privacy-policy|terms-of-service|refund-policy|.*\\.|favicon.ico).*)",
  ],
};
