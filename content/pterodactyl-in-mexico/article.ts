import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const pterodactylInMexicoArticle = {
  title: "Pterodactyl in Mexico",
  description:
    "Pterodactyl in Mexico is the Nov 2026 viral AI TikTok over Ciudad Juárez—Snopes flagged fake “Jalpan de” text; officials called it digital entertainment.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Pterodactyl in Mexico]] (also [[Dinosaurs in Mexico]], [[What MFs in Mexico Are Dealing With RN]]) is a November 2026 meme cluster built around a viral clip of a winged “pterodactyl” gliding over a Mexican town at dusk.{{1}}{{2}}",
    "TikToker [[@daniela230997]]’s 14 Nov upload cleared ~22 million views in days and spawned Before GTA 6 jokes. Fact-checkers including [[Snopes]] judged the widely shared night-sky cut AI-generated; Ciudad Juárez Civil Protection called related circulating videos digital entertainment, not a living prehistoric animal.{{3}}{{4}}",
  ],
  infobox: {
    title: "Pterodactyl in Mexico",
    image: {
      src: "/pterodactyl-in-mexico/cover.jpg",
      alt: "Pterodactyl in Mexico viral AI sky sighting meme",
      caption:
        "Viral dusk silhouette — memed as a modern Mexican “flying dinosaur,” flagged as synthetic.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Dinosaurs in Mexico",
          "Pterodactyl Ciudad Juárez",
          "What MFs in Mexico Are Dealing With RN",
        ],
      },
      {
        label: "Type",
        value: "Viral video / AI hoax meme",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "TikTok @daniela230997 · 14 Nov 2026",
        href: "https://www.tiktok.com/@daniela230997/video/7708139675201883413",
      },
      {
        label: "Fact-check",
        value: "Snopes: AI fake · 17 Nov 2026",
        href: "https://www.snopes.com/fact-check/video-pterodactyl-mexico/",
      },
      {
        label: "Peak wave",
        value: "14–17 Nov 2026",
      },
      {
        label: "Related",
        value: [
          "Before GTA 6",
          "AI cryptid sightings",
          "Jaime Maussan UFO clips",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "X", "Instagram", "Facebook"],
      },
      {
        label: "Verdict",
        value: "AI / entertainment — not a living pterosaur",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke treats the silhouette as if prehistoric reptiles casually commute over Mexican rooftops—“what MFs in Mexico are dealing with RN”—while other countries complain about minor problems. Remixes drop the clip into Before GTA 6 timelines or cartoon “they predicted it” edits.{{1}}{{2}}",
        "Reality check: pterosaurs (often mislabeled “flying dinosaurs”) have been extinct ~66 million years. Snopes highlighted shifting, gibberish building text (e.g. “Jalpan de”) as a classic AI artifact in the viral night clip. Local officials rejected living-creature claims; bird IDs (heron/pelican silhouettes) also circulated for other Juárez footage.{{3}}{{4}}",
      ],
      image: {
        src: "/pterodactyl-in-mexico/cover.jpg",
        alt: "Pterodactyl in Mexico meme overview",
        caption:
          "Meme fuel first, cryptozoology never — Forklore logs the clip as viral fiction.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 14 Nov 2026, @daniela230997 posted the dusk pterodactyl-over-town video that became the meme’s primary asset (~22.2M views in four days per contemporary tallies). Know Your Meme and later explainers describe it as presumably AI-generated or animated.{{1}}{{2}}",
        "Earlier November, UFO personality Jaime Maussan amplified other Juárez “flying reptile” clips; Civil Protection director Sergio Rodríguez publicly framed those as entertainment without scientific basis. That preexisting cryptid chatter helped the TikTok clip read as “another Mexico dinosaur sighting” even when synthetic.{{3}}{{4}}",
      ],
      link: {
        href: "https://www.snopes.com/fact-check/video-pterodactyl-mexico/",
        label: "Snopes — Does video show pterodactyl flying in Mexico? →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Source TikTok scale, remix formats, press amplification, and fact-check coverage.",
      ],
      gallery: [
        {
          id: "daniela",
          href: "https://www.tiktok.com/@daniela230997/video/7708139675201883413",
          kind: "video",
          source: "web",
          handle: "@daniela230997",
          author: "TikTok",
          text: "Pterodactyl over Mexican town",
          date: "14 Nov 2026",
          caption:
            "Source upload that crossed ~22M views and seeded the meme cluster — later flagged AI fake.",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
          views: "22M+",
        },
        {
          id: "rt-com",
          href: "https://x.com/RT_com/status/2122298694351683621",
          kind: "video",
          handle: "@RT_com",
          author: "X",
          text: "Flying dinosaur claims / large bird dismissal",
          date: "16 Nov 2026",
          caption:
            "Press/X amplification quoting officials who favored a large-bird read (~11k likes).",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
          views: "11K+ likes",
        },
        {
          id: "gio-palace",
          href: "https://www.instagram.com/p/DfyacZ0trJ8/",
          kind: "image",
          source: "web",
          handle: "@gio_palace",
          author: "Instagram",
          text: "Before GTA 6 + pterodactyl",
          date: "15 Nov 2026",
          caption:
            "Early remix slotting the clip into the Before GTA 6 delay joke (~46k likes).",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
        },
        {
          id: "jujutsu",
          href: "https://www.tiktok.com/@jujutsu.taisen/video/7708414595118959903",
          kind: "video",
          source: "web",
          handle: "@jujutsu.taisen",
          author: "TikTok",
          text: "Gravity Falls predicted it",
          date: "15 Nov 2026",
          caption:
            "Cartoon-prediction edit tying the sighting to Gravity Falls (~2.3M views).",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
          views: "2.3M+",
        },
        {
          id: "snopes",
          href: "https://www.snopes.com/fact-check/video-pterodactyl-mexico/",
          kind: "image",
          source: "web",
          handle: "Snopes",
          author: "Fact check",
          text: "AI fake — gibberish building text",
          date: "17 Nov 2026",
          caption:
            "Fact-check rating the viral night clip as AI-generated, not a living pterosaur.",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
        },
        {
          id: "newsnation",
          href: "https://www.newsnationnow.com/world/is-that-a-pterodactyl-over-mexico/",
          kind: "image",
          source: "web",
          handle: "NewsNation",
          author: "News",
          text: "Is there a pterodactyl over Juárez?",
          date: "Nov 2026",
          caption:
            "Mainstream pickup summarizing extinction timeline + fake-video findings.",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
        },
        {
          id: "kym",
          href: "https://knowyourmeme.com/memes/dinosaurs-pterodactyl-in-mexico",
          kind: "image",
          source: "web",
          handle: "Know Your Meme",
          author: "Documentation",
          text: "Dinosaurs / Pterodactyl In Mexico",
          date: "18 Nov 2026",
          caption:
            "Meme database entry covering the TikTok origin and remix lanes.",
          thumbnail: "/pterodactyl-in-mexico/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Within a day, Instagram and TikTok editors treated the silhouette as stock footage for Mexico-chaos gags. RT’s English X account even reshared related claims with a “large bird” official dismissal line, further boosting reach. Separate dinosaur-in-Mexico edits cleared millions of views.{{1}}{{2}}",
        "By 17 Nov, Snopes, NewsNation, and Spanish-language verificators were actively countering “real pterodactyl” framing. The meme nonetheless kept circulating as intentional fiction—AI cryptid as punchline.{{3}}{{4}}",
      ],
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Caption the silhouette with Mexico-chaos one-liners, Before GTA 6 countdowns, or “daily commute” jokes. Best practice for encyclopedic posts: label AI/fake up front so the gag doesn’t read as a genuine sighting.{{1}}{{3}}",
        "Avoid presenting the clip as zoological evidence. Pterosaur ≠ dinosaur is a common correction in serious replies.{{4}}",
      ],
      list: [
        "“What MFs in Mexico are dealing with RN” reaction caps",
        "Before GTA 6 timeline splices",
        "Cartoon “they predicted it” mashups",
        "AI-cryptid ironic reposts with fake labels",
        "Fact-check quote-posts correcting the claim",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{3}}"],
      list: [
        "Early Nov 2026 — Maussan / Juárez cryptid clips circulate; officials dismiss{{3}}",
        "14 Nov 2026 — @daniela230997 TikTok clears ~22M views{{1}}",
        "15 Nov 2026 — Before GTA 6 + Gravity Falls remixes{{1}}",
        "16 Nov 2026 — Broader press/X amplification{{2}}",
        "17 Nov 2026 — Snopes rates key viral cut as AI fake{{3}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Know Your Meme",
      title: "Dinosaurs / Pterodactyl In Mexico",
      href: "https://knowyourmeme.com/memes/dinosaurs-pterodactyl-in-mexico",
      date: "18 Nov 2026",
    },
    {
      id: 2,
      publisher: "NewsNation",
      title: "Is there a pterodactyl flying over Ciudad Juarez, Mexico?",
      href: "https://www.newsnationnow.com/world/is-that-a-pterodactyl-over-mexico/",
      date: "Nov 2026",
    },
    {
      id: 3,
      publisher: "Snopes",
      title: "Does video show pterodactyl flying in Mexico?",
      href: "https://www.snopes.com/fact-check/video-pterodactyl-mexico/",
      date: "17 Nov 2026",
    },
    {
      id: 4,
      publisher: "HoyMX",
      title: "Ciudad Juárez 'flying dinosaur' claims… AI findings",
      href: "https://hoymx.mx/society/ciudad-juarez-flying-dinosaur-claims-draw-bird-identifications-and-ai-findings/",
      date: "Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · This clip is AI / entertainment, not a live pterosaur · Not affiliated with the posters or platforms named",
} as const satisfies WikiArticleData;
