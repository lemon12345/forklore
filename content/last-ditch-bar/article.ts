import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const lastDitchBarArticle = {
  title: "Last Ditch Bar",
  description:
    "Last Ditch is Greenfield’s ‘COVID-conscious lesbian bar.’ Its KN-95 / Saturday mask-optional fight went viral after a Boston Globe story—then it soft-closed.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Last Ditch Bar]] (Last Ditch Bar and Arts Venue) is a lesbian / queer basement bar in [[Greenfield, Massachusetts]] that opened in 2025 with a hard [[KN-95]] (or better) mask rule for immunocompromised and COVID-conscious patrons. On 31 Aug 2026 an Instagram “UPDATES!” carousel buried a line making Saturday nights [[mask optional]] — and the local comment war that followed became national meme fuel.{{1}}{{2}}",
    "The breakout was Annalisa Quinn’s [[Boston Globe]] Magazine feature (22 Sep 2026). The Globe’s X post cleared tens of millions of views; quote-tweets treated the clown-school founder, alt-text apology fail, and “mass disabling event” comments as surreal internet lore. TikTok essays, culture-war clips, and a unlocked [[Blocked and Reported]] episode on the 3+ hour accountability session followed. On 26 Oct 2026 the bar [[soft closed]] effective immediately while hunting co-owners or a ~$70k asset sale.{{1}}{{3}}{{10}}{{11}}",
  ],
  infobox: {
    title: "Last Ditch Bar",
    image: {
      src: "/last-ditch-bar/cover.png",
      alt: "Last Ditch Bar exterior or news photo associated with the viral mask-policy story",
      caption:
        "Western Mass. lesbian bar that became shorthand for mask-optional discourse after the Globe piece.",
      fit: "cover",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "COVID-conscious lesbian bar",
          "Last Ditch mask-optional drama",
          "Greenfield lesbian bar",
          "KN-95 lesbian bar",
        ],
      },
      {
        label: "Type",
        value: "Venue / discourse event / viral news meme",
      },
      { label: "Year", value: "2025 (open) · meme peak Sep 2026" },
      {
        label: "Location",
        value: "10 Fiske Ave, Greenfield, MA",
      },
      {
        label: "Viral spark",
        value: "Boston Globe Magazine · 22 Sep 2026",
        href: "https://www.bostonglobe.com/2026/09/22/magazine/greenfield-last-ditch-bar-backlash/",
      },
      {
        label: "Related",
        value: [
          "Mask mandates",
          "Ableism discourse",
          "Lesbian bar decline",
          "Purity politics",
        ],
      },
      {
        label: "Platforms",
        value: ["Instagram", "X", "TikTok", "YouTube", "Podcasts"],
      },
      {
        label: "Status",
        value: "Soft closing (Oct 2026) · seeking owners",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Two stories travel as one meme. The [[local]] story is a small queer venue trying to stay solvent: foot traffic down, unpaid staff, a $50k+ loan, one founder living in a car, another off to clown school — so management made Saturdays mask-optional after Chamber advice. The [[internet]] story is the Globe’s quotable detail dump: Instagram rage (“complicit in a mass disabling event”), an apology that lacked alt-text and restarted the ableism pile-on, a three-hour “accountability” mediation, and outsiders reading it as peak Western Mass. purity theater.{{1}}{{2}}{{5}}",
        "Memes mostly quote-react to the article rather than invent a new format: simulation tweets, “favorite article of all time,” BostonSatire “I can’t top this,” and endless TikTok sentence-by-sentence readings. Right-wing clips nicknamed it the “COVID conscious lesbian bar”; disability creators and outlets like KQED warned the same feed became [[algorithmic ableism]] bait once context dropped away.{{3}}{{6}}",
      ],
      image: {
        src: "/last-ditch-bar/cover.png",
        alt: "Photo associated with Last Ditch Bar viral coverage",
        caption:
          "Coverage image recirculated with timelines of the mask fight and later soft close.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Last Ditch opened ~2025 as a divey basement space “for dykes, transsexuals, gender freaks, workers, and their friends,” with KN-95-or-better required for the whole visit (except while actively eating/drinking in some tellings). Founders included Jackie Matellian and housemates in their mid-20s; early nights were busy, then attendance and cover-fee collection collapsed.{{1}}{{2}}",
        "On 31 Aug 2026 the Instagram updates post said, with love, that Saturday nights would be mask optional for “immunocompromised disabled divas.” Hundreds of comments accused the bar of ableism, eugenics, and killing disabled people for revenue; some threatened the venue. A 2 Sep apology for “passive and dismissive tone” omitted alt-text and triggered a second round. An ~11 Sep community / mediation session on the dance floor and Zoom ran 3+ hours; Matellian described living in her vehicle and a ~$50k loan — the same session Blocked and Reported later sat through and unlocked after the Globe went nuclear.{{1}}{{4}}{{11}}",
      ],
      link: {
        href: "https://www.bostonglobe.com/2026/09/22/magazine/greenfield-last-ditch-bar-backlash/",
        label: "Boston Globe Magazine — original feature →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Globe launch post, peak quote-tweets, soft-close coverage still, and YouTube rundowns — one card per beat.",
      ],
      gallery: [
        {
          id: "x-globe",
          href: "https://x.com/BostonGlobe/status/2102398080590979328",
          kind: "image",
          handle: "@BostonGlobe",
          author: "Boston Globe",
          text: "Lesbian bar eased mask mandate…",
          date: "22 Sep 2026",
          caption:
            "Launch post for Quinn’s Magazine story — ~31M+ views; the meme’s main distribution node.",
          thumbnail: "/last-ditch-bar/globe-card.jpg",
          views: "31M+",
        },
        {
          id: "x-simulation",
          href: "https://x.com/fthinlttlefreak/status/2102466337214005632",
          kind: "image",
          handle: "@fthinlttlefreak",
          author: "Quote-tweet",
          text: "we are all living in a simulation",
          date: "22 Sep 2026",
          caption:
            "Disbelief caption on the Globe link — ~2.5M+ views / ~43k likes in early tallies.",
          thumbnail: "/last-ditch-bar/globe-card.jpg",
          views: "2.5M+",
        },
        {
          id: "x-favorite",
          href: "https://x.com/SirajAHashmi/status/2102502588000403901",
          kind: "image",
          handle: "@SirajAHashmi",
          author: "Quote-tweet",
          text: "favorite article of all time",
          date: "22 Sep 2026",
          caption:
            "Excerpt + awe caption that pushed the piece further into main-character X (~1.5M+ views / ~53k likes).",
          thumbnail: "/last-ditch-bar/globe-card.jpg",
          views: "1.5M+",
        },
        {
          id: "x-satire",
          href: "https://x.com/BostonSatire/status/2102379287173103694",
          kind: "image",
          handle: "@BostonSatire",
          author: "Parody account",
          text: "I can’t top this",
          date: "22 Sep 2026",
          caption:
            "Boston Globe parody account shrugs at the story — ~6.5M+ views in later tallies.",
          thumbnail: "/last-ditch-bar/cover.png",
          views: "6.5M+",
        },
        {
          id: "x-maxwell",
          href: "https://x.com/maxwelltani/status/2102798262642082120",
          kind: "image",
          handle: "@maxwelltani",
          author: "Max Tani",
          text: "best performing story of the year",
          date: "23 Sep 2026",
          caption:
            "Staff note leak: ~1,000 new Globe subscriptions in a day; managing editor called it the year’s best performer (~5.7M+ views).",
          thumbnail: "/last-ditch-bar/globe-card.jpg",
          views: "5.7M+",
        },
        {
          id: "soft-close-still",
          href: "https://www.theguardian.com/us-news/2026/oct/26/last-ditch-lesbian-bar-closing",
          kind: "image",
          source: "web",
          handle: "The Guardian",
          author: "Soft close",
          text: "Seeking new owners / soft close",
          date: "26 Oct 2026",
          caption:
            "Instagram: soft close effective immediately; booked events continue; ~$70k equipment/inventory package; co-op board still missing.",
          thumbnail: "/last-ditch-bar/soft-close.jpg",
        },
        {
          id: "yt-meltdown",
          href: "https://www.youtube.com/watch?v=BSvojVMwfSg",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Explainer",
          text: "The Lesbian Bar Meltdown That Broke the Internet",
          date: "Sep 2026",
          caption:
            "Recap of the Instagram update, Globe virality, and why the details read as meme-ready.",
          thumbnail: "/last-ditch-bar/yt-meltdown.jpg",
        },
        {
          id: "yt-brett",
          href: "https://www.youtube.com/watch?v=-nVFUfy6UNE",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Reaction cut",
          text: "Lesbian Bar Goes To War Over ONE Mask Optional Night",
          date: "Sep 2026",
          caption:
            "Culture-war reaction format that helped the “COVID conscious lesbian bar” nickname travel outside queer Twitter.",
          thumbnail: "/last-ditch-bar/yt-brett.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Before 22 Sep the fight was mostly local Instagram and Pioneer Valley queer networks. Quinn’s Globe Magazine piece + @BostonGlobe’s post (~17M views in a day, later tallies >30M) broke containment. Same-day quote posts (@fthinlttlefreak, @SirajAHashmi, @BostonSatire “I can’t top this”) and @maxwelltani’s report that the piece drove ~1,000 new subscriptions and was “by far” the Globe’s best-performing story of the year locked it as a shareable object.{{1}}{{3}}{{12}}{{13}}",
        "Blocked and Reported unlocked its premium episode on the never-ending accountability session the same day the Globe exploded, giving outsiders the raw Zoom/in-person struggle-session audio. TikTok filled with LGBTQ+ video essays and “only in Western Mass” jokes; Newsweek, Forbes, DIVA, and KQED reframed communications crisis, lesbian-bar scarcity, or algorithmic ableism.{{5}}{{6}}{{11}}",
        "On 26 Oct 2026 Last Ditch posted that it was soft closing effective immediately: regular hours off, booked events (comedy, karaoke, Club LD, even a planned “Yuriween”) still on; seeking co-owners or a full sale (~$70k furniture/equipment/inventory/socials) after failing to staff a worker co-op board. Guardian and local coverage made “RIP Last Ditch” a second meme beat.{{2}}{{10}}",
      ],
      image: {
        src: "/last-ditch-bar/soft-close.jpg",
        alt: "Last Ditch Bar exterior photo used in soft-close coverage",
        caption:
          "Soft-close wave (26 Oct 2026): pass-it-on Instagram copy + hunt for new ownership through winter.",
      },
      link: {
        href: "https://www.blockedandreported.org/p/unlocked-premium-last-ditch-bar-and",
        label: "Blocked and Reported — unlocked accountability-session episode →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Online, “Last Ditch” is a punchline for [[community purity spirals]]: a safety-first space eating itself when rules bend for survival. Posters screenshot Globe lines (clown school, living in a car, firebomb comments, missing alt-text) more than they invent image macros.{{1}}{{3}}",
        "Competing reads: critics of the backlash call it anti-business cult energy; defenders say immunocompromised patrons lost a rare accessible night and then watched strangers laugh. Forklore documents the viral formats and reported timeline — not a verdict on mask policy.{{5}}{{6}}",
      ],
      list: [
        "Quote-tweet / “simulation” reactions to the Globe article",
        "TikTok essay / sentence-by-sentence readings",
        "“COVID conscious lesbian bar” nickname clips",
        "Soft-close / RIP lesbian bar + “pass it on” Instagram posts (Oct 2026)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{10}}{{11}}"],
      list: [
        "2025 — Last Ditch opens in Greenfield with KN-95-or-better policy{{1}}{{2}}",
        "31 Aug 2026 — Instagram: Saturdays become mask optional{{1}}",
        "2 Sep 2026 — Apology post; alt-text gap renews criticism{{1}}",
        "~11 Sep 2026 — 3+ hour community / accountability session (in-person + Zoom){{1}}{{11}}",
        "22 Sep 2026 — Boston Globe Magazine feature; X breakout; BaR unlocks episode{{1}}{{3}}{{11}}",
        "23 Sep 2026 — @maxwelltani: ~1k new subs / “best performing story of the year”{{13}}",
        "Late Sep 2026 — TikTok / YouTube wave; Forbes communications framing{{5}}",
        "26 Oct 2026 — Soft close effective immediately; seeking co-owners / ~$70k sale{{2}}{{10}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Boston Globe Magazine",
      title:
        "A Western Mass. lesbian bar required KN-95 masks. When it changed the rules, all hell broke loose",
      href: "https://www.bostonglobe.com/2026/09/22/magazine/greenfield-last-ditch-bar-backlash/",
      date: "22 Sep 2026",
    },
    {
      id: 2,
      publisher: "Newsweek",
      title:
        "Last Ditch Bar Timeline: From Viral Mask Mandate Controversy to Closure",
      href: "https://www.newsweek.com/last-ditch-lesbian-bar-closing-after-viral-mask-mandate-controversy-12623082",
      date: "27 Oct 2026",
    },
    {
      id: 3,
      publisher: "X",
      title: "@BostonGlobe — Greenfield lesbian bar mask story",
      href: "https://x.com/BostonGlobe/status/2102398080590979328",
      date: "22 Sep 2026",
    },
    {
      id: 4,
      publisher: "DIVA Magazine",
      title:
        "Here’s what you need to know about the lesbian bar drama taking over TikTok",
      href: "https://diva-magazine.com/2026/09/28/heres-what-you-need-to-know-about-the-lesbian-bar-drama-taking-over-tiktok/",
      date: "28 Sep 2026",
    },
    {
      id: 5,
      publisher: "Forbes",
      title:
        "How Last Ditch Bar’s Mask Policy Shift Became A Communications Crisis",
      href: "https://www.forbes.com/sites/codyluongo/2026/09/25/how-last-ditch-bars-mask-policy-backlash-became-a-communications-crisis/",
      date: "25 Sep 2026",
    },
    {
      id: 6,
      publisher: "KQED",
      title:
        "Sickfluencers, the Covid-Conscious Lesbian Bar and the Algorithmic Ableism Trap",
      href: "https://www.kqed.org/news/12109252/sickfluencers-the-covid-conscious-lesbian-bar-and-the-algorithmic-ableism-trap",
      date: "2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@fthinlttlefreak — simulation quote-tweet",
      href: "https://x.com/fthinlttlefreak/status/2102466337214005632",
      date: "22 Sep 2026",
    },
    {
      id: 8,
      publisher: "X",
      title: "@SirajAHashmi — favorite article quote-tweet",
      href: "https://x.com/SirajAHashmi/status/2102502588000403901",
      date: "22 Sep 2026",
    },
    {
      id: 9,
      publisher: "YouTube",
      title: "The Lesbian Bar Meltdown That Broke the Internet",
      href: "https://www.youtube.com/watch?v=BSvojVMwfSg",
      date: "Sep 2026",
    },
    {
      id: 10,
      publisher: "The Guardian",
      title:
        "Massachusetts lesbian bar makes frantic effort to find new owners after relaxing masking policy",
      href: "https://www.theguardian.com/us-news/2026/oct/26/last-ditch-lesbian-bar-closing",
      date: "26 Oct 2026",
    },
    {
      id: 11,
      publisher: "Blocked and Reported",
      title: "UNLOCKED: Last Ditch Bar And The Never-Ending Accountability Session",
      href: "https://www.blockedandreported.org/p/unlocked-premium-last-ditch-bar-and",
      date: "22 Sep 2026",
    },
    {
      id: 12,
      publisher: "X",
      title: "@BostonSatire — I can’t top this",
      href: "https://x.com/BostonSatire/status/2102379287173103694",
      date: "22 Sep 2026",
    },
    {
      id: 13,
      publisher: "X",
      title: "@maxwelltani — best performing Globe story of the year",
      href: "https://x.com/maxwelltani/status/2102798262642082120",
      date: "23 Sep 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents viral discourse and publicly reported timeline · Not legal or medical advice · Mask / accessibility debates remain contested · Screenshots © respective platforms / outlets · Last Ditch Bar and Arts Venue © its operators",
} satisfies WikiArticleData;
