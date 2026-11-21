import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { losercorePlaylistArticle } from "@/content/losercore-playlist/article";
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
    // SEO title (H1 stays "Losercore Playlist"); becomes "… | Forklore"
    // High-intent: losercore playlist / Spotify TikTok ads — avoid "What Is" / "Meaning & Origin"
    title: "Losercore Playlist: Spotify TikTok Ads",
    description: losercorePlaylistArticle.description,
    locale: locale as Locale,
    path: `/losercore-playlist`,
    availableLocales: ["en"],
  });
}

export default async function LosercorePlaylistPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={losercorePlaylistArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
