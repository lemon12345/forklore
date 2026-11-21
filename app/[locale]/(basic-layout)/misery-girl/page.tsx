import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { miseryGirlArticle } from "@/content/misery-girl/article";
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
    // H1 stays "Misery Girl"; SEO title leads with misery girl meme + dad play Misery
    title: "Misery Girl: Dad Play Misery Captions",
    description: miseryGirlArticle.description,
    locale: locale as Locale,
    path: `/misery-girl`,
    availableLocales: ["en"],
  });
}

export default async function MiseryGirlPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={miseryGirlArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
