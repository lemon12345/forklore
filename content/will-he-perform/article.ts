import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const willHePerformArticle = {
  title: "Will He Perform",
  description:
    "Will He Perform When He Has Money Right In Front Of Him is the Aug 2026 TikTok fail-audio trend: Remble's Touchable lyric timed to stunts that wipe out.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Will He Perform When He Has Money Right In Front Of Him]] (also [[Will He Perform]], [[will he perform meme]]) is an August 2026 TikTok / Instagram Reels fail-audio trend built on the opening bar of [[Remble]]’s 2021 track [[Touchable]]. Creators time a wipeout, missed shot, or video-game gutter ball to land exactly when Remble asks the title question, then punch the flub with loud sound effects.{{1}}{{2}}{{3}}",
    "The format locked in on 14 Aug 2026 when [[@zdeezee]] posted Wii Sports bowling rolling into the gutter under the lyric (~1.3 million views in about a week). Soccer, rollerblading, and stunt fails followed within days, putting the sound alongside other late-summer 2026 fail cues like [[Nothing Beats A Jet2 Holiday]].{{1}}{{2}}",
  ],
  infobox: {
    title: "Will He Perform",
    image: {
      src: "/will-he-perform/perform-cover.jpg",
      alt: "Will He Perform When He Has Money Right In Front Of Him meme — fail audio cover",
      caption:
        "Cover energy for the Remble fail-audio wave: setup question, then the wipeout.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Will He Perform",
          "Will he perform when he has money…",
          "Touchable fail audio",
          "Remble perform meme",
        ],
      },
      {
        label: "Type",
        value: "Fail audio / participatory short-form edit",
      },
      { label: "Year", value: "2026 (song 2021)" },
      {
        label: "Origin",
        value: "TikTok · @zdeezee + Remble Touchable",
        href: "https://www.tiktok.com/@zdeezee",
      },
      {
        label: "Peak wave",
        value: "Aug 2026 (TikTok → IG Reels)",
      },
      {
        label: "Related",
        value: [
          "Nothing Beats A Jet2 Holiday",
          "Punisher No No Wait Wait Wait",
          "What Do DJs Actually Do",
          "Fail / epic fail edits",
          "Remble — Touchable",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram Reels", "YouTube"],
      },
      {
        label: "Source track",
        value: "Remble — Touchable · 11 Jun 2021",
        href: "https://www.youtube.com/watch?v=jo8sxsqaNmQ",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "There is no fixed visual template — only an audio timing rule. The lyric sets up pressure (“will he perform…”) while the clip answers with a miss. Loud FX after the line sell the punchline. Most entries are fails; a minority twist the format by actually sticking the landing.{{1}}{{2}}{{3}}",
        "Searchers usually shorten the title to “will he perform” or paste the full Remble opener. Coverage groups it with other 2026 fail-audio memes where one song cue means “watch this go wrong.”{{1}}{{3}}",
      ],
      image: {
        src: "/will-he-perform/meme-com-collage.webp",
        alt: "Will He Perform meme collage of TikTok fail variants",
        caption:
          "Explainer collage framing Wii Sports, sports, and stunt fails under the same Remble cue.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 11 Jun 2021, Los Angeles rapper [[Remble]] released [[Touchable]] with a YouTube music video that later cleared ~50 million views. The track opens with “Will he perform when he has money right in front of him?” — the isolated hook TikTok later grabbed.{{1}}{{2}}{{4}}",
        "On 14 Aug 2026, TikToker [[@zdeezee]] posted Wii Sports bowling that gutters every pin, overlaid the lyric, and set it to the Touchable snippet (~1.3 million views in just over a week). That edit became the template clip for the sound; coverage links the creator profile rather than a single stable video ID.{{1}}{{2}}{{5}}",
      ],
      image: {
        src: "/will-he-perform/yt-touchable-max.jpg",
        alt: "Remble Touchable music video still — source of Will He Perform audio",
        caption:
          "Source track still: Remble’s Touchable (2021) — the opener that became the fail cue.",
      },
      link: {
        href: "https://meme.com/memes/will-he-perform-when-he-has-money-right-in-front-of-him",
        label: "meme.com — Will He Perform origin & spread →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Fail-audio cover, Remble source MV, meme.com collage, creator profile, rollerblade-wave card, and secondary writeups — one beat each.",
      ],
      gallery: [
        {
          id: "cover",
          href: "https://meme.com/memes/will-he-perform-when-he-has-money-right-in-front-of-him",
          kind: "image",
          source: "web",
          handle: "Will He Perform",
          author: "Fail-audio cover",
          text: "Will he perform when he has money…",
          date: "Aug 2026",
          caption:
            "Signature cover still for the Remble fail-audio wave (setup question → wipeout).",
          thumbnail: "/will-he-perform/perform-cover.jpg",
        },
        {
          id: "remble",
          href: "https://www.youtube.com/watch?v=jo8sxsqaNmQ",
          kind: "video",
          source: "web",
          handle: "Remble",
          author: "Source track",
          text: "Touchable (official video)",
          date: "11 Jun 2021",
          caption:
            "YouTube maxres still from the 2021 track whose opening bar became the TikTok cue (~50M+ views in multi-year tallies).",
          thumbnail: "/will-he-perform/yt-touchable-max.jpg",
          views: "50M+ YT views",
        },
        {
          id: "collage",
          href: "https://meme.com/memes/will-he-perform-when-he-has-money-right-in-front-of-him",
          kind: "image",
          source: "web",
          handle: "meme.com",
          author: "Collage / explainer",
          text: "Will He Perform TikTok collage",
          date: "26 Aug 2026",
          caption:
            "Multi-panel collage of sports, skate, and game fails timed to the audio.",
          thumbnail: "/will-he-perform/meme-com-collage.webp",
        },
        {
          id: "zdeezee",
          href: "https://www.tiktok.com/@zdeezee",
          kind: "image",
          source: "web",
          handle: "@zdeezee",
          author: "TikTok origin",
          text: "Wii Sports gutter ball + lyric",
          date: "14 Aug 2026",
          caption:
            "Template energy: Wii Sports miss under the Remble question (~1.3M views in ~1 week). Permalink stays at creator profile — no stable public video ID in secondary writeups.",
          thumbnail: "/will-he-perform/perform-cover.jpg",
          views: "1.3M+ views",
        },
        {
          id: "yfw-moses",
          href: "https://www.tiktok.com/@yfw_moses",
          kind: "image",
          source: "web",
          handle: "@yfw_moses",
          author: "Peak spread clip",
          text: "Rollerblade pole wipeout",
          date: "20 Aug 2026",
          caption:
            "One of the biggest single entries (~10.1M views in five days) — sports wipeout timed to the same cue.",
          thumbnail: "/will-he-perform/meme-com-collage.webp",
          views: "10.1M+ views",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/fr/cartes/will-he-perform-when-he-has-money-right-in-front-of-him/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Will He Perform card",
          date: "2026",
          caption:
            "Secondary card writeup summarizing the Remble lyric and Aug 2026 TikTok wave.",
          thumbnail: "/will-he-perform/mymemecards.webp",
        },
        {
          id: "justfribble",
          href: "https://www.tiktok.com/@justfribble",
          kind: "image",
          source: "web",
          handle: "@justfribble",
          author: "Soccer fail wave",
          text: "Goalie wipeout",
          date: "18 Aug 2026",
          caption:
            "Early spread beat: soccer goalie fail under the audio (~6.8M views in a week). Profile-level link.",
          thumbnail: "/will-he-perform/cover.jpg",
          views: "6.8M+ views",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Late August 2026 moved fast. On 18 Aug, [[@justfribble]] posted a soccer goalie getting thrown and conceding (~6.8 million views in a week). On 20 Aug, [[@yfw_moses]] uploaded a rollerblader hitting a pole (~10.1 million views in five days) — one of the biggest single clips in the wave.{{1}}{{2}}",
        "On 22 Aug, Instagram [[goofvault]] crossed platforms (~881,000 likes in three days). On 23 Aug, [[@m3dicz]] tied the audio to a 6-7 hands gesture before a failed flip (~4.7 million views in two days). Coverage put the sound in the tens of thousands of uses by early September.{{1}}{{3}}",
      ],
      link: {
        href: "https://www.tiktok.com/@zdeezee",
        label: "TikTok — @zdeezee (template Wii Sports edit) →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Cut a short fail — missed shot, botched trick, wipeout, gutter ball — so the Remble question lands on the attempt and the FX hit the miss. Overlay the lyric as on-screen text the way @zdeezee did.{{1}}{{2}}",
        "Any “about to try something and eat it” clip works. Rare success twists keep the same audio but answer “yes, he performed.” Tone is spectator mockery more than cruelty: the lyric frames stakes; the flub supplies the joke.{{2}}{{3}}",
      ],
      list: [
        "Sports / stunt wipeouts timed to the Touchable opener",
        "Video-game fails (Wii Sports bowling template)",
        "Lyric overlay + loud punch FX",
        "Occasional success twists that “perform” after the question",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{4}}"],
      list: [
        "11 Jun 2021 — Remble releases Touchable (+ YouTube MV){{4}}",
        "14 Aug 2026 — @zdeezee Wii Sports gutter template (~1.3M views){{1}}{{2}}",
        "18 Aug 2026 — @justfribble soccer goalie fail (~6.8M views){{1}}",
        "20 Aug 2026 — @yfw_moses rollerblade pole (~10.1M views){{1}}{{2}}",
        "22 Aug 2026 — Instagram goofvault crossover (~881k likes){{1}}",
        "23 Aug 2026 — @m3dicz 6-7 hands → failed flip (~4.7M views){{1}}",
        "26 Aug 2026 — meme.com / MyMemeCards writeups{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "Will He Perform When He Has Money Right In Front Of Him Meme",
      href: "https://meme.com/memes/will-he-perform-when-he-has-money-right-in-front-of-him",
      date: "26 Aug 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Will He Perform When He Has Money… card",
      href: "https://mymemecards.com/fr/cartes/will-he-perform-when-he-has-money-right-in-front-of-him/",
      date: "2026",
    },
    {
      id: 3,
      publisher: "XBrainrot",
      title: "Will He Perform Meaning, Origin & Examples",
      href: "https://xbrainrot.com/slang/will-he-perform",
      date: "2026",
    },
    {
      id: 4,
      publisher: "YouTube",
      title: "Remble — Touchable (official video)",
      href: "https://www.youtube.com/watch?v=jo8sxsqaNmQ",
      date: "11 Jun 2021",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@zdeezee — Wii Sports Will He Perform template",
      href: "https://www.tiktok.com/@zdeezee",
      date: "14 Aug 2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@yfw_moses — rollerblade fail under Will He Perform audio",
      href: "https://www.tiktok.com/@yfw_moses",
      date: "20 Aug 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Not affiliated with Remble, TikTok, or Nintendo · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
