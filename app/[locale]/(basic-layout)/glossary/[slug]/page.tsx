import { listPublishedPostsAction } from "@/actions/posts/posts";
import { getViewCountAction } from "@/actions/posts/views";
import { ContentRestrictionMessage } from "@/components/cms/ContentRestrictionMessage";
import { POST_CONFIGS } from "@/components/cms/post-config";
import { RelatedPosts } from "@/components/cms/RelatedPosts";
import { ViewCounter } from "@/components/cms/ViewCounter";
import { TableOfContents } from "@/components/tiptap/TableOfContents";
import { WikiAtmosphere } from "@/components/wiki/WikiAtmosphere";
import { WikiEntryCard } from "@/components/wiki/WikiEntryCard";
import { renderPostMarkdown } from "@/lib/cms/render-markdown";
import { Link as I18nLink, Locale, LOCALES } from "@/i18n/routing";
import { glossaryCms } from "@/lib/cms";
import { constructMetadata } from "@/lib/metadata";
import { PostBase } from "@/types/cms";
import dayjs from "dayjs";
import { ArrowLeftIcon, CalendarIcon, EyeIcon } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type Params = Promise<{
  locale: string;
  slug: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const { metadata: postMetadata } = await glossaryCms.getPostMetadata(
    slug,
    locale
  );

  if (!postMetadata) {
    return constructMetadata({
      title: "404",
      description: "Page not found",
      noIndex: true,
      locale: locale as Locale,
      path: `/glossary/${slug}`,
    });
  }

  const metadataPath = slug.startsWith("/") ? slug : `/${slug}`;
  const fullPath = `/glossary${metadataPath}`;

  // Detect which locales have this glossary entry available
  const availableLocales: string[] = [];
  for (const checkLocale of LOCALES) {
    const { metadata: localeMetadata } = await glossaryCms.getPostMetadata(
      slug,
      checkLocale
    );
    if (localeMetadata) {
      availableLocales.push(checkLocale);
    }
  }

  return constructMetadata({
    title: postMetadata.title,
    description: postMetadata.description || undefined,
    images: postMetadata.featuredImageUrl
      ? [postMetadata.featuredImageUrl]
      : undefined,
    locale: locale as Locale,
    path: fullPath,
    noIndex: postMetadata.visibility !== "public",
    availableLocales:
      availableLocales.length > 0 ? availableLocales : undefined,
    useDefaultOgImage: false, // Use dynamic opengraph-image.tsx when no featured image
  });
}

export default async function GlossaryPage({ params }: { params: Params }) {
  const { slug, locale } = await params;
  const t = await getTranslations("Glossary");

  const { post, errorCode } = await glossaryCms.getBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  // View count tracking
  const viewCountConfig = POST_CONFIGS.glossary.viewCount;
  let viewCount = 0;

  if (viewCountConfig.enabled && viewCountConfig.showInUI) {
    // Only get view count for display, incrementing is done in Client Component
    const viewCountResult = await getViewCountAction({
      slug,
      postType: "glossary",
      locale,
    });
    viewCount =
      viewCountResult.success && viewCountResult.data?.count
        ? viewCountResult.data.count
        : 0;
  }

  let showRestrictionMessageInsteadOfContent = false;
  let messageTitle = "";
  let messageContent = "";
  let actionText = "";
  let actionLink = "";

  if (errorCode) {
    showRestrictionMessageInsteadOfContent = true;
    const redirectUrl = `/glossary/${slug}`;

    if (errorCode === "unauthorized") {
      messageTitle = t("GlossaryDetail.accessRestricted");
      messageContent = t("GlossaryDetail.unauthorized");
      actionText = t("GlossaryDetail.signIn");
      actionLink = `/login?next=${encodeURIComponent(redirectUrl)}`;
    } else if (errorCode === "notSubscriber") {
      messageTitle = t("GlossaryDetail.premium");
      messageContent = t("GlossaryDetail.premiumContent");
      actionText = t("GlossaryDetail.upgrade");
      actionLink = process.env.NEXT_PUBLIC_PRICING_PATH!;
    }
  }

  const tagsArray = post.tags
    ? post.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag)
    : [];

  const getVisibilityInfo = () => {
    switch (post.visibility) {
      case "subscribers":
        return {
          label: "Subscribers Only",
          bgColor: "bg-purple-600",
        };
      case "logged_in":
        return {
          label: "Members Only",
          bgColor: "bg-blue-600",
        };
      default:
        return {
          label: "Public",
          bgColor: "bg-green-600",
        };
    }
  };

  const visibilityInfo = getVisibilityInfo();

  const contentHtml =
    !showRestrictionMessageInsteadOfContent && post.content
      ? await renderPostMarkdown(post.content)
      : "";

  return (
    <WikiAtmosphere>
      <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
        <ViewCounter
          slug={slug}
          postType="glossary"
          trackView={viewCountConfig.enabled}
          trackMode={viewCountConfig.mode}
        />
        <div className="flex gap-10">
          {/* Sidebar TOC first on desktop â?Grokipedia-like left rail */}
          {post.content ? (
            <aside className="hidden w-56 shrink-0 xl:block">
              <div className="sticky top-24 text-wiki-muted [&_.toc-container]:text-wiki-muted [&_button]:text-wiki-muted [&_button:hover]:bg-wiki-panel [&_button:hover]:text-wiki-ink [&_h3]:font-serif [&_h3]:text-wiki-ink/80">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="mb-8">
              <I18nLink
                href="/glossary"
                title={t("GlossaryDetail.backToGlossary")}
                prefetch={false}
                className="group inline-flex items-center text-sm text-wiki-dim transition-colors hover:text-wiki-accent-soft"
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {t("GlossaryDetail.backToGlossary")}
              </I18nLink>
            </div>

            <header className="mb-10">
              {post.visibility !== "public" && (
                <div
                  className={`${visibilityInfo.bgColor} mb-5 inline-flex rounded-full px-3 py-1 text-xs text-wiki-ink`}
                >
                  {visibilityInfo.label}
                </div>
              )}

              <h1 className="mb-5 font-serif text-4xl leading-tight tracking-tight text-wiki-ink md:text-5xl">
                {post.title}
              </h1>

              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-wiki-dim">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dayjs(post.publishedAt).format("MMMM D, YYYY")}
                </div>

                {viewCountConfig.enabled &&
                  viewCountConfig.showInUI &&
                  viewCount > 0 && (
                    <div className="flex items-center">
                      <EyeIcon className="mr-2 h-4 w-4" />
                      {t("GlossaryDetail.viewCount", { count: viewCount })}
                    </div>
                  )}

                {post.isPinned && (
                  <div className="rounded-md bg-amber-500/15 px-2 py-0.5 text-xs text-amber-200">
                    {t("GlossaryDetail.featured")}
                  </div>
                )}
              </div>

              {post.description ? (
                <p className="rounded-2xl border border-wiki-line bg-wiki-panel p-5 text-lg leading-relaxed text-wiki-muted">
                  {post.description}
                </p>
              ) : null}
            </header>

            {post.featuredImageUrl ? (
              <div className="relative mb-10 aspect-[16/10] overflow-hidden rounded-2xl border border-wiki-line bg-wiki-panel">
                <Image
                  src={post.featuredImageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                  className="object-cover"
                />
              </div>
            ) : null}

            {tagsArray.length > 0 ? (
              <div className="mb-10 flex flex-wrap gap-2">
                {tagsArray.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-wiki-line bg-wiki-panel px-3 py-1 text-sm text-wiki-muted"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            ) : null}

            {post.content ? (
              <div className="mb-8 xl:hidden">
                <div className="rounded-2xl border border-wiki-line bg-wiki-panel text-wiki-muted">
                  <TableOfContents content={post.content} mobile />
                </div>
              </div>
            ) : null}

            {showRestrictionMessageInsteadOfContent ? (
              <ContentRestrictionMessage
                title={messageTitle}
                message={messageContent}
                actionText={actionText}
                actionLink={actionLink}
                backText={t("GlossaryDetail.backToGlossary")}
                backLink={`/glossary`}
              />
            ) : contentHtml ? (
              <article
                className="prose max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-wiki-ink prose-a:text-wiki-accent prose-img:rounded-xl prose-p:leading-relaxed prose-p:text-wiki-muted"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : null}

            {post.id ? (
              <div className="mt-14 border-t border-wiki-line pt-10 [&_.grid]:!grid-cols-1 [&_h2]:font-serif [&_h2]:text-wiki-ink">
                <RelatedPosts
                  postId={post.id}
                  postType="glossary"
                  limit={6}
                  title={t("relatedTitle")}
                  locale={locale}
                  CardComponent={GlossaryEntryCard}
                />
              </div>
            ) : null}

            <div className="mt-12 border-t border-wiki-line pt-8">
              <I18nLink
                href="/glossary"
                title={t("GlossaryDetail.backToGlossary")}
                prefetch={false}
                className="inline-flex items-center rounded-xl border border-wiki-line bg-wiki-panel px-4 py-2 text-sm text-wiki-muted transition-colors hover:bg-wiki-panel hover:text-wiki-ink"
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                {t("GlossaryDetail.backToGlossary")}
              </I18nLink>
            </div>
          </div>
        </div>
      </div>
    </WikiAtmosphere>
  );
}

const GlossaryEntryCard = ({ post }: { post: PostBase }) => (
  <WikiEntryCard post={post} baseUrl="/glossary" />
);

export async function generateStaticParams() {
  const allParams: { locale: string; slug: string }[] = [];

  for (const locale of LOCALES) {
    const serverResult = await listPublishedPostsAction({
      locale: locale,
      pageSize: 1000,
      postType: "glossary",
    });
    if (serverResult.success && serverResult.data?.posts) {
      serverResult.data.posts.forEach((post: { slug: string | null }) => {
        const slugPart = post.slug
          ?.replace(/^\//, "")
          .replace(/^glossary\//, "");
        if (slugPart) {
          allParams.push({ locale, slug: slugPart });
        }
      });
    }
  }

  const uniqueParams = Array.from(
    new Map(allParams.map((p) => [`${p.locale}-${p.slug}`, p])).values()
  );
  return uniqueParams;
}
