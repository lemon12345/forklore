import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { whenTheFajitasComeOutSizzlingArticle } from "@/content/when-the-fajitas-come-out-sizzling/article";
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
    // H1 stays full catchphrase; SEO title packs fajitas sizzling + when fajitas come out
    title: "When the Fajitas Come Out Sizzling",
    description: whenTheFajitasComeOutSizzlingArticle.description,
    locale: locale as Locale,
    path: `/when-the-fajitas-come-out-sizzling`,
    availableLocales: ["en"],
  });
}

export default async function WhenTheFajitasComeOutSizzlingPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={whenTheFajitasComeOutSizzlingArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
