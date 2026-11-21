"use client";

import { WikiArticle } from "@/components/wiki/WikiArticle";
import { malfoidArticle } from "@/content/malfoid/article";

export function MalfoidArticle() {
  return <WikiArticle article={malfoidArticle} />;
}
