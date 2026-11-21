import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const iLivedBitchArticle = {
  title: "I Lived Bitch",
  description:
    "I Lived Bitch meme: 2014 hospital text screenshot—“I Lived Bitch”—turned into a defiant survival catchphrase for beating physical or emotional hardship.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[I Lived Bitch]] is a 2014 catchphrase and text-message screenshot meme. The canonical still is a hospital-bed selfie of a bandaged man plus the gray bubble “I Lived Bitch,” framed as a triumphant update after surgery. Online, the line stands in for surviving a physical ordeal, an emotional crash-out, or any stretch where people half-expected you to be gone.{{1}}{{2}}",
    "Twitter user [[@lolcalista]] posted the exchange in December 2014 under “my stepdad had surgery this morning and he sent me this.” The account was later closed; Instagram reposts and late-2016 / early-2017 fake “presumed dead” caption swaps (coma dad, drowned DiCaprio, dog in a coma) turned the phrase into a portable resurrection joke.{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "I Lived Bitch",
    image: {
      src: "/i-lived-bitch/cover.jpg",
      alt: "Hospital-bed selfie of a bandaged man with the text message I Lived Bitch",
      caption:
        "Canonical still: post-op selfie + the gray bubble “I Lived Bitch.”",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "I lived bitch",
          "I Lived, Bitch",
          "Hospital text meme",
        ],
      },
      {
        label: "Type",
        value: "Catchphrase / text-message screenshot / image macro",
      },
      { label: "Year", value: "2014 (viral waves 2016–2017)" },
      {
        label: "Origin",
        value: "Twitter @lolcalista · Dec 2014",
      },
      {
        label: "Peak waves",
        value: "Apr 2016 Instagram · Dec 2016–Feb 2017 X variants",
      },
      {
        label: "Related",
        value: [
          "Survival / comeback catchphrases",
          "“Presumed dead” caption swaps",
          "Hospital selfie reactions",
        ],
      },
      {
        label: "Platforms",
        value: ["X (Twitter)", "Instagram", "Reddit", "iFunny"],
      },
      {
        label: "Known for",
        value: "Defiant “I’m still here” swagger after hardship",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Most reaction faces sell one emotion. I Lived Bitch sells a whole arc in four words: something tried to take you out, you made it, and you are announcing it with zero humility. The hospital still supplies the medical stakes; the bubble supplies the attitude. Drop the phrase under a finished exam, a post-breakup selfie, a season finale, or a character who canonically “died,” and the joke lands.{{1}}{{2}}",
        "Two formats travel together. One is the original screenshot (or a close crop of the selfie + bubble). The other is the caption snowclone: “My [X], who has been [missing / in a coma / presumed dead], texted me this” above the same bubble — or a swapped photo of a celebrity, pet, or fandom character.{{1}}{{3}}",
      ],
      image: {
        src: "/i-lived-bitch/origin-tweet.jpg",
        alt: "Original @lolcalista tweet showing hospital text I Lived Bitch from contact Brent",
        caption:
          "Origin framing: @lolcalista’s tweet with the Brent hospital text (account later closed).",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "In December 2014, @lolcalista tweeted a screenshot of an iMessage thread with a contact labeled Brent: a hospital-bed selfie (bandage across the upper lip / nose, blue gown, pillows) and the incoming bubble “I Lived Bitch,” captioned “my stepdad had surgery this morning and he sent me this.” The exact day of the first tweet is not firmly documented; a 4 Dec 2014 retweet by @polarizangie is the earliest widely cited recirculation beat. The original @lolcalista account was later closed and taken over.{{1}}{{2}}",
        "The photo reads as a real post-op update rather than a staged stock setup, which is why the phrase stuck to the still. Secondary writeups sometimes blur whether the words were typed or handwritten — the circulating artifact is a text bubble under the selfie.{{1}}",
      ],
      link: {
        href: "https://mymemecards.com/meme-cards/i-lived-bitch/",
        label: "MyMemeCards — meaning & origin summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin tweet crop, the late-2016 viral caption rewrite, DiCaprio / Knuckles branches, and a dog “presumed dead” swap — one card per beat.",
      ],
      gallery: [
        {
          id: "origin-lolcalista",
          href: "https://mymemecards.com/meme-cards/i-lived-bitch/",
          kind: "image",
          source: "web",
          handle: "@lolcalista",
          author: "Twitter origin (archived)",
          text: "my stepdad had surgery this morning and he sent me this",
          date: "Dec 2014",
          caption:
            "Origin screenshot: Brent hospital selfie + “I Lived Bitch” bubble under the stepdad caption.",
          thumbnail: "/i-lived-bitch/origin-tweet.jpg",
        },
        {
          id: "spliced-coma",
          href: "https://x.com/spliced_",
          kind: "image",
          source: "web",
          handle: "@spliced_",
          author: "X variant",
          text: "My dad, who has been in a coma for 3 months and presumed dead, texted me this",
          date: "30 Dec 2016",
          caption:
            "Same hospital still, rewritten as a “presumed dead” resurrection joke — the breakout caption swap (~138k RTs / ~405k likes in contemporary tallies).",
          thumbnail: "/i-lived-bitch/spliced-variant.jpg",
          views: "405K+ likes",
        },
        {
          id: "dicaprio-dawson",
          href: "https://x.com/mytomholland",
          kind: "image",
          source: "web",
          handle: "@mytomholland",
          author: "X variant",
          text: "my husband, who drowned in the ocean 3 years ago and presumed dead, texted me this",
          date: "7 Jan 2017",
          caption:
            "Leonardo DiCaprio / Jack Dawson paddleboard swap — Titanic death joke with the same bubble (~16k RTs / ~27k likes).",
          thumbnail: "/i-lived-bitch/dicaprio-variant.jpg",
          views: "27K+ likes",
        },
        {
          id: "knuckles-echidna",
          href: "https://x.com/Knuckle_Echidna",
          kind: "image",
          source: "web",
          handle: "@Knuckle_Echidna",
          author: "X character account",
          text: "I lived bitch",
          date: "3 Feb 2017",
          caption:
            "Bare-text Knuckles the Echidna status — catchphrase without the hospital still (~10k RTs / ~14k likes in early tallies).",
          thumbnail: "/i-lived-bitch/knuckles-tweet.png",
          views: "14K+ likes",
        },
        {
          id: "dog-coma",
          href: "https://mymemecards.com/meme-cards/i-lived-bitch/",
          kind: "image",
          source: "web",
          handle: "Dog variant",
          author: "Caption snowclone",
          text: "My dog, who has been in a coma for 3 months and presumed dead, texted me this",
          date: "2017 recirculation",
          caption:
            "Pet swap of the “presumed dead” formula — same bubble, new subject.",
          thumbnail: "/i-lived-bitch/dog-variant.jpg",
        },
        {
          id: "samurai-jack",
          href: "https://www.skabash.com/top-10-i-lived-bitch-memes/",
          kind: "image",
          source: "web",
          handle: "Samurai Jack edit",
          author: "Fandom macro",
          text: "the samurai, who has been missing for 50 years and presumed dead, texted me this",
          date: "2017-era edit",
          caption:
            "Fandom insert: Season 5 Jack returns from the time skip with the survival bubble.",
          thumbnail: "/i-lived-bitch/samurai-jack.png",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/i-lived-bitch/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "I Lived Bitch card entry",
          date: "11 Oct 2026",
          caption:
            "Secondary encyclopedia-style card summarizing meaning, 2014 origin, and epic-card framing.",
          thumbnail: "/i-lived-bitch/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "The December 2014 tweet did not become a mass template overnight. On 24 Apr 2016, Instagram account @cohmedy reposted the @lolcalista screenshot and passed roughly 129,900 likes within the first year — the clearest early cross-platform amplifier.{{1}}{{2}}",
        "On 30 Dec 2016, @spliced_ kept the hospital photo but rewrote the top line as “My dad, who has been in a coma for 3 months and presumed dead, texted me this,” racking up on the order of 137,800 retweets and 405,400 likes. That caption formula — ordeal + presumed dead + “texted me this” — became the default remix kit.{{1}}{{3}}",
        "On 7 Jan 2017, @mytomholland swapped in Leonardo DiCaprio paddleboarding as “Jack Dawson” with a drowned-husband setup (~16k RTs / ~27k likes). On 3 Feb 2017, the character account @Knuckle_Echidna posted the bare line “I lived bitch” (~10k RTs / ~14k likes in the first three months). Fandom edits (Samurai Jack, pets, game characters) kept the snowclone alive past the initial wave.{{1}}{{3}}",
      ],
      link: {
        href: "https://www.skabash.com/top-10-i-lived-bitch-memes/",
        label: "Skabash — roundup of I Lived Bitch variants →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Literal read: I survived, and I am rubbing it in. Online read: any comeback after doubt, illness, burnout, cancellation rumors, or a fictional death — delivered with dark humor instead of soft gratitude. Pair with the hospital still, a “presumed dead” caption, or just type the four words under a victory selfie.{{1}}{{2}}",
        "Tone flexes from sincere (post-op, post-illness) to theatrical (surviving a group chat, a finals week, a bad date). The mild profanity is load-bearing: softer lines like “I made it” lose the swagger that makes the meme portable.{{2}}",
      ],
      list: [
        "Post-op / recovery selfie + the catchphrase",
        "“Presumed dead / in a coma / missing” caption snowclone + bubble",
        "Celebrity / character / pet photo swaps (DiCaprio, Jack, dogs, etc.)",
        "Bare-text reaction: type “I lived bitch” after any ordeal",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}"],
      list: [
        "Dec 2014 — @lolcalista posts stepdad / hospital text screenshot{{1}}",
        "4 Dec 2014 — @polarizangie retweet cited as early recirculation{{1}}",
        "24 Apr 2016 — Instagram @cohmedy repost (~130k likes in year one){{1}}{{2}}",
        "30 Dec 2016 — @spliced_ “coma / presumed dead” rewrite goes wide{{1}}{{3}}",
        "7 Jan 2017 — @mytomholland DiCaprio / Jack Dawson paddleboard variant{{1}}{{3}}",
        "3 Feb 2017 — @Knuckle_Echidna posts bare “I lived bitch”{{1}}",
        "2017+ — Pet and fandom snowclones (dog coma, Samurai Jack, etc.){{3}}",
        "2026 — Secondary explainers / card sites lock meaning + origin year{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "MyMemeCards",
      title: "I Lived Bitch meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/i-lived-bitch/",
      date: "11 Oct 2026",
    },
    {
      id: 2,
      publisher: "JCALIT",
      title: "“I Lived, Bitch” Meme: A Tiny Phrase for Big Survival Energy",
      href: "https://jcalit.com/blogs/meme-blogs/i-lived-bitch-meme-29280/",
      date: "10 Aug 2026",
    },
    {
      id: 3,
      publisher: "Skabash",
      title: "Top 10 ‘I lived bitch’ memes to describe overcoming challenges",
      href: "https://www.skabash.com/top-10-i-lived-bitch-memes/",
      date: "2020s roundup",
    },
    {
      id: 4,
      publisher: "Instagram",
      title: "@cohmedy — comedy / meme repost account",
      href: "https://www.instagram.com/cohmedy/",
      date: "24 Apr 2016 (cited repost)",
    },
    {
      id: 5,
      publisher: "X",
      title: "@spliced_ — account tied to the 2016 coma-caption variant",
      href: "https://x.com/spliced_",
      date: "30 Dec 2016",
    },
    {
      id: 6,
      publisher: "X",
      title: "@mytomholland — DiCaprio / Jack Dawson variant account",
      href: "https://x.com/mytomholland",
      date: "7 Jan 2017",
    },
    {
      id: 7,
      publisher: "X",
      title: "@Knuckle_Echidna — bare “I lived bitch” status",
      href: "https://x.com/Knuckle_Echidna",
      date: "3 Feb 2017",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters · Not affiliated with depicted individuals",
} as const satisfies WikiArticleData;
