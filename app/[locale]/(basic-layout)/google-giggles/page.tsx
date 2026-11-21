import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { googleGigglesArticle } from "@/content/google-giggles/article";
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
    // SEO title (H1 stays "Google Giggles"); becomes "… | Forklore"
    // High-intent: Google Giggles + banned-from / fake-app meaning
    title: "Google Giggles: Banned From Fake App",
    description: googleGigglesArticle.description,
    locale: locale as Locale,
    path: `/google-giggles`,
    availableLocales: ["en"],
  });
}

export default async function GoogleGigglesPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={googleGigglesArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
