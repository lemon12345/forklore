import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { luciaWillAppreciateThisArticle } from "@/content/lucia-will-appreciate-this/article";
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
    title: "Lucia Will Appreciate This: GTA 6",
    description: luciaWillAppreciateThisArticle.description,
    locale: locale as Locale,
    path: `/lucia-will-appreciate-this`,
    availableLocales: ["en"],
  });
}

export default async function LuciaWillAppreciateThisPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={luciaWillAppreciateThisArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
