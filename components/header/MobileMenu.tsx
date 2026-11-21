/**
 * [INPUT]: Depends on Home/Header i18n copy, shadcn DropdownMenu primitives,
 *          LocaleSwitcher
 * [OUTPUT]: Exports the MobileMenu client component (mobile dropdown navigation)
 * [POS]: Mobile form of components/header, complements Header.tsx (lg breakpoint switch)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */
"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as I18nLink, routing } from "@/i18n/routing";
import { HeaderLink } from "@/types/common";
import { Languages, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MobileMenu() {
  const t = useTranslations("Home");
  const tHeader = useTranslations("Header");

  const headerLinks: HeaderLink[] = tHeader.raw("links");
  const pricingLink = headerLinks.find((link) => link.id === "pricing");
  if (pricingLink) {
    pricingLink.href = process.env.NEXT_PUBLIC_PRICING_PATH || pricingLink.href;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2" aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>
          <I18nLink
            href="/"
            title={t("title")}
            prefetch={true}
            className="flex items-center space-x-1 font-bold"
          >
            <Image
              alt={t("title")}
              src="/logo.png?v=20261121"
              className="h-6 w-6 rounded-md"
              width={32}
              height={32}
              unoptimized
            />
            <span className="wiki-display font-normal tracking-tight text-wiki-ink">
              {t("title")}
            </span>
          </I18nLink>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {headerLinks.map((link) =>
            link.items ? (
              <DropdownMenuSub key={link.name}>
                <DropdownMenuSubTrigger className="px-2 py-1.5">
                  {link.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-40">
                  {link.items.map((child) => (
                    <DropdownMenuItem key={child.name}>
                      <I18nLink
                        href={child.href}
                        title={child.name}
                        prefetch={
                          child.target && child.target === "_blank"
                            ? false
                            : true
                        }
                        target={child.target || "_self"}
                        rel={child.rel || undefined}
                        className="flex flex-col gap-y-1"
                      >
                        <span>{child.name}</span>
                        {child.description && (
                          <span className="text-xs text-muted-foreground">
                            {child.description}
                          </span>
                        )}
                      </I18nLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem key={link.name}>
                <I18nLink
                  href={link.href}
                  title={link.name}
                  prefetch={
                    link.target && link.target === "_blank" ? false : true
                  }
                  target={link.target || "_self"}
                  rel={link.rel || undefined}
                >
                  {link.name}
                </I18nLink>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuGroup>
        {routing.locales.length > 1 ? (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="px-2 py-1.5">
                <Languages className="h-4 w-4 mr-2" />
                <span>Language</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="min-w-36 rounded-lg border-border/70 p-1.5 shadow-md">
                <LocaleSwitcher variant="submenu" />
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
