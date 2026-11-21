import { Link as I18nLink } from "@/i18n/routing";
import type { WikiEntryKind } from "@/content/wiki/registry";
import { WIKI_KIND_LABELS } from "@/content/wiki/registry";

type HomeCategoriesProps = {
  title: string;
  kinds: readonly WikiEntryKind[];
};

export default function HomeCategories({ title, kinds }: HomeCategoriesProps) {
  if (kinds.length === 0) return null;

  return (
    <section
      className="w-full"
      aria-labelledby="home-categories-heading"
    >
      <h2
        id="home-categories-heading"
        className="mb-4 font-serif text-xl tracking-tight text-wiki-ink md:text-2xl"
      >
        {title}
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {kinds.map((kind) => (
          <I18nLink
            key={kind}
            href={`/glossary?kind=${kind}`}
            prefetch={false}
            className="text-[14px] text-wiki-muted transition-colors hover:text-wiki-ink"
          >
            {WIKI_KIND_LABELS[kind]}
          </I18nLink>
        ))}
      </div>
    </section>
  );
}
