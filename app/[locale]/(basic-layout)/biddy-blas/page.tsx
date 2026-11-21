import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { biddyBlasArticle } from "@/content/biddy-blas/article";
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
    // SEO title (H1 stays "Biddy Blas"); becomes "… | Forklore"
    // High-intent: biddy blas / scrib doon / galactic racer catchphrase
    // Not "What Is …?" / "Meaning & Origin" template
    title: "Biddy Blas: Scrib Doon Catchphrase",
    description: biddyBlasArticle.description,
    locale: locale as Locale,
    path: `/biddy-blas`,
    availableLocales: ["en"],
  });
}

export default async function BiddyBlasPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={biddyBlasArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
