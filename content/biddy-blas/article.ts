import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const biddyBlasArticle = {
  title: "Biddy Blas",
  description:
    'Biddy Blas Scrib Doon meme: Star Wars Galactic Racer Crocin alien whose Huttese "write it down" went viral Oct 2026—clips, reaction edits, Absolute Scrib Doon.',
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Biddy Blas]] is a squat Crocin racer in [[Star Wars: Galactic Racer]] (released 6 Oct 2026) whose boastful intro line — subtitled “Here’s a name for you, amateur! Biddy Blas. Write it down…” — lands in-game as the two-syllable bark [[Scrib doon]]. Fans clipped the delivery the day the game dropped; within a week the phrase was a portable swagger gag across X, Instagram, and TikTok.{{1}}{{2}}{{3}}",
    "Coverage tags him as a textbook [[Glup Shitto]]: an obscure side alien who steals the timeline. Voice actor [[Richard Summers-Calvert]] (wrestling persona Charles Crowley) and Fuse Games narrative director Nathaniel Daw later walked through the booth energy, the Huttese line craft, and meme crossovers from Dune poster spoofs to PlayStation UK lore posts.{{1}}{{2}}",
  ],
  infobox: {
    title: "Biddy Blas / Scrib Doon",
    image: {
      src: "/biddy-blas/cover.jpg",
      alt: "Biddy Blas, the squat Crocin racer from Star Wars Galactic Racer",
      caption:
        "In-game Crocin racer Biddy Blas — the face behind the Scrib doon bark.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: ["Scrib Doon", "Absolute Scrib Doon", "Biddy"],
      },
      {
        label: "Type",
        value: "Catchphrase / game character / voice-acting clip",
      },
      { label: "Year", value: "2026" },
      {
        label: "Origin",
        value: "Star Wars: Galactic Racer · 6 Oct 2026",
      },
      {
        label: "Peak waves",
        value: "Launch week Oct 2026 · late-Oct roundups",
      },
      {
        label: "Related",
        value: [
          "Glup Shitto",
          "Absolute Scrib Doon",
          "Star Wars: Galactic Racer",
          "Huttese catchphrases",
        ],
      },
      {
        label: "Platforms",
        value: ["X", "TikTok", "Instagram", "YouTube"],
      },
      {
        label: "Catchphrase",
        value: "Scrib doon (“write it down”)",
      },
      {
        label: "Voice",
        value: "Richard Summers-Calvert",
        href: "https://www.gamespot.com/articles/in-a-biddy-blas-of-glory-how-star-wars-galactic-racers-smallest-racer-made-such-a-huge-impact/",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "In Galactic Racer, Biddy Blas races for the underground Galactic League. He is a Crocin — short, reptilian, and loudly convinced he is the best pilot in the room. The meme is almost entirely one beat: he introduces himself in alien speech while English subtitles translate the swagger, and the “write it down” moment pops as [[Scrib doon]]. That mismatch — deadly serious delivery, silly mouthfeel — is the joke.{{1}}{{3}}",
        "Edits rarely need the full monologue. Caps strip the audio to the two syllables and drop Blas into doorbell rings, drunk-friend voice, ear-whisper flirtation, or song swaps. Later slang folds the line into “Absolute Scrib Doon” (a riff on Absolute Cinema) and franchise-mash poster gags.{{2}}{{3}}",
      ],
      image: {
        src: "/biddy-blas/nme-hero.jpg",
        alt: "Biddy Blas promotional still from Star Wars Galactic Racer",
        caption:
          "Press still of the furry/reptilian grump who hijacked Galactic Racer discourse.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "Star Wars: Galactic Racer launched on 6 October 2026 (Fuse Games / Secret Mode). Early in the campaign, Blas tries to intimidate the player entirely in alien speech. The subtitled translation runs: “Here’s a name for you, amateur! Biddy Blas. Write it down. Tattoo it on your arm, and someday your arm will be worth millions!” The “write it down” hit is voiced as Scrib doon.{{3}}{{4}}",
        "GameSpot’s interview with Summers-Calvert and music/narrative director Nathaniel Daw frames Scrib doon as Huttese for “write it down,” workshopped collaboratively between Lucasfilm and Fuse. Daw recalled saying the phrase around the office before launch; Summers-Calvert said the booth choice was a bold, high-energy swing that made the crew laugh for the right reasons. NME adds that the character was reportedly modeled on a designer’s “very angry” dog.{{1}}{{2}}",
      ],
      link: {
        href: "https://www.gamespot.com/articles/in-a-biddy-blas-of-glory-how-star-wars-galactic-racers-smallest-racer-made-such-a-huge-impact/",
        label: "GameSpot interview with Summers-Calvert & Daw →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Character stills, clip thumbnails, and secondary cards that traveled with the Scrib doon wave — click through for sources.",
      ],
      gallery: [
        {
          id: "cover-blas",
          href: "https://www.gamespot.com/articles/in-a-biddy-blas-of-glory-how-star-wars-galactic-racers-smallest-racer-made-such-a-huge-impact/",
          kind: "image",
          source: "web",
          handle: "GameSpot",
          author: "Character still",
          text: "Biddy Blas — Galactic Racer",
          date: "Oct 2026",
          caption:
            "Squat Crocin racer still used across post-launch coverage of the Scrib doon breakout.",
          thumbnail: "/biddy-blas/cover.jpg",
        },
        {
          id: "nme-hero",
          href: "https://www.nme.com/features/gaming-features/biddy-blas-memes-star-wars-galactic-racer-scrib-doon-3974476",
          kind: "image",
          source: "web",
          handle: "NME",
          author: "Secret Mode still",
          text: "Scrib doon! Best Biddy Blas memes",
          date: "30 Oct 2026",
          caption:
            "NME roundup hero: the grumpy space dog framed as the game’s accidental mascot.",
          thumbnail: "/biddy-blas/nme-hero.jpg",
        },
        {
          id: "yt-scrib-doon",
          href: "https://www.youtube.com/watch?v=Hv8U7YcJHAA",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Gameplay / line clip",
          text: "Biddy Blas — Scrib doon scene",
          date: "Oct 2026",
          caption:
            "Widely linked clip of the subtitled boast where “write it down” lands as Scrib doon.",
          thumbnail: "/biddy-blas/yt-clip.jpg",
        },
        {
          id: "scribdoon-cover",
          href: "https://www.youtube.com/watch?v=Hv8U7YcJHAA",
          kind: "image",
          source: "web",
          handle: "Clip still",
          author: "Scene crop",
          text: "Scrib doon delivery still",
          date: "Oct 2026",
          caption:
            "Close still from the viral delivery beat — the face meme timelines kept looping.",
          thumbnail: "/biddy-blas/kym-cover.jpg",
        },
        {
          id: "meme-com-card",
          href: "https://meme.com/memes/biddy-blas-scrib-doon",
          kind: "image",
          source: "web",
          handle: "meme.com",
          author: "Entry card",
          text: "Biddy Blas / Scrib Doon card",
          date: "12 Oct 2026",
          caption:
            "Secondary encyclopedia card summarizing the Crocin intro scene and early spread beats.",
          thumbnail: "/biddy-blas/meme-com-card.webp",
        },
        {
          id: "x-nib95",
          href: "https://x.com/nib95_/status/2107513161293427204",
          kind: "video",
          handle: "@nib95_",
          author: "X",
          text: "This Star Wars: Galactic Racer voice acting though!",
          date: "6 Oct 2026",
          caption:
            "Launch-day clip post that helped push the voice-acting bit (~21k likes in six days in early tallies).",
          thumbnail: "/biddy-blas/cover.jpg",
          views: "21K+ likes",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "On launch day, X user @nib95_ posted the scene under “This Star Wars: Galactic Racer voice acting though!” and cleared roughly 21,000 likes within six days — the clearest early amplifier. Two days later, Instagram’s @bibfortunasalad reframed the delivery as a drunk friend (~11k likes in four days). On 9 Oct, TikToker @herooffereldenirl swapped the audio for Baby Jayy’s “Good Morning” (~64k views in three days).{{3}}{{5}}{{8}}{{9}}",
        "By 10 Oct the clip was caption-ready: @Daily_SWGames paired it with “When I’m outside my friends house and I ring their doorbell” (~10k likes), and @LottDood used “Be in my girls ear like” (~7.7k likes). Late-October roundups (GameSpot interview 23 Oct; NME meme tour 30 Oct) show the wave widening into Dune “Scrib Doon” poster spoofs, Jedi-council edits, Halloween costumes, and official-adjacent jokes — including PlayStation UK’s “canonically an ex-model” lore post and a Star Wars account “work meeting notes” gag listing Biddy Blas / Scrib dooon.{{1}}{{2}}{{6}}{{7}}",
      ],
      link: {
        href: "https://www.nme.com/features/gaming-features/biddy-blas-memes-star-wars-galactic-racer-scrib-doon-3974476",
        label: "NME — Scrib doon meme roundup →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Portable read: announce yourself with unearned confidence. Drop the Scrib doon bark (or the full Blas clip) under any moment of chest-puffing — doorbell bravado, drunk swagger, whispering a name like a threat, or ironic self-promo. Song-swap edits keep the mouth flaps and replace the score with hype tracks.{{3}}{{2}}",
        "Inside Star Wars fandom he is repeatedly called a [[Glup Shitto]]: a deep-cut-feeling side character who somehow owns the algorithm. “Absolute Scrib Doon” rides the Absolute Cinema template; crossover posters mash Blas into Dune, Marvel, and album-cover wordplay. Summers-Calvert publicly celebrated the memes — Dune eight-Blas posters and It’s Always Sunny face-swaps among favorites cited in press.{{1}}{{2}}",
      ],
      list: [
        "Clip + caption: overconfident doorbell / whisper / drunk-friend energy",
        "Audio isolate: just “Scrib doon” as a swagger sting",
        "Song swaps (e.g. Baby Jayy “Good Morning” TikTok edit)",
        "Absolute Scrib Doon / franchise poster spoofs / Glup Shitto tagging",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "6 Oct 2026 — Star Wars: Galactic Racer releases; Biddy Blas intro scene ships{{3}}",
        "6 Oct 2026 — @nib95_ posts the voice-acting clip (~21k likes / 6 days){{3}}{{5}}",
        "8 Oct 2026 — Instagram @bibfortunasalad drunk-delivery meme (~11k likes){{3}}{{8}}",
        "9 Oct 2026 — TikTok @herooffereldenirl Baby Jayy song swap (~64k views){{3}}{{9}}",
        "10 Oct 2026 — @Daily_SWGames doorbell + @LottDood “in my girl’s ear” captions{{6}}{{7}}",
        "12 Oct 2026 — Secondary meme encyclopedia cards lock the early timeline{{3}}",
        "13–16 Oct 2026 — Dune / crossover spoofs; Star Wars & PlayStation UK joke posts{{2}}",
        "23 Oct 2026 — GameSpot interview with Summers-Calvert & Nathaniel Daw{{1}}",
        "30 Oct 2026 — NME “best Biddy Blas memes” roundup{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "GameSpot",
      title:
        "In A (Biddy) Blas Of Glory: How Star Wars: Galactic Racer’s Smallest Racer Made Such A Huge Impact",
      href: "https://www.gamespot.com/articles/in-a-biddy-blas-of-glory-how-star-wars-galactic-racers-smallest-racer-made-such-a-huge-impact/",
      date: "23 Oct 2026",
    },
    {
      id: 2,
      publisher: "NME",
      title: "Scrib doon! The best Biddy Blas memes of the viral Star Wars character",
      href: "https://www.nme.com/features/gaming-features/biddy-blas-memes-star-wars-galactic-racer-scrib-doon-3974476",
      date: "30 Oct 2026",
    },
    {
      id: 3,
      publisher: "meme.com",
      title: "Biddy Blas / Scrib Doon: The Star Wars Galactic Racer Meme",
      href: "https://meme.com/memes/biddy-blas-scrib-doon",
      date: "12 Oct 2026",
    },
    {
      id: 4,
      publisher: "YouTube",
      title: "Biddy Blas — Scrib doon scene clip",
      href: "https://www.youtube.com/watch?v=Hv8U7YcJHAA",
      date: "Oct 2026",
    },
    {
      id: 5,
      publisher: "X",
      title: "@nib95_ — Galactic Racer voice-acting clip",
      href: "https://x.com/nib95_/status/2107513161293427204",
      date: "6 Oct 2026",
    },
    {
      id: 6,
      publisher: "X",
      title: "@Daily_SWGames — doorbell caption clip",
      href: "https://x.com/Daily_SWGames/status/2108971161199468710",
      date: "10 Oct 2026",
    },
    {
      id: 7,
      publisher: "X",
      title: "@LottDood — “Be in my girls ear like”",
      href: "https://x.com/LottDood/status/2108944818495987889",
      date: "10 Oct 2026",
    },
    {
      id: 8,
      publisher: "Instagram",
      title: "@bibfortunasalad — drunk-delivery reel",
      href: "https://www.instagram.com/bibfortunasalad/reel/DePXBHmPjOV/",
      date: "8 Oct 2026",
    },
    {
      id: 9,
      publisher: "TikTok",
      title: "@herooffereldenirl — Baby Jayy “Good Morning” edit",
      href: "https://www.tiktok.com/@herooffereldenirl/video/7694664434802756895",
      date: "9 Oct 2026",
    },
    {
      id: 10,
      publisher: "Wookieepedia",
      title: "Biddy Blas",
      href: "https://starwars.fandom.com/wiki/Biddy_Blas",
      date: "character entry",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Star Wars: Galactic Racer and Biddy Blas © Lucasfilm / respective publishers · Screenshots © respective platforms / posters",
} as const satisfies WikiArticleData;
