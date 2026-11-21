import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const whenTheFajitasComeOutSizzlingArticle = {
  title: "When the Fajitas Come Out Sizzling",
  description:
    "When the Fajitas Come Out Sizzling is the fajitas sizzling restaurant catchphrase meme—from 2018 head-turns to 2025 Link dancing macros on Instagram and X.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[When the Fajitas Come Out Sizzling]] (also [[When Them Fajitas Come Out Sizzlin’]], [[fajitas sizzling meme]]) is a catchphrase and image-macro format about the loud arrival of a fajita platter — the skillet hiss that makes a whole dining room whip around. Posts pair the line with a head-turn, freeze, or over-the-top dance still so the sizzle reads as either irresistible spectacle or an embarrassing attention magnet.{{1}}{{2}}",
    "Restaurant-sizzle jokes landed on Reddit in 2018 and recirculated for years on Facebook, Reddit, and X. The format’s signature look locked in July 2025 when Instagram [[@cyrakek_]] captioned a low-res still of [[Link]] ([[Good Mythical Morning]]) dancing “When them fajitas come out sizzlin’,” then reposts and X quote-posts pushed that edit into the main timeline wave.{{1}}{{3}}{{5}}",
  ],
  infobox: {
    title: "When the Fajitas Come Out Sizzling",
    image: {
      src: "/when-the-fajitas-come-out-sizzling/cover.jpg",
      alt: "When the Fajitas Come Out Sizzling meme — Link dancing with fajitas sizzling caption",
      caption:
        "Signature 2025 still energy: dancing Link under the “fajitas come out sizzlin’” caption.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "When them fajitas come out sizzlin’",
          "Fajitas sizzling meme",
          "Sizzling fajitas catchphrase",
        ],
      },
      {
        label: "Type",
        value: "Catchphrase / image macro / reaction",
      },
      { label: "Year", value: "2018 (viral wave 2025)" },
      {
        label: "Origin",
        value: "Reddit r/TooAfraidToAsk · Aug 2018",
        href: "https://www.reddit.com/r/TooAfraidToAsk/",
      },
      {
        label: "Peak wave",
        value: "Jul–Oct 2025 (Instagram / X)",
      },
      {
        label: "Related",
        value: [
          "Restaurant distraction reactions",
          "SpongeBob Fish Turns Around",
          "Good Mythical Morning / Link",
        ],
      },
      {
        label: "Platforms",
        value: ["Reddit", "Facebook", "Instagram", "X", "iFunny"],
      },
      {
        label: "Signature edit",
        value: "@cyrakek_ · Jul 2025 Link dance",
        href: "https://www.instagram.com/cyrakek_/",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The punchline is shared restaurant physics: fajitas hit a screaming-hot skillet, the room hears the hiss before it sees the plate, and every head turns. Early macros sold distraction — diners abandoning conversation mid-bite. Later caption snowclones (“when them fajitas come out sizzlin’”) sell pure hype energy, often with a celebratory or absurd reaction clip instead of a literal restaurant still.{{1}}{{2}}",
        "By late 2025 the Link-dancing crop functioned as the default visual for the phrase, the way a single reaction face hardens around a catchphrase. Editors still swap in other head-turn assets (SpongeBob fish, politicians, streamers), but searchers typing “fajitas sizzling” increasingly land on the GMM still.{{1}}{{3}}",
      ],
      image: {
        src: "/when-the-fajitas-come-out-sizzling/meme-com.webp",
        alt: "When the Fajitas Come Out Sizzling meme collage of restaurant and reaction variants",
        caption:
          "Explainer collage framing the catchphrase across head-turn and dance variants.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 29 Aug 2018, Redditor u/chainscriptbaby posted to r/TooAfraidToAsk with the caption “The entire restaurant when somebody order fajitas,” showing a woman looking back from her food toward the kitchen noise (~3,700+ upvotes in later tallies). Writeups also credit an earlier social post by mister_impossible as the image’s prior source, though that upload date is unclear.{{1}}{{2}}",
        "On 16 May 2019, George Lopez shared a Facebook meme (attributed to then-X user @CHASEEEZY) captioned “Me when somebody orders fajitas and them shits come out sizzling,” using the [[SpongeBob SquarePants]] Fish Turns Around still (~5,600 reactions / ~2,600 shares in multi-year tallies). That post helped lock the head-turn grammar to the fajita sizzle.{{1}}{{2}}",
      ],
      link: {
        href: "https://meme.com/memes/when-the-fajitas-come-out-sizzling",
        label: "meme.com — fajitas sizzling origin & spread →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Link signature collage, Saul / head-turn variants, Bush inauguration X post, GMM source clip, and card explainer — one beat each.",
      ],
      gallery: [
        {
          id: "ig-cyrakek",
          href: "https://www.instagram.com/cyrakek_/",
          kind: "image",
          source: "web",
          handle: "@cyrakek_",
          author: "Instagram signature",
          text: "When them fajitas come out sizzlin’",
          date: "14 Jul 2025",
          caption:
            "Center panel: low-res Link dance still + caption — the edit that became the format’s default face (~60k+ likes; side panels show later reaction swaps).",
          thumbnail: "/when-the-fajitas-come-out-sizzling/cover.jpg",
          views: "60K+ likes",
        },
        {
          id: "saul-variant",
          href: "https://meme.com/memes/when-the-fajitas-come-out-sizzling",
          kind: "image",
          source: "web",
          handle: "Saul Goodman swap",
          author: "Reaction variant",
          text: "me when someone orders fajitas…",
          date: "2025",
          caption:
            "Better Call Saul still under a fajitas-sizzle caption — “locking in” energy for the skillet hiss.",
          thumbnail: "/when-the-fajitas-come-out-sizzling/example-1.jpg",
        },
        {
          id: "head-turn-variant",
          href: "https://www.instagram.com/epicjoko/",
          kind: "image",
          source: "web",
          handle: "Head-turn macro",
          author: "Reaction variant",
          text: "When them fajitas come out sizzling",
          date: "2025",
          caption:
            "Classic distraction grammar: subject glances off-frame as if the skillet just entered the room (~135k likes on the Link repost cycle).",
          thumbnail: "/when-the-fajitas-come-out-sizzling/example-2.jpg",
          views: "135K+ likes (IG wave)",
        },
        {
          id: "x-ryanlostintx",
          href: "https://x.com/RyanLostinTX",
          kind: "image",
          handle: "@RyanLostinTX",
          author: "X",
          text: "Piping hot sizzling platter of combo fajitas",
          date: "20 Jan 2025",
          caption:
            "George Bush inauguration still mapped onto the server-emerging-with-fajitas setup (~46k likes in later tallies).",
          thumbnail: "/when-the-fajitas-come-out-sizzling/example-3.jpg",
          views: "46K+ likes",
        },
        {
          id: "yt-gmm",
          href: "https://www.youtube.com/watch?v=BZNwqV0EDq8",
          kind: "video",
          source: "web",
          handle: "Good Mythical Morning",
          author: "Source footage",
          text: "How to Dance to Attract Girls (2014)",
          date: "2014",
          caption:
            "Source of the Link dance clip later cropped into the 2025 fajitas macros.",
          thumbnail: "/when-the-fajitas-come-out-sizzling/cover.jpg",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/when-the-fajitas-come-out-sizzling/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "When the Fajitas Come Out Sizzling card",
          date: "2 Oct 2026",
          caption:
            "Secondary card writeup summarizing the catchphrase, 2018 Reddit start, and 2025 Link wave.",
          thumbnail: "/when-the-fajitas-come-out-sizzling/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Through the early 2020s the joke stayed a durable restaurant bit: Mick Foley’s May 2021 Facebook share, an Alex Jones–framed r/me_irl post (8 Aug 2022, ~82k upvotes), a Dec 2022 me_irl compilation, and iFunny / X variants including a Jan 2025 George Bush inauguration still (~46k likes).{{1}}{{2}}",
        "July–October 2025 was the breakout. After @cyrakek_ and @epicjoko’s Instagram cycle, X @koreybruhyt’s 4 Oct reshare (“My eyes are red from crying at this image,” ~122k likes in two days) and @Blackvev0’s 5 Oct ProJared-suited “When you hear the fajitas sizzling” quote (~51k likes) kept the Link look on timelines. Jacksfilms’ 7 Oct plate selfie closed the week with an IRL nod.{{1}}{{3}}{{4}}",
      ],
      link: {
        href: "https://www.instagram.com/cyrakek_/",
        label: "Instagram — @cyrakek_ (signature Link edit) →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: something loud, hot, and impossible to ignore just entered the room — usually food, sometimes a person, announcement, or drop that steals focus the same way. Pair the stem “when the/them fajitas come out sizzling” with a head-turn still, a dance freeze, or a selfie next to the actual skillet.{{1}}{{2}}",
        "Tone swings between affection and mockery: either “that sizzle is the highlight of dinner” or “everyone at the table just abandoned the conversation.” Caption-only posts work once the Link still is already in the thread.{{1}}{{3}}",
      ],
      list: [
        "Restaurant distraction / head-turn macros",
        "“When them fajitas come out sizzlin’” + Link dance still",
        "Celebrity / politician / streamer head-turn swaps",
        "IRL plate selfies quoting the catchphrase",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "29 Aug 2018 — u/chainscriptbaby r/TooAfraidToAsk restaurant head-turn post{{1}}",
        "16 May 2019 — George Lopez Facebook share with SpongeBob Fish Turns Around{{1}}{{2}}",
        "21 May 2021 — Mick Foley Facebook variant{{1}}",
        "8 Aug 2022 — Alex Jones–framed r/me_irl post (~82k upvotes){{1}}",
        "20 Jan 2025 — @RyanLostinTX George Bush inauguration still{{1}}",
        "14 Jul 2025 — @cyrakek_ Instagram Link dance + “sizzlin’” caption{{1}}{{3}}",
        "18 Jul 2025 — @epicjoko Instagram repost (~135k likes){{1}}",
        "4–7 Oct 2025 — X wave (@koreybruhyt, @Blackvev0, @jacksfilms){{1}}{{4}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "When The Fajitas Come Out Sizzling: Meme Origin & Spread",
      href: "https://meme.com/memes/when-the-fajitas-come-out-sizzling",
      date: "12 Aug 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "When the Fajitas Come Out Sizzling meme: origin and card",
      href: "https://mymemecards.com/meme-cards/when-the-fajitas-come-out-sizzling/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "Instagram",
      title: "@cyrakek_ — When them fajitas come out sizzlin’",
      href: "https://www.instagram.com/cyrakek_/",
      date: "14 Jul 2025",
    },
    {
      id: 4,
      publisher: "X",
      title: "@RyanLostinTX — inauguration fajitas platter caption",
      href: "https://x.com/RyanLostinTX",
      date: "20 Jan 2025",
    },
    {
      id: 5,
      publisher: "YouTube",
      title: "Good Mythical Morning — How to Dance to Attract Girls",
      href: "https://www.youtube.com/watch?v=BZNwqV0EDq8",
      date: "2014",
    },
    {
      id: 6,
      publisher: "Instagram",
      title: "@epicjoko — fajitas sizzlin’ repost",
      href: "https://www.instagram.com/epicjoko/",
      date: "18 Jul 2025",
    },
    {
      id: 7,
      publisher: "Reddit",
      title: "r/TooAfraidToAsk — early restaurant fajitas distraction post",
      href: "https://www.reddit.com/r/TooAfraidToAsk/",
      date: "29 Aug 2018",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Not affiliated with Good Mythical Morning / Mythical Entertainment · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
