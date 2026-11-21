import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import { HomeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import CookieManagementSection from "./CookieManagementSection";

export const dynamic = "force-static";
export const revalidate = false;

const LAST_UPDATED = "November 21, 2026";
const CONTACT_EMAIL = siteConfig.socialLinks?.email || "hi@forklore.wiki";
const SITE_HOST = "forklore.wiki";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "Privacy Policy",
    description: `How Forklore Wiki (${SITE_HOST}) collects, uses, and protects information when you browse meme entries or use an account.`,
    path: `/privacy-policy`,
    locale: "en",
    availableLocales: ["en"],
  });
}

export default function PrivacyPolicyPage() {
  const COOKIE_CONSENT_ENABLED =
    process.env.NEXT_PUBLIC_COOKIE_CONSENT_ENABLED === "true";

  return (
    <div className="bg-secondary/20 py-8 sm:py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-background rounded-xl border p-6 shadow-xs sm:p-8 dark:border-zinc-800">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED} · Applies to{" "}
            <a
              href="https://forklore.wiki"
              className="text-primary hover:underline"
            >
              https://{SITE_HOST}
            </a>{" "}
            and related Forklore Wiki services.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="mb-3 text-xl font-semibold">Introduction</h2>
              <p className="mb-3">
                Forklore Wiki (&quot;Forklore&quot;, &quot;we&quot;, or
                &quot;us&quot;) is a meme encyclopedia at {SITE_HOST}. This
                Privacy Policy explains how we collect, use, store, and protect
                information when you browse entries, search the glossary, create
                an account, leave feedback, or subscribe to email updates. By
                using the site, you agree to this policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Information We Collect
              </h2>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">
                  1. Information You Provide
                </h3>
                <ul className="mb-3 list-disc space-y-1 pl-6">
                  <li>
                    <strong>Account details</strong>: email address, display
                    name, avatar, and similar profile fields if you sign in
                  </li>
                  <li>
                    <strong>Communications</strong>: messages you send via{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    , feedback forms, or edit suggestions
                  </li>
                  <li>
                    <strong>Newsletter preferences</strong>: email and opt-in
                    status if you subscribe
                  </li>
                  <li>
                    <strong>Payment details</strong> (only if you buy a paid
                    plan): processed by third-party processors such as Stripe;
                    we do not store full card numbers
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">
                  2. Information Collected Automatically
                </h3>
                <ul className="mb-3 list-disc space-y-1 pl-6">
                  <li>
                    <strong>Technical data</strong>: IP address, browser type,
                    device type, and approximate location derived from IP
                  </li>
                  <li>
                    <strong>Usage data</strong>: pages viewed (for example meme
                    entry URLs), search queries on the site, referrers, and
                    approximate timestamps
                  </li>
                  <li>
                    <strong>Cookies and similar tech</strong>: used for session
                    login, preferences, and—when enabled—analytics or ads
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                How We Use Information
              </h2>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>Operate and improve the wiki, search, and account features</li>
                <li>
                  Moderate spam, abuse, and security incidents
                  {COOKIE_CONSENT_ENABLED
                    ? " (analytics only with your consent when the consent banner is enabled)"
                    : ""}
                </li>
                <li>
                  Reply to support mail and process legitimate edit or feedback
                  requests
                </li>
                <li>
                  Send transactional email (sign-in links, security notices) and,
                  only if you opt in, product updates
                </li>
                <li>
                  Process payments and fulfill subscriptions if you purchase a
                  paid feature
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Information Sharing
              </h2>
              <p className="mb-3">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>
                  <strong>Infrastructure providers</strong> that host the site,
                  database, file storage (for example Cloudflare R2), email
                  delivery (Resend), and auth
                </li>
                <li>
                  <strong>Payment processors</strong> such as Stripe when you
                  pay for a plan
                </li>
                <li>
                  <strong>Analytics or ads vendors</strong> only when those
                  tools are enabled on the site
                  {COOKIE_CONSENT_ENABLED &&
                    " and, where required, after you consent"}
                </li>
                <li>
                  <strong>Authorities</strong> when required by law or to protect
                  users and the service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Wiki Content and Public Pages
              </h2>
              <p className="mb-3">
                Meme entries, glossary pages, and similar editorial content are
                published for everyone to read. Do not submit personal data you
                do not want public. Third-party meme media, trademarks, and
                catchphrases remain owned by their respective rights holders; our
                documenting them does not transfer those rights.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Data Storage and Security
              </h2>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>TLS encryption in transit for the public site</li>
                <li>
                  Payment card data handled by certified processors, not stored
                  in full on our servers
                </li>
                <li>
                  Access controls and routine reviews of how we collect and store
                  account data
                </li>
              </ul>
              <p className="mb-3">
                No method of transmission or storage is 100% secure. We work to
                reduce risk but cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Your Rights</h2>
              <p className="mb-3">
                Depending on where you live, you may request access, correction,
                deletion, restriction, objection, or portability of personal
                data we hold about you. Contact{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                . We may need to verify your identity before fulfilling a
                request.
              </p>
            </section>

            <CookieManagementSection />

            <section>
              <h2 className="mb-3 text-xl font-semibold">Cookies</h2>
              <p className="mb-3">
                We use cookies for authentication and basic site function.
                Optional analytics or advertising cookies, when used, are
                described in the Cookie Preferences controls
                {COOKIE_CONSENT_ENABLED
                  ? " (available when consent mode is enabled)"
                  : ""}
                . You can also clear or block cookies in your browser; some
                features (like staying signed in) may stop working.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Children</h2>
              <p className="mb-3">
                Forklore Wiki is not directed at children under 13. We do not
                knowingly collect personal information from children under 13.
                If you believe we have, email {CONTACT_EMAIL} and we will delete
                it promptly.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                International Transfers
              </h2>
              <p className="mb-3">
                We may process data on servers outside your country. Where we
                do, we take steps appropriate to the context to protect that
                information.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Policy Updates</h2>
              <p className="mb-3">
                We may update this Privacy Policy. Material changes will be
                posted on this page with a revised &quot;Last updated&quot;
                date. Continued use of {SITE_HOST} after changes means you
                accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Contact</h2>
              <p className="mb-3">
                Privacy questions for Forklore Wiki:
              </p>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>
                  <strong>Email</strong>:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <strong>Website</strong>:{" "}
                  <a
                    href="https://forklore.wiki"
                    className="text-primary hover:underline"
                  >
                    https://{SITE_HOST}
                  </a>
                </li>
                {siteConfig.socialLinks?.discord && (
                  <li>
                    <strong>Discord</strong>:{" "}
                    <a
                      href={siteConfig.socialLinks.discord}
                      className="text-primary hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                )}
              </ul>
            </section>
          </div>

          <Separator />

          <div className="mt-8">
            <Link
              href="/"
              className="text-primary flex items-center gap-2 hover:underline"
              title="Return to Home"
            >
              <HomeIcon className="size-4" /> Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
