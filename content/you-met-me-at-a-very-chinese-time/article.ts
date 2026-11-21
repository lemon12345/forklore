import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const youMetMeAtAVeryChineseTimeArticle = {
  title: "You Met Me at a Very Chinese Time in My Life",
  description:
    "Fight Club's closer with one word swapped—\"very Chinese time\"—over dumplings, takeout, and Chinamaxxing clips that turn the drama into a nationality gag.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[You Met Me at a Very Chinese Time in My Life]] is a catchphrase that swaps one word in the closing line of [[Fight Club]] (1999): “You met me at a very [[strange]] time in my life” becomes “…a very [[Chinese]] time….” Posts drop the sentence over dumplings, takeout, Chinese restaurant mustard, OC art, or short clips of people “acting Chinese,” with little setup beyond the mismatch.{{1}}{{2}}",
    "The earliest widely cited text post landed on X in April 2025. October TikTok food clips — especially @mylesmarchant’s dumpling video — pushed the line into mass circulation; by early 2026 it rode alongside the related [[Chinamaxxing]] / “becoming Chinese” lifestyle trend and drew mainstream explainers. The joke is deliberately thin — the drama of the Fight Club line collapses into a one-word nationality swap.{{1}}{{3}}{{4}}{{9}}",
  ],
  infobox: {
    title: "You Met Me at a Very Chinese Time in My Life",
    image: {
      src: "/you-met-me-at-a-very-chinese-time/beach.webp",
      alt: "Beach template still with You met me at a very Chinese time in my life text overlay",
      caption:
        "Common shareable still: dramatic beach framing with the catchphrase overlaid.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Very Chinese Time",
          "Chinese time in / of my life",
          "Chinamaxxing caption",
          "u will turn Chinese tomorrow",
        ],
      },
      {
        label: "Type",
        value: "Catchphrase / parody / image macro",
      },
      { label: "Year", value: "2025" },
      {
        label: "Origin",
        value: "X (@girl__virus)",
        href: "https://x.com/girl__virus/status/1908355965218628047",
      },
      {
        label: "Source line",
        value: "Fight Club (1999) — “very strange time”",
      },
      {
        label: "Related",
        value: ["Chinamaxxing", "Becoming Chinese", "Fight Club memes"],
      },
      {
        label: "Platforms",
        value: ["X", "TikTok", "Instagram", "YouTube"],
      },
      {
        label: "First post",
        value: "@girl__virus · 5 Apr 2025",
        href: "https://x.com/girl__virus/status/1908355965218628047",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The format is a portable caption. Pair the sentence with anything coded as Chinese — dumplings, hot water, house slippers, takeout containers, Great Wall stock, or an Adidas “China” jacket — and let the Fight Club seriousness do the rest. Variants add nonsense inserts (“chinese mustard 67”) without changing the structure.{{1}}{{2}}",
        "In late 2025–early 2026 the phrase overlapped with [[Chinamaxxing]]: Western creators filming day-one rituals (warm water, slippers, herbal tea) while claiming a “Chinese time” in their lives. Coverage treated that wave as both ironic admiration for Chinese tech / lifestyle and a stereotype minefield for diaspora viewers.{{3}}{{4}}{{5}}",
      ],
      image: {
        src: "/you-met-me-at-a-very-chinese-time/jinazugawa.jpg",
        alt: "Original character art overlaid with You’ve met me at a very Chinese time in my life",
        caption:
          "September 2025 X art overlay — the phrase grafted onto OC illustration.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 5 April 2025, X user @girl__virus posted the bare sentence “you met me at a very chinese time in my life,” with no media. The post became the earliest widely cited coinage (~27k+ likes / ~3.5k+ reposts / ~950k+ views in later tallies).{{1}}{{2}}",
        "The wording parodies the Narrator’s last line to Marla Singer at the end of David Fincher’s Fight Club: “You met me at a very strange time in my life.” Replacing “strange” with “Chinese” empties the confession and leaves a nationality punchline. Later posts sometimes swap “in my life” for “of my life.”{{1}}{{2}}{{3}}",
      ],
      link: {
        href: "https://meme.com/memes/you-met-me-at-a-very-chinese-time-in-my-life",
        label: "meme.com origin & spread summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin X post, TikTok dumpling breakout, mustard variant, and YouTube explainers of the Chinamaxxing overlap — one card per beat.",
      ],
      gallery: [
        {
          id: "origin-x",
          href: "https://x.com/girl__virus/status/1908355965218628047",
          kind: "image",
          handle: "@girl__virus",
          author: "Origin post",
          text: "you met me at a very chinese time in my life",
          date: "5 Apr 2025",
          caption:
            "Earliest widely cited coinage — bare text on X, no media attached.",
          thumbnail: "/you-met-me-at-a-very-chinese-time/origin-avatar.jpg",
          views: "27K+ likes",
        },
        {
          id: "jinazugawa-x",
          href: "https://x.com/jinazugawa/status/1964101072261419434",
          kind: "image",
          handle: "@jinazugawa",
          author: "Art overlay",
          text: "You’ve met me at a very Chinese time in my life",
          date: "5 Sep 2025",
          caption:
            "Phrase overlaid on original-character art — early visual remix on X.",
          thumbnail: "/you-met-me-at-a-very-chinese-time/jinazugawa.jpg",
          views: "1.5K+ likes",
        },
        {
          id: "myles-tiktok",
          href: "https://www.tiktok.com/@mylesmarchant/video/7559617845089373462",
          kind: "video",
          source: "web",
          handle: "@mylesmarchant",
          author: "TikTok breakout",
          text: "You met me at a very chinese time in my life",
          date: "10 Oct 2025",
          caption:
            "Dumpling clip that pushed the caption into the million-view class (~200k likes) — the October food-wave spark.",
          thumbnail: "/you-met-me-at-a-very-chinese-time/tiktok-dumplings.jpg",
          duration: "0:17",
          views: "1.2M+ / ~200K likes",
        },
        {
          id: "mustard-67-x",
          href: "https://x.com/iiwolfson/status/1983160195028259312",
          kind: "image",
          handle: "@iiwolfson",
          author: "Variant reply",
          text: "you met me at a very chinese mustard 67 time in my life",
          date: "28 Oct 2025",
          caption:
            "Nonsense insert variant reacting to a Chinese-restaurant mustard-packet “record” post (~49k likes).",
          thumbnail: "/you-met-me-at-a-very-chinese-time/beach.webp",
          views: "49K+ likes",
        },
        {
          id: "yt-chinamax-news",
          href: "https://www.youtube.com/watch?v=CCM7qF0mWlY",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "News explainer",
          text: "Chinamaxxing takes over social media",
          date: "2026",
          caption:
            "News-style rundown of the lifestyle wave that reused the “very Chinese time” caption.",
          thumbnail: "/you-met-me-at-a-very-chinese-time/yt-chinamax.jpg",
          duration: "2:00+",
        },
        {
          id: "yt-bbc",
          href: "https://www.youtube.com/watch?v=EMNj5Q-4Gsg",
          kind: "video",
          source: "web",
          handle: "BBC World Service",
          author: "What in the World",
          text: "Chinamaxxing: The viral trend about ‘being Chinese’",
          date: "2026",
          caption:
            "BBC podcast cut that quotes the Fight Club swap and interviews Gen Z take-up.",
          thumbnail: "/you-met-me-at-a-very-chinese-time/yt-bbc.jpg",
          duration: "10:00+",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Summer 2025 moved the line onto Instagram macros (e.g. @the_soundgeist, 3 Jul) and illustrated X posts. October was the TikTok food-clip breakout: @mylesmarchant’s dumpling video (10 Oct, ~1.2M+ views / ~200k likes) and @gabisupernova’s Chinese-food follow-up (14 Oct, ~500k+ views) put the caption into mass circulation.{{1}}{{9}}{{10}}",
        "Late October brought reply variants such as “chinese mustard 67.” Into early 2026 the phrase rode with Chinamaxxing / “becoming Chinese” lifestyle clips (hot water, slippers, Adidas “China” jacket) and celebrity nods (e.g. Jimmy O. Yang, Hasan Piker). Outlets from WIRED and ABC to AP framed it as soft-power humor and a stereotype minefield.{{1}}{{3}}{{4}}{{5}}{{11}}",
      ],
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "There is no deep lore. Use it when a photo or habit is China-coded and you want Fight Club solemnity for a nothing-burger reveal. Common moves: caption dumplings / hot water / slippers; reply under China news with the line alone; stretch the middle adjective (“chinese mustard 67”); or pair with sister lines like “u will turn Chinese tomorrow.”{{1}}{{2}}{{3}}",
        "Secondary coverage stresses that the meme is often about Western projection — China as symbol of infrastructure, order, or lifestyle envy — more than a report on Chinese life. Diaspora creators have described mixed feelings: welcome attention, wariness of flattened stereotypes.{{3}}{{4}}{{5}}{{11}}",
      ],
      list: [
        "Caption China-coded food / home rituals with the line",
        "Drop the sentence alone under China-related posts",
        "Insert nonsense mid-phrase (mustard 67, etc.)",
        "Pair with Chinamaxxing “day one” lifestyle clips",
        "Swap “in my life” ↔ “of my life” / add “turn Chinese tomorrow”",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{9}}"],
      list: [
        "5 Apr 2025 — @girl__virus posts the bare catchphrase on X{{1}}{{2}}",
        "3 Jul 2025 — Instagram macros (e.g. @the_soundgeist) circulate{{1}}",
        "5 Sep 2025 — @jinazugawa art overlay on X{{1}}{{6}}",
        "10 Oct 2025 — @mylesmarchant dumpling TikTok (~1.2M+ views){{1}}{{9}}",
        "14 Oct 2025 — @gabisupernova Chinese-food TikTok follow-up{{1}}{{10}}",
        "28 Oct 2025 — “chinese mustard 67” reply variant on X{{1}}{{7}}",
        "Jan–Feb 2026 — Chinamaxxing explainers (WIRED / ABC / CGTN / YouTube){{3}}{{4}}{{5}}",
        "Mar–Apr 2026 — Soft-power / diaspora-reaction coverage (e.g. AP){{11}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "You Met Me At A Very Chinese Time In My Life — meme explained",
      href: "https://meme.com/memes/you-met-me-at-a-very-chinese-time-in-my-life",
      date: "15 Oct 2026",
    },
    {
      id: 2,
      publisher: "X",
      title: "@girl__virus — you met me at a very chinese time in my life",
      href: "https://x.com/girl__virus/status/1908355965218628047",
      date: "5 Apr 2025",
    },
    {
      id: 3,
      publisher: "WIRED",
      title: "Why Everyone Is Suddenly in a ‘Very Chinese Time’ in Their Lives",
      href: "https://www.wired.com/story/made-in-china-chinese-time-of-my-life/",
      date: "16 Jan 2026",
    },
    {
      id: 4,
      publisher: "ABC News",
      title: "Why gen Zs on social media are having 'a very Chinese time in my life'",
      href: "https://www.abc.net.au/news/2026-02-08/you-met-me-at-a-chinese-time-of-my-life/106303830",
      date: "8 Feb 2026",
    },
    {
      id: 5,
      publisher: "CGTN",
      title: "Warm water, house slippers and a viral 'Chinese time' moment",
      href: "https://news.cgtn.com/news/2026-01-23/Warm-water-house-slippers-and-a-viral-Chinese-time-moment-1K9lusxDdjq/p.html",
      date: "23 Jan 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@jinazugawa — art overlay",
      href: "https://x.com/jinazugawa/status/1964101072261419434",
      date: "5 Sep 2025",
    },
    {
      id: 7,
      publisher: "X",
      title: "@iiwolfson — chinese mustard 67 variant",
      href: "https://x.com/iiwolfson/status/1983160195028259312",
      date: "28 Oct 2025",
    },
    {
      id: 8,
      publisher: "YouTube",
      title: "Chinamaxxing takes over social media",
      href: "https://www.youtube.com/watch?v=CCM7qF0mWlY",
      date: "2026",
    },
    {
      id: 9,
      publisher: "TikTok",
      title: "@mylesmarchant — dumpling caption breakout",
      href: "https://www.tiktok.com/@mylesmarchant/video/7559617845089373462",
      date: "10 Oct 2025",
    },
    {
      id: 10,
      publisher: "TikTok",
      title: "@gabisupernova — Chinese-food caption follow-up",
      href: "https://www.tiktok.com/@gabisupernova/video/7561196122744622391",
      date: "14 Oct 2025",
    },
    {
      id: 11,
      publisher: "AP News",
      title: "The 'becoming Chinese' meme highlights China's growing soft power",
      href: "https://apnews.com/article/china-soft-power-rise-c6aede1c6eb66a776a7ae3b5477e2661",
      date: "15 Apr 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Fight Club © 20th Century Fox / respective rights holders · Screenshots © respective platforms / posters · Not a statement about Chinese people or politics",
} satisfies WikiArticleData;
