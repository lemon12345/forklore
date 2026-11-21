import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { isWeGettingArticle } from "@/content/is-we-getting/article";
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
    title: "Is We Getting: Google SNAP Autocomplete",
    description: isWeGettingArticle.description,
    locale: locale as Locale,
    path: `/is-we-getting`,
    availableLocales: ["en"],
  });
}

export default async function IsWeGettingPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={isWeGettingArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
