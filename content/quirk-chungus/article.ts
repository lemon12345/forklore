import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const quirkChungusArticle = {
  title: "Quirk Chungus",
  description:
    'Quirk Chungus meaning: iFunny millennial comic insult for a doggo/pupper "quirky" woman + man-child partner—Big Chungus mashup; X slang boom March 2024.',
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Quirk Chungus]] is a comic character, catchphrase, and slang insult for a stock “quirky” Millennial woman — doggo/pupper talk, pizza-as-personality, and the gag that she has already become her mother — usually drawn next to a personality-free [[Man Child]] partner and a cat tagged as child replacement. The name mashes “quirky” with [[Big Chungus]]. It is not a [[My Hero Academia]] Quirk.{{1}}{{2}}",
    "iFunny user [[Big_Ed]] posted the origin strip on 20 Nov 2020 under the caption “I have decided to become a millennial comic artist. My original characters are:”. The panel lived mostly on iFunny for years, then jumped into everyday X slang in March 2024 when posters slapped “literally a Quirk Chungus” on millennial-couple TikToks and older “cringe” clips.{{1}}{{3}}{{4}}",
  ],
  infobox: {
    title: "Quirk Chungus",
    image: {
      src: "/quirk-chungus/cover.jpg",
      alt: "Quirk Chungus millennial comic artist strip — Quirk Chungus, Man Child, and Child Replacement cat",
      caption:
        "Origin strip beat: labeled Quirk Chungus + Man Child + cat as “Child Replacement.”",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Millennial comic artist meme",
          "I have decided to become a millennial comic artist",
          "Quirk Chungus / Man Child duo",
        ],
      },
      {
        label: "Type",
        value: "Catchphrase / character / slang insult",
      },
      { label: "Year", value: "2020 (X slang wave 2024)" },
      {
        label: "Origin",
        value: "iFunny · Big_Ed · 20 Nov 2020",
        href: "https://ifunny.co/picture/i-have-decided-to-become-a-millennial-comic-artist-my-22FYbbLA8",
      },
      {
        label: "Peak waves",
        value: "iFunny 2020–21 · X Mar 2024 · ongoing slang",
      },
      {
        label: "Related",
        value: [
          "Big Chungus",
          "Man Child",
          "Millennial webcomic couple",
          "Doggo / pupper slang",
        ],
      },
      {
        label: "Platforms",
        value: ["iFunny", "X", "Reddit", "TikTok", "YouTube", "Instagram"],
      },
      {
        label: "Known for",
        value: "“Literally a Quirk Chungus” callouts",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "As a character sheet gag, Quirk Chungus is the female half of a two-person millennial webcomic stereotype: mildly kooky, soft-animal vocabulary (“some dogs are doggos, some are puppers”), food bits (pizza), and the line that she “fails to realize she has already become her mother,” plus a harsher bullet about having “missed out on being a whore.” Her counterpart Man Child “lacks all personality and will,” which has become his entire personality; a cat is labeled Child Replacement.{{1}}{{2}}",
        "As slang, calling someone a Quirk Chungus means their clip or persona ticks the archetype — not a literal reading of Big Chungus the fat Bugs Bunny meme, and not MHA superpowers. Explainers and card sites treat the opener “I have decided to become a millennial comic artist” as a setup line that signals a caricature is coming. Tone ranges from mild stereotype roasting to mean-spirited pile-ons; later discourse also argues about fake “woman made this about her sister” origin myths that soften the comic’s edge.{{1}}{{5}}{{8}}",
      ],
      image: {
        src: "/quirk-chungus/gallery-closeup.jpg",
        alt: "Close-up panel of Quirk Chungus holding pizza from the millennial comic artist meme",
        caption:
          "Close-up beat often recirculated with the full labeled character sheet.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 20 Nov 2020, iFunny user Big_Ed posted a multi-panel comic captioned “I have decided to become a millennial comic artist. My original characters are:” with Quirk Chungus, Man Child, and the Child Replacement cat spelled out in bullet lists. A surviving iFunny mirror of the strip (dated around late November 2020 on-site) keeps circulating as the primary visual.{{2}}{{3}}",
        "The joke targets a then-familiar Instagram/webcomic couple style — often associated in commentary with strips like Our Super Adventure, Sarah’s Scribbles, and Catana Comics as recognizable neighbors of the strawman, not as proven targets of Big_Ed’s panel. “Chungus” rides the late-2010s Big Chungus nonsense-name boom; “Quirk” is everyday English for quirky, not a shonen power system.{{1}}{{2}}",
      ],
      link: {
        href: "https://ifunny.co/picture/i-have-decided-to-become-a-millennial-comic-artist-my-22FYbbLA8",
        label: "iFunny — circulating origin strip →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin comic, the March 2024 X millennial-cringe catalyst, early slang callouts, Reddit riffs, and secondary explainers — click through for sources.",
      ],
      gallery: [
        {
          id: "origin-comic",
          href: "https://ifunny.co/picture/i-have-decided-to-become-a-millennial-comic-artist-my-22FYbbLA8",
          kind: "image",
          source: "web",
          handle: "iFunny / Big_Ed",
          author: "Origin comic",
          text: "I have decided to become a millennial comic artist…",
          date: "20 Nov 2020",
          caption:
            "Canonical labeled strip: Quirk Chungus, Man Child, Child Replacement cat.",
          thumbnail: "/quirk-chungus/origin-comic.jpg",
        },
        {
          id: "x-alphafox",
          href: "https://x.com/Alphafox78/status/1765474683837956539",
          kind: "video",
          handle: "@Alphafox78",
          author: "X catalyst",
          text: "Are all millennials this cringe??",
          date: "6 Mar 2024",
          caption:
            "Viral millennial-couple TikTok repost (~8M views / 11K+ likes in later tallies) that kicked the slang wave — “shnookums,” “sippy sippy,” barista / “le customer” parody energy.",
          thumbnail: "/quirk-chungus/x-alphafox-thumb.jpg",
          views: "8M+ views",
          duration: "1:06",
        },
        {
          id: "x-bonxley",
          href: "https://x.com/Bonxley/status/1765661854959825192",
          kind: "image",
          handle: "@Bonxley",
          author: "X slang callout",
          text: "Impressive demonstration of the “Quirk Chungus” phenomenon",
          date: "7 Mar 2024",
          caption:
            "Day-after slang use: labels a clip as textbook Quirk Chungus (Invader Zim / millennial-quirky read).",
          thumbnail: "/quirk-chungus/x-bonxley.jpg",
        },
        {
          id: "reddit-4chan",
          href: "https://www.reddit.com/r/4chan/comments/1bj6mri/quirk_chungus/",
          kind: "image",
          source: "web",
          handle: "r/4chan",
          author: "Reddit",
          text: "“Quirk Chungus” greentext / discourse thread",
          date: "20 Mar 2024",
          caption:
            "Early Reddit amplification (~2.3K upvotes): slang definition threads and greentext riffs after the X wave.",
          thumbnail: "/quirk-chungus/gallery-example-1.jpg",
          views: "2.3K+",
        },
        {
          id: "reddit-greentext",
          href: "https://www.reddit.com/r/greentext/comments/1esu3dr/anon_writes_a_comic_about_quirk_chungus/",
          kind: "image",
          source: "web",
          handle: "r/greentext",
          author: "Reddit",
          text: "Anon writes a comic about Quirk Chungus",
          date: "15 Aug 2024",
          caption:
            "Later fan-comic / greentext branch — “Quirk Chungusverse” jokes in comments.",
          thumbnail: "/quirk-chungus/gallery-example-2.png",
          views: "2.1K+",
        },
        {
          id: "youtube-explainer",
          href: "https://www.youtube.com/watch?v=U5RGlgf8HwE",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Explainer short",
          text: "What is a Quirk Chungus?",
          date: "2024",
          caption:
            "Spoken explainer walking the iFunny strip → March 2024 “literally a Quirk Chungus” reply pattern.",
          thumbnail: "/quirk-chungus/editorial.jpg",
        },
        {
          id: "cheezburger",
          href: "https://cheezburger.com/38615045/35-memes-for-quirk-chunguses-and-man-children",
          kind: "image",
          source: "web",
          handle: "Cheezburger / Memebase",
          author: "Roundup",
          text: "35 Memes for Quirk Chunguses and Man Children",
          date: "7 Jan 2025",
          caption:
            "Mainstream meme-roundup framing Quirk Chungus + Man Child as a reusable couple archetype.",
          thumbnail: "/quirk-chungus/gallery-x-wave.jpg",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/quirk-chungus/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Quirk Chungus meme: meaning, origin and card",
          date: "2 Oct 2026",
          caption:
            "Secondary encyclopedia-style card locking meaning, iFunny origin date, and March 2024 X beat.",
          thumbnail: "/quirk-chungus/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Through 2021 the strip mostly recirculated on iFunny (early reposts and comment-image uses). A November 2023 DeviantArt adaptation by MarkRandy685 kept the “millennial comic artist” caption alive outside iFunny. Cross-platform interest stayed niche until early March 2024.{{1}}",
        "On 6 Mar 2024, @Alphafox78 (also resolving as @alphafox) posted a TikTok of a millennial couple introducing how they met with heavy “cringe” slang; the post cleared millions of views. Quote-posts and replies — including the widely cited “She’s literally a Quirk Chungus” line attributed to @KramericaIntern the next day — glued the old comic to live people and parody clips. Same-week posts (e.g. @Bonxley) used the phrase as a litmus test; older viral moments such as the AddictedToAna / Anattraction IHOP dance were retrofitted into the archetype.{{1}}{{3}}{{4}}{{6}}",
        "Reddit threads on r/4chan and r/greentext (Mar–Aug 2024), YouTube explainers, Cheezburger roundups (Jan 2025), and later card/encyclopedia pages kept the label in circulation as general millennial-discourse slang into 2025–26.{{1}}{{5}}{{6}}{{7}}",
      ],
      link: {
        href: "https://x.com/Alphafox78/status/1765474683837956539",
        label: "X — @Alphafox78 millennial-cringe catalyst →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Common moves: reply “literally a Quirk Chungus” under a clip; paste the origin strip with the millennial-comic-artist caption; or draw new Quirk Chungus / Man Child variants for another generational cliché. Recognition hooks are doggo/pupper speech, pizza/coffee bit props, soft “quirky” branding, and a blank-faced partner.{{1}}{{6}}",
        "Related reads: not Big Chungus cosplay, not MHA Quirks, and not every millennial woman — the insult is strongest when the subject hits several bullets at once. Critics call it mean-spirited; defenders say it maps onto a real webcomic/couple content genre. A 2026 Reddit mythology thread notes an unproven “female artist roasting her sister” origin rumor that makes the joke feel safer in some circles; primary attribution remains Big_Ed on iFunny.{{1}}{{5}}{{8}}",
      ],
      list: [
        "Reply slang: “literally a Quirk Chungus”",
        "Repost the origin strip + millennial-comic-artist caption",
        "Draw / edit new Quirk Chungus + Man Child sheets",
        "Retrofit older “cringe” clips into the archetype",
        "Litmus-test posts (“this should be a Quirk Chungus test”)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "20 Nov 2020 — Big_Ed posts the millennial comic artist strip on iFunny{{1}}{{2}}",
        "Dec 2020–2021 — iFunny reposts and comment-image uses keep the panel local{{1}}",
        "2 Nov 2023 — MarkRandy685 DeviantArt adaptation (caption callback){{1}}",
        "6 Mar 2024 — @Alphafox78 millennial-couple TikTok repost goes wide{{3}}",
        "7 Mar 2024 — “Literally a Quirk Chungus” reply wave (@KramericaIntern cited; @Bonxley callout same day){{1}}{{4}}",
        "Mar–Aug 2024 — Reddit (r/4chan, r/greentext) + YouTube explainers{{5}}{{7}}",
        "7 Jan 2025 — Cheezburger / Memebase Quirk Chungus + Man Child roundup{{6}}",
        "2025–26 — Ongoing slang; origin-myth discourse; MyMemeCards entry (2 Oct 2026){{1}}{{8}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "MyMemeCards",
      title: "Quirk Chungus meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/quirk-chungus/",
      date: "2 Oct 2026",
    },
    {
      id: 2,
      publisher: "iFunny",
      title:
        "I have decided to become a millennial comic artist (Quirk Chungus strip)",
      href: "https://ifunny.co/picture/i-have-decided-to-become-a-millennial-comic-artist-my-22FYbbLA8",
      date: "Nov 2020",
    },
    {
      id: 3,
      publisher: "X",
      title: '@Alphafox78 — “Are all millennials this cringe??”',
      href: "https://x.com/Alphafox78/status/1765474683837956539",
      date: "6 Mar 2024",
    },
    {
      id: 4,
      publisher: "X",
      title: '@Bonxley — “Quirk Chungus” phenomenon callout',
      href: "https://x.com/Bonxley/status/1765661854959825192",
      date: "7 Mar 2024",
    },
    {
      id: 5,
      publisher: "Reddit",
      title: 'r/4chan — “Quirk Chungus”',
      href: "https://www.reddit.com/r/4chan/comments/1bj6mri/quirk_chungus/",
      date: "20 Mar 2024",
    },
    {
      id: 6,
      publisher: "Cheezburger",
      title: "35 Memes for Quirk Chunguses and Man Children",
      href: "https://cheezburger.com/38615045/35-memes-for-quirk-chunguses-and-man-children",
      date: "7 Jan 2025",
    },
    {
      id: 7,
      publisher: "YouTube",
      title: "What is a Quirk Chungus?",
      href: "https://www.youtube.com/watch?v=U5RGlgf8HwE",
      date: "2024",
    },
    {
      id: 8,
      publisher: "Reddit",
      title:
        "r/rs_x — mythology around the “Quick Chungus” / Quirk Chungus meme",
      href: "https://www.reddit.com/r/rs_x/comments/1w66s43/the_whole_mythology_around_the_quick_chungus_meme/",
      date: "3 Sep 2026",
    },
    {
      id: 9,
      publisher: "Reddit",
      title: "r/greentext — Anon writes a comic about Quirk Chungus",
      href: "https://www.reddit.com/r/greentext/comments/1esu3dr/anon_writes_a_comic_about_quirk_chungus/",
      date: "15 Aug 2024",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Not affiliated with iFunny, Big_Ed, or depicted individuals · Screenshots © respective platforms / posters · “Quirk Chungus” is slang/comic satire, not a My Hero Academia Quirk",
} as const satisfies WikiArticleData;
