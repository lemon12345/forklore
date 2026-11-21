/**
 * Resolve wiki media paths to the CDN (R2 public URL).
 * Local/public paths like "/malfoid/cover.jpg" become
 * "https://cdn.forklore.wiki/malfoid/cover.jpg".
 */
const DEFAULT_CDN = "https://cdn.forklore.wiki";

function assetBase(): string {
  const raw =
    process.env.NEXT_PUBLIC_WIKI_ASSET_BASE ||
    process.env.NEXT_PUBLIC_R2_PUBLIC_URL ||
    process.env.R2_PUBLIC_URL ||
    DEFAULT_CDN;
  return raw.replace(/\/$/, "");
}

export function wikiAssetUrl(
  src: string | null | undefined,
  fallback = "/placeholder.svg",
): string {
  if (!src) return fallback;
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  if (src === "/placeholder.svg" || src.startsWith("/placeholder")) {
    return src;
  }
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${assetBase()}${path}`;
}
