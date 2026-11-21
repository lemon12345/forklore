import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { doesHeKnowArticle } from "@/content/does-he-know/article";
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
    // H1 stays "Does He Know"; SEO title = reaction intent
    title: "Does He Know: Riddler Reaction Image",
    description: doesHeKnowArticle.description,
    locale: locale as Locale,
    path: `/does-he-know`,
    availableLocales: ["en"],
  });
}

export default async function DoesHeKnowPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={doesHeKnowArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
