import SectionLabel from "@/components/home/SectionLabel";
import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type RecentRailProps = {
  title: string;
  headingId: string;
  entries: readonly WikiRegistryEntry[];
  moreLabel: string;
};

/** Compact cover rail — Grokipedia soft surfaces + type. */
export default function RecentRail({
  title,
  headingId,
  entries,
  moreLabel,
}: RecentRailProps) {
  if (entries.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="w-full">
      <SectionLabel
        id={headingId}
        title={title}
        moreHref="/glossary"
        moreLabel={moreLabel}
        variant="display"
      />

      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {entries.slice(0, 5).map((entry, index) => (
          <li key={entry.slug}>
            <I18nLink
              href={`/${entry.slug}`}
              prefetch={false}
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-wiki-panel">
                <Image
                  src={wikiAssetUrl(entry.cover)}
                  alt=""
                  fill
                  priority={index < 3}
                  quality={90}
                  sizes="(max-width: 640px) 45vw, 18vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-2.5 truncate text-[14px] font-medium leading-snug tracking-[-0.01em] text-wiki-ink transition-colors group-hover:text-wiki-accent sm:text-[15px]">
                {entry.title}
              </h3>
              <p className="mt-0.5 truncate text-[12px] text-wiki-dim">
                {WIKI_KIND_LABELS[entry.kind]}
              </p>
            </I18nLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
