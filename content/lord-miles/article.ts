import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const lordMilesArticle = {
  title: "Lord Miles",
  description:
    "Who is Lord Miles? Miles Routledge is a British adventure tourist and X personality whose April–May 2025 Haiti invasion posts went viral as a meme event.",
  curatedLabel: "Curated entry · Nov 2026 · Sensitive",
  lead: [
    "[[Lord Miles]] is the online name of [[Miles Routledge]], a British adventure tourist, YouTuber, and X personality best known for traveling to Afghanistan during and after the 2021 fall of Kabul, and for a 2023 detention by Taliban intelligence that ended with his release that October.{{1}}{{2}}{{3}}",
    "In April–May 2025 he posted a series of claims about recruiting a small armed group, raising funds, and invading Haiti to found a new state. The posts drew volunteer DMs, jokes, and explainers; press and meme coverage treated the episode as a viral internet event around a proposed scheme that did not become a confirmed invasion.{{4}}{{5}}",
  ],
  infobox: {
    title: "Lord Miles",
    image: {
      src: "/lord-miles/infobox.jpg",
      alt: "Miles Routledge (Lord Miles) selfie in a church interior, 2024",
      caption:
        "Miles Routledge (Lord Miles), photographed 2024 — Wikipedia / Commons.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Miles Routledge", "Lord Miles Official"],
      },
      {
        label: "Type",
        value: "Internet personality / meme event",
      },
      { label: "Year", value: "Public rise 2021 · Haiti posts 2025" },
      {
        label: "Known for",
        value: "Afghanistan travel · Haiti invasion posts",
      },
      {
        label: "Handle",
        value: "@real_lord_miles",
        href: "https://x.com/real_lord_miles",
      },
      {
        label: "Related",
        value: [
          "Danger tourism",
          "Fall of Kabul",
          "Haiti crisis discourse",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "YouTube", "4chan (early)", "Facebook (early)"],
      },
      {
        label: "Status (Haiti)",
        value: "Online proposal / meme event · no confirmed invasion",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Public reporting frames Routledge as an English “danger tourist” who built an audience by documenting high-risk travel — especially Afghanistan — then posting far-right-leaning commentary on X. Wikipedia and mainstream outlets identify him as a far-right YouTuber / war tourist rather than a conventional travel vlogger.{{1}}{{3}}",
        "The 2025 [[Haiti invasion]] thread is a separate meme beat: a run of X posts pitching a private takeover of Haiti, follower volunteer claims, talk of funding and a “business plan,” and antagonistic posts aimed at Haitian gang figure Jimmy “Barbecue” Chérizier. Coverage emphasized the gap between viral seriousness-posturing and any verified operation on the ground.{{4}}{{5}}",
      ],
      image: {
        src: "/lord-miles/overview.jpg",
        alt: "Collage of Lord Miles with an X post about conquering Haiti",
        caption:
          "Meme-event collage style: Routledge beside a circulated X post about “conquering Haiti” (derogatory wording often censored in reprints).",
      },
    },
    {
      id: "background",
      title: "Background",
      paragraphs: [
        "Routledge studied physics at Loughborough University. In August 2021 he flew into Kabul as the Taliban took the capital, posted about being stranded, spoke to UK press (including saying he had “accepted death”), and was evacuated to Dubai around 17 August. The episode made him a niche internet figure across 4chan, Facebook, and later X.{{1}}{{2}}{{6}}",
        "He returned to Afghanistan on later trips. On a third visit in early 2023 he was detained by the Taliban’s General Directorate of Intelligence (from about 2 March). BBC reporting named him among four British men released in October 2023. A memoir, [[Lord Miles in Afghanistan]], was published by Antelope Hill Publishing in December 2022 — a detail noted in contemporaneous VICE coverage of his capture.{{1}}{{2}}{{3}}",
      ],
      link: {
        href: "https://en.wikipedia.org/wiki/Miles_Routledge",
        label: "Wikipedia — Miles Routledge →",
      },
    },
    {
      id: "haiti-posts",
      title: "Haiti invasion posts",
      paragraphs: [
        "Haiti has faced a prolonged political, economic, and security crisis since around 2018, worsened after the 2021 assassination of President Jovenel Moïse, with gangs controlling large parts of Port-au-Prince — context human-rights and news outlets document independently of Routledge.{{7}}",
        "On 26 April 2025 he posted on X pitching the idea of taking Haiti with roughly “50 armed men” and creating a new country, writing that he “can’t believe nobody else is considering this.” Follow-up posts claimed dozens to hundreds of volunteers had messaged him; later May posts talked up funding, an institutional investor, and a “business plan for a new nation,” plus a promised survey for applicants. He also posted hostile remarks aimed at gang leader “Barbecue.” Tallies circulated with the posts (views / likes / reposts in the high thousands to seven figures on the earliest pitch) but are platform-ephemeral.{{4}}{{5}}",
        "French public radio Mouv’ (26 May 2025) summarized the arc as attention-seeking trolling that still floated a structured neo-colonial fantasy — and called an actual takeover by a young influencer “obviously unrealizable.” As of that coverage, the public record was social-media claims, not verified troop movements or territorial control. Forklore documents the meme discourse; it does not endorse, recruit for, or instruct any violent plan.{{5}}",
      ],
      link: {
        href: "https://www.radiofrance.fr/mouv/podcasts/culture-internet/culture-internet-du-lundi-26-mai-2025-9981490",
        label: "Mouv’ — Lord Miles, le troll qui voulait envahir Haïti →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Portrait still, Haiti-post collage, and press/meme explainers. Cards open third-party sources — not recruitment materials.",
      ],
      gallery: [
        {
          id: "portrait",
          href: "https://en.wikipedia.org/wiki/Miles_Routledge",
          kind: "image",
          source: "web",
          handle: "Wikipedia",
          author: "Commons",
          text: "Miles Routledge portrait (2024)",
          date: "2024",
          caption:
            "Commons portrait used across biographical summaries of the Lord Miles persona.",
          thumbnail: "/lord-miles/infobox.jpg",
        },
        {
          id: "haiti-collage",
          href: "https://x.com/real_lord_miles",
          kind: "image",
          source: "web",
          handle: "@real_lord_miles",
          author: "X collage",
          text: "Haiti conquest post collage",
          date: "May 2025",
          caption:
            "Widely recirculated collage pairing Routledge with a Haiti “conquer” X post — core visual of the meme event.",
          thumbnail: "/lord-miles/haiti-cover.jpg",
        },
        {
          id: "editorial-still",
          href: "https://www.radiofrance.fr/mouv/podcasts/culture-internet/culture-internet-du-lundi-26-mai-2025-9981490",
          kind: "image",
          source: "web",
          handle: "Mouv’ / Radio France",
          author: "Culture Internet",
          text: "Lord Miles Haiti explainer still",
          date: "26 May 2025",
          caption:
            "Explainer framing used when French radio covered the Haiti posts as troll-to-project attention strategy.",
          thumbnail: "/lord-miles/editorial-cover.jpg",
        },
        {
          id: "vice-afghan",
          href: "https://www.vice.com/en/article/lord-miles-flees-taliban-publishes-memoir-at-white-nationalist-press-gets-captured-by-taliban/",
          kind: "image",
          source: "web",
          handle: "VICE",
          author: "Matthew Gault",
          text: "Taliban capture / memoir coverage",
          date: "3 Apr 2023",
          caption:
            "Pre-Haiti profile: memoir deal and 2023 detention that cemented the danger-tourist reputation.",
          thumbnail: "/lord-miles/infobox.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Online reactions",
      paragraphs: [
        "On X, replies and quote-posts mixed volunteer cosplay, “is he serious?” debates, and absurdist memes (including Apu-style reaction images cited in meme roundups). The joke formats usually lampooned the scale of the claim — private citizens “founding a country” — rather than providing operational detail.{{4}}{{5}}",
        "Explainers outside the anglophone meme circuit (e.g. Mouv’) stressed that virality itself was the product: posting extreme stakes as content while Haiti’s real crisis remained a backdrop. No major outlet verified an embarked invasion force. Later blog updates claiming dropout or spin-off “consulting” groups are thinly sourced and are not treated here as established fact.{{5}}",
      ],
    },
    {
      id: "usage",
      title: "How the meme is used",
      paragraphs: [
        "In practice, “Lord Miles / Haiti” functions as shorthand for overconfident internet invasion fantasies, shitpost-to-project escalation, and far-right edgelord branding colliding with a real humanitarian crisis. Typical uses: screenshot dumps of his posts, volunteer-DM jokes, and “business plan for a new nation” punchlines.{{4}}{{5}}",
        "Documenting the meme is not the same as amplifying calls to violence. Paramilitary invasion of a foreign country is illegal under international and domestic law; this entry summarizes publicly reported posts and coverage only.{{5}}",
      ],
      list: [
        "Screenshot / collage of Haiti “invasion” X posts",
        "“Is he serious?” vs pure-troll reaction threads",
        "Volunteer-DM / 50-men scale jokes",
        "Danger-tourist lore callbacks (Kabul 2021, Taliban detention)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{4}}{{5}}"],
      list: [
        "Aug 2021 — Arrives in Kabul during Taliban takeover; evacuated ~17 Aug{{1}}{{2}}",
        "Dec 2022 — Lord Miles in Afghanistan published (Antelope Hill){{3}}",
        "2 Mar–Oct 2023 — Detained by Taliban GDI; released with other British nationals{{1}}{{2}}",
        "26 Apr 2025 — First widely cited Haiti “50 armed men” pitch on X{{4}}",
        "27–28 Apr 2025 — Claims dozens/hundreds of volunteers messaged him{{4}}",
        "14–19 May 2025 — Funding / “business plan” posts; survey talk; Barbecue antagonism{{4}}",
        "26 May 2025 — Mouv’ explainer frames posts as unrealizable troll-project{{5}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Wikipedia",
      title: "Miles Routledge",
      href: "https://en.wikipedia.org/wiki/Miles_Routledge",
      date: "2026",
    },
    {
      id: 2,
      publisher: "BBC News",
      title: "Four British men freed after Afghanistan detention",
      href: "https://www.bbc.com/news/uk-67066728",
      date: "10 Oct 2023",
    },
    {
      id: 3,
      publisher: "VICE",
      title:
        "Lord Miles Flees Taliban, Publishes Memoir at White Nationalist Press, Gets Captured by Taliban",
      href: "https://www.vice.com/en/article/lord-miles-flees-taliban-publishes-memoir-at-white-nationalist-press-gets-captured-by-taliban/",
      date: "3 Apr 2023",
    },
    {
      id: 4,
      publisher: "X",
      title: "@real_lord_miles — Haiti invasion post thread (Apr–May 2025)",
      href: "https://x.com/real_lord_miles",
      date: "Apr–May 2025",
    },
    {
      id: 5,
      publisher: "Mouv’ / Radio France",
      title: "Lord Miles, le troll qui voulait envahir Haïti",
      href: "https://www.radiofrance.fr/mouv/podcasts/culture-internet/culture-internet-du-lundi-26-mai-2025-9981490",
      date: "26 May 2025",
    },
    {
      id: 6,
      publisher: "Euronews",
      title:
        "Meet the 22-year-old British student stuck in Afghanistan: 'I've bitten off more than I can chew'",
      href: "https://www.euronews.com/2021/08/16/meet-the-22-year-old-british-student-stuck-in-afghanistan-i-ve-bitten-off-more-than-i-can-",
      date: "16 Aug 2021",
    },
    {
      id: 7,
      publisher: "Human Rights Watch",
      title: "Haiti: Country Page / crisis reporting",
      href: "https://www.hrw.org/africa/haiti",
      date: "2024–2025",
    },
    {
      id: 8,
      publisher: "Newsweek",
      title:
        "‘No Regrets’: Student Stuck in Kabul After Planning ’10 Most Dangerous Countries’ Holiday",
      href: "https://www.newsweek.com/no-regrets-student-stuck-kabul-after-planning-10-most-dangerous-countries-holiday-1619900",
      date: "16 Aug 2021",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Sensitive entry · Documents publicly reported internet personality / meme-event coverage only · Does not endorse, recruit for, or provide instructions for any invasion, paramilitary activity, or violence · Alleged plans described in social posts were not independently confirmed as an executed operation · Screenshots © respective platforms / posters · Portrait © Wikimedia Commons contributors",
} satisfies WikiArticleData;
