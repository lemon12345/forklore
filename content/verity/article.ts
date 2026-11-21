import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const verityArticle = {
  title: "Verity",
  description:
    "ThatMob's yellow smiley Minecraft AI turns horror in the Verity series; \"It's me, it's Verity\" stuck so hard kids yell it at any yellow smiley on TikTok.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Verity]] is a yellow smiley-face AI from [[ThatMob]]’s 2026 Minecraft horror web series / ARG of the same name. Introduced as a helpful in-game assistant, it turns intrusive and later drops the smile for a lanky monster form — a Clippy-with-teeth design that Gen Alpha started shouting at any yellow smiley in the wild.{{1}}{{4}}{{5}}",
    "The meme breakout is the fan song [[It’s Me, It’s Verity]] by [[Horror Skunx]] (10 Jul 2026). Soft “hey, it’s me, it’s Verity” vocals got remixed on TikTok (notably [[Obesity]] / Fatity swaps), then mutated into -ity pun posts, classroom shout-outs, and even Anne Hathaway leaning into the hook to promote an unrelated film titled Verity.{{2}}{{3}}{{6}}",
  ],
  infobox: {
    title: "Verity",
    image: {
      src: "/verity/character.png",
      alt: "Verity yellow smiley-face character illustration from the Minecraft web series",
      caption:
        "Verity’s default face: a round yellow smile used as the “helpful” AI mask before the monster reveal.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "It’s Me, It’s Verity",
          "Obesity / Fatity",
          "Something (series alias)",
          "Verity™",
        ],
      },
      {
        label: "Type",
        value: "Character / fan song / viral edit",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "ThatMob · Minecraft ARG (YouTube)",
        href: "https://www.youtube.com/watch?v=hGBROjRqyDM",
      },
      {
        label: "Song",
        value: "Horror Skunx — It’s Me, It’s Verity",
        href: "https://www.youtube.com/watch?v=tVlKLpxyCBY",
      },
      {
        label: "Related",
        value: [
          "Minecraft horror ARG",
          "Obesity remix",
          "-ity puns",
          "6-7 (classroom parallel)",
        ],
      },
      {
        label: "Platforms",
        value: ["YouTube", "TikTok", "Instagram", "X"],
      },
      {
        label: "Catchphrase",
        value: "Hey, it’s me, it’s Verity",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Two layers travel together. The [[series]] layer is ThatMob’s three-episode Minecraft horror short (May–Jul 2026): a Discord “mod” drops a cardboard box; Verity pops out as an all-knowing smiley helper, then weaponizes personal knowledge and transforms. The [[meme]] layer is almost always the Skunx hook — keep the falsetto greeting, swap the face, pun the name (-ity), or just scream “Verity!” at school smiley stickers.{{1}}{{2}}{{4}}{{5}}",
        "Explainers group it with corporate / AI dread aesthetics (friendly UI mask, hostile payload) and with Gen Alpha classroom triggers after [[6-7]]. Variants include colored personality siblings (Falsity, Cruelty, Lovity), Chad “Mogity,” and fat yellow “Obesity” blob edits that kicked the remix wave.{{3}}{{5}}{{6}}",
      ],
      image: {
        src: "/verity/unboxing-cover.webp",
        alt: "Hands opening a cardboard box to reveal Verity’s yellow smiley face in packing peanuts",
        caption:
          "Unboxing still: the cardboard reveal that opens ThatMob’s series and recurs in fan edits.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "ThatMob released episode 1, “Something is Knocking at Your Door…,” on 30 May 2026, followed by “Something is Inside Your House…” (12 Jun) and “Something Won’t Let You Leave…” (8 Jul). A full compilation movie dropped 12 Jul. Verity is voiced by JustWhispy; the smile-to-monster arc and “ask me anything” spiel are the beats later memes quote.{{1}}{{4}}",
        "On 10 Jul 2026 — two days after the finale — Horror Skunx uploaded the fan music video [[It’s Me, It’s Verity]], written from the character’s point of view. Within a month it cleared ~17M+ views (later tallies pushed past 30M alongside the series episodes). The soft intro line became the reusable sound.{{2}}{{3}}{{4}}",
      ],
      link: {
        href: "https://meme.com/memes/its-me-its-verity",
        label: "meme.com — It’s Me, It’s Verity summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Series opener, Skunx music video, character still, and two widely circulated X pun formats — one card per beat.",
      ],
      gallery: [
        {
          id: "yt-thatmob-ep1",
          href: "https://www.youtube.com/watch?v=hGBROjRqyDM",
          kind: "video",
          source: "web",
          handle: "ThatMob",
          author: "Series ep. 1",
          text: "Something is Knocking at Your Door…",
          date: "30 May 2026",
          caption:
            "Series debut: Discord mod → cardboard box → yellow assistant that knows too much (~20–24 min runtime class).",
          thumbnail: "/verity/yt-thatmob.jpg",
          duration: "20:00+",
          views: "24M+",
        },
        {
          id: "yt-skunx",
          href: "https://www.youtube.com/watch?v=tVlKLpxyCBY",
          kind: "video",
          source: "web",
          handle: "Horror Skunx",
          author: "Fan song MV",
          text: "It’s Me, It’s Verity",
          date: "10 Jul 2026",
          caption:
            "The hook that became the TikTok sound — soft “hey, it’s me, it’s Verity” over smiley animation (~17M+ in the first month).",
          thumbnail: "/verity/yt-skunx.jpg",
          views: "17M+",
        },
        {
          id: "character-still",
          href: "https://en.wikipedia.org/wiki/Verity_(web_series)",
          kind: "image",
          source: "web",
          handle: "Wikipedia",
          author: "Character art",
          text: "Verity normal face",
          date: "2026",
          caption:
            "Canonical smile mask — the shape Gen Alpha now maps onto random yellow smileys IRL.",
          thumbnail: "/verity/character.png",
        },
        {
          id: "x-nudity-pun",
          href: "https://x.com/AriTheAriGuy",
          kind: "image",
          source: "web",
          handle: "@AriTheAriGuy",
          author: "X pun",
          text: "hey it’s me, it’s nudity",
          date: "9 Aug 2026",
          caption:
            "Classic -ity swap: “verity if he was naked…” (~26k likes in two weeks).",
          thumbnail: "/verity/x-nudity.webp",
          views: "26K+",
        },
        {
          id: "x-911-pin",
          href: "https://x.com/LiamBeUponYe",
          kind: "image",
          source: "web",
          handle: "@LiamBeUponYe",
          author: "X image macro",
          text: "Hey it’s me it’s Verity (9/11 pin)",
          date: "20 Aug 2026",
          caption:
            "Sad yellow memorial pin read as Verity face + caption (~33k likes in six days).",
          thumbnail: "/verity/x-911-pin.webp",
          views: "33K+",
        },
        {
          id: "obesity-tiktok",
          href: "https://www.tiktok.com/@scheisspost",
          kind: "image",
          source: "web",
          handle: "@scheisspost",
          author: "Obesity remix",
          text: "Obesity / Fatity edit wave",
          date: "22 Jul 2026",
          caption:
            "First major TikTok remix: swap Verity for a giant yellow “Obesity” blob, keep the Skunx vocal (~9M views in four days).",
          thumbnail: "/verity/unboxing-cover.webp",
          views: "9M+",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Remix season opened 22 Jul 2026 when TikToker @scheisspost replaced Verity with [[Obesity]] and left the song intact (~9M views in four days). Follow-ups kept the vocal and swapped visuals — fat variants, Mogity, cartoon stand-ins, lip-sync covers (@fatguynamedbigcheezy on Instagram), and shock edits. Late August posts like @whyk4re still cleared seven-figure view counts on the same sound.{{2}}{{3}}",
        "Text / image macros on X leaned on -ity puns (@AriTheAriGuy’s “nudity”) and lookalike objects (@LiamBeUponYe’s memorial pin). By September, USA Today and Forbes framed classroom smiley shout-outs as a possible “new 6-7,” while Anne Hathaway quoted the hook to promote the unrelated thriller film Verity. Mods, Halloween costumes, and color-coded personality variants kept the face circulating into fall 2026.{{4}}{{5}}{{6}}{{7}}",
      ],
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Default move: paste the Skunx audio, replace the yellow face with something dumber, and let the earnest greeting do the comedy. Caption puns change the suffix (-ity → nudity, obesity, cruelty). Offline, any yellow smiley can be a “Verity!” callout — the point is recognition, not the ARG plot.{{2}}{{3}}{{5}}",
        "Readings in mainstream explainers: cute UI masking predatory AI; Gen Alpha brainrot after 6-7; Minecraft as a cheap horror set. The song is fan labor, not official Verity canon, which is why remixes feel free to go absurd.{{4}}{{5}}{{6}}",
      ],
      list: [
        "Keep Skunx vocal → swap character (Obesity, Mogity, cartoons)",
        "-ity name puns in captions / tweets",
        "Lip-sync covers and classroom smiley shout-outs",
        "Unrelated yellow objects framed as Verity face reveals",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}{{4}}"],
      list: [
        "30 May 2026 — ThatMob ep. 1: Something is Knocking at Your Door…{{1}}{{4}}",
        "12 Jun 2026 — Ep. 2: Something is Inside Your House…{{4}}",
        "8 Jul 2026 — Ep. 3: Something Won’t Let You Leave…{{4}}",
        "10 Jul 2026 — Horror Skunx uploads It’s Me, It’s Verity{{2}}{{3}}",
        "12 Jul 2026 — ThatMob full compilation movie{{4}}",
        "22 Jul 2026 — @scheisspost Obesity / Fatity TikTok remix (~9M / 4 days){{2}}{{3}}",
        "9 Aug 2026 — @AriTheAriGuy “it’s nudity” pun (~26k likes){{3}}",
        "17–24 Aug 2026 — Instagram covers + @whyk4re TikTok wave{{3}}",
        "20 Aug 2026 — @LiamBeUponYe 9/11 pin Verity macro (~33k likes){{3}}",
        "Sep 2026 — USA Today / Forbes / HuffPost classroom & smiley explainers; Hathaway promo lean-in{{5}}{{6}}{{7}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "YouTube",
      title: "ThatMob — Something is Knocking at Your Door…",
      href: "https://www.youtube.com/watch?v=hGBROjRqyDM",
      date: "30 May 2026",
    },
    {
      id: 2,
      publisher: "YouTube",
      title: "Horror Skunx — It’s Me, It’s Verity",
      href: "https://www.youtube.com/watch?v=tVlKLpxyCBY",
      date: "10 Jul 2026",
    },
    {
      id: 3,
      publisher: "meme.com",
      title: "It’s Me, It’s Verity Meme: Horror Skunx’s Verity Song",
      href: "https://meme.com/memes/its-me-its-verity",
      date: "27 Aug 2026",
    },
    {
      id: 4,
      publisher: "Wikipedia",
      title: "Verity (web series)",
      href: "https://en.wikipedia.org/wiki/Verity_(web_series)",
      date: "2026",
    },
    {
      id: 5,
      publisher: "USA Today",
      title:
        "Why the word ‘Verity’ and yellow smiley faces could become the new ‘6-7’",
      href: "https://www.usatoday.com/story/entertainment/2026/09/11/verity-meme-yellow-smiley-face-meaning-minecraft/91696057007/",
      date: "11 Sep 2026",
    },
    {
      id: 6,
      publisher: "Forbes",
      title: "Who Is ‘Verity’? The TikTok Meme, Explained",
      href: "https://www.forbes.com/sites/danidiplacido/2026/09/27/tiktoks-its-me-its-verity-meme-explained/",
      date: "27 Sep 2026",
    },
    {
      id: 7,
      publisher: "HuffPost UK",
      title: "WTF Is ‘Verity’ And Why Do Kids Keep Singing About It?",
      href: "https://www.huffingtonpost.co.uk/entry/verity-meme-explained_uk_6ab2995be4b085277b5396cb",
      date: "23 Sep 2026",
    },
    {
      id: 8,
      publisher: "whatisthismeme.com",
      title: "It’s Me, It’s Verity Explained",
      href: "https://whatisthismeme.com/meme/its-me-its-verity",
      date: "3 Oct 2026",
    },
    {
      id: 9,
      publisher: "TikTok",
      title: "@scheisspost — Obesity remix creator",
      href: "https://www.tiktok.com/@scheisspost",
      date: "Jul 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported series / song facts · Screenshots © respective platforms / posters · Verity character © ThatMob / series rights holders · Minecraft © Mojang / Microsoft · Unrelated to the Colleen Hoover / Anne Hathaway film Verity except where noted as crossover promo",
} satisfies WikiArticleData;
