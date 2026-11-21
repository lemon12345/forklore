import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { pterodactylInMexicoArticle } from "@/content/pterodactyl-in-mexico/article";
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
    title: "Pterodactyl in Mexico: AI or Real",
    description: pterodactylInMexicoArticle.description,
    locale: locale as Locale,
    path: `/pterodactyl-in-mexico`,
    availableLocales: ["en"],
  });
}

export default async function PterodactylInMexicoPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={pterodactylInMexicoArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
