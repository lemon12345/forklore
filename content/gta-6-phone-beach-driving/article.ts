import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const gta6PhoneBeachDrivingArticle = {
  title: "GTA 6 Phone Beach Driving",
  description:
    "GTA 6 Phone Beach Driving meme: the greenscreen format of holding a phone while driving over beach NPCs—doomscroll punchlines on Jason’s in-game screen.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[GTA 6 Phone Beach Driving]] (also [[Holding Phone While Driving Over People On the Beach]], [[GTA 6 phone greenscreen]]) is an exploitable video format from [[Grand Theft Auto VI]]: the player steers along a crowded beach while staring at an in-game smartphone, mowing down pedestrians without looking up.{{1}}{{2}}",
    "X user [[@Dark_SpaceYT]] posted the source clip on 18 Nov 2026 (“There has never been anything like this”). Greenscreen templates from [[@Nimorp]] and [[@MurdoinkGS]] let editors replace the phone screen with podcasts, games, or drama clips—the distraction is the joke.{{1}}{{3}}",
  ],
  infobox: {
    title: "GTA 6 Phone Beach Driving",
    image: {
      src: "/gta-6-phone-beach-driving/cover.jpg",
      alt: "GTA 6 holding phone while driving over beach people meme",
      caption:
        "Beach drive + phone POV — greenscreen the screen, keep the carnage.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Holding Phone While Driving Over People On the Beach",
          "GTA 6 phone greenscreen",
          "Doomscrolling while driving GTA 6",
        ],
      },
      {
        label: "Type",
        value: "Exploitable / greenscreen video",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "X @Dark_SpaceYT · 18 Nov 2026",
        href: "https://x.com/Dark_SpaceYT/status/2123040015898865964",
      },
      {
        label: "Template",
        value: "@MurdoinkGS phone greenscreen (~76k likes)",
        href: "https://x.com/MurdoinkGS/status/2123239831895503330",
      },
      {
        label: "Peak wave",
        value: "18–20 Nov 2026 (launch week)",
      },
      {
        label: "Related",
        value: [
          "Lucia Will Appreciate This",
          "Dude Those Animals Are So Funny",
          "GTA phone UI memes",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "TikTok", "Instagram"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Dark comedy is the engine: whatever plays on the phone has to feel worth ignoring a sidewalk of beach NPCs. Editors leave the driving plate alone and only composite new footage onto the handset rectangle.{{1}}{{2}}",
        "The bit also riffs on a real GTA VI systems joke—using the phone while driving blocks more of the view and wrecks handling, so “doomscrolling Jason” is a featured failure mode, not a glitch. Dexerto and players clocked the mechanic during launch week.{{3}}{{1}}",
      ],
      image: {
        src: "/gta-6-phone-beach-driving/cover.jpg",
        alt: "GTA 6 phone beach driving format overview",
        caption:
          "Template: tracked phone rectangle + unchanged beach massacre plate.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 18 Nov 2026—GTA VI’s early-time-zone launch day—@Dark_SpaceYT uploaded beach footage of a character scrolling the in-game phone while running people over. The caption framed it as peak sandbox absurdity.{{1}}{{2}}",
        "Hours later @Nimorp replied with a green phone screen (~600 likes). @MurdoinkGS followed with a longer tracked greenscreen pack that blasted past ~76k likes / 5.6k reposts, becoming the default editor kit.{{1}}{{3}}",
      ],
      link: {
        href: "https://x.com/MurdoinkGS/status/2123239831895503330",
        label: "X — @MurdoinkGS phone greenscreen template →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Source clip, greenscreen kits, and high-engagement phone swaps from launch week.",
      ],
      gallery: [
        {
          id: "dark-space",
          href: "https://x.com/Dark_SpaceYT/status/2123040015898865964",
          kind: "video",
          handle: "@Dark_SpaceYT",
          author: "X",
          text: "There has never been anything like this",
          date: "18 Nov 2026",
          caption:
            "Source GTA VI beach drive — phone up, pedestrians down.",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
        },
        {
          id: "nimorp",
          href: "https://x.com/Nimorp/status/2123133780315750767",
          kind: "video",
          handle: "@Nimorp",
          author: "X",
          text: "First phone greenscreen reply",
          date: "18 Nov 2026",
          caption:
            "Early green-rectangle reply that unlocked the exploitable lane.",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
        },
        {
          id: "murdoink",
          href: "https://x.com/MurdoinkGS/status/2123239831895503330",
          kind: "video",
          handle: "@MurdoinkGS",
          author: "X",
          text: "Phone GS + tracking pattern",
          date: "18–19 Nov 2026",
          caption:
            "Longer tracked greenscreen pack (~76k likes) — default editor base.",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
          views: "76K+ likes",
        },
        {
          id: "mckean",
          href: "https://x.com/McKean_enjoyer/status/2123215915177116102",
          kind: "video",
          handle: "@McKean_enjoyer",
          author: "X",
          text: "Abigail Shapiro on the phone",
          date: "18 Nov 2026",
          caption:
            "Early content swap — commentary clip as the “worth it?” distraction (~7.6k likes).",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
        },
        {
          id: "pokemon",
          href: "https://x.com/deadrosesaf/status/2123471586921759015",
          kind: "video",
          handle: "@deadrosesaf",
          author: "X",
          text: "Pokémon GO on the phone",
          date: "19 Nov 2026",
          caption:
            "Mobile-game doomscroll variant (~6.7k likes).",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
        },
        {
          id: "animals",
          href: "https://x.com/SLBysusparidas/status/2123574037779534028",
          kind: "video",
          handle: "@SLBysusparidas",
          author: "X",
          text: "Dude Those Animals Are So Funny mashup",
          date: "19 Nov 2026",
          caption:
            "Crossover with the animals-are-so-funny reaction (~29k likes).",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
          views: "29K+ likes",
        },
        {
          id: "rstycg",
          href: "https://x.com/RSTYCG/status/2123668538556649981",
          kind: "video",
          handle: "@RSTYCG",
          author: "X",
          text: "Hila Klein video on the phone",
          date: "20 Nov 2026",
          caption:
            "Hila Klein drama clip as the distraction (~5.7k likes in under a day).",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
          views: "5.7K+ likes",
        },
        {
          id: "dexerto",
          href: "https://www.dexerto.com/gta/gta-6s-new-dangerous-driving-and-doomscrolling-feature-spawns-hilarious-memes-3429850/",
          kind: "image",
          source: "web",
          handle: "Dexerto",
          author: "Coverage",
          text: "Doomscrolling while driving feature",
          date: "19 Nov 2026",
          caption:
            "Press writeup on phone-blocked view, worse handling, and the meme wave.",
          thumbnail: "/gta-6-phone-beach-driving/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Launch-week X filled with phone swaps: celebrity drama, anime, crypto tickers, Uma Musume, Palworld promo clips. Dexerto framed the wider “dangerous driving + doomscrolling” feature as the systems joke behind the memes.{{3}}{{1}}",
        "The format sits next to other GTA VI day-one exploitables such as [[Lucia Will Appreciate This]] text prompts—UI authenticity plus one editable surface.{{2}}",
      ],
      link: {
        href: "https://www.dexerto.com/gta/gta-6s-new-dangerous-driving-and-doomscrolling-feature-spawns-hilarious-memes-3429850/",
        label: "Dexerto — GTA 6 doomscrolling while driving →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Grab a Murdoink/Nimorp greenscreen, track-composite your clip onto the phone, leave the beach plate untouched. Pick content that feels comically unworthy of mass NPC casualties.{{1}}{{2}}",
        "In-game violence is fictional sandbox humor—don’t stage real-world dangerous driving. Caption often just implies “this is what I’m watching.”{{3}}",
      ],
      list: [
        "Podcast / drama clips on the phone rectangle",
        "Mobile games (Pokémon GO, etc.) as the distraction",
        "Meme crossovers (animals-are-so-funny, anime)",
        "Brand / game promo phone inserts",
        "Longer tracked templates for smoother composites",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{3}}"],
      list: [
        "18 Nov 2026 — @Dark_SpaceYT source beach + phone clip{{1}}",
        "18 Nov 2026 — @Nimorp first greenscreen; @MurdoinkGS longer pack{{1}}",
        "18–19 Nov 2026 — Shapiro / Pokémon GO / animals mashup edits{{1}}",
        "19 Nov 2026 — Dexerto and gaming press cover doomscroll driving{{3}}",
        "20 Nov 2026 — More drama-phone swaps; KYM documents the format{{1}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Know Your Meme",
      title: "Holding Phone While Driving Over People On the Beach (GTA 6)",
      href: "https://knowyourmeme.com/memes/holding-phone-while-driving-over-people-on-the-beach-gta-6",
      date: "20 Nov 2026",
    },
    {
      id: 2,
      publisher: "X",
      title: "@Dark_SpaceYT — source beach phone clip",
      href: "https://x.com/Dark_SpaceYT/status/2123040015898865964",
      date: "18 Nov 2026",
    },
    {
      id: 3,
      publisher: "Dexerto",
      title: "GTA 6’s dangerous driving and doomscrolling feature spawns memes",
      href: "https://www.dexerto.com/gta/gta-6s-new-dangerous-driving-and-doomscrolling-feature-spawns-hilarious-memes-3429850/",
      date: "19 Nov 2026",
    },
    {
      id: 4,
      publisher: "X",
      title: "@MurdoinkGS — phone greenscreen + tracking",
      href: "https://x.com/MurdoinkGS/status/2123239831895503330",
      date: "18 Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · In-game violence only · Not affiliated with Rockstar Games or the posters named · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
