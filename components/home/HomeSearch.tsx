"use client";

import { useRouter } from "@/i18n/routing";
import { Search } from "lucide-react";
import { FormEvent, useState, useTransition } from "react";
import { cn } from "@/lib/utils";

type HomeSearchProps = {
  placeholder: string;
  submitLabel: string;
  inputId?: string;
  size?: "default" | "hero";
};

export default function HomeSearch({
  placeholder,
  submitLabel,
  inputId = "meme-wiki-search",
  size = "default",
}: HomeSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [isPending, startTransition] = useTransition();
  const hero = size === "hero";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    startTransition(() => {
      if (trimmed) {
        router.push(`/glossary?q=${encodeURIComponent(trimmed)}`);
      } else {
        router.push("/glossary");
      }
    });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative w-full" role="search">
        <label htmlFor={inputId} className="sr-only">
          {placeholder}
        </label>
        <div
          className={cn(
            "group flex items-center gap-3 rounded-full border bg-wiki-elevated transition-[border-color,box-shadow] duration-200",
            hero ? "h-14 sm:h-[3.75rem]" : "h-12",
            focused
              ? "border-wiki-line-strong shadow-[0_0_0_3px_rgb(47_109_188/0.12)]"
              : "border-wiki-line shadow-[0_1px_2px_rgb(10_10_10/0.04)]",
            hero ? "pl-5 pr-2 sm:pl-6" : "pl-5 pr-2",
          )}
        >
          <Search
            className={cn(
              "shrink-0 text-wiki-dim",
              hero ? "h-5 w-5" : "h-4 w-4",
            )}
            aria-hidden
          />
          <input
            id={inputId}
            type="search"
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            autoComplete="off"
            disabled={isPending}
            className={cn(
              "h-full min-w-0 flex-1 bg-transparent text-wiki-ink outline-none placeholder:text-wiki-dim disabled:opacity-60",
              hero ? "text-[16px] sm:text-[17px]" : "text-[15px]",
            )}
          />
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "pill-primary shrink-0 rounded-full font-medium tracking-[-0.2px] transition-[filter,transform] active:scale-[0.98] disabled:opacity-60",
              hero
                ? "h-10 px-4 text-[14px] sm:h-11 sm:px-5"
                : "flex h-9 items-center px-3.5 text-[13px]",
            )}
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
