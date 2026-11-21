import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const glupShittoArticle = {
  title: "Glup Shitto",
  description:
    "When loreheads cheer a deep-cut Star Wars cameo, fandom calls it Glup Shitto—Tumblr slang later winked at with a Glop Shdo poster in The Mandalorian and Grogu.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Glup Shitto]] is a fake Star Wars character name and fandom slang term. It mocks (and sometimes celebrates) the moment when hardcore fans spot a deep-cut Expanded Universe figure returning in a new film or show — the kind of cameo that means everything to people who watched [[The Clone Wars]] or [[Rebels]], and nothing to casual viewers.{{1}}{{2}}",
    "Tumblr user [[gomjabbar]] coined the joke on September 3, 2020: “every time a new Star War movie or show is announced all the fans are like ‘OMG Glup Shitto is back 😭😭😭’.” The line took off during [[The Mandalorian]] Season 2 and later generalized across fandoms. The exact phrase is not a Lucasfilm character name, but [[The Mandalorian and Grogu]] (2026) hid a near-homophone Easter egg — [[Glop Shdo]] — on a background fight poster.{{1}}{{3}}{{7}}",
  ],
  infobox: {
    title: "Glup Shitto",
    image: {
      src: "/glup-shitto/title-card.png",
      alt: "Parody Disney Plus style title card reading Star Wars Glup Shitto",
      caption:
        "Fan parody title card treating the nonsense name like a Disney+ series drop.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Glup Shittos (pl.)", "Fake EU cameo name"],
      },
      {
        label: "Type",
        value: "Fandom slang / fake character / catchphrase",
      },
      { label: "Year", value: "2020 (Easter egg 2026)" },
      {
        label: "Origin",
        value: "Tumblr (@gomjabbar)",
      },
      {
        label: "Peak waves",
        value: "Mando S2 (2020) · 2022 X · Glop Shdo (2026)",
      },
      {
        label: "Related",
        value: [
          "Glop Shdo",
          "Blorbo From My Shows",
          "Eeby Deeby",
          "Horse Plinko",
          "Baby Yoda / Grogu jokes",
        ],
      },
      {
        label: "Platforms",
        value: ["Tumblr", "X", "Reddit", "TikTok"],
      },
      {
        label: "Coined",
        value: "@gomjabbar · 3 Sep 2020",
        href: "https://www.tumblr.com/gomjabbar",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "As slang, a Glup Shitto is any minor or Expanded Universe–heavy character that diehards recognize instantly and newcomers do not. The joke works on two levels: Star Wars names already sound like scrambled syllables (think Kit Fisto, Plo Koon, Sio Bibble), and Disney-era shows keep importing animated-only figures into live action.{{1}}{{2}}",
        "Tone ranges from affectionate to critical. Some posts use the name as a fond nickname for a pet favorite; others dunk on fandoms that care more about “Glup Shitto cameo moments” than story. Wiktionary lists both Star Wars–specific and cross-fandom senses, including a vulgar/derogatory flavor when the cameo is treated as empty fanservice.{{4}}",
      ],
      image: {
        src: "/glup-shitto/brought-him-back.jpg",
        alt: "Star Wars parade crowd with a red arrow pointing at a tiny background figure",
        caption:
          "Macro of the recognition gag: “OMG they brought him back!” → a microscopic extra in the crowd.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On September 3, 2020, Tumblr user gomjabbar posted the coining line about fans screaming that “Glup Shitto is back” whenever a new Star Wars project drops. Contemporary writeups credit that post as the source; note counts later climbed into the tens of thousands. Daily Dot’s later summary misspells the handle as “gomjabber” — primary coverage and Fanlore agree on gomjabbar.{{1}}{{2}}{{3}}",
        "Context mattered: The Mandalorian Season 1 had finished, Season 2 was imminent, and a slate of Disney+ shows (Bad Batch, Ahsoka, Obi-Wan Kenobi, and others) was already in the rumor mill. The post satirized how every announcement seemed to promise another deep-cut reunion.{{2}}",
      ],
      link: {
        href: "https://www.polygon.com/2020/12/18/22189448/who-is-glup-shitto-explained-star-wars-joke-meme/",
        label: "Polygon: Glup Shitto explained →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Parody branding, Baby Yoda / Wookieepedia jokes, later “new Glup Shitto dropped” macros, Aurebesh / Glop Shdo gags, and a comic riff. Click through for sources.",
      ],
      gallery: [
        {
          id: "title-card",
          href: "https://dailydot.com/glup-shitto-meme-star-wars",
          kind: "image",
          source: "web",
          handle: "Template",
          author: "Parody title card",
          text: "GLUP SHITTO — Disney+ style drop",
          date: "Template",
          caption:
            "Fan mock Disney+ / Star Wars series card treating the nonsense name as a real premiere.",
          thumbnail: "/glup-shitto/title-card.png",
        },
        {
          id: "brought-him-back",
          href: "https://dailydot.com/glup-shitto-meme-star-wars",
          kind: "image",
          source: "web",
          handle: "@MNateShyamalan",
          author: "X macro",
          text: "OMG they brought him back!",
          date: "7 Sep 2023",
          caption:
            "Parade-crowd arrow joke: the “who?” answer is a microscopic background figure labeled as the returning guy.",
          thumbnail: "/glup-shitto/brought-him-back.jpg",
          views: "2.9M+",
        },
        {
          id: "wookieepedia-joke",
          href: "https://fanlore.org/wiki/Glup_Shitto",
          kind: "image",
          source: "web",
          handle: "Tumblr joke",
          author: "Baby Yoda nickname wave",
          text: "Glup Shitto | Wookieepedia — “we did it”",
          date: "2020",
          caption:
            "Search-snippet parody treating Glup Shitto as Grogu’s Wookieepedia entry during the unnamed-Baby-Yoda period.",
          thumbnail: "/glup-shitto/wookieepedia-joke.png",
        },
        {
          id: "acolyte-bazil",
          href: "https://dailydot.com/glup-shitto-meme-star-wars",
          kind: "image",
          source: "web",
          handle: "@Ky1eKatarn",
          author: "X",
          text: "Wake up babe new glup shitto just dropped",
          date: "2024 (Acolyte cycle)",
          caption:
            "Later-cycle usage: promo for The Acolyte creature Bazil framed as another Glup Shitto drop.",
          thumbnail: "/glup-shitto/acolyte-bazil.jpeg",
        },
        {
          id: "aurebesh",
          href: "https://thedirect.com/article/star-wars-officially-canonizes-glup-shitto",
          kind: "image",
          source: "web",
          handle: "Aurebesh gag",
          author: "Glop Shdo lineage",
          text: "GLOP SHDO / Glup Shitto prop read",
          date: "Fan + film cycle",
          caption:
            "Aurebesh “Glop Shdo”-style reads prefigured and then echoed the 2026 Mandalorian and Grogu poster Easter egg.",
          thumbnail: "/glup-shitto/aurebesh-glop.png",
        },
        {
          id: "comic",
          href: "https://fanlore.org/wiki/Glup_Shitto",
          kind: "image",
          source: "web",
          handle: "YSS comic",
          author: "Webcomic riff",
          text: "It's Glup Shitto from the new Star Wars movie!",
          date: "Post-coinage",
          caption:
            "Six-panel comic personifying the name as a background alien who turns the recognition gag back on the fan.",
          thumbnail: "/glup-shitto/comic-yss.png",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "The phrase surged on Tumblr as The Mandalorian Season 2 (premiere October 30, 2020) brought back characters previously confined to Clone Wars and Rebels. Parallel jokes treated the still-unnamed Baby Yoda as “Glup Shitto” until Grogu stuck — and sometimes afterward.{{2}}{{3}}",
        "On December 13, 2020, Urban Dictionary user Ast0 uploaded a definition. Polygon’s Maddy Myers published a widely cited explainer on December 18, 2020 (later refreshed around Bad Batch coverage in May 2022). Daily Dot’s 2024 recap incorrectly dates that Polygon piece to December 2022; the article’s own byline is the safer date.{{1}}{{2}}",
        "In 2021–22 the term rode Tumblr’s broader nonsense-name wave alongside Blorbo From My Shows, Eeby Deeby, and Horse Plinko (Fanlore ties it to the early Tagpocalypse era). By mid-2022 it was common on X, helped by Star Wars discourse around Obi-Wan Kenobi and contemporaneous commentary videos.{{3}}",
      ],
    },
    {
      id: "examples",
      title: "Examples in Star Wars media",
      paragraphs: [
        "Coverage often points to live-action returns of animated-era figures as textbook Glup Shitto moments. Daily Dot highlights Cad Bane’s appearance in The Book of Boba Fett: Clone Wars fans cheered; casual Book viewers had no prior attachment.{{2}}",
        "Explainers also list other oft-tagged returns and deep cuts: Max Rebo and Bossk from the Original Trilogy era, Bo-Katan’s jump from animation into The Mandalorian, Yaddle, Babu Frik, and Wullf Yularen’s Andor cameo. Writers have flipped the joke historically too — Entertainment.ie called classic Boba Fett “the original Glup Shitto,” a sparse OT presence that later exploded in expanded lore.{{8}}{{4}}",
      ],
      list: [
        "Mandalorian S2 — Clone Wars / Rebels returns on Tumblr timelines",
        "Baby Yoda nicknamed Glup Shitto before / alongside Grogu",
        "Cad Bane · Max Rebo — Book of Boba Fett",
        "Bo-Katan — animation → Mandalorian live action",
        "Later “new Glup Shitto dropped” macros (e.g. Acolyte-era creatures)",
      ],
    },
    {
      id: "glop-shdo",
      title: "Glop Shdo Easter egg",
      paragraphs: [
        "In 2026, The Mandalorian and Grogu tucked a background advertisement for a gladiator bout into the frame. Fans reading the Aurebesh (spotlighted by X account @sw_holocron around 24 July 2026) found the opponent named [[Glop Shdo]] — a cleaned-up near-homophone of Glup Shitto, reportedly tweaked so the vulgar-sounding “Shitto” would not appear in a family film.{{7}}{{9}}",
        "Coverage treats Glop Shdo as a meme acknowledgment rather than a speaking role: no dialogue and no meaningful on-screen appearance beyond the poster. Wookieepedia speculation linked the name to a human gladiator billed against Rotta the Hutt. The slang term Glup Shitto itself remains non-canonical; the Easter egg is the misspelled cousin that made the joke briefly “real” as set dressing.{{7}}{{9}}",
      ],
      link: {
        href: "https://thedirect.com/article/star-wars-officially-canonizes-glup-shitto",
        label: "The Direct on the Glop Shdo poster →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Common patterns: “OMG Glup Shitto is back,” “X is the Glup Shitto of [franchise],” or “my Glup Shitto.” Outside Star Wars, the noun travels to any work where a niche character gets disproportionate hardcore love — Sonic’s Agent Stone is one documented cross-fandom example in 2022 explainers.{{4}}{{3}}",
        "Later glosses stress that the joke is not only “silly names,” but the idea that an eight-second extra somehow has decades of lore, art, and a waiting fandom — a reading that matches how the slang is used in practice.{{4}}{{5}}",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "3 Sep 2020 — Tumblr @gomjabbar coins “OMG Glup Shitto is back 😭😭😭”{{1}}{{3}}",
        "30 Oct 2020 onward — Mandalorian S2 amplifies EU-return jokes{{2}}",
        "Late 2020 — Baby Yoda / Grogu nickname wave{{2}}",
        "13 Dec 2020 — Urban Dictionary entry (Ast0){{2}}",
        "18 Dec 2020 — Polygon explainer by Maddy Myers{{1}}",
        "2021 — Circulates with Blorbo / Eeby Deeby–era Tumblr slang{{3}}",
        "2022 — Wider X spread; Obi-Wan / Bad Batch discourse; Mary Sue / Digital Fix explainers{{5}}{{8}}",
        "31 Jul 2024 — Daily Dot overview (Cad Bane example){{2}}",
        "24 Jul–2 Aug 2026 — Glop Shdo poster in The Mandalorian and Grogu reported / covered{{7}}{{9}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Polygon",
      title: "Glup Shitto, the best (fake) Star Wars character, explained",
      href: "https://www.polygon.com/2020/12/18/22189448/who-is-glup-shitto-explained-star-wars-joke-meme/",
      date: "18 Dec 2020 (updated 31 May 2022)",
    },
    {
      id: 2,
      publisher: "Daily Dot",
      title: "What is ‘Glup Shitto’ and how does it relate to Star Wars?",
      href: "https://dailydot.com/glup-shitto-meme-star-wars",
      date: "31 Jul 2024",
    },
    {
      id: 3,
      publisher: "Fanlore",
      title: "Glup Shitto",
      href: "https://fanlore.org/wiki/Glup_Shitto",
      date: "entry (coined 3 Sep 2020)",
    },
    {
      id: 4,
      publisher: "Wiktionary",
      title: "Glup Shitto",
      href: "https://en.wiktionary.org/wiki/Glup_Shitto",
      date: "lexeme + citations",
    },
    {
      id: 5,
      publisher: "The Mary Sue",
      title: "What Is 'Glup Shitto' in Star Wars? The Hilarious Meme, Explained",
      href: "https://www.themarysue.com/glup-shitto-explained/",
      date: "19 Sep 2022",
    },
    {
      id: 6,
      publisher: "Tumblr",
      title: "@gomjabbar — coining account",
      href: "https://www.tumblr.com/gomjabbar",
      date: "3 Sep 2020",
    },
    {
      id: 7,
      publisher: "The Direct",
      title:
        "Star Wars Officially Canonizes ‘Glup Shitto’ Character In The Mandalorian & Grogu Movie",
      href: "https://thedirect.com/article/star-wars-officially-canonizes-glup-shitto",
      date: "24 Jul 2026",
    },
    {
      id: 8,
      publisher: "The Digital Fix",
      title: "Star Wars: what is a Glup Shitto?",
      href: "https://www.thedigitalfix.com/star-wars/what-is-a-glup-shitto",
      date: "11 Dec 2022",
    },
    {
      id: 9,
      publisher: "ScreenRant",
      title: "6 Years Later, Star Wars Finally Makes Glup Shitto Official Canon",
      href: "https://screenrant.com/star-wars-mandalorian-grogu-makes-glup-shitto-canon/",
      date: "2 Aug 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · “Glup Shitto” is fan slang; “Glop Shdo” is a reported 2026 film Easter egg spelling · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
