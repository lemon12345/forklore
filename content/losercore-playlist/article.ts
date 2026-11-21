import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const losercorePlaylistArticle = {
  title: "Losercore Playlist",
  description:
    "Losercore Playlist is depay178's Spotify LOSERCORE alt-rock list that went viral mid-2026 via TikTok AI ads, X dunks, and a TV Girl fan-art theft claim.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Losercore Playlist]] (also [[LOSERCORE]]) is a Spotify playlist of moody alternative / lo-fi tracks tagged with the slang suffix [[-core]], built by user [[depay178]] (sometimes credited with co-curator [[d]]). Its tagline — “failure never sounded so good” — frames loneliness, bedrot, and soft social failure as a listen-along mood rather than a joke punchline.{{1}}{{2}}{{3}}",
    "The list itself sat as niche curation until mid-2026, when TikToker [[@user406398991]] (display name “loser”) began advertising it with slideshows and, later, retro PlayStation-style AI animations. By early October the playlist had on the order of ~187,000 Spotify saves; late-fall tallies pushed past ~330,000 as X discourse, artist confusion, and a TV Girl fan-art theft accusation made the ads the meme.{{1}}{{2}}{{4}}",
  ],
  infobox: {
    title: "Losercore Playlist",
    image: {
      src: "/losercore-playlist/cover.jpg",
      alt: "Losercore Playlist Spotify cover collage used in meme coverage",
      caption:
        "Recognisable LOSERCORE cover art circulated with TikTok ads and encyclopedia writeups.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "LOSERCORE",
          "Loser Core Playlist",
          "Losercore Playlist Meme",
        ],
      },
      {
        label: "Type",
        value: "Spotify playlist / AI promo meme / aesthetic tag",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "Spotify · depay178 (LOSERCORE)",
        href: "https://open.spotify.com/playlist/2K6XfT9RFNsynWW9TIAXGW",
      },
      {
        label: "Peak wave",
        value: "Jun–Oct 2026 (TikTok ads → X discourse)",
      },
      {
        label: "Related",
        value: [
          "Loser core aesthetic",
          "WINNERCORE",
          "TV Girl Who Really Cares",
          "-core slang",
          "wifiskeleton / Memo Boy",
        ],
      },
      {
        label: "Platforms",
        value: ["Spotify", "TikTok", "X", "YouTube commentary"],
      },
      {
        label: "Promo account",
        value: "@user406398991 · Jun 2026–",
        href: "https://www.tiktok.com/@user406398991",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "As a playlist, LOSERCORE stacks short indie / bedroom tracks about alienation, unrequited crushes, and rotting in bed — names that recur in coverage include wifiskeleton, Memo Boy, overtonight, TV Girl, Alex G, and Mac DeMarco alongside a long tail of smaller artists. There is no official “losercore” genre bible; the suffix does the branding work, and listeners argue endlessly about who belongs.{{2}}{{3}}{{4}}",
        "As a meme, the object is less any one song than the promotional loop: AI skits starring a beanie “loser,” a blue-and-pink couple lifted from TV Girl’s [[Who Really Cares]] look, and cameos of musicians or film characters that end with a hard sell to open the Spotify link. Viewers dunk on the craft, ask why anyone would advertise a playlist, and still keep saving it.{{1}}{{2}}{{3}}",
      ],
      image: {
        src: "/losercore-playlist/ai-ad-still.jpg",
        alt: "Still from a Losercore Playlist TikTok AI promo animation",
        caption:
          "Retro-style AI ad still of the kind that made the playlist’s promo campaign itself the joke.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Spotify user depay178 publishes LOSERCORE with the failure tagline; song adds in coverage date back at least to late May 2026. On June 5, 2026, TikToker @user406398991 posted an early slideshow promoting the list. A June 9 follow-up of five favorite “losercore” songs later climbed into the multi-million-view range and seeded summer interest.{{1}}{{2}}{{4}}",
        "From September into October the same account switched to daily AI animations with PS1 / PS2-adjacent graphics. Recurring bits include a stereotypical loser who insists he is “only into music,” plus the inseparable blue man / pink woman pair modeled on the Who Really Cares cover. Individual clips from October 5–7 each pulled hundreds of thousands of views within days.{{1}}{{2}}{{3}}",
      ],
      link: {
        href: "https://open.spotify.com/playlist/2K6XfT9RFNsynWW9TIAXGW",
        label: "Spotify — LOSERCORE by depay178 →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Cover art, AI ad stills, X discourse screenshots, and secondary explainer graphics — one card per host.",
      ],
      gallery: [
        {
          id: "spotify-losercore",
          href: "https://open.spotify.com/playlist/2K6XfT9RFNsynWW9TIAXGW",
          kind: "image",
          source: "web",
          handle: "depay178",
          author: "Spotify playlist",
          text: "LOSERCORE — failure never sounded so good",
          date: "2026",
          caption:
            "Canonical Spotify playlist object behind the ads, dunks, and save-count race.",
          thumbnail: "/losercore-playlist/cover.jpg",
        },
        {
          id: "ai-promo-still",
          href: "https://www.tiktok.com/@user406398991",
          kind: "video",
          source: "web",
          handle: "@user406398991",
          author: "TikTok AI ads",
          text: "#losercore promo loop",
          date: "Sep–Oct 2026",
          caption:
            "Example still from the retro AI animation campaign that pushed the playlist into meme discourse.",
          thumbnail: "/losercore-playlist/ai-ad-still.jpg",
          duration: "short",
        },
        {
          id: "discourse-tweet",
          href: "https://x.com/search?q=losercore%20playlist",
          kind: "image",
          source: "web",
          handle: "X discourse",
          author: "Early Oct 2026",
          text: "why advertise a playlist?",
          date: "Oct 2026",
          caption:
            "Typical early-October X reaction frame: confusion + quality dunks on the AI ads.",
          thumbnail: "/losercore-playlist/discourse-tweet.jpg",
        },
        {
          id: "yotsunia",
          href: "https://x.com/yotsunia",
          kind: "image",
          source: "web",
          handle: "@yotsunia",
          author: "X",
          text: "he clearly has friends…",
          date: "7 Oct 2026",
          caption:
            "Joke that the “loser” cast in the ads looks socially busy — undercutting the brand.",
          thumbnail: "/losercore-playlist/yotsunia-tweet.jpg",
        },
        {
          id: "antdoe13",
          href: "https://x.com/antdoe13",
          kind: "image",
          source: "web",
          handle: "@antdoe13",
          author: "X",
          text: "TV Girl fan art vs AI ad",
          date: "7 Oct 2026",
          caption:
            "Artist side-by-side accusing the promo account of feeding their TV Girl fan art into the AI couple.",
          thumbnail: "/losercore-playlist/antdoe-accusation.jpg",
        },
        {
          id: "echo-graphic",
          href: "https://encinalecho.com/tiktoks-latest-viral-hit-the-losercore-playlist-explained/",
          kind: "image",
          source: "web",
          handle: "The Echo",
          author: "Campus explainer",
          text: "LOSERCORE playlist explained",
          date: "9 Nov 2026",
          caption:
            "Secondary graphic tying Spotify cover energy to the TikTok promo wave.",
          thumbnail: "/losercore-playlist/echo-graphic.jpg",
        },
        {
          id: "lifehacker",
          href: "https://au.lifehacker.com/entertainment/119902/out-of-touch-adults-guide-to-kid-culture-what-is-loser-core",
          kind: "image",
          source: "web",
          handle: "Lifehacker",
          author: "Kid-culture guide",
          text: "What Is 'Loser Core'?",
          date: "20 Oct 2026",
          caption:
            "Mainstream explainer framing loser core as mood + anti-fashion, with the playlist as the viral vector.",
          thumbnail: "/losercore-playlist/lifehacker.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Early October 2026 is when the ads escaped TikTok FYP into quote-dunk culture. X users recirculated clips as “worst video I’ve ever seen” bait; reaction TikToks scrolled the promo account’s grid for niche-jabbing; and posts wondered aloud what money could possibly come from playlist saves.{{1}}{{2}}{{3}}",
        "On October 7, illustrator @antdoe13 posted their older TV Girl couple fan art next to the AI version used in the ads, accusing the creator of unauthorized use — a thread that became a major secondary news beat. Coverage also notes artist confusion at being filed under “loser,” merch opportunists, gatekeeping over the aesthetic, and a WINNERCORE spoof playlist (theesama, then a depay178 “official” reply) that the same TikTok account began promoting.{{2}}{{3}}{{4}}",
      ],
      image: {
        src: "/losercore-playlist/antdoe-accusation.jpg",
        alt: "Side-by-side of TV Girl fan art and Losercore AI ad characters",
        caption:
          "@antdoe13’s accusation still — fan art on one side, AI promo couple on the other.",
      },
    },
    {
      id: "usage",
      title: "Usage",
      paragraphs: [
        "Online, “losercore playlist” can mean the Spotify object, the AI-ad format, or the broader loser-core mood (slouchy clothes, niche hobbies, soft despair). Posters drop clips to roast the ads, ironically claim the identity, sell adjacent merch, or argue that a band “isn’t loser enough.” Commentators also speculate about playlist-payola micro-businesses — placement fees or same-day self-releases riding the save spike — without a public ledger proving any one model.{{2}}{{3}}{{4}}",
      ],
      list: [
        "Share / stitch the AI ads as cringe or uncanny comedy",
        "Save the Spotify list as a sincerity / irony listen",
        "Gatekeep or expand which artists count as losercore",
        "Spin-off playlists (WINNERCORE) and copycat promo accounts",
        "Art-theft / AI-training discourse around the TV Girl couple",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Key documented beats:{{1}}{{2}}{{3}}{{4}}"],
      list: [
        "Late May 2026 — Early LOSERCORE track adds attributed to depay178 on Spotify{{1}}",
        "5 Jun 2026 — @user406398991 first TikTok slideshow ad for the playlist{{1}}{{2}}",
        "9 Jun 2026 — Five-favorite losercore songs slideshow (later multi-million views){{1}}{{2}}",
        "Sep–early Oct 2026 — Daily retro AI animation ads; beanie loser + TV Girl-colored couple{{1}}{{2}}{{3}}",
        "5–7 Oct 2026 — Individual AI clips clear ~700k–910k views in days{{1}}",
        "6–8 Oct 2026 — X dunk wave; “why advertise a playlist?” discourse{{1}}{{3}}",
        "7 Oct 2026 — @antdoe13 TV Girl fan-art theft accusation{{2}}{{4}}",
        "Early Oct 2026 — ~187k Spotify saves cited in contemporary tallies{{1}}",
        "20 Oct 2026 — Lifehacker kid-culture guide covers loser core + the playlist{{3}}",
        "31 Oct 2026 — Same-day track adds noted in campus coverage as payola speculation fuel{{2}}",
        "9 Nov 2026 — Encinal Echo explainer; saves reported ~350k{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Spotify",
      title: "LOSERCORE — playlist by depay178",
      href: "https://open.spotify.com/playlist/2K6XfT9RFNsynWW9TIAXGW",
      date: "2026",
    },
    {
      id: 2,
      publisher: "The Echo (Encinal)",
      title: "Tiktok’s latest viral hit: The “LOSERCORE” playlist explained",
      href: "https://encinalecho.com/tiktoks-latest-viral-hit-the-losercore-playlist-explained/",
      date: "9 Nov 2026",
    },
    {
      id: 3,
      publisher: "Lifehacker",
      title:
        "Out-of-Touch Adults' Guide to Kid Culture: What Is 'Loser Core'?",
      href: "https://au.lifehacker.com/entertainment/119902/out-of-touch-adults-guide-to-kid-culture-what-is-loser-core",
      date: "20 Oct 2026",
    },
    {
      id: 4,
      publisher: "TikTok",
      title: "@user406398991 — Losercore Playlist promo account",
      href: "https://www.tiktok.com/@user406398991",
      date: "Jun–Oct 2026",
    },
    {
      id: 5,
      publisher: "X",
      title: "@antdoe13 — TV Girl fan-art accusation account",
      href: "https://x.com/antdoe13",
      date: "7 Oct 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@yotsunia — “you are not loser bro” discourse",
      href: "https://x.com/yotsunia",
      date: "7 Oct 2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@mooncatroses — why advertise a losercore playlist",
      href: "https://x.com/mooncatroses",
      date: "8 Oct 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Spotify playlist © depay178 / rights holders · AI promo stills & screenshots © respective platforms / posters · TV Girl characters depicted for commentary",
} as const satisfies WikiArticleData;
