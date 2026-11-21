import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { smhArticle } from "@/content/smh/article";
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
    // H1 stays "SMH"; SEO title targets "smh meaning" + shaking my head
    title: "SMH Meaning: Shaking My Head",
    description: smhArticle.description,
    locale: locale as Locale,
    path: `/smh`,
    availableLocales: ["en"],
  });
}

export default async function SmhPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={smhArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
