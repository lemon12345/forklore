import SectionLabel from "@/components/home/SectionLabel";
import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ChartListProps = {
  title: string;
  headingId: string;
  entries: readonly WikiRegistryEntry[];
  moreHref?: string;
  moreLabel?: string;
  ranked?: boolean;
  priorityCount?: number;
  /** Larger thumbs + type for primary Charts column */
  dense?: boolean;
};

export default function ChartList({
  title,
  headingId,
  entries,
  moreHref = "/glossary",
  moreLabel,
  ranked = true,
  priorityCount = 3,
  dense = false,
}: ChartListProps) {
  if (entries.length === 0) return null;

  return (
    <section className="min-w-0 flex-1" aria-labelledby={headingId}>
      <SectionLabel
        id={headingId}
        title={title}
        moreHref={moreHref}
        moreLabel={moreLabel}
      />

      <ol className="flex flex-col">
        {entries.map((entry, index) => {
          const rank = index + 1;
          return (
            <li
              key={entry.slug}
              className="border-b border-black/[0.08] last:border-b-0"
            >
              <I18nLink
                href={`/${entry.slug}`}
                prefetch={false}
                className={cn(
                  "group flex items-center gap-3 transition-colors hover:bg-[#ffff64]/35",
                  dense ? "py-3.5 sm:gap-4 sm:py-4" : "py-3 sm:gap-3.5 sm:py-3.5",
                )}
              >
                {ranked ? (
                  <span
                    className={cn(
                      "shrink-0 text-center font-black tabular-nums",
                      dense
                        ? "w-9 text-[18px] sm:w-10 sm:text-[20px]"
                        : "w-8 text-[16px] sm:w-9 sm:text-[17px]",
                      rank <= 3 ? "text-black" : "text-black/28",
                    )}
                    aria-hidden
                  >
                    {rank}
                  </span>
                ) : null}
                <div
                  className={cn(
                    "relative shrink-0 overflow-hidden bg-[#ececec]",
                    dense
                      ? "h-[68px] w-[68px] sm:h-[76px] sm:w-[76px]"
                      : "h-14 w-14 sm:h-[60px] sm:w-[60px]",
                  )}
                >
                  <Image
                    src={wikiAssetUrl(entry.cover)}
                    alt=""
                    fill
                    priority={index < priorityCount}
                    quality={90}
                    sizes={dense ? "76px" : "60px"}
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 pr-1">
                  <p
                    className={cn(
                      "truncate font-bold leading-snug tracking-tight text-black group-hover:underline",
                      dense
                        ? "text-[16px] sm:text-[18px]"
                        : "text-[15px] sm:text-[16px]",
                    )}
                  >
                    {entry.title}
                  </p>
                  <p className="mt-1 truncate text-[12px] font-medium text-black/45">
                    {WIKI_KIND_LABELS[entry.kind]}
                  </p>
                </div>
              </I18nLink>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
