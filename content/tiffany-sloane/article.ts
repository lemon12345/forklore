import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const tiffanySloaneArticle = {
  title: "Tiffany Sloane",
  description:
    "Tiffany Sloane (@tiffany.bbyx) looks like an Instagram stand-up comic—she is AI-generated. Joke-theft claims and an OnlyFans funnel helped wipe the feed.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Tiffany Sloane]] (sometimes spelled Sloan in press) is an AI-generated stand-up comedian and influencer persona that went viral on Instagram in September–October 2026.{{1}}{{2}} Posting as [[https://www.instagram.com/tiffany.bbyx/|@tiffany.bbyx]], the account shared short sets to a simulated crowd, labeled itself an actress, and funneled attention toward an OnlyFans profile.{{3}}{{4}}",
    "The persona became a flashpoint for criticism of AI slop: comedian [[https://www.instagram.com/georgebrettolson/|George Brett Olson]] posted a side-by-side accusing the account of copying his joke, outfit, and gestures.{{1}}{{5}} Within days the Instagram feed was wiped. No creator has publicly claimed authorship.{{2}}",
  ],
  infobox: {
    title: "Tiffany Sloane",
    image: {
      src: "/tiffany-sloane/infobox.jpg",
      alt: "Still of AI comedian Tiffany Sloane on stage",
      caption: "AI stand-up persona circulated in early October 2026 compilations.",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Tiffany Sloan", "tiffany.bbyx"],
      },
      { label: "Type", value: "AI influencer / comedian persona" },
      { label: "Year", value: "2026" },
      { label: "Origin", value: "Instagram" },
      { label: "First post", value: "11 September 2026" },
      { label: "Peak", value: "Early October 2026 (~375k followers)" },
      {
        label: "Platforms",
        value: ["Instagram", "TikTok", "YouTube", "X (discussion)"],
      },
      { label: "Status", value: "Feed wiped after backlash" },
      { label: "Creator", value: "Unknown / unclaimed" },
      {
        label: "Key callout",
        value: "George Brett Olson · 3 Oct 2026",
        href: "https://www.instagram.com/georgebrettolson/",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Tiffany Sloane is not a documented real comedian. The public face was a synthetic performer: tight stage outfits, a laugh-track crowd, sexualized punchlines, and Instagram watermarks that made the clips look like ordinary Reels. Bios described an actress rather than disclosing generative AI.{{1}}{{4}}",
        "Coverage and fan archives treat the episode as a case study in AI influencers — growth via algorithm-friendly stand-up formats, monetization via adult subscription links, and backlash once human comics recognized their material.{{2}}{{3}}",
      ],
      image: {
        src: "/tiffany-sloane/kotaku-hero.jpg",
        alt: "Press still associated with Tiffany Sloane coverage",
        caption: "Imagery circulated with October 2026 press coverage of the account.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "The Instagram account @tiffany.bbyx began posting on September 11, 2026. Within about three weeks it had posted dozens of clips (reports cite roughly 75–124 posts depending on the day counted) and climbed past 360,000–375,000 followers.{{1}}{{4}} Individual stand-up Reels crossed into the multi-million view range; one frequently cited set passed about 7 million views in under two weeks.{{1}}",
        "Clips fell into two rough buckets: domestic sitcom-style sketches and bar/club stand-up bits where the avatar bantered with a mostly male crowd. Sexual innuendo was a recurring beat. Nothing in the primary bio stated that the performer was AI-generated.{{6}}",
        "Highlights linked to an OnlyFans page rather than putting the URL in the main bio — a pattern later writers summarized as an OnlyFans marketing funnel using a synthetic comedian as the top of the funnel.{{3}}{{4}}",
      ],
      link: {
        href: "https://www.instagram.com/tiffany.bbyx/",
        label: "Instagram account @tiffany.bbyx →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Primary Instagram Reels were later deleted. Surviving discussion lives on X compilations, press stills, and comic callouts.{{2}}{{3}} Click a card to open an embed or source.",
      ],
      gallery: [
        {
          id: "venturetwins-hack",
          href: "https://x.com/venturetwins/status/2106544393092272223",
          kind: "video",
          handle: "@venturetwins",
          author: "Justine Moore",
          text: "I think I stumbled on a genius OnlyFans marketing hack.",
          date: "4 Oct 2026",
          caption:
            "a16z partner Justine Moore’s compilation that framed Sloane as a growth hack — millions of views on X.",
          thumbnail: "/tiffany-sloane/x-venturetwins.jpg",
          duration: "0:52",
          views: "4.3M+",
        },
        {
          id: "kotaku-coverage",
          href: "https://kotaku.com/viral-ai-generated-comedian-steals-jokes-and-is-rewarded-with-millions-of-views-2000740077",
          kind: "image",
          source: "web",
          handle: "Kotaku",
          author: "Zack Zwiezen",
          text: "Viral AI-Generated Comedian Steals Jokes And Is Rewarded With Millions Of Views",
          date: "5 Oct 2026",
          caption:
            "Kotaku write-up summarizing the account’s growth and Olson’s side-by-side accusation.",
          thumbnail: "/tiffany-sloane/kotaku-hero.jpg",
        },
        {
          id: "olson-callout",
          href: "https://www.instagram.com/georgebrettolson/",
          kind: "image",
          source: "web",
          handle: "@georgebrettolson",
          author: "George Brett Olson",
          text: "AI stole my joke and my outfit",
          date: "3 Oct 2026",
          caption:
            "Olson’s Instagram callout compared joke, gesture, outfit, and stage backdrop side by side.",
          thumbnail: "/tiffany-sloane/og.png",
        },
        {
          id: "gui-archive",
          href: "https://giveupinternet.com/w/tiffany-sloane/",
          kind: "image",
          source: "web",
          handle: "Give Up Internet!",
          author: "Archive entry",
          text: "Tiffany Sloane: Meaning, Origin and Why It Died in 2026",
          date: "Oct 2026",
          caption:
            "Independent archive noting the wipe, spelling (Sloane vs Sloan), and follower-count timeline.",
          thumbnail: "/tiffany-sloane/og.png",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "controversy",
      title: "Joke-theft controversy",
      paragraphs: [
        "On October 3, 2026, comedian George Brett Olson posted a video titled around the line “AI stole my joke and my outfit.” Side-by-side footage showed Sloane delivering a bit about billionaires and AI that closely tracked Olson’s own set — including similar outfit colors, hand gestures, and a Capitol-painting backdrop.{{5}}{{1}} Olson said the punchline was mangled and that reporting tools on Instagram were ineffective against the account.{{4}}",
        "Other comics and commenters soon claimed additional bits had been mirrored onto the same account or onto lookalike AI women. Olson also described aggregator-style reuse: the same stolen material remapped onto different synthetic performers.{{1}}{{5}}",
      ],
      subsections: [
        {
          id: "marketing-framing",
          title: "“Genius marketing hack” framing",
          paragraphs: [
            "On October 4, 2026, Andreessen Horowitz partner Justine Moore (@venturetwins) posted a compilation calling the setup “a genius OnlyFans marketing hack,” noting the rapid follower climb and the adult-subscription funnel.{{3}}{{7}} The post itself drew millions of views and became the main X artifact after Instagram wiped the Reels.",
            "Replies and quote posts pushed back hard: critics argued the praise ignored wholesale theft of living comedians’ work. Moore later said people were taking the tweet too seriously and that she shares unusual AI use cases — while acknowledging video-to-video generation was likely involved.{{4}}{{3}}",
          ],
        },
      ],
    },
    {
      id: "marketing-model",
      title: "Marketing model and related accounts",
      paragraphs: [
        "Writers described the tactic as “AI flipping”: motion-capture or video-to-video reuse of popular stand-up formats, sexualized presentation, then a soft path to paid adult content.{{3}} OnlyFans rules discussed in coverage require verified creators and AI labeling for synthetic media; reporters noted the public Instagram face did not clearly disclose AI while still driving subscription interest.{{4}}",
        "Investigations also mapped Tiffany-branded TikTok experiments (@tiffany.lessonroom, @mrs.tiffanystudy, @tiff.sloanefit, @tiffanyxsol) and parallel AI personas such as Raven Jade — suggesting a small content-farm pattern rather than a one-off joke account.{{3}} Authorship remains unclaimed.",
      ],
      list: [
        "Instagram growth via high-volume AI stand-up Reels",
        "Highlights → OnlyFans rather than a blunt bio URL",
        "Possible video-to-video reuse of real comics’ staging",
        "Sibling TikTok / persona experiments under related names",
      ],
    },
    {
      id: "reception",
      title: "Reception and aftermath",
      paragraphs: [
        "Mainstream coverage followed quickly: Kotaku (October 5), Gizmodo (October 6), and international fact-check outlets framed Sloane as emblematic of AI joke theft for adult marketing.{{1}}{{4}}{{6}} Streamer Asmongold’s reaction clip circulated widely on YouTube Shorts.",
        "Instagram head Adam Mosseri commented publicly that banning all AI content was impractical, but that wholesale ripping of creators deserved product attention.{{3}} The @tiffany.bbyx feed was subsequently emptied; some reports described an “AI-generated profile” label remaining while posts stayed gone.{{2}}{{3}}",
        "Spelling varies in press (Sloan vs Sloane). Handles and primary meme documentation use Sloane, which this entry follows.{{2}}",
      ],
      image: {
        src: "/tiffany-sloane/x-venturetwins.jpg",
        alt: "Frame from the viral X compilation about Tiffany Sloane",
        caption: "Frame from the October 4 X compilation that outlived the deleted Reels.",
      },
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: [
        "Documented arc from first post to wipe:{{2}}",
      ],
      list: [
        "11 Sep 2026 — @tiffany.bbyx begins posting AI stand-up Reels{{1}}",
        "Sep–early Oct 2026 — Rapid growth to ~360k–375k followers; multi-million-view clips{{1}}{{4}}",
        "3 Oct 2026 — George Brett Olson posts side-by-side callout{{5}}",
        "4 Oct 2026 — @venturetwins “marketing hack” compilation goes viral on X{{7}}",
        "5–6 Oct 2026 — Kotaku, Gizmodo, and wider commentary{{1}}{{4}}",
        "7 Oct 2026 — Asmongold reaction Short circulates",
        "Early–mid Oct 2026 — Instagram feed wiped after backlash{{2}}{{3}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Kotaku",
      title:
        "Viral AI-Generated Comedian Steals Jokes And Is Rewarded With Millions Of Views",
      href: "https://kotaku.com/viral-ai-generated-comedian-steals-jokes-and-is-rewarded-with-millions-of-views-2000740077",
      date: "5 Oct 2026",
    },
    {
      id: 2,
      publisher: "Give Up Internet!",
      title: "Tiffany Sloane: Meaning, Origin and Why It Died in 2026",
      href: "https://giveupinternet.com/w/tiffany-sloane/",
      date: "Oct 2026",
    },
    {
      id: 3,
      publisher: "Garbage Day",
      title: "A genius OnlyFans marketing hack",
      href: "https://www.garbageday.email/p/a-genius-onlyfans-marketing-hack",
      date: "7 Oct 2026",
    },
    {
      id: 4,
      publisher: "Gizmodo",
      title:
        "AI Comedians Are Stealing Jokes on Instagram to Sell OnlyFans Subscriptions",
      href: "https://gizmodo.com/ai-comedians-are-stealing-jokes-on-instagram-to-sell-onlyfans-subscriptions-2000821923",
      date: "6 Oct 2026",
    },
    {
      id: 5,
      publisher: "Instagram",
      title: "George Brett Olson — callout post (@georgebrettolson)",
      href: "https://www.instagram.com/georgebrettolson/",
      date: "3 Oct 2026",
    },
    {
      id: 6,
      publisher: "Facta",
      title:
        "La rete di stand-up comedian create con l’IA usata per monetizzare su OnlyFans",
      href: "https://www.facta.news/articoli/rete-stand-up-comedian-ia-monetizzare-onlyfans",
      date: "16 Oct 2026",
    },
    {
      id: 7,
      publisher: "X",
      title:
        "Justine Moore (@venturetwins) — “genius OnlyFans marketing hack”",
      href: "https://x.com/venturetwins/status/2106544393092272223",
      date: "4 Oct 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · Persona © unknown creator · For cultural documentation only",
} as const satisfies WikiArticleData;
