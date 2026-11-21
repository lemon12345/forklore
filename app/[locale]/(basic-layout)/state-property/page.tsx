import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { statePropertyArticle } from "@/content/state-property/article";
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
    title: "State Property: Hit the Road Dude",
    description: statePropertyArticle.description,
    locale: locale as Locale,
    path: `/state-property`,
    availableLocales: ["en"],
  });
}

export default async function StatePropertyPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={statePropertyArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
