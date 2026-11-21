import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const talkToMeDojaArticle = {
  title: "Talk to Me Doja",
  description:
    "Talk to Me Doja is the Nov 2026 TikTok dance: sped-up Doja Cat Like That plus Urara Shiraishi’s shy hands-under-chin sway from Yamada-kun and the Seven Witches.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Talk to Me Doja]] (also [[Speak to Me Doja]], [[Talk To Me Doja dance]]) is a 2026 TikTok sound-and-dance trend that pairs a sped-up cut of [[Doja Cat]]’s [[Like That]] with a shy side-to-side sway from episode 1 of [[Yamada-kun and the Seven Witches]], where [[Urara Shiraishi]] tucks her hands under her chin. Creators film themselves mirroring the motion beside the anime clip, usually under the on-screen caption “Talk to me Doja.”{{1}}{{2}}{{3}}",
    "The earliest documented edit landed 7 Nov 2026 from TikTok [[@lovingbalanci]] with the earlier caption “Speak to me Doja” (~229k views in five days). Side-by-side recreations by [[@the_real.ryan]] (~3.1M), [[@bunnicutieluv]] (~744k), and [[@twin.cities.mattress]] (~572k) pushed the sound into a participatory dance loop within days.{{2}}{{4}}{{5}}{{6}}",
  ],
  infobox: {
    title: "Talk to Me Doja",
    image: {
      src: "/talk-to-me-doja/cover.jpg",
      alt: "Talk to Me Doja — Urara Shiraishi shy hands-under-chin sway meme still",
      caption:
        "Urara’s bashful chin-hands sway from Yamada-kun ep1, the visual locked to sped-up Like That.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Speak to Me Doja",
          "Talk To Me Doja dance",
          "Urara Shiraishi Doja sway",
        ],
      },
      {
        label: "Type",
        value: "Sound / dance trend / participatory duet",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "TikTok @lovingbalanci · 7 Nov 2026",
        href: "https://www.tiktok.com/@lovingbalanci/video/7705422899473173774",
      },
      {
        label: "Audio",
        value: "Doja Cat — Like That (sped-up)",
      },
      {
        label: "Source scene",
        value: "Yamada-kun and the Seven Witches · ep1 shy sway",
        href: "https://www.youtube.com/watch?v=GSU82iAwXI0",
      },
      {
        label: "Peak wave",
        value: "7–12 Nov 2026 (TikTok / Reels)",
      },
      {
        label: "Related",
        value: [
          "Anime duet dances",
          "Sped-up pop sound trends",
          "Yamada-kun body-swap gags",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram Reels", "YouTube"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke is soft, not dunking: a bashful anime sway reads as the body’s answer if Doja Cat actually “talked” to you. Hands fold under the chin, shoulders rock left–right on the sped-up hook, and the caption names the singer like a flirty summons. Side-by-side layouts keep Urara in frame so the live dancer is scored against the original beat.{{1}}{{3}}",
        "Formally it travels as a reusable sound more than a one-off reaction. Creators stitch or duet the episode-1 clip, match the hand placement, and stamp “Talk to me Doja” (or the origin wording “Speak to me Doja”) on screen. Short loops under ~15 seconds dominate because they fit the chopped audio.{{2}}{{4}}",
      ],
      image: {
        src: "/talk-to-me-doja/cover.jpg",
        alt: "Talk to Me Doja dance trend cover still",
        caption:
          "Canonical visual: Urara’s shy sway — the pose dancers copy beside the anime.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "[[Yamada-kun and the Seven Witches]] (2015) opens with delinquent [[Ryuu Yamada]] and honors student Urara Shiraishi swapping bodies after a staircase kiss. In episode 1, Urara’s body — piloted by Ryuu — gets asked out by [[Toranosuke Miyamura]]; trying to stay in character, she performs a nervous, hands-under-chin sway while accepting. That beat is the meme’s source choreography.{{1}}{{7}}",
        "On 7 Nov 2026, [[@lovingbalanci]] posted the earliest known pairing: the Urara sway over a sped-up [[Like That]] cut with the caption “Speak to me Doja,” later tallied around ~229k views in five days. The sticky public name flipped to “Talk to me Doja” as dancers flooded the sound, but both captions point to the same trend.{{2}}{{3}}",
      ],
      link: {
        href: "https://www.tiktok.com/@lovingbalanci/video/7705422899473173774",
        label: "TikTok — @lovingbalanci Speak to me Doja origin →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin edit, Crunchyroll-adjacent scene upload, breakout recreations, and reference cards — one beat per card.",
      ],
      gallery: [
        {
          id: "tt-lovingbalanci",
          href: "https://www.tiktok.com/@lovingbalanci/video/7705422899473173774",
          kind: "video",
          source: "web",
          handle: "@lovingbalanci",
          author: "TikTok origin",
          text: "Speak to me Doja",
          date: "7 Nov 2026",
          caption:
            "Earliest documented edit — Urara sway + sped-up Like That under “Speak to me Doja” (~229k views / five days).",
          thumbnail: "/talk-to-me-doja/cover.jpg",
          views: "~229K views",
        },
        {
          id: "yt-yamada-ep1",
          href: "https://www.youtube.com/watch?v=GSU82iAwXI0",
          kind: "video",
          source: "web",
          handle: "Yamada-kun ep1",
          author: "Source footage",
          text: "Urara shy sway / body-swap beat",
          date: "2015",
          caption:
            "Widely shared episode-1 scene upload — the hands-under-chin sway dancers copy.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
        },
        {
          id: "tt-the-real-ryan",
          href: "https://www.tiktok.com/@the_real.ryan/video/7706097117160361229",
          kind: "video",
          source: "web",
          handle: "@the_real.ryan",
          author: "TikTok recreation",
          text: "Dance beside anime clip",
          date: "9 Nov 2026",
          caption:
            "Breakout recreation swaying alongside Urara — ~3.1M views in three days.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
          views: "~3.1M views",
        },
        {
          id: "tt-bunnicutieluv",
          href: "https://www.tiktok.com/@bunnicutieluv/video/7706351111191416095",
          kind: "video",
          source: "web",
          handle: "@bunnicutieluv",
          author: "TikTok recreation",
          text: "Talk to me Doja sway",
          date: "9 Nov 2026",
          caption:
            "Same-day follow-up recreation — ~744k views in three days.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
          views: "~744K views",
        },
        {
          id: "tt-twin-cities",
          href: "https://www.tiktok.com/@twin.cities.mattress/video/7706633127090834702",
          kind: "video",
          source: "web",
          handle: "@twin.cities.mattress",
          author: "TikTok recreation",
          text: "Trend follow dance",
          date: "10 Nov 2026",
          caption:
            "Mattress-store account joining the sway — ~572k views in two days.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
          views: "~572K views",
        },
        {
          id: "kym-entry",
          href: "https://knowyourmeme.com/memes/talk-to-me-doja",
          kind: "image",
          source: "web",
          handle: "Know Your Meme",
          author: "Encyclopedia entry",
          text: "Talk To Me Doja",
          date: "12 Nov 2026",
          caption:
            "KYM submission documenting origin caption, sound pairing, and early recreations.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
        },
        {
          id: "kym-guide",
          href: "https://knowyourmeme.com/editorials/guides/what-is-the-talk-to-me-doja-meme-the-viral-yamada-kun-and-the-seven-witches-memes-explained",
          kind: "image",
          source: "web",
          handle: "Know Your Meme",
          author: "Explainer guide",
          text: "What Is The Talk To Me Doja Meme?",
          date: "18 Nov 2026",
          caption:
            "Editorial guide on Yamada-kun body-swap context and how dancers use the caption.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
        },
        {
          id: "doja-like-that",
          href: "https://www.youtube.com/watch?v=XEJLuJyxLDE",
          kind: "video",
          source: "web",
          handle: "Doja Cat",
          author: "Source track",
          text: "Like That (Official Video) ft. Gucci Mane",
          date: "2020",
          caption:
            "Official video for the source single — trend audio is a sped-up slice of Like That.",
          thumbnail: "/talk-to-me-doja/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "On 9 Nov 2026, [[@the_real.ryan]] posted a side-by-side recreation that became the trend’s breakout — ~3.1M views in three days — proving the format worked as a participatory duet, not only an anime edit. [[@bunnicutieluv]] followed the same day (~744k / three days).{{4}}{{5}}",
        "By 10 Nov, [[@twin.cities.mattress]] and other accounts were treating the sound as a ready dance challenge (~572k / two days). Instagram Reels mirrored the audio soon after, with sibling / couple syncs copying Urara’s hand placement. Encyclopedia writeups landed mid-month as the caption stabilized on “Talk to me Doja.”{{6}}{{3}}{{8}}",
      ],
      link: {
        href: "https://www.tiktok.com/@the_real.ryan/video/7706097117160361229",
        label: "TikTok — @the_real.ryan breakout recreation →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: cute summons energy — the dancer is “answering” Doja with Urara’s bashful sway. Tone stays flirty / wholesome; mismatch humor comes from serious-looking creators suddenly cupping their chin on the drop.{{3}}{{8}}",
        "Best as a short duet or stitch: keep the anime PIP, match the rock on the sped-up hook, and stamp the caption. “Speak to me Doja” nods to the origin post; “Talk to me Doja” is the sticky search form.{{2}}{{4}}",
      ],
      list: [
        "Side-by-side recreation with Urara PIP + sped-up Like That",
        "Solo sway with on-screen “Talk to me Doja” / “Speak to me Doja”",
        "Couple / friend sync dances matching chin-hands pose",
        "Instagram Reels audio mirrors of the TikTok sound",
        "Anime-fandom stitches that name Yamada-kun episode 1",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{4}}"],
      list: [
        "2015 — Yamada-kun and the Seven Witches airs; ep1 shy-sway beat filmed{{1}}",
        "2019–2020 — Doja Cat releases Like That; official video follows{{9}}",
        "7 Nov 2026 — @lovingbalanci posts “Speak to me Doja” origin edit (~229k / five days){{2}}",
        "9 Nov 2026 — @the_real.ryan breakout recreation (~3.1M); @bunnicutieluv (~744k){{4}}{{5}}",
        "10 Nov 2026 — @twin.cities.mattress trend follow (~572k / two days){{6}}",
        "12–18 Nov 2026 — Know Your Meme entry + explainer guide document the wave{{3}}{{8}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "YouTube",
      title:
        "Yamada-kun and the Seven Witches — episode 1 shy-sway / source scene upload",
      href: "https://www.youtube.com/watch?v=GSU82iAwXI0",
      date: "2015",
    },
    {
      id: 2,
      publisher: "TikTok",
      title: "@lovingbalanci — Speak to me Doja origin edit",
      href: "https://www.tiktok.com/@lovingbalanci/video/7705422899473173774",
      date: "7 Nov 2026",
    },
    {
      id: 3,
      publisher: "Know Your Meme",
      title: "Talk To Me Doja",
      href: "https://knowyourmeme.com/memes/talk-to-me-doja",
      date: "12 Nov 2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@the_real.ryan — Talk to Me Doja recreation",
      href: "https://www.tiktok.com/@the_real.ryan/video/7706097117160361229",
      date: "9 Nov 2026",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@bunnicutieluv — Talk to Me Doja dance",
      href: "https://www.tiktok.com/@bunnicutieluv/video/7706351111191416095",
      date: "9 Nov 2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@twin.cities.mattress — Talk to Me Doja trend follow",
      href: "https://www.tiktok.com/@twin.cities.mattress/video/7706633127090834702",
      date: "10 Nov 2026",
    },
    {
      id: 7,
      publisher: "Crunchyroll",
      title: "Yamada-kun and the Seven Witches (series page)",
      href: "https://www.crunchyroll.com/series/GY5VEK95Y/yamada-kun-and-the-seven-witches",
      date: "2015",
    },
    {
      id: 8,
      publisher: "Know Your Meme",
      title:
        "What Is The 'Talk To Me Doja' Meme? Yamada-Kun and the Seven Witches explained",
      href: "https://knowyourmeme.com/editorials/guides/what-is-the-talk-to-me-doja-meme-the-viral-yamada-kun-and-the-seven-witches-memes-explained",
      date: "18 Nov 2026",
    },
    {
      id: 9,
      publisher: "YouTube",
      title: "Doja Cat — Like That (Official Video) ft. Gucci Mane",
      href: "https://www.youtube.com/watch?v=XEJLuJyxLDE",
      date: "25 Jun 2020",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with Doja Cat, Crunchyroll, or Yamada-kun and the Seven Witches · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
