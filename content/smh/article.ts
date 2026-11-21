import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const smhArticle = {
  title: "SMH",
  description:
    "SMH meaning shaking my head: slang for disbelief, disapproval, or frustration—traced from 1994 Usenet to texts, Twitter, reaction GIFs, and news headlines.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[SMH]] (also [[smh]], [[SMDH]], [[shaking my head]]) is an internet-slang initialism for “shaking my head” — a typed stand-in for the side-to-side head gesture that signals disbelief, disapproval, dismay, or bemused frustration. Writers drop it at the start or end of a line (sometimes mid-sentence) so the reader pictures the shrug of a head shake instead of a full lecture.{{1}}{{2}}",
    "Merriam-Webster traces the abbreviation to at least a 15 Jul 1994 Usenet FAQ-style list; Urban Dictionary logged a popular 2004 gloss; Oxford Dictionaries Online folded it into an August 2014 slang update; and by the late 2010s outlets could put “SMH” unexplained in headlines. Intensifiers ([[SMDH]], [[SMFH]]) and rarer alternate readings (“scratching my head,” “so much hate”) still circulate, but the default parse is the head-shake reaction.{{1}}{{3}}{{4}}",
  ],
  infobox: {
    title: "SMH",
    image: {
      src: "/smh/cover.jpg",
      alt: "SMH — shaking my head internet slang cover",
      caption:
        "Typed gesture slang: SMH = shaking my head (disbelief / disapproval).",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "smh",
          "Shaking my head",
          "SMDH / SMFH (intensified)",
        ],
      },
      {
        label: "Type",
        value: "Internet slang / initialism / reaction",
      },
      { label: "Year", value: "1994+ (mainstream 2000s–2010s)" },
      {
        label: "Origin",
        value: "Usenet shorthand · attested 15 Jul 1994",
        href: "https://www.merriam-webster.com/slang/smh",
      },
      {
        label: "Peak awareness",
        value: "2010s explainers · dictionary / headline use",
      },
      {
        label: "Related",
        value: [
          "Facepalm / head-shake GIFs",
          "LOL / OMG spoken-letter slang",
          "I Guess Bro Jonah Hill GIF",
          "Punisher No No Wait Wait Wait",
          "Sydney Morning Herald (unrelated SMH)",
        ],
      },
      {
        label: "Platforms",
        value: ["Usenet", "SMS / IM", "Twitter / X", "Tumblr", "Reddit"],
      },
      {
        label: "Stands for",
        value: "Shaking my head",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "SMH works like [[LOL]]: it does not paraphrase a sentence so much as stage a body cue. Merriam-Webster glosses it as an expression of disapproval or disbelief, often with “bemused incredulity,” frustration, or impatience toward something the poster finds avoidably dumb. Dictionary.com’s slang writeup stresses the same range—disappointment, disapproval, frustration—and notes that some speakers now say the letters aloud the way they say LOL or OMG.{{1}}{{2}}",
        "Tone is context-dependent. Under a friend’s burnt-toast selfie it can read as soft teasing; under a news clip it usually lands as real exasperation. Writers intensify with [[SMDH]] (“shaking my damn head”), [[SMFH]], or longer variants. Less common glosses include “scratching my head” (confusion) and “so much hate” (disdain); both exist in older explainers but are minority readings next to the head-shake default. Do not confuse the slang with the Australian newspaper [[The Sydney Morning Herald]], also abbreviated SMH.{{1}}{{2}}{{5}}",
      ],
      image: {
        src: "/smh/overview.jpg",
        alt: "SMH meaning overview — disbelief, disapproval, frustration",
        caption:
          "Core read: a typed head shake for disbelief, disapproval, or frustration.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Exact first use is unknown, but Merriam-Webster cites a 15 Jul 1994 post to the Usenet group news.newusers.questions that lists “SMH: shaking my head” beside other early shorthand such as SLG (“silly little grin”) and SOSO (“same old, same old”). That puts the initialism in the pre-social-web chat/newsgroup toolkit—gesture abbreviations that travel faster than full sentences.{{1}}",
        "On 14 Feb 2004, Urban Dictionary user trickologist defined smh as a response to “something so stupid, no words can do it justice,” framing the modern dismissive-reaction sense. Dictionary.com’s culture note places wider SMS / early-Twitter circulation in the 2000s and flags especially early, notable use in Black internet speech communities before the abbreviation went fully mainstream. A June 2007 Urban Dictionary entry for [[SMDH]] (“shaking my damn head”) shows the intensifier stack forming in parallel.{{2}}{{6}}",
      ],
      link: {
        href: "https://www.merriam-webster.com/slang/smh",
        label: "Merriam-Webster — SMH slang entry →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Reaction GIFs (the usual pairing), dictionary / culture cards, and the intensifier / timeline explainers — one beat each.",
      ],
      gallery: [
        {
          id: "giphy-scooter",
          href: "https://giphy.com/gifs/ScooterMagruder-smh-bruh-l3dj28uYzMnVaxzGg",
          kind: "image",
          source: "web",
          handle: "@ScooterMagruder",
          author: "GIPHY reaction",
          text: "shaking my head smh",
          date: "GIPHY",
          caption:
            "Classic head-shake reaction GIF tagged SMH — the body cue the abbreviation stands in for.",
          thumbnail: "/smh/giphy-scooter-still.gif",
        },
        {
          id: "giphy-headshake",
          href: "https://giphy.com/gifs/ScooterMagruder-really-smh-fGI47x34i5cuD9fRnc",
          kind: "image",
          source: "web",
          handle: "@ScooterMagruder",
          author: "GIPHY reaction",
          text: "really / smh",
          date: "GIPHY",
          caption:
            "Second Scooter Magruder head-shake still — the GIF-keyboard form explainers cite alongside the letters.",
          thumbnail: "/smh/giphy-headshake-still.gif",
        },
        {
          id: "giphy-lunchtre",
          href: "https://giphy.com/gifs/instagram-viral-smh-lunchtre-fat-man-shaking-head-89U9rynbndZYLCy5oJ",
          kind: "image",
          source: "web",
          handle: "Lunchtre",
          author: "GIPHY / Instagram",
          text: "Shake Your Head Smh",
          date: "GIPHY",
          caption:
            "Viral Instagram-style head-shake clip recirculated under SMH tags on GIF hosts.",
          thumbnail: "/smh/giphy-lunchtre.webp",
        },
        {
          id: "cover-glyph",
          href: "https://www.merriam-webster.com/slang/smh",
          kind: "image",
          source: "web",
          handle: "Merriam-Webster",
          author: "Dictionary gloss",
          text: "SMH — shaking my head",
          date: "Updated 2026",
          caption:
            "Lexical cover: the three-letter cue plus the head-shake gloss MW treats as primary.",
          thumbnail: "/smh/cover.jpg",
        },
        {
          id: "variants-card",
          href: "https://www.dictionary.com/culture/acronyms/smh",
          kind: "image",
          source: "web",
          handle: "Dictionary.com",
          author: "Culture / acronyms",
          text: "SMDH / SMFH / SMMFH",
          date: "20 Mar 2018",
          caption:
            "Intensifier stack from Dictionary.com’s culture note — damn / fucking upgrades when plain SMH under-sells.",
          thumbnail: "/smh/variants.jpg",
        },
        {
          id: "timeline-card",
          href: "https://www.washingtonpost.com/news/morning-mix/wp/2014/08/14/smh-the-newest-additions-to-the-oxford-online-dictionary-include-cray-yolo-and-adorbs/",
          kind: "image",
          source: "web",
          handle: "Washington Post",
          author: "Oxford slang batch",
          text: "1994 → 2004 → 2014 → headlines",
          date: "14 Aug 2014",
          caption:
            "Timeline card for Usenet → Urban Dictionary → Oxford Dictionaries Online → unexplained headline use.",
          thumbnail: "/smh/timeline.jpg",
        },
        {
          id: "ud-origin",
          href: "https://www.urbandictionary.com/define.php?term=smh",
          kind: "image",
          source: "web",
          handle: "Urban Dictionary",
          author: "trickologist · 14 Feb 2004",
          text: "smh — shake my head",
          date: "14 Feb 2004",
          caption:
            "Early public gloss that framed SMH as the “too stupid for words” dismissive reaction.",
          thumbnail: "/smh/overview.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Through the late 2000s and early 2010s, SMH moved from IM / SMS tone-marking into public feeds. Dictionary.com notes Twitter circulation by around 2007 and later hashtag use (#smh, #smdh). Explainers followed mainstream confusion: Vice’s 29 Aug 2013 piece asked what “shaking my head” still meant and flagged the competing “so much hate” reading; Bustle’s 26 Feb 2015 primer walked readers through daily-use cases with Giphy reaction stills. A short-lived site, SMHMeansWhat (launched 2015), collected text and GIF examples.{{2}}{{5}}{{7}}",
        "Lexical legitimacy arrived in batches. Oxford Dictionaries Online—distinct from the historical Oxford English Dictionary—added SMH in its August 2014 internet-slang update alongside YOLO, cray, FML, and side-eye, covered by outlets including The Washington Post. By January 2018, BET could run an unexplained “SMH:” headline on Jay-Z’s empty-handed Grammys night, evidence the initialism no longer needed a parenthetical. Merriam-Webster’s slang page still refreshes with news quotes (sports, celebrity, consumer gripes) that treat smh as ordinary copy.{{1}}{{3}}{{4}}",
      ],
      link: {
        href: "https://www.dictionary.com/culture/acronyms/smh",
        label: "Dictionary.com — SMH acronym culture note →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default placement is sentence edges: “smh my flight got cancelled,” or “You really said that SMH.” Advanced use drops it mid-line like an em dash—“Can’t believe we work Saturdays smh don’t these people know about weekends?” Self-directed SMH exists (mocking your own choice), but most posts aim the shake at someone else’s take, a brand fail, or a news beat.{{2}}{{5}}",
        "Pairing with media is common: head-shake GIFs/stills, #smh tags, or quote-tweets that let the letters do the dunk. Related intensifiers escalate swearing inside the same gesture frame. If a thread is about Australian news, check whether SMH means the Sydney Morning Herald before assuming slang.{{1}}{{2}}",
      ],
      list: [
        "Disbelief / disapproval closer on texts and posts",
        "Self-roast or soft tease among friends",
        "Headline / hashtag shorthand for exasperation",
        "SMDH / SMFH when plain SMH under-sells the reaction",
        "GIF / reaction-image caption (“smh” over a head shake)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}{{6}}"],
      list: [
        "15 Jul 1994 — Usenet news.newusers.questions lists “SMH: shaking my head”{{1}}",
        "14 Feb 2004 — Urban Dictionary entry by trickologist (dismissive “too stupid for words” sense){{6}}",
        "22 Jun 2007 — Urban Dictionary SMDH (“shaking my damn head”){{6}}",
        "≈2007+ — Wider Twitter / SMS circulation; #smh tagging{{2}}",
        "29 Aug 2013 — Vice explainer notes “so much hate” alternate reading{{5}}",
        "Aug 2014 — Oxford Dictionaries Online adds SMH in a slang batch{{3}}{{4}}",
        "26 Feb 2015 — Bustle SMH meaning primer with Giphy stills{{7}}",
        "2015 — SMHMeansWhat example site launches (later defunct){{2}}",
        "Jan 2018 — BET “SMH:” Jay-Z Grammys headline (unexplained use){{2}}",
        "20 Mar 2018 — Dictionary.com culture / acronyms SMH page{{2}}",
      ],
      image: {
        src: "/smh/timeline.jpg",
        alt: "SMH chronology — 1994 Usenet to headline use",
        caption:
          "From Usenet shorthand to dictionary pages and unexplained headlines.",
      },
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Merriam-Webster",
      title: "SMH — slang meaning (shaking my head)",
      href: "https://www.merriam-webster.com/slang/smh",
      date: "Updated 19 Oct 2026",
    },
    {
      id: 2,
      publisher: "Dictionary.com",
      title: "SMH | Acronyms — shaking my head culture note",
      href: "https://www.dictionary.com/culture/acronyms/smh",
      date: "20 Mar 2018",
    },
    {
      id: 3,
      publisher: "The Washington Post",
      title:
        "SMH: Oxford online dictionary additions include ‘cray,’ ‘YOLO’ and ‘adorbs’",
      href: "https://www.washingtonpost.com/news/morning-mix/wp/2014/08/14/smh-the-newest-additions-to-the-oxford-online-dictionary-include-cray-yolo-and-adorbs/",
      date: "14 Aug 2014",
    },
    {
      id: 4,
      publisher: "NBC News",
      title: "‘Cray,’ ‘YOLO,’ ‘Amazeballs’ Added to Oxford Dictionary",
      href: "https://www.nbcnews.com/pop-culture/viral/cray-yolo-amazeballs-added-oxford-dictionary-n180561",
      date: "14 Aug 2014",
    },
    {
      id: 5,
      publisher: "VICE",
      title: "What Does 'Shaking My Head' Even Mean Anymore?",
      href: "https://www.vice.com/en/article/what-does-shaking-my-head-even-mean-anymore/",
      date: "29 Aug 2013",
    },
    {
      id: 6,
      publisher: "Urban Dictionary",
      title: "smh — shake my head (trickologist entry)",
      href: "https://www.urbandictionary.com/define.php?term=smh",
      date: "14 Feb 2004",
    },
    {
      id: 7,
      publisher: "Bustle",
      title:
        "What Does “SMH” Mean? The Definition Of The Ubiquitous Acronym And How To Use It",
      href: "https://www.bustle.com/articles/66722-what-does-smh-mean-the-definition-of-the-ubiquitous-acronym-and-how-to-use-it-in",
      date: "26 Feb 2015",
    },
    {
      id: 8,
      publisher: "Dictionary.com",
      title: "SMH Definition & Meaning",
      href: "https://www.dictionary.com/browse/smh",
      date: "n.d.",
    },
    {
      id: 9,
      publisher: "Mental Floss",
      title: "From “SYBAU” to “SMH,” Here’s What 20 Common Internet Acronyms Mean",
      href: "https://www.mentalfloss.com/language/common-internet-acronyms-explained-sybau-smh",
      date: "16 Jan 2026",
    },
    {
      id: 10,
      publisher: "GIPHY",
      title: "ScooterMagruder — shaking my head smh GIF",
      href: "https://giphy.com/gifs/ScooterMagruder-smh-bruh-l3dj28uYzMnVaxzGg",
      date: "n.d.",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents internet slang and publicly reported dictionary / news sources · Forklore editorial entry · Not affiliated with Merriam-Webster, Dictionary.com, or Oxford University Press · Reaction GIFs © GIPHY / creators; editorial cards © Forklore",
} as const satisfies WikiArticleData;
