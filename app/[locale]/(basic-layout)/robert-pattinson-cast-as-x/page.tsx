import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { robertPattinsonCastAsXArticle } from "@/content/robert-pattinson-cast-as-x/article";
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
    title: "Robert Pattinson Cast As X Memes",
    description: robertPattinsonCastAsXArticle.description,
    locale: locale as Locale,
    path: `/robert-pattinson-cast-as-x`,
    availableLocales: ["en"],
  });
}

export default async function RobertPattinsonCastAsXPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={robertPattinsonCastAsXArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
