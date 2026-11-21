import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const googleGigglesArticle = {
  title: "Google Giggles",
  description:
    "Google Giggles is TikTok's fictional Google short-video app meme (2023)—the \"bro got banned from Google Giggles\" jab at cringe, outdated, normie clips.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Google Giggles]] is an imaginary Google-branded short-form video / social app invented as a TikTok joke in February 2023. In the bit, it is where outdated, low-effort, and outlandishly “normie” clips live — the dumpster sibling of [[YouTube Shorts]], not a real Google product.{{1}}{{2}}{{3}}",
    "The seed was a comment under a deliberately dated TikTok: “Bro got banned from google giggles.” The line became a spam / roast template for cringe uploads, then spun into gimmick accounts, fake promo videos, alliterative cousins ([[Twitch Tickles]], [[Reddit Rumbles]], [[Twitter Teehees]]), and — years later — a real indie app named Giggles that riffed on the same joke.{{1}}{{4}}{{5}}",
  ],
  infobox: {
    title: "Google Giggles",
    image: {
      src: "/google-giggles/cover.jpg",
      alt: "Google Giggles meme cover — fake Google short-form app parody still",
      caption:
        "Encyclopedia cover still for the fake Google shorts / social app gag.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Bro got banned from Google Giggles",
          "Google Giggles video",
          "Fake Google shorts app",
        ],
      },
      {
        label: "Type",
        value: "Parody / catchphrase / participatory slang",
      },
      { label: "Year", value: "2023 (revival waves 2025–2026)" },
      {
        label: "Origin",
        value: "TikTok comment @ivano0_m on @kai_brisk · 22 Feb 2023",
        href: "https://www.tiktok.com/@kai_brisk/video/7203044784821341445",
      },
      {
        label: "Peak wave",
        value: "Mar–Apr 2023 (#googlegiggles ~15.5M TikTok views)",
      },
      {
        label: "Related",
        value: [
          "YouTube Shorts cringe jokes",
          "Twitch Tickles / Reddit Rumbles",
          "Giggles app (Justin Jin)",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "YouTube", "Reddit", "Urban Dictionary", "App Store"],
      },
      {
        label: "Known for",
        value: "Roasting cringe / dated short-form content",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "Google Giggles works like a fictional destination label. Call a clip “Google Giggles content,” or say the poster “got banned from Google Giggles,” and you are ranking it as too corny, kid-coded, early-2010s, or Shorts-adjacent for the current For You Page. The humor doubles as a jab at Google’s real history of failed social products (Google+, etc.) and at Shorts as a cringe sink.{{1}}{{3}}{{6}}",
        "Visuals lean into throwback production: shaky Android-cam look, face-warp filters, spinning-skull GIFs, and parody “Meet the new Google Giggles” promo copy. Alliterative knockoffs (Twitch Tickles, Reddit Rumbles, Twitter Teehees, Hulu Hahas) extend the same template to other platforms.{{1}}{{2}}",
      ],
      image: {
        src: "/google-giggles/meme-com.webp",
        alt: "Google Giggles fake app logo / parody branding still",
        caption:
          "Parody logo / branding still used in secondary encyclopedia writeups of the fake app.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 22 February 2023, TikToker @kai_brisk posted a clip styled like old TikTok: older sound “I Really Gotta Hold On,” low-quality Android camera energy, and a face-distortion filter — framed as a reply to “bro stuck in 2016.” Within about two months the video was tallied around 5.9 million plays and ~805k likes (later writeups note the origin upload was later deleted on some accounts).{{1}}{{2}}",
        "Under that video, @ivano0_m commented “Bro got banned from google giggles,” pulling roughly 20–22k likes in contemporary tallies. The phrase stuck as a copy-paste roast for anything that felt stuck in 2000s / early-2010s internet aesthetics.{{1}}{{2}}{{3}}",
      ],
      link: {
        href: "https://meme.com/memes/google-giggles",
        label: "meme.com — Google Giggles origin & spread →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Origin roast energy, early captioned clips, parody branding, Reddit confusion posts, and later card/explainer art — one card per beat.",
      ],
      gallery: [
        {
          id: "kai-brisk-origin",
          href: "https://www.tiktok.com/@kai_brisk/video/7203044784821341445",
          kind: "video",
          source: "web",
          handle: "@kai_brisk",
          author: "Seed TikTok",
          text: "Deliberately dated / “stuck in 2016” reply clip",
          date: "22 Feb 2023",
          caption:
            "Throwback-styled TikTok that hosted the viral “banned from Google Giggles” comment (~5.9M plays in early tallies; later reported deleted in places).",
          thumbnail: "/google-giggles/cover.jpg",
          views: "~5.9M plays",
        },
        {
          id: "ihatemeehhh",
          href: "https://www.tiktok.com/@ihatemeehhh/video/7204213667980741934",
          kind: "video",
          source: "web",
          handle: "@ihatemeehhh",
          author: "Early caption use",
          text: "google giggles video 💀👍",
          date: "25 Feb 2023",
          caption:
            "Early isolated caption naming the fake app while leaning into ironic self-cringe.",
          thumbnail: "/google-giggles/cover.jpg",
          views: "~68k plays",
        },
        {
          id: "gimmick-account",
          href: "https://www.tiktok.com/@googlegigglesoffical/video/7208537586690772230",
          kind: "video",
          source: "web",
          handle: "@googlegigglesoffical",
          author: "Gimmick account",
          text: "Namedrop + spinning skull GIF",
          date: "9 Mar 2023",
          caption:
            "Parody “official” TikTok account’s first clip — ~254k plays in a month in early tallies.",
          thumbnail: "/google-giggles/kym-editorial.jpg",
          views: "~254k plays",
        },
        {
          id: "youtube-promo",
          href: "https://www.youtube.com/watch?v=74rydfp1Tlw",
          kind: "video",
          source: "web",
          handle: "Google Giggles (YT)",
          author: "Parody promo",
          text: "Meet the new Google Giggles",
          date: "25 Mar 2023",
          caption:
            "Fake launch trailer pitching a “smart, funny, and powerful short-form video platform by you, for you” (~5.6k views in three weeks in early tallies; thumbnail host may 404 if the upload moved).",
          thumbnail: "/google-giggles/meme-com.webp",
        },
        {
          id: "reddit-ypyt",
          href: "https://www.reddit.com/r/youngpeopleyoutube/comments/12gi56d/wtf_is_google_giggles/",
          kind: "image",
          source: "web",
          handle: "r/youngpeopleyoutube",
          author: "Reddit thread",
          text: "Wtf is \"Google Giggles\"",
          date: "9 Apr 2023",
          caption:
            "April 2023 confusion / explanation thread — commenters frame it as a made-up knockoff shorts app roast.",
          thumbnail: "/google-giggles/reddit-ypyt.jpg",
          views: "688 pts",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/google-giggles/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Google Giggles card entry",
          date: "2 Oct 2026",
          caption:
            "Secondary card summarizing meaning, 22 Feb origin, and spinoff names (Twitch Tickles, Reddit Rumbles).",
          thumbnail: "/google-giggles/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Late February into March 2023, users started captioning their own throwback clips as Google Giggles content. @ihatemeehhh’s 25 Feb post (“google giggles video 💀👍”) and the 9 Mar @googlegigglesoffical gimmick account (spinning-skull calling card) pushed the bit from comment spam into a recognizable format.{{1}}{{2}}",
        "On 25 March 2023 a YouTube channel also named Google Giggles uploaded the parody promo “Meet the new Google Giggles.” By early April the #googlegiggles hashtag was reported around 15.5 million TikTok views; Urban Dictionary definitions that same month treated it as an imaginary cringe / kids-content dumping ground often associated with Shorts. Reddit threads (e.g. r/youngpeopleyoutube) show people encountering the phrase without context and getting the knockoff-shorts explanation.{{1}}{{3}}{{6}}",
      ],
      link: {
        href: "https://www.urbandictionary.com/define.php?term=Google+Giggles",
        label: "Urban Dictionary — Google Giggles definitions →",
      },
    },
    {
      id: "revival",
      title: "Later revival & real Giggles app",
      paragraphs: [
        "The fictional app joke never became a Google product. Separately, Justin Jin has said he started a viral “Giggles” meme/landing page around the 2023 TikTok-ban chatter, explicitly riffing on the “bro got banned from google giggles” line, then built a real invite-only social / meme-trading app with co-founder Edwin Wang. TechCrunch covered the company in April 2026 (including a tongue-in-cheek $1,234,567 raise).{{5}}",
        "Secondary writeups also note a 2025–2026 recirculation when a real “Giggles” app icon (Google-colored shapes / smiley energy, not Google-made) collided with the old roast — TikTokers again treated “Google Giggles” as if it were a live platform, mostly to dunk on it versus TikTok / Reels, sometimes with ironic hype. Treat the indie Giggles product as inspired by the meme, not as official Google.{{2}}{{5}}",
      ],
      image: {
        src: "/google-giggles/kym-editorial.jpg",
        alt: "Google Giggles revival-era editorial cover art",
        caption:
          "Later editorial art used when the fake-app joke recirculated alongside real Giggles branding chatter.",
      },
      link: {
        href: "https://techcrunch.com/2026/04/07/a-teenage-minecraft-youtuber-raised-1234567-for-a-meme-prediction-market-called-giggles-it-broke-me/",
        label: "TechCrunch — Justin Jin / Giggles app interview →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Core read: this content is too cringe, childish, or aesthetically dated for “main” short-form culture — as if it belongs on a Google-branded knockoff. Pair with throwback filters, dead memes, millennial / early-2010s vibes, or anything that feels like YouTube Kids / Shorts sludge.{{1}}{{3}}",
        "Common moves: paste “bro got banned from Google Giggles” under someone else’s clip; caption your own ironic cringe as a Google Giggles upload; invent parallel platform names; or pretend to ship a real promo / waitlist for the fake app.{{1}}{{2}}{{6}}",
      ],
      list: [
        "Comment roast: “bro got banned from Google Giggles”",
        "Self-caption: “google giggles video” + skull / ironic emojis",
        "Fake promo / gimmick-account bits (“Meet the new Google Giggles”)",
        "Spinoffs: Twitch Tickles, Reddit Rumbles, Twitter Teehees, etc.",
        "Later: confuse / joke about real Giggles app branding vs. the meme",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{5}}"],
      list: [
        "22 Feb 2023 — @kai_brisk posts dated-style TikTok; @ivano0_m comments “Bro got banned from google giggles”{{1}}",
        "25 Feb 2023 — @ihatemeehhh early “google giggles video” caption{{1}}",
        "9 Mar 2023 — @googlegigglesoffical gimmick account first upload{{1}}",
        "9 Mar–20 Apr 2023 — Urban Dictionary definitions land (fake TikTok knockoff / cringe dump){{3}}",
        "25 Mar 2023 — YouTube parody promo “Meet the new Google Giggles”{{1}}",
        "Early Apr 2023 — #googlegiggles ~15.5M TikTok views; Reddit explainers circulate{{1}}{{6}}",
        "2023–2025 — Jin’s Giggles landing page / app riffs on the roast{{5}}",
        "Apr 2026 — TechCrunch covers the real Giggles company / fundraise{{5}}",
        "2026 — Secondary cards & explainers lock meaning + origin date{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "meme.com",
      title: "Google Giggles Meme: TikTok's Fake Google Platform Joke",
      href: "https://meme.com/memes/google-giggles",
      date: "17 Oct 2026",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Google Giggles meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/google-giggles/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "Urban Dictionary",
      title: "Google Giggles",
      href: "https://www.urbandictionary.com/define.php?term=Google+Giggles",
      date: "9 Mar–20 Apr 2023",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@kai_brisk — dated-style seed video (comment host)",
      href: "https://www.tiktok.com/@kai_brisk/video/7203044784821341445",
      date: "22 Feb 2023",
    },
    {
      id: 5,
      publisher: "TechCrunch",
      title:
        "A teenage Minecraft YouTuber raised $1,234,567 for a meme prediction market called Giggles",
      href: "https://techcrunch.com/2026/04/07/a-teenage-minecraft-youtuber-raised-1234567-for-a-meme-prediction-market-called-giggles-it-broke-me/",
      date: "7 Apr 2026",
    },
    {
      id: 6,
      publisher: "Reddit",
      title: 'r/youngpeopleyoutube — “Wtf is Google Giggles”',
      href: "https://www.reddit.com/r/youngpeopleyoutube/comments/12gi56d/wtf_is_google_giggles/",
      date: "9 Apr 2023",
    },
    {
      id: 7,
      publisher: "YouTube",
      title: "Meet the new Google Giggles (parody promo)",
      href: "https://www.youtube.com/watch?v=74rydfp1Tlw",
      date: "25 Mar 2023",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Not affiliated with Google LLC · Screenshots © respective platforms / posters · Giggles app ≠ Google product",
} satisfies WikiArticleData;
