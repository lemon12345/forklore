import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const myMoonMyManArticle = {
  title: "My Moon My Man",
  description:
    "My Moon My Man TikTok trend: couples slideshows stretch FINNEAS's Feist cover lyric across two photos—Billboard tracked a 61% stream bump for the 2007 original.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[My Moon My Man]] (also [[My Moon My Maaaaaan trend]]) is a 2026 TikTok couples slideshow sound and format: posters open on a selfie captioned “My Moon My Maaaa,” then swipe to a partner shot where the trailing “aaaaan” completes the line. The audio is usually [[FINNEAS]]’s cover of [[Feist]]’s 2007 single “My Moon My Man” (Amazon Music Original, Sep 2026 / Canadian Songwriters Hall of Fame performance)—not the original studio cut.{{1}}{{2}}",
    "Early Feist-only two-slides appeared in September; the stretched-vowel template that stuck landed with @grwelibelly on 7 Nov 2026 (~230k likes). @marnie_s04’s take cleared ~1.6M likes; pushback on song lore (@kirstennreads) and alignment tutorials followed. Billboard (18 Nov) reported Feist’s U.S. streams up 61% to 4.3M in a week, while FINNEAS’s cover later topped TikTok’s worldwide trending audio chart.{{1}}{{3}}{{4}}",
  ],
  infobox: {
    title: "My Moon My Man",
    image: {
      src: "/my-moon-my-man/cover.jpg",
      alt: "My Moon My Man TikTok couples slideshow trend cover",
      caption:
        "Two-slide couples format: stretched “my maaaaaan” bridges selfie to partner reveal.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "My Moon My Maaaaaan",
          "My Moon My Man trend",
          "FINNEAS My Moon My Man cover trend",
        ],
      },
      {
        label: "Type",
        value: "Sound / couples slideshow / participatory media",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "TikTok · FINNEAS cover of Feist (2007)",
      },
      {
        label: "Peak wave",
        value: "7–18 Nov 2026 (TikTok → charts)",
      },
      {
        label: "Related",
        value: [
          "Feist — My Moon My Man (2007)",
          "Heated Rivalry montage bump",
          "Couples photo slideshow trends",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram", "Streaming charts"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The hook is typography-as-choreography. Viewers swipe from “My Moon My Maaaa” on the poster’s face into the partner slide, where the remaining vowels finish “my man.” The drawn-out “aaaa” in FINNEAS’s delivery matches the swipe, so the caption feels continuous. Joke variants break the romance—falls, pets, unexpected second subjects—while still riding the same vowel stretch.{{1}}{{5}}",
        "Feist’s lyric is often summarized as love that is comforting and unpredictable at once; that gap fueled mid-trend pushback when slideshows treated the line as pure soft-launch fluff. Creators also argued about Feist original vs FINNEAS cover, CapCut/Canva alignment tricks, and whether TikTok’s editor was shifting text after post.{{2}}{{4}}",
      ],
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Feist released “My Moon My Man” in 2007; the track later gained a 2025–2026 streaming bump from the Canadian series [[Heated Rivalry]]. In September 2026, FINNEAS cut an Amazon Music Original cover ahead of Feist’s Canadian Songwriters Hall of Fame induction and performed it live—clips that seeded the sound TikTok would reuse.{{2}}{{3}}",
        "Mid-September posts such as @blvvxt_042’s Feist-only two-slide (“my moon” → “my moon my man”) prefigured the format without the carrying vowel. The viral grammar arrived 7 Nov 2026 with @grwelibelly: selfie, hand-hold reveal, FINNEAS audio, and “maaaaaa” stretched across frames (~230k likes). That upload is the earliest widely cited trend template.{{1}}{{6}}",
      ],
      link: {
        href: "https://www.tiktok.com/@grwelibelly/photo/7705506437400743199",
        label: "TikTok — @grwelibelly early stretched-caption template →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Proto Feist slide, breakout template, mega like-count, lore pushback, joke variant, and Billboard chart note.",
      ],
      gallery: [
        {
          id: "tt-blvvxt",
          href: "https://www.tiktok.com/@blvvxt_042/photo/7684836133896785185",
          kind: "video",
          source: "web",
          handle: "@blvvxt_042",
          author: "TikTok",
          text: "my moon / my moon my man (Feist)",
          date: "12 Sep 2026",
          caption:
            "Early two-slide variant on Feist’s original—no carrying vowel stretch yet.",
          thumbnail: "/my-moon-my-man/cover.jpg",
        },
        {
          id: "tt-grwelibelly",
          href: "https://www.tiktok.com/@grwelibelly/photo/7705506437400743199",
          kind: "video",
          source: "web",
          handle: "@grwelibelly",
          author: "TikTok",
          text: "My Moon My Maaaa → partner",
          date: "7 Nov 2026",
          caption:
            "Earliest widely cited trend template with FINNEAS cover (~230k likes).",
          thumbnail: "/my-moon-my-man/cover.jpg",
          views: "~230K likes",
        },
        {
          id: "tt-marnie",
          href: "https://www.tiktok.com/@marnie_s04/photo/7706255333907336479",
          kind: "video",
          source: "web",
          handle: "@marnie_s04",
          author: "TikTok",
          text: "Transitioning maaaaaan caption",
          date: "9 Nov 2026",
          caption:
            "High-engagement couples slideshow (~1.6M likes) that scaled the template.",
          thumbnail: "/my-moon-my-man/cover.jpg",
          views: "~1.6M likes",
        },
        {
          id: "tt-kirsten",
          href: "https://www.tiktok.com/@kirstennreads/video/7706607817574124830",
          kind: "video",
          source: "web",
          handle: "@kirstennreads",
          author: "TikTok",
          text: "Pushback on song lore",
          date: "10 Nov 2026",
          caption:
            "Critique that trend posters miss the lyric’s comforting-yet-unpredictable read (~195k likes).",
          thumbnail: "/my-moon-my-man/cover.jpg",
          views: "~195K likes",
        },
        {
          id: "tt-zizi",
          href: "https://www.tiktok.com/@zizigoeazy/photo/7708027536181185814",
          kind: "video",
          source: "web",
          handle: "@zizigoeazy",
          author: "TikTok",
          text: "Partner slip / fall punchline",
          date: "14 Nov 2026",
          caption:
            "Joke variant: second slide swaps pose for a fall (~1.9M likes in early tallies).",
          thumbnail: "/my-moon-my-man/cover.jpg",
          views: "~1.9M likes",
        },
        {
          id: "tt-k8yzin",
          href: "https://www.tiktok.com/@k8yzin/photo/7705683311896595725",
          kind: "video",
          source: "web",
          handle: "@k8yzin",
          author: "TikTok",
          text: "Couples slides without carrying caption",
          date: "8 Nov 2026",
          caption:
            "Early imitator (~99k likes) that skips the continuous vowel bridge.",
          thumbnail: "/my-moon-my-man/cover.jpg",
        },
        {
          id: "billboard",
          href: "https://www.billboard.com/music/chart-beat/feist-my-moon-my-man-goes-viral-trending-up-1236384986/",
          kind: "image",
          source: "web",
          handle: "Billboard",
          author: "Press",
          text: "Feist streams +61% to 4.3M",
          date: "18 Nov 2026",
          caption:
            "Trending Up note: U.S. on-demand streams for Feist’s original jump with the TikTok wave.",
          thumbnail: "/my-moon-my-man/cover.jpg",
        },
        {
          id: "umc-finneas",
          href: "https://www.universalmusic.ca/2026/11/20/finneas-releases-cover-of-feists-my-moon-my-man/",
          kind: "image",
          source: "web",
          handle: "Universal Music Canada",
          author: "Press",
          text: "FINNEAS cover wide release · TikTok #1 audio",
          date: "20 Nov 2026",
          caption:
            "Label note: cover hits No. 1 on TikTok’s worldwide trending audio after the slideshow surge.",
          thumbnail: "/my-moon-my-man/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Imitators piled in within 48 hours of @grwelibelly: @k8yzin (8 Nov), @marnie_s04’s 1.6M-like post (9 Nov), then lore critique from @kirstennreads (10 Nov). Joke breaks such as @zizigoeazy’s slip-and-fall reveal kept the vowel trick while dumping the soft-launch sincerity. Instagram Reels carried the same two-slide grammar by mid-November.{{1}}{{5}}",
        "On 18 Nov, Billboard’s Trending Up column tied the slideshow to a fresh Feist bump—4.3M U.S. streams for the week of 10–16 Nov, up 61%—and noted FINNEAS’s Amazon-exclusive cover roughly doubling in the same window. Universal Music Canada later framed a wide streaming release around the cover sitting at No. 1 on TikTok’s global trending audio chart.{{2}}{{3}}",
      ],
      link: {
        href: "https://www.billboard.com/music/chart-beat/feist-my-moon-my-man-goes-viral-trending-up-1236384986/",
        label: "Billboard — Feist ‘My Moon My Man’ Trending Up →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Standard: photo 1 = you + “My Moon My Maaaa”; photo 2 = partner + trailing “aaaaan.” Align in Canva/CapCut if TikTok’s in-app text drifts after post. Stretch “moon” O’s or flip who appears first as optional variants.{{1}}{{7}}",
        "Tone defaults to romantic soft-launch; joke versions replace the partner with a fail, friend, or pet. Lore-aware posters sometimes caption the unpredictable-love reading or swap back to Feist’s 2007 master.{{4}}{{5}}",
      ],
      list: [
        "Couples selfie → hand-hold / kiss reveal with vowel bridge",
        "Joke second slides (falls, fails, unexpected subjects)",
        "Feist-original vs FINNEAS-cover audio debates",
        "Canva / CapCut alignment workarounds",
        "Instagram Reel ports of the same two-frame caption",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "2007 — Feist releases “My Moon My Man”{{2}}",
        "Sep 2026 — FINNEAS Amazon Original + CSHOF performance; early Feist-only slides (@blvvxt_042, 12 Sep){{3}}{{6}}",
        "7 Nov 2026 — @grwelibelly stretched-caption template (~230k likes){{1}}",
        "9 Nov 2026 — @marnie_s04 version (~1.6M likes){{1}}",
        "10 Nov 2026 — @kirstennreads lore pushback (~195k likes){{4}}",
        "18 Nov 2026 — Billboard: Feist U.S. streams +61% to 4.3M week{{2}}",
        "20 Nov 2026 — Wide release notes; FINNEAS cover cited as TikTok #1 trending audio{{3}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "TikTok",
      title: "@grwelibelly — My Moon My Maaaa couples template",
      href: "https://www.tiktok.com/@grwelibelly/photo/7705506437400743199",
      date: "7 Nov 2026",
    },
    {
      id: 2,
      publisher: "Billboard",
      title: "Feist's 'My Moon My Man' Goes Viral Again From FINNEAS Cover & TikTok",
      href: "https://www.billboard.com/music/chart-beat/feist-my-moon-my-man-goes-viral-trending-up-1236384986/",
      date: "18 Nov 2026",
    },
    {
      id: 3,
      publisher: "Universal Music Canada",
      title: "FINNEAS releases cover of Feist's “My Moon My Man”",
      href: "https://www.universalmusic.ca/2026/11/20/finneas-releases-cover-of-feists-my-moon-my-man/",
      date: "20 Nov 2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@kirstennreads — song lore pushback",
      href: "https://www.tiktok.com/@kirstennreads/video/7706607817574124830",
      date: "10 Nov 2026",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@zizigoeazy — partner fall joke variant",
      href: "https://www.tiktok.com/@zizigoeazy/photo/7708027536181185814",
      date: "14 Nov 2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@blvvxt_042 — early Feist two-slide",
      href: "https://www.tiktok.com/@blvvxt_042/photo/7684836133896785185",
      date: "12 Sep 2026",
    },
    {
      id: 7,
      publisher: "The Tab",
      title: "How to actually do the 'My Moon My Man' TikTok trend",
      href: "https://thetab.com/2026/11/17/apparently-everyone-is-doing-the-my-moon-my-maaaaan-couples-trend-wrong-and-tiktok-is-unhappy",
      date: "17 Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with Feist, FINNEAS, Universal Music, Amazon Music, or TikTok · Screenshots © respective platforms / posters / rights holders",
} as const satisfies WikiArticleData;
