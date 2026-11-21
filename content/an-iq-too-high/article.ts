import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const anIqTooHighArticle = {
  title: "An IQ Too High",
  description:
    "An IQ Too High is the crow-vs-equations reaction image from a 2022 Real Science YouTube thumbnail, reused since late 2025 to sarcastically roast bad takes.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[An IQ Too High]] (also [[An IQ Too High?]], [[IQ Too High crow]]) is a late-2025 / 2026 reaction image and sticker meme: a close-up crow against math equations with the bold caption “AN IQ TOO HIGH?” Posters drop it under confusing takes, overconfident wrongness, or fake-deep analysis — the compliment is almost never sincere.{{1}}{{2}}{{3}}",
    "The still is the thumbnail from educational YouTube channel [[Real Science]]’s 31 May 2022 video [[Why Crows Are as Smart as 7 Year Old Humans]] (millions of views by early 2026). It sat unused as a joke for years, then recirculated as a Tenor GIF (12 Dec 2025) and TikTok sticker pack fodder (13 Dec 2025) before the phrase also traveled as plain text on X in January 2026.{{2}}{{3}}{{4}}{{5}}",
  ],
  infobox: {
    title: "An IQ Too High",
    image: {
      src: "/an-iq-too-high/cover.jpg",
      alt: "Crow against math equations with caption AN IQ TOO HIGH? — Real Science thumbnail meme",
      caption:
        "Canonical still: crow + equation backdrop + “AN IQ TOO HIGH?” (Real Science thumbnail).",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "An IQ Too High?",
          "IQ Too High crow",
          "Crow IQ meme",
        ],
      },
      {
        label: "Type",
        value: "Reaction image / sticker / exploitable",
      },
      { label: "Year", value: "2025 (thumbnail 2022)" },
      {
        label: "Origin",
        value: "YouTube Real Science thumbnail · 31 May 2022",
        href: "https://www.youtube.com/watch?v=7aWL2iEb6y4",
      },
      {
        label: "Reaction wave",
        value: "Dec 2025 – early 2026",
      },
      {
        label: "Related",
        value: [
          "High-IQ / midwit jokes",
          "Rick and Morty high-IQ copypasta",
          "Animal reaction stickers",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Tenor", "X", "Discord", "Reddit"],
      },
      {
        label: "Early sticker push",
        value: "@adderallwoah12 · 13 Dec 2025",
        href: "https://www.tiktok.com/@adderallwoah12",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The format is portable sarcasm. The crow looks serious; the equations look “smart”; the yellow “TOO HIGH?” sells a breakthrough. Dropped under a bad take, the stack reads as “your brain has left the chat” — or, in Pop Creep’s framing, as a jab at people who over-explain simple things and sound pretentious. Both flavors travel; context decides which one lands.{{1}}{{2}}{{3}}",
        "It works as a TikTok / DM sticker, a standalone image macro, an “An IQ Too Low” flip, purple-text edits, and as text-only replies (“an iq too high?”) when the image is not needed. The Real Science logo often survives in crops, which is how new viewers still trip into the 2022 crow-cognition video.{{2}}{{4}}{{5}}",
      ],
      image: {
        src: "/an-iq-too-high/youtube-thumb.jpg",
        alt: "Real Science YouTube thumbnail Why Crows Are as Smart as 7 Year Old Humans",
        caption:
          "Source thumbnail from Real Science’s May 2022 crow-intelligence video — later the reaction asset.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 31 May 2022, Real Science uploaded “Why Crows Are as Smart as 7 Year Old Humans,” covering corvid problem-solving and social intelligence. The thumbnail — crow profile, chalk-board math fog, “AN IQ TOO HIGH?” — was earnest clickbait for a science explainer, not a joke template. The video later cleared multi-million views, but the frame did not meme for more than three years.{{2}}{{3}}{{4}}{{5}}",
        "The earliest widely cited standalone reaction upload is a Tenor GIF titled “An Iq Too High Meme” by user dheinejeshhd on 12 December 2025. The next day, TikToker @adderallwoah12 posted a reaction-image slideshow captioned “for stickers ignore,” explicitly packaging the crow for comment / DM stickers — the path most writeups treat as the sticker-era launch.{{2}}{{3}}{{4}}",
      ],
      link: {
        href: "https://popcreep.com/an-iq-too-high-meme-origin-and-meaning/",
        label: "Pop Creep — crow reaction explainer →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Source thumbnail, encyclopedia-style crops, and explainer / card art — one card per host.",
      ],
      gallery: [
        {
          id: "real-science-yt",
          href: "https://www.youtube.com/watch?v=7aWL2iEb6y4",
          kind: "image",
          source: "web",
          handle: "Real Science",
          author: "YouTube thumbnail",
          text: "AN IQ TOO HIGH?",
          date: "31 May 2022",
          caption:
            "Origin still: educational crow-intelligence video thumbnail that later became the reaction image.",
          thumbnail: "/an-iq-too-high/youtube-thumb.jpg",
        },
        {
          id: "popcreep-cover",
          href: "https://popcreep.com/an-iq-too-high-meme-origin-and-meaning/",
          kind: "image",
          source: "web",
          handle: "Pop Creep",
          author: "Explainer cover",
          text: "An IQ Too High meme",
          date: "25 May 2026",
          caption:
            "Crow + equation crop used in secondary explainers as the recognisable reaction face.",
          thumbnail: "/an-iq-too-high/cover.jpg",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/an-iq-too-high/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card art",
          text: "An IQ Too High?",
          date: "2 Oct 2026",
          caption:
            "Card / encyclopedia crop keeping Real Science branding and the yellow “TOO HIGH?” line.",
          thumbnail: "/an-iq-too-high/mymemecards.webp",
        },
        {
          id: "add-magazine",
          href: "https://theaddmagazine.com/an-iq-too-high/",
          kind: "image",
          source: "web",
          handle: "The Add Magazine",
          author: "Explainer art",
          text: "An IQ Too High meme",
          date: "20 Aug 2026",
          caption:
            "August 2026 explainer cover circulating with timeline writeups of the sticker wave.",
          thumbnail: "/an-iq-too-high/add-magazine.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Through late December 2025 and January 2026 the crow stuck in TikTok comment culture as a saveable sticker. Documented creative beats include @fefipixels’ purple-text variant (20 Dec 2025), @rebootbhassy’s “Blud has an iq too high” clip (5 Jan 2026), and @luqidboi’s “An iq too low” compilation (20 Jan 2026). Interest in the phrase on search charts rose with that window.{{2}}{{3}}{{4}}",
        "On 8 January 2026, X user @F1ZK2 is the earliest widely cited text-only use of “An IQ Too High?” as a reply. By mid-2026 the image and the bare catchphrase were interchangeable roast tools across X, Discord, Reddit, and meme pages; exploitables swapped birds, colors, and “too low” flips while keeping the high-IQ pose.{{1}}{{2}}{{3}}",
      ],
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: sarcastic doubt about someone’s intelligence or coherence — stupid statements, confident misinformation, nonsense “life hacks,” or takes so weird they feel alien. Secondary read (emphasized by Pop Creep): mock pretentious overthinking and midwit-style fake depth, in the same family as high-IQ copypasta and IQ-bell-curve jokes. Rarely, posters use it half-sincerely for a genuinely clever workaround.{{1}}{{2}}{{3}}{{4}}",
      ],
      list: [
        "Sticker / GIF reply under a confusing or dumb post",
        "Image macro with optional top caption naming the take",
        "Text-only “an iq too high?” on X without the crow",
        "“An IQ Too Low” and purple-text / bird-swap edit variants",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Key documented beats:{{2}}{{3}}{{4}}{{5}}"],
      list: [
        "31 May 2022 — Real Science uploads crow-intelligence video with “AN IQ TOO HIGH?” thumbnail{{5}}",
        "12 Dec 2025 — Tenor user dheinejeshhd uploads “An Iq Too High Meme” GIF{{2}}{{3}}",
        "13 Dec 2025 — TikTok @adderallwoah12 sticker slideshow (“for stickers ignore”){{2}}{{3}}",
        "20 Dec 2025 — @fefipixels purple-text crow variant{{2}}{{3}}",
        "Late Dec 2025 – Jan 2026 — TikTok comment-sticker wave; search interest rises{{2}}{{3}}{{4}}",
        "5 Jan 2026 — @rebootbhassy “Blud has an iq too high”{{2}}",
        "8 Jan 2026 — @F1ZK2 early X text reply with the phrase{{2}}{{3}}",
        "20 Jan 2026 — @luqidboi “An iq too low” compilation{{2}}{{3}}",
        "May–Aug 2026 — Pop Creep / Side Eye / Add Magazine explainers; MyMemeCards card page (Oct){{1}}{{2}}{{3}}{{4}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Pop Creep",
      title: "An IQ Too High Meme Origin and Meaning",
      href: "https://popcreep.com/an-iq-too-high-meme-origin-and-meaning/",
      date: "25 May 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "An IQ Too High? meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/an-iq-too-high/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "The Add Magazine",
      title: "An IQ Too High Meme: Origin, Meaning, and Why It Went Viral",
      href: "https://theaddmagazine.com/an-iq-too-high/",
      date: "20 Aug 2026",
    },
    {
      id: 4,
      publisher: "Side Eye Meme",
      title: "An Iq Too High Meme",
      href: "https://sideeyememe.com/an-iq-too-high/",
      date: "3 Aug 2026",
    },
    {
      id: 5,
      publisher: "YouTube",
      title: "Real Science — Why Crows Are as Smart as 7 Year Old Humans",
      href: "https://www.youtube.com/watch?v=7aWL2iEb6y4",
      date: "31 May 2022",
    },
    {
      id: 6,
      publisher: "Tenor",
      title: "An Iq Too High GIFs",
      href: "https://tenor.com/search/an-iq-too-high-gifs",
      date: "2025–2026",
    },
    {
      id: 7,
      publisher: "TikTok",
      title: "@adderallwoah12 — sticker-pack slideshow account",
      href: "https://www.tiktok.com/@adderallwoah12",
      date: "13 Dec 2025",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Thumbnail © Real Science / YouTube · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
