import { Link as I18nLink } from "@/i18n/routing";
import type { WikiEntryKind, WikiRegistryEntry } from "@/content/wiki/registry";
import { WIKI_KIND_LABELS } from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type WikiRegistryListProps = {
  entries: readonly WikiRegistryEntry[];
  kinds: readonly WikiEntryKind[];
  activeKind: WikiEntryKind | null;
  emptyMessage: string;
  allKindsLabel: string;
  query?: string;
};

function glossaryHref(kind: WikiEntryKind | null, query?: string) {
  const params = new URLSearchParams();
  if (query?.trim()) params.set("q", query.trim());
  if (kind) params.set("kind", kind);
  const qs = params.toString();
  return qs ? `/glossary?${qs}` : "/glossary";
}

export function WikiRegistryList({
  entries,
  kinds,
  activeKind,
  emptyMessage,
  allKindsLabel,
  query,
}: WikiRegistryListProps) {
  return (
    <div className="flex flex-col gap-6">
      {kinds.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          <I18nLink
            href={glossaryHref(null, query)}
            prefetch={false}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              !activeKind
                ? "border-wiki-ink/25 bg-wiki-elevated text-wiki-ink"
                : "border-wiki-line bg-wiki-panel text-wiki-muted hover:border-wiki-ink/20 hover:text-wiki-ink"
            }`}
          >
            {allKindsLabel}
          </I18nLink>
          {kinds.map((kind) => (
            <I18nLink
              key={kind}
              href={glossaryHref(kind, query)}
              prefetch={false}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                activeKind === kind
                  ? "border-wiki-ink/25 bg-wiki-elevated text-wiki-ink"
                  : "border-wiki-line bg-wiki-panel text-wiki-muted hover:border-wiki-ink/20 hover:text-wiki-ink"
              }`}
            >
              {WIKI_KIND_LABELS[kind]}
            </I18nLink>
          ))}
        </div>
      ) : null}

      {entries.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-wiki-line px-6 py-12 text-center text-sm text-wiki-dim">
          {emptyMessage}
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <I18nLink
                href={`/${entry.slug}`}
                prefetch={false}
                title={entry.title}
                className="group flex gap-4 rounded-2xl border border-wiki-line bg-wiki-panel p-3 transition-[background-color,border-color] hover:border-wiki-ink/20 hover:bg-wiki-elevated/50"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-wiki-elevated sm:h-24 sm:w-36">
                  <Image
                    src={wikiAssetUrl(entry.cover)}
                    alt=""
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1 py-0.5">
                  <h2 className="truncate font-medium text-wiki-ink transition-colors group-hover:text-wiki-accent-soft">
                    {entry.title}
                  </h2>
                  <p className="mt-0.5 text-xs text-wiki-dim">
                    {WIKI_KIND_LABELS[entry.kind]}
                  </p>
                  {entry.description ? (
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-wiki-muted">
                      {entry.description}
                    </p>
                  ) : null}
                </div>
              </I18nLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
