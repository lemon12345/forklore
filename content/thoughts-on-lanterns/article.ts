import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const thoughtsOnLanternsArticle = {
  title: "Thoughts on Lanterns",
  description:
    "Thoughts on lanterns is a viral X exploitable: a Lanterns 2026 promo of Pierre and Chandler walking, redrawn as other duos with a franchise-swap caption.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Thoughts on Lanterns]] is a 2026 exploitable image-edit format built on a promotional still from the HBO / DC series [[Lanterns]]: [[Aaron Pierre]] (John Stewart) and [[Kyle Chandler]] (Hal Jordan) walking side by side down a road under the caption “Thoughts on Lanterns 2026?” Posters keep the two-figure walk, redraw or paste another famous duo over the leads, and swap the franchise name in the question.{{1}}{{2}}",
    "An early Sep 2026 post with the unedited promo barely moved; a Sep 8 crude clothes-edit on X broke the format open (~53k likes / ~3.7k reposts in two-day tallies). Cuphead, SpongeBob & Patrick, and Breaking Bad redraws followed within a day, each clearing tens of thousands of likes.{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "Thoughts on Lanterns",
    image: {
      src: "/thoughts-on-lanterns/cover.jpg",
      alt: "Thoughts on Lanterns meme — Aaron Pierre and Kyle Chandler walking from Lanterns promo",
      caption:
        "Source walk: Lanterns promo of Pierre & Chandler — the blank that every duo edit fills.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Thoughts on Lanterns 2026?",
          "Lanterns duo edit",
          "Thoughts on [franchise] 2026?",
        ],
      },
      {
        label: "Type",
        value: "Exploitable / image edit / pop-culture reference",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "X @fmjiggy · 4 Sep 2026",
        href: "https://x.com/fmjiggy",
      },
      {
        label: "Breakout",
        value: "X @jadeladeljadel · 8 Sep 2026",
        href: "https://x.com/jadeladeljadel",
      },
      {
        label: "Peak wave",
        value: "Early Sep 2026 (X)",
      },
      {
        label: "Related",
        value: [
          "Lanterns (HBO / DC)",
          "Duo crossover redraws",
          "Franchise-swap captions",
        ],
      },
      {
        label: "Platforms",
        value: ["X"],
      },
      {
        label: "Known for",
        value: "Any duo in the Lanterns walk pose",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke is a mismatch: a serious two-Lanterns promo walk asks for “thoughts,” then the faces become Cuphead and Mugman, SpongeBob and Patrick, Walt and Jesse, or whatever pair the poster can paste. Caption grammar stays fixed — “Thoughts on [title] 2026?” — so one word swap resets the franchise.{{1}}{{2}}",
        "Rough edits are part of the humor. The breakout viral still literally drew bad clothes onto Chandler and Pierre; later posts lean into obvious Photoshop or quick redraws rather than clean VFX. The empty road and side-by-side stance make almost any duo readable at a glance.{{1}}{{3}}",
      ],
      image: {
        src: "/thoughts-on-lanterns/popcreep.jpg",
        alt: "Thoughts on Lanterns meme explainer still",
        caption:
          "Explainers frame it as a portable duo template: keep the walk, swap the pair and the title word.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 4 Sep 2026, X user @fmjiggy posted “Thoughts on Lanterns 2026?” with the unedited Lanterns promotional still of Kyle Chandler and Aaron Pierre. Contemporary writeups put that first post at only about 35 likes over six days — a straight show-reaction post, not yet a template.{{1}}{{2}}",
        "On 8 Sep 2026, @jadeladeljadel reused the same caption with clothes crudely edited onto the two actors. That version cleared more than 53,000 likes and roughly 3,700 reposts within two days (later public tallies also cite ~57k likes / ~1.5M views). The bad clothes edit is what taught X the still was editable.{{1}}{{2}}{{3}}",
      ],
      link: {
        href: "https://x.com/jadeladeljadel",
        label: "X — @jadeladeljadel breakout clothes edit →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Promo still, crude clothes breakout, Cuphead / SpongeBob / Breaking Bad redraws, and secondary explainers — one card per beat.",
      ],
      gallery: [
        {
          id: "x-origin",
          href: "https://x.com/fmjiggy",
          kind: "image",
          handle: "@fmjiggy",
          author: "X origin",
          text: "Thoughts on Lanterns 2026?",
          date: "4 Sep 2026",
          caption:
            "Unedited Lanterns promo still + caption — the quiet first post before the edit wave.",
          thumbnail: "/thoughts-on-lanterns/promo.webp",
          views: "~35 likes / 6 days",
        },
        {
          id: "x-clothes",
          href: "https://x.com/jadeladeljadel",
          kind: "image",
          handle: "@jadeladeljadel",
          author: "X breakout",
          text: "Thoughts on LANTERNS (2026)?",
          date: "8 Sep 2026",
          caption:
            "Same walk, badly drawn-on clothes — the edit that unlocked the template (~53k+ likes / ~3.7k reposts in two-day tallies).",
          thumbnail: "/thoughts-on-lanterns/viral-clothes.jpg",
          views: "53K+ likes",
        },
        {
          id: "x-cups",
          href: "https://x.com/DaisyHugging",
          kind: "image",
          handle: "@DaisyHugging",
          author: "X Cuphead edit",
          text: "Thoughts on Cups (2026)?",
          date: "8 Sep 2026",
          caption:
            "Pierre & Chandler redrawn as the Cuphead brothers — early franchise-swap that passed ~47k likes in two days.",
          thumbnail: "/thoughts-on-lanterns/cups.jpg",
          views: "47K+ likes",
        },
        {
          id: "x-spongebob",
          href: "https://x.com/OfficixlGrug",
          kind: "image",
          handle: "@OfficixlGrug",
          author: "X SpongeBob edit",
          text: "SpongeBob & Patrick walk",
          date: "9 Sep 2026",
          caption:
            "Duo swap to SpongeBob and Patrick in the same street walk — ~34k+ likes in a day in early tallies.",
          thumbnail: "/thoughts-on-lanterns/cover.jpg",
        },
        {
          id: "popcreep",
          href: "https://popcreep.com/thoughts-on-lanterns-meme-meaning-and-origin/",
          kind: "image",
          source: "web",
          handle: "Pop Creep",
          author: "Explainer",
          text: "Meaning & origin writeup",
          date: "11 Sep 2026",
          caption:
            "Frames the promo walk as a universal duo template and logs the Sep 4 → Sep 8 breakout arc.",
          thumbnail: "/thoughts-on-lanterns/popcreep.jpg",
        },
        {
          id: "meme-com",
          href: "https://meme.com/memes/thoughts-on-lanterns",
          kind: "image",
          source: "web",
          handle: "meme.com",
          author: "Card / explainer",
          text: "Thoughts On Lanterns card entry",
          date: "10 Sep 2026",
          caption:
            "Secondary encyclopedia-style card summarizing origin posts, like counts, and Cuphead / SpongeBob / Breaking Bad beats.",
          thumbnail: "/thoughts-on-lanterns/promo.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Once the clothes edit hit, redraws arrived within hours. On 8 Sep, @DaisyHugging posted a Cuphead version (“Thoughts on Cups (2026)?”) that passed ~47,000 likes in two days. On 9 Sep, @OfficixlGrug’s SpongeBob and Patrick walk cleared ~34,000 likes in a day, and a Breaking Bad Walt-and-Jesse version (posted under @DiscussingFish_ / also reported as @DiscussingF1sh_) cleared ~35,000 likes in a day.{{1}}{{2}}{{4}}{{5}}",
        "The pattern stayed stable: keep the two-figures-walking composition, drop in a recognizable pair, change one word in the caption. Later roundups also note quote-posts and other franchise swaps (including a high-view “thoughts on foster?” branch cited in secondary research). The show itself had premiered on HBO on 16 Aug 2026 — the meme wave is a promo afterlife, not premiere-day chatter.{{2}}{{3}}",
      ],
      link: {
        href: "https://x.com/DaisyHugging",
        label: "X — @DaisyHugging Cuphead / Cups edit →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Literal read: “what do you think of Lanterns?” Online read: treat any franchise’s lead duo like a prestige TV walk-and-talk promo. The humor is recognition plus mismatch — serious crime-show framing, cartoon or prestige-TV characters inside it.{{1}}{{2}}",
        "How to play it: start from the walking still, redraw or paste a famous duo, caption “Thoughts on [franchise] 2026?” (or “(2026)?”), and keep the edit obviously homemade. No required audio — single-image posts are the default.{{1}}{{6}}",
      ],
      list: [
        "Duo redraw / paste over the Lanterns walk pose",
        "Caption swap: “Thoughts on [franchise] 2026?”",
        "Deliberately rough Photoshop or doodle clothes / faces",
        "Fandom bait: drop your ship or rival pair into the promo frame",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "16 Aug 2026 — Lanterns premieres on HBO (Chandler / Pierre lead){{3}}",
        "4 Sep 2026 — @fmjiggy posts unedited promo + “Thoughts on Lanterns 2026?”{{1}}{{2}}",
        "8 Sep 2026 — @jadeladeljadel crude clothes edit breaks out (~53k likes / ~3.7k reposts){{1}}{{2}}",
        "8 Sep 2026 — @DaisyHugging Cuphead / “Thoughts on Cups (2026)?” (~47k likes / 2 days){{1}}{{4}}",
        "9 Sep 2026 — @OfficixlGrug SpongeBob & Patrick (~34k likes / day){{1}}{{5}}",
        "9 Sep 2026 — Breaking Bad Walt & Jesse edit (~35k likes / day){{1}}{{2}}",
        "10–14 Sep 2026 — Secondary encyclopedia / explainer cards lock the timeline{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Pop Creep",
      title: "Thoughts On Lanterns Meme Meaning and Origin",
      href: "https://popcreep.com/thoughts-on-lanterns-meme-meaning-and-origin/",
      date: "11 Sep 2026",
    },
    {
      id: 2,
      publisher: "meme.com",
      title: "Thoughts On Lanterns — origin, meaning, best edits",
      href: "https://meme.com/memes/thoughts-on-lanterns",
      date: "10 Sep 2026",
    },
    {
      id: 3,
      publisher: "Gaya One",
      title: 'What Happened to the "Lanterns" Memes',
      href: "https://gaya.one/en/the-world-today/briefs/lanterns-i-green-lantern-kak-promo-dc-comics-porodilo-virusnye-memy-v-x",
      date: "5 Oct 2026",
    },
    {
      id: 4,
      publisher: "X",
      title: "@DaisyHugging — Thoughts on Cups (2026)? / Cuphead edit",
      href: "https://x.com/DaisyHugging",
      date: "8 Sep 2026",
    },
    {
      id: 5,
      publisher: "X",
      title: "@OfficixlGrug — SpongeBob & Patrick Lanterns walk",
      href: "https://x.com/OfficixlGrug",
      date: "9 Sep 2026",
    },
    {
      id: 6,
      publisher: "MemeClone",
      title: "Thoughts On Lanterns Meme — editorial research",
      href: "https://memeclone.ai/meme/thoughts-on-lanterns-meme",
      date: "13 Oct 2026",
    },
    {
      id: 7,
      publisher: "X",
      title: '@fmjiggy — “Thoughts on Lanterns 2026?” origin',
      href: "https://x.com/fmjiggy",
      date: "4 Sep 2026",
    },
    {
      id: 8,
      publisher: "X",
      title: "@jadeladeljadel — crude clothes breakout edit",
      href: "https://x.com/jadeladeljadel",
      date: "8 Sep 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Lanterns promo © HBO / DC · Screenshots © respective platforms / posters · Not affiliated with Warner Bros. Discovery, DC, or depicted individuals",
} satisfies WikiArticleData;
