import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { lastDitchBarArticle } from "@/content/last-ditch-bar/article";
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
    // SEO title (H1 stays "Last Ditch Bar"); becomes "… | Forklore" via constructMetadata
    // Name + public nickname (not "What Is …?" template). Keep full title ~≤60
    title: "Last Ditch Bar: COVID-Conscious Lesbian Bar",
    description: lastDitchBarArticle.description,
    locale: locale as Locale,
    path: `/last-ditch-bar`,
    availableLocales: ["en"],
  });
}

export default async function LastDitchBarPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={lastDitchBarArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
