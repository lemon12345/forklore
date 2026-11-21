import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { thingsToSayArticle } from "@/content/things-to-say/article";
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
    // SEO title (H1 stays "Things to Say"); becomes "… | Forklore"
    // High-intent: things to say meme / ironic advice lists (not "Meaning & Origin" template)
    title: "Things to Say: Ironic Advice Lists",
    description: thingsToSayArticle.description,
    locale: locale as Locale,
    path: `/things-to-say`,
    availableLocales: ["en"],
  });
}

export default async function ThingsToSayPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={thingsToSayArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
