import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const wouldntYouLikeToKnowWeatherBoyArticle = {
  title: "Wouldn't You Like to Know Weather Boy",
  description:
    'Weather boy meme from Fox 5 Vegas: kid snaps "wouldn\'t you like to know, weather boy?" at Ted Pretty—a staged 2017 skit turned catchphrase and image macro.',
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Wouldn't You Like to Know Weather Boy]] (also [[Weather Boy]], [[Weather Boi]]) is a 2017 viral-video catchphrase and later image macro. In a Fox 5 Las Vegas fireworks segment, meteorologist [[Ted Pretty]] asks a kid browsing a catalog what the best firework to buy is; the boy answers, deadpan, “Wouldn't you like to know, weather boy?”{{1}}{{2}}",
    "The bit looked like a random kid roasting a weatherman on live TV. Pretty and mainstream writeups quickly confirmed it was staged: the boy is Pretty's then-12-year-old son, who pitched the line himself. Phone-cam uploads, a /r/videos spike, YouTube remixes, and 2019–2020 screenshot macros kept the retort portable long after the news cycle.{{1}}{{3}}{{4}}",
  ],
  infobox: {
    title: "Wouldn't You Like to Know Weather Boy",
    image: {
      src: "/wouldnt-you-like-to-know-weather-boy/cover.jpg",
      alt: "Weather boy meme still — kid delivering wouldn't you like to know weather boy line",
      caption:
        "Canonical still from the Fox 5 Vegas fireworks skit: the deadpan “weather boy” burn.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Weather Boy",
          "Weather Boi",
          "Wouldn't you like to know, weather boy?",
        ],
      },
      {
        label: "Type",
        value: "Viral video / catchphrase / image macro",
      },
      { label: "Year", value: "2017 (macros ~2019–2020)" },
      {
        label: "Origin",
        value: "Fox 5 Vegas · Ted Pretty fireworks segment",
      },
      {
        label: "Peak waves",
        value: "Jun 2017 video · 2019–2020 macros",
      },
      {
        label: "Related",
        value: [
          "Local-news roast clips",
          "Kid sasses adult formats",
          "Screenshot reaction macros",
        ],
      },
      {
        label: "Platforms",
        value: ["YouTube", "Twitter/X", "Reddit", "iFunny", "Tumblr"],
      },
      {
        label: "Known for",
        value: "Withholding answer + calling the meteorologist “weather boy”",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke is a register crash: a fireworks shopper treats a TV meteorologist like a nosy underling and refuses the tip. Delivery matters — flat tone, zero smile, then Pretty's stunned “Where are your parents? Kid's sketchy. Back to you guys.” Extending the skit, he riffs on “feral children” and respecting elders, which only made the staged father–son reveal funnier in hindsight.{{1}}{{2}}{{4}}",
        "Online the line travels two ways. One is the clip itself (short phone-cam cut or longer broadcast take). The other is a subtitled screenshot of the boy mid-line, dropped under fandom setups where a character refuses to spill a secret. Spellings flip between “weather boy” and “weather boi.”{{3}}{{5}}",
      ],
      image: {
        src: "/wouldnt-you-like-to-know-weather-boy/esquire-still.jpg",
        alt: "Weather Boi still used in Esquire coverage of the Fox 5 Vegas skit",
        caption:
          "Press still circulated with early explainers of the Weather Boi roast.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "In late June 2017, Fox 5 Vegas chief meteorologist Ted Pretty filed a Fourth of July fireworks stand piece. Off-camera he asked his son to tag along; the boy suggested Pretty ask what the best firework was so he could answer “Wouldn't you like to know?” Pretty added the “weather boy” kicker on air. Local viewers who already knew Pretty as a dad of two were more likely to clock the bit as a goof.{{1}}{{2}}",
        "On 28 Jun 2017, YouTube user Fireattack142 uploaded a camera-off-TV recording of the exchange; the same day, Twitter user LVNative90 posted a cleaner extended cut, and /r/videos user AidantheAidan shared the short clip (~31k upvotes in later tallies). Pretty replied on Twitter to criticism of the kid with “You really have to question his upbringing! #myson,” confirming the relationship.{{3}}{{4}}{{5}}",
        "Esquire's Luke O'Neil interviewed Pretty the next day: the idea was a fun live-shot joke, not a national prank — though national audiences had no reason to know the kid was family. TIME and SB Nation covered the same reveal cycle. A 2020 Fox 5 “Weather Boy Skit Explanation” segment later walked through the fakery on camera.{{1}}{{2}}{{4}}",
      ],
      link: {
        href: "https://www.esquire.com/news-politics/news/a56034/weather-boi-ted-pretty-interview/",
        label: "Esquire — Ted Pretty / Weather Boi interview →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin phone-cam energy, the longer YouTube recirculation, and press stills that locked the “weather boy” frame — one card per beat.",
      ],
      gallery: [
        {
          id: "fireattack142-origin",
          href: "https://www.youtube.com/watch?v=py44k46RR_0",
          kind: "video",
          source: "web",
          handle: "Fireattack142",
          author: "YouTube phone-cam",
          text: "Wouldn't you like to know, weather boy?",
          date: "28 Jun 2017",
          caption:
            "Early camera-off-TV upload of the Fox 5 fireworks exchange that seeded the meme.",
          thumbnail: "/wouldnt-you-like-to-know-weather-boy/yt-origin.jpg",
          duration: "~0:12",
          views: "2M+ (multi-year tallies)",
        },
        {
          id: "big-bird-boi-full",
          href: "https://www.youtube.com/watch?v=XOi2jFIhZhA",
          kind: "video",
          source: "web",
          handle: "Big Bird Boi",
          author: "YouTube full clip",
          text: "Weather Boi — Full Clip",
          date: "17 Jan 2018",
          caption:
            "Extended recirculation of the LVNative90-style take, including Pretty's “feral children” follow-up (~17M views in later tallies).",
          thumbnail: "/wouldnt-you-like-to-know-weather-boy/yt-full-clip.jpg",
          duration: "full segment",
          views: "17M+",
        },
        {
          id: "esquire-coverage",
          href: "https://www.esquire.com/news-politics/news/a56034/weather-boi-ted-pretty-interview/",
          kind: "image",
          source: "web",
          handle: "Esquire",
          author: "Luke O'Neil interview",
          text: "R.I.P., Weather Boi…",
          date: "29 Jun 2017",
          caption:
            "Same-day interview confirming the boy is Pretty's son and that the premise was the kid's idea.",
          thumbnail: "/wouldnt-you-like-to-know-weather-boy/esquire-still.jpg",
        },
        {
          id: "sbnation-lookit",
          href: "https://www.sbnation.com/lookit/2017/6/29/15892662/weather-boi-meme-fireworks-video-hoax",
          kind: "image",
          source: "web",
          handle: "SB Nation",
          author: "Lookit",
          text: "Weather boi… turns out it's a hoax",
          date: "29 Jun 2017",
          caption:
            "Sports-site Lookit writeup framing the clip as too neat — then pointing at Pretty's #myson reveal.",
          thumbnail: "/wouldnt-you-like-to-know-weather-boy/sbnation-still.jpg",
        },
        {
          id: "cover-still",
          href: "https://time.com/4840108/weather-boy-youtube/",
          kind: "image",
          source: "web",
          handle: "TIME",
          author: "Raisa Bruner",
          text: "Unflinchingly sassed by his own son",
          date: "29 Jun 2017",
          caption:
            "National roundup of the Fox 5 burn and the staged father–son reveal.",
          thumbnail: "/wouldnt-you-like-to-know-weather-boy/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Within a day of the Fireattack142 and LVNative90 uploads, remixes and “sequel” fake encounters hit YouTube (including AEIOU edits and Alx DeCarlo's “WEATHER BOI” remix). TIME, Esquire, SB Nation, and GOOD covered the clip as both comedy and staged reveal.{{1}}{{2}}{{4}}{{6}}",
        "On 17 Jan 2018, Big Bird Boi's “Weather Boi — Full Clip” reupload of the longer take became the durable discovery copy for later viewers (multi-million views). From ~2019, subtitled screenshots of the kid saying the line moved onto iFunny, Tumblr, /r/dankmemes, and /r/HistoryMemes as a “refuse to explain” reaction face.{{3}}{{5}}",
        "A July 2017 YouTube follow-up skit had Pretty told “I'm eating, don't bother me, weather boy” by a young girl — proof the nickname stuck as a reusable punchline even when the original fireworks setup was swapped out.{{3}}",
      ],
      link: {
        href: "https://www.reddit.com/r/videos/comments/6k4npt/when_you_just_tryna_find_dem_good_good_fireworks/",
        label: "Reddit /r/videos — early viral post →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Use the line when someone asks for information you are pointedly not giving — spoilers, passwords, crush updates, plot twists. Pair with the subtitled boy still, or type the full sentence as a reply. Calling the asker “weather boy” (or “weather boi”) is optional seasoning once the catchphrase is known.{{3}}{{5}}",
        "Tone is smug withholding, not sincere secrecy. The humor is that the refusal is theatrical and the insult is oddly specific: demoting a credentialed meteorologist to “weather boy.”{{1}}{{2}}",
      ],
      list: [
        "Clip reaction: drop the short exchange under a “ask me anything / I refuse” setup",
        "Screenshot macro: subtitled boy still + top-text naming the secret",
        "Bare-text reply: “wouldn't you like to know, weather boy?”",
        "Nickname reuse: call someone “weather boy/boi” after a mild roast",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "Late Jun 2017 — Fox 5 Vegas fireworks stand segment with Ted Pretty and his son{{1}}{{2}}",
        "28 Jun 2017 — Fireattack142 YouTube phone-cam upload; LVNative90 Twitter extended cut; /r/videos share by AidantheAidan{{3}}{{5}}",
        "28–29 Jun 2017 — Pretty #myson tweet; TIME / Esquire / SB Nation coverage{{1}}{{2}}{{4}}",
        "29–30 Jun 2017 — Early YouTube edits and remixes{{3}}",
        "13 Jul 2017 — Follow-up fake encounter (“I'm eating, don't bother me, weather boy”){{3}}",
        "17 Jan 2018 — Big Bird Boi “Weather Boi — Full Clip” reupload{{3}}",
        "2019–2020 — Screenshot image macros on iFunny, Tumblr, Reddit{{3}}{{5}}",
        "20 Aug 2020 — Fox 5 “Weather Boy Skit Explanation” uploaded to YouTube{{3}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Esquire",
      title: "R.I.P., Weather Boi, the Funniest Meme We Barely Got to Know",
      href: "https://www.esquire.com/news-politics/news/a56034/weather-boi-ted-pretty-interview/",
      date: "29 Jun 2017",
    },
    {
      id: 2,
      publisher: "TIME",
      title:
        "This FOX Weather Reporter Got Unflinchingly Sassed By His Own Son On-Air",
      href: "https://time.com/4840108/weather-boy-youtube/",
      date: "29 Jun 2017",
    },
    {
      id: 3,
      publisher: "YouTube",
      title: "Big Bird Boi — Weather Boi Full Clip",
      href: "https://www.youtube.com/watch?v=XOi2jFIhZhA",
      date: "17 Jan 2018",
    },
    {
      id: 4,
      publisher: "SB Nation",
      title:
        "‘Weather boi’ is the internet’s favorite new meme, but it turns out it’s a hoax",
      href: "https://www.sbnation.com/lookit/2017/6/29/15892662/weather-boi-meme-fireworks-video-hoax",
      date: "29 Jun 2017",
    },
    {
      id: 5,
      publisher: "Reddit",
      title:
        "r/videos — When you just tryna find dem good good fireworks but da cool kids don't like ya",
      href: "https://www.reddit.com/r/videos/comments/6k4npt/when_you_just_tryna_find_dem_good_good_fireworks/",
      date: "28 Jun 2017",
    },
    {
      id: 6,
      publisher: "YouTube",
      title: "Fireattack142 — Weather boi (phone-cam origin upload)",
      href: "https://www.youtube.com/watch?v=py44k46RR_0",
      date: "28 Jun 2017",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
