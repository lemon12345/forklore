import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/dashboard",
      destination: "/dashboard/settings",
      permanent: true,
    },
    {
      source: "/zh/dashboard",
      destination: "/zh/dashboard/settings",
      permanent: true,
    },
    {
      source: "/ja/dashboard",
      destination: "/ja/dashboard/settings",
      permanent: true,
    },
  ],
  images: {
    unoptimized:
      process.env.NEXT_PUBLIC_OPTIMIZED_IMAGES &&
      process.env.NEXT_PUBLIC_OPTIMIZED_IMAGES === "false",
    // Wiki home components use 88/90/92; Next 16 requires an allowlist.
    qualities: [75, 88, 90, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.forklore.wiki",
      },
      ...((process.env.R2_PUBLIC_URL || process.env.NEXT_PUBLIC_R2_PUBLIC_URL)
        ? [
            {
              protocol: "https",
              hostname: (
                process.env.R2_PUBLIC_URL ||
                process.env.NEXT_PUBLIC_R2_PUBLIC_URL
              )
                .replace(/^https?:\/\//, "")
                .replace(/\/$/, ""),
            },
          ]
        : []),
    ],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },
  // Pino uses worker threads for transports — must be treated as external in Next.js
  serverExternalPackages: ["pino", "pino-pretty", "pino-roll", "thread-stream"],
};

const withBundleAnalyzerWrapper = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

if (
  process.env.NODE_ENV === "development" &&
  !process.env.NEXTY_WELCOME_SHOWN
) {
  console.log("\n🎉 Welcome to NEXTY.DEV Boilerplate!");
  console.log("💬 Join our Discord community: https://discord.gg/VRDxBgXUZ8");
  console.log("📚 Documentation: https://nexty.dev/docs\n\n");
  process.env.NEXTY_WELCOME_SHOWN = "true";
}

const sentryConfig = {
  // Suppress noisy Sentry CLI output during build
  silent: !process.env.CI,
  // Upload source maps only when SENTRY_AUTH_TOKEN is set
  authToken: process.env.SENTRY_AUTH_TOKEN,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  // Automatically tree-shake Sentry logger statements in production
  disableLogger: true,
};

// Only during `next dev` — never during `next build` / Cloudflare CI.
if (process.argv.includes("dev")) {
  initOpenNextCloudflareForDev();
}

export default withSentryConfig(
  withBundleAnalyzerWrapper(withNextIntl(nextConfig)),
  sentryConfig
);
