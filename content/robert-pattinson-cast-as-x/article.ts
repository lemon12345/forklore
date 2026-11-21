import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const robertPattinsonCastAsXArticle = {
  title: "Robert Pattinson Cast As X",
  description:
    "Robert Pattinson Cast As X memes: fake casting announcements after the Nov 2026 James Bond reveal—Snoopy, NFL QB, Nvidia CEO, and every role left.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Robert Pattinson Cast As X]] (also [[Robert Pattinson casting announcement parodies]], [[Robert Pattinson playing every role]]) is a 2026 snowclone of fake casting notices that joke the English actor is absorbing every remaining job in entertainment—and sometimes outside it. The wave detonated on 16 Nov 2026 when the official James Bond account [[@007]] posted “Robert Pattinson is James Bond” (~69.1M views, ~1.35M likes).{{1}}{{2}}",
    "Within hours, quote-posts and mock bulletins cast him as everyone from Muhammad Ali to Snoopy, New England Patriots quarterback, Nvidia CEO, and Madoka Kaname. Tone sits between affection and mock alarm at his mid-2020s slate (Batman, The Odyssey, Dune, and more), close in spirit to 2021’s [[Chris Pratt Voices Everyone]]. Early catalyst: @bigguccicraigy’s same-day “Muhammad Ali next” joke.{{2}}{{4}}",
  ],
  infobox: {
    title: "Robert Pattinson Cast As X",
    image: {
      src: "/robert-pattinson-cast-as-x/cover.jpg",
      alt: "Robert Pattinson Cast As X fake casting announcement meme cover",
      caption:
        "Snowclone: paste Pattinson into the next absurd role after the Bond reveal.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Robert Pattinson casting announcement parodies",
          "Robert Pattinson playing every role",
          "Pattinson is cast as everyone",
        ],
      },
      {
        label: "Type",
        value: "Snowclone / parody casting / format",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "X · @007 Bond announcement · 16 Nov 2026",
        href: "https://x.com/007/status/2122343950308540474",
      },
      {
        label: "Peak wave",
        value: "16–18 Nov 2026 (X / TikTok / Reddit)",
      },
      {
        label: "Related",
        value: [
          "Chris Pratt Voices Everyone",
          "Actor Cast As X posters",
          "James Bond casting discourse",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "TikTok", "Reddit", "Instagram"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The format usually mimics a studio press blast or sports breaking-news graphic: Pattinson headshot or still, plus a deadpan line announcing him for a role that clashes with tone, franchise, or job description. Film and TV remain the default (anime leads, comic animals), but the joke happily exits Hollywood—NFL starter, tech CEO—whenever “taking everyone’s job” needs a sharper punch.{{4}}{{7}}",
        "Read as affectionate exhaustion more than smear. Posters treat his crowded 2020s filmography as proof he will say yes to anything iconic, then invent the next yes. Reaction videos on TikTok often list Twilight → Batman → Bond as a “greed” montage before the fake-casting punchline.{{3}}{{4}}",
      ],
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 16 Nov 2026, @007—the official James Bond account—announced Pattinson as the franchise’s next 007 with a photo and the plain caption “Robert Pattinson is James Bond.” The post rocketed past 69 million views and a million-plus likes in under two days, crystallizing years of Bond-recasting speculation under Amazon MGM.{{1}}",
        "Later that day, X @bigguccicraigy quote-posted the reveal joking he would play Muhammad Ali next (~114k likes, 1.2M+ views)—the earliest widely cited meme beat in the snowclone. The Bond news was the catalyst event; that one-liner taught the timeline how to keep casting him.{{2}}",
      ],
      link: {
        href: "https://x.com/007/status/2122343950308540474",
        label: "X — @007 “Robert Pattinson is James Bond” →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Official Bond reveal, early quote-joke, TikTok greed bit, and major fake castings across film, sports, and tech.",
      ],
      gallery: [
        {
          id: "x-007",
          href: "https://x.com/007/status/2122343950308540474",
          kind: "image",
          handle: "@007",
          author: "James Bond",
          text: "Robert Pattinson is James Bond",
          date: "16 Nov 2026",
          caption:
            "Official casting announcement (~69.1M views, ~1.35M likes) that sparked the snowclone.",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
          views: "~69.1M views",
        },
        {
          id: "x-bigguccicraigy",
          href: "https://x.com/bigguccicraigy/status/2122354472227594358",
          kind: "image",
          handle: "@bigguccicraigy",
          author: "X",
          text: "finna play Muhammad Ali next",
          date: "16 Nov 2026",
          caption:
            "Early quote-post joking Ali would be next (~114k likes)—template for “cast as X.”",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
          views: "~114K likes",
        },
        {
          id: "tt-nateoaks",
          href: "https://www.tiktok.com/@nateoaks/video/7708893007927430413",
          kind: "video",
          source: "web",
          handle: "@nateoaks",
          author: "TikTok",
          text: "Pattinson “greed” for iconic roles",
          date: "16 Nov 2026",
          caption:
            "Reaction clip stacking Twilight / Batman / Bond as proof he takes every franchise (~581k views).",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
          views: "~581K views",
        },
        {
          id: "x-meduka",
          href: "https://x.com/meduka_ebooks/status/2122681877194747993",
          kind: "image",
          handle: "@meduka_ebooks",
          author: "X",
          text: "Cast as Madoka Kaname",
          date: "17 Nov 2026",
          caption:
            "Fake Guillermo del Toro Madoka Magica casting (~237k views, ~20.7k likes).",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
        },
        {
          id: "x-dailysnoopys",
          href: "https://x.com/DailySnoopys/status/2122765461515567328",
          kind: "image",
          handle: "@DailySnoopys",
          author: "X",
          text: "Robert Pattinson is Snoopy",
          date: "17 Nov 2026",
          caption:
            "Live-action Snoopy bulletin; follow-up joked he barely beat Nicholas Hoult (~630k views).",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
          views: "~630K views",
        },
        {
          id: "x-onyxodds",
          href: "https://x.com/OnyxOdds/status/2122751629313143010",
          kind: "image",
          handle: "@OnyxOdds",
          author: "X",
          text: "Patriots starting QB",
          date: "17 Nov 2026",
          caption:
            "Fake New England Patriots QB announcement (~1.1M views, ~56k likes).",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
          views: "~1.1M views",
        },
        {
          id: "reddit-nvidia",
          href: "https://www.reddit.com/r/dankmemes/comments/1xykgpv/guy_shed_that_twilight_shadow_off_his_career_like/",
          kind: "image",
          source: "web",
          handle: "r/dankmemes",
          author: "Reddit",
          text: "Incoming Nvidia CEO",
          date: "17 Nov 2026",
          caption:
            "Breaking-news parody naming Pattinson Nvidia’s next CEO (~4.5k upvotes in early tallies).",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
        },
        {
          id: "usatoday",
          href: "https://www.usatoday.com/story/entertainment/internet-culture/2026/11/17/robert-pattinson-james-bond-007-memes-internet-social-media/92824320007/",
          kind: "image",
          source: "web",
          handle: "USA TODAY",
          author: "Press",
          text: "Bond casting sparks ‘greed’ memes",
          date: "17 Nov 2026",
          caption:
            "Mainstream writeup tracking the “cast as everyone / taking jobs” joke stack.",
          thumbnail: "/robert-pattinson-cast-as-x/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "17 Nov stacked the most-quoted fakes: @meduka_ebooks’ Madoka casting, @DailySnoopys’ Snoopy bulletin, and @OnyxOdds’ Patriots QB graphic. Reddit mirrors pushed the same grammar into dankmemes/memes—including an Nvidia CEO parody—while TikTok reaction edits narrated the “greed” framing for FYP audiences.{{3}}{{5}}{{6}}{{7}}",
        "Press explainers (USA TODAY and others) treated the snowclone as the default internet response to the Bond news within a day, locking “Robert Pattinson cast as X” as searchable shorthand beside older Actor Cast As X poster gags.{{4}}{{8}}",
      ],
      link: {
        href: "https://x.com/DailySnoopys/status/2122765461515567328",
        label: "X — @DailySnoopys Pattinson as Snoopy →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Pick an incongruous role or job, announce it in press-release voice, and attach a Pattinson still. The more mismatched the casting (anime heroine, cartoon beagle, NFL starter), the cleaner the punchline.{{4}}{{6}}",
        "Works as quote-posts under real casting news, standalone fake bulletins, TikTok greedsplaining, or Reddit “breaking” images. Pairing with Chris Pratt Voices Everyone remakes is common meta.{{3}}{{4}}",
      ],
      list: [
        "Fake studio casting tweets with Pattinson headshots",
        "Sports / tech “breaking news” graphics (QB, CEO)",
        "Franchise swaps (Snoopy, Madoka, historical figures)",
        "TikTok reaction lists of prior iconic roles",
        "Reddit dankmemes-style announcement stills",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{4}}"],
      list: [
        "16 Nov 2026 — @007 announces “Robert Pattinson is James Bond” (~69.1M views){{1}}",
        "16 Nov 2026 — @bigguccicraigy “Muhammad Ali next” quote-post (~114k likes){{2}}",
        "16 Nov 2026 — @nateoaks TikTok “greed” reaction (~581k views){{3}}",
        "17 Nov 2026 — Madoka (@meduka_ebooks), Snoopy (@DailySnoopys), Patriots QB (@OnyxOdds) fakes{{5}}{{6}}{{7}}",
        "17–18 Nov 2026 — Reddit Nvidia CEO parody + press explainers{{4}}{{8}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "X",
      title: "@007 — Robert Pattinson is James Bond",
      href: "https://x.com/007/status/2122343950308540474",
      date: "16 Nov 2026",
    },
    {
      id: 2,
      publisher: "X",
      title: "@bigguccicraigy — Muhammad Ali next quote-post",
      href: "https://x.com/bigguccicraigy/status/2122354472227594358",
      date: "16 Nov 2026",
    },
    {
      id: 3,
      publisher: "TikTok",
      title: "@nateoaks — Pattinson greed reaction",
      href: "https://www.tiktok.com/@nateoaks/video/7708893007927430413",
      date: "16 Nov 2026",
    },
    {
      id: 4,
      publisher: "Know Your Meme",
      title: "Robert Pattinson Casting Announcement Parodies",
      href: "https://knowyourmeme.com/memes/robert-pattinson-casting-announcement-parodies-robert-pattinson-cast-as-x",
      date: "18 Nov 2026",
    },
    {
      id: 5,
      publisher: "X",
      title: "@meduka_ebooks — cast as Madoka Kaname",
      href: "https://x.com/meduka_ebooks/status/2122681877194747993",
      date: "17 Nov 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@DailySnoopys — Robert Pattinson is Snoopy",
      href: "https://x.com/DailySnoopys/status/2122765461515567328",
      date: "17 Nov 2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@OnyxOdds — Patriots starting QB parody",
      href: "https://x.com/OnyxOdds/status/2122751629313143010",
      date: "17 Nov 2026",
    },
    {
      id: 8,
      publisher: "USA TODAY",
      title: "Robert Pattinson James Bond casting sparks memes about his 'greed'",
      href: "https://www.usatoday.com/story/entertainment/internet-culture/2026/11/17/robert-pattinson-james-bond-007-memes-internet-social-media/92824320007/",
      date: "17 Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with Robert Pattinson, Eon / Amazon MGM, or the accounts named above · Screenshots © respective platforms / posters / rights holders",
} as const satisfies WikiArticleData;
