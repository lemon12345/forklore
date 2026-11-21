import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const heTrynaIgnoreItArticle = {
  title: "He Tryna Ignore It",
  description:
    "Closed-eye dog by a stove fire (or LeBron courtside with Jimmy Goldstein) captioned \"he tryna ignore it\": the reaction for pretending not to see drama.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[He Tryna Ignore It]] is a 2026 catchphrase and reaction meme. It is most often paired with a still of a light-colored dog sitting with its eyes closed next to a stove fire, captioned “he tryna ignore it” plus a long run of 😭 emojis, or with a courtside screenshot of NBA superfan [[Jimmy Goldstein]] watching [[LeBron James]] while a top comment repeats the same line.{{1}}{{2}}",
    "The joke is willful non-reaction: the subject looks pointedly calm about something that is obviously hard to miss — a flame, an awkward stare, a spoiler, a crush. The dog clip was captioned on TikTok in January 2026; a separate LeBron branch went wide on Instagram in late April 2026; X macros then pushed the dog template into mass circulation in late May 2026.{{1}}{{2}}",
  ],
  infobox: {
    title: "He Tryna Ignore It",
    image: {
      src: "/he-tryna-ignore-it/dog-reaction.jpeg",
      alt: "Dog with eyes closed next to a fire, captioned he tryna ignore it with crying emojis",
      caption:
        "Canonical dog reaction still: closed eyes beside a stove fire, plus the catchphrase and 😭 stack.",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Dog ignoring fire", "Tryna Ignore It"],
      },
      {
        label: "Type",
        value: "Catchphrase / reaction image / image macro",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "TikTok (@jaygupski caption) · Instagram raw clip",
      },
      {
        label: "Peak wave",
        value: "May 2026 (X)",
      },
      {
        label: "Related",
        value: [
          "Jimmy Goldstein / LeBron screenshots",
          "Animal reaction memes",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram", "X", "Reddit", "Tenor"],
      },
      {
        label: "Captioned upload",
        value: "@jaygupski · 3 Jan 2026",
        href: "https://www.tiktok.com/@jaygupski/video/7591185663387503902",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "He Tryna Ignore It works as a portable caption more than a single fixed joke. Posters name the thing being avoided in a top line (“having a crush,” a spoiler, a Google suggestion), then drop the dog still — or the Goldstein/LeBron comment screenshot — as the punchline. The stacked 😭 emojis, often stretched to absurd length, undercut the pretended calm.{{1}}{{3}}",
        "Tone is usually self-mocking: the poster admits they are bothered but choosing to look away. Sources describe the dog as sitting by a stove fire while food cooks; the cropped still that circulated as a reaction image keeps the closed eyes, the flame, and the black caption bar.{{1}}{{2}}",
      ],
      image: {
        src: "/he-tryna-ignore-it/infobox.jpg",
        alt: "He Tryna Ignore It dog reaction cover image",
        caption:
          "Cover-style crop of the dog reaction template used across encyclopedia writeups.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "An early caption-free upload of the dog clip appeared on Instagram via user smolfrenz on December 10, 2025; multiple writeups treat that post as a reupload, and the original recorder remains unclear.{{1}}{{2}}",
        "On January 3, 2026, TikToker @jaygupski posted the clip with the bottom caption “He tryna ignore it” followed by dozens of 😭 emojis — the earliest widely cited captioned version. That post remained modest for months (on the order of a few hundred likes over roughly four months in contemporary tallies).{{1}}{{2}}",
        "Cropped screenshots of the captioned frame then moved independently onto Reddit, Tenor, and other image hosts through spring 2026, turning the still into a standalone reaction asset before the late-May X spike.{{1}}{{3}}",
      ],
      link: {
        href: "https://meme.com/memes/he-tryna-ignore-it",
        label: "meme.com origin & spread summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin TikTok, the LeBron / Goldstein branch, and distinct May 2026 X caption macros — one card per variant.",
      ],
      gallery: [
        {
          id: "jaygupski-tiktok",
          href: "https://www.tiktok.com/@jaygupski/video/7591185663387503902",
          kind: "video",
          source: "web",
          handle: "@jaygupski",
          author: "Source upload",
          text: "He tryna ignore it 😭…",
          date: "3 Jan 2026",
          caption:
            "Captioned origin TikTok — dog by the stove fire with the stacked 😭 line.",
          thumbnail: "/he-tryna-ignore-it/dog-reaction.jpeg",
          duration: "0:10+",
          views: "~300 likes early",
        },
        {
          id: "goldstein-lebron",
          href: "https://www.instagram.com/theunfunniestguyyouknow/",
          kind: "image",
          source: "web",
          handle: "TikTok comment UI",
          author: "LeBron / Goldstein branch",
          text: "he tryna ignore it 😭😭😭",
          date: "29 Apr 2026 (IG share)",
          caption:
            "Courtside frame of Jimmy Goldstein behind LeBron James; top comment applies the catchphrase to James’s non-reaction.",
          thumbnail: "/he-tryna-ignore-it/ex-820.jpg",
          views: "98.1K+ likes on comment",
        },
        {
          id: "rtzvv-crush",
          href: "https://x.com/rtzvv/status/2058650970112880975",
          kind: "image",
          handle: "@rtzvv",
          author: "X",
          text: "having a crush",
          date: "24 May 2026",
          caption:
            "Dog still + “having a crush” — one of the May wave’s most quoted caption swaps (~30k likes).",
          thumbnail: "/he-tryna-ignore-it/x-rtzvv-crush.jpg",
          views: "300K+",
        },
        {
          id: "google-death",
          href: "https://x.com/PJT_KIN/status/2058808999584174472",
          kind: "image",
          handle: "@PJT_KIN",
          author: "X macro",
          text: "When I do a Google search for a character I'm hyped about and it suggests 'death'",
          date: "25 May 2026",
          caption:
            "Spoiler-anxiety macro — largest single-day X hit for the format (~273k likes / ~2.2M views in tallies).",
          thumbnail: "/he-tryna-ignore-it/x-pjt-death.jpg",
          views: "2.2M+",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "lebron-branch",
      title: "LeBron / Goldstein branch",
      paragraphs: [
        "On April 29, 2026, Instagram user @theunfunniestguyyouknow shared a screenshot of a TikTok showing Jimmy Goldstein courtside behind LeBron James. The visible top comment read “He tryna ignore it,” implying James was pretending not to notice Goldstein’s intense stare; another popular reply joked about a sinister “deal.” That Instagram share passed roughly 25,000 likes within a month in contemporary reporting.{{1}}{{2}}",
        "This branch reused the catchphrase on a human sports clip rather than the dog still, and helped the line travel beyond animal-reaction circles before the dog macros dominated X timelines later in May.{{1}}",
      ],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "After spring recirculation on Reddit and GIF/sticker hosts, X became the main amplifier. On May 23, 2026, @rtzvv reposted the Goldstein-linked meme with the caption repeated in the post (~18,000 likes in three days in May tallies). The next day the same account posted the dog still under “having a crush” (~31,000 likes).{{1}}",
        "On May 25, 2026, @PJT_KIN’s macro about a Google suggestion of “death” for a hyped character became the largest documented single spike (~245,000 likes and ~31,000 reposts within a day). On May 26, Redditor KaidoPklevel posted a recreation to /r/me_irl (hundreds of upvotes inside a day).{{1}}{{2}}",
        "Through mid-2026 the dog frame also spawned redraws, edits, and character swaps that kept the black caption bar and emoji stack while changing the subject.{{1}}{{3}}",
      ],
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Usage is straightforward: label an awkward, scary, or hard-to-miss stimulus, then present the dog (or the LeBron non-reaction) as the stand-in for yourself. Documented setups include crush anxiety, spoiler avoidance, bank-balance dread, and “focus” jokes where the distraction is obvious.{{1}}{{2}}{{3}}",
        "“Tryna” is slang for “trying to.” The catchphrase does not require the subject to succeed — the humor is that the ignore attempt is visibly strained.{{3}}",
      ],
      list: [
        "Dog + stove-fire still with original caption / emoji stack",
        "Top-text situation + dog still (crush, spoiler, Google death, etc.)",
        "Jimmy Goldstein / LeBron comment screenshot as alternate reaction",
        "Redraws and character swaps keeping the caption bar",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Key documented beats:{{1}}{{2}}"],
      list: [
        "10 Dec 2025 — Instagram smolfrenz uploads caption-free dog clip (likely a reupload; original unclear){{1}}",
        "3 Jan 2026 — TikTok @jaygupski posts captioned “He tryna ignore it 😭…” version{{1}}{{2}}",
        "Spring 2026 — Cropped still circulates on Reddit / Tenor{{1}}",
        "29 Apr 2026 — Instagram @theunfunniestguyyouknow shares Goldstein / LeBron comment screenshot{{1}}",
        "23–24 May 2026 — @rtzvv X posts (caption repeat; “having a crush”){{1}}",
        "25 May 2026 — @PJT_KIN Google-“death” macro (~245k likes){{1}}",
        "26 May 2026 — /r/me_irl recreation by KaidoPklevel{{1}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "He Tryna Ignore It — dog & LeBron origin and spread",
      href: "https://meme.com/memes/he-tryna-ignore-it",
      date: "22 Jun 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "He Tryna Ignore It — meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/he-tryna-ignore-it/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "Meming Wiki",
      title: "He Tryna Ignore It",
      href: "https://en.meming.world/wiki/He_Tryna_Ignore_It",
      date: "2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@jaygupski — He tryna ignore it (captioned dog clip)",
      href: "https://www.tiktok.com/@jaygupski/video/7591185663387503902",
      date: "3 Jan 2026",
    },
    {
      id: 5,
      publisher: "Instagram",
      title: "@theunfunniestguyyouknow — Goldstein / LeBron screenshot share",
      href: "https://www.instagram.com/theunfunniestguyyouknow/",
      date: "29 Apr 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@PJT_KIN — Google-death spoiler macro",
      href: "https://x.com/PJT_KIN/status/2058808999584174472",
      date: "25 May 2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@rtzvv — having a crush dog macro",
      href: "https://x.com/rtzvv/status/2058650970112880975",
      date: "24 May 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
