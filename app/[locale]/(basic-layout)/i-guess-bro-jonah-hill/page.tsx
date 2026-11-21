import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { iGuessBroJonahHillArticle } from "@/content/i-guess-bro-jonah-hill/article";
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
    // H1 stays full meme name; SEO title packs i guess bro + Jonah Hill GIF
    title: "I Guess Bro: Jonah Hill GIF Reaction",
    description: iGuessBroJonahHillArticle.description,
    locale: locale as Locale,
    path: `/i-guess-bro-jonah-hill`,
    availableLocales: ["en"],
  });
}

export default async function IGuessBroJonahHillPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={iGuessBroJonahHillArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
