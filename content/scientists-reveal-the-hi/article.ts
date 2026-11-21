import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const scientistsRevealTheHiArticle = {
  title: "Scientists Reveal the Hi",
  description:
    "Wide-eyed orange cat under a fake BBC chyron: \"Scientists reveal the hi.\" Swap the punchline for anything trivial—the exploitable news-thumbnail macro.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Scientists Reveal the Hi]] (also [[Scientists Reveal the Secret]] or [[Scientists Reveal the X]]) is an exploitable image-macro meme styled like a [[BBC News]] thumbnail. A wide-eyed orange cat — or, in a parallel July 2025 branch, a dog on a couch — sits over a chyron that begins “Scientists reveal the …” and ends with something trivial, most famously [[hi]].{{1}}{{2}}",
    "The photo traces to real May 2025 coverage of ginger-cat genetics; the joke headline does not. A “secret” news-style layout circulated in July 2025 along two documented strands, the “hi” rewrite landed on Reddit in May 2026, and Instagram / TikTok remixes (color inversions, face swaps, “bye”) peaked in October 2026.{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "Scientists Reveal the Hi",
    image: {
      src: "/scientists-reveal-the-hi/template-cat.webp",
      alt: "Orange cat under a BBC-style chyron reading Scientists reveal the Hi",
      caption:
        "Canonical cat still: news chyron + pill button “Hi” instead of a discovery.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Scientists Reveal the Secret",
          "Scientists Reveal the X",
        ],
      },
      {
        label: "Type",
        value: "Exploitable / image macro / absurdist",
      },
      { label: "Year", value: "2025 (hi edit 2026)" },
      {
        label: "Origin",
        value: "Reddit / Instagram (BBC photo)",
      },
      {
        label: "Peak wave",
        value: "Oct 2026 (IG · TikTok)",
      },
      {
        label: "Related",
        value: ["BBC News thumbnail parodies", "Cat reaction macros"],
      },
      {
        label: "Platforms",
        value: ["Reddit", "Instagram", "TikTok"],
      },
      {
        label: "Hi edit",
        value: "u/matthweewhttam · 28 May 2026",
        href: "https://www.reddit.com/r/xertunposting/comments/1tq5jb0/hi/",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The format sells a scientific breakthrough and delivers a greeting. Layout cues — BBC News branding, bold chyron, pill or sticker for the final word — make the nothing-burger reveal feel like breaking news. Viewers do not need lore; the mismatch is the punchline.{{1}}{{2}}{{4}}",
        "Editors treat it as a template: swap “hi” for “bye,” “ooough,” or other scraps; invert colors; replace the face with another animal or redraw; animate the still for TikTok. The phrasal slot “Scientists reveal the X” is the reusable part. People also drop the still as a deadpan hello in group chats — the image is the greeting.{{1}}{{4}}",
      ],
      image: {
        src: "/scientists-reveal-the-hi/sticker.webp",
        alt: "Sticker-style Scientists reveal the hi cat thumbnail",
        caption:
          "Clean sticker / thumbnail crop of the cat-and-Hi layout used as a shareable base.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 15–16 May 2025, the BBC and related outlets covered research tying ginger coat color to a deletion affecting the X-linked ARHGAP36 gene (Kyushu University / Stanford teams in Current Biology). The orange-cat photo from that news cycle — especially the 16 May Newsround piece — became the stock face of later macros.{{3}}{{7}}{{2}}",
        "Two July 2025 “Scientists reveal the secret” strands are documented. On 5 July, Redditor FullOnPorridge posted the orange cat under BBC News chrome with that chyron to /r/Wunkus (~5,700+ upvotes in later tallies). Separately, on 16 July, Instagram user @cheemsitz posted a dog-on-a-couch macro in the same news-thumbnail style (~100k+ likes); Redditor TyphlosionGod reposted it to /r/comedyheaven on 17 July (~3,800+ upvotes), and on 18 July Alicyndaquil left a comment edit that swapped the dog for the orange cat — locking in the Instagram→Reddit lineage most later “hi” writeups follow. Secondary About blurbs sometimes collapse these into one day; the dated posts do not.{{1}}{{2}}{{5}}{{8}}{{9}}",
        "On 28 May 2026, Redditor matthweewhttam posted the title edit to /r/xertunposting, replacing “secret” with “hi” (~1,100+ upvotes in subsequent months). Some secondary writeups mislabel the poster as “xertunposting” (the subreddit name) or move the rewrite to July 2025; the dated post is May 2026.{{1}}{{2}}{{6}}",
      ],
      link: {
        href: "https://meme.com/memes/scientists-reveal-the-hi",
        label: "meme.com origin & spread summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin stills, TikTok motion edits (no matching X video found), and distinct remix axes — one card per variant.",
      ],
      gallery: [
        {
          id: "wunkus-secret",
          href: "https://www.reddit.com/r/wunkus/comments/1lsdv5y/exposed_wunk/",
          kind: "image",
          source: "web",
          handle: "u/FullOnPorridge",
          author: "r/Wunkus",
          text: "Scientists reveal the secret",
          date: "5 Jul 2025",
          caption:
            "Early orange-cat BBC-style “secret” still from /r/Wunkus — eleven days before the Instagram dog branch.",
          thumbnail: "/scientists-reveal-the-hi/wunkus-secret.jpg",
        },
        {
          id: "bella-tiktok",
          href: "https://www.tiktok.com/@._bella_141/video/7672239822450265374",
          kind: "video",
          source: "web",
          handle: "@_bella_141",
          author: "TikTok edit",
          text: "Scientists reveal the secret (motion edit)",
          date: "9 Aug 2026",
          caption:
            "Early TikTok animation of the format (~200k+ views class); some captions still used “secret.”",
          thumbnail: "/scientists-reveal-the-hi/template-cat.webp",
          duration: "0:15+",
          views: "200K+",
        },
        {
          id: "drew-tiktok",
          href: "https://www.tiktok.com/@drewdrewdrew27/video/7694434517162921229",
          kind: "video",
          source: "web",
          handle: "@drewdrewdrew27",
          author: "TikTok remix",
          text: "scientists reveal the hi",
          date: "2026",
          caption:
            "CapCut-style “hi” remix from the October wave.",
          thumbnail: "/scientists-reveal-the-hi/sticker.webp",
          duration: "0:15+",
        },
        {
          id: "bye",
          href: "https://www.instagram.com/p/DeakfuYBCl9/",
          kind: "image",
          source: "web",
          handle: "@pooods",
          author: "Color invert",
          text: "Scientists reveal the Bye",
          date: "12 Oct 2026",
          caption:
            "Blue/negative invert remix that flips the greeting to “Bye” — among the October Instagram spikes.",
          thumbnail: "/scientists-reveal-the-hi/bye-remix.webp",
        },
        {
          id: "ooough",
          href: "https://meme.com/memes/scientists-reveal-the-hi",
          kind: "image",
          source: "web",
          handle: "Remix",
          author: "Tired-eyes edit",
          text: "Scientists reveal the Ooough",
          date: "2026",
          caption:
            "Exhausted-eyes recaption swapping “Hi” for a nonsense groan while keeping the news chrome.",
          thumbnail: "/scientists-reveal-the-hi/ooough-remix.webp",
        },
        {
          id: "puppy",
          href: "https://meme.com/memes/scientists-reveal-the-hi",
          kind: "image",
          source: "web",
          handle: "Crossover",
          author: "Puppy macro",
          text: "When mom brings home the Hi",
          date: "2026",
          caption:
            "Dilated-pupil puppy edit grafting the “Hi” payoff onto a different shocked-pet template.",
          thumbnail: "/scientists-reveal-the-hi/puppy-hi.webp",
        },
        {
          id: "redraw",
          href: "https://meme.com/memes/scientists-reveal-the-hi",
          kind: "image",
          source: "web",
          handle: "Fanart",
          author: "Cartoon redraw",
          text: "scientists reveal the secre…",
          date: "2026",
          caption:
            "Stylized redraw that keeps BBC News chrome while pushing the face into cartoon / OC territory.",
          thumbnail: "/scientists-reveal-the-hi/gal-2.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "After the July 2025 cat and dog “secret” macros, the BBC-style still kept circulating as an exploitable into 2026. TikTok accelerated motion edits before and after the May “hi” rewrite: on 9 August 2026, @_bella_141 posted a video take of the format (some captions still used “secret”) that later tallies put above ~200,000 views in two months; on 28 September, @kekust’s collage of cat edits cleared ~120,000 views in a month.{{1}}{{10}}",
        "October 2026 was the public breakout, especially on Instagram. On 12 October, @pooods posted a color-inverted “bye” version (~35,000 likes in three days). On 14 October, @Owen_Kung’s seal-face swap drew ~13,500 likes in a day. Explainers on meme.com (15 Oct) and MyMemeCards (2 Nov) followed; the format also landed as a runner-up in several October “meme of the month” community polls.{{1}}{{2}}{{11}}",
      ],
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "There is no hidden scientific claim. The meme mocks dramatic “scientists reveal …” headlines by announcing a greeting — or any equally empty X. Common moves: send the still instead of typing “hi”; reply when someone oversells a “discovery”; end a chat with the “bye” invert; treat the cat as blank confusion.{{1}}{{2}}{{4}}",
        "Because the base is a real news photo of a ginger cat, casual viewers sometimes ask if the genetics story is the punchline. Coverage is clear: the ARHGAP36 findings are real; the “hi” chyron is fan fiction layered on top.{{3}}{{2}}{{7}}",
      ],
      list: [
        "Drop the still as a deadpan hello in chats",
        "Keep BBC chyron · swap final word (hi / bye / …)",
        "Face swap or redraw the cat (incl. seal-face)",
        "Color invert / horror tint / deep-fry",
        "Animate the still for TikTok",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "15–16 May 2025 — BBC / Newsround cover ginger-cat genetics; orange-cat photo enters circulation{{3}}{{7}}",
        "5 Jul 2025 — /r/Wunkus orange-cat BBC-style “Scientists reveal the secret” (FullOnPorridge){{2}}{{12}}",
        "16 Jul 2025 — Instagram @cheemsitz dog-on-couch “secret” BBC-style macro{{1}}{{5}}",
        "17–18 Jul 2025 — /r/comedyheaven repost; Alicyndaquil orange-cat comment edit{{1}}{{8}}{{9}}",
        "28 May 2026 — u/matthweewhttam /r/xertunposting “hi” rewrite{{1}}{{6}}",
        "9 Aug 2026 — TikTok @_bella_141 video edit (~200k views class; some captions still “secret”){{1}}{{10}}",
        "28 Sep 2026 — TikTok @kekust cat-edit collage (~120k views class){{1}}",
        "12–14 Oct 2026 — Instagram @pooods bye invert / @Owen_Kung seal-face spike{{1}}{{11}}",
        "15 Oct–2 Nov 2026 — meme.com / MyMemeCards writeups{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "Scientists Reveal the Hi — cat meme origin and spread",
      href: "https://meme.com/memes/scientists-reveal-the-hi",
      date: "15 Oct 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Scientists Reveal the Hi — meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/scientists-reveal-the-hi/",
      date: "2 Nov 2026",
    },
    {
      id: 3,
      publisher: "BBC News",
      title: "Decades-long mystery of ginger cats revealed",
      href: "https://www.bbc.com/news/articles/cwywdjjgvqqo",
      date: "15 May 2025",
    },
    {
      id: 4,
      publisher: "Pop Creep",
      title: "Scientists Reveal the Hi Meme Meaning and Origin",
      href: "https://popcreep.com/scientists-reveal-the-hi-meme-meaning-and-origin/",
      date: "18 Oct 2026",
    },
    {
      id: 5,
      publisher: "Instagram",
      title: "@cheemsitz — original dog “secret” post",
      href: "https://www.instagram.com/p/DMLiHlNPudv/?hl=en",
      date: "16 Jul 2025",
    },
    {
      id: 6,
      publisher: "Reddit",
      title: "u/matthweewhttam — “hi” edit on r/xertunposting",
      href: "https://www.reddit.com/r/xertunposting/comments/1tq5jb0/hi/",
      date: "28 May 2026",
    },
    {
      id: 7,
      publisher: "BBC Newsround",
      title: "What makes ginger cats ginger?",
      href: "https://www.bbc.com/newsround/articles/c071kld2x1go",
      date: "16 May 2025",
    },
    {
      id: 8,
      publisher: "Reddit",
      title: "u/TyphlosionGod — comedyheaven “secret” dog repost",
      href: "https://www.reddit.com/r/comedyheaven/comments/1m2qrak/finally/",
      date: "17 Jul 2025",
    },
    {
      id: 9,
      publisher: "Reddit",
      title: "u/Alicyndaquil — orange-cat comment edit",
      href: "https://www.reddit.com/r/comedyheaven/comments/1m2qrak/comment/n3sih9k/",
      date: "18 Jul 2025",
    },
    {
      id: 10,
      publisher: "TikTok",
      title: "@_bella_141 — Scientists reveal video edit",
      href: "https://www.tiktok.com/@._bella_141/video/7672239822450265374",
      date: "9 Aug 2026",
    },
    {
      id: 11,
      publisher: "Instagram",
      title: "@Owen_Kung — seal-face remix",
      href: "https://www.instagram.com/p/DefV-SqNR5c/",
      date: "14 Oct 2026",
    },
    {
      id: 12,
      publisher: "Reddit",
      title: "u/FullOnPorridge — r/Wunkus “Exposed Wunk” secret post",
      href: "https://www.reddit.com/r/wunkus/comments/1lsdv5y/exposed_wunk/",
      date: "5 Jul 2025",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · “Scientists reveal the hi” is not a BBC headline · Cat photo © original news / photographer · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
