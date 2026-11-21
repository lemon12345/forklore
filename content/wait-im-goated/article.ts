import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const waitImGoatedArticle = {
  title: "Wait I'm Goated",
  description:
    "Cute-animal macros and a plain white tee that just says \"wait im goated\"—soft irony from Instagram @bug2sick after @throwingfits put the phrase on merch.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Wait I'm Goated]] (also [[wait im goated]], [[wait i'm goated original]]) is a 2023 catchphrase and soft-irony image-macro series. It pairs the slang [[goated]] — from [[G.O.A.T.]] / Greatest Of All Time — with cute animals, puns, and a plain white “wait im goated” tee that jumped from Instagram merch posts onto TikTok.{{1}}{{2}}",
    "The spark was an altered Instagram Stories screenshot shared by [[@throwingfits]] on 1 Jun 2023 (“idk how to flirt i done called this bitch goated”). Instagram user [[@bug2sick]] then spun a backup [[@waitimgoated123]] and turned the line into a caption / merch kit; after the main account was removed (before 15 Jul 2023), the backup and TikTok slideshows carried the phrase wider.{{1}}{{2}}{{3}}",
  ],
  infobox: {
    title: "Wait I'm Goated",
    image: {
      src: "/wait-im-goated/cover.jpg",
      alt: "Hamster mid-leap under the caption wait im goated",
      caption:
        "Canonical soft-irony still: “wait im goated” over a leaping hamster.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "wait im goated",
          "wait i'm goated original",
          "Wait Im Goated",
        ],
      },
      {
        label: "Type",
        value: "Catchphrase / soft-irony caption / merch meme",
      },
      { label: "Year", value: "2023" },
      {
        label: "Origin",
        value: "Instagram @bug2sick / @waitimgoated123",
        href: "https://www.instagram.com/waitimgoated123/",
      },
      {
        label: "Spark",
        value: "@throwingfits flirt screenshot · 1 Jun 2023",
      },
      {
        label: "Related",
        value: [
          "G.O.A.T. / goated slang",
          "Quirked Up White Boy Goated With The Sauce",
          "Soft Irony / Hood Irony captions",
        ],
      },
      {
        label: "Platforms",
        value: ["Instagram", "TikTok", "X (Twitter)"],
      },
      {
        label: "Peak wave",
        value: "Jul–Sep 2023",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "“Goated” already meant elite; “Wait I'm Goated” adds a mid-thought double-take — as if the poster just noticed their own (or a pet’s) legendary status. Soft-irony pages stacked the line over cats, hamsters, goats, and other cute animals so the boast lands as wholesome absurdity instead of pure flex.{{1}}{{2}}",
        "Two artifacts travel together: the caption macro (top text + animal / shitpost still) and the lowercase serif tee reading “wait im goated.” Influencers wearing the shirt on TikTok and Instagram sold the phrase as wearable irony; X threads of cat macros kept the caption format alive without merch.{{1}}{{3}}",
      ],
      image: {
        src: "/wait-im-goated/shirt-product.png",
        alt: "White t-shirt printed with lowercase wait im goated",
        caption:
          "The wait im goated original shirt: plain white tee, lowercase serif print.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "On 1 Jun 2023, fashion account @throwingfits posted an altered Stories screenshot: a poetic flirt text scribbled out and patched with the word “goated,” topped with “idk how to flirt i done called this bitch goated.” The post cleared roughly 10,300 likes and was widely reposted — the phrase kit people later shortened and flipped into first-person.{{1}}{{2}}",
        "Sometime in June 2023, @bug2sick opened @waitimgoated123 and began uploading recaptioned / pun variants. Instagram removed the main @bug2sick account before 15 Jul 2023; the admin pivoted full-time to the backup. Early Wait I'm Goated posts were later archived on-account, but on 15 Jul the same admin dropped a photo slideshow of the macros on TikTok @bug2sick (~2,500 plays / ~350 likes in three weeks in contemporary tallies).{{1}}{{2}}",
      ],
      link: {
        href: "https://dailydot.com/wait-im-goated-meme",
        label: "Daily Dot — Wait I'm Goated origins & examples →",
      },
      image: {
        src: "/wait-im-goated/origin-flirt.png",
        alt: "Altered Instagram story: idk how to flirt i done called this bitch goated",
        caption:
          "Spark still associated with @throwingfits: romantic text overwritten with “goated.”",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Spark flirt edit, soft-irony animals, the original shirt / street wear, and later “ask me if I'm goated” / pronoun-swap branches — one card per beat.",
      ],
      gallery: [
        {
          id: "throwingfits-spark",
          href: "https://www.instagram.com/throwingfits/",
          kind: "image",
          source: "web",
          handle: "@throwingfits",
          author: "Instagram spark",
          text: "idk how to flirt i done called this bitch goated",
          date: "1 Jun 2023",
          caption:
            "Altered Stories screenshot that supplied the “called … goated” phrasing later flipped into Wait I'm Goated.",
          thumbnail: "/wait-im-goated/origin-flirt.png",
        },
        {
          id: "hamster-cover",
          href: "https://dailydot.com/wait-im-goated-meme",
          kind: "image",
          source: "web",
          handle: "Soft irony",
          author: "Caption macro",
          text: "wait im goated + leaping hamster",
          date: "2023",
          caption:
            "Stock-cute animal under the bare catchphrase — the default soft-irony layout.",
          thumbnail: "/wait-im-goated/cover.jpg",
        },
        {
          id: "cow-figurine",
          href: "https://mymemecards.com/meme-cards/wait-im-goated/",
          kind: "image",
          source: "web",
          handle: "Pun / object",
          author: "Caption macro",
          text: "wait im goated + dashboard cow figurine",
          date: "2023",
          caption:
            "Literal “goat” gag with a hanging animal figurine — soft irony meeting object pun.",
          thumbnail: "/wait-im-goated/cow-figurine.png",
        },
        {
          id: "shirt-product",
          href: "https://www.instagram.com/waitimgoated123/",
          kind: "image",
          source: "web",
          handle: "@waitimgoated123",
          author: "Merch",
          text: "wait im goated original tee",
          date: "Jul 2023",
          caption:
            "Product still of the lowercase “wait im goated” shirt that became a search hook (“wait i'm goated original”).",
          thumbnail: "/wait-im-goated/shirt-product.png",
        },
        {
          id: "shirt-wear",
          href: "https://www.instagram.com/waitimgoated123/",
          kind: "image",
          source: "web",
          handle: "Street wear",
          author: "Merch photo",
          text: "Wearing the wait im goated tee",
          date: "~19 Jul 2023",
          caption:
            "IRL wear shot of the serif tee — same silhouette pushed by influencer posts (Henry Kava, Diddybop, et al.).",
          thumbnail: "/wait-im-goated/shirt-wear.jpg",
        },
        {
          id: "shirt-crew",
          href: "https://www.instagram.com/waitimgoated123/",
          kind: "image",
          source: "web",
          handle: "Crew variants",
          author: "Merch group",
          text: "wait i'm goated / wait eurodance goated shirts",
          date: "2023",
          caption:
            "Group photo of printed variants — the phrase treated as a micro-brand slogan.",
          thumbnail: "/wait-im-goated/shirt-crew.jpg",
        },
        {
          id: "youre-goated",
          href: "https://dailydot.com/wait-im-goated-meme",
          kind: "image",
          source: "web",
          handle: "Pronoun swap",
          author: "Caption variant",
          text: "wait YOU'RE goated",
          date: "2023",
          caption:
            "Second-person flip: same soft-irony animal energy, compliment aimed outward.",
          thumbnail: "/wait-im-goated/wait-youre-goated.jpg",
        },
        {
          id: "ask-me",
          href: "https://dailydot.com/wait-im-goated-meme",
          kind: "image",
          source: "web",
          handle: "TikTok branch",
          author: "Overlay variant",
          text: "ask me if i'm goated",
          date: "29 Sep 2023",
          caption:
            "Related smug-cat overlay branch (“Ask me If I'm goated”) that rode the same goated slang wave.",
          thumbnail: "/wait-im-goated/editorial-cover.jpg",
        },
        {
          id: "azumanga",
          href: "https://mymemecards.com/meme-cards/wait-im-goated/",
          kind: "image",
          source: "web",
          handle: "Anime edit",
          author: "Shitpost macro",
          text: "When ya plug pull up wearin dat wait im goated",
          date: "2023",
          caption:
            "Azumanga Daioh still with a photoshopped wait im goated tee — merch joke as reaction macro.",
          thumbnail: "/wait-im-goated/azumanga-shirt.png",
        },
        {
          id: "mymemecards",
          href: "https://mymemecards.com/meme-cards/wait-im-goated/",
          kind: "image",
          source: "web",
          handle: "MyMemeCards",
          author: "Card / explainer",
          text: "Wait I'm Goated card entry",
          date: "2 Oct 2026",
          caption:
            "Secondary card/encyclopedia framing of the catchphrase and 2023 Instagram origin.",
          thumbnail: "/wait-im-goated/card.webp",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "Also on 15 Jul 2023, Instagram @slayworldalbania posted a pun-heavy Wait I'm Goated slideshow (~9,100 likes in three weeks). From 19 Jul, @waitimgoated123 began posting people in the tee — including a Henry Kava wear shot (~5,800 likes in 15 days).{{1}}{{2}}",
        "On 22 Jul 2023, X user @ShootaCat started a cat-focused Wait I'm Goated thread (primary tweet ~48,900 likes in 12 days). The same day, TikToker @ripdiddybop posted a clip wearing the shirt (~1.4M plays / ~189k likes in 12 days) — a main cross-platform amplifier. Later overlays such as @axlethekitty’s “Ask me If I'm goated” cat clip (29 Sep 2023) kept the slang sticky into fall.{{1}}{{3}}",
      ],
      link: {
        href: "https://mymemecards.com/meme-cards/wait-im-goated/",
        label: "MyMemeCards — Wait I'm Goated summary →",
      },
      image: {
        src: "/wait-im-goated/dailydot-cover.jpg",
        alt: "Collage of goated cat and Wait im goated reaction examples",
        caption:
          "Explainers framed the phrase as self-flex slang that also loves cute animals.",
      },
    },
    {
      id: "usage",
      title: "Usage and tone",
      paragraphs: [
        "Default read: sudden self-hype — “hold on, I’m actually him.” Soft-irony read: put the line over a hamster, goat, or dashboard figurine and the G.O.A.T. claim collapses into affection. Merch read: wear the tee as a deadpan flex that already knows it’s a shitpost.{{1}}{{2}}",
        "Searchers often type “wait im goated” (no apostrophe) or “wait i'm goated original” when hunting the shirt / source macros. Pronoun swaps (“wait you're goated”) and “ask me if I'm goated” overlays are sibling formats, not separate origin stories.{{2}}{{3}}",
      ],
      list: [
        "Top caption + cute animal / object still (soft irony)",
        "Bare-text status or reply: “wait im goated” after a W",
        "Wear / film the lowercase serif tee (TikTok / IG)",
        "Pronoun or prompt swaps: you're goated / ask me if I'm goated",
        "Anime / celebrity edits that paste the shirt onto a character",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}"],
      list: [
        "1 Jun 2023 — @throwingfits posts “idk how to flirt… goated” Stories edit{{1}}{{2}}",
        "Jun 2023 — @bug2sick launches @waitimgoated123 caption / pun series{{1}}{{2}}",
        "Before 15 Jul 2023 — main @bug2sick Instagram removed; backup becomes primary{{1}}",
        "15 Jul 2023 — TikTok @bug2sick slideshow + Instagram @slayworldalbania pun set{{1}}",
        "19 Jul 2023 — @waitimgoated123 shirt photos (incl. Henry Kava wear){{1}}{{2}}",
        "22 Jul 2023 — @ShootaCat cat thread on X; @ripdiddybop shirt TikTok (~1.4M plays){{1}}{{3}}",
        "29 Sep 2023 — @axlethekitty “Ask me If I'm goated” cat overlay{{3}}",
        "Aug 2024 / Oct 2026 — Daily Dot + MyMemeCards secondary writeups lock the timeline{{1}}{{2}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Daily Dot",
      title: "'Wait I'm Goated' Meme Origins, History, And Examples",
      href: "https://dailydot.com/wait-im-goated-meme",
      date: "8 Aug 2024",
    },
    {
      id: 2,
      publisher: "MyMemeCards",
      title: "Wait I'm Goated meme: meaning, origin and card",
      href: "https://mymemecards.com/meme-cards/wait-im-goated/",
      date: "2 Oct 2026",
    },
    {
      id: 3,
      publisher: "Instagram",
      title: "@waitimgoated123 — Wait I'm Goated backup / merch account",
      href: "https://www.instagram.com/waitimgoated123/",
      date: "Jun–Jul 2023",
    },
    {
      id: 4,
      publisher: "Instagram",
      title: "@throwingfits — fashion / culture account (spark post)",
      href: "https://www.instagram.com/throwingfits/",
      date: "1 Jun 2023",
    },
    {
      id: 5,
      publisher: "TikTok",
      title: "@bug2sick — Wait I'm Goated slideshow account",
      href: "https://www.tiktok.com/@bug2sick",
      date: "15 Jul 2023",
    },
    {
      id: 6,
      publisher: "X",
      title: "@ShootaCat — Wait I'm Goated cat thread",
      href: "https://x.com/ShootaCat",
      date: "22 Jul 2023",
    },
    {
      id: 7,
      publisher: "TikTok",
      title: "@ripdiddybop — Wait Im Goated shirt video",
      href: "https://www.tiktok.com/@ripdiddybop",
      date: "22 Jul 2023",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Unofficial fan archive · For cultural documentation only · Screenshots © respective platforms / posters · Not affiliated with @bug2sick, @waitimgoated123, or shirt sellers",
} as const satisfies WikiArticleData;
