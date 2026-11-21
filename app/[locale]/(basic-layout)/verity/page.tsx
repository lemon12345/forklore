import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { verityArticle } from "@/content/verity/article";
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
    // H1 stays "Verity"; SERP matches "it's me it's verity" / Minecraft AI
    title: "Verity: It's Me It's Verity Minecraft",
    description: verityArticle.description,
    locale: locale as Locale,
    path: `/verity`,
    availableLocales: ["en"],
  });
}

export default async function VerityPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={verityArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
