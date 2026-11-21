import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { whatDoDjsActuallyDoArticle } from "@/content/what-do-djs-actually-do/article";
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
    // H1 keeps canonical mild profanity; SEO title packs “what do djs actually do” + DJ meme
    title: "What Do DJs Actually Do: Madeline Argy",
    description: whatDoDjsActuallyDoArticle.description,
    locale: locale as Locale,
    path: `/what-do-djs-actually-do`,
    availableLocales: ["en"],
  });
}

export default async function WhatDoDjsActuallyDoPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={whatDoDjsActuallyDoArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
