import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { iLivedBitchArticle } from "@/content/i-lived-bitch/article";
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
    // SEO title (H1 stays "I Lived Bitch"); becomes "… | Forklore" via constructMetadata
    // Primary intents: "i lived bitch meme", "i lived bitch meaning", "i lived bitch origin"
    // Keep ≤~50 so "… | Forklore" stays ~≤60 in SERP
    // Intent: defiant survival catchphrase (not "Meaning & Origin" template)
    title: "I Lived Bitch: Hospital Text Meme",
    description: iLivedBitchArticle.description,
    locale: locale as Locale,
    path: `/i-lived-bitch`,
    availableLocales: ["en"],
  });
}

export default async function ILivedBitchPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={iLivedBitchArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
