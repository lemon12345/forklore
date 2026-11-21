import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { navySealCopypastaArticle } from "@/content/navy-seal-copypasta/article";
import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;

  return constructMetadata({
    // SEO title (H1 stays "Navy Seal Copypasta"); becomes "… | Forklore"
    // High-intent: navy seal copypasta + gorilla warfare recognition hook
    title: "Navy Seal Copypasta: Gorilla Warfare Rant",
    description: navySealCopypastaArticle.description,
    locale: locale as Locale,
    path: `/navy-seal-copypasta`,
    availableLocales: ["en"],
  });
}

export default async function NavySealCopypastaPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={navySealCopypastaArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
