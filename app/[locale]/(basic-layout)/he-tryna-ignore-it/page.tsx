import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { heTrynaIgnoreItArticle } from "@/content/he-tryna-ignore-it/article";
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
    title: "He Tryna Ignore It: Dog by Fire",
    description: heTrynaIgnoreItArticle.description,
    locale: locale as Locale,
    path: `/he-tryna-ignore-it`,
    availableLocales: ["en"],
  });
}

export default async function HeTrynaIgnoreItPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={heTrynaIgnoreItArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
