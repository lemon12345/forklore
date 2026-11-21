import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const thingsToSayArticle = {
  title: "Things to Say",
  description:
    "TikTok \"things to say when…\" lists pair celebrity stills with intentionally ruinous one-liners—for meeting dad, job interviews, or talking to a doctor.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Things to Say]] is a 2026 participatory meme format: a situation headline (“things to say when meeting her dad,” “during a job interview,” “to your doctor”) paired with a bulleted list of intentionally ruinous one-liners, often next to a celebrity or character still that sells fake confidence.{{1}}{{2}}",
    "The joke is self-help cadence with sabotage content — the opposite of good social advice, delivered like a sigma / hustle-culture tip sheet. TikToker [[@cawkringinvestor]] posted the earliest widely cited entry on 17 Aug 2026 (“Things to say after cracking”); dad-meeting and job-interview variants pushed the template into mass circulation in late August, then Instagram Reels carried it into early September.{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "Things to Say",
    image: {
      src: "/things-to-say/meeting-her-dad.jpeg",
      alt: "Things to Say meme — Matthew McConaughey still beside a list of lines for meeting her dad",
      caption:
        "Breakout variant: McConaughey still + “things to say when meeting her dad” ironic list.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Things to Say meme",
          "Ironic advice list meme",
          "Things to say when…",
        ],
      },
      {
        label: "Type",
        value: "Parody / participatory list macro",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "TikTok @cawkringinvestor · 17 Aug 2026",
        href: "https://www.tiktok.com/@cawkringinvestor",
      },
      {
        label: "Peak wave",
        value: "Late Aug – early Sep 2026",
      },
      {
        label: "Related",
        value: [
          "Advice Dog",
          "Sigma / hustle-culture memes",
          "Rare Fish Investment",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram Reels"],
      },
      {
        label: "Region",
        value: "United States (English TikTok)",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "A typical Things to Say post picks an awkward social beat — meeting a partner’s parents, sitting a job interview, seeing a doctor, talking to a puppy — then lists phrases that would obviously tank the interaction. The layout borrows the confidence of online self-improvement content: numbered or bulleted “tips,” a cool-looking face, and a deadpan delivery.{{1}}{{2}}",
        "Tone sits with late-2020s sigma / grindset parody: exaggerated social dominance sold as a secret script. Writers compare the gag to classic [[Advice Dog]] (bad advice, straight face) and to other paradoxical list formats like Rare Fish Investment memes. Because the template only needs a new headline and a new list, it is easy to fork for school, fandom, dates, rideshares, and niche in-jokes.{{1}}{{3}}",
      ],
      image: {
        src: "/things-to-say/popcreep.jpg",
        alt: "Things to Say meme explainer collage",
        caption:
          "Explainers framed the format as ironic hustle-culture advice lists, not genuine tips.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 17 August 2026, TikToker @cawkringinvestor posted a list titled “Things to say after cracking,” using “cracking” as slang for sex. Documented lines in that origin cut include transactional or awkwardly clinical quips such as “Can I pay with card?” and an enthusiastic “Woohoo!” — framed as post-sex banter you are supposedly meant to deliver. Contemporary tallies put the clip past roughly 1.7 million views within a month.{{1}}{{2}}{{4}}",
        "That post established the layout and the ironic-advice voice later copies reused: situation title, bullet list of sabotage lines, optional celebrity / archetype image. Secondary writeups treat @cawkringinvestor as the user most associated with popularizing the early wave, even as countless untitled remakes followed.{{1}}{{2}}",
      ],
      link: {
        href: "https://popcreep.com/things-to-say-meme-meaning-and-origin/",
        label: "Pop Creep — Things to Say meaning & origin →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin “after cracking” list, the McConaughey dad-meeting breakout, the job-interview spike, and the House M.D. doctor variant — one card per beat.",
      ],
      gallery: [
        {
          id: "cawkringinvestor-origin",
          href: "https://www.tiktok.com/@cawkringinvestor",
          kind: "video",
          source: "web",
          handle: "@cawkringinvestor",
          author: "TikTok origin",
          text: "Things to say after cracking",
          date: "17 Aug 2026",
          caption:
            "Earliest widely cited entry — post-sex banter list that set the ironic-advice template (~1.7M views in a month in tallies).",
          thumbnail: "/things-to-say/origin-after-cracking.jpeg",
          views: "1.7M+",
        },
        {
          id: "therealuncle1-dad",
          href: "https://www.tiktok.com/@therealuncle1",
          kind: "video",
          source: "web",
          handle: "@therealuncle1",
          author: "TikTok",
          text: "Things to say when meeting her dad",
          date: "30 Aug 2026",
          caption:
            "Matthew McConaughey still + dad-meeting sabotage list — major late-August amplifier (~1.1M views in a week).",
          thumbnail: "/things-to-say/meeting-her-dad.jpeg",
          views: "1.1M+",
        },
        {
          id: "richhomie-interview",
          href: "https://www.tiktok.com/@richhomiethugger2867",
          kind: "video",
          source: "web",
          handle: "@richhomiethugger2867",
          author: "TikTok",
          text: "Things to say during a job interview",
          date: "31 Aug 2026",
          caption:
            "Interview-room variant that became one of the format’s highest-viewed early remakes (~2.2M views in a week).",
          thumbnail: "/things-to-say/job-interview.jpeg",
          views: "2.2M+",
        },
        {
          id: "house-doctor",
          href: "https://www.instagram.com/_thebayharborbutcher/",
          kind: "image",
          source: "web",
          handle: "@_thebayharborbutcher",
          author: "Instagram Reels",
          text: "Things to say to your doctor",
          date: "5 Sep 2026",
          caption:
            "Hugh Laurie as House M.D. paired with a doctor-visit list — early September Reels crossover (~69k likes in four days).",
          thumbnail: "/things-to-say/doctor-house.jpg",
          views: "69K+ likes",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "The template accelerated in the last week of August 2026. On 30 Aug, @therealuncle1’s “meeting her dad” McConaughey cut cleared roughly 1.1 million views inside a week; the next day @richhomiethugger2867’s job-interview remake reportedly passed about 2.2 million. Those two posts made the celebrity-still + sabotage-list layout the default look of the trend.{{1}}{{2}}{{5}}{{6}}",
        "In early September the joke jumped to Instagram Reels. On 2 Sep, jack_sonsm48 posted a version that reached tens of thousands of likes (~58.7k in a week in contemporary tallies). On 5 Sep, @_thebayharborbutcher’s House / doctor cut passed roughly 69,000 likes in four days. Fan and niche remakes — dates, mothers, Uber drivers, puppies, game characters — followed the same skeleton without needing a fixed mascot.{{1}}{{2}}{{7}}{{8}}",
      ],
      link: {
        href: "https://meme.com/memes/things-to-say",
        label: "meme.com — Things to Say format summary →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Creators pick a high-stakes or awkward audience, attach a matching “cool” face, and fill the list with lines that would get you fired, dumped, or escorted out. The humor is the mismatch: the presentation promises a social cheat code; the bullets are anti-advice. Searchers usually want the meaning (“is this real advice?”), the origin account, or a specific viral variant (dad / interview / doctor).{{1}}{{3}}",
        "Unlike reaction-image memes locked to one photo, Things to Say is a heading grammar: “Things to say to X” or “Things to say when Y.” That makes it portable across fandoms and offline scenarios while staying readable as a still or a short vertical video.{{1}}{{2}}",
      ],
      list: [
        "Situation headline + bulleted sabotage lines",
        "Celebrity / character still selling fake confidence",
        "Awkward encounters: parents, interviews, doctors, dates",
        "Niche forks: pets, rideshares, game NPCs, fandom bit characters",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Key documented beats:{{1}}{{2}}"],
      list: [
        "17 Aug 2026 — @cawkringinvestor posts “Things to say after cracking” on TikTok (~1.7M views in a month){{1}}{{4}}",
        "30 Aug 2026 — @therealuncle1 McConaughey “meeting her dad” variant (~1.1M views in a week){{1}}{{5}}",
        "31 Aug 2026 — @richhomiethugger2867 job-interview variant (~2.2M views in a week){{1}}{{6}}",
        "2 Sep 2026 — Instagram jack_sonsm48 Reels cut (~58.7k likes in a week){{2}}{{7}}",
        "5 Sep 2026 — @_thebayharborbutcher House M.D. / doctor list (~69k likes in four days){{2}}{{8}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Pop Creep",
      title: "Things To Say Meme Meaning and Origin",
      href: "https://popcreep.com/things-to-say-meme-meaning-and-origin/",
      date: "10 Sep 2026",
    },
    {
      id: 2,
      publisher: "meme.com",
      title: "Things To Say Meme: Ironic Advice TikTok Format Explained",
      href: "https://meme.com/memes/things-to-say",
      date: "10 Sep 2026",
    },
    {
      id: 3,
      publisher: "MyMemeCards",
      title: "Things To Say meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/things-to-say/",
      date: "2 Oct 2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@cawkringinvestor — Things to say after cracking",
      href: "https://www.tiktok.com/@cawkringinvestor",
      date: "17 Aug 2026",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@therealuncle1 — Things to say when meeting her dad",
      href: "https://www.tiktok.com/@therealuncle1",
      date: "30 Aug 2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@richhomiethugger2867 — Things to say during a job interview",
      href: "https://www.tiktok.com/@richhomiethugger2867",
      date: "31 Aug 2026",
    },
    {
      id: 7,
      publisher: "Instagram",
      title: "@jack_sonsm48 — Things to Say Reels variant",
      href: "https://www.instagram.com/jack_sonsm48/",
      date: "2 Sep 2026",
    },
    {
      id: 8,
      publisher: "Instagram",
      title: "@_thebayharborbutcher — House M.D. / doctor list",
      href: "https://www.instagram.com/_thebayharborbutcher/",
      date: "5 Sep 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters · Not affiliated with the celebrities or accounts depicted",
} as const satisfies WikiArticleData;
