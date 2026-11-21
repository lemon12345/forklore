import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const sensitiveYoungManArticle = {
  title: "Sensitive Young Man",
  description:
    "Sensitive Young Man is the sensitive young man slang meme—2024 X archetype for misunderstood outsiders, from heart-of-gold posts to Autumn Jude Law macros.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Sensitive Young Man]] (also [[sensitive young man with a heart of gold]], [[Sensitive Young Man Autumn]]) is a 2024 slang label and character archetype for a young man who feels spiritually deep, emotionally intense, and chronically misunderstood — often played straight as soft self-ID, often as irony aimed at [[Literally Me]] energy.{{1}}{{2}}",
    "Literary DNA points back to Werther in Goethe’s 1774 [[The Sorrows of Young Werther]]. Online, the phrase flickered on X in 2023, then locked as a meme kit after [[@dopaminedrank]]’s 25 Mar 2024 “being a sensitive young man with a heart of gold” workout bit (~2.5M views / ~62k likes in later tallies). Autumn 2024 added the seasonal snowclone [[Sensitive Young Man Autumn]].{{1}}{{3}}{{6}}",
  ],
  infobox: {
    title: "Sensitive Young Man",
    image: {
      src: "/sensitive-young-man/cover.jpg",
      alt: "Sensitive Young Man meme — brooding young Al Pacino still used as archetype face",
      caption:
        "Default face energy: a brooding young Pacino still standing in for the misunderstood outsider.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Sensitive young man with a heart of gold",
          "Sensitive Young Man Autumn",
          "SYM / heart-of-gold slang",
        ],
      },
      {
        label: "Type",
        value: "Character archetype / slang / caption",
      },
      { label: "Year", value: "2024 (phrase spark 2023)" },
      {
        label: "Origin",
        value: "X / Twitter · @dopaminedrank viral",
        href: "https://x.com/dopaminedrank",
      },
      {
        label: "Literary root",
        value: "The Sorrows of Young Werther (1774)",
        href: "https://tvtropes.org/pmwiki/pmwiki.php/Literature/TheSorrowsOfYoungWerther",
      },
      {
        label: "Peak wave",
        value: "Mar–Oct 2024 (X)",
      },
      {
        label: "Related",
        value: [
          "Literally Me Syndrome",
          "Hot Girl Summer (parody target)",
          "Silence, X / stoic pain macros",
        ],
      },
      {
        label: "Platforms",
        value: ["X (Twitter)", "Instagram", "TikTok"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The punchline is outsider self-mythology: a young man who skips “basic” status games for feelings, loyalty, melancholy, or spiritual vibes — then fails to fit the room he’s in. Caps range from proud (“heart of gold”) to roasting (“how it feels to be a sensitive young man” over a wounded-hawk still).{{1}}{{2}}",
        "Forklore treats it as a caption kit more than a single image: workout flexes, stoic-pain quote posts, [[Literally Me]] face swaps (Pacino, film antiheroes), and seasonal “Autumn” stills of well-dressed actors looking pensively off-frame. Tone swings sincere ↔ ironic in the same thread.{{1}}{{4}}",
      ],
      image: {
        src: "/sensitive-young-man/meme-overview.jpg",
        alt: "Sensitive Young Man meme overview — Pacino archetype still",
        caption:
          "Archetype still energy that pairs with the slang the way Literally Me faces pair with outsider IDs.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Writers usually cite Goethe’s epistolary novel [[The Sorrows of Young Werther]] (1774) as the literary prototype: Werther’s unrequited love and social misfit spiral became shorthand for the emotional young man who can’t inhabit ordinary society. That trope long predates the meme slang; 2024 just gave it a portable caption.{{1}}{{6}}",
        "On 2 Jun 2023, X user [[@wittgenfine]] posted about “sensitive young man physiognomy” (~490 reposts / ~6,700 likes in year-later tallies). The breakout arrived 25 Mar 2024 when [[@dopaminedrank]] replied to a hanging-core workout clip with “being a sensitive young man with a heart of gold,” turning the phrase into a viral flex/irony stem (~2.5M views, ~5.6k reposts, ~62k likes in eight-month tallies).{{1}}{{3}}",
      ],
      link: {
        href: "https://mymemecards.com/meme-cards/sensitive-young-man/",
        label: "MyMemeCards — Sensitive Young Man card & timeline →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Hawk “it’s fine” caption, Verdun / Literally Me copypasta, Jude Law Autumn still, Pacino cover energy, and card explainer — one beat each.",
      ],
      gallery: [
        {
          id: "x-semletra-hawk",
          href: "https://x.com/theOGsemletra",
          kind: "image",
          handle: "@theOGsemletra",
          author: "X",
          text: "How it feels to be a sensitive young man.",
          date: "26 May 2024",
          caption:
            "Quote of @yearncel’s arrow-through-hawk “it’s fine” still — stoic pain as the sensitive-young-man feeling (~1.7M views on the quote).",
          thumbnail: "/sensitive-young-man/example-1.jpg",
          views: "1.7M views",
        },
        {
          id: "x-dystopia-copypasta",
          href: "https://x.com/DystopiaPro69",
          kind: "image",
          handle: "@DystopiaPro69",
          author: "X",
          text: "I’m an old soul. I’m a sensitive young man…",
          date: "24 Jun 2024",
          caption:
            "Verdun / Thermopylae / Boromir / Mordred / Judge Holden monologue over a balding Pepe still — Literally Me cosplay as self-roast (~160k views).",
          thumbnail: "/sensitive-young-man/example-2.jpg",
          views: "160K+ views",
        },
        {
          id: "x-oldstocky-autumn",
          href: "https://x.com/oldstocky",
          kind: "image",
          handle: "@oldstocky",
          author: "X",
          text: "Sensitive young man autumn",
          date: "8 Oct 2024",
          caption:
            "Jude Law café still under the Hot Girl Summer parody snowclone (~161k views; ~370 reposts / ~5.1k likes in month-later tallies).",
          thumbnail: "/sensitive-young-man/example-3.jpg",
          views: "161K views",
        },
        {
          id: "cover-pacino",
          href: "https://mymemecards.com/meme-cards/sensitive-young-man/",
          kind: "image",
          source: "web",
          handle: "Archetype still",
          author: "Cover face",
          text: "Sensitive Young Man (Pacino energy)",
          date: "2024",
          caption:
            "Young Pacino cigarette still used as the entry’s default “misunderstood outsider” face.",
          thumbnail: "/sensitive-young-man/cover.jpg",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/sensitive-young-man/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Sensitive Young Man card",
          date: "2 Oct 2026",
          caption:
            "Secondary card writeup summarizing the slang archetype, Werther root, and 2024 X wave.",
          thumbnail: "/sensitive-young-man/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Through spring–summer 2024 the phrase lived as X caption grammar. [[@theOGsemletra]] labeled Kavinsky’s “Nightcall” the “sensitive young man anthem” (8 May 2024; ~190 reposts / ~2.5k likes in later tallies) and later quote-posted the hawk still. On 11 Jun 2024, [[@Marcus_cel]] dropped a Silence, X variant that stacked emotional burden against physical flex (~4.9k reposts / ~53k likes).{{1}}{{4}}{{5}}",
        "June–October added copypasta monologues and seasonal branding. [[@DystopiaPro69]]’s 24 Jun “old soul / sensitive young man” Pepe post and October’s [[Sensitive Young Man Autumn]] wave (Jude Law café still via [[@oldstocky]], 8 Oct 2024) made the label a full aesthetic tag, not just a one-line reply.{{1}}{{2}}",
      ],
      link: {
        href: "https://x.com/oldstocky",
        label: "X — @oldstocky (Sensitive young man autumn) →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: “I’m (or he’s) too emotionally deep / loyal / melancholic for this room.” Pair the stem with a brooding film still, a stoic-pain animal macro, a workout clip, or a seasonal fashion photo. Sincere posters use it as soft self-myth; ironic posters use it to roast the same myth.{{1}}{{2}}",
        "Sibling snowclones stick “Autumn” (or other season/aesthetic tags) after the phrase the way Hot Girl Summer branded a vibe. Anthem posts name a song; Silence / “it’s fine” posts sell the wound-you-won’t-mention beat.{{1}}{{4}}",
      ],
      list: [
        "“Being a sensitive young man with a heart of gold” + flex / workout clip",
        "“How it feels to be a sensitive young man” + stoic-pain still",
        "Literally Me monologues naming film / myth antiheroes",
        "“Sensitive Young Man Autumn” + café / cigarette actor stills",
        "Anthem tagging (e.g. Kavinsky “Nightcall”)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "1774 — Goethe publishes The Sorrows of Young Werther (literary prototype){{6}}",
        "2 Jun 2023 — @wittgenfine “sensitive young man physiognomy” on X{{1}}{{3}}",
        "25 Mar 2024 — @dopaminedrank “heart of gold” workout reply goes viral{{1}}{{3}}",
        "8 May 2024 — @theOGsemletra calls “Nightcall” the sensitive young man anthem{{1}}{{4}}",
        "26 May 2024 — @theOGsemletra hawk “it’s fine” quote post{{4}}",
        "11 Jun 2024 — @Marcus_cel Silence, X sensitive-young-man variant{{5}}",
        "24 Jun 2024 — @DystopiaPro69 Verdun / Boromir copypasta{{2}}",
        "8 Oct 2024 — @oldstocky “Sensitive young man autumn” Jude Law still{{1}}{{2}}",
        "2 Oct 2026 — MyMemeCards secondary card writeup{{1}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "MyMemeCards",
      title: "Sensitive Young Man meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/sensitive-young-man/",
      date: "2 Oct 2026",
    },
    {
      id: 2,
      publisher: "X",
      title: "@oldstocky — Sensitive young man autumn (Jude Law)",
      href: "https://x.com/oldstocky",
      date: "8 Oct 2024",
    },
    {
      id: 3,
      publisher: "X",
      title: "@dopaminedrank — being a sensitive young man with a heart of gold",
      href: "https://x.com/dopaminedrank",
      date: "25 Mar 2024",
    },
    {
      id: 4,
      publisher: "X",
      title: "@theOGsemletra — anthem + how it feels hawk quote",
      href: "https://x.com/theOGsemletra",
      date: "May 2024",
    },
    {
      id: 5,
      publisher: "X",
      title: "@Marcus_cel — Silence, X sensitive young man variant",
      href: "https://x.com/Marcus_cel",
      date: "11 Jun 2024",
    },
    {
      id: 6,
      publisher: "TV Tropes",
      title: "Literature — The Sorrows of Young Werther",
      href: "https://tvtropes.org/pmwiki/pmwiki.php/Literature/TheSorrowsOfYoungWerther",
      date: "1774 (novel)",
    },
    {
      id: 7,
      publisher: "X",
      title: "@wittgenfine — sensitive young man physiognomy",
      href: "https://x.com/wittgenfine",
      date: "2 Jun 2023",
    },
    {
      id: 8,
      publisher: "X",
      title: "@DystopiaPro69 — old soul / sensitive young man copypasta",
      href: "https://x.com/DystopiaPro69",
      date: "24 Jun 2024",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with the cited posters, Goethe estates, or film rightsholders · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
