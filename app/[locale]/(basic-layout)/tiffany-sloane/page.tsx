import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { tiffanySloaneArticle } from "@/content/tiffany-sloane/article";
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
    // H1 stays "Tiffany Sloane"; SERP matches AI / real queries
    title: "Tiffany Sloane: AI Comedian or Real",
    description: tiffanySloaneArticle.description,
    locale: locale as Locale,
    path: `/tiffany-sloane`,
    availableLocales: ["en"],
  });
}

export default async function TiffanySloanePage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={tiffanySloaneArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
