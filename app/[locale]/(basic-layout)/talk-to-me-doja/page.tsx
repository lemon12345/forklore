import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { talkToMeDojaArticle } from "@/content/talk-to-me-doja/article";
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
    title: "Talk to Me Doja Dance Trend",
    description: talkToMeDojaArticle.description,
    locale: locale as Locale,
    path: `/talk-to-me-doja`,
    availableLocales: ["en"],
  });
}

export default async function TalkToMeDojaPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={talkToMeDojaArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
