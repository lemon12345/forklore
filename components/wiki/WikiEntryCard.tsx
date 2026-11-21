import { Link as I18nLink } from "@/i18n/routing";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import { PostBase } from "@/types/cms";
import Image from "next/image";

type WikiEntryCardProps = {
  post: PostBase;
  baseUrl: string;
};

export function WikiEntryCard({ post, baseUrl }: WikiEntryCardProps) {
  return (
    <I18nLink
      href={`${baseUrl}/${post.slug}`}
      title={post.title}
      prefetch={false}
      className="group flex gap-4 rounded-2xl border border-wiki-line bg-wiki-panel p-3 transition-[background-color,border-color] hover:border-wiki-ink/20 hover:bg-wiki-elevated/50"
    >
      <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-wiki-elevated sm:h-24 sm:w-36">
        <Image
          src={wikiAssetUrl(post.featuredImageUrl)}
          alt=""
          fill
          sizes="144px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1 py-0.5">
        <h2 className="truncate font-medium text-wiki-ink transition-colors group-hover:text-wiki-accent-soft">
          {post.title}
        </h2>
        {post.description ? (
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-wiki-muted">
            {post.description}
          </p>
        ) : null}
        {post.tags ? (
          <p className="mt-2 truncate text-xs text-wiki-dim">{post.tags}</p>
        ) : null}
      </div>
    </I18nLink>
  );
}
