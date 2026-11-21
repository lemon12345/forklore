import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { wouldntYouLikeToKnowWeatherBoyArticle } from "@/content/wouldnt-you-like-to-know-weather-boy/article";
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
    // SEO title (H1 stays full meme name); becomes "… | Forklore" via constructMetadata
    // Primary intents: weather boy, wouldnt you like to know, weather boy meme
    // Keep ≤~50 so "… | Forklore" stays ~≤60 in SERP
    // Intent: catchphrase / viral skit ID (not "Meaning & Origin" / "What Is" template)
    title: "Weather Boy: Wouldn't You Like to Know",
    description: wouldntYouLikeToKnowWeatherBoyArticle.description,
    locale: locale as Locale,
    path: `/wouldnt-you-like-to-know-weather-boy`,
    availableLocales: ["en"],
  });
}

export default async function WouldntYouLikeToKnowWeatherBoyPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={wouldntYouLikeToKnowWeatherBoyArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
