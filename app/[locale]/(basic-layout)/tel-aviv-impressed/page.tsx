import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { telAvivImpressedArticle } from "@/content/tel-aviv-impressed/article";
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
    // SEO title (H1 stays "Tel Aviv Impressed"); becomes "… | Forklore"
    // High-intent: tel aviv impressed + Netanyahu blank-stare recognition
    title: "Tel Aviv Impressed: Netanyahu Blank Stare",
    description: telAvivImpressedArticle.description,
    locale: locale as Locale,
    path: `/tel-aviv-impressed`,
    availableLocales: ["en"],
  });
}

export default async function TelAvivImpressedPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={telAvivImpressedArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
