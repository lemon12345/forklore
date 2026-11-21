import SectionLabel from "@/components/home/SectionLabel";
import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type VideoStripProps = {
  title: string;
  subtitle: string;
  headingId: string;
  entries: readonly WikiRegistryEntry[];
  moreLabel: string;
};

export default function VideoStrip({
  title,
  subtitle,
  headingId,
  entries,
  moreLabel,
}: VideoStripProps) {
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
      <p className="type-hint -mt-2 mb-5 max-w-xl !text-[14px] !leading-6">
        {subtitle}
      </p>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-5">
        {entries.map((entry, index) => (
          <li key={entry.slug}>
            <I18nLink
              href={`/${entry.slug}`}
              prefetch={false}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-wiki-panel">
                <Image
                  src={wikiAssetUrl(entry.cover)}
                  alt=""
                  fill
                  priority={index < 4}
                  quality={88}
                  sizes="(max-width: 768px) 45vw, 18vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-2 top-2 rounded-full bg-wiki-elevated/95 px-2 py-0.5 text-[10px] font-medium tracking-[0.02em] text-wiki-muted shadow-sm">
                  {WIKI_KIND_LABELS[entry.kind]}
                </span>
              </div>
              <h3 className="mt-3 text-[14px] font-medium leading-snug tracking-[-0.01em] text-wiki-ink transition-colors group-hover:text-wiki-accent sm:text-[15px]">
                {entry.title}
              </h3>
            </I18nLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
