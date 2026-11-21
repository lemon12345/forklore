import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const whatDoDjsActuallyDoArticle = {
  title: "What the Fuck Do DJs Actually Do",
  description:
    "What do DJs actually do meme: Madeline Argy's teary July 2023 TikTok asking what DJ dials do, then DJ remix replies from Glass Petals, Loud Luxury, and Hedex.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[What the Fuck Do DJs Actually Do]] (also [[What Do DJs Actually Do]], [[WTF do DJs actually do]], [[DJ dials meme]]) is a July 2023 viral TikTok and remix format. Creator [[@madelineargy]] (Madz) films herself crying while asking what club DJs are doing at the decks — convinced the remix is made ahead of time and wondering whether the dials are even connected.{{1}}",
    "The clip blew past tens of millions of views within two weeks and immediately pulled DJ replies: live beat-match demos, booth explainers, and tracks that sample her sobs as a vocal hook. By late July 2023, set footage from [[Loud Luxury]] and a melodic remix from [[Glass Petals]] had turned the question into a short-form EDM inside joke.{{1}}{{3}}{{4}}",
  ],
  infobox: {
    title: "What the Fuck Do DJs Actually Do",
    image: {
      src: "/what-do-djs-actually-do/tt-madz.jpg",
      alt: "What Do DJs Actually Do meme — Madeline Argy crying TikTok still about DJ dials",
      caption:
        "Canonical energy: Madz mid-cry, asking what the dials on the decks actually do.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "What Do DJs Actually Do",
          "WTF do DJs actually do",
          "DJ dials meme",
          "Madz DJ TikTok",
        ],
      },
      {
        label: "Type",
        value: "Viral video / remix / participatory media",
      },
      { label: "Year", value: "2023" },
      {
        label: "Origin",
        value: "TikTok @madelineargy · 20 Jul 2023",
        href: "https://www.tiktok.com/@madelineargy/video/7257983414014446875",
      },
      {
        label: "Peak wave",
        value: "Jul 2023 (TikTok → X / YouTube)",
      },
      {
        label: "Related",
        value: [
          "Will He Perform",
          "Wait I'm Goated",
          "I Guess Bro Jonah Hill GIF",
          "No No No Wait Wait Wait",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "X (Twitter)", "YouTube", "Instagram"],
      },
      {
        label: "Signature replies",
        value: "Glass Petals · Loud Luxury · Hedex · DJ Phil Harris",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke sits on a long-running crowd suspicion: if the drop already exists as a file, why is the person on stage twisting so many knobs? Madz’s video packages that doubt as a tearful FAQ — “I don’t think they’re remixing the song on the spot… so what dials are they pressing? Is it a volume dial? Is it even connected to anything?” — which made the clip easy to stitch, sample, and answer on camera.{{1}}{{2}}",
        "Two reply genres stuck. Demo replies put a DJ in the booth and walk through cueing, beat-matching, EQ, and crossfades with her audio under or beside the mix. Remix replies treat the rant as a topline, looping and pitching the cry until it sits inside a house, DnB, or tech-house track played out live.{{1}}{{3}}{{4}}",
      ],
      image: {
        src: "/what-do-djs-actually-do/ladbible-og.png",
        alt: "What Do DJs Actually Do meme overview still from the viral Madz TikTok cycle",
        caption:
          "Overview still for the July 2023 wave: tearful question → DJ answer / remix flood.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 20 Jul 2023, TikToker @madelineargy (Madz) posted the crying clip that asks what DJs actually do, arguing the remix is prepared ahead of time and questioning what the deck dials control. The upload cleared roughly 29.4 million views in the following two weeks and became the seed audio for the reply wave.{{1}}",
        "The next day, X user @impreshn recirculated the video (~5,600 likes / ~600,000 views in ten days in early tallies), and TikToker @qnoematata answered by remixing Madz’s audio in real time (~291,000 views in the same window). Those two beats turned a single tearful rant into a prompt other DJs could answer on camera.{{2}}{{5}}",
      ],
      link: {
        href: "https://www.tiktok.com/@madelineargy/video/7257983414014446875",
        label: "TikTok — @madelineargy origin clip →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin cry, live remix / booth answers, wall projection set piece, and a straight-faced gear walkthrough — one card per beat.",
      ],
      gallery: [
        {
          id: "tt-madelineargy",
          href: "https://www.tiktok.com/@madelineargy/video/7257983414014446875",
          kind: "video",
          source: "web",
          handle: "@madelineargy",
          author: "Origin TikTok",
          text: "What the fuck do DJs actually do?",
          date: "20 Jul 2023",
          caption:
            "Seed clip: Madz crying through the dials FAQ (~29.4M views in ~two weeks).",
          thumbnail: "/what-do-djs-actually-do/tt-madz.jpg",
          views: "29.4M+ views (2-week tally)",
        },
        {
          id: "tt-hedexuk",
          href: "https://www.tiktok.com/@hedexuk/video/7258567385114856731",
          kind: "video",
          source: "web",
          handle: "@hedexuk",
          author: "DJ reply",
          text: "THIS IS WHAT DJS DO",
          date: "22 Jul 2023",
          caption:
            "Hedex stitch / booth performance answer (~2.1M views in just over a week).",
          thumbnail: "/what-do-djs-actually-do/tt-hedex.jpg",
          views: "2.1M+ views",
        },
        {
          id: "tt-loudluxury",
          href: "https://www.tiktok.com/@loudluxury/video/7259496955078774021",
          kind: "video",
          source: "web",
          handle: "@loudluxury",
          author: "Live remix",
          text: "CAN SOMEONE FINALLY EXPLAIN TO HER WHAT WE ACTUALLY DO???",
          date: "25 Jul 2023",
          caption:
            "Loud Luxury plays a Madz remix while projecting the clip on a show wall (~15M views in six days).",
          thumbnail: "/what-do-djs-actually-do/tt-loudluxury.jpg",
          views: "15M+ views (6-day tally)",
        },
        {
          id: "yt-phil-harris",
          href: "https://www.youtube.com/watch?v=WUjr_LSR19A",
          kind: "video",
          source: "web",
          handle: "DJ Phil Harris",
          author: "Gear explainer",
          text: "What do DJs actually do?",
          date: "28 Jul 2023",
          caption:
            "Short YouTube walkthrough of cueing, beat-match, and EQ while answering the viral question.",
          thumbnail: "/what-do-djs-actually-do/yt-phil-harris.jpg",
          views: "13K+ views (3-day early tally)",
        },
        {
          id: "tt-glasspetals",
          href: "https://www.tiktok.com/@glasspetals/video/7260908614439816454",
          kind: "video",
          source: "web",
          handle: "@glasspetals",
          author: "Remix reply",
          text: "nm really @madz just hangin out",
          date: "29 Jul 2023",
          caption:
            "Glass Petals remix that became one of the wave’s largest reply clips (~51M views in two days in early tallies).",
          thumbnail: "/what-do-djs-actually-do/tt-glasspetals.jpg",
          views: "51M+ views (2-day tally)",
        },
        {
          id: "x-impreshn",
          href: "https://x.com/impreshn/status/1682377375034613760",
          kind: "video",
          source: "web",
          handle: "@impreshn",
          author: "X recirculation",
          text: "Repost of Madz DJ dials clip",
          date: "21 Jul 2023",
          caption:
            "Early X recirculation that helped push the TikTok beyond the app (~5.6K likes / ~600K views in ten days).",
          thumbnail: "/what-do-djs-actually-do/x-impreshn.jpg",
          views: "600K+ views (10-day tally)",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "After the X recirculation and @qnoematata’s same-day remix, DnB DJ @hedexuk posted a stitch showing a live performance answer on 22 Jul 2023 (~2.1 million views in just over a week). On 25 Jul, @loudluxury uploaded a tour remix with Madz’s face on the backdrop (~15 million views in six days), proving the audio worked as a festival gag as well as a bedroom edit.{{1}}{{3}}",
        "On 28 Jul, DJ Phil Harris posted a YouTube short that names each control while beat-matching — the straight FAQ branch of the meme. The next day, @glasspetals dropped a remix that rocketed past 51 million views in two days in early tallies, locking the catchphrase as a reusable vocal sample for other producers (UPSAHL duets, Tazi / Emrave edits, and soft-irony “bleach their hair” jokes followed in the same cycle).{{1}}{{4}}{{6}}",
      ],
      link: {
        href: "https://www.tiktok.com/@loudluxury/video/7259496955078774021",
        label: "TikTok — Loud Luxury wall-projection remix →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Default read: someone is “just pressing buttons” — usually a DJ, sometimes any performer whose gear looks performative. Pair Madz’s audio (or the shortened “what do DJs actually do” caption) with booth footage, a remix drop, or a deadpan cutaway to someone fiddling with unrelated knobs.{{1}}{{2}}",
        "Tone swings between sincere FAQ and affectionate roast. Explainer edits answer her literally; remix edits celebrate that the rant itself became the song. Caption-only posts work once the cry is already in the thread.{{1}}{{3}}",
      ],
      list: [
        "Tearful origin audio as a stitch / duet prompt",
        "Live booth demos answering “what the dials do”",
        "Vocal-hook remixes sampled into house / DnB / tech-house",
        "Festival wall projections of the Madz clip during the drop",
        "Soft-irony “DJs just bleach their hair” punchlines",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{3}}{{4}}"],
      list: [
        "20 Jul 2023 — @madelineargy posts the crying “what do DJs actually do” TikTok{{1}}",
        "21 Jul 2023 — @impreshn X recirculation; @qnoematata real-time remix reply{{2}}{{5}}",
        "22 Jul 2023 — @hedexuk booth / performance stitch (~2.1M views){{1}}",
        "25 Jul 2023 — @loudluxury wall-projection remix (~15M views in six days){{1}}{{3}}",
        "28 Jul 2023 — DJ Phil Harris YouTube gear explainer{{1}}{{4}}",
        "29 Jul 2023 — @glasspetals remix (~51M views in two days){{1}}{{6}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "TikTok",
      title: "@madelineargy — What the fuck do DJs actually do?",
      href: "https://www.tiktok.com/@madelineargy/video/7257983414014446875",
      date: "20 Jul 2023",
    },
    {
      id: 2,
      publisher: "TikTok",
      title: "@qnoematata — real-time Madz remix reply",
      href: "https://www.tiktok.com/@qnoematata/video/7258280204517346587",
      date: "21 Jul 2023",
    },
    {
      id: 3,
      publisher: "TikTok",
      title: "@loudluxury — CAN SOMEONE FINALLY EXPLAIN TO HER WHAT WE ACTUALLY DO???",
      href: "https://www.tiktok.com/@loudluxury/video/7259496955078774021",
      date: "25 Jul 2023",
    },
    {
      id: 4,
      publisher: "YouTube",
      title: "DJ Phil Harris — What do DJs actually do? #shorts",
      href: "https://www.youtube.com/watch?v=WUjr_LSR19A",
      date: "28 Jul 2023",
    },
    {
      id: 5,
      publisher: "X",
      title: "@impreshn — recirculation of the Madz DJ dials clip",
      href: "https://x.com/impreshn/status/1682377375034613760",
      date: "21 Jul 2023",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@glasspetals — Madz remix reply",
      href: "https://www.tiktok.com/@glasspetals/video/7260908614439816454",
      date: "29 Jul 2023",
    },
    {
      id: 7,
      publisher: "TikTok",
      title: "@hedexuk — THIS IS WHAT DJS DO stitch",
      href: "https://www.tiktok.com/@hedexuk/video/7258567385114856731",
      date: "22 Jul 2023",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Not affiliated with Madeline Argy, Glass Petals, Loud Luxury, Hedex, or DJ Phil Harris · Screenshots © respective platforms / posters · Forklore wiki entry",
} as const satisfies WikiArticleData;
