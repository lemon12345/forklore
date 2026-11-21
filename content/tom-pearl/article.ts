import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const tomPearlArticle = {
  title: "Tom Pearl",
  description:
    "Silver Tom and Golden Tom phonk aura edits, Aura of Letter T, and T Squad brainrot cast Tom Pearl as meme fodder—posts often note his criminal record up front.",
  curatedLabel: "Curated entry · Nov 2026 · Sensitive",
  lead: [
    "[[Tom Pearl]] (born Thomas Patrick Pearl II, 1959) is an American internet figure who uploaded extreme scat fetish videos in the 2010s under aliases such as [[toiletmouth]]. A 2001–2002 federal case in Florida left him a registered sex offender for possession of child sexual abuse material — a fact meme explainers usually flag before describing the joke.{{1}}{{2}}{{4}}",
    "In 2023 short, often cropped intro clips resurfaced on TikTok. From spring 2026 he became a full brainrot cast member: metallic [[Silver Tom]] / [[Golden Tom]] phonk edits, [[Aura of Letter T]] pack-shots, and the [[T Squad]] with Tom from Tom and Jerry, Tung Tung Tung Sahur, and hyper-real Trollface. November 2026 added a wave of disputed Georgia [[Tom Pearl Sightings]].{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "Tom Pearl",
    image: {
      src: "/tom-pearl/aura-letter-t.jpg",
      alt: "Aura of Letter T collage placing silver Tom Pearl with other T characters",
      caption:
        "Aura / Letter T pack-shot style: Pearl rendered metallic beside other “T” brainrot figures.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Silver Tom",
          "Golden Tom",
          "Aura of Letter T",
          "Toiletmouth",
        ],
      },
      {
        label: "Type",
        value: "Person / brainrot character / phonk edit",
      },
      { label: "Year", value: "1959 (person) · meme peak 2026" },
      {
        label: "Origin (meme)",
        value: "TikTok (aura / T Squad edits)",
      },
      {
        label: "Related",
        value: [
          "T Squad",
          "Tung Tung Tung Sahur",
          "Tom and Jerry",
          "Tom Pearl Sightings",
        ],
      },
      {
        label: "Platforms",
        value: ["TikTok", "YouTube", "X", "Instagram"],
      },
      {
        label: "Catchphrase (clip)",
        value: "Hi, my name is Tom Pearl…",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The 2026 meme does not invent a new person — it reframes an already notorious one. Editors take stills or cropped face-to-camera moments, chrome them like Marvel’s Silver Surfer, and drop them on phonk (often “Yara Yara” style tracks) as if Pearl were a sigma final boss. The punchline is the mismatch: heroic aura farming over a figure whose real record is repulsive.{{1}}{{2}}{{4}}",
        "Formats stack fast. [[Aura of Letter T]] groups Pearl with other T-named brainrot icons. [[T Squad]] edits parade the cast in one cut. Later [[Tom Pearl Sightings]] clips claim to film him at a Georgia home; authenticity of several is disputed (real vs AI). Death hoaxes also recirculate and get debunked.{{1}}{{3}}",
      ],
      image: {
        src: "/tom-pearl/sightings-cover.webp",
        alt: "Tom Pearl Sightings meme cover still",
        caption:
          "November 2026 “sightings” wave — drive-bys, car confrontations, and window clips claimed to show Pearl in Georgia.",
      },
    },
    {
      id: "origin",
      title: "Background and early meme life",
      paragraphs: [
        "Court and registry records identify Thomas Patrick Pearl II (b. 23 Mar 1959). In 2001 he pleaded guilty in the Southern District of Florida to one federal count of possessing child pornography; he was sentenced in 2002 (prison term served) and has remained on sex-offender registries. Separately, between roughly 2012 and 2018 he posted extreme scat videos in which he addresses the camera by name — the intro line later became a reusable TikTok soundbite.{{1}}{{2}}",
        "A first TikTok wave in 2023 mostly recirculated cropped intros and mugshot avatars. Death rumors followed him for years; a 2025 mugshot is widely cited as confirmation he was still alive. The much larger 2026 revival treated him as a reusable brainrot sprite rather than a documentary subject.{{1}}{{2}}{{4}}",
      ],
      link: {
        href: "https://meme.com/memes/tom-pearl-sightings",
        label: "meme.com — Tom Pearl Sightings summary →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Aura / Letter T still, YouTube explainers, X car-sighting repost, and TikTok sighting / Pearl Hunters cuts — one card per beat. No source fetish uploads.",
      ],
      gallery: [
        {
          id: "aura-letter-t",
          href: "https://www.reddit.com/r/tuffmangophonk/comments/1u864df/aura_of_the_letter_t/",
          kind: "image",
          source: "web",
          handle: "r/tuffmangophonk",
          author: "Aura collage",
          text: "Aura of the Letter T",
          date: "Jun 2026",
          caption:
            "Pack-shot collage of metallic Pearl with other T-cast figures — the visual grammar of Aura of Letter T edits.",
          thumbnail: "/tom-pearl/aura-letter-t.jpg",
        },
        {
          id: "yt-explained",
          href: "https://www.youtube.com/watch?v=PGhUBpsV6UQ",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Explainer",
          text: "Tom Pearl Meme EXPLAINED",
          date: "18 May 2026",
          caption:
            "Short rundown of the phonk / Silver Surfer / T-cast framing and why the background is the shock bait.",
          thumbnail: "/tom-pearl/yt-explained.jpg",
          duration: "1:07",
        },
        {
          id: "yt-dead-trend",
          href: "https://www.youtube.com/watch?v=DksQE0RiEQQ",
          kind: "video",
          source: "web",
          handle: "YouTube",
          author: "Trend explainer",
          text: "Who is Tom Pearl and is he dead?",
          date: "2026",
          caption:
            "Covers golden/Silver Surfer edits, aura farming slang, and why death rumors keep recirculating without proof.",
          thumbnail: "/tom-pearl/yt-dead-trend.jpg",
          duration: "2:00+",
        },
        {
          id: "sighting-x",
          href: "https://x.com/NotRoPro/status/2121400573358493914",
          kind: "video",
          handle: "@NotRoPro",
          author: "X repost",
          text: "Tom Pearl car sighting clip",
          date: "14 Nov 2026",
          caption:
            "Repost of the Georgia car confrontation (~4.2k likes / ~730k views) that pushed sightings beyond TikTok.",
          thumbnail: "/tom-pearl/sightings-cover.webp",
          views: "730K+ / 4.2K likes",
        },
        {
          id: "sighting-tiktok",
          href: "https://www.tiktok.com/@james_baughan2/video/7707827043936783646",
          kind: "video",
          source: "web",
          handle: "@james_baughan2",
          author: "Sighting upload",
          text: "Car confrontation (purported Pearl)",
          date: "13 Nov 2026",
          caption:
            "Filmer approaches a car; the man films back and cites a no-trespassing sign (~527k views in three days).",
          thumbnail: "/tom-pearl/sightings-cover.webp",
          duration: "0:30+",
          views: "527K+",
        },
        {
          id: "pearl-hunters",
          href: "https://www.tiktok.com/@deskind145/video/7708553598006840609",
          kind: "video",
          source: "web",
          handle: "@deskind145",
          author: "Pearl Hunters edit",
          text: "Pearl Hunters meme cut",
          date: "15 Nov 2026",
          caption:
            "Edit framing TikTokers as hunters who “won’t let him run from his past” (~1M+ views in a day).",
          thumbnail: "/tom-pearl/sightings-cover.webp",
          duration: "0:20+",
          views: "1M+",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "May 2026 was the aura breakout on TikTok: early “Aura of letter T” phonk cuts (e.g. @menoobun2, 1 May; follow-ups through the month) and metallic variants compared Pearl to Silver Surfer and Tom the cat. By late May, T Squad edits (Pearl + Tom and Jerry + Triple T + Trollface) were clearing seven-figure view counts.{{1}}{{2}}",
        "YouTube explainers and X reposts carried the cast into comment-section bait (“Hi, I’m Tom Pearl”). In November 2026 the [[Tom Pearl Sightings]] branch flipped the script from stylized edits to purported IRL clips around a Georgia residence — then back into “Pearl Hunters” meme edits within days.{{3}}{{5}}{{6}}",
      ],
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Treat Pearl as a disposable brainrot NPC: chrome him, stack him with other T characters, phonk the cut, caption “aura.” The joke is ironic glazing of someone whose documented past is the opposite of aspirational — parallel to other shock-glaze trends.{{1}}{{2}}{{4}}",
        "Many casual viewers only meet the Silver Surfer skin. Looking up the name is part of the prank for some posters (research-bait / shock-site energy). Forklore documents the meme formats; it does not host source fetish uploads or illegal material.{{1}}{{2}}",
      ],
      list: [
        "Silver / Golden Tom phonk aura edits",
        "Aura of Letter T pack-shots and T Squad cast cuts",
        "Comment-section “Hi, my name is Tom Pearl” bait",
        "Sightings / Pearl Hunters chase edits (authenticity often disputed)",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}{{3}}"],
      list: [
        "23 Mar 1959 — Thomas Patrick Pearl II born{{1}}",
        "2001–2002 — Federal CSAM possession plea / sentence; registry{{1}}{{2}}",
        "2012–2018 — Extreme fetish video period; intro line becomes later soundbite{{1}}",
        "2023 — First TikTok clip wave (mostly cropped intros){{1}}",
        "Jan 2026 — Death-hoax clips recirculate{{1}}{{4}}",
        "Mar–May 2026 — Silver/Golden Tom + Aura of Letter T + T Squad peak{{1}}{{2}}",
        "4 Nov 2026 — Earliest widely cited Georgia sighting TikTok{{3}}",
        "13–15 Nov 2026 — Car confrontation, window clips, Pearl Hunters edits{{3}}{{5}}{{6}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "TomPearl.com",
      title: "Who Is Tom Pearl? Biography & Full Timeline",
      href: "https://tompearl.com/who-is-tom-pearl.php",
      date: "2026",
    },
    {
      id: 2,
      publisher: "YouTube",
      title: "Tom Pearl Meme EXPLAINED",
      href: "https://www.youtube.com/watch?v=PGhUBpsV6UQ",
      date: "18 May 2026",
    },
    {
      id: 3,
      publisher: "meme.com",
      title: "Tom Pearl Sightings: TikTok's November 2026 Viral Hunt",
      href: "https://meme.com/memes/tom-pearl-sightings",
      date: "16 Nov 2026",
    },
    {
      id: 4,
      publisher: "YouTube",
      title: "Who is Tom Pearl and is he dead? Viral trend and origins explained",
      href: "https://www.youtube.com/watch?v=DksQE0RiEQQ",
      date: "2026",
    },
    {
      id: 5,
      publisher: "X",
      title: "@NotRoPro — car sighting repost",
      href: "https://x.com/NotRoPro/status/2121400573358493914",
      date: "14 Nov 2026",
    },
    {
      id: 6,
      publisher: "TikTok",
      title: "@james_baughan2 — car confrontation",
      href: "https://www.tiktok.com/@james_baughan2/video/7707827043936783646",
      date: "13 Nov 2026",
    },
    {
      id: 7,
      publisher: "TikTok",
      title: "@deskind145 — Pearl Hunters edit",
      href: "https://www.tiktok.com/@deskind145/video/7708553598006840609",
      date: "15 Nov 2026",
    },
    {
      id: 8,
      publisher: "TikTok",
      title: "@pearls.of.power — earliest sighting clip",
      href: "https://www.tiktok.com/@pearls.of.power/video/7704362321103064351",
      date: "4 Nov 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Sensitive entry · Documents meme formats only · Does not host fetish videos or illegal material · Pearl’s criminal record is a matter of public court / registry reporting · Screenshots © respective platforms / posters · Marvel Silver Surfer © respective rights holders",
} satisfies WikiArticleData;
