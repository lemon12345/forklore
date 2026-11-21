import QuietCover from "@/components/home/QuietCover";
import { Link as I18nLink } from "@/i18n/routing";
import type { WikiRegistryEntry } from "@/content/wiki/registry";

type CoverWallProps = {
  title: string;
  browseAllLabel: string;
  entries: readonly WikiRegistryEntry[];
};

/** Letterboxd-style denser poster wall for the collection shelf. */
export default function CoverWall({
  title,
  browseAllLabel,
  entries,
}: CoverWallProps) {
  return (
    <section className="w-full" aria-labelledby="collection-heading">
      <div className="mb-5 flex items-baseline justify-between gap-4 px-1">
        <h2
          id="collection-heading"
          className="text-[15px] font-semibold tracking-tight text-wiki-ink sm:text-base"
        >
          {title}
        </h2>
        <I18nLink
          href="/glossary"
          prefetch={false}
          className="shrink-0 text-[13px] text-wiki-dim transition-colors hover:text-wiki-accent"
        >
          {browseAllLabel}
        </I18nLink>
      </div>

      <ul className="grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 sm:gap-x-3.5 md:grid-cols-5 md:gap-x-4 md:gap-y-9 lg:grid-cols-6">
        {entries.map((entry, index) => (
          <li key={entry.slug}>
            <QuietCover
              entry={entry}
              priority={index < 6}
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 16vw, 140px"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
