import SectionLabel from "@/components/home/SectionLabel";
import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type FeaturedStoriesProps = {
  lead: WikiRegistryEntry;
  stories: readonly WikiRegistryEntry[];
  sectionLabel: string;
  byLabel: string;
};

export default function FeaturedStories({
  lead,
  stories,
  sectionLabel,
  byLabel,
}: FeaturedStoriesProps) {
  return (
    <section aria-labelledby="home-featured-heading" className="w-full">
      <SectionLabel
        id="home-featured-heading"
        title={sectionLabel}
        variant="display"
      />

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <I18nLink
          href={`/${lead.slug}`}
          prefetch={false}
          className="group block lg:col-span-7"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-wiki-panel sm:aspect-[16/9]">
            <Image
              src={wikiAssetUrl(lead.cover)}
              alt=""
              fill
              priority
              quality={92}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-5">
            <p className="type-label text-[12px] tracking-[0.02em]">
              {WIKI_KIND_LABELS[lead.kind]}
            </p>
            <h3 className="wiki-display mt-2 text-[1.85rem] leading-[1.08] tracking-[-0.018em] text-wiki-ink transition-colors group-hover:text-wiki-accent sm:text-[2.15rem] md:text-[2.35rem]">
              {lead.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-wiki-muted sm:text-[16px]">
              {lead.description}
            </p>
            <p className="mt-3 text-[13px] text-wiki-dim">
              {byLabel} · Forklore
            </p>
          </div>
        </I18nLink>

        <ul className="flex flex-col divide-y divide-wiki-line lg:col-span-5">
          {stories.map((entry) => (
            <li key={entry.slug} className="py-4 first:pt-0 last:pb-0">
              <I18nLink
                href={`/${entry.slug}`}
                prefetch={false}
                className="group grid grid-cols-[104px_1fr] gap-3.5 sm:grid-cols-[120px_1fr] sm:gap-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-wiki-panel">
                  <Image
                    src={wikiAssetUrl(entry.cover)}
                    alt=""
                    fill
                    quality={88}
                    sizes="120px"
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>
                <div className="min-w-0 self-center">
                  <p className="type-label text-[11px]">
                    {WIKI_KIND_LABELS[entry.kind]}
                  </p>
                  <h3 className="mt-1 text-[15px] font-medium leading-snug tracking-[-0.01em] text-wiki-ink transition-colors group-hover:text-wiki-accent sm:text-[16px]">
                    {entry.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-wiki-muted">
                    {entry.description}
                  </p>
                </div>
              </I18nLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
