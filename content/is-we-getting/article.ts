import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const isWeGettingArticle = {
  title: "Is We Getting",
  description:
    "Google autocomplete screenshots starting \"Is we getting…\"—usually food stamps, SNAP, or a stimulus check—revived as a snowclone when benefits talk spiked.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Is We Getting]] (also known as [[Is We Getting Food Stamps]] or [[Is We Getting a Stimulus Check]]) is a Google Search Suggestions meme and snowclone built on the nonstandard sentence starter “Is we getting …”. Autocomplete screenshots commonly finish the line with welfare or relief queries such as food stamps or a stimulus check.{{1}}{{2}}",
    "The format surfaced during the 2020 COVID-19 stimulus era, spread through 4chan and 9GAG, and returned to mass attention on X in October 2025 when a screenshot reading “Is we getting food stamps this month?” went viral during a U.S. government shutdown that threatened SNAP benefits.{{1}}{{3}}{{4}} Related “Is they cutting …” variants followed. Some circulated screenshots were later called satirical or inaccurate.{{2}}",
  ],
  infobox: {
    title: "Is We Getting",
    image: {
      src: "/is-we-getting/autocomplete.png",
      alt: "Google-style autocomplete suggestions starting with is we getting",
      caption:
        "Characteristic autocomplete template: “is we getting …” completed with relief / benefits queries.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Is We Getting Food Stamps",
          "Is We Getting a Stimulus Check",
        ],
      },
      { label: "Type", value: "Catchphrase / snowclone / exploitable" },
      { label: "Year", value: "2020 (revival 2025)" },
      { label: "Origin", value: "Google Search Suggestions / 4chan / X" },
      { label: "Peak waves", value: "Aug 2020 · Oct 2025" },
      {
        label: "Related",
        value: ["Is They Cutting", "Google Search Suggestions", "Stimmy memes"],
      },
      {
        label: "Platforms",
        value: ["4chan", "9GAG", "X", "iFunny", "Facebook", "TikTok"],
      },
      {
        label: "2025 viral post",
        value: "@hayasaka_aryan · 25 Oct 2025",
        href: "https://x.com/hayasaka_aryan",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Is We Getting works as a phrasal template: type or paste the broken subject–verb agreement “Is we getting,” then attach whatever benefit, service, or cultural object the joke needs — stimulus checks, food stamps, Netflix, and so on. The punchline is usually a screenshot of search-engine autocomplete, presented as if it were organic popular demand.{{1}}{{2}}",
        "Reception is split. Some posters treat it as dark humor about economic anxiety; others use it as a stereotype punchline aimed at Black American English and low-income searchers. Documentation of the meme routinely notes that racial mockery is part of how the format circulated, especially on imageboards and among right-wing accounts.{{2}}",
      ],
      image: {
        src: "/is-we-getting/stimulus-screenshot.jpg",
        alt: "Google suggestions for is we getting beside a U.S. Treasury stimulus check",
        caption:
          "2020 stimulus-era collage: autocomplete pack (left) with Economic Impact Payment imagery (right).",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "In July 2020, during debate over U.S. pandemic relief payments, some X users posted variants of “Is we getting another stimulus check?” in earnest.{{2}} Within days, screenshots of Google suggestions such as “Is we getting a second stimulus checks?” appeared on 4chan’s /pol/ board (early August 2020), framed as proof of “the current state of America.”{{2}}",
        "On August 4–6, 2020, 9GAG user @danwhatevs helped push the autocomplete image into broader meme circulation, writing that he first assumed the screenshot was doctored until he tested the query himself. Suggestions in early packs included stimulus checks, hazard pay, and food stamps.{{1}}",
        "The format sat inside a wider 2020 “stimmy” meme ecology about Economic Impact Payments under the CARES Act and later rounds ($1,200, then $600, then $1,400).{{1}}",
      ],
      link: {
        href: "https://dailydot.com/is-we-getting-a-stimulus-check-meme",
        label: "Daily Dot history of the stimulus-check wave →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Representative screenshots and coverage cards. Click to open the source; Instagram-era Reels are not the primary artifact — search suggestion images are.",
      ],
      gallery: [
        {
          id: "autocomplete-template",
          href: "https://dailydot.com/is-we-getting-a-stimulus-check-meme",
          kind: "image",
          source: "web",
          handle: "Template",
          author: "Autocomplete mock",
          text: "is we getting …",
          date: "Template",
          caption:
            "Characteristic suggestion list finishing the “is we getting” stem with benefits-related queries.",
          thumbnail: "/is-we-getting/autocomplete.png",
        },
        {
          id: "daily-dot-stimulus",
          href: "https://dailydot.com/is-we-getting-a-stimulus-check-meme",
          kind: "image",
          source: "web",
          handle: "Daily Dot",
          author: "Lindsey Weedston",
          text: "“Is we getting a stimulus check?”: History of a meme",
          date: "4 Jun 2024",
          caption:
            "Daily Dot breakdown of the 2020 Google suggestion screenshot and stimmy context.",
          thumbnail: "/is-we-getting/stimulus-screenshot.jpg",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/is-we-getting-is-we-getting-food-stamps/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Editorial",
          text: "Is We Getting / Is We Getting Food Stamps?",
          date: "2 Oct 2026",
          caption:
            "Independent card/encyclopedia summary covering 2020 origin through the 2025 revival.",
          thumbnail: "/is-we-getting/card.webp",
        },
        {
          id: "hayasaka-wave",
          href: "https://x.com/hayasaka_aryan",
          kind: "image",
          source: "web",
          handle: "@hayasaka_aryan",
          author: "X revival",
          text: "Is we getting food stamps this month?",
          date: "25 Oct 2025",
          caption:
            "Account behind the October 2025 screenshot post that drove ~1.9M views (caption: “Bruh”).",
          thumbnail: "/is-we-getting/autocomplete.png",
          views: "1.9M+",
        },
        {
          id: "bbc-snap",
          href: "https://www.bbc.com/news/articles/c4g7d9j7p5qo",
          kind: "image",
          source: "web",
          handle: "BBC News",
          author: "Max Matza",
          text: "Food stamps: US government says it will stop paying for food aid next week",
          date: "26 Oct 2025",
          caption:
            "News context for the 2025 revival: USDA warning that SNAP benefits would halt amid the shutdown.",
          thumbnail: "/is-we-getting/stimulus-screenshot.jpg",
        },
        {
          id: "snopes-snap",
          href: "https://www.snopes.com/news/2025/10/21/snap-benefits-november-shutdown/",
          kind: "image",
          source: "web",
          handle: "Snopes",
          author: "Megan Loe",
          text: "Will SNAP benefits be issued in November 2025?",
          date: "21 Oct 2025",
          caption:
            "Fact-check / news roundup of state warnings and USDA messaging during the shutdown.",
          thumbnail: "/is-we-getting/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "After the 2020 breakout, the screenshot recirculated for years whenever benefits or inflation talk returned. A June 2022 X post by @HarmlessYardDog (later deleted) showed then-current suggestions with the caption “Well, is we?”; an iFunny repost in July 2023 collected thousands of smiles.{{2}}",
        "On November 15, 2024, commentator Nick Fuentes posted “Is we getting the Netflix back,” extending the snowclone beyond government payments and into culture-war joke territory.{{2}} Daily Dot noted a 2024 Twitter resurfacing tied to shrinkflation anxiety.{{1}}",
      ],
    },
    {
      id: "2025-revival",
      title: "2025 revival",
      paragraphs: [
        "On October 25, 2025, X user @hayasaka_aryan posted a Google suggestions screenshot headed by “Is we getting food stamps this month?” with the caption “Bruh.” The post passed roughly 1.9 million views and 54,000 likes within two days.{{2}}{{3}} At the same moment, federal messaging around a prolonged government shutdown warned that SNAP (food stamps) funding for November was in doubt — context covered by outlets including BBC and Snopes.{{4}}{{5}}",
        "Within days, parallel “Is they cutting food stamps / EBT …” suggestion screenshots trended as a sister format. At least one widely shared Facebook example was flagged by the poster as satirical rather than a live Google ranking — a reminder that many suggestion memes are edited or staged even when the snowclone itself is real.{{2}}",
      ],
      subsections: [
        {
          id: "snap-context",
          title: "SNAP / shutdown backdrop",
          paragraphs: [
            "USDA notices in late October 2025 stated that without appropriated funds, November SNAP benefits would not issue (“the well has run dry”), affecting tens of millions of recipients.{{4}} States issued warnings; later court orders and the end of the shutdown scrambled the payment timeline. The meme rode that news cycle more than it created it.{{5}}",
          ],
        },
      ],
    },
    {
      id: "variants",
      title: "Variants",
      paragraphs: [
        "The core stem supports endless completions. Documented clusters include:",
      ],
      list: [
        "Is we getting a stimulus check / another stimulus check (2020)",
        "Is we getting food stamps / food stamps this month (2020 · 2025)",
        "Is we getting hazard pay / more food stamps (early autocomplete packs)",
        "Is we getting the Netflix back (2024 snowclone joke)",
        "Is they cutting food stamps / EBT / housing aid (2025 sister format)",
      ],
    },
    {
      id: "reception",
      title: "Reception and controversy",
      paragraphs: [
        "As a Google Search Suggestions meme, Is We Getting sits with other “autocomplete as sociology” jokes: the screenshot is treated as a poll of who is typing what. That reading is unreliable — autocomplete is personalized, localized, and easy to fake — yet the image still functions as a punchline about class and race.{{1}}{{2}}",
        "Critics argue the format mainly launders anti-Black stereotypes under the cover of grammar policing. Defenders sometimes claim it targets “the system” or shared precarity. Coverage that simply reprints the screenshot without naming the stereotype risk tends to recycle the harm. This entry records both the template’s history and that documented framing.{{2}}",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Key moments in the documented arc:{{1}}{{2}}"],
      list: [
        "Jul 2020 — “Is we getting another stimulus check?” posts appear on X{{2}}",
        "1–5 Aug 2020 — /pol/ circulates Google suggestion screenshots{{2}}",
        "4–6 Aug 2020 — 9GAG @danwhatevs spreads the autocomplete image{{1}}",
        "2020–21 — Mixes with stimmy / $600 stimulus meme wave{{1}}",
        "27 Jun 2022 — @HarmlessYardDog “Well, is we?” screenshot post{{2}}",
        "11 Jul 2023 — iFunny repost gains thousands of smiles{{2}}",
        "15 Nov 2024 — Nick Fuentes: “Is we getting the Netflix back”{{2}}",
        "25 Oct 2025 — @hayasaka_aryan food-stamps screenshot goes mega-viral{{2}}{{3}}",
        "26–27 Oct 2025 — SNAP shutdown news + “Is they cutting …” variants{{4}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Daily Dot",
      title: "“Is we getting a stimulus check?”: History of a meme",
      href: "https://dailydot.com/is-we-getting-a-stimulus-check-meme",
      date: "4 Jun 2024",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Is We Getting / Is We Getting Food Stamps? — meaning and origin",
      href: "https://mymemecards.com/meme-cards/is-we-getting-is-we-getting-food-stamps/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "X",
      title: "@hayasaka_aryan — October 2025 food-stamps suggestion post",
      href: "https://x.com/hayasaka_aryan",
      date: "25 Oct 2025",
    },
    {
      id: 4,
      publisher: "BBC News",
      title:
        "Food stamps: US government says it will stop paying for food aid next week",
      href: "https://www.bbc.com/news/articles/c4g7d9j7p5qo",
      date: "26 Oct 2025",
    },
    {
      id: 5,
      publisher: "Snopes",
      title: "Will SNAP benefits be issued in November 2025? What we know",
      href: "https://www.snopes.com/news/2025/10/21/snap-benefits-november-shutdown/",
      date: "21 Oct 2025 (updated 27 Oct)",
    },
    {
      id: 6,
      publisher: "Reuters",
      title:
        "US Department of Agriculture says no food aid benefits will be issued next month",
      href: "https://www.reuters.com/world/us/us-department-agriculture-says-no-food-aid-benefits-will-be-issued-next-month-2025-10-26/",
      date: "26 Oct 2025",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
