import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { tomPearlArticle } from "@/content/tom-pearl/article";
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
    // H1 stays "Tom Pearl"; SERP matches Silver Tom / Aura T queries
    title: "Tom Pearl: Silver Tom Aura Edits",
    description: tomPearlArticle.description,
    locale: locale as Locale,
    path: `/tom-pearl`,
    availableLocales: ["en"],
  });
}

export default async function TomPearlPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={tomPearlArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
