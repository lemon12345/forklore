"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      type="button"
      className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-wiki-muted transition-colors hover:bg-wiki-ink/[0.06] hover:text-wiki-ink"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <Sun
        className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        strokeWidth={1.75}
      />
      <Moon
        className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        strokeWidth={1.75}
      />
    </button>
  );
}
