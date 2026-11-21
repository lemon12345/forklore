import HomeSearch from "@/components/home/HomeSearch";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { WikiRegistryList } from "@/components/wiki/WikiRegistryList";
import {
  getWikiKindsPresent,
  searchWikiRegistry,
  type WikiEntryKind,
  wikiRegistry,
} from "@/content/wiki/registry";
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>;
type SearchParams = Promise<{ q?: string; kind?: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Glossary" });

  return constructMetadata({
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/glossary`,
  });
}

const KIND_SET = new Set<string>([
  "catchphrase",
  "reaction",
  "slang",
  "format",
  "sound",
  "person",
  "character",
  "copypasta",
  "video",
  "place",
]);

export default async function Page({
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { q, kind: kindParam } = await searchParams;
  const filter = (q ?? "").trim();
  const activeKind =
    kindParam && KIND_SET.has(kindParam)
      ? (kindParam as WikiEntryKind)
      : null;

  const t = await getTranslations("Glossary");
  const tWiki = await getTranslations("Landing.Wiki");

  let entries = searchWikiRegistry(filter);
  if (activeKind) {
    entries = entries.filter((entry) => entry.kind === activeKind);
  }

  const kinds = getWikiKindsPresent();

  return (
    <WikiAtmosphere>
      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <header className="mb-10 text-center">
          <h1 className="font-serif text-4xl tracking-tight text-wiki-ink md:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-wiki-dim md:text-base">
            {t("description")}
          </p>
          <p className="mt-2 text-xs text-wiki-dim">
            {wikiRegistry.length} {t("entryCount")}
          </p>
        </header>

        <div className="mb-10">
          <HomeSearch
            placeholder={tWiki("searchPlaceholder")}
            submitLabel={tWiki("searchSubmit")}
          />
          {filter ? (
            <p className="mt-3 text-center text-sm text-wiki-dim">
              {t("searchHeading")}:{" "}
              <span className="text-wiki-muted">&ldquo;{filter}&rdquo;</span>
            </p>
          ) : null}
        </div>

        <WikiRegistryList
          entries={entries}
          kinds={kinds}
          activeKind={activeKind}
          query={filter}
          emptyMessage={
            filter || activeKind
              ? t("noPostsFoundForThisTag")
              : t("emptyState.description")
          }
          allKindsLabel={t("allKinds")}
        />
      </div>
    </WikiAtmosphere>
  );
}
