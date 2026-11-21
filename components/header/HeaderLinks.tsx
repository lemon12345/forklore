/**
 * [INPUT]: Depends on the Header i18n links array (common.json), shadcn NavigationMenu
 *          and NEXT_PUBLIC_PRICING_PATH (falls back to the i18n href when unset)
 * [OUTPUT]: Exports the HeaderLinks client component (desktop primary nav with dropdown groups)
 * [POS]: Desktop navigation of components/header, complements MobileMenu (lg breakpoint switch)
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */
"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link as I18nLink, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { HeaderLink } from "@/types/common";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

const HeaderLinks = () => {
  const tHeader = useTranslations("Header");
  const pathname = usePathname();

  const headerLinks: HeaderLink[] = tHeader.raw("links");
  const pricingLink = headerLinks.find((link) => link.id === "pricing");
  if (pricingLink) {
    pricingLink.href = process.env.NEXT_PUBLIC_PRICING_PATH || pricingLink.href;
  }

  return (
    <NavigationMenu viewport={false} className="hidden lg:block">
      <NavigationMenuList className="flex-wrap">
        {headerLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            {link.items ? (
              <>
                <NavigationMenuTrigger className="flex items-center gap-x-1 rounded-md bg-transparent px-2.5 py-1.5 text-[13px] font-normal text-wiki-dim hover:bg-transparent hover:text-wiki-ink">
                  {link.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[250px] gap-1">
                    {link.items.map((child) => (
                      <li
                        key={child.name}
                        className="hover:bg-accent-foreground/10"
                      >
                        <NavigationMenuLink asChild>
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
                            className={cn(
                              "flex flex-col gap-y-1 text-sm text-muted-foreground hover:text-accent-foreground"
                            )}
                          >
                            <div className="flex items-center gap-x-1">
                              {child.name}
                              {child.target === "_blank" && (
                                <span className="text-xs">
                                  <ExternalLink className="w-4 h-4" />
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <div className="text-xs text-muted-foreground">
                                {child.description}
                              </div>
                            )}
                          </I18nLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <I18nLink
                key={link.name}
                href={link.href}
                title={link.name}
                prefetch={
                  link.target && link.target === "_blank" ? false : true
                }
                target={link.target || "_self"}
                rel={link.rel || undefined}
                className={cn(
                  "flex items-center gap-x-1 rounded-md bg-transparent px-2.5 py-1.5 text-[13px] font-normal text-wiki-dim transition-colors hover:bg-transparent hover:text-wiki-ink",
                  pathname === link.href && "font-medium text-wiki-ink"
                )}
              >
                {link.name}
                {link.target === "_blank" && (
                  <span className="text-xs">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                )}
              </I18nLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderLinks;
