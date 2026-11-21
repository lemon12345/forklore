import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { jeanPhilanthropeArticle } from "@/content/jean-philanthrope/article";
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
    // SEO title (H1 stays "Jean Philanthrope"); becomes "… | Forklore" via constructMetadata
    // Real intents (BBC/Dexerto): "Jean Phil", "Jean Philanthrope", "is he AI / real"
    // Name + question people actually ask — not "What Is …?" / "… Shadowboxer" template
    title: "Jean Philanthrope (Jean Phil): AI or Real",
    description: jeanPhilanthropeArticle.description,
    locale: locale as Locale,
    path: `/jean-philanthrope`,
    availableLocales: ["en"],
  });
}

export default async function JeanPhilanthropePage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={jeanPhilanthropeArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
