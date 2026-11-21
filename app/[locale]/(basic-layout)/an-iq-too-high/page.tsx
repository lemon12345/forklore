import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { anIqTooHighArticle } from "@/content/an-iq-too-high/article";
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
    // SEO title (H1 stays "An IQ Too High"); becomes "… | Forklore"
    // High-intent: crow reaction / An IQ Too High meme — avoid "Meaning & Origin" / "What Is"
    title: "An IQ Too High: Crow Reaction",
    description: anIqTooHighArticle.description,
    locale: locale as Locale,
    path: `/an-iq-too-high`,
    availableLocales: ["en"],
  });
}

export default async function AnIqTooHighPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={anIqTooHighArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
