import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://forklore.wiki";

const GITHUB_URL = ''
const TWITTER_URL = ''
const YOUTUBE_URL = ''
const INSTAGRAM_URL = ''
const TIKTOK_URL = ''
const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL
const EMAIL_URL = 'hi@forklore.wiki'

export const siteConfig: SiteConfig = {
  name: "Forklore Wiki",
  description:
    "Look up memes, formats, catchphrases, and viral videos. Forklore traces where they started, how they spread, and every remix — a searchable meme encyclopedia.",
  url: BASE_URL,
  authors: [
    {
      name: "Forklore",
      url: BASE_URL,
    }
  ],
  creator: '@forklore',
  socialLinks: {
    github: GITHUB_URL,
    twitter: TWITTER_URL,
    youtube: YOUTUBE_URL,
    instagram: INSTAGRAM_URL,
    tiktok: TIKTOK_URL,
    discord: DISCORD_URL,
    email: EMAIL_URL,
    // add more social links here
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'light', // next-theme option: system | dark | light — match Grokipedia light shell
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    // Opaque, full-bleed icon with the theme-color background baked in.
    // iOS renders apple-touch-icon as-is (ignoring transparency / manifest bg),
    // so this must be the opaque file or white edges leak through on the home screen.
    apple: "/apple-touch-icon.png",
  },
}
