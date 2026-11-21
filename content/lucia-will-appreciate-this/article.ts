import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const luciaWillAppreciateThisArticle = {
  title: "Lucia Will Appreciate This",
  description:
    "Lucia Will Appreciate This: GTA 6 gift and chore pop-ups became X edits after early-TZ screenshots, then Zuckerberg's Priscilla version went wide.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Lucia Will Appreciate This]] (also [[GTA 6 text notification edits]]) is a 2026 exploitable format built from [[Grand Theft Auto VI]] mission pop-ups that tell [[Jason]] which gift or chore will deepen his bond with girlfriend [[Lucia]]—groceries, flowers, house fixes, and more. Early-time-zone screenshots hit X on 18 Nov 2026, days around the game’s staggered unlock, and the beige UI promptly became a template for punchline swaps.{{1}}{{2}}",
    "Discourse ignited when @ExoGhost called the flower run “woke slop”; a rebuttal framing it as “just getting a gift for your girlfriend” cleared ~145k likes the same day. Editors kept the tagline and swapped the task line—shopping bits, therapy-speak parodies, relationship rules—until Mark Zuckerberg’s @finkd post (“Priscilla will appreciate this” / “Wait which version did I get?”, ~33k likes, Musk reacted) pushed the format past gaming timelines.{{2}}{{3}}{{9}}",
  ],
  infobox: {
    title: "Lucia Will Appreciate This",
    image: {
      src: "/lucia-will-appreciate-this/cover.jpg",
      alt: "GTA 6 mission pop-up reading Lucia will appreciate this",
      caption:
        "In-game beige prompt: complete the named errand and Lucia will appreciate this.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "GTA 6 text notification edits",
          "Lucia mission pop-up",
          "Priscilla will appreciate this (Zuckerberg edit)",
        ],
      },
      {
        label: "Type",
        value: "Exploitable / screenshot edit / format",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "GTA VI in-game UI · X screenshots (18 Nov 2026)",
      },
      {
        label: "Peak wave",
        value: "18–20 Nov 2026 (X / Instagram)",
      },
      {
        label: "Related",
        value: [
          "GTA 6 Phone Beach Driving",
          "Grand Theft Auto VI launch memes",
          "Relationship / chore discourse edits",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "Instagram", "TikTok"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "In early GTA VI play, Jason runs domestic errands while Lucia awaits release from prison overcrowding. Completing a named task triggers a sincere UI line: Lucia will appreciate this. The meme keeps that chrome—icon, box, tagline—and replaces the instruction with a gag, so the joke is the gap between soft domestic tone and whatever absurd errand the edit invents.{{1}}{{5}}",
        "Two tones dominate. One mocks “woke” discourse by stuffing therapy-speak or progressive slogans into the chore slot; the other plays the premise straight, treating a grocery or flower run as an unreasonable demand on Jason’s time (or on a $70 game). Celebrity personalization—swapping Lucia for a real partner—arrived within two days via Zuckerberg.{{6}}{{8}}{{9}}",
      ],
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Grand Theft Auto VI unlocked worldwide on 19 Nov 2026; New Zealand and other early time zones had access on the 18th, when Jason–Lucia mission screenshots began circulating on X. Flower bouquets, grocery runs, and house fixes read as relationship-building beats rather than classic heist setups—novel enough to spark culture-war framing inside the franchise’s usual chaos.{{1}}{{5}}",
        "On 18 Nov, @ExoGhost posted a flower-mission screenshot as “woke slop… made by women” (~2.4k likes). Later that day @wormcancer’s quote-post rebuttal—“‘such woke slop’ and it’s just getting a gift for your girlfriend”—cleared ~145k likes and broadcast the argument. The same afternoon, template edits such as @snow_frog8’s shopping swap proved the pop-up was easy to forge.{{2}}{{3}}",
      ],
      link: {
        href: "https://x.com/ExoGhost/status/2123042449006182538",
        label: "X — @ExoGhost flower-mission “woke slop” post →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Discourse spark, rebuttal, early template edits, Instagram chores bit, therapy-speak parody, and the Zuckerberg personalization.",
      ],
      gallery: [
        {
          id: "x-exoghost",
          href: "https://x.com/ExoGhost/status/2123042449006182538",
          kind: "image",
          handle: "@ExoGhost",
          author: "X",
          text: "GTA 6 flower mission — “woke slop”",
          date: "18 Nov 2026",
          caption:
            "Flower-buying screenshot framed as culture-war proof; early catalyst for the discourse.",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
        },
        {
          id: "x-wormcancer",
          href: "https://x.com/wormcancer/status/2123055977993761053",
          kind: "image",
          handle: "@wormcancer",
          author: "X",
          text: "“just getting a gift for your girlfriend”",
          date: "18 Nov 2026",
          caption:
            "Rebuttal quote-post (~145k likes) that widened the argument beyond gaming circles.",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
          views: "~145K likes",
        },
        {
          id: "x-snow-frog8",
          href: "https://x.com/snow_frog8/status/2123235897164620199",
          kind: "image",
          handle: "@snow_frog8",
          author: "X",
          text: "Ditch your friends and take Lucia shopping instead",
          date: "18 Nov 2026",
          caption:
            "Early template edit (~69k likes): keep the UI, swap the chore line.",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
          views: "~69K likes",
        },
        {
          id: "ig-soda",
          href: "https://www.instagram.com/p/Df6EmoAJI9p/",
          kind: "image",
          source: "web",
          handle: "soda",
          author: "Instagram",
          text: "paid $100 to do chores",
          date: "18 Nov 2026",
          caption:
            "Unedited (or near-unedited) screenshot with chores-for-$100 caption (~29k likes).",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
        },
        {
          id: "x-uncledoomer",
          href: "https://x.com/uncledoomer/status/2123439878880755980",
          kind: "image",
          handle: "@uncledoomer",
          author: "X",
          text: "Unpack your trauma and hold space…",
          date: "19 Nov 2026",
          caption:
            "Therapy-speak chore parody—one of the loudest “woke prompt” edits.",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
        },
        {
          id: "x-realedfriendly",
          href: "https://x.com/RealEdFriendly/status/2123549804458590539",
          kind: "image",
          handle: "@RealEdFriendly",
          author: "X",
          text: "No place for “casual racism with the boys”…",
          date: "19 Nov 2026",
          caption:
            "Relationship-rules edit that keeps the pop-up chrome and swaps the errand for a lecture (~32k likes).",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
          views: "~32K likes",
        },
        {
          id: "x-finkd",
          href: "https://x.com/finkd/status/2123829559711650060",
          kind: "image",
          handle: "@finkd",
          author: "Mark Zuckerberg",
          text: "Priscilla will appreciate this",
          date: "20 Nov 2026",
          caption:
            "Zuckerberg personalization with “Wait which version did I get?” (~33k likes; Musk reacted).",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
          views: "~33K likes",
        },
        {
          id: "ig-uncrustamemes",
          href: "https://www.instagram.com/p/Df7x0HFhtiC/",
          kind: "image",
          source: "web",
          handle: "uncrustamemes",
          author: "Instagram",
          text: "I'm good bro · grocery prompt",
          date: "19 Nov 2026",
          caption:
            "Grocery-run screenshot paired with an “I’m good bro” refusal caption (~57k likes).",
          thumbnail: "/lucia-will-appreciate-this/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Within hours of the flower-mission fight, @snow_frog8’s shopping edit and soda’s “paid $100 to do chores” Instagram post proved the box traveled as both discourse bait and shoppable joke. 19 Nov global launch day stacked more political and refusal edits (@uncledoomer, @RealEdFriendly, uncrustamemes).{{3}}{{4}}{{6}}",
        "On 20 Nov, Zuckerberg’s @finkd grocery screenshot swapped Lucia for Priscilla Chan and asked which version of the game he bought. The post’s celebrity reach—and a laughing reaction from Elon Musk—marked the format’s jump from launch-day gaming chatter to mainstream timeline fodder, alongside sibling GTA VI exploitables such as [[GTA 6 Phone Beach Driving]].{{9}}{{1}}",
      ],
      link: {
        href: "https://x.com/finkd/status/2123829559711650060",
        label: "X — @finkd “Priscilla will appreciate this” →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default grammar: recreate or crop the beige mission UI, keep “Lucia will appreciate this” (or a partner-name swap), and rewrite the task line as the punchline. Tone ranges from soft relationship satire to culture-war parody.{{5}}{{6}}",
        "Works as a quote-post screenshot, Instagram still, or captioned refusal (“I’m good bro”). Celebrity and brand versions personalize the appreciator; discourse versions exaggerate the chore into therapy or etiquette homework.{{8}}{{9}}",
      ],
      list: [
        "Straight screenshots of groceries / flowers / house fixes",
        "Task-line swaps (shopping, trauma unpacking, relationship rules)",
        "Partner-name personalizations (Priscilla, etc.)",
        "Refusal captions treating chores as the whole game",
        "Quote-posts in GTA VI launch discourse threads",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{9}}"],
      list: [
        "18 Nov 2026 — Early-TZ GTA VI unlock; Jason–Lucia mission screenshots hit X{{1}}",
        "18 Nov 2026 — @ExoGhost “woke slop” flower post; @wormcancer rebuttal (~145k likes){{2}}",
        "18 Nov 2026 — @snow_frog8 shopping edit; soda “paid $100 to do chores”{{3}}{{4}}",
        "19 Nov 2026 — Global launch; @uncledoomer / @RealEdFriendly / uncrustamemes edits{{6}}{{8}}",
        "20 Nov 2026 — @finkd “Priscilla will appreciate this” (~33k likes; Musk reacts){{9}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Know Your Meme",
      title: "Lucia Will Appreciate This",
      href: "https://knowyourmeme.com/memes/lucia-will-appreciate-this",
      date: "20 Nov 2026",
    },
    {
      id: 2,
      publisher: "X",
      title: "@ExoGhost — flower mission “woke slop” post",
      href: "https://x.com/ExoGhost/status/2123042449006182538",
      date: "18 Nov 2026",
    },
    {
      id: 3,
      publisher: "X",
      title: "@wormcancer — gift-for-girlfriend rebuttal",
      href: "https://x.com/wormcancer/status/2123055977993761053",
      date: "18 Nov 2026",
    },
    {
      id: 4,
      publisher: "X",
      title: "@snow_frog8 — take Lucia shopping edit",
      href: "https://x.com/snow_frog8/status/2123235897164620199",
      date: "18 Nov 2026",
    },
    {
      id: 5,
      publisher: "Instagram",
      title: "soda — paid $100 to do chores",
      href: "https://www.instagram.com/p/Df6EmoAJI9p/",
      date: "18 Nov 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@uncledoomer — unpack your trauma edit",
      href: "https://x.com/uncledoomer/status/2123439878880755980",
      date: "19 Nov 2026",
    },
    {
      id: 7,
      publisher: "Instagram",
      title: "uncrustamemes — I'm good bro grocery prompt",
      href: "https://www.instagram.com/p/Df7x0HFhtiC/",
      date: "19 Nov 2026",
    },
    {
      id: 8,
      publisher: "X",
      title: "@RealEdFriendly — healthy relationship edit",
      href: "https://x.com/RealEdFriendly/status/2123549804458590539",
      date: "19 Nov 2026",
    },
    {
      id: 9,
      publisher: "X",
      title: "@finkd — Priscilla will appreciate this",
      href: "https://x.com/finkd/status/2123829559711650060",
      date: "20 Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with Rockstar Games, Take-Two, Meta, or the posters named above · Screenshots © respective platforms / posters / rights holders",
} as const satisfies WikiArticleData;
