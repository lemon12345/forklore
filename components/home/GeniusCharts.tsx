import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { Flame } from "lucide-react";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";
import { cn } from "@/lib/utils";

type GeniusChartsProps = {
  title: string;
  filterLabel: string;
  loadMoreLabel: string;
  entries: readonly WikiRegistryEntry[];
  headingId?: string;
};

/** Ranked charts table — Grokipedia color/type, list density kept. */
export default function GeniusCharts({
  title,
  filterLabel,
  loadMoreLabel,
  entries,
  headingId = "home-charts-heading",
}: GeniusChartsProps) {
  if (entries.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="w-full">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2
          id={headingId}
          className="type-title text-[22px] font-medium tracking-[-0.012em] text-wiki-ink"
        >
          {title}
        </h2>
        <p className="rounded-full border border-wiki-line bg-wiki-elevated px-3 py-1.5 text-[12px] text-wiki-muted">
          {filterLabel}
        </p>
      </div>

      <ol className="flex flex-col border-t border-wiki-line">
        {entries.map((entry, index) => {
          const rank = index + 1;
          const showHeat = Boolean(entry.trending) || rank <= 3;
          const heat = Math.max(12, 92 - index * 7);

          return (
            <li key={entry.slug} className="border-b border-wiki-line">
              <I18nLink
                href={`/${entry.slug}`}
                prefetch={false}
                className="group grid grid-cols-[28px_48px_minmax(0,1fr)] items-center gap-3 py-3.5 transition-colors hover:bg-wiki-panel/80 sm:grid-cols-[36px_56px_minmax(0,1.6fr)_minmax(0,1fr)_64px] sm:gap-4 sm:py-4 md:grid-cols-[40px_64px_minmax(0,1.7fr)_minmax(0,1fr)_72px]"
              >
                <span
                  className={cn(
                    "text-center text-[15px] font-medium tabular-nums sm:text-[16px]",
                    rank <= 3 ? "text-wiki-ink" : "text-wiki-dim",
                  )}
                >
                  {String(rank).padStart(2, "0")}
                </span>

                <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-wiki-panel sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <Image
                    src={wikiAssetUrl(entry.cover)}
                    alt=""
                    fill
                    priority={index < 4}
                    quality={90}
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <span className="block truncate text-[15px] font-medium leading-snug tracking-[-0.01em] text-wiki-ink transition-colors group-hover:text-wiki-accent sm:text-[16px] md:text-[17px]">
                    {entry.title}
                  </span>
                  <p className="mt-0.5 truncate text-[12px] text-wiki-dim sm:hidden">
                    {WIKI_KIND_LABELS[entry.kind]}
                  </p>
                </div>

                <p className="hidden min-w-0 truncate text-[14px] text-wiki-muted sm:block">
                  {WIKI_KIND_LABELS[entry.kind]}
                </p>

                <div className="hidden items-center justify-end gap-1 sm:flex">
                  {showHeat ? (
                    <>
                      <Flame
                        className="h-3.5 w-3.5 text-wiki-accent"
                        fill="currentColor"
                        aria-hidden
                      />
                      <span className="text-[13px] font-medium tabular-nums text-wiki-accent">
                        {heat}
                      </span>
                    </>
                  ) : null}
                </div>
              </I18nLink>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex justify-center">
        <I18nLink
          href="/glossary"
          prefetch={false}
          className="rounded-full border border-wiki-line-strong bg-wiki-elevated px-5 py-2.5 text-[13px] font-medium text-wiki-ink transition-colors hover:border-wiki-ink hover:bg-wiki-panel"
        >
          {loadMoreLabel}
        </I18nLink>
      </div>
    </section>
  );
}
