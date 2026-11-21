import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { FooterLink } from "@/types/common";
import { GithubIcon, InstagramIcon, MailIcon, Youtube } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { SiDiscord, SiTiktok } from "react-icons/si";

export default async function Footer() {
  const t = await getTranslations("Home");
  const tFooter = await getTranslations("Footer");

  const footerLinks: FooterLink[] = tFooter.raw("Links.groups");

  return (
    <div className="border-t border-wiki-line bg-wiki text-wiki-muted">
      <footer className="container mx-auto max-w-8xl py-2">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-wiki-ink">
                <Image
                  src="/logo.png?v=20261121"
                  alt={t("title")}
                  width={28}
                  height={28}
                  unoptimized
                />
                <span className="wiki-display text-[22px] italic leading-none tracking-tight text-wiki-ink">
                  {t("title")}
                </span>
              </div>

              <p className="max-w-sm text-sm leading-relaxed text-wiki-dim">
                {t("tagLine")}
              </p>

              <div className="flex items-center gap-1.5">
                {siteConfig.socialLinks?.github && (
                  <Link
                    href={siteConfig.socialLinks.github}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="GitHub"
                    title="View on GitHub"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <GithubIcon className="size-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.twitter && (
                  <Link
                    href={siteConfig.socialLinks.twitter}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Twitter"
                    title="View on Twitter"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <TwitterX className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.youtube && (
                  <Link
                    href={siteConfig.socialLinks.youtube}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="YouTube"
                    title="View on YouTube"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <Youtube className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.instagram && (
                  <Link
                    href={siteConfig.socialLinks.instagram}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Instagram"
                    title="View on Instagram"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <InstagramIcon className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.tiktok && (
                  <Link
                    href={siteConfig.socialLinks.tiktok}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="TikTok"
                    title="View on TikTok"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <SiTiktok className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.discord && (
                  <Link
                    href={siteConfig.socialLinks.discord}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Discord"
                    title="Join Discord"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <SiDiscord className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {siteConfig.socialLinks?.email && (
                  <Link
                    href={`mailto:${siteConfig.socialLinks.email}`}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    aria-label="Email"
                    title="Email"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-wiki-dim transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
                  >
                    <MailIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {footerLinks.map((section) => (
              <div key={section.title}>
                <div className="mb-4 font-serif text-base text-wiki-ink/90">
                  {section.title}
                </div>
                <ul className="space-y-2.5 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href ?? link.name}>
                      {typeof link.href === "string" &&
                      link.href.startsWith("/") &&
                      !link.useA ? (
                        <I18nLink
                          href={link.href}
                          title={link.name}
                          prefetch={false}
                          className="text-wiki-muted transition-colors hover:text-wiki-accent-soft"
                          target={link.target || ""}
                          rel={link.rel || ""}
                        >
                          {link.name}
                        </I18nLink>
                      ) : typeof link.href === "string" ? (
                        <Link
                          href={link.href}
                          title={link.name}
                          prefetch={false}
                          className="text-wiki-muted transition-colors hover:text-wiki-accent-soft"
                          target={link.target || ""}
                          rel={link.rel || ""}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <span className="text-wiki-dim">{link.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-wiki-line py-6 md:flex-row">
            <p className="text-sm text-wiki-dim">
              {tFooter("Copyright", {
                year: new Date().getFullYear(),
                name: siteConfig.name,
              })}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy-policy"
                title={tFooter("PrivacyPolicy")}
                prefetch={false}
                className="text-sm text-wiki-dim transition-colors hover:text-wiki-muted"
              >
                {tFooter("PrivacyPolicy")}
              </Link>
              <Link
                href="/terms-of-service"
                title={tFooter("TermsOfService")}
                prefetch={false}
                className="text-sm text-wiki-dim transition-colors hover:text-wiki-muted"
              >
                {tFooter("TermsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
