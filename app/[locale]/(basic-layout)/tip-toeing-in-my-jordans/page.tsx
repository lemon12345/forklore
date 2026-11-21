import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { tipToeingInMyJordansArticle } from "@/content/tip-toeing-in-my-jordans/article";
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
    // SEO title (H1 stays "Tip Toeing in My Jordans"); becomes "… | Forklore"
    // High-intent: tip toeing / tiptoeing, Rumpelstiltskin AI, is it a real movie
    title: "Tip Toeing in My Jordans: AI or Real Movie",
    description: tipToeingInMyJordansArticle.description,
    locale: locale as Locale,
    path: `/tip-toeing-in-my-jordans`,
    availableLocales: ["en"],
  });
}

export default async function TipToeingInMyJordansPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={tipToeingInMyJordansArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
