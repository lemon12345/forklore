"use client";

import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";
import { Link as I18nLink } from "@/i18n/routing";
import {
  CheckCircle2Icon,
  ExternalLinkIcon,
  LinkIcon,
  PlayIcon,
  XIcon,
} from "lucide-react";
import { wikiAssetUrl } from "@/lib/wiki/asset-url";
import Image from "next/image";
import { useEffect, useId, useState } from "react";

function statusIdFromHref(href: string): string | null {
  const m = href.match(/status\/(\d+)/);
  return m?.[1] ?? null;
}

function tiktokIdFromHref(href: string): string | null {
  const m = href.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/i);
  return m?.[1] ?? null;
}

function youtubeIdFromHref(href: string): string | null {
  const watch = href.match(/[?&]v=([\w-]{6,})/);
  if (watch) return watch[1];
  const short = href.match(/youtu\.be\/([\w-]{6,})/);
  if (short) return short[1];
  const embed = href.match(/youtube\.com\/embed\/([\w-]{6,})/);
  return embed?.[1] ?? null;
}

function InfoboxValue({ row }: { row: WikiInfoboxRow }) {
  if (row.href && typeof row.value === "string") {
    return (
      <a
        href={row.href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-wiki-accent underline underline-offset-[2px]"
      >
        {row.value}
      </a>
    );
  }

  if (Array.isArray(row.value)) {
    return (
      <ul className="m-0 list-none p-0">
        {row.value.map((item) => (
          <li key={item} className="ib-line">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return <>{row.value}</>;
}

function Infobox({ article }: { article: WikiArticleData }) {
  const { infobox } = article;

  return (
    <aside className="infobox mb-8 w-full overflow-hidden rounded-[12px] border border-wiki-line-strong bg-wiki-elevated md:float-right md:mb-6 md:ml-6 md:w-[240px] lg:ml-8 lg:w-[300px]">
      <div className="border-b border-wiki-line bg-wiki-panel px-3 py-2.5 text-center">
        <span className="block text-[14.5px] font-medium leading-[1.3] tracking-[-0.005em] text-wiki-ink">
          {infobox.title}
        </span>
      </div>

      <figure className="m-0 border-b border-wiki-line">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-wiki-panel">
          <Image
            src={wikiAssetUrl(infobox.image.src)}
            alt={infobox.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 300px"
            className={
              infobox.image.fit === "contain"
                ? "object-contain object-center p-2"
                : "object-cover object-[center_15%]"
            }
          />
        </div>
        <figcaption className="px-3 py-2 text-center text-[11.5px] leading-[1.4] text-wiki-muted">
          {infobox.image.caption}
        </figcaption>
      </figure>

      <dl className="m-0">
        {infobox.rows.map((row) => (
          <div
            key={row.label}
            className="ib-row grid grid-cols-[92px_1fr] gap-x-3 px-3 py-[6px] text-[12.5px] leading-[1.4]"
          >
            <dt className="font-medium text-wiki-ink">{row.label}</dt>
            <dd className="m-0 min-w-0 break-words text-wiki-ink">
              <InfoboxValue row={row} />
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function ContentsNav({
  article,
  activeId,
}: {
  article: WikiArticleData;
  activeId: string;
}) {
  return (
    <>
      <div className="type-label shrink-0 pb-2.5 pl-4 pt-9">Contents</div>
      <nav
        aria-label="Contents"
        className="toc-rail relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden pr-4"
      >
        <div
          className="absolute bottom-24 left-0 top-0 w-px bg-wiki-line"
          aria-hidden="true"
        />
        <ul className="relative text-[13px] leading-[1.35]">
          {article.sections.map((section) => {
            const sectionActive =
              activeId === section.id ||
              section.subsections?.some((s) => s.id === activeId);
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  data-active={sectionActive ? "1" : "0"}
                  className="toc-link relative block py-[4px] pr-2 pl-[14px] text-wiki-dim transition-colors hover:text-wiki-ink data-[active=1]:text-wiki-ink"
                >
                  {sectionActive ? (
                    <span
                      className="absolute top-1 bottom-1 left-0 w-[2px] rounded-full bg-wiki-ink"
                      aria-hidden="true"
                    />
                  ) : null}
                  {section.title}
                </a>
                {section.subsections?.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    data-active={activeId === sub.id ? "1" : "0"}
                    className="toc-link block py-[4px] pr-2 pl-[26px] text-wiki-dim transition-colors hover:text-wiki-ink data-[active=1]:text-wiki-ink"
                  >
                    {sub.title}
                  </a>
                ))}
              </li>
            );
          })}
          {article.references?.length ? (
            <li>
              <a
                href="#references"
                data-active={activeId === "references" ? "1" : "0"}
                className="toc-link relative block py-[4px] pr-2 pl-[14px] text-wiki-dim transition-colors hover:text-wiki-ink data-[active=1]:text-wiki-ink"
              >
                {activeId === "references" ? (
                  <span
                    className="absolute top-1 bottom-1 left-0 w-[2px] rounded-full bg-wiki-ink"
                    aria-hidden="true"
                  />
                ) : null}
                References
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
}

function SectionFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="relative z-0 mx-auto my-6 block w-min max-w-full rounded-lg lg:float-right lg:my-2 lg:ml-6 lg:max-w-[300px]">
      <Image
        src={wikiAssetUrl(src)}
        alt={alt}
        width={600}
        height={450}
        sizes="(max-width: 1023px) 100vw, 300px"
        className="h-auto max-h-[600px] min-w-[220px] w-auto max-w-full rounded-lg border border-wiki-line bg-wiki-elevated object-contain"
      />
      <figcaption className="mt-2 w-full text-center text-xs leading-snug text-wiki-muted opacity-70">
        {caption}
      </figcaption>
    </figure>
  );
}

function XEmbedModal({
  item,
  onClose,
}: {
  item: WikiGalleryItem;
  onClose: () => void;
}) {
  const titleId = useId();
  const statusId =
    item.source !== "web" ? statusIdFromHref(item.href) : null;
  const youtubeId = !statusId ? youtubeIdFromHref(item.href) : null;
  const tiktokId =
    !statusId && !youtubeId ? tiktokIdFromHref(item.href) : null;
  const openLabel = statusId
    ? "Watch on X"
    : youtubeId
      ? "Watch on YouTube"
      : tiktokId
        ? "Watch on TikTok"
        : "Open source";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className={`relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-[12px] border border-wiki-line-strong bg-wiki-elevated shadow-xl ${
          tiktokId ? "max-w-[420px]" : "max-w-[560px]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3 border-b border-wiki-line px-4 py-3">
          <div className="min-w-0 flex-1">
            <p
              id={titleId}
              className="truncate text-[14px] font-medium text-wiki-ink"
            >
              {item.author}{" "}
              <span className="font-normal text-wiki-muted">{item.handle}</span>
            </p>
            <p className="mt-0.5 text-[12.5px] text-wiki-dim">{item.date}</p>
          </div>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-wiki-line px-2.5 text-[12px] text-wiki-ink hover:bg-wiki-panel"
          >
            {openLabel}
            <ExternalLinkIcon className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            className="icon-btn h-8 w-8"
            aria-label="Close"
            onClick={onClose}
          >
            <XIcon className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#f7f9f9] p-3">
          {statusId ? (
            <iframe
              title={`X post by ${item.handle}`}
              src={`https://platform.twitter.com/embed/Tweet.html?id=${statusId}&theme=light&dnt=true`}
              className="w-full border-0"
              style={{ minHeight: item.kind === "video" ? 640 : 520 }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            />
          ) : youtubeId ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                title={`YouTube by ${item.handle}`}
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : tiktokId ? (
            <div className="mx-auto w-full max-w-[325px] overflow-hidden rounded-lg bg-black aspect-[9/16]">
              <iframe
                title={`TikTok by ${item.handle}`}
                src={`https://www.tiktok.com/player/v1/${tiktokId}?music_info=0&description=0&rel=0`}
                className="h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <div className="space-y-3 p-2 text-[14px] text-wiki-ink">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-wiki-panel">
                <Image
                  src={wikiAssetUrl(item.thumbnail)}
                  alt={`${item.text} — ${item.handle}`}
                  fill
                  sizes="560px"
                  className="object-contain"
                />
              </div>
              <p className="font-medium">{item.text}</p>
              <p className="text-[13px] text-wiki-dim">{item.caption}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-wiki-accent underline underline-offset-[2px]"
              >
                Open source →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function GalleryGrid({ items }: { items: WikiGalleryItem[] }) {
  const [active, setActive] = useState<WikiGalleryItem | null>(null);

  return (
    <>
      <div className="my-6 clear-both grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const badge =
            item.source === "web"
              ? item.kind === "video"
                ? "Web · Video"
                : "Web · Image"
              : item.kind === "video"
                ? "X · Video"
                : "X · Image";
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="group flex flex-col overflow-hidden rounded-[12px] border border-wiki-line bg-wiki-elevated text-left transition-colors hover:border-wiki-line-strong hover:bg-wiki-panel"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-wiki-panel">
                <Image
                  src={wikiAssetUrl(item.thumbnail)}
                  alt={`${item.text} — ${item.handle}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {item.kind === "video" ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-wiki-ink shadow-md">
                      <PlayIcon className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </span>
                ) : null}
                <span className="absolute bottom-2 left-2 rounded bg-black/65 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-white">
                  {badge}
                  {item.duration ? ` · ${item.duration}` : ""}
                </span>
                {item.views ? (
                  <span className="absolute right-2 top-2 rounded bg-black/65 px-1.5 py-0.5 text-[10px] text-white">
                    {item.views} views
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-3 py-2.5">
                <p className="text-[12px] text-wiki-muted">
                  {item.handle} · {item.date}
                </p>
                <h3 className="!m-0 line-clamp-2 !font-[inherit] !text-[13.5px] !font-medium !leading-snug !tracking-normal text-wiki-ink">
                  {item.text}
                </h3>
                <p className="line-clamp-2 text-[12px] leading-snug text-wiki-dim">
                  {item.caption}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      {active ? (
        <XEmbedModal item={active} onClose={() => setActive(null)} />
      ) : null}
    </>
  );
}

function CiteMarker({ n }: { n: number }) {
  return (
    <sup className="ml-0.5 whitespace-nowrap text-[11px] font-medium leading-none">
      <a
        href={`#cite-${n}`}
        className="text-wiki-accent no-underline hover:underline"
      >
        [{n}]
      </a>
    </sup>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\]|\{\{\d+\}\})/g);
  return (
    <>
      {parts.map((part, i) => {
        const cite = part.match(/^\{\{(\d+)\}\}$/);
        if (cite) return <CiteMarker key={i} n={Number(cite[1])} />;

        const m = part.match(/^\[\[([^\]]+)\]\]$/);
        if (!m) return <span key={i}>{part}</span>;
        const [left, right] = m[1].split("|");
        const href = right ? left : undefined;
        const label = right || left;
        if (href?.startsWith("http")) {
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {label}
            </a>
          );
        }
        if (href?.startsWith("/")) {
          return (
            <I18nLink key={i} href={href}>
              {label}
            </I18nLink>
          );
        }
        return (
          <span key={i} className="text-wiki-accent">
            {label}
          </span>
        );
      })}
    </>
  );
}

function ReferencesSection({
  references,
}: {
  references: readonly WikiReference[];
}) {
  return (
    <section id="references" className="flow-root clear-both">
      <h2>References</h2>
      <ol className="!mt-3 list-decimal space-y-2.5 pl-5 text-[13.5px] leading-[1.55] text-wiki-ink">
        {references.map((ref) => (
          <li key={ref.id} id={`cite-${ref.id}`} className="pl-1">
            {ref.publisher ? (
              <span className="text-wiki-muted">{ref.publisher}. </span>
            ) : null}
            <a
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-wiki-accent"
            >
              {ref.title}
            </a>
            {ref.date ? (
              <span className="text-wiki-dim"> ({ref.date})</span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

function ArticleSection({ section }: { section: WikiSection }) {
  const [first, ...rest] = section.paragraphs;

  return (
    <section id={section.id} className="flow-root">
      <h2>{section.title}</h2>

      {section.image ? (
        <SectionFigure
          src={section.image.src}
          alt={section.image.alt}
          caption={section.image.caption}
        />
      ) : null}

      {first ? (
        <p>
          <RichText text={first} />
        </p>
      ) : null}

      {rest.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>
          <RichText text={paragraph} />
        </p>
      ))}

      {section.list ? (
        <ul>
          {section.list.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      ) : null}

      {section.link ? (
        <p>
          <a
            href={section.link.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {section.link.label}
          </a>
        </p>
      ) : null}

      {section.gallery?.length ? (
        <GalleryGrid items={section.gallery as WikiGalleryItem[]} />
      ) : null}

      {section.subsections?.map((sub) => {
        const [subFirst, ...subRest] = sub.paragraphs;
        return (
          <div key={sub.id} id={sub.id} className="flow-root">
            <h3>{sub.title}</h3>
            {sub.image ? (
              <SectionFigure
                src={sub.image.src}
                alt={sub.image.alt}
                caption={sub.image.caption}
              />
            ) : null}
            {subFirst ? (
              <p>
                <RichText text={subFirst} />
              </p>
            ) : null}
            {subRest.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        );
      })}
    </section>
  );
}

export function WikiArticle({ article }: { article: WikiArticleData }) {
  const [activeId, setActiveId] = useState(article.sections[0]?.id ?? "");

  useEffect(() => {
    const ids = [
      ...article.sections.flatMap((s) => [
        s.id,
        ...(s.subsections?.map((sub) => sub.id) ?? []),
      ]),
      ...(article.references?.length ? ["references"] : []),
    ];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = ids[0] ?? "";
      for (const el of els) {
        if (el.offsetTop <= y) current = el.id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [article.sections, article.references]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 xl:flex xl:items-start xl:gap-12">
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[224px] shrink-0 flex-col xl:flex">
        <ContentsNav article={article} activeId={activeId} />
      </aside>

      <div className="article-column min-w-0 flex-1 pb-24 pt-7 md:pt-9">
        <div className="w-full max-w-[1040px]">
          <div className="mb-6 rounded-[12px] border border-wiki-line bg-wiki-panel p-4 xl:hidden">
            <div className="type-label mb-2">Contents</div>
            <ul className="space-y-1 text-[13px] leading-[1.35]">
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-wiki-dim hover:text-wiki-ink"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
              {article.references?.length ? (
                <li>
                  <a
                    href="#references"
                    className="text-wiki-dim hover:text-wiki-ink"
                  >
                    References
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="flow-root">
            <header className="mb-6">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h1 className="type-display min-w-0 text-[30px] text-wiki-ink sm:text-[34px]">
                  {article.title}
                </h1>
                <div className="ml-auto flex shrink-0 items-center gap-0.5 self-center">
                  <button
                    type="button"
                    className="icon-btn h-8 w-8"
                    aria-label="Copy link"
                    title="Copy link"
                    onClick={copyLink}
                  >
                    <LinkIcon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              <div className="mt-1.5 flex items-center gap-2 border-b border-wiki-line pb-3">
                <div className="type-hint inline-flex items-center gap-1.5 !text-[13px]">
                  <CheckCircle2Icon className="h-3.5 w-3.5 shrink-0 text-wiki-dim" />
                  <span>{article.curatedLabel ?? "Curated entry · Nov 2026"}</span>
                </div>
              </div>
            </header>

            <Infobox article={article} />

            <div className="article-body">
              {article.lead.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>
                  <RichText text={paragraph} />
                </p>
              ))}

              {article.sections.map((section) => (
                <ArticleSection key={section.id} section={section} />
              ))}

              {article.references?.length ? (
                <ReferencesSection references={article.references} />
              ) : null}

              <p className="!mt-10 clear-both !text-[12px] !leading-relaxed !text-wiki-dim">
                {article.footerNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
