import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const miseryGirlArticle = {
  title: "Misery Girl",
  description:
    "Misery Girl meme is the 2026 TikTok slang that casts alt girls as Pupsies' Misery fans with 'dad play Misery' captions—origin, X face, and the pushback.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Misery Girl]] (also [[Misery Girls]]) is 2026 internet slang for an exaggerated alt / emo / goth-girl stereotype — heavy makeup, dark styling, lots of facial piercings — joked as someone whose favorite song is “[[Misery]]” by [[Pupsies]]. Captions lean childish on purpose: “dad play Misery,” “dada turn on dat misery,” often stacked with ironic [[Dream Girl Wallahi]] replies.{{1}}{{2}}",
    "The joke took off on [[TikTok]] in mid-August 2026, then jumped to [[X]]. Photos of X user [[@himonkeyhamie]] became a recurring face for the format (not its creator); other alt stills and fan drawings circulate too. As clips scaled, defense posts pushed back on the stereotype and on treating real people as punchlines.{{1}}{{3}}{{4}}",
  ],
  infobox: {
    title: "Misery Girl",
    image: {
      src: "/misery-girl/cover.jpg",
      alt: "Misery Girl meme cover — alt girl aesthetic tied to Pupsies Misery captions",
      caption:
        "Recurring visual energy: heavy alt makeup / piercings paired with ‘Misery’ + ‘dada’ captions.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Misery Girls",
          "Dad play Misery",
          "Dada turn on dat misery",
        ],
      },
      {
        label: "Type",
        value: "Slang / participatory video / image macro",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "TikTok · Aug 2026",
        href: "https://www.tiktok.com/@the.scarred.one",
      },
      {
        label: "Peak wave",
        value: "Mid–late Aug 2026 (TikTok / X)",
      },
      {
        label: "Related",
        value: [
          "Misery (Pupsies)",
          "Dream Girl Wallahi",
          "Alt / scene aesthetics",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "X", "Instagram"],
      },
      {
        label: "Signature face",
        value: "@himonkeyhamie (recurring stills)",
        href: "https://x.com/himonkeyhamie",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The punchline is a forced personality pack: see piercings + dark makeup, assume obsession with Pupsies’ “Misery,” then write the caption like a baby-talk request to “dada.” That contrast — adult alt look vs. childish phrasing — is the format’s tell. Some variants lean harder into ageplay innuendo; that is meme stereotyping, not a verified claim about anyone pictured.{{1}}{{2}}{{3}}",
        "“Misery Girl” names a fictional caricature, not one real person. @himonkeyhamie stills are the most-circulated face, the way a reaction crop hardens onto a catchphrase, but other alt photos, AI edits, outfit prints, and drawings fill the same slot. Cross-tags with “Dream Girl Wallahi” let posters dunk and ironically praise in one beat.{{1}}{{4}}",
      ],
      image: {
        src: "/misery-girl/overview.webp",
        alt: "Misery Girl meme social clip showing the printed alt-girl outfit trend",
        caption:
          "Later remixes treat the misery-girl look as merch / print-outfit fuel as well as a caption template.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Exact first coinage is murky; the documented trail clusters in August 2026. On 12 Aug 2026, TikToker @the.scarred.one posted an alt girl with heavy lip piercings under “How did you know my fav song is Misery?” (~12k views in the first week in later tallies) — the seed that glued the aesthetic to the Pupsies track.{{1}}{{2}}{{4}}",
        "By mid-month the joke had a catchphrase grammar (“dada” / “dad play Misery”) and a go-to face. Writeups treat the early clips as stereotype gags about alt fashion codes, not as a self-named subculture.{{2}}{{3}}",
      ],
      link: {
        href: "https://meme.com/memes/misery-girl",
        label: "meme.com — Misery Girl origin & spread →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Album-cover gag, outfit print, aesthetic selfie still, Mount Fuji edit, card explainer — one beat each.",
      ],
      gallery: [
        {
          id: "album-dada",
          href: "https://x.com/bledgun",
          kind: "image",
          source: "web",
          handle: "@bledgun",
          author: "X album gag",
          text: "Buying da Misery album for Dada",
          date: "15 Aug 2026",
          caption:
            "Fake Misery album cover energy using a recurring misery-girl still — the X beat that locked the ‘for Dada’ purchase joke (~11k+ likes in early tallies).",
          thumbnail: "/misery-girl/example-2.webp",
          views: "11K+ likes",
        },
        {
          id: "outfit-print",
          href: "https://meme.com/memes/misery-girl",
          kind: "image",
          source: "web",
          handle: "Outfit print wave",
          author: "Remix / merch gag",
          text: "Misery girl face all over the fit",
          date: "Aug 2026",
          caption:
            "Illustration / print-outfit remix — the caricature face turned into full-body pattern spam.",
          thumbnail: "/misery-girl/example-3.webp",
        },
        {
          id: "aesthetic-selfie",
          href: "https://meme.com/memes/misery-girl",
          kind: "image",
          source: "web",
          handle: "Aesthetic still",
          author: "Format visual",
          text: "Misery girl aesthetic selfie",
          date: "2026",
          caption:
            "Stock look for the slang: dark makeup, piercings, and the implied ‘Misery’ fandom caption.",
          thumbnail: "/misery-girl/example-1.webp",
        },
        {
          id: "fuji-edit",
          href: "https://meme.com/memes/misery-girl",
          kind: "image",
          source: "web",
          handle: "Scenic edit",
          author: "Image macro",
          text: "Misery girl / Mount Fuji edit",
          date: "2026",
          caption:
            "Scenic swap edit keeping the misery-girl face as the punchline subject.",
          thumbnail: "/misery-girl/example-4.webp",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/misery-girl/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Misery Girl card",
          date: "2 Oct 2026",
          caption:
            "Card writeup summarizing the slang, Pupsies hook, and August 2026 TikTok wave.",
          thumbnail: "/misery-girl/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "15 Aug 2026: TikToker @doelilll posted an AI-edited clip of a misery girl begging “dada” to raise “Misery phonk” (~800k+ views in six days). The same day, X @bledgun ran the album-cover macro with @himonkeyhamie (~11k+ likes).{{1}}{{5}}{{6}}",
        "17 Aug 2026: @t.pearr’s slideshow under “Dada turn on dat misery” cleared ~2.3M views in four days and became the phrase most searchers echo. 20 Aug: @hotuniv’s drawing (~400k+ views in a day) showed the caricature surviving outside photo macros. Defense / callout TikToks followed — arguing alt style ≠ ‘Misery’ fandom or ageplay, and criticizing drive-by “dada play Misery” comments on random alt posts.{{1}}{{3}}{{7}}",
      ],
      link: {
        href: "https://www.tiktok.com/@t.pearr",
        label: "TikTok — @t.pearr (Dada turn on dat misery wave) →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default grammar: drop an alt / piercings still (or drawing), caption that her favorite song is Pupsies’ “Misery,” and optionally baby-talk “dada/dad play Misery.” Reply guys stack “Dream Girl Wallahi” for ironic thirst.{{1}}{{2}}",
        "Tone ranges from light aesthetic roast to heavier stereotype / harassment. Forklore documents the format; using real people’s photos as punchlines without context is how the backlash wave started.{{2}}{{3}}",
      ],
      list: [
        "“How did you know my fav song is Misery?” + alt still",
        "“Dada turn on dat misery” / “Dad play Misery” captions",
        "Fake Misery album cover “for Dada” edits",
        "Dream Girl Wallahi crossover replies",
        "Defense posts rejecting the stereotype",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "12 Aug 2026 — @the.scarred.one TikTok links alt piercings look to “Misery”{{1}}{{4}}",
        "15 Aug 2026 — @doelilll AI “Misery phonk / dada” clip (~800k+ views){{1}}{{5}}",
        "15 Aug 2026 — @bledgun X album-cover macro with @himonkeyhamie (~11k+ likes){{1}}{{6}}",
        "17 Aug 2026 — @t.pearr “Dada turn on dat misery” slideshow (~2.3M views){{1}}{{7}}",
        "20 Aug 2026 — @hotuniv drawing variant (~400k+ views){{1}}{{8}}",
        "Late Aug–Oct 2026 — explainer writeups + defense / callout remixes{{2}}{{3}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "Misery Girl Meme: The TikTok 'Dad Play Misery' Trend",
      href: "https://meme.com/memes/misery-girl",
      date: "27 Aug 2026",
    },
    {
      id: 2,
      publisher: "Pop Creep",
      title: "Misery Girl Meme Meaning and Origin",
      href: "https://popcreep.com/misery-girl-meme-meaning-and-origin/",
      date: "27 Sep 2026",
    },
    {
      id: 3,
      publisher: "MyMemeCards",
      title: "Misery Girl meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/misery-girl/",
      date: "2 Oct 2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@the.scarred.one — How did you know my fav song is Misery?",
      href: "https://www.tiktok.com/@the.scarred.one/video/7673168824073473310",
      date: "12 Aug 2026",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@doelilll — Dada Misery phonk edit",
      href: "https://www.tiktok.com/@doelilll",
      date: "15 Aug 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@bledgun — Buying da Misery album for Dada",
      href: "https://x.com/bledgun",
      date: "15 Aug 2026",
    },
    {
      id: 7,
      publisher: "TikTok",
      title: "@t.pearr — Dada turn on dat misery",
      href: "https://www.tiktok.com/@t.pearr",
      date: "17 Aug 2026",
    },
    {
      id: 8,
      publisher: "TikTok",
      title: "@hotuniv — misery girl drawing",
      href: "https://www.tiktok.com/@hotuniv",
      date: "20 Aug 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with Pupsies, TikTok, or X · Screenshots © respective platforms / posters · Real people pictured are not the meme’s inventors",
} as const satisfies WikiArticleData;
