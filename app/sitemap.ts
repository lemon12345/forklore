import { listPublishedPostsAction } from '@/actions/posts/posts'
import { siteConfig } from '@/config/site'
import { wikiRegistry } from '@/content/wiki/registry'
import { DEFAULT_LOCALE, LOCALES } from '@/i18n/routing'
import { blogCms } from '@/lib/cms'
import { db, isDatabaseEnabled } from '@/lib/db'
import { posts as postsSchema } from '@/lib/db/schema'
import { MetadataRoute } from 'next'
import { eq, max } from 'drizzle-orm'

const siteUrl = siteConfig.url

const STATIC_PAGE_MTIME = new Date(new Date().getFullYear(), 0, 1)

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | undefined

function localePath(locale: string, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  if (!path || path === '/') return `${siteUrl}${prefix}` || siteUrl
  return `${siteUrl}${prefix}${path.startsWith('/') ? path : `/${path}`}`
}

async function latestPostMtime(postType: 'blog' | 'glossary'): Promise<Date> {
  if (!isDatabaseEnabled) return STATIC_PAGE_MTIME
  try {
    const [row] = await db
      .select({ latest: max(postsSchema.updatedAt) })
      .from(postsSchema)
      .where(eq(postsSchema.postType, postType))
    return row?.latest ? new Date(row.latest) : STATIC_PAGE_MTIME
  } catch {
    return STATIC_PAGE_MTIME
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Marketing / legal / index pages (locale-aware where routed under [locale])
  const staticPaths = [
    { path: '', priority: 1.0 },
    { path: '/glossary', priority: 0.9 },
    { path: '/about', priority: 0.5 },
    { path: '/blog', priority: 0.6 },
  ]

  // Legal pages live under app/(site) without locale prefix
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: STATIC_PAGE_MTIME,
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: STATIC_PAGE_MTIME,
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.3,
    },
  ]

  const pages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    staticPaths.map(({ path, priority }) => ({
      url: localePath(locale, path),
      lastModified: STATIC_PAGE_MTIME,
      changeFrequency: 'daily' as ChangeFrequency,
      priority,
    })),
  )

  // Wiki meme entries (config-as-code registry → /{slug})
  const wikiPages: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    wikiRegistry.map((entry) => ({
      url: localePath(locale, `/${entry.slug}`),
      lastModified: STATIC_PAGE_MTIME,
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: entry.featured || entry.mostReadRank ? 0.9 : 0.8,
    })),
  )

  const [glossaryContentMtime, blogContentMtime] = await Promise.all([
    latestPostMtime('glossary'),
    latestPostMtime('blog'),
  ])

  const allBlogSitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    allBlogSitemapEntries.push({
      url: localePath(locale, '/blog'),
      lastModified: blogContentMtime,
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.8,
    })
  }

  for (const locale of LOCALES) {
    try {
      const { posts: localPosts } = await blogCms.getLocalList(locale)
      localPosts
        .filter((post) => post.slug && post.status !== 'draft')
        .forEach((post) => {
          const slugPart = post.slug.replace(/^\//, '').replace(/^blogs\//, '')
          if (slugPart) {
            allBlogSitemapEntries.push({
              url: localePath(locale, `/blog/${slugPart}`),
              lastModified:
                post.metadata?.updatedAt || post.publishedAt || new Date(),
              changeFrequency: 'daily' as ChangeFrequency,
              priority: 0.7,
            })
          }
        })
    } catch {
      // Local blog files optional
    }
  }

  if (isDatabaseEnabled) {
    for (const locale of LOCALES) {
      try {
        const serverResult = await listPublishedPostsAction({
          locale: locale,
          pageSize: 1000,
          visibility: 'public',
          postType: 'blog',
        })
        if (serverResult.success && serverResult.data?.posts) {
          serverResult.data.posts.forEach((post) => {
            const slugPart = post.slug?.replace(/^\//, '').replace(/^blogs\//, '')
            if (slugPart) {
              allBlogSitemapEntries.push({
                url: localePath(locale, `/blog/${slugPart}`),
                lastModified: post.publishedAt || new Date(),
                changeFrequency: 'daily' as ChangeFrequency,
                priority: 0.7,
              })
            }
          })
        }
      } catch {
        // DB blog posts optional when DATABASE_URL is unset
      }
    }
  }

  const uniqueBlogPostEntries = Array.from(
    new Map(allBlogSitemapEntries.map((entry) => [entry.url, entry])).values(),
  )

  const allGlossarySitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    allGlossarySitemapEntries.push({
      url: localePath(locale, '/glossary'),
      lastModified: glossaryContentMtime,
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 0.8,
    })
  }

  if (isDatabaseEnabled) {
    for (const locale of LOCALES) {
      try {
        const serverResult = await listPublishedPostsAction({
          locale: locale,
          pageSize: 1000,
          visibility: 'public',
          postType: 'glossary',
        })
        if (serverResult.success && serverResult.data?.posts) {
          serverResult.data.posts.forEach((post) => {
            const slugPart = post.slug
              ?.replace(/^\//, '')
              .replace(/^glossary\//, '')
            if (slugPart) {
              allGlossarySitemapEntries.push({
                url: localePath(locale, `/glossary/${slugPart}`),
                lastModified: post.publishedAt || new Date(),
                changeFrequency: 'daily' as ChangeFrequency,
                priority: 0.7,
              })
            }
          })
        }
      } catch {
        // DB glossary optional when DATABASE_URL is unset
      }
    }
  }

  const uniqueGlossaryEntries = Array.from(
    new Map(
      allGlossarySitemapEntries.map((entry) => [entry.url, entry]),
    ).values(),
  )

  // Deduplicate (blog/glossary list pages also appear in staticPaths)
  const merged = [
    ...pages,
    ...wikiPages,
    ...legalPages,
    ...uniqueBlogPostEntries,
    ...uniqueGlossaryEntries,
  ]

  return Array.from(new Map(merged.map((entry) => [entry.url, entry])).values())
}
