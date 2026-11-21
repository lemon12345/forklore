import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const statePropertyArticle = {
  title: "State Property",
  description:
    "Virginia fishing-pond TikTok: anglers claim \"state property,\" then the truck driver snaps \"State?\" and \"Hit the road, dude\"—also searched as Lock 'Em Up.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[State Property]] (also [[Lock ’Em Up]] or [[Hit the Road Dude]]) is a viral-video and catchphrase meme from an August 2025 TikTok of a white pickup confrontation at a fishing pond. Two anglers say they thought the spot was [[state property]]; the driver — later identified in Virginia news coverage as [[Norman “Normie” Taylor Jr.]] of Crewe — answers with stunned [[State?]], then [[Hit the road, dude]] and a recounted order to [[lock ’em up]].{{1}}{{2}}{{5}}",
    "Lip-dubs and green-screen cutouts spread within days of the upload. A second wave in autumn 2026 rebuilt the truck window with AI pets, game characters, Minecraft boats, and accuracy reenactments — keeping the property-dispute cadence while swapping who sits behind the wheel.{{1}}{{2}}",
  ],
  infobox: {
    title: "State Property",
    image: {
      src: "/state-property/truck-window.webp",
      alt: "Older man in a plaid shirt leaning from a white pickup window, captioned Hit the road dude",
      caption:
        "Canonical truck-window still: the driver pointing anglers away with “Hit the road dude..!”",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Lock ’Em Up", "Hit the Road Dude"],
      },
      {
        label: "Type",
        value: "Viral video / catchphrase / lip dub / AI remake",
      },
      { label: "Year", value: "2025 (revival 2026)" },
      {
        label: "Origin",
        value: "TikTok (@bird28thegr8)",
      },
      {
        label: "Peak waves",
        value: "Aug–Sep 2025 · Oct 2026 (AI)",
      },
      {
        label: "Related",
        value: [
          "Private-property disputes",
          "Green-screen reaction audio",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "Instagram", "X", "Tenor"],
      },
      {
        label: "Source upload",
        value: "@bird28thegr8 · 21 Aug 2025",
        href: "https://www.tiktok.com/@bird28thegr8/video/7541156735361289485",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "One scene, three portable lines. [[State?]] / [[State property]] mocks a bad assumption about shared space. [[Hit the road, dude]] is a flat eviction. [[Lock ’em up]] escalates a tiny offense into carceral theater. Remixes keep the truck-window framing and the pause before each punchline — rushing the audio kills the timing.{{1}}{{2}}",
        "The original is phone footage of a real pond dispute, not an AI invent. Later 2026 remakes often are: bulldogs in flannel, Mr. Bean on a rooftop chair, Minecraft boats, violin duels, and game NPCs inherit the same territorial certainty.{{1}}{{2}}",
      ],
      image: {
        src: "/state-property/card.webp",
        alt: "Close crop of the Lock Em Up truck driver from the viral fishing confrontation",
        caption:
          "Encyclopedia / card crop of the driver — the face most Lock ’Em Up templates isolate.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 21 August 2025, TikToker @bird28thegr8 posted “Angry grandpa kicks me out my fishing spot,” filming from the anglers’ side as a man in a white pickup leans through the open window. He asks whether they got permission from “Trey Taylor”; they say no, thinking the pond was state land. He insists it is private, tries to learn who told them otherwise, and quotes a call that someone told Trey to “lock ’em up.” Contemporary tallies put the upload above ~13.7 million views within roughly three weeks.{{1}}{{2}}{{4}}",
        "Local reporting later identified the driver as Norman Hubert “Normie” Taylor Jr. of Crewe, Virginia — associated with the Crewe Tractor family business run by his son Norman H. Taylor III (Trey), whose name appears in the original rant.{{5}}{{6}}",
        "On 24 August 2025, TikToker @130zay posted an early lip-dub of the exchange (~2.3 million views in three weeks in later tallies) — the earliest widely cited remake. By 31 August, @capcutjunction’s green-screen “lock ’em up” cutout turned the face into a drop-in reaction asset; courtroom and traffic captions followed in early September.{{1}}{{2}}",
      ],
      link: {
        href: "https://meme.com/memes/hit-the-road-dude",
        label: "meme.com Hit the Road Dude summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Original pond clip (YouTube), X remakes (Minecraft / cat), and distinct AI / character stills — one card per variant.",
      ],
      gallery: [
        {
          id: "original-video",
          href: "https://www.youtube.com/watch?v=Q7X6fqFuvow",
          kind: "video",
          source: "web",
          handle: "@bird28thegr8",
          author: "Source upload",
          text: "Angry grandpa kicks me out my fishing spot",
          date: "21 Aug 2025",
          caption:
            "Original pond confrontation (same clip as the TikTok upload) — playable here via YouTube.",
          thumbnail: "/state-property/truck-window.webp",
          duration: "1:10",
          views: "13.7M+",
        },
        {
          id: "minecraft-x",
          href: "https://x.com/Ehn_7H/status/2110071865691742371",
          kind: "video",
          handle: "@Ehn_7H",
          author: "Ehn",
          text: "Hit the road dude — Minecraft boat edit",
          date: "13 Oct 2026",
          caption:
            "Driver cut into a Minecraft oak boat on a blocky lake — ~1.7M views / 61k likes within days on X.",
          thumbnail: "/state-property/x-minecraft.jpg",
          duration: "0:18",
          views: "1.7M+",
        },
        {
          id: "cat-x",
          href: "https://x.com/01Adam12/status/2107145626580619500",
          kind: "video",
          handle: "@01Adam12",
          author: "Schrödinger's Disgruntled Cat",
          text: "Cat: Who told you you could fish here… hit the road dude⁉️",
          date: "5 Oct 2026",
          caption:
            "Cat-as-landowner remake that keeps the fishing-spot eviction cadence.",
          thumbnail: "/state-property/x-cat.jpg",
          duration: "0:33",
          views: "8.7K+",
        },
        {
          id: "bulldog",
          href: "https://copythatvideo.com/blog/hit-the-road-dude-meme",
          kind: "image",
          source: "web",
          handle: "AI remake",
          author: "Bulldog driver",
          text: "State? This?",
          date: "Oct 2026",
          caption:
            "AI pet-as-landowner still: flannel bulldog leaning from a white pickup in the same window pose.",
          thumbnail: "/state-property/bulldog.webp",
        },
        {
          id: "bean",
          href: "https://copythatvideo.com/blog/hit-the-road-dude-meme",
          kind: "image",
          source: "web",
          handle: "Character swap",
          author: "Mr. Bean",
          text: "Hit the road, dude",
          date: "Oct 2026",
          caption:
            "Mr. Bean rooftop-armchair remake that keeps the eviction energy without the original pond.",
          thumbnail: "/state-property/mr-bean.webp",
        },
        {
          id: "violin",
          href: "https://copythatvideo.com/blog/hit-the-road-dude-meme",
          kind: "image",
          source: "web",
          handle: "Skit remake",
          author: "Violin reply",
          text: "Hit the road dude this ain’t no state property",
          date: "Nov 2026",
          caption:
            "Musical reply edit: driver-seat violinist delivering the private-property send-off on-screen.",
          thumbnail: "/state-property/violin.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Wave one (late August–September 2025) was performance: lip-dubs of the audio, CapCut green screens, and captions that apply “lock ’em up” to jury duty, speeding, or any petty rule-break. A standalone “Hit The Road Dude” GIF on Tenor (logged around 5 October 2025) let people reply with the dismissal without the full clip.{{1}}{{2}}",
        "Wave two (September–November 2026) was substitution. Reposts and long cuts of the original encounter restarted the sound; AI tools swapped the driver for pets and characters; Minecraft, Skyrim, and other game edits cast the pond as digital territory; multilingual dubs and accuracy-reenactment skits followed. Search interest skewed toward “hit the road dude” even when tags still said #stateproperty.{{1}}{{2}}{{3}}",
      ],
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Post it when someone treats your seat, channel, server, or parking spot as public land. Pair a caption that names the “trespass” with the truck still, the audio, or an AI remake that keeps the cadence. “State?” alone works as a one-word callout; “hit the road” ends the thread; “lock ’em up” is for comic overkill.{{1}}{{2}}",
      ],
      list: [
        "Call out a bad “this is public” assumption (State?)",
        "Evict someone from a chat / seat / lobby (Hit the road)",
        "Exaggerate punishment for a tiny offense (Lock ’em up)",
        "Swap the driver: AI pet, game NPC, celebrity, reenactment",
      ],
    },
    {
      id: "aftermath",
      title: "Aftermath",
      paragraphs: [
        "In late October 2025, Virginia local and national outlets reported that Taylor was arrested on a misdemeanor sexual-battery warrant related to an incident at Crewe Tractor; he was held overnight and released on bond.{{5}}{{6}}{{7}}",
        "In January 2026, The Courier-Record reported that he pleaded no contest to an amended assault-and-battery charge, received a fully suspended 30-day jail sentence with a year of good-behavior conditions, and agreed to a protective order with no contact with the complainant. The meme’s second viral wave in 2026 largely treated the truck audio as a detachable template rather than a biography of the landowner.{{6}}",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{5}}"],
      list: [
        "21 Aug 2025 — @bird28thegr8 posts the pond confrontation TikTok{{1}}{{2}}",
        "24 Aug 2025 — @130zay early lip-dub remake{{1}}{{2}}",
        "31 Aug 2025 — @capcutjunction green-screen “lock ’em up” template{{1}}{{2}}",
        "Early Sep 2025 — courtroom / traffic caption variants circulate{{1}}{{2}}",
        "5 Oct 2025 — Tenor “Hit The Road Dude” GIF logged in secondary writeups{{1}}",
        "24–27 Oct 2025 — Crewe Tractor incident alleged; Taylor arrested on sexual-battery warrant{{5}}{{7}}",
        "Jan 2026 — no-contest plea to amended assault & battery; suspended sentence{{6}}",
        "Sep–Nov 2026 — AI / Minecraft / character remake revival{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "Hit the Road Dude — origin, State Property & AI edits",
      href: "https://meme.com/memes/hit-the-road-dude",
      date: "14 Oct 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Lock ’Em Up — meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/lock-em-up/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "Copy That Video",
      title: "What Is Hit the Road Dude? The State Property meme, explained",
      href: "https://copythatvideo.com/blog/hit-the-road-dude-meme",
      date: "2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@bird28thegr8 — Angry grandpa kicks me out my fishing spot",
      href: "https://www.tiktok.com/@bird28thegr8/video/7541156735361289485",
      date: "21 Aug 2025",
    },
    {
      id: 5,
      publisher: "The Courier-Record",
      title: "Tables Turned on ‘Lock’em Up’",
      href: "https://www.courier-record.com/articles/featured-stories/tables-turned-on-lockem-up/",
      date: "5 Nov 2025",
    },
    {
      id: 6,
      publisher: "The Courier-Record",
      title: "No Contest for ‘Lock’em Up’",
      href: "https://www.courier-record.com/articles/featured-stories/no-contest-for-lockem-up/",
      date: "21 Jan 2026",
    },
    {
      id: 7,
      publisher: "The Crewe-Burkeville Journal",
      title: "Norman Taylor Served With Warrant For Sexual Assault",
      href: "https://www.thecreweburkevillejournal.com/articles/featured-stories/norman-taylor-served-with-warrant-for-sexual-assault/",
      date: "4 Nov 2025",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters · Court reporting © The Courier-Record / Crewe-Burkeville Journal · Not legal advice",
} as const satisfies WikiArticleData;
