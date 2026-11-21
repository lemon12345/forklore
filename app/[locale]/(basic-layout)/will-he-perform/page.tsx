import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { willHePerformArticle } from "@/content/will-he-perform/article";
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
    // SEO title (H1 stays short "Will He Perform"); becomes "… | Forklore"
    // High-intent: will he perform / money in front of him — avoid "What Is" / "Meaning & Origin"
    title: "Will He Perform: Money in Front of Him",
    description: willHePerformArticle.description,
    locale: locale as Locale,
    path: `/will-he-perform`,
    availableLocales: ["en"],
  });
}

export default async function WillHePerformPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={willHePerformArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
