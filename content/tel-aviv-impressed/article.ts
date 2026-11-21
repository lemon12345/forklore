import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const telAvivImpressedArticle = {
  title: "Tel Aviv Impressed",
  description:
    "Tel Aviv Impressed is the 2026 Netanyahu blank-stare reaction meme — Ohio Impressed format used for sarcastic replies to Israel-related posts on TikTok.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Tel Aviv Impressed]] is a 2026 exploitable reaction image: a still of Israeli Prime Minister [[Benjamin Netanyahu]] with a blank expression, locked to the caption “*Tel Aviv Impressed*” (Tel Aviv being Israel’s most populous city). The joke is deadpan contrast — the caption says impressed; the face does not.{{1}}{{2}}",
    "The still remixed the earlier [[Ohio Impressed]] King Von reaction format that screenshotted out of late-2025 TikTok edits. An Imgflip template dated 24 Jan 2026 is among the earliest documented Netanyahu swaps; higher-quality GIFs then circulated on sticker/GIF hosts before TikTok edits pushed the format through early 2026. Online, posters drop it under clips they read as supportive of Israel or as carrying a tongue-in-cheek “spiritually Israeli” vibe — sometimes sincerely, often ironically.{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "Tel Aviv Impressed",
    image: {
      src: "/tel-aviv-impressed/cover.jpg",
      alt: "Tel Aviv Impressed meme — Benjamin Netanyahu blank stare with caption",
      caption:
        "Canonical still: blank Netanyahu close-up + “*Tel Aviv Impressed*” caption.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Tel Aviv Impressed meme",
          "Netanyahu Impressed",
          "Ohio Impressed Netanyahu variant",
        ],
      },
      {
        label: "Type",
        value: "Exploitable / reaction image",
      },
      { label: "Year", value: "2026 (format root 2025)" },
      {
        label: "Origin",
        value: "Imgflip template · 24 Jan 2026 (Ohio Impressed lineage)",
        href: "https://imgflip.com/meme/635340930/Tel-aviv-impressed",
      },
      {
        label: "Peak waves",
        value: "Jan–Feb 2026 template · early-2026 TikTok edits",
      },
      {
        label: "Related",
        value: [
          "Ohio Impressed",
          "City + Impressed swaps",
          "Squid Game–style edit screenshots",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Imgflip", "Giphy", "Tenor", "X", "Reddit"],
      },
      {
        label: "Known for",
        value: "Deadpan “impressed” caption vs. blank stare",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Most reaction faces sell one clear emotion. Tel Aviv Impressed sells mismatch: a formal, unreadable Netanyahu still under a loud “*Tel Aviv Impressed*” line that mimics the Ohio Impressed HUD-style caption. Drop it under a clip, stitch, or comment thread and the image does the editorializing without a long argument.{{1}}{{2}}",
        "Format-wise it sits in the same family as captioned video-edit screenshots (including Squid Game–style reaction stills): take a zoomed subject, stamp a place + adjective, then reuse the frame as a portable sticker. Once the Netanyahu swap stuck, editors also spun absurd city/place variants (e.g. Budapest Impressed, Little Saint James Impressed) that keep the same caption grammar.{{1}}{{2}}",
      ],
      image: {
        src: "/tel-aviv-impressed/popcreep.webp",
        alt: "Tel Aviv Impressed meme explainer still",
        caption:
          "Explainers frame it as a deadpan reaction: blank expression + dramatic city caption.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 11 Dec 2025, TikToker @music_4dayz posted a video edit with a slow zoom on rapper [[King Von]] captioned “*Ohio Impressed*” (~29.8k views in early tallies). Commenters screenshotted the beat as a reusable reaction; on 15 Dec 2025, Giphy user witherw uploaded an Ohio Impressed still that later tallies put past ~149k views. The phrase sits in a wider “Ohio + adjective” reaction lineage also associated with IShowSpeed edits.{{1}}{{2}}{{4}}",
        "On 24 Jan 2026, Imgflip listed a “Tel aviv impressed” meme page that swaps Von for Netanyahu and retitles the caption — one of the earliest dated public templates (whether it is the absolute first edit is unclear). A sharper still/GIF wave followed on GIF hosts around 4 Feb 2026, which is the version most comment-section stickers reuse.{{1}}{{2}}{{3}}",
      ],
      link: {
        href: "https://imgflip.com/meme/635340930/Tel-aviv-impressed",
        label: "Imgflip — Tel aviv impressed template →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Format parent, Imgflip template beat, GIF-host still, TikTok spread posts, and secondary explainers — one card per beat.",
      ],
      gallery: [
        {
          id: "ohio-parent",
          href: "https://giphy.com/gifs/king-impressed-von-Cs9xff11uykiWEqqRb",
          kind: "image",
          source: "web",
          handle: "Giphy",
          author: "Ohio Impressed parent",
          text: "*Ohio Impressed* King Von still",
          date: "Dec 2025",
          caption:
            "Parent format: King Von blank stare + “*Ohio Impressed*” caption that the Netanyahu swap copies.",
          thumbnail: "/tel-aviv-impressed/ohio-impressed.gif",
          views: "Giphy circulate",
        },
        {
          id: "imgflip-template",
          href: "https://imgflip.com/meme/635340930/Tel-aviv-impressed",
          kind: "image",
          source: "web",
          handle: "Imgflip",
          author: "Early template",
          text: "Tel aviv impressed generator page",
          date: "24 Jan 2026",
          caption:
            "Early dated public template: Netanyahu face swap + Tel Aviv caption (aka tags list 24 January 2026).",
          thumbnail: "/tel-aviv-impressed/cover.jpg",
        },
        {
          id: "reaction-still",
          href: "https://www.gif-vif.com/trending/tel-aviv-impressed-benjamin-netanyahu-gif",
          kind: "image",
          source: "web",
          handle: "GifVif",
          author: "GIF host mirror",
          text: "Tel Aviv Impressed Benjamin Netanyahu GIF",
          date: "28 Feb 2026",
          caption:
            "Higher-quality captioned still circulating on GIF/sticker mirrors after the Jan template.",
          thumbnail: "/tel-aviv-impressed/origin.jpg",
        },
        {
          id: "tiktok-ralf",
          href: "https://www.tiktok.com/@renditen.ralf",
          kind: "video",
          source: "web",
          handle: "@renditen.ralf",
          author: "TikTok edit",
          text: "Meme featured in multi-cut edit",
          date: "11 Feb 2026",
          caption:
            "Early-2026 TikTok reuse: edit that inserts the reaction still repeatedly (~69k views in early tallies).",
          thumbnail: "/tel-aviv-impressed/cover.jpg",
          views: "69K+ views",
        },
        {
          id: "tiktok-music",
          href: "https://www.tiktok.com/@music_4dayz",
          kind: "video",
          source: "web",
          handle: "@music_4dayz",
          author: "TikTok edit",
          text: "Good-ending edit opens on the still",
          date: "17 Feb 2026",
          caption:
            "Same creator lineage as Ohio Impressed: Feb edit that opens on Tel Aviv Impressed (~962k views in early tallies).",
          thumbnail: "/tel-aviv-impressed/cover.jpg",
          views: "962K+ views",
        },
        {
          id: "popcreep",
          href: "https://popcreep.com/tel-aviv-impressed-meme-origin-and-meaning/",
          kind: "image",
          source: "web",
          handle: "Pop Creep",
          author: "Explainer",
          text: "Meaning & origin writeup",
          date: "19 May 2026",
          caption:
            "Secondary explainer locking deadpan usage, Ohio Impressed parentage, and early-2026 spread.",
          thumbnail: "/tel-aviv-impressed/popcreep.webp",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/tel-aviv-impressed/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Tel Aviv Impressed card entry",
          date: "2 Oct 2026",
          caption:
            "Encyclopedia-style card summarizing meaning, Imgflip date, and Q1 2026 TikTok wave.",
          thumbnail: "/tel-aviv-impressed/card.webp",
        },
        {
          id: "yt-explainer",
          href: "https://www.youtube.com/watch?v=Wq0s2Wzm_rE",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Short explainer",
          text: "The Tel Aviv Impressed Meme…",
          date: "2026",
          caption:
            "Short recap of Ohio → Tel Aviv swap, TikTok spread, and place-name variants.",
          thumbnail: "/tel-aviv-impressed/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "After the January Imgflip listing, the still moved through GIF keyboards and sticker packs, then into TikTok comment culture. On 11 Feb 2026, @renditen.ralf posted an edit that cycles the meme (~69k views in early tallies). On 17 Feb 2026, @music_4dayz — the same account tied to the Ohio Impressed edit — opened a schizo-edit on the Tel Aviv still (~962k views in early tallies).{{1}}{{2}}{{5}}",
        "From there it behaved like other portable reaction stickers: comment replies, stitch punchlines, and low-effort slideshows. Remix culture also spun dozens of place-name Impressed variants; those keep the blank-stare + “*[Place] Impressed*” grammar even when the geopolitics drop out. Reception mixed — some readers treat it as dry internet satire, others as too politically loaded — which itself kept explainers and “what does this mean?” posts circulating.{{1}}{{2}}",
      ],
      link: {
        href: "https://www.tiktok.com/@music_4dayz",
        label: "TikTok — @music_4dayz (Ohio / Tel Aviv edit lineage) →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Literal read of the caption: someone in Tel Aviv (or, by meme grammar, an Israel-coded observer) is impressed. Online read: sarcastic acknowledgment or dry judgment of a post the poster tags as Israel-supportive, Israel-coded, or “spiritually Israeli.” The blank face does the sarcasm; the caption supplies the fake praise.{{1}}{{2}}",
        "Practical moves: paste as a comment sticker; open an edit on the still; or swap the city name while keeping Netanyahu (or swap the face entirely) to make a new Impressed variant. This entry documents the format and reported usage — not an endorsement of any political claim attached to the posts people reply to.{{1}}",
      ],
      list: [
        "Sarcastic reaction under clips read as pro-Israel / Israel-coded",
        "Deadpan sticker in comment sections instead of a written argument",
        "Video-edit opener or recurring cutaway",
        "Place-name remixes (Budapest Impressed, Little Saint James Impressed, …)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}"],
      list: [
        "11 Dec 2025 — @music_4dayz TikTok edit with King Von + “*Ohio Impressed*”{{4}}",
        "15 Dec 2025 — Giphy user witherw uploads Ohio Impressed screenshot{{4}}",
        "24 Jan 2026 — Imgflip “Tel aviv impressed” template / Netanyahu swap listed{{3}}",
        "4 Feb 2026 — Higher-quality still/GIF wave on GIF hosts (Tenor-era circulate){{1}}{{2}}",
        "11 Feb 2026 — @renditen.ralf TikTok edit features the meme repeatedly{{5}}",
        "17 Feb 2026 — @music_4dayz edit opens on Tel Aviv Impressed{{5}}",
        "19 May 2026 — Pop Creep meaning/origin explainer{{1}}",
        "2 Oct 2026 — MyMemeCards encyclopedia-style card entry{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Pop Creep",
      title: "Tel Aviv Impressed Meme Origin and Meaning",
      href: "https://popcreep.com/tel-aviv-impressed-meme-origin-and-meaning/",
      date: "19 May 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Tel Aviv Impressed meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/tel-aviv-impressed/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "Imgflip",
      title: "Tel aviv impressed meme template",
      href: "https://imgflip.com/meme/635340930/Tel-aviv-impressed",
      date: "24 Jan 2026",
    },
    {
      id: 4,
      publisher: "Giphy",
      title: "Ohio Impressed / King Von impressed GIF circulate",
      href: "https://giphy.com/gifs/king-impressed-von-Cs9xff11uykiWEqqRb",
      date: "Dec 2025",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@music_4dayz — edit lineage (Ohio Impressed → Tel Aviv Impressed)",
      href: "https://www.tiktok.com/@music_4dayz",
      date: "2025–2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@renditen.ralf — early Tel Aviv Impressed edit reuse",
      href: "https://www.tiktok.com/@renditen.ralf",
      date: "11 Feb 2026",
    },
    {
      id: 7,
      publisher: "YouTube",
      title: "The Tel Aviv Impressed Meme… (short explainer)",
      href: "https://www.youtube.com/watch?v=Wq0s2Wzm_rE",
      date: "2026",
    },
    {
      id: 8,
      publisher: "GifVif",
      title: "Tel Aviv Impressed Benjamin Netanyahu GIF",
      href: "https://www.gif-vif.com/trending/tel-aviv-impressed-benjamin-netanyahu-gif",
      date: "28 Feb 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Reaction still © respective uploaders / news-photo sources · Screenshots © respective platforms · Not affiliated with depicted individuals or governments · Encyclopedia entry only — not advocacy",
} satisfies WikiArticleData;
