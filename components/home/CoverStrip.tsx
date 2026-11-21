import QuietCover from "@/components/home/QuietCover";
import SectionLabel from "@/components/home/SectionLabel";
import type { WikiRegistryEntry } from "@/content/wiki/registry";

type CoverStripProps = {
  title: string;
  headingId: string;
  entries: readonly WikiRegistryEntry[];
  priorityCount?: number;
  moreHref?: string;
  moreLabel?: string;
};

export default function CoverStrip({
  title,
  headingId,
  entries,
  priorityCount = 0,
  moreHref = "/glossary",
  moreLabel,
}: CoverStripProps) {
  if (entries.length === 0) return null;

  return (
    <section className="w-full" aria-labelledby={headingId}>
      <SectionLabel
        id={headingId}
        title={title}
        moreHref={moreHref}
        moreLabel={moreLabel}
      />

      <ul className="grid grid-cols-3 gap-x-3 gap-y-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-x-4">
        {entries.map((entry, index) => (
          <li key={entry.slug}>
            <QuietCover
              entry={entry}
              priority={index < priorityCount}
              sizes="(max-width: 640px) 30vw, 14vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
