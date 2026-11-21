import CategoryBar from "@/components/home/CategoryBar";
import FeaturedStories from "@/components/home/FeaturedStories";
import GeniusCharts from "@/components/home/GeniusCharts";
import HomeCta from "@/components/home/HomeCta";
import HomeSearch from "@/components/home/HomeSearch";
import RecentRail from "@/components/home/RecentRail";
import VideoStrip from "@/components/home/VideoStrip";
import {
  getFeaturedWikiEntry,
  getFreshWikiEntries,
  getMostReadWikiEntries,
  getTrendingWikiEntries,
  getWikiKindsPresent,
  type WikiRegistryEntry,
} from "@/content/wiki/registry";
import { getTranslations } from "next-intl/server";

const CHART_COUNT = 10;
const RECENT_COUNT = 5;
const STORY_COUNT = 3;
const MEDIA_COUNT = 8;

function uniqueBySlug(
  entries: readonly WikiRegistryEntry[],
): WikiRegistryEntry[] {
  const seen = new Set<string>();
  const out: WikiRegistryEntry[] = [];
  for (const entry of entries) {
    if (seen.has(entry.slug)) continue;
    seen.add(entry.slug);
    out.push(entry);
  }
  return out;
}

export default async function HomeComponent() {
  const t = await getTranslations("Landing.Wiki");

  const featured = getFeaturedWikiEntry();
  const trending = getTrendingWikiEntries();
  const mostRead = getMostReadWikiEntries(12);
  const fresh = getFreshWikiEntries(20);

  const storyPool = uniqueBySlug([
    ...(featured ? [featured] : []),
    ...trending,
    ...mostRead,
    ...fresh,
  ]);
  const lead = storyPool[0];
  const sideStories = storyPool.slice(1, 1 + STORY_COUNT);
  const storySlugs = new Set([
    ...(lead ? [lead.slug] : []),
    ...sideStories.map((e) => e.slug),
  ]);

  const charts = uniqueBySlug([...trending, ...mostRead]).slice(0, CHART_COUNT);
  const chartSlugs = new Set(charts.map((e) => e.slug));

  const recent = fresh
    .filter((e) => !chartSlugs.has(e.slug) && !storySlugs.has(e.slug))
    .slice(0, RECENT_COUNT);

  const mediaKinds = new Set(["format", "sound", "video", "reaction"]);
  const media = uniqueBySlug([...fresh, ...trending, ...mostRead])
    .filter((e) => mediaKinds.has(e.kind))
    .slice(0, MEDIA_COUNT);

  const kinds = getWikiKindsPresent();

  return (
    <div className="relative isolate min-h-[calc(100vh-4rem)] w-full bg-wiki text-wiki-ink">
      <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-6 md:pt-10">
        <header className="mb-10 border-b border-wiki-line pb-8 md:mb-12 md:pb-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-xl">
              <h1 className="wiki-display text-[2.75rem] italic leading-[0.95] tracking-[-0.02em] text-wiki-ink sm:text-[3.5rem] md:text-[3.75rem]">
                {t("brand")}
              </h1>
              <p className="type-hint mt-4 max-w-md !text-[15px] !leading-6">
                {t("tagline")}
              </p>
            </div>
            <div className="w-full max-w-lg lg:pb-1">
              <HomeSearch
                placeholder={t("searchPlaceholder")}
                submitLabel={t("searchSubmit")}
                inputId="home-meme-wiki-search"
                size="hero"
              />
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-12 pb-14 md:gap-14 md:pb-16 lg:gap-16">
          {lead ? (
            <FeaturedStories
              lead={lead}
              stories={sideStories}
              sectionLabel={t("topStories")}
              byLabel={t("staff")}
            />
          ) : null}

          <RecentRail
            title={t("recent")}
            headingId="home-recent-heading"
            entries={recent}
            moreLabel={t("more")}
          />

          <GeniusCharts
            title={t("charts")}
            filterLabel={t("chartsFilter")}
            loadMoreLabel={t("loadMore")}
            entries={charts}
          />

          <VideoStrip
            title={t("media")}
            subtitle={t("mediaSubtitle")}
            headingId="home-media-heading"
            entries={media}
            moreLabel={t("browseAll")}
          />

          <CategoryBar
            title={t("categories")}
            headingId="home-categories-heading"
            kinds={kinds}
          />
        </div>
      </div>

      <HomeCta
        title={t("ctaTitle")}
        body={t("ctaBody")}
        actionLabel={t("browseAll")}
      />
    </div>
  );
}
