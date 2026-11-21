import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const iGuessBroJonahHillArticle = {
  title: "I Guess Bro Jonah Hill GIF",
  description:
    "I Guess Bro Jonah Hill GIF is the War Dogs eye-scratch reaction meme on TikTok and X—users post I guess bro for exasperation, sarcasm, and reluctant agreement.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[I Guess Bro]] (also [[\"I Guess Bro\" Jonah Hill GIF]], [[Jonah Hill I guess bro]]) is a 2025 reaction GIF and image-macro format built from a [[War Dogs]] (2016) still of [[Jonah Hill]] pinching the corner of his eye. Posters drop the clip or freeze-frame under the caption “I guess bro” to signal exasperation, exhausted agreement, or secondhand cringe.{{1}}{{2}}",
    "The phrase locked onto TikTok comment stickers in late 2025, then hopped to X quote-posts and Instagram macros. A greenscreen cutout and Giphy upload made the same War Dogs beat easy to paste under almost any baffling take.{{3}}{{4}}{{6}}",
  ],
  infobox: {
    title: "I Guess Bro Jonah Hill GIF",
    image: {
      src: "/i-guess-bro-jonah-hill/cover.jpg",
      alt: "Jonah Hill War Dogs still rubbing his eye — I Guess Bro reaction meme",
      caption:
        "Canonical still: Jonah Hill pinches near his eye in War Dogs (2016), the face behind “I guess bro.”",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "I Guess Bro",
          "Jonah Hill I guess bro",
          "War Dogs eye-scratch GIF",
        ],
      },
      {
        label: "Type",
        value: "Reaction GIF / image macro / comment sticker",
      },
      { label: "Year", value: "2025" },
      {
        label: "Origin",
        value: "TikTok comment sections · War Dogs (2016)",
      },
      {
        label: "Source scene",
        value: "War Dogs · ~3:44 eye-scratch beat",
        href: "https://www.youtube.com/watch?v=bCAPURWHHmk",
      },
      {
        label: "Peak wave",
        value: "Aug–Nov 2025 (TikTok / X)",
      },
      {
        label: "Related",
        value: [
          "SMH",
          "No No No Wait Wait Wait",
          "Will He Perform",
          "Wait I'm Goated",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "X", "Instagram", "Giphy"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke is weary compliance. “I guess bro” reads as “fine, whatever” with a side of disbelief — the poster is not celebrating the take above them; they are enduring it. Pairing that line with Hill’s closed-eye pinch turns the shrug into a full-body sigh.{{1}}{{2}}",
        "On TikTok the format often travels as a comment sticker: the GIF or still sits under a video instead of a typed reply. On X and Instagram it more often arrives as a quote-post image or captioned macro (“yeah I guess bro” burned onto the frame). Greenscreen templates later let editors drop Hill into unrelated backgrounds without changing the read.{{3}}{{4}}",
      ],
      image: {
        src: "/i-guess-bro-jonah-hill/giphy-still.gif",
        alt: "I Guess Bro Jonah Hill GIF still used as a reaction asset",
        caption:
          "Loop-friendly crop of the War Dogs eye-scratch beat circulated as the default I Guess Bro reaction.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "[[War Dogs]] opened 19 Aug 2016. In the beat where Efraim Diveroli (Jonah Hill) and David Packouz (Miles Teller) absorb the fallout of landing a massive Afghan munitions contract, Hill sits in a wood-paneled room and scratches near the corner of his eye — tired, irritated, already done. That gesture sits around the 3:44 mark in widely shared YouTube scene uploads.{{1}}",
        "Clips and GIFs of the wipe circulated as reaction assets through 2025. By mid-to-late year, TikTok commenters were stacking the still with the plain caption “I guess bro,” turning a movie micro-expression into a portable exasperation sticker. A single earliest TikTok sticker permalink has not been recovered for this entry; dated public sightings start with an Aug 2025 X quote-post.{{1}}{{2}}{{5}}",
      ],
      link: {
        href: "https://www.youtube.com/watch?v=bCAPURWHHmk",
        label: "YouTube — War Dogs Afghan-deal scene (source beat) →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Primary reaction GIF, source clip, documented X quote-post, caption macros, Giphy host, and greenscreen template — one card per beat.",
      ],
      gallery: [
        {
          id: "reaction-gif",
          href: "https://giphy.com/gifs/i-guess-bro-srW2tf6GpQ83tl3pLC",
          kind: "video",
          source: "web",
          handle: "I Guess Bro",
          author: "Primary reaction GIF",
          text: "i guess bro",
          date: "2025",
          caption:
            "Canonical looping reaction asset — Jonah Hill’s War Dogs eye-scratch paired with the “I guess bro” read.",
          thumbnail: "/i-guess-bro-jonah-hill/reaction.gif",
          duration: "loop",
        },
        {
          id: "yt-war-dogs",
          href: "https://www.youtube.com/watch?v=bCAPURWHHmk",
          kind: "video",
          source: "web",
          handle: "War Dogs (2016)",
          author: "Source footage",
          text: "Winning the $300 million Afghan deal",
          date: "2016",
          caption:
            "Source scene upload — Hill’s eye-scratch / pinch around ~3:44 became the meme’s face.",
          thumbnail: "/i-guess-bro-jonah-hill/yt-war-dogs.jpg",
        },
        {
          id: "x-blakestonks",
          href: "https://x.com/blakestonks/status/1962232011122192427",
          kind: "image",
          handle: "@blakestonks",
          author: "X",
          text: "Quote-reply with War Dogs still",
          date: "31 Aug 2025",
          caption:
            "Documented early X sighting: Jonah Hill still quote-posted under Meek Mill’s “Working on a ai tool that can change the world lol” (~55k views in later screenshots).",
          thumbnail: "/i-guess-bro-jonah-hill/example-1.png",
          views: "55K+ views",
        },
        {
          id: "wotc-macro",
          href: "https://giphy.com/gifs/i-guess-bro-srW2tf6GpQ83tl3pLC",
          kind: "image",
          source: "web",
          handle: "Caption macro",
          author: "Image macro",
          text: "yeah I guess bro",
          date: "2025",
          caption:
            "Classic macro grammar: setup caption on top, War Dogs still below with “yeah I guess bro” burned in.",
          thumbnail: "/i-guess-bro-jonah-hill/example-2.jpg",
        },
        {
          id: "stark-macro",
          href: "https://giphy.com/gifs/i-guess-bro-srW2tf6GpQ83tl3pLC",
          kind: "image",
          source: "web",
          handle: "Fandom caption",
          author: "Image macro",
          text: "Me watching the Starks…",
          date: "2025",
          caption:
            "Fandom swap — same exhausted Hill face under a Game of Thrones “honor” rant caption.",
          thumbnail: "/i-guess-bro-jonah-hill/example-3.jpg",
        },
        {
          id: "giphy-loop",
          href: "https://giphy.com/gifs/i-guess-bro-srW2tf6GpQ83tl3pLC",
          kind: "video",
          source: "web",
          handle: "Giphy",
          author: "Hosted loop",
          text: "i guess bro",
          date: "2025",
          caption:
            "Public Giphy loop tagged “i guess bro” — portable sticker for chats and comment UIs (1M+ views in later tallies).",
          thumbnail: "/i-guess-bro-jonah-hill/giphy-loop.webp",
          views: "1M+ views",
        },
        {
          id: "reaction-gif",
          href: "https://giphy.com/gifs/i-guess-bro-srW2tf6GpQ83tl3pLC",
          kind: "image",
          source: "web",
          handle: "Reaction loop",
          author: "Local GIF",
          text: "I guess bro",
          date: "2025",
          caption:
            "Local reaction.gif — eye-scratch loop as a Discord / chat sticker stand-in.",
          thumbnail: "/i-guess-bro-jonah-hill/reaction.gif",
        },
        {
          id: "tiktok-greenscreen",
          href: "https://www.tiktok.com/@igreenscreenthings/video/7576453416319257887",
          kind: "video",
          source: "web",
          handle: "@igreenscreenthings",
          author: "Greenscreen template",
          text: "I Guess Bro Jonah Hill | Green Screen",
          date: "2025",
          caption:
            "Cutout / greenscreen pack so editors can drop the Hill reaction onto any backdrop.",
          thumbnail: "/i-guess-bro-jonah-hill/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "On 31 Aug 2025, X user @blakestonks quote-posted the War Dogs still under Meek Mill’s AI-tool tweet — a dated public timeline spike that treated the face as a standalone “bro, seriously?” reply without needing the caption spelled out. Earlier TikTok comment-sticker uses are widely reported but not pinned to a recovered permalink here.{{2}}",
        "Through fall 2025 the line dominated TikTok comment sections as a sticker. On 26 Oct 2025, @mangotoucher3000 posted a meta bit joking that “I guess bro” was already overused (~2,000+ likes in two weeks in contemporary tallies). Greenscreen packs and Giphy mirrors kept the same pinch reusable into early 2026.{{3}}{{4}}{{6}}",
      ],
      link: {
        href: "https://x.com/blakestonks/status/1962232011122192427",
        label: "X — @blakestonks War Dogs quote-post →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: something mildly ridiculous, underwhelming, or painfully inevitable just happened, and the poster is choosing exhausted acceptance over a fight. Tone sits between sarcasm and resignation — closer to a sigh than a dunk.{{1}}{{2}}",
        "Works best as a reply artifact: TikTok sticker, X quote image, Discord/Giphy paste, or a captioned macro that names the annoyance in the top text. Pronoun-free “I guess bro” stays the sticky form; “yeah I guess bro” is a common softener.{{3}}{{6}}",
      ],
      list: [
        "TikTok comment stickers under baffling or cringe videos",
        "X / Instagram quote-posts with the War Dogs still",
        "Top-text macros (“WotC balances…”, fandom rants) + “yeah I guess bro”",
        "Greenscreen / cutout edits dropping Hill into new scenes",
        "Chat reactions via Giphy “i guess bro” search",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "19 Aug 2016 — War Dogs theatrical release; eye-scratch scene filmed for the Afghan-deal beat{{1}}",
        "2025 — War Dogs wipe GIFs circulate as reaction assets (exact first sticker permalink unrecovered){{1}}{{5}}",
        "31 Aug 2025 — @blakestonks X quote-post under Meek Mill AI-tool tweet (dated public sighting){{2}}",
        "Late 2025 — “I guess bro” sticks as a TikTok comment-section staple{{3}}",
        "26 Oct 2025 — @mangotoucher3000 meta post about overuse (~2k+ likes / two weeks){{3}}",
        "2025–2026 — @igreenscreenthings greenscreen template + Giphy loop widen reuse{{4}}{{6}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "YouTube",
      title: "Winning the $300 million Afghan deal – War Dogs (2016)",
      href: "https://www.youtube.com/watch?v=bCAPURWHHmk",
      date: "2016",
    },
    {
      id: 2,
      publisher: "X",
      title: "@blakestonks — War Dogs still quote-post under Meek Mill",
      href: "https://x.com/blakestonks/status/1962232011122192427",
      date: "31 Aug 2025",
    },
    {
      id: 3,
      publisher: "TikTok",
      title: "@mangotoucher3000 — I guess bro overuse bit",
      href: "https://www.tiktok.com/@mangotoucher3000/video/7565588223020354838",
      date: "26 Oct 2025",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@igreenscreenthings — I Guess Bro Jonah Hill greenscreen",
      href: "https://www.tiktok.com/@igreenscreenthings/video/7576453416319257887",
      date: "2025",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@rimrised — Jonah Hill wiping his eyes / War Dogs origin clip",
      href: "https://www.tiktok.com/@rimrised/video/7567350138876824854",
      date: "2025",
    },
    {
      id: 6,
      publisher: "Giphy",
      title: "i guess bro — Jonah Hill reaction GIF",
      href: "https://giphy.com/gifs/i-guess-bro-srW2tf6GpQ83tl3pLC",
      date: "2025",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with Jonah Hill, Warner Bros., or War Dogs · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
