import { WikiArticle } from "@/components/wiki/WikiArticle";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { gta6PhoneBeachDrivingArticle } from "@/content/gta-6-phone-beach-driving/article";
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
    title: "GTA 6 Beach Phone Driving Format",
    description: gta6PhoneBeachDrivingArticle.description,
    locale: locale as Locale,
    path: `/gta-6-phone-beach-driving`,
    availableLocales: ["en"],
  });
}

export default async function Gta6PhoneBeachDrivingPage() {
  return (
    <WikiAtmosphere>
      <article className="w-full">
        <WikiArticle article={gta6PhoneBeachDrivingArticle} />
      </article>
    </WikiAtmosphere>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
