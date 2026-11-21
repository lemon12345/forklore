import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { hussArticle } from "@/content/huss/article";
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
    title: "Huss Meaning: Slang & Huss Huss Huss",
    description: hussArticle.description,
    locale: locale as Locale,
    path: `/huss`,
    availableLocales: ["en"],
  });
}

export default async function HussPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={hussArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
