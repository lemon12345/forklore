import { MalfoidArticle } from "@/components/malfoid/MalfoidArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { malfoidArticle } from "@/content/malfoid/article";
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
    // H1 stays "Malfoid"; SERP matches Fem Malfoy / Female Draco queries
    title: "Malfoid: Fem Malfoy / Female Draco",
    description: malfoidArticle.description,
    locale: locale as Locale,
    path: `/malfoid`,
    // English-only for now — avoid advertising missing locales.
    availableLocales: ["en"],
  });
}

export default async function MalfoidPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <MalfoidArticle />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
