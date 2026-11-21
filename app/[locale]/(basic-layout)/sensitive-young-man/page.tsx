import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { sensitiveYoungManArticle } from "@/content/sensitive-young-man/article";
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
    // H1 stays "Sensitive Young Man"; SEO title packs keyword first
    // Primary intent: "sensitive young man"
    // Keep ≤~50 so "… | Forklore" stays ~≤60 in SERP
    // Intent: slang archetype + 2024 X wave (not "What Is" / "Meaning & Origin")
    title: "Sensitive Young Man: Softboy Archetype",
    description: sensitiveYoungManArticle.description,
    locale: locale as Locale,
    path: `/sensitive-young-man`,
    availableLocales: ["en"],
  });
}

export default async function SensitiveYoungManPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={sensitiveYoungManArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
