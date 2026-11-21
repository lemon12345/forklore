import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { whiteGirlSaveMeArticle } from "@/content/white-girl-save-me/article";
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
    // H1 stays "White Girl Save Me"; SEO packs catchphrase + music meme intent
    title: "White Girl Save Me / White Girl Music",
    description: whiteGirlSaveMeArticle.description,
    locale: locale as Locale,
    path: `/white-girl-save-me`,
    availableLocales: ["en"],
  });
}

export default async function WhiteGirlSaveMePage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={whiteGirlSaveMeArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
