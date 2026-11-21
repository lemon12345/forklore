import { Link as I18nLink } from "@/i18n/routing";
import {
  WIKI_KIND_LABELS,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";

type QuietCoverProps = {
  entry: WikiRegistryEntry;
  priority?: boolean;
  sizes?: string;
};

/** Square cover tile for Genius-style “also on” rail. */
export default function QuietCover({
  entry,
  priority = false,
  sizes = "(max-width: 640px) 42vw, 160px",
}: QuietCoverProps) {
  return (
    <I18nLink
      href={`/${entry.slug}`}
      prefetch={false}
      title={entry.title}
      className="group block w-full"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
        <Image
          src={wikiAssetUrl(entry.cover)}
          alt=""
          fill
          priority={priority}
          quality={90}
          sizes={sizes}
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>
      <div className="mt-2 min-w-0">
        <h3 className="truncate text-[13px] font-bold leading-snug tracking-tight text-black group-hover:underline">
          {entry.title}
        </h3>
        <p className="mt-0.5 truncate text-[11px] text-black/45">
          {WIKI_KIND_LABELS[entry.kind]}
        </p>
      </div>
    </I18nLink>
  );
}
