import type {
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export type {
  WikiGalleryItem as MalfoidGalleryItem,
  WikiInfoboxRow as MalfoidInfoboxRow,
  WikiSection as MalfoidSection,
} from "@/content/wiki/types";

export const malfoidArticle = {
  title: "Malfoid",
  description:
    "Fem Malfoy / Female Draco searches land on Malfoid: gender-swap Draco fanart—platinum Slytherin, tsundere roast, then blush—flooding X, TikTok, and AO3.",
  lead: [
    "[[Malfoid]] (also known as Fem Malfoy, Female Draco, Draconia, or Dracaena) is a 2026 viral fan art and meme trend from the [[Harry Potter]] fandom.{{1}} It depicts [[Draco Malfoy]] as a girl — typically a tsundere Slytherin with long platinum-blonde hair, green or grey eyes, and the classic arrogant personality who mocks Harry before blushing.",
    "The current wave was sparked on September 22, 2026 by artist [[https://x.com/redteneri|@redteneri]] on X.{{1}}{{2}} It exploded across X, TikTok, Reddit, and AO3 with thousands of drawings, AI videos, comics, and fanfiction, peaking through October 2026. The trend is not canon; it is a [[Rule 63]] gender-swap phenomenon frequently compared to [[Bowsette]].{{1}}",
  ],
  infobox: {
    title: "Malfoid",
    image: {
      src: "/malfoid/fcmN5.jpg",
      alt: "Malfoid in Slytherin common room",
      caption: "Typical Malfoid depiction from the 2026 wave.",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Fem Malfoy", "Female Draco", "Draconia", "Dracaena"],
      },
      { label: "Type", value: "Fan art / meme trend" },
      { label: "Fandom", value: "Harry Potter" },
      { label: "Based on", value: "Draco Malfoy (Rule 63)" },
      { label: "First known use", value: "10 January 2026 (@swag_chaser)" },
      { label: "Spark", value: "22 September 2026 (@redteneri)" },
      {
        label: "Peak",
        value: "October 2026",
      },
      {
        label: "Platforms",
        value: ["X", "TikTok", "Reddit", "AO3", "Bluesky", "Pixiv", "Bilibili"],
      },
      { label: "Canon status", value: "Not canon" },
      {
        label: "Origin post",
        value: "@redteneri · 22 Sep 2026",
        href: "https://x.com/redteneri/status/2102398387194626330",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "name-and-etymology",
      title: "Name and etymology",
      paragraphs: [
        "“Malfoid” is a portmanteau of Malfoy and foid. “Foid” (from femoid) is a derogatory term that originated in incel communities. Many creators treat the nickname as a joke label; others prefer Fem Draco, Draconia, or Dracaena.",
        "The word appeared in text-only posts before the visual trend took off. Earliest known use in reference to Draco is a January 10, 2026 post by @swag_chaser on X, with no accompanying art. On September 8, 2026, TikTok user @80saerobicz posted an Alight Motion edit captioned “shut up malfoid” while still depicting male Draco — showing the name was circulating before the iconic look landed.",
        "On September 29, 2026, Reddit’s r/dankmemes helped fix a given name: Draconia (sometimes Dracaena). Fan accounts and later AI series often use Draconia as her in-fiction first name.",
      ],
    },
    {
      id: "precursors",
      title: "Precursors",
      paragraphs: [
        "Female Draco art existed in fanfiction from the early 2000s. On November 9, 2011, Tumblr user maariaaargh posted an early Rule 63 drawing that remained a niche curiosity with a few hundred notes over the years.",
        "A clearer precursor arrived on March 10, 2024, when X user @grizz056 posted two pieces titled “If Malfoy was a girl.” The post later surpassed 60,000 likes and 6,400 reposts and is frequently cited as a direct lead-in to the 2026 wave — smug first, meltdown second.{{1}}{{3}}",
      ],
      image: {
        src: "/malfoid/69GWj.jpg",
        alt: "Precursor Fem Malfoy fan art by @grizz056",
        caption:
          "“If Malfoy was a girl,” @grizz056, 10 March 2024 — a widely cited precursor.",
      },
      link: {
        href: "https://x.com/grizz056/status/1766771258178613565",
        label: "View precursor post on X →",
      },
    },
    {
      id: "origin",
      title: "Origin of the 2026 wave",
      paragraphs: [
        "On September 22, 2026 — Tom Felton’s birthday — artist @redteneri posted an anime-style drawing of a platinum-blonde female Draco leaning in and mocking Harry: “Since when are you one of the top students in the school, Potter?” The post passed roughly 89,000 likes in the first week and continued climbing past 180k likes and 23 million views by late October.{{1}}{{2}}",
        "This post is widely credited with igniting the trend. It fixed the typical design grammar: long platinum hair, Slytherin uniform, smug-then-blushing expression, and green eyes in the original.{{1}}",
      ],
      image: {
        src: "/malfoid/JIt41.jpg",
        alt: "Iconic Malfoid designs from the September 2026 spark",
        caption:
          "Designs associated with the September 22, 2026 spark by @redteneri.",
      },
      link: {
        href: "https://x.com/redteneri/status/2102398387194626330",
        label: "View origin post on X →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Selected posts from X — still art and AI-animated clips that defined the wave. Click a card to watch or open the original post.",
      ],
      gallery: [
        {
          id: "redteneri-origin",
          href: "https://x.com/redteneri/status/2102398387194626330",
          kind: "image",
          handle: "@redteneri",
          author: "REDTEN⚡",
          text: "Origin drawing that sparked the 2026 wave",
          date: "22 Sep 2026",
          caption:
            "The September 22 spark post by @redteneri — the drawing most credited with starting the trend.",
          thumbnail: "/malfoid/JIt41.jpg",
          views: "23M+",
        },
        {
          id: "zey-not-going",
          href: "https://x.com/ZeyHashimoto/status/2108978798024945704",
          kind: "video",
          handle: "@ZeyHashimoto",
          author: "Zey",
          text: "#Malfoid is NOT going with Potter.",
          date: "10 Oct 2026",
          caption:
            "Breakthrough AI clip: dormmates tease Malfoid about the dance while she rummages through her trunk.",
          thumbnail: "/malfoid/x-zey-not-going.jpg",
          duration: "0:30",
          views: "13M+",
        },
        {
          id: "zey-wasnt-asking",
          href: "https://x.com/ZeyHashimoto/status/2108847892802707532",
          kind: "video",
          handle: "@ZeyHashimoto",
          author: "Zey",
          text: "#Malfoid wasn't asking.",
          date: "10 Oct 2026",
          caption:
            "Early Higgsfield AI short that helped lock in the enemies-to-lovers formula.",
          thumbnail: "/malfoid/x-2108847892802707532.jpg",
          duration: "0:30",
          views: "6.4M+",
        },
        {
          id: "zey-dance",
          href: "https://x.com/ZeyHashimoto/status/2109563994881024314",
          kind: "video",
          handle: "@ZeyHashimoto",
          author: "Zey",
          text: "Potter asked if she enjoyed the dance. #Malfoid",
          date: "12 Oct 2026",
          caption:
            "Payoff clip: Harry asks on a snowy lakeshore whether she enjoyed the dance.",
          thumbnail: "/malfoid/x-2109563994881024314.jpg",
          duration: "1:00",
          views: "1.5M+",
        },
        {
          id: "zey-ep1",
          href: "https://x.com/ZeyHashimoto/status/2111896008477352111",
          kind: "video",
          handle: "@ZeyHashimoto",
          author: "Zey",
          text: "Malfoid Won’t Admit It — Episode 1",
          date: "18 Oct 2026",
          caption:
            "First numbered episode of the AI series: a food fight over Potter ends in the hospital wing.",
          thumbnail: "/malfoid/x-zey-ep1.jpg",
          duration: "4:55",
          views: "2.4M+",
        },
        {
          id: "grizz-precursor",
          href: "https://x.com/grizz056/status/1766771258178613565",
          kind: "image",
          handle: "@grizz056",
          author: "Grizz",
          text: "If malfoy was a girl",
          date: "10 Mar 2024",
          caption:
            "Widely cited 2024 precursor — two panels of smug-then-flustered girl Draco.",
          thumbnail: "/malfoid/69GWj.jpg",
          views: "5M+",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread and peak",
      paragraphs: [
        "Between September 27 and 29, 2026, a wave of follow-up art appeared. Notable posts included works by @spaz141, @tns2804, and especially @masoq095, who captioned a drawing simply “malfoid.” The name stuck. Reddit’s r/dankmemes carried a meme that reached thousands of upvotes and helped popularize “Draconia Malfoid.”",
        "By late September the trend was widely documented across fan communities. Early October brought an explosion of AI-generated videos, short animations, fan comics, dating-sim experiments, and rewrite fics on AO3. Artists from Korea, Japan, and elsewhere joined; comparisons to Bowsette became common.",
      ],
      image: {
        src: "/malfoid/4M8kH.jpg",
        alt: "Early malfoid follow-up art",
        caption: "Follow-up wave art from late September 2026.",
      },
      subsections: [
        {
          id: "cross-platform",
          title: "Cross-platform reception",
          paragraphs: [
            "On October 5–6, 2026, Japanese artist Yunayu posted female Draco art on Bluesky, received hostile replies, deleted the posts, then reposted on X to a warmer reception — a snapshot of platform differences.",
            "By October 7–8 the trend dominated many X feeds, with “malfoid is EVERYWHERE” circulating as a common refrain among posters and quote-repost chains.",
          ],
          image: {
            src: "/malfoid/7NQ7E.jpg",
            alt: "Malfoid peak attention era art",
            caption: "Peak-attention era imagery, October 2026.",
          },
        },
        {
          id: "mainstream",
          title: "Mainstream spillover",
          paragraphs: [
            "In late October 2026, the U.S. Department of Education posted an image resembling the long-haired female Draco style with the caption “There’s Magic in Learning,” then quoted Dumbledore when asked about it. Coverage followed in outlets including the Daily Wire and WIRED.",
            "By November 2026 the trend still supported long-form YouTube videos, music, AI series, and roleplay accounts, suggesting staying power beyond a one-week meme cycle.",
          ],
          image: {
            src: "/malfoid/KvOER.jpg",
            alt: "Mainstream-adjacent Malfoid imagery",
            caption: "Mainstream-adjacent imagery from late October 2026.",
          },
        },
      ],
    },
    {
      id: "ai-videos",
      title: "AI videos and series",
      paragraphs: [
        "In early October 2026 the format jumped from still drawings to animation — much of it AI-generated. Clips follow an enemies-to-lovers beat: Malfoid insults Harry, insists she does not care, then a blush or averted glance gives the game away. Recurring set-ups include a refused Yule Ball invitation, a rival for Harry’s attention, and quiet lakeside moments.",
        "The highest-profile account is [[https://x.com/ZeyHashimoto|@ZeyHashimoto]], billed as an AI anime creator and crediting Higgsfield. The October 10 short “#Malfoid is NOT going with Potter.” reached roughly 13 million views{{5}}; the first six clips from October 10–12 passed 28 million views combined.{{1}} On October 18 the account launched a numbered series, [[https://x.com/ZeyHashimoto/status/2111896008477352111|Malfoid Won’t Admit It]], with Episode 1 running nearly five minutes.{{4}}",
        "Other early AI entries included @schmede_AI’s short film “The Only Explanation” (Vidu) and YouTube music video “Malfoid – Be My Potter” by KNIGHTS WATCH (Suno + Grok Imagine).{{1}} There is no single official storyline — each creator runs a separate continuity, and aggregator reposts often strip credit.",
      ],
      image: {
        src: "/malfoid/x-zey-not-going.jpg",
        alt: "Still from ZeyHashimoto AI Malfoid clip",
        caption:
          "Thumbnail from @ZeyHashimoto’s viral “NOT going with Potter” clip, 10 October 2026.",
      },
      link: {
        href: "https://x.com/ZeyHashimoto/status/2108978798024945704",
        label: "Watch the breakthrough clip on X →",
      },
    },
    {
      id: "notable-works",
      title: "Notable works",
      paragraphs: [
        "Beyond still portraits, the wave produced comics that drop Malfoid into book scenes. Manga artist [[https://x.com/Sachi_Hwa|@Sachi_Hwa]] reworked the midnight duel from Philosopher’s Stone and other Hogwarts beats; Korean creators such as @sigmman posted multi-part Patronus and butterbeer strips. @masoq095’s late-September sheet and jealousy comics helped lock the nickname and tone.",
        "Adult “epilogue” takes also circulated: family portraits and “Nineteen Years Later” endings by artists including @FroggiArt and @Sujeito_Q. Off-screen, fans posted handmade clay figures, cosplay, and miniature robe dressing — none of it official merchandise.",
        "Interactive experiments followed quickly: dating-sim style demos, rewrite fics on AO3, and roleplay accounts. These remain fan projects with no Warner Bros. endorsement.",
      ],
      list: [
        "@redteneri — spark drawing (22 Sep 2026) and one-month thank-you sketch",
        "@ZeyHashimoto — AI series Malfoid Won’t Admit It (from 10 Oct 2026)",
        "@Sachi_Hwa — book-scene manga / comics (robe shop, midnight duel, …)",
        "@masoq095 — early “malfoid” caption sheet and jealousy comics",
        "@grizz056 — 2024 “If Malfoy was a girl” precursor",
      ],
      image: {
        src: "/malfoid/iy0KR.jpg",
        alt: "Malfoid character sheet style art",
        caption: "Character-sheet style art from the settled design grammar.",
      },
    },
    {
      id: "international",
      title: "International spread",
      paragraphs: [
        "Japanese illustrators were among the earliest and most-shared artists after the spark; tags such as 女体化マルフォイ and Pixiv encyclopedia entries followed. Korean artists contributed manhwa-flavored villainess and Patronus serials. In China, AI compilations on Bilibili drew hundreds of thousands of plays, with Weibo tagging genderswapped Malfoy AI works.{{1}}",
        "Explainers also appeared in Spanish- and Vietnamese-language outlets. Multilingual comic packs (JP/CN/EN/KR) circulated on Pixiv, showing the character traveling as a shared template rather than an English-only meme.{{1}}",
      ],
    },
    {
      id: "visual-characteristics",
      title: "Visual characteristics",
      paragraphs: [
        "Across the wave, a recurring character grammar settled quickly. Most widely circulated works share the same silhouette and attitude cues even when style, medium, or platform differs.",
      ],
      list: [
        "Long platinum or pale blonde hair",
        "Slytherin robes with green/silver tie",
        "Tsundere expression arc (smirk → blush)",
        "Frequent “Pottah” / dragged-out “Potter”",
        "Harry as the primary love interest",
        "Catchphrase leftovers: “My father will hear about this”",
      ],
      image: {
        src: "/malfoid/iy0KR.jpg",
        alt: "Malfoid character sheet",
        caption: "Character sheet illustrating the settled design grammar.",
      },
    },
    {
      id: "appeal",
      title: "Appeal",
      paragraphs: [
        "Creators and commenters commonly describe the appeal as a gender-swapped Drarry fantasy that preserves Draco’s snark and pure-blood arrogance while adding a classic tsundere beat: insult, then blush. The Slytherin aesthetic travels cleanly into anime and AI pipelines, which helped the format scale across platforms.",
        "In-canon Draco already offers Harry friendship in Philosopher’s Stone and is refused — then spends years seeking his attention through rivalry. That “snobbish outside, desperate for Harry underneath” dynamic maps cleanly onto the Malfoid formula.",
      ],
      list: [
        "Keeps Draco’s snark, arrogance, and Slytherin look",
        "Adds the tsundere insult → blush formula",
        "Harry × Malfoid as the main pairing",
        "Frequently compared to Bowsette (female Bowser)",
        "Spawned AI videos, dating sims, rewrite fics, and mainstream posts",
      ],
      image: {
        src: "/malfoid/fcmN5.jpg",
        alt: "AI-style Malfoid in Slytherin common room",
        caption: "Common-room / AI-animation style example from the October wave.",
      },
    },
    {
      id: "reception",
      title: "Reception and debate",
      paragraphs: [
        "The trend split the fandom along familiar lines. Supporters treated the clips and comics as the most fun Harry Potter fan media in years. Critics labeled AI output “slop,” pointed to frame-level glitches, and argued the look borrowed heavily from existing anime aesthetics.",
        "Credit disputes followed: human artists built the initial wave, and some creators complained that aggregator accounts reposted videos without permission. Rights questions also sat in the background — Warner Bros. had sued Midjourney over character images in 2025 and objected to some Seedance AI videos — though no Malfoid-specific legal action has been widely reported.",
        "Separately, some fans reject the “Malfoid” label itself because of the incel-rooted “foid” etymology, preferring Fem Malfoy, Female Draco, or Draconia even while posting inside the same visual trend.",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: [
        "Key moments in the documented arc, from early Rule 63 art through the 2026 explosion:",
      ],
      list: [
        "9 Nov 2011 — Early Tumblr Rule 63 drawing by maariaaargh",
        "10 Mar 2024 — @grizz056 “If Malfoy was a girl” precursor wave",
        "10 Jan 2026 — Earliest known “Malfoid” text use (@swag_chaser)",
        "8 Sep 2026 — “shut up malfoid” TikTok edit (male Draco)",
        "22 Sep 2026 — @redteneri spark post (~23M views by late Oct)",
        "27–29 Sep 2026 — Name sticks; Reddit coins “Draconia Malfoid”",
        "Late Sep 2026 — Trend widely documented in fan communities",
        "7–9 Oct 2026 — First AI shorts and music videos appear",
        "10–12 Oct 2026 — @ZeyHashimoto AI clips go viral (13M+ on top short)",
        "18 Oct 2026 — Malfoid Won’t Admit It Episode 1",
        "Late Oct 2026 — Mainstream spillover; epilogue / family art surge",
        "Nov 2026 — Continued long-form episodes, comics, and cosplay",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Aguamenti",
      title:
        "What Is Malfoid and Why Are AI Anime Videos of Her All Over Your Feed",
      href: "https://aguamenti.news/what-is-malfoid/",
      date: "16 Oct 2026 (updated Nov 2026)",
    },
    {
      id: 2,
      publisher: "X",
      title: "@redteneri — origin spark post",
      href: "https://x.com/redteneri/status/2102398387194626330",
      date: "22 Sep 2026",
    },
    {
      id: 3,
      publisher: "X",
      title: "@grizz056 — “If malfoy was a girl”",
      href: "https://x.com/grizz056/status/1766771258178613565",
      date: "10 Mar 2024",
    },
    {
      id: 4,
      publisher: "X",
      title: "@ZeyHashimoto — Malfoid Won’t Admit It, Episode 1",
      href: "https://x.com/ZeyHashimoto/status/2111896008477352111",
      date: "18 Oct 2026",
    },
    {
      id: 5,
      publisher: "X",
      title: "@ZeyHashimoto — “#Malfoid is NOT going with Potter.”",
      href: "https://x.com/ZeyHashimoto/status/2108978798024945704",
      date: "10 Oct 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · All art © original creators · For cultural documentation only",
} as const;
