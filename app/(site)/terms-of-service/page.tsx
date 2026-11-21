import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import { HomeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = false;

const LAST_UPDATED = "November 21, 2026";
const CONTACT_EMAIL = siteConfig.socialLinks?.email || "hi@forklore.wiki";
const SITE_HOST = "forklore.wiki";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "Terms of Service",
    description: `Terms for using Forklore Wiki at ${SITE_HOST} — browsing meme entries, accounts, and optional paid features.`,
    path: `/terms-of-service`,
    locale: "en",
    availableLocales: ["en"],
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-secondary/20 py-8 sm:py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-background rounded-xl border p-6 shadow-xs sm:p-8 dark:border-zinc-800">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Terms of Service
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED} · Applies to{" "}
            <a
              href="https://forklore.wiki"
              className="text-primary hover:underline"
            >
              https://{SITE_HOST}
            </a>
            .
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="mb-3 text-xl font-semibold">Introduction</h2>
              <p className="mb-3">
                These Terms of Service (&quot;Terms&quot;) govern your access to
                Forklore Wiki (&quot;Forklore&quot;, &quot;we&quot;, or
                &quot;us&quot;), the meme encyclopedia at {SITE_HOST}, including
                entry pages, search, accounts, and any optional paid features.
                By using the site you agree to these Terms and to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Service</h2>
              <p className="mb-3">
                Forklore publishes encyclopedia-style pages about internet
                memes, formats, catchphrases, sounds, and related culture. We
                may add, edit, reorganize, or remove entries at any time. Content
                is provided for informational and educational reference; it is
                not legal, medical, or financial advice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Accounts</h2>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">1. Registration</h3>
                <p className="mb-3">
                  Some features require an account. Provide accurate information
                  and keep your sign-in method secure. You are responsible for
                  activity under your account.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">2. Security</h3>
                <p className="mb-3">
                  Notify us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  if you suspect unauthorized access.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="mb-3 list-disc space-y-1 pl-6">
                <li>Break applicable law or infringe others&apos; rights</li>
                <li>
                  Scrape, overload, or disrupt {SITE_HOST} in ways that harm the
                  service or other users
                </li>
                <li>
                  Upload malware or attempt unauthorized access to accounts or
                  systems
                </li>
                <li>
                  Use Forklore to harass, dox, or publish someone&apos;s private
                  personal data without a lawful basis
                </li>
                <li>
                  Misrepresent Forklore pages as official statements of brands,
                  platforms, or people featured in memes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Intellectual Property
              </h2>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">1. Our site</h3>
                <p className="mb-3">
                  The Forklore name, logo, site design, and original editorial
                  text we publish are owned by us or used under license, and are
                  protected by applicable IP laws.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">
                  2. Third-party memes and media
                </h3>
                <p className="mb-3">
                  Memes, screenshots, audio, video, names, and trademarks
                  discussed or shown on Forklore generally belong to their
                  respective creators, platforms, or rights holders. Reference on
                  the wiki does not grant you those rights. If you believe
                  content on {SITE_HOST} infringes your rights, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  with enough detail for us to review.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-medium">
                  3. Suggestions and feedback
                </h3>
                <p className="mb-3">
                  If you send edit suggestions, corrections, or feedback, you
                  grant us a non-exclusive, royalty-free license to use that
                  material to operate and improve the wiki.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Optional Paid Features
              </h2>
              <p className="mb-3">
                If Forklore offers paid plans or credits, prices and what is
                included will be shown at checkout. Payments are processed by
                third parties (for example Stripe). Unless law requires otherwise
                or we state a refund policy at purchase, fees are generally
                non-refundable after the billing period starts. Canceling stops
                future renewals; it does not usually reverse the current period.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Disclaimers</h2>
              <p className="mb-3">
                The service is provided &quot;as is&quot; and &quot;as
                available.&quot; We do not warrant that entries are complete,
                current, or error-free, or that the site will be uninterrupted
                or secure. Meme culture moves fast; origins and attributions can
                be contested.
              </p>
              <p className="mb-3">
                Links to third-party sites (platforms, news, videos) are for
                reference. We are not responsible for third-party content or
                practices.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                Limitation of Liability
              </h2>
              <p className="mb-3">
                To the maximum extent permitted by law, Forklore and its
                operators will not be liable for indirect, incidental, special,
                consequential, or punitive damages, or for lost profits, data, or
                goodwill, arising from your use of {SITE_HOST}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Changes</h2>
              <p className="mb-3">
                We may update these Terms by posting a new version on this page
                with a revised Last updated date. Continued use after changes
                means you accept the new Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Contact</h2>
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
              <p className="mb-3">Thank you for using Forklore Wiki.</p>
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
