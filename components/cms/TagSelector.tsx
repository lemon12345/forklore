"use client";

import { cn } from "@/lib/utils";
import { Tag } from "@/types/cms";

interface TagSelectorProps {
  tags: Tag[];
  selectedTagId: string | null;
  onSelectTag: (tagId: string | null) => void;
}

export function TagSelector({
  tags,
  selectedTagId,
  onSelectTag,
}: TagSelectorProps) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onSelectTag(null)}
        className={cn(
          "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
          selectedTagId === null
            ? "border-wiki-ink/20 bg-wiki-ink text-wiki"
            : "border-wiki-line bg-wiki-panel text-wiki-muted hover:border-wiki-ink/20 hover:bg-wiki-elevated/60 hover:text-wiki-ink"
        )}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onSelectTag(tag.id)}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
            selectedTagId === tag.id
              ? "border-wiki-ink/20 bg-wiki-ink text-wiki"
              : "border-wiki-line bg-wiki-panel text-wiki-muted hover:border-wiki-ink/20 hover:bg-wiki-elevated/60 hover:text-wiki-ink"
          )}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
