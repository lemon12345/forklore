import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { lordMilesArticle } from "@/content/lord-miles/article";
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
    // SEO title (H1 stays "Lord Miles"); becomes "… | Forklore" via constructMetadata
    // Intent: who is Lord Miles / Haiti invasion meme — avoid "Who Is X?" template shell
    title: "Lord Miles: Haiti Invasion Meme Event",
    description: lordMilesArticle.description,
    locale: locale as Locale,
    path: `/lord-miles`,
    availableLocales: ["en"],
  });
}

export default async function LordMilesPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={lordMilesArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
