"use client";

import { listPublishedPostsAction } from "@/actions/posts/posts";
import { PostType } from "@/lib/db/schema";
import { PostBase, PublicPost, Tag } from "@/types/cms";
import dayjs from "dayjs";
import { Loader2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";
import { PostCard } from "./PostCard";
import { TagSelector } from "./TagSelector";

function mapServerPostToCard(post: PublicPost, locale: string): PostBase {
  return {
    locale: locale,
    title: post.title,
    description: post.description ?? "",
    featuredImageUrl: post.featuredImageUrl ?? "/placeholder.svg",
    slug: post.slug,
    tags: post.tags ?? "",
    publishedAt:
      (post.publishedAt && dayjs(post.publishedAt).toDate()) || new Date(),
    status: post.status ?? "published",
    visibility: post.visibility ?? "public",
    isPinned: post.isPinned ?? false,
    content: "", // content is not used in the card
  };
}

interface PostListProps {
  postType: PostType;
  locale: string;
  baseUrl: string;
  localPosts: PostBase[];
  initialPosts: PublicPost[];
  initialTotal: number;
  serverTags?: Tag[];
  pageSize: number;
  showTagSelector?: boolean;
  showCover?: boolean;
  gridClassName?: string;
  emptyMessage?: string;
  initialTagId?: string | null;
  filter?: string;
  CardComponent?: React.ComponentType<{
    post: PostBase;
    baseUrl: string;
    showCover?: boolean;
  }>;
}

export function PostList({
  postType,
  baseUrl,
  localPosts,
  initialPosts,
  initialTotal,
  serverTags = [],
  locale,
  pageSize,
  showTagSelector = false,
  showCover = true,
  gridClassName,
  emptyMessage = "No posts found.",
  initialTagId = null,
  filter = "",
  CardComponent = PostCard,
}: PostListProps) {
  const [posts, setPosts] = useState<PublicPost[]>(initialPosts);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(
    initialPosts.length < initialTotal
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedTagId, setSelectedTagId] = useState<string | null>(
    initialTagId
  );
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  // Default grid class based on showCover if not provided
  // When showCover is false, always use single column layout regardless of gridClassName
  const gridClass =
    gridClassName ??
    (showCover
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      : "flex flex-col gap-1");

  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const result = await listPublishedPostsAction({
      pageIndex: pageIndex,
      pageSize: pageSize,
      tagId: showTagSelector ? selectedTagId : undefined,
      filter,
      postType: postType,
      locale: locale,
    });

    if (result.success && result.data?.posts) {
      const newPosts = result.data.posts;
      const newTotal = result.data.count ?? initialTotal;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPageIndex((prevIndex) => prevIndex + 1);
      setHasMore(posts.length + newPosts.length < newTotal);
    } else {
      console.error("Failed to load more posts:", result.error);
      toast.error("Failed to load more posts", {
        description: result.error,
      });
    }
    setIsLoading(false);
  }, [
    pageIndex,
    isLoading,
    hasMore,
    initialTotal,
    posts.length,
    selectedTagId,
    pageSize,
    postType,
    showTagSelector,
    locale,
    filter,
  ]);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMorePosts();
    }
  }, [inView, hasMore, isLoading, loadMorePosts]);

  useEffect(() => {
    setPosts(initialPosts);
    setPageIndex(1);
    setHasMore(initialPosts.length < initialTotal);
    setSelectedTagId(initialTagId);
  }, [initialPosts, initialTotal, initialTagId]);

  const handleTagSelect = async (tagId: string | null) => {
    if (tagId === selectedTagId) return;

    setSelectedTagId(tagId);
    setIsLoading(true);

    const result = await listPublishedPostsAction({
      pageIndex: 0,
      pageSize: pageSize,
      tagId: tagId,
      filter,
      postType: postType,
      locale: locale,
    });

    if (result.success && result.data?.posts) {
      setPosts(result.data.posts);
      setPageIndex(1);
      setHasMore(result.data.posts.length < (result.data.count ?? 0));
    } else {
      console.error("Failed to filter posts by tag:", result.error);
      toast.error("Failed to filter posts by tag", {
        description: result.error,
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      {showTagSelector && serverTags.length > 0 && (
        <TagSelector
          tags={serverTags}
          selectedTagId={selectedTagId}
          onSelectTag={handleTagSelect}
        />
      )}

      {isLoading && pageIndex === 1 ? (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <div className={gridClass}>
            {(!showTagSelector || selectedTagId === null) &&
              localPosts.map((post) => (
                <CardComponent
                  key={`local-${post.slug}`}
                  post={post}
                  baseUrl={baseUrl}
                  showCover={showCover}
                />
              ))}

            {posts.map((post) => (
              <CardComponent
                key={`server-${post.id}`}
                post={mapServerPostToCard(post, locale)}
                baseUrl={baseUrl}
                showCover={showCover}
              />
            ))}
          </div>

          {hasMore && (
            <div ref={ref} className="flex justify-center items-center py-8">
              {isLoading ? (
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              ) : (
                <span className="text-wiki-dim">Loading more…</span>
              )}
            </div>
          )}

          {!hasMore && posts.length >= 0 && (
            <p className="py-8 text-center text-sm text-wiki-dim">
              {posts.length === 0 ? emptyMessage : "You've reached the end."}
            </p>
          )}
        </>
      )}
    </>
  );
}
