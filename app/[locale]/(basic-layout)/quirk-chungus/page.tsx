import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { quirkChungusArticle } from "@/content/quirk-chungus/article";
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
    // SEO title (H1 stays "Quirk Chungus"); becomes "… | Forklore"
    // High-intent: quirk chungus meaning / millennial comic insult / doggo archetype
    // Not "What Is …?" / "… Explained" template — SERP neighbors ask meaning + insult use
    title: "Quirk Chungus: Millennial Comic Insult",
    description: quirkChungusArticle.description,
    locale: locale as Locale,
    path: `/quirk-chungus`,
    availableLocales: ["en"],
  });
}

export default async function QuirkChungusPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={quirkChungusArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
