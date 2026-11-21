import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const doesHeKnowArticle = {
  title: "Does He Know",
  description:
    "Does He Know is a 2022 New Rockstars YouTube thumbnail of Paul Dano as the Riddler—Twitter's go-to reaction when someone seems oblivious to gossip or a secret.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Does He Know?]] (also [[Does He Know]]) is a 2022 reaction-image and exploitable macro built from a [[New Rockstars]] YouTube thumbnail: [[Paul Dano]] as the [[Riddler]] from [[The Batman]] (2022), stacked under bold yellow text reading “Does he know?” Posters drop it under a screenshot or story where someone seems oblivious to gossip, a spoiler, or a joke the audience already shares.{{1}}{{2}}",
    "The still is a marketing artefact, not an on-screen chyron from the film. It rose alongside sibling New Rockstars thumbnails such as [[What Was He Cooking?]], broke out on Twitter in summer 2022, and later gained a punchline companion captioned “he knows.”{{1}}{{3}}",
  ],
  infobox: {
    title: "Does He Know?",
    image: {
      src: "/does-he-know/cover.jpg",
      alt: "Paul Dano as the Riddler with yellow caption Does he know?",
      caption:
        "Canonical still: New Rockstars–style yellow “DOES HE KNOW?” over Dano’s Arkham smirk.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Does He Know",
          "Does he know?",
          "Riddler does he know",
          "He knows (variant)",
        ],
      },
      {
        label: "Type",
        value: "Reaction image / image macro / exploitable",
      },
      { label: "Year", value: "2022" },
      {
        label: "Origin",
        value: "YouTube · New Rockstars thumbnail",
        href: "https://www.youtube.com/watch?v=bIsp1K8eJG0",
      },
      {
        label: "Peak wave",
        value: "Summer–fall 2022 (Twitter)",
      },
      {
        label: "Related",
        value: [
          "What Was He Cooking?",
          "New Rockstars thumbnails",
          "He knows (inversion)",
        ],
      },
      {
        label: "Platforms",
        value: ["YouTube", "Tumblr", "X (Twitter)", "Reddit", "TikTok"],
      },
      {
        label: "Source upload",
        value: "New Rockstars · 7 Mar 2022",
        href: "https://www.youtube.com/watch?v=bIsp1K8eJG0",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The format is a single-panel reply asset. Dano’s smug Arkham close-up plus the yellow “Does he know?” line stands in for the knowing onlooker: the subject of the post above is missing something the gallery already sees. Tone sits between teasing and pity — softer than a direct dunk because the poster never has to spell out the secret.{{1}}{{3}}",
        "Pronoun swaps (“Does she know?”, “Do they know?”), fandom redraws, and stacked New Rockstars captions keep the same grammar. A later “he knows” edit flips the verdict so the subject is fully aware and doing it anyway — often used as the second beat after the original.{{1}}{{2}}",
      ],
      image: {
        src: "/does-he-know/riddler-thumbnail.webp",
        alt: "Crop of the Does he know Riddler reaction thumbnail",
        caption:
          "Clean crop of the reaction still used across encyclopedia and template writeups.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On March 7, 2022, the YouTube channel New Rockstars uploaded the film-theory video “The Batman: Does Riddler Actually KNOW Batman = Bruce?” Its thumbnail put Paul Dano’s unmasked Riddler beside high-contrast text asking “Does he know?” — a sincere plot question about whether Edward Nashton had clocked that Batman and Bruce Wayne were the same person. Contemporary tallies put the video above roughly 854,000 views within seven months.{{1}}{{2}}{{4}}",
        "After [[What Was He Cooking?]] (another New Rockstars thumbnail) went viral, Tumblr user [[campyvillain]] posted a clickbait-thumbnail compilation that included the Riddler frame (widely dated around 1 May 2022; the Tumblr post UI also shows late April). That grid collected on the order of 15,000 notes over the following months and pushed the still outside YouTube comment culture.{{1}}{{2}}{{5}}",
      ],
      link: {
        href: "https://meme.com/memes/does-he-know",
        label: "meme.com Does He Know summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Source thumbnail, Tumblr amplification grid, early Twitter reply, “he knows” punchline pair, sibling-thumbnail thread, and a pronoun-swap redraw.",
      ],
      gallery: [
        {
          id: "new-rockstars-upload",
          href: "https://www.youtube.com/watch?v=bIsp1K8eJG0",
          kind: "video",
          source: "web",
          handle: "New Rockstars",
          author: "Source thumbnail",
          text: "The Batman: Does Riddler Actually KNOW Batman = Bruce?",
          date: "7 Mar 2022",
          caption:
            "Origin YouTube upload — the Paul Dano Riddler still with “Does he know?” lettering.",
          thumbnail: "/does-he-know/cover.jpg",
          duration: "theory video",
          views: "854K+ (7 mo)",
        },
        {
          id: "campyvillain-tumblr",
          href: "https://www.tumblr.com/campyvillain/682898789155143680",
          kind: "image",
          source: "web",
          handle: "@campyvillain",
          author: "Tumblr compilation",
          text: "New Rockstars thumbnail grid (Does he know? top-left)",
          date: "1 May 2022",
          caption:
            "Clickbait-thumbnail collage that put the Riddler frame beside What Was He Cooking? and other NR-style gags (~15k notes in later tallies).",
          thumbnail: "/does-he-know/tumblr-compilation.webp",
          views: "15K+ notes",
        },
        {
          id: "yourgametvlol",
          href: "https://twitter.com/YourGameTVlol/status/1527997059470598144",
          kind: "image",
          source: "web",
          handle: "@YourGameTVlol",
          author: "Early Twitter reply",
          text: "Does he know? (reply reaction)",
          date: "21 May 2022",
          caption:
            "Early documented Twitter reply using the cropped thumbnail (account later suspended).",
          thumbnail: "/does-he-know/twitter-dame.webp",
        },
        {
          id: "csmfht-oedipus",
          href: "https://twitter.com/CSMFHT/status/1573237212686458880",
          kind: "image",
          handle: "@CSMFHT",
          author: "X · Classical Studies Memes",
          text: "When Oedipus marries his mother / When he blinds himself",
          date: "23 Sep 2022",
          caption:
            "Setup–punchline pair: “DOES HE KNOW?” → “HE KNOWS” on the Oedipus beat — the inversion that became a companion asset.",
          thumbnail: "/does-he-know/oedipus-tweet.webp",
          views: "1.1K+ likes (early)",
        },
        {
          id: "worrski-thread",
          href: "https://x.com/worrski_",
          kind: "image",
          source: "web",
          handle: "@worrski_",
          author: "Thumbnail thread",
          text: "Compiled New Rockstars–style thumbnail pack",
          date: "21 Sep 2022",
          caption:
            "Sibling-thumbnail thread that kept “Does he know?” in circulation beside What Was He Cooking? and other NR macros.",
          thumbnail: "/does-he-know/worrski-thread.webp",
          views: "135K+ likes",
        },
        {
          id: "does-she-know-redraw",
          href: "https://meme.com/memes/does-he-know",
          kind: "image",
          source: "web",
          handle: "Fandom redraw",
          author: "Pronoun / character swap",
          text: "DOES SHE KNOW?",
          date: "Template era",
          caption:
            "Exploitable redraw keeping the yellow caption stack while swapping the subject and pronoun.",
          thumbnail: "/does-he-know/example-spread.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Twitter picked the image up through late spring 2022. On May 21, @YourGameTVlol replied with the still to a since-deleted post (an early, low-engagement sighting). On June 26, @SohSketch’s reply to another deleted tweet became the documented breakout — on the order of 490 retweets and 27,500 likes inside a week in contemporary tallies.{{1}}{{2}}",
        "Through the rest of 2022 the frame traveled as a portable reply, with edits, remakes, and character swaps. On September 23, @CSMFHT posted a classical-meme two-beat (“Does he know?” / “he knows”) that helped lock the inversion as a punchline companion. Threads that packed New Rockstars–style thumbnails together kept the whole vocabulary — cooking, destruction, “does he know?” — in the same reply toolkit.{{1}}{{6}}",
      ],
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Post it as a reply, quote, or second image — not as a standalone opener. The joke needs a target above it and a gap the audience already understands; explaining the secret in the same post turns the gag into a lecture.{{3}}",
        "Common beats: partner / coworker gossip, lore spoilers, self-deprecating “I am the oblivious one,” wholesome pet or surprise-party captions, and chained “Does he know?” → “he knows” pairs. Pronoun and character swaps do not change the grammar.{{1}}{{3}}",
      ],
      list: [
        "Reply under a screenshot where the subject misses an obvious fact",
        "Pronoun swaps: Does she / they / you know?",
        "“He knows” inversion as punchline or follow-up",
        "Fandom redraws keeping yellow New Rockstars–style lettering",
        "Stacked with other New Rockstars thumbnail reactions",
      ],
      image: {
        src: "/does-he-know/he-knows.jpg",
        alt: "Riddler still captioned HE DOESN'T KNOW",
        caption:
          "Sibling caption flip (“HE DOESN'T KNOW!”) — same face, opposite certainty.",
      },
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Key documented beats:{{1}}{{2}}"],
      list: [
        "7 Mar 2022 — New Rockstars uploads “Does Riddler Actually KNOW Batman = Bruce?” with the Dano thumbnail{{4}}",
        "1 May 2022 — Tumblr @campyvillain compilation includes the Riddler frame (~15k notes in later tallies){{5}}",
        "21 May 2022 — Early Twitter reply by @YourGameTVlol{{1}}",
        "26 Jun 2022 — @SohSketch reply breakout (~27.5k likes / ~490 RTs in a week){{1}}",
        "21 Sep 2022 — @worrski_ thumbnail compilation thread recirculates the pack{{1}}",
        "23 Sep 2022 — @CSMFHT “Does he know?” / “he knows” Oedipus pair{{6}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "Does He Know? Meme: The Riddler Thumbnail From 2022",
      href: "https://meme.com/memes/does-he-know",
      date: "19 Nov 2026",
    },
    {
      id: 2,
      publisher: "Daily Dot",
      title: "Does He Know Meme: The Origin And Explanation Behind It",
      href: "https://dailydot.com/does-he-know-meme",
      date: "7 Nov 2023",
    },
    {
      id: 3,
      publisher: "Memeyell",
      title: "Does He Know Meme: Real Source Image and How to Caption It",
      href: "https://memeyell.com/meme-dictionary/does-he-know-meme/",
      date: "2024",
    },
    {
      id: 4,
      publisher: "YouTube",
      title:
        "New Rockstars — The Batman: Does Riddler Actually KNOW Batman = Bruce?",
      href: "https://www.youtube.com/watch?v=bIsp1K8eJG0",
      date: "7 Mar 2022",
    },
    {
      id: 5,
      publisher: "Tumblr",
      title: "campyvillain — New Rockstars thumbnail compilation",
      href: "https://www.tumblr.com/campyvillain/682898789155143680",
      date: "1 May 2022",
    },
    {
      id: 6,
      publisher: "X",
      title: "@CSMFHT — Oedipus Does he know / He knows pair",
      href: "https://twitter.com/CSMFHT/status/1573237212686458880",
      date: "23 Sep 2022",
    },
    {
      id: 7,
      publisher: "X",
      title: "@SohSketch — Does he know reply (breakout sighting)",
      href: "https://twitter.com/SohSketch/status/1541078079866552328",
      date: "26 Jun 2022",
    },
    {
      id: 8,
      publisher: "X",
      title: "@YourGameTVlol — early Does he know reply",
      href: "https://twitter.com/YourGameTVlol/status/1527997059470598144",
      date: "21 May 2022",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters · New Rockstars / Warner Bros. characters depicted for commentary",
} as const satisfies WikiArticleData;
