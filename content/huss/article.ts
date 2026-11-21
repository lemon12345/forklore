import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const hussArticle = {
  title: "Huss / Huss Huss Huss",
  description:
    "Huss meaning: slang for the sprint/shadowbox exhale—plus the Nov 2026 Roblox Huss Huss Huss audio that turned grindset lip-dubs into a TikTok wave.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Huss]] (not [[huzz]]) is 2026 internet slang and onomatopoeia for the fast, controlled exhale you make while sprinting, shadowboxing, or grinding a skill—the verb [[hussing]] means running flat out. Early X posts such as @literallyfloro’s Feb 2026 “huss huss huss” boxing GIF treated the breath as a punchline; [[Huss Valley]] (Jul 2026) and the Oct 2026 [[While They Are Out Partying]] revival kept the word in circulation before a Roblox clip made the three-beat refrain unavoidable.{{1}}{{2}}{{3}}",
    "On 13 Nov 2026, TikTok @larpniverse posted a Roblox basketball monologue—“In this town everybody goes out partying except me”—punctuated by “Huss, huss, huss,” which racked up roughly 36–41 million views. Remixes (@djfunkyehh, ~3.6M) and lip-dubs (@urbaewinnie ~5.6M, @the_devonmaid ~3.1M) turned the breath into a portable grindset sound. This entry treats the slang as primary and the audio as its loudest carrier.{{4}}{{5}}{{6}}",
  ],
  infobox: {
    title: "Huss / Huss Huss Huss",
    image: {
      src: "/huss/cover.jpg",
      alt: "Huss slang and Huss Huss Huss Roblox basketball meme cover",
      caption:
        "Breath-sound slang that peaked as a Roblox “Huss, huss, huss” lip-dub audio in Nov 2026.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Hussing",
          "Huss Huss Huss",
          "In This Town Everybody Goes Out Partying Except Me",
          "Huss Valley (related format)",
        ],
      },
      {
        label: "Type",
        value: "Slang (primary) / lip-dub sound / catchphrase",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "X boxing GIFs · TikTok Huss Valley · @larpniverse Roblox",
      },
      {
        label: "Peak wave",
        value: "Jul 2026 (Valley) · Nov 2026 (Roblox audio)",
      },
      {
        label: "Related",
        value: [
          "While They Are Out Partying",
          "Huss Valley",
          "Grindset / lone-wolf training bits",
          "Roblox skit audio",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "TikTok", "Instagram Reels", "Roblox"],
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "As slang, huss is the noise of effort: a short outward breath timed to a punch, stride, or dribble. Calling someone a husser or saying they are hussing frames sprinting or hustling as a comic sport. It is distinct from the older “huzz” cheer; Forklore keeps the double-s spelling that boxing and running clips popularized in 2026.{{1}}{{2}}",
        "As audio, [[Huss Huss Huss]] is the three-beat refrain from @larpniverse’s lonely-town Roblox skit. Lip-dubs mouth the party-town monologue while the poster practices a hobby; remixes chop the breaths onto funk or Jersey club beats. Both reads share the same joke—mock-serious grind while everyone else is out.{{4}}{{5}}",
      ],
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Documented meme-form use appears by early February 2026: X @literallyfloro posted a shadowboxing GIF captioned “huss huss huss” (status timestamps land on 8–9 Feb depending on timezone). Exact coinage is unrecovered; the word already sounded like gym-floor onomatopoeia before it became a caption.{{1}}",
        "In July 2026, TikTok’s [[Huss Valley]] format imagined a cursed place whose residents chase you until you huss to escape—often over Daniel LaBelle running clips. October’s [[While They Are Out Partying]] revival folded the breath into skill demos (e.g. @ryu_da_sigma’s burger-wrap drill). The Nov 13 @larpniverse Roblox upload then fused lonely-town narration with basketball dribbles and the chant, becoming the year’s loudest carrier.{{2}}{{3}}{{4}}",
      ],
      link: {
        href: "https://www.tiktok.com/@larpniverse/video/7707635922652630285",
        label: "TikTok — @larpniverse Roblox “While they are out partying” →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Early slang sighting, skill-drill carrier, Roblox breakout, remix, and major lip-dubs—one card per beat.",
      ],
      gallery: [
        {
          id: "x-literallyfloro",
          href: "https://x.com/literallyfloro/status/2020722166426145224",
          kind: "image",
          handle: "@literallyfloro",
          author: "X",
          text: "huss huss huss",
          date: "8 Feb 2026",
          caption:
            "Early documented slang sighting: shadowboxing GIF under the three-beat caption.",
          thumbnail: "/huss/cover.jpg",
        },
        {
          id: "tt-ryu-burger",
          href: "https://www.tiktok.com/@ryu_da_sigma/video/7698167502018333965",
          kind: "video",
          source: "web",
          handle: "@ryu_da_sigma",
          author: "TikTok",
          text: "While they are out partying · burger wrap + hussing",
          date: "Oct 2026",
          caption:
            "While They Are Out Partying skill drill with audible hussing between wraps.",
          thumbnail: "/huss/cover.jpg",
        },
        {
          id: "tt-larpniverse",
          href: "https://www.tiktok.com/@larpniverse/video/7707635922652630285",
          kind: "video",
          source: "web",
          handle: "@larpniverse",
          author: "TikTok",
          text: "In this town everybody goes out partying except me",
          date: "13 Nov 2026",
          caption:
            "Roblox basketball original — ~36–41M views; the audio that defined Huss Huss Huss.",
          thumbnail: "/huss/cover.jpg",
          views: "36–41M views",
        },
        {
          id: "tt-djfunkyehh",
          href: "https://www.tiktok.com/@djfunkyehh/video/7708300332509449493",
          kind: "video",
          source: "web",
          handle: "@djfunkyehh",
          author: "TikTok",
          text: "Funk / Jersey remix of Huss Huss Huss",
          date: "15 Nov 2026",
          caption:
            "Breakout remix (~3.6M views) that detached the breaths from Roblox visuals.",
          thumbnail: "/huss/cover.jpg",
          views: "~3.6M views",
        },
        {
          id: "tt-urbaewinnie",
          href: "https://www.tiktok.com/@urbaewinnie",
          kind: "video",
          source: "web",
          handle: "@urbaewinnie",
          author: "TikTok",
          text: "Huss Huss Huss lip-dub",
          date: "16 Nov 2026",
          caption:
            "Early viral lip-dub of the Roblox monologue (~5.6M views in three days).",
          thumbnail: "/huss/cover.jpg",
          views: "~5.6M views",
        },
        {
          id: "tt-devonmaid",
          href: "https://www.tiktok.com/@the_devonmaid/video/7708927294848371990",
          kind: "video",
          source: "web",
          handle: "@the_devonmaid",
          author: "TikTok",
          text: "Huss Huss Huss lip-dub",
          date: "16 Nov 2026",
          caption:
            "Same-day lip-dub set to the audio (~3.1M views in a comparable window).",
          thumbnail: "/huss/cover.jpg",
          views: "~3.1M views",
        },
        {
          id: "kym-huss-slang",
          href: "https://knowyourmeme.com/memes/huss",
          kind: "image",
          source: "web",
          handle: "Know Your Meme",
          author: "Encyclopedia",
          text: "Huss slang entry",
          date: "19 Nov 2026",
          caption:
            "Slang writeup framing huss / hussing and its Valley / Partying / Roblox waves.",
          thumbnail: "/huss/cover.jpg",
        },
        {
          id: "kym-huss-audio",
          href: "https://knowyourmeme.com/memes/huss-huss-huss-in-this-town-everybody-goes-out-partying-except-me",
          kind: "image",
          source: "web",
          handle: "Know Your Meme",
          author: "Encyclopedia",
          text: "Huss Huss Huss / In This Town…",
          date: "19 Nov 2026",
          caption:
            "Audio-focused entry documenting the @larpniverse clip and early remix/lip-dub stack.",
          thumbnail: "/huss/cover.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Huss Valley (from ~1 Jul 2026) made “hussing” a chase verb on TikTok and Reels; Fastest Hussers rankings later that summer treated escape speed as a leaderboard joke. The October Partying revival reattached the breath to solitary practice montages.{{2}}{{3}}",
        "The Roblox wave compressed that history into one sound. Within two days of @larpniverse’s upload, @djfunkyehh’s remix and a stack of camera-facing lip-dubs pushed the three-beat refrain onto non-Roblox FYPs, with public tallies in the multi-million range by mid-November.{{4}}{{5}}{{6}}",
      ],
      link: {
        href: "https://www.tiktok.com/@djfunkyehh/video/7708300332509449493",
        label: "TikTok — @djfunkyehh funk / Jersey remix →",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Caption a sprint, punch combo, or awkward hustle with “huss huss huss,” or call the act hussing. Tone is usually affectionate mockery of try-hard energy, not pure dunk.{{1}}{{2}}",
        "For the audio: lip-sync the lonely-town lines while showing a hobby, chore, or workout; time each “huss” to a motion. Remixes keep the breaths and swap the beat.{{4}}{{5}}",
      ],
      list: [
        "Boxing / running GIFs captioned “huss huss huss”",
        "Huss Valley chase captions over sprint footage",
        "While They Are Out Partying skill drills with audible hussing",
        "Roblox or live-action lip-dubs of the lonely-town monologue",
        "Funk / Jersey club remixes of the three-beat refrain",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{4}}"],
      list: [
        "8–9 Feb 2026 — @literallyfloro X shadowboxing GIF captioned “huss huss huss”{{1}}",
        "Jul 2026 — Huss Valley chase format popularizes hussing on TikTok{{2}}",
        "Oct 2026 — While They Are Out Partying revival absorbs hussing into skill demos{{3}}",
        "13 Nov 2026 — @larpniverse Roblox basketball upload (~36–41M views){{4}}",
        "15 Nov 2026 — @djfunkyehh funk / Jersey remix (~3.6M views){{5}}",
        "16 Nov 2026 — @urbaewinnie (~5.6M) and @the_devonmaid (~3.1M) lip-dubs{{6}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "X",
      title: "@literallyfloro — huss huss huss shadowboxing GIF",
      href: "https://x.com/literallyfloro/status/2020722166426145224",
      date: "8 Feb 2026",
    },
    {
      id: 2,
      publisher: "Know Your Meme",
      title: "Huss (slang)",
      href: "https://knowyourmeme.com/memes/huss",
      date: "19 Nov 2026",
    },
    {
      id: 3,
      publisher: "TikTok",
      title: "@ryu_da_sigma — burger wrap / While They Are Out Partying + hussing",
      href: "https://www.tiktok.com/@ryu_da_sigma/video/7698167502018333965",
      date: "Oct 2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@larpniverse — While they are out partying (Roblox)",
      href: "https://www.tiktok.com/@larpniverse/video/7707635922652630285",
      date: "13 Nov 2026",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@djfunkyehh — Huss Huss Huss funk / Jersey remix",
      href: "https://www.tiktok.com/@djfunkyehh/video/7708300332509449493",
      date: "15 Nov 2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@the_devonmaid — Huss Huss Huss lip-dub",
      href: "https://www.tiktok.com/@the_devonmaid/video/7708927294848371990",
      date: "16 Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Forklore documents meme formats and publicly reported posts · Not affiliated with TikTok, Roblox, or the creators named above · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
