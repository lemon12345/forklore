import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const wholeHouseMadArticle = {
  title: "Whole House Mad",
  description:
    "Whole House Mad is the viral X meme of dogs fighting while siblings scrap in the living room—the chaos reaction for when everyone is angry at once.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Whole House Mad]] is a 2022 image-macro / reaction meme: a living-room still of dogs lunging at each other in the foreground while siblings appear to trade punches behind them, locked to the caption “whole house mad.” The joke is simultaneous chaos — nobody is calm, nothing is contained.{{1}}{{2}}",
    "X user [[@champagneislife]] posted the photo from his own house on 16 Oct 2022 (~171k likes / ~24k reposts in later tallies). It recirculated for years, then hardened into a reusable reaction asset around mid-2024 for fandom wars, sports arguments, TV finales, and any thread where the whole group chat is mad.{{1}}{{2}}",
  ],
  infobox: {
    title: "Whole House Mad",
    image: {
      src: "/whole-house-mad/cover.jpg",
      alt: "Whole House Mad meme — dogs fighting in foreground, siblings fighting in background",
      caption:
        "Canonical still: foreground dog scrap + background sibling scrap, one caption.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Whole house mad meme",
          "Dogs and siblings fighting",
          "Chaotic living-room reaction",
        ],
      },
      {
        label: "Type",
        value: "Image macro / reaction photo",
      },
      { label: "Year", value: "2022 (reaction wave 2024)" },
      {
        label: "Origin",
        value: "X @champagneislife · 16 Oct 2022",
        href: "https://x.com/champagneislife/status/1581846666629390337",
      },
      {
        label: "Peak waves",
        value: "Oct 2022 · mid-2024 reaction reuse",
      },
      {
        label: "Related",
        value: [
          "Household chaos reactions",
          "Fandom drama macros",
          "Labeled object-label edits",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "Instagram", "iFunny", "TikTok"],
      },
      {
        label: "Known for",
        value: "Everyone fighting at the same time",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Most reaction faces show one emotion. Whole House Mad shows a whole room failing at once: dogs mid-lunge, kids/siblings mid-scrap, no adult referee in frame. Drop it under a sports rivalry, a Discord meltdown, or a TV episode that sets every character off — the caption does the rest.{{1}}{{2}}",
        "Editors also turn it into an object-label template: tag the dogs and the background fighters as rival factions, ships, or timeline camps. The photo still reads as authentic household chaos rather than a staged stock setup, which is why the phrase stuck to the still.{{1}}{{2}}",
      ],
      image: {
        src: "/whole-house-mad/popcreep.jpg",
        alt: "Whole House Mad meme explainer still",
        caption:
          "Explainers sell it as multi-conflict chaos: dogs up front, people behind, zero calm.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 16 Oct 2022, @champagneislife posted a living-room photo on X: two dogs in a confrontation while three siblings look like they are exchanging punches in the background. Caption: “whole house mad.” The post went wide immediately and remained a durable share for years (~171,000 likes / ~24,000 reposts in two-year tallies cited by later writeups).{{1}}{{2}}{{3}}",
        "Unlike many macros that need a punchline rewrite, the original caption is the meme. Later posters either quote it verbatim (“it sounds like whole house mad”) or paste the still under a new scenario so the chaos maps onto their topic.{{3}}{{5}}",
      ],
      link: {
        href: "https://x.com/champagneislife/status/1581846666629390337",
        label: "X — @champagneislife origin post →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin status, mid-2024 reaction posts, TV nutshell use, and fandom edits — one card per beat.",
      ],
      gallery: [
        {
          id: "x-origin",
          href: "https://x.com/champagneislife/status/1581846666629390337",
          kind: "image",
          handle: "@champagneislife",
          author: "X origin",
          text: "whole house mad (origin photo)",
          date: "16 Oct 2022",
          caption:
            "Original living-room still + caption — dogs fighting, siblings fighting, one short line.",
          thumbnail: "/whole-house-mad/cover.jpg",
          views: "171K+ likes",
        },
        {
          id: "x-chuck",
          href: "https://x.com/chucktherapist/status/1784782732599464111",
          kind: "image",
          handle: "@chucktherapist",
          author: "X reaction",
          text: "it sounds like whole house mad",
          date: "29 Apr 2024",
          caption:
            "Audio / vibe → drop the still: classic mid-2024 reaction reuse of the captioned photo.",
          thumbnail: "/whole-house-mad/cover.jpg",
        },
        {
          id: "x-bear",
          href: "https://x.com/theEldestB0y/status/1809311007078297836",
          kind: "image",
          handle: "@theEldestB0y",
          author: "TV nutshell",
          text: "The Bear S3E3 in a nutshell",
          date: "5 Jul 2024",
          caption:
            "Episode-as-chaos mapping: drops the still on The Bear season 3 episode 3 (“Doors”) kitchen meltdown energy.",
          thumbnail: "/whole-house-mad/cover.jpg",
        },
        {
          id: "ig-jjk",
          href: "https://www.instagram.com/p/C948uWmNegu/",
          kind: "image",
          source: "web",
          handle: "@k4n_ji",
          author: "Instagram edit",
          text: "Jujutsu Kaisen panel edit",
          date: "26 Jul 2024",
          caption:
            "Manga-panel insert into the living-room chaos — labeled / fandom edit branch (~1.4k+ likes in early tallies).",
          thumbnail: "/whole-house-mad/cover.jpg",
        },
        {
          id: "popcreep",
          href: "https://popcreep.com/whole-house-mad-meme-meaning-and-origin/",
          kind: "image",
          source: "web",
          handle: "Pop Creep",
          author: "Explainer",
          text: "Meaning & origin writeup",
          date: "27 Jun 2026",
          caption:
            "Frames the photo as a portable “everyone is mad” reaction for fandoms and group drama.",
          thumbnail: "/whole-house-mad/popcreep.jpg",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/whole-house-mad/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Whole House Mad card entry",
          date: "2 Oct 2026",
          caption:
            "Secondary encyclopedia-style card summarizing meaning, origin date, and 2024 reaction wave.",
          thumbnail: "/whole-house-mad/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "After the 2022 spike, the still kept circulating as a standalone chaos photo. A clearer second wave hit in mid-2024: @chucktherapist’s “it sounds like whole house mad” quote-post (29 Apr), @theEldestB0y’s The Bear S3E3 nutshell (5 Jul), and Instagram fandom inserts. Sports pile-ons and Discord meltdowns used the same still as a default “everyone fighting” reaction.{{1}}{{2}}{{5}}{{7}}",
        "Because the composition already has two fight layers, it maps cleanly onto “two camps + a third mess” arguments — sports Twitter, anime timelines, group chats after one bad decision. The phrase itself also floats free of the photo when someone just types “whole house mad” under chaos audio or a loud room.{{1}}{{2}}",
      ],
      link: {
        href: "https://x.com/theEldestB0y/status/1809311007078297836",
        label: "X — The Bear S3E3 “whole house mad” nutshell →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Literal read: the entire household is angry. Online read: every faction in a discussion is fighting at the same time — no single villain, just total meltdown. Pair with a one-line setup (“The Bear S3E3,” “this timeline after the patch,” “family group chat”) or let the image stand alone.{{1}}{{2}}",
        "Variant moves: label the dogs vs. the background fighters; crop tighter on the dog lunge; or quote the caption without the photo when the vibe is already obvious.{{1}}",
      ],
      list: [
        "Reaction under fandom / sports / Discord pile-ons",
        "“This episode / this meeting in a nutshell” posts",
        "Object-label edits (tag each fighter as a camp)",
        "Caption-only: type “whole house mad” under chaos audio",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}"],
      list: [
        "16 Oct 2022 — @champagneislife posts living-room photo + “whole house mad”{{3}}",
        "2022–2023 — Continues as a shareable chaos still across X and repost hosts{{1}}",
        "29 Apr 2024 — @chucktherapist: “it sounds like whole house mad”{{5}}",
        "5 Jul 2024 — @theEldestB0y maps the still onto The Bear S3E3{{7}}",
        "26 Jul 2024 — @k4n_ji Instagram Jujutsu Kaisen panel edit{{4}}",
        "2026 — Secondary explainers (Pop Creep, card sites) lock meaning + origin date{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Pop Creep",
      title: "Whole House Mad Meme Meaning and Origin",
      href: "https://popcreep.com/whole-house-mad-meme-meaning-and-origin/",
      date: "27 Jun 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Whole House Mad meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/whole-house-mad/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "X",
      title: '@champagneislife — “whole house mad” origin',
      href: "https://x.com/champagneislife/status/1581846666629390337",
      date: "16 Oct 2022",
    },
    {
      id: 4,
      publisher: "Instagram",
      title: "@k4n_ji — Jujutsu Kaisen whole-house-mad edit",
      href: "https://www.instagram.com/p/C948uWmNegu/",
      date: "26 Jul 2024",
    },
    {
      id: 5,
      publisher: "X",
      title: '@chucktherapist — “it sounds like whole house mad”',
      href: "https://x.com/chucktherapist/status/1784782732599464111",
      date: "29 Apr 2024",
    },
    {
      id: 6,
      publisher: "KakaMeme",
      title: "Whole House Mad Meme Template",
      href: "https://www.kakameme.com/meme-library/whole-house-mad-88c149",
      date: "2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@theEldestB0y — The Bear S3E3 in a nutshell",
      href: "https://x.com/theEldestB0y/status/1809311007078297836",
      date: "5 Jul 2024",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Photo © original poster @champagneislife · Screenshots © respective platforms / posters · Not affiliated with depicted individuals",
} satisfies WikiArticleData;
