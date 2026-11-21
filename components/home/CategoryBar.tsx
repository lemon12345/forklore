import SectionLabel from "@/components/home/SectionLabel";
import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiEntryKind,
} from "@/content/wiki/registry";

type CategoryBarProps = {
  title: string;
  headingId: string;
  kinds: readonly WikiEntryKind[];
};

export default function CategoryBar({
  title,
  headingId,
  kinds,
}: CategoryBarProps) {
  if (kinds.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="w-full">
      <SectionLabel id={headingId} title={title} variant="display" />
      <ul className="flex flex-wrap gap-2">
        {kinds.map((kind) => (
          <li key={kind}>
            <I18nLink
              href={`/glossary?kind=${kind}`}
              prefetch={false}
              className="inline-flex rounded-full border border-wiki-line bg-wiki-elevated px-3.5 py-2 text-[13px] font-medium text-wiki-ink transition-colors hover:border-wiki-line-strong hover:bg-wiki-panel"
            >
              {WIKI_KIND_LABELS[kind]}
            </I18nLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
