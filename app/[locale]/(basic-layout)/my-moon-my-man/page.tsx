import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { myMoonMyManArticle } from "@/content/my-moon-my-man/article";
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
    title: "My Moon My Man TikTok Trend",
    description: myMoonMyManArticle.description,
    locale: locale as Locale,
    path: `/my-moon-my-man`,
    availableLocales: ["en"],
  });
}

export default async function MyMoonMyManPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={myMoonMyManArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
