import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { glupShittoArticle } from "@/content/glup-shitto/article";
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
    title: "Glup Shitto: Obscure Star Wars Slang",
    description: glupShittoArticle.description,
    locale: locale as Locale,
    path: `/glup-shitto`,
    availableLocales: ["en"],
  });
}

export default async function GlupShittoPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={glupShittoArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
