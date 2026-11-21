import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type EditorialGridProps = {
  title: string;
  headingId: string;
  entries: readonly WikiRegistryEntry[];
  browseAllLabel: string;
};

/** Curated essay-card grid — image plate, serif title, short dek. */
export default function EditorialGrid({
  title,
  headingId,
  entries,
  browseAllLabel,
}: EditorialGridProps) {
  if (entries.length === 0) return null;

  return (
    <section className="w-full" aria-labelledby={headingId}>
      <div className="mb-8 flex items-end justify-between gap-4 border-b border-wiki-line pb-4">
        <h2
          id={headingId}
          className="wiki-display text-[1.35rem] font-normal tracking-tight text-wiki-ink sm:text-2xl"
        >
          {title}
        </h2>
        <I18nLink
          href="/glossary"
          prefetch={false}
          className="shrink-0 pb-0.5 text-[12px] uppercase tracking-[0.12em] text-wiki-dim transition-colors hover:text-wiki-accent"
        >
          {browseAllLabel}
        </I18nLink>
      </div>

      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <li key={entry.slug}>
            <I18nLink
              href={`/${entry.slug}`}
              prefetch={false}
              className="group block"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-wiki-panel">
                <Image
                  src={wikiAssetUrl(entry.cover)}
                  alt=""
                  fill
                  priority={index < 3}
                  quality={88}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 320px"
                  className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-wiki-dim">
                {WIKI_KIND_LABELS[entry.kind]}
              </p>
              <h3 className="wiki-display mt-2 text-[1.25rem] font-normal leading-snug tracking-tight text-wiki-ink transition-colors group-hover:text-wiki-accent">
                {entry.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-wiki-muted">
                {entry.description}
              </p>
            </I18nLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
