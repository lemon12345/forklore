/**
 * [INPUT]: Depends on the Home i18n title and MobileMenu
 * [OUTPUT]: Exports the Header server component (brand wordmark; no suggest/theme/sign-in)
 * [POS]: Entry shell of components/header, consumed by the public basic-layout
 * [PROTOCOL]: Update this header on changes, then check CLAUDE.md
 */
import MobileMenu from "@/components/header/MobileMenu";
import { Link as I18nLink } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const Header = async () => {
  const t = await getTranslations("Home");

  return (
    <header className="site-header sticky top-0 z-50 w-full" data-scrolled="1">
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between gap-3 overflow-visible px-4 sm:px-6">
        <I18nLink
          href="/"
          title={t("title")}
          prefetch={true}
          className="header-logo inline-flex items-center rounded-md py-1 pr-2 hover:opacity-80"
        >
          <span
            className="header-brand inline-flex items-end whitespace-nowrap text-[22px] leading-none tracking-tight"
            style={{ height: 28 }}
          >
            {t("title")}
          </span>
        </I18nLink>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
