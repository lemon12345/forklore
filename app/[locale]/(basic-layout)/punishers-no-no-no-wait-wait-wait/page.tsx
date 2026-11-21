import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { punishersNoNoNoWaitWaitWaitArticle } from "@/content/punishers-no-no-no-wait-wait-wait/article";
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
    // H1 stays "No No No Wait Wait Wait"; SEO title = Punisher / no no wait intent
    // becomes "… | Forklore" via constructMetadata (≤50 before suffix)
    title: "Punisher: No No No Wait Wait Wait",
    description: punishersNoNoNoWaitWaitWaitArticle.description,
    locale: locale as Locale,
    path: `/punishers-no-no-no-wait-wait-wait`,
    availableLocales: ["en"],
  });
}

export default async function PunishersNoNoNoWaitWaitWaitPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={punishersNoNoNoWaitWaitWaitArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
