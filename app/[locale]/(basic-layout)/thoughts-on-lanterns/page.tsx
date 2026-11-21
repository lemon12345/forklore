import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { thoughtsOnLanternsArticle } from "@/content/thoughts-on-lanterns/article";
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
    // SEO title (H1 stays "Thoughts on Lanterns"); becomes "… | Forklore"
    // High-intent: thoughts on lanterns + duo street-walk edit format
    title: "Thoughts on Lanterns: Street Duo Edits",
    description: thoughtsOnLanternsArticle.description,
    locale: locale as Locale,
    path: `/thoughts-on-lanterns`,
    availableLocales: ["en"],
  });
}

export default async function ThoughtsOnLanternsPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={thoughtsOnLanternsArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
