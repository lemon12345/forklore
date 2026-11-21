import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { youMetMeAtAVeryChineseTimeArticle } from "@/content/you-met-me-at-a-very-chinese-time/article";
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
    // Full catchphrase is H1; SERP title stays short with Fight Club hook
    title: "Very Chinese Time: Fight Club Parody",
    description: youMetMeAtAVeryChineseTimeArticle.description,
    locale: locale as Locale,
    path: `/you-met-me-at-a-very-chinese-time`,
    availableLocales: ["en"],
  });
}

export default async function YouMetMeAtAVeryChineseTimePage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={youMetMeAtAVeryChineseTimeArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
