import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { scientistsRevealTheHiArticle } from "@/content/scientists-reveal-the-hi/article";
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
    title: "Scientists Reveal the Hi: Cat BBC",
    description: scientistsRevealTheHiArticle.description,
    locale: locale as Locale,
    path: `/scientists-reveal-the-hi`,
    availableLocales: ["en"],
  });
}

export default async function ScientistsRevealTheHiPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={scientistsRevealTheHiArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
