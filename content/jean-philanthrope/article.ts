import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const jeanPhilanthropeArticle = {
  title: "Jean Philanthrope",
  description:
    "Jean Phil (Jean Philanthrope) is the viral AI Frenchman who shadowboxes on TikTok—blond bob, houndstooth suit. He’s AI-generated, not a real person.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Jean Philanthrope]] (usually [[Jean Phil]], also “[[poodle man]]”) is an AI-generated French internet persona who went viral in mid-to-late September 2026. The look is locked: blond bob / bowl cut, curled handlebar moustache, brown [[houndstooth]] suit — compared to [[Lord Farquaad]] or a show poodle — then deadpan [[shadowboxing]] in apartments, Paris streets, parks, cafés, and tourist spots.{{1}}{{2}}{{3}}",
    "Accounts @jean_philanthrope on Instagram / TikTok / X posted the first apartment clip ~17 Sep 2026; street and park clips on 19 Sep cleared millions of views in days. Clips are widely tied to [[Higgsfield]]’s [[Genjutsu]] motion-transfer tool (launched ~1 Sep). Green-screen remixes cast him as a final boss; BBC Verify labeled the content AI-generated; Instagram bios linked an “official” [[$JEANPHIL]] Solana coin as copycats like [[Archibald Brown]] spun rival personas + tokens.{{1}}{{2}}{{10}}{{11}}",
  ],
  infobox: {
    title: "Jean Philanthrope",
    image: {
      src: "/jean-philanthrope/cover.jpg",
      alt: "Jean Philanthrope character collage — blond bob, moustache, houndstooth suit, shadowboxing poses",
      caption:
        "Signature look: Farquaad / poodle hair, curled moustache, brown suit, random shadowboxing.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Jean Phil", "Poodle man", "Jean Philanthrope AI"],
      },
      {
        label: "Type",
        value: "AI persona / viral character / edit template",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "Instagram @jean_philanthrope · 17 Sep 2026",
        href: "https://www.instagram.com/jean_philanthrope/",
      },
      {
        label: "Handle",
        value: "@jean_philanthrope",
        href: "https://www.tiktok.com/@jean_philanthrope",
      },
      {
        label: "Related",
        value: [
          "AI influencers",
          "Higgsfield Genjutsu",
          "$JEANPHIL",
          "Archibald Brown",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram", "X", "YouTube"],
      },
      {
        label: "Known for",
        value: "Silent shadowboxing in everyday places",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The format is almost a sitcom beat: Jean Phil sits with espresso and a croissant, eats oysters, stands under a tree or in front of a landmark — then rises into exaggerated shadowboxing with no dialogue. Music choices jump from French rap ([[La Fève]] “FINIS-LES”) to Nelly’s “Dilemma” to Kanye’s “Praise God.” The joke is the mismatch: couture seriousness vs. random punches.{{1}}{{3}}",
        "Memes rarely need a punchline caption — some clips land on “Oui Madame.” Editors greenscreen him into boss fights and music videos; Higgsfield clone farms spin blond-bob “Parisian gang” SPOs. Parallel track: “is he real?” threads, TikTok AI labels, and an Instagram bio that pointed buyers at $JEANPHIL on pump.fun.{{2}}{{10}}{{11}}",
      ],
      image: {
        src: "/jean-philanthrope/bbc.jpg",
        alt: "Jean Philanthrope still used in BBC coverage of the AI persona",
        caption:
          "Explainers framed him as an AI persona that fooled casual viewers — Farquaad hair is the tell.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Higgsfield shipped [[Genjutsu]] (~1 Sep 2026): motion transfer / object swap that paints a character over real phone footage while keeping camera shake — the reason Jean Phil’s streets and cafés feel “filmed,” not rendered. Earliest widely cited Jean Phil post: Instagram @jean_philanthrope on 17 Sep — apartment dance / shadowbox to “Serrure #5,” already in full costume.{{1}}{{3}}{{9}}{{11}}",
        "TikTok followed ~19 Sep with a street shadowbox to La Fève (~1.5M views / 110k likes in three days) and a Paris park clip under a tree to “Dilemma” (~5.6M / 561k). Through 21–22 Sep the formula locked: church + “Praise God,” espresso/croissant standup, oysters then boxing. X cross-posts (e.g. @JeanPhilMadame) and Instagram’s own “he’s a vibe” reply accelerated recognition.{{1}}{{3}}{{9}}",
      ],
      link: {
        href: "https://www.bbc.co.uk/bitesize/articles/zbq7dnb",
        label: "BBC Bitesize — Who is Jean Phil and is he real? →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Official TikTok hits, café X cross-post, AI-edit energy, YouTube deep dives, and Dexerto coin explainer — one card per beat.",
      ],
      gallery: [
        {
          id: "tt-street",
          href: "https://www.tiktok.com/@jean_philanthrope/video/7686908382413884704",
          kind: "video",
          source: "web",
          handle: "@jean_philanthrope",
          author: "TikTok",
          text: "Street shadowboxing (early viral)",
          date: "19 Sep 2026",
          caption:
            "Early street clip in the houndstooth suit — one of the posts that kicked TikTok numbers into seven figures.",
          thumbnail: "/jean-philanthrope/cover.jpg",
          views: "1.5M+",
        },
        {
          id: "tt-park",
          href: "https://www.tiktok.com/@jean_philanthrope/video/7687223092615171360",
          kind: "video",
          source: "web",
          handle: "@jean_philanthrope",
          author: "TikTok",
          text: "Paris park / Dilemma clip",
          date: "19 Sep 2026",
          caption:
            "Boxing under a tree, caption energy “She feels safe with the man” — ~5.6M views in three days in early tallies.",
          thumbnail: "/jean-philanthrope/popcreep.jpg",
          views: "5.6M+",
        },
        {
          id: "tt-cafe",
          href: "https://www.tiktok.com/@jean_philanthrope/video/7688017368492133665",
          kind: "video",
          source: "web",
          handle: "@jean_philanthrope",
          author: "TikTok",
          text: "Café espresso → shadowbox",
          date: "21 Sep 2026",
          caption:
            "Sit, sip, stand, punch — the cleanest version of the everyday → boxing template.",
          thumbnail: "/jean-philanthrope/x-cafe.png",
          views: "2.5M+",
        },
        {
          id: "x-cafe",
          href: "https://x.com/JeanPhilMadame/status/2102424808952566145",
          kind: "image",
          handle: "@JeanPhilMadame",
          author: "X cross-post",
          text: "Double G. Oui",
          date: "Sep 2026",
          caption:
            "Café / street stills recirculated on X — ~3.7M+ views / ~21k likes on this post.",
          thumbnail: "/jean-philanthrope/x-cafe.png",
          views: "3.7M+",
        },
        {
          id: "x-rap-ai",
          href: "https://x.com/sinx7z/status/2101469796835512803",
          kind: "video",
          handle: "@sinx7z",
          author: "AI edit",
          text: "jean phil chosen (rap MV edit)",
          date: "19 Sep 2026",
          caption:
            "Early fan/AI music-video treatment that showed how fast the face became a remixable asset (~500k+ views).",
          thumbnail: "/jean-philanthrope/cover.jpg",
          views: "500K+",
        },
        {
          id: "yt-scam",
          href: "https://www.youtube.com/watch?v=gIaFCy6-UDM",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Investigation",
          text: "Inside an AI Influencer Scam Network",
          date: "2026",
          caption:
            "Traces Jean Phil-style SPOs, Higgsfield pipelines, and meme-coin wallet cash-outs around the persona farm.",
          thumbnail: "/jean-philanthrope/yt-scam.jpg",
        },
        {
          id: "yt-formula",
          href: "https://www.youtube.com/watch?v=ketIzKnJoI4",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Tutorial / explain",
          text: "I Copied Jean Phil’s AI Influencer Formula",
          date: "2026",
          caption:
            "Creator explainers tying the look to Higgsfield / Genjutsu workflows after Instagram itself replied on a reel.",
          thumbnail: "/jean-philanthrope/yt-formula.jpg",
        },
        {
          id: "dexerto-cover",
          href: "https://www.dexerto.com/tiktok/who-is-jean-phil-ai-character-behind-multimillion-dollar-meme-coin-sparks-fake-persona-trend-3412528/",
          kind: "image",
          source: "web",
          handle: "Dexerto",
          author: "Explainer",
          text: "Jean Phil + multimillion meme coin",
          date: "25 Sep 2026",
          caption:
            "Dexerto frame: AI persona, Instagram bio token link, and the Archibald Brown copycat wave.",
          thumbnail: "/jean-philanthrope/dexerto.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Within days of the 19 Sep TikTok burst, Instagram tallies crossed ~228k followers (Dexerto, 25 Sep); BBC later cited ~286k TikTok / ~264k Instagram and a September clip past ~16M likes. Official Instagram’s “he’s a vibe” reply became a talking point in clone tutorials.{{2}}{{9}}{{10}}",
        "Pipeline talk centered on Genjutsu: take a real viral dance / walk, swap the body for Jean Phil, keep the shake. Higgsfield later used @JeanPhilMadame in AI-influencer marketing (~2–5 Oct). Clone farms and English rival [[Archibald Brown]] (“Jean’s got a croissant, I’ve got hands”) proved the template: face + gag + feud + coin.{{4}}{{9}}{{10}}{{11}}",
        "$JEANPHIL (Solana / pump.fun) sat in the Instagram bio as “official” token. Dexerto clocked ~$8.8M market-cap headline on 25 Sep (pool liquidity far smaller); NOS put the peak near ~€10M / ~$11M, with creator trading fees on the order of ~$250k rather than a clean on-chain dump. Cybernews likewise said classic pump-and-dump proof was thin — volatility and risk still extreme. BBC Verify: creators denied inventing him *to* sell coins. Not investment advice.{{2}}{{10}}{{11}}{{12}}",
      ],
      link: {
        href: "https://www.dexerto.com/tiktok/who-is-jean-phil-ai-character-behind-multimillion-dollar-meme-coin-sparks-fake-persona-trend-3412528/",
        label: "Dexerto — Jean Phil, $JEANPHIL & fake-persona trend →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Default use: drop Jean Phil into a new backdrop or soundtrack and keep the deadpan boxing — optional “Oui Madame.” Variants cast him as final boss, safe boyfriend (“she feels safe with the man”), or croissant-era French NPC. Archibald Brown-style rivals extend the joke into scripted feuds.{{1}}{{3}}{{10}}",
        "Meta layer: argue AI vs real, screenshot vanishing props, reverse-image stills, or warn about meme-coin bios. Treat $JEANPHIL headlines as hype metrics, not creator cash. Forklore documents the character and discourse — not a buy signal.{{2}}{{12}}",
      ],
      list: [
        "Everyday setting → sudden silent shadowboxing (+ Oui Madame)",
        "Genjutsu / green-screen “final boss” and music-video inserts",
        "“Is Jean Phil AI?” / poodle-man recognition bait",
        "Persona + token formula (Jean Phil → Archibald Brown clones)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{10}}{{11}}"],
      list: [
        "~1 Sep 2026 — Higgsfield Genjutsu launches (motion transfer / swap){{9}}{{11}}",
        "17 Sep 2026 — First widely cited Instagram apartment shadowbox{{1}}{{3}}{{10}}",
        "19 Sep 2026 — TikTok street + park Dilemma clips go multi-million{{1}}{{3}}",
        "19–25 Sep 2026 — AI-edit wave; $JEANPHIL in bio; Archibald Brown copycats{{10}}{{11}}",
        "25 Sep 2026 — Dexerto: ~$8.8M JEANPHIL mcap headline; rival tokens{{10}}",
        "Early Oct 2026 — BBC: AI-generated; Higgsfield cites Jean Phil in influencer promo{{2}}{{11}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Pop Creep",
      title: "Jean Philanthrope or Jean Phil Meme Meaning and Origin",
      href: "https://popcreep.com/jean-philanthrope-or-jean-phil-meme-meaning-and-origin/",
      date: "23 Sep 2026",
    },
    {
      id: 2,
      publisher: "BBC Bitesize",
      title: "Who is Jean Philanthrope and is he real or AI?",
      href: "https://www.bbc.co.uk/bitesize/articles/zbq7dnb",
      date: "Oct 2026",
    },
    {
      id: 3,
      publisher: "GenZ Hype",
      title: "The ‘Jean Phil’ Meme, Explained (AI Boxer)",
      href: "https://genzhype.com/meme/jean-phil/",
      date: "2026",
    },
    {
      id: 4,
      publisher: "YouTube",
      title: "Inside an AI Influencer Scam Network",
      href: "https://www.youtube.com/watch?v=gIaFCy6-UDM",
      date: "2026",
    },
    {
      id: 5,
      publisher: "Süddeutsche Zeitung",
      title:
        "Wer steckt hinter Jean Phil? KI-Creator bewirbt fragwürdige Kryptowährungen",
      href: "https://www.sueddeutsche.de/wirtschaft/jean-phil-ki-creator-meme-coins-tiktok-geld-krypto-werbung-li.3565954",
      date: "2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@jean_philanthrope",
      href: "https://www.tiktok.com/@jean_philanthrope",
      date: "Sep 2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@JeanPhilMadame — Double G. Oui",
      href: "https://x.com/JeanPhilMadame/status/2102424808952566145",
      date: "Sep 2026",
    },
    {
      id: 8,
      publisher: "X",
      title: "@sinx7z — jean phil chosen AI edit",
      href: "https://x.com/sinx7z/status/2101469796835512803",
      date: "19 Sep 2026",
    },
    {
      id: 9,
      publisher: "YouTube",
      title: "I Copied Jean Phil’s AI Influencer Formula (It Works)",
      href: "https://www.youtube.com/watch?v=ketIzKnJoI4",
      date: "2026",
    },
    {
      id: 10,
      publisher: "Dexerto",
      title:
        "Who is Jean Phil? AI character behind multimillion-dollar meme coin sparks fake persona trend",
      href: "https://www.dexerto.com/tiktok/who-is-jean-phil-ai-character-behind-multimillion-dollar-meme-coin-sparks-fake-persona-trend-3412528/",
      date: "25 Sep 2026",
    },
    {
      id: 11,
      publisher: "NOS",
      title:
        "Dat gekke AI-personage op TikTok wil vooral dat je zijn crypto koopt",
      href: "https://nos.nl/artikel/2634186-dat-gekke-ai-personage-op-tiktok-wil-vooral-dat-je-zijn-crypto-koopt",
      date: "2026",
    },
    {
      id: 12,
      publisher: "Cybernews",
      title: "Jean Phil coin scam claims lack clear blockchain proof",
      href: "https://cybernews.com/ai-news/jean-phil-meme-coin-scam/",
      date: "2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported AI / crypto discourse · Not investment advice · Meme coins are high risk · Market-cap headlines ≠ creator cash · Character © operators of @jean_philanthrope · Screenshots © respective platforms / posters",
} satisfies WikiArticleData;
