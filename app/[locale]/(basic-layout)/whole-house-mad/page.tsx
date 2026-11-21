import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { wholeHouseMadArticle } from "@/content/whole-house-mad/article";
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
    // SEO title (H1 stays "Whole House Mad"); becomes "… | Forklore"
    // High-intent: whole house mad + “everyone mad at once” meaning
    title: "Whole House Mad: Dogs & Siblings Fight",
    description: wholeHouseMadArticle.description,
    locale: locale as Locale,
    path: `/whole-house-mad`,
    availableLocales: ["en"],
  });
}

export default async function WholeHouseMadPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={wholeHouseMadArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
