import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type EditorialFeatureProps = {
  entry: WikiRegistryEntry;
  label: string;
  readLabel: string;
};

/** Public Domain Review–style lead feature: large plate + literary dek. */
export default function EditorialFeature({
  entry,
  label,
  readLabel,
}: EditorialFeatureProps) {
  return (
    <article className="w-full" aria-labelledby="home-feature-title">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-wiki-dim">
        {label}
      </p>
      <I18nLink
        href={`/${entry.slug}`}
        prefetch={false}
        className="group grid gap-6 md:grid-cols-12 md:gap-10 md:items-start"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-wiki-panel md:col-span-7 md:aspect-[4/3]">
          <Image
            src={wikiAssetUrl(entry.cover)}
            alt=""
            fill
            priority
            quality={92}
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover transition-opacity duration-500 group-hover:opacity-90"
          />
        </div>
        <div className="md:col-span-5 md:pt-2">
          <p className="text-[11px] uppercase tracking-[0.14em] text-wiki-dim">
            {WIKI_KIND_LABELS[entry.kind]}
          </p>
          <h2
            id="home-feature-title"
            className="wiki-display mt-3 text-[1.85rem] font-normal leading-[1.15] tracking-tight text-wiki-ink transition-colors group-hover:text-wiki-accent sm:text-[2.15rem]"
          >
            {entry.title}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-wiki-muted sm:text-[16px] sm:leading-7">
            {entry.description}
          </p>
          <span className="mt-6 inline-flex items-center text-[13px] font-medium tracking-wide text-wiki-ink underline decoration-wiki-line underline-offset-4 transition-colors group-hover:text-wiki-accent group-hover:decoration-wiki-accent/40">
            {readLabel}
          </span>
        </div>
      </I18nLink>
    </article>
  );
}
