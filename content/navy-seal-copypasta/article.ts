import type {
  WikiArticleData,
  WikiGalleryItem,
  WikiInfoboxRow,
  WikiReference,
  WikiSection,
} from "@/content/wiki/types";

export const navySealCopypastaArticle = {
  title: "Navy Seal Copypasta",
  description:
    "Navy Seal Copypasta: the classic 'gorilla warfare' tough-guy rant—300 kills, IP tracing, 'you're fucking dead, kiddo'—still pasted as overreaction comedy.",
  curatedLabel: "Curated entry · Nov 2026",
  lead: [
    "[[Navy Seal Copypasta]] (also [[Marine Copypasta]], [[Internet Tough Guy Copypasta]], [[Gorilla Warfare Copypasta]]) is a facetious wall of text: a poster claims to be a top Navy SEAL, rattles off absurd combat credentials—“300 confirmed kills,” “gorilla warfare,” “over seven hundred ways” with bare hands—and threatens to wipe the reader out for a trivial insult.{{1}}{{2}}",
    "Lore points to the military imageboard [[Operator Chan]] around 2010; the earliest widely cited archive is a 11 Nov 2010 post on 4chan’s /jp/ that already treated the rant as something seen there. It broke mainstream in April 2012 via a Reddit /r/funny screenshot of a YouTube comment, then spun into musical covers, persona variants, and a 2013 Mexican Facebook adaptation that made Spanish-language news.{{1}}{{3}}{{6}}",
  ],
  infobox: {
    title: "Navy Seal Copypasta",
    image: {
      src: "/navy-seal-copypasta/seal-still.jpg",
      alt: "Navy Seal Copypasta — iconic SEAL-team still used with the gorilla-warfare rant",
      caption:
        "Canonical visual: blacked-out SEAL still paired with the tough-guy wall of text.",
      fit: "contain",
    },
    rows: [
      {
        label: "Also known as",
        value: [
          "Marine Copypasta",
          "Internet Tough Guy Copypasta",
          "Gorilla Warfare Copypasta",
        ],
      },
      {
        label: "Type",
        value: "Copypasta / parody threat rant",
      },
      { label: "Year", value: "2010 (mainstream 2012)" },
      {
        label: "Origin",
        value: "Operator Chan (lore) · archived on 4chan /jp/",
      },
      {
        label: "Peak waves",
        value: "Apr–May 2012 Reddit / YouTube · Feb 2013 MX Facebook",
      },
      {
        label: "Related",
        value: [
          "Copypasta",
          "Internet tough guy stereotype",
          "Persona parody variants",
        ],
      },
      {
        label: "Platforms",
        value: ["4chan", "Operator Chan", "Reddit", "YouTube", "Facebook"],
      },
      {
        label: "Known for",
        value: "“I am trained in gorilla warfare”",
      },
    ] satisfies WikiInfoboxRow[],
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      paragraphs: [
        "The joke is escalation vs. stakes: someone supposedly trained for secret Al-Qaeda raids and “top sniper in the entire US armed forces” melts down over a mild comment, then promises IP tracing, Marine Corps arsenals, and “unholy retribution.” The misspelling [[gorilla warfare]] (for guerrilla) became the recognition hook—Urban Dictionary later defined it as training “fake Navy Seals” receive.{{1}}{{2}}{{5}}",
        "As a format it is paste-first: drop the full block under any slight, quote the opener (“What the fuck did you just fucking say about me…”), or swap the persona (pirate, Oxford scholar, hacker, fandom characters). Snippets like “300 confirmed kills” and “you’re fucking dead, kiddo” travel alone as shorthand for cartoon tough-guy energy.{{1}}{{2}}{{7}}",
      ],
      image: {
        src: "/navy-seal-copypasta/dailydot.jpg",
        alt: "Navy Seal Copypasta explainer still — gorilla warfare tough-guy rant",
        caption:
          "Explainers frame it as the internet’s default overreaction paste: SEAL brags + comic typos.",
      },
    },
    {
      id: "origin",
      title: "Origin",
      paragraphs: [
        "The rant is widely attributed to [[Operator Chan]], a military-and-weapons imageboard, sometime in 2010. The earliest archived copy commonly cited is an anonymous 11 Nov 2010 post on 4chan’s /jp/ (Otaku Culture) board, where the poster said they had already seen the message on Operator Chan. No verified author has stuck; a May 2012 anonymous claim on a /pasta/ board (“I wrote this 2–3 years ago”) was never independently confirmed.{{1}}{{2}}{{7}}",
        "The canonical text stacks impossible résumé lines—top of Navy SEAL class, numerous secret raids, 300 confirmed kills, gorilla warfare, top sniper—then pivots to real-time IP tracing and “over seven hundred” bare-hand kill methods, before closing on “You’re fucking dead, kiddo.” Whether the first poster meant satire or sincere tough-guy theater remains unclear; the internet read it as parody either way.{{1}}{{2}}",
      ],
      link: {
        href: "https://www.dailydot.com/navy-seal-copypasta",
        label: "Daily Dot — Navy Seal copypasta explainer →",
      },
    },
    {
      id: "gallery",
      title: "Gallery",
      paragraphs: [
        "Reddit breakout screenshot, acoustic musical cover, dictionary card, and secondary encyclopedia writeups — one card per beat.",
      ],
      gallery: [
        {
          id: "reddit-gorilla",
          href: "https://www.reddit.com/r/funny/comments/rtkj0/gorilla_warfare/",
          kind: "image",
          source: "web",
          handle: "u/fahottie",
          author: "Reddit breakout",
          text: "Gorilla Warfare — YouTube comment screenshot",
          date: "4 Apr 2012",
          caption:
            "/r/funny post of a YouTube comment paste + “gorilla” roast — ~20k upvotes / ~970 comments in archived tallies.",
          thumbnail: "/navy-seal-copypasta/reddit-gorilla.png",
          views: "20K+ upvotes",
        },
        {
          id: "yt-musical",
          href: "https://www.youtube.com/watch?v=NsZMbs5PC64",
          kind: "video",
          source: "web",
          handle: "Copypasta Sings",
          author: "YouTube",
          text: "Navy Seal Copypasta – The Musical",
          date: "22 May 2012",
          caption:
            "Soft acoustic guitar + gentle vocal over a blacked-out SEAL photo; later tallies ~1.5M views.",
          thumbnail: "/navy-seal-copypasta/musical.jpg",
          views: "1.5M+",
          duration: "3:51",
        },
        {
          id: "dailydot",
          href: "https://www.dailydot.com/navy-seal-copypasta",
          kind: "image",
          source: "web",
          handle: "Daily Dot",
          author: "Coverage",
          text: "‘I am trained in gorilla warfare’",
          date: "1 Oct 2024",
          caption:
            "News explainer: Operator Chan lore, Reddit breakout, musical cover, and persona variants.",
          thumbnail: "/navy-seal-copypasta/dailydot.jpg",
        },
        {
          id: "dictionary",
          href: "https://www.dictionary.com/culture/memes/navy-seal-copypasta",
          kind: "image",
          source: "web",
          handle: "Dictionary.com",
          author: "Culture / memes",
          text: "Navy Seal copypasta entry",
          date: "1 Mar 2018",
          caption:
            "Defines the paste as a comically aggressive tough-guy monologue for mild insults.",
          thumbnail: "/navy-seal-copypasta/dictionary.jpg",
        },
        {
          id: "meme-com",
          href: "https://meme.com/memes/navy-seal-copypasta",
          kind: "image",
          source: "web",
          handle: "meme.com",
          author: "Encyclopedia card",
          text: "Gorilla Warfare Rant card",
          date: "14 Aug 2026",
          caption:
            "Secondary card summarizing Operator Chan origin lore, 2012 spread, and variant culture.",
          thumbnail: "/navy-seal-copypasta/meme-com.webp",
        },
        {
          id: "seal-still",
          href: "https://www.youtube.com/watch?v=NsZMbs5PC64",
          kind: "image",
          source: "web",
          handle: "Visual canon",
          author: "Still",
          text: "Blacked-out SEAL team photo",
          date: "2012+",
          caption:
            "The still most often glued to the musical and later image-macro paste jobs.",
          thumbnail: "/navy-seal-copypasta/seal-still.jpg",
        },
      ] satisfies WikiGalleryItem[],
    },
    {
      id: "spread",
      title: "Spread",
      paragraphs: [
        "On 4 Apr 2012, Redditor [[u/fahottie]] posted a screenshot titled “Gorilla Warfare” to /r/funny: a YouTube comment delivering the rant, plus a reply roasting the “gorilla” spelling. The thread became the main mainstream vector (~20,000+ upvotes / ~970 comments before archive). Six weeks later, YouTube channel [[Copypasta Sings]] uploaded an ironic acoustic ballad of the full text (~22 May 2012); later tallies put it near 1.5 million views.{{1}}{{3}}{{4}}",
        "Late 2012 locked vocabulary: Urban Dictionary’s “gorilla warfare” entry (Aug 2012) joked about “fake Navy Seals,” Newgrounds hosted dramatic readings, and /r/copypasta threads collected variants. On 13 Feb 2013, a Facebook profile for [[Richi Phelps]] posted a Mexican-slang adaptation; within a day SIPSE and other Spanish-language outlets covered the viral “tough kid” status before it was recognized as copied pasta. Persona rewrites—pirate, Oxford scholar, Game of Thrones, hacker, progressive feminist—kept the skeleton while swapping jargon.{{2}}{{5}}{{6}}{{7}}",
      ],
      link: {
        href: "https://www.reddit.com/r/funny/comments/rtkj0/gorilla_warfare/",
        label: "Reddit — /r/funny “Gorilla Warfare” breakout →",
      },
    },
    {
      id: "usage",
      title: "Usage and meaning",
      paragraphs: [
        "Default move: paste the full rant (or the first few sentences) as a reply to any mild disagreement—parody of hypermasculine internet threats. Short-form use quotes “gorilla warfare,” “300 confirmed kills,” or “you’re fucking dead, kiddo” when someone is doing too much over nothing.{{1}}{{2}}",
        "Variant moves: rewrite the résumé for a new fandom or profession; translate the tone into local slang (as with the 2013 Mexican Facebook wave); or pair the text with the blacked-out SEAL still / musical audio for performance comedy.{{1}}{{6}}{{7}}",
      ],
      list: [
        "Full-block reply to a tiny slight in comments / Discord / forums",
        "Snippet quotes: “gorilla warfare,” “300 confirmed kills,” “dead, kiddo”",
        "Persona swaps (pirate, scholar, hacker, franchise characters)",
        "Musical / dramatic-reading performance of the whole wall of text",
      ],
    },
    {
      id: "chronology",
      title: "Chronology",
      paragraphs: ["Documented beats:{{1}}{{2}}"],
      list: [
        "2010 — Operator Chan lore; earliest cited archive on 4chan /jp/ (11 Nov){{1}}{{7}}",
        "4 Apr 2012 — u/fahottie “Gorilla Warfare” post hits /r/funny{{3}}",
        "22 May 2012 — Copypasta Sings uploads the acoustic musical{{4}}",
        "17–18 Aug 2012 — Urban Dictionary “gorilla warfare” entry{{5}}",
        "10 Jan 2013 — /r/copypasta variant roundup{{7}}",
        "13–14 Feb 2013 — Richi Phelps Mexican-slang Facebook paste; SIPSE coverage{{6}}",
        "2018–2026 — Dictionary.com / Daily Dot / encyclopedia cards keep the paste defined for new readers{{1}}{{2}}{{7}}",
      ],
    },
  ] satisfies WikiSection[],
  references: [
    {
      id: 1,
      publisher: "Daily Dot",
      title: "‘I am trained in gorilla warfare’: What is the Navy Seal copypasta?",
      href: "https://www.dailydot.com/navy-seal-copypasta",
      date: "1 Oct 2024",
    },
    {
      id: 2,
      publisher: "Dictionary.com",
      title: "Navy Seal copypasta",
      href: "https://www.dictionary.com/culture/memes/navy-seal-copypasta",
      date: "1 Mar 2018",
    },
    {
      id: 3,
      publisher: "Reddit",
      title: "u/fahottie — Gorilla Warfare (/r/funny)",
      href: "https://www.reddit.com/r/funny/comments/rtkj0/gorilla_warfare/",
      date: "4 Apr 2012",
    },
    {
      id: 4,
      publisher: "YouTube",
      title: "Copypasta Sings — Navy Seal Copypasta – The Musical",
      href: "https://www.youtube.com/watch?v=NsZMbs5PC64",
      date: "22 May 2012",
    },
    {
      id: 5,
      publisher: "Urban Dictionary",
      title: "Gorilla Warfare (487j)",
      href: "https://www.urbandictionary.com/define.php?term=Gorilla+Warfare",
      date: "18 Aug 2012",
    },
    {
      id: 6,
      publisher: "SIPSE",
      title: "Richi Phepls el niño rudo que se hizo famoso en Facebook",
      href: "https://sipse.com/tecnologia/richi-phepls-el-nino-rudo-que-se-hizo-famoso-en-facebook-15721.html",
      date: "14 Feb 2013",
    },
    {
      id: 7,
      publisher: "meme.com",
      title: "Navy Seal Copypasta: Gorilla Warfare Rant",
      href: "https://meme.com/memes/navy-seal-copypasta",
      date: "14 Aug 2026",
    },
  ] satisfies WikiReference[],
  footerNote:
    "Documents meme formats and publicly reported posts · Screenshots © respective platforms / posters · Not affiliated with the U.S. Navy, depicted individuals, or Operator Chan",
} satisfies WikiArticleData;
