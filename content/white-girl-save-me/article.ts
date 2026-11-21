import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const whiteGirlSaveMeArticle = {
  title: "White Girl Save Me",
  description:
    "White girl save me / white girl music meme: the Aug 2023 X catchphrase that spawned save-me-[X] edits, stan Twitter macros, and ironic pop-soundtrack TikToks.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[White Girl Save Me]] (also [[Save Me White Girl]], [[white girl music meme]]) is a catchphrase and exploitable screenshot format that started as a short stack of X posts pleading “white girl… save me…” and “save me white girl.” Editors paste the same desperate cadence onto other nouns (“twink,” “$7 beverage,” “hyperfixation”) or pair the line with a photo of a white female celebrity, character, or pop star so the plea reads as devotion, irony, or both.{{1}}{{2}}",
    "The earliest documented screenshot of [[@dawgpleasee]]’s thread circulated on X in mid-August 2023; by late October–November the snowclone was racking up five-figure likes, Tumblr notes, and stan-Twitter caption culture. A parallel “white girl music” read — blasting mid-2000s / mainstream pop as emotional rescue fuel — kept the phrase alive in TikTok captions and song-comment jokes such as “Save me, Chappell Roan.”{{1}}{{3}}{{7}}",
  ],
  infobox: {
    title: "White Girl Save Me",
    image: {
      src: "/white-girl-save-me/cover.jpg",
      alt: "White Girl Save Me meme — stacked @dawgpleasee X posts pleading white girl save me",
      caption:
        "Signature origin stack: @dawgpleasee’s Yoshi-pfp posts cycling “save me white girl” / “white girl… save me..”",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Save Me White Girl",
          "White girl… save me…",
          "White girl music meme",
          "Save me [X] snowclone",
        ],
      },
      {
        label: "Type",
        value: "Catchphrase / exploitable / reaction caption",
      },
      { label: "Year", value: "2023 (ongoing music / stan reuse)" },
      {
        label: "Origin",
        value: "X · @dawgpleasee · Aug 2023",
        href: "https://x.com/dawgpleasee",
      },
      {
        label: "Peak wave",
        value: "Oct–Nov 2023 (X / Tumblr / stan Twitter)",
      },
      {
        label: "Related",
        value: [
          "Save me [X] snowclones",
          "Stan Twitter devotion macros",
          "White girl music / pop-soundtrack irony",
          "Save me, Chappell Roan comments",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "Tumblr", "Instagram", "TikTok", "Reddit"],
      },
      {
        label: "Early screenshot",
        value: "@5RC00L15MU5 · Aug 2023",
        href: "https://twitter.com/5RC00L15MU5/status/1690093326542704640",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "At face value the joke is a melodramatic cry for rescue — usually from boredom, heartbreak, or a “dark timeline” mood — aimed at a vaguely coded “white girl” figure: a pop idol, a blonde anime character, a campus aesthetic, or the sonic palette nicknamed [[white girl music]] (Cascada-style Eurodance, 2000s pop, Swiftie / Chappell stan playlists). The humor sits in the mismatch between the desperation of the plea and how trivial, commercial, or earnestly feminine the “savior” is.{{1}}{{3}}",
        "Formally, the meme travels two ways. One is the stacked-tweet screenshot (same Yoshi-pfp account, three beats: “save me X” → “X” → “X… save me..”), which invites word-swap edits. The other is caption culture: “WHITE GIRL SAVE ME” over a still of a favorite artist, or a TikTok of chaos scored with glittery pop so commenters can say the white girl “came through.”{{1}}{{2}}{{7}}",
      ],
      image: {
        src: "/white-girl-save-me/overview.jpg",
        alt: "White Girl Save Me meme explainer showing fandom edit and music snowclone variants",
        caption:
          "Explainer collage: fandom character overlay on the left, “music my father listens to” snowclone on the right.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "In early August 2023, X user [[@dawgpleasee]] (display name Shail; Fat Yoshi profile picture) posted a rapid series of short statuses — “save me white girl,” “white girl,” “white girl… save me..,” and related one-liners. The posts themselves were low-engagement shitposts; the format went viral once people began screenshotting the stack as a reusable reaction image.{{1}}{{2}}",
        "On 11–12 Aug 2023, X user [[@5RC00L15MU5]] shared an early screenshot of those posts as a reply-reaction to Taylor Swift media (~1,200+ views on the early clip tallies reported in later writeups). That circulate-the-screenshot step is the usual “origin stamp” for the catchphrase’s public life: the tweets became an image people could quote without needing the live account.{{1}}{{2}}",
      ],
      link: {
        href: "https://twitter.com/5RC00L15MU5/status/1690093326542704640",
        label: "X — @5RC00L15MU5 early screenshot reply →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin stack, viral single post, snowclone edits (twink / $7 beverage / hyperfixation / beach trip), stan-Twitter celebrity stills, and fandom overlays — one beat each.",
      ],
      gallery: [
        {
          id: "origin-stack",
          href: "https://x.com/dawgpleasee",
          kind: "image",
          source: "web",
          handle: "@dawgpleasee",
          author: "Origin stack",
          text: "save me white girl / white girl… save me..",
          date: "Aug 2023",
          caption:
            "Canonical multi-tweet screenshot of @dawgpleasee’s Yoshi-pfp pleas — the template later snowclones overwrite.",
          thumbnail: "/white-girl-save-me/cover.jpg",
        },
        {
          id: "oct31-single",
          href: "https://x.com/dawgpleasee",
          kind: "image",
          source: "web",
          handle: "@dawgpleasee",
          author: "X",
          text: "white girl... save me..",
          date: "31 Oct 2023",
          caption:
            "Standalone plea post later circulated with six-figure view tallies (~659k views / ~11k likes in Daily Dot–shared screenshots).",
          thumbnail: "/white-girl-save-me/example-4.jpg",
          views: "659K+ views",
        },
        {
          id: "bklynb4by-twink",
          href: "https://twitter.com/bklynb4by/status/1712748365371318564",
          kind: "image",
          source: "web",
          handle: "@bklynb4by",
          author: "X snowclone",
          text: "zelda: / save me twink",
          date: "13 Oct 2023",
          caption:
            "Early high-engagement swap: “white girl” → “twink,” captioned for Zelda / Link (~10k+ likes in three-week tallies).",
          thumbnail: "/white-girl-save-me/example-origin.png",
          views: "10K+ likes",
        },
        {
          id: "seven-dollar-beverage",
          href: "https://www.instagram.com/p/CyrkQWDMj1l/",
          kind: "image",
          source: "web",
          handle: "@hagiwara81",
          author: "Snowclone edit",
          text: "save me $7 beverage",
          date: "22 Oct 2023",
          caption:
            "Consumer-aesthetic swap (“$7 beverage”) — coffee / boba coding of the same desperate cadence (~11k likes in week-one tallies; Instagram source later deleted).",
          thumbnail: "/white-girl-save-me/example-2.png",
          views: "11K+ likes",
        },
        {
          id: "funtergeist-hyperfixation",
          href: "https://funtergeist.tumblr.com/post/732315836017147904",
          kind: "image",
          source: "web",
          handle: "@funtergeist",
          author: "Tumblr",
          text: "save me hyperfixation",
          date: "27 Oct 2023",
          caption:
            "Tumblr snowclone swapping in “hyperfixation” — over 10k notes in the first week of circulation.",
          thumbnail: "/white-girl-save-me/example-1.png",
          views: "10K+ notes",
        },
        {
          id: "trip-to-beach",
          href: "https://dailydot.com/white-girl-save-me-meme",
          kind: "image",
          source: "web",
          handle: "Beach-trip swap",
          author: "Snowclone edit",
          text: "save me trip to the beach",
          date: "2023–2024",
          caption:
            "Lifestyle snowclone: “trip to the beach” pasted over the three-beat stack — vacation / soft-life energy as the rescue object.",
          thumbnail: "/white-girl-save-me/example-5.jpg",
        },
        {
          id: "renee-rapp-stan",
          href: "https://dailydot.com/white-girl-save-me-meme",
          kind: "image",
          source: "web",
          handle: "@rmjroan",
          author: "Stan Twitter",
          text: "WHITE GIRL SAVE ME",
          date: "2024",
          caption:
            "Celebrity-still usage: all-caps catchphrase over a short Reneé Rapp studio clip — devotion-macro grammar on X.",
          thumbnail: "/white-girl-save-me/example-edit.jpg",
          views: "1.1K+ likes",
        },
        {
          id: "sonic-yoshi-mood",
          href: "https://dailydot.com/white-girl-save-me-meme",
          kind: "image",
          source: "web",
          handle: "@dawgpleasee",
          author: "X",
          text: "white girl... / ........",
          date: "26 Dec 2023",
          caption:
            "Later @dawgpleasee mood posts: melodramatic Sonic fanart + lonely Yoshi sunset still under truncated “white girl…” captions.",
          thumbnail: "/white-girl-save-me/example-stan.jpg",
        },
        {
          id: "touhou-overlay",
          href: "https://dailydot.com/white-girl-save-me-meme",
          kind: "image",
          source: "web",
          handle: "Touhou fan edit",
          author: "Fandom overlay",
          text: "save me white girl",
          date: "2023",
          caption:
            "Fandom collage: original tweet stack overlaid on Touhou Project art (Alice / “waiting for the bomb” beat).",
          thumbnail: "/white-girl-save-me/example-3.png",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "October–November 2023 locked the exploitable era. On 13 Oct, @bklynb4by’s “twink” Zelda edit cleared ~10k likes; on 22 Oct the “$7 beverage” paste did similar numbers; on 27 Oct Tumblr’s @funtergeist “hyperfixation” version passed ~10k notes; on 2 Nov @cursedbunnyboy’s take pulled ~20k likes in a day. Writeups also flag Google search interest climbing through late 2023 and peaking around the turn of 2024.{{1}}{{2}}{{4}}{{5}}{{8}}",
        "Stan Twitter and TikTok kept the phrase after the snowclone peak. Fans dropped “White Girl Save Me” under photos of Taylor Swift, Reneé Rapp, and other pop figures as a loyalty / comfort caption. Separately, creators scored gym clips, chaos footage, and “dark place” skits with mid-2000s dance-pop (Cascada’s “Everytime We Touch” is a frequent example in explainers) so the soundtrack itself becomes the “white girl” who saves you. January 2024 even saw a novelty single titled “Save Me White Girl.” Comment culture later recycled the stem as “Save me, Chappell Roan” under unrelated tracks.{{1}}{{3}}{{6}}{{7}}",
      ],
      link: {
        href: "https://dailydot.com/white-girl-save-me-meme",
        label: "Daily Dot — stan Twitter rally-cry writeup →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: “I need this aesthetic / person / song to pull me out of a spiral.” Pair the catchphrase with (1) the three-tweet Yoshi stack, (2) a celebrity or OC still, or (3) a video whose audio is unapologetically glossy pop. Word-swap versions keep the cadence but aim the prayer at whatever the poster actually wants — a drink, a hyperfixation, a beach trip, a fictional twink.{{1}}{{2}}",
        "Tone ranges from sincere stan devotion to self-aware shitpost. In music contexts, “white girl save me” often means “queue the earnest pop banger,” not a literal demographic plea; song-comment variants name a specific artist (“Save me, Chappell Roan”) as the punchline.{{3}}{{7}}",
      ],
      list: [
        "Stacked-tweet screenshot with “white girl” intact",
        "Save me [X] snowclone (twink, $7 beverage, hyperfixation, …)",
        "Stan Twitter / TikTok caption over a favorite white woman pop figure",
        "Chaos or gym clip scored with “white girl music” (2000s / mainstream pop)",
        "Song-comment snowclones (“Save me, Chappell Roan”)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{4}}{{5}}{{6}}{{8}}"],
      list: [
        "Early Aug 2023 — @dawgpleasee posts “save me white girl” / “white girl… save me..” stack{{1}}{{2}}",
        "11–12 Aug 2023 — @5RC00L15MU5 screenshots the stack as a Taylor Swift–adjacent reaction{{2}}",
        "13 Oct 2023 — @bklynb4by “twink” / Zelda snowclone (~10k+ likes){{2}}{{4}}",
        "22 Oct 2023 — “$7 beverage” edit circulates (~11k likes){{2}}",
        "27 Oct 2023 — Tumblr @funtergeist “hyperfixation” post (~10k+ notes){{2}}{{5}}",
        "2 Nov 2023 — @cursedbunnyboy variant (~20k likes in a day){{8}}",
        "Late 2023–early 2024 — stan Twitter / TikTok caption peak; search interest crest{{1}}",
        "21 Jan 2024 — TEENAGE BOY HORMONAL RAGE single “Save Me White Girl”{{6}}",
        "2024–2025 — “Save me, Chappell Roan” comment snowclones; ongoing pop-soundtrack reuse{{7}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Daily Dot",
      title: "How the ‘White Girl Save Me’ meme became stan Twitter’s rally cry",
      href: "https://dailydot.com/white-girl-save-me-meme",
      date: "22 Nov 2024",
    },
    {
      id: 2,
      publisher: "X",
      title: "@5RC00L15MU5 — early White Girl Save Me screenshot reply",
      href: "https://twitter.com/5RC00L15MU5/status/1690093326542704640",
      date: "11 Aug 2023",
    },
    {
      id: 3,
      publisher: "Soap Central",
      title: "How the ‘White Girl Save Me’ meme took over Stan Twitter",
      href: "https://www.soapcentral.com/humor/how-white-girl-save-me-meme-took-stan-twitter",
      date: "2024",
    },
    {
      id: 4,
      publisher: "X",
      title: "@bklynb4by — “save me twink” / Zelda snowclone",
      href: "https://twitter.com/bklynb4by/status/1712748365371318564",
      date: "13 Oct 2023",
    },
    {
      id: 5,
      publisher: "Tumblr",
      title: "@funtergeist — hyperfixation White Girl Save Me edit",
      href: "https://funtergeist.tumblr.com/post/732315836017147904",
      date: "27 Oct 2023",
    },
    {
      id: 6,
      publisher: "Apple Music",
      title: "TEENAGE BOY HORMONAL RAGE — Save Me White Girl",
      href: "https://music.apple.com/us/song/save-me-white-girl/1725945930",
      date: "21 Jan 2024",
    },
    {
      id: 7,
      publisher: "Reddit",
      title: "r/Soundmap — What Does “Save Me, Chappell Roan” Mean?",
      href: "https://www.reddit.com/r/Soundmap/comments/1fwosmv/what_does_save_me_chappell_roan_mean/",
      date: "5 Oct 2024",
    },
    {
      id: 8,
      publisher: "X",
      title: "@cursedbunnyboy — White Girl Save Me variant",
      href: "https://twitter.com/cursedbunnyboy/status/1719868425147666651",
      date: "2 Nov 2023",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Not affiliated with @dawgpleasee, cited artists, or platforms · Screenshots © respective posters / platforms",
} as const satisfies WikiArticleData;
