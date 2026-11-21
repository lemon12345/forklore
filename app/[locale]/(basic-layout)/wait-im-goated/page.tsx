import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { waitImGoatedArticle } from "@/content/wait-im-goated/article";
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
    // SEO title (H1 stays "Wait I'm Goated"); becomes "… | Forklore" via constructMetadata
    // Primary intents: "wait im goated", "wait i'm goated original" (shirt / source)
    // Keep ≤~50 so "… | Forklore" stays ~≤60 in SERP
    // Intent: soft-irony catchphrase + original tee (not "What Is" / "Meaning & Origin")
    title: "Wait I'm Goated: Soft Irony Caption",
    description: waitImGoatedArticle.description,
    locale: locale as Locale,
    path: `/wait-im-goated`,
    availableLocales: ["en"],
  });
}

export default async function WaitImGoatedPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={waitImGoatedArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
