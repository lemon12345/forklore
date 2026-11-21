export type WikiEntryKind =
  | "catchphrase"
  | "reaction"
  | "slang"
  | "format"
  | "sound"
  | "person"
  | "character"
  | "copypasta"
  | "video"
  | "place";

export type WikiRegistryEntry = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  kind: WikiEntryKind;
  featured?: boolean;
  trending?: boolean;
  /** Show in homepage "New" strip. */
  fresh?: boolean;
  /** Curated Most-read rank (1 = top). */
  mostReadRank?: number;
};

export const WIKI_KIND_LABELS: Record<WikiEntryKind, string> = {
  catchphrase: "Catchphrases",
  reaction: "Reactions",
  slang: "Slang",
  format: "Formats",
  sound: "Sounds & audio",
  person: "People",
  character: "Characters",
  copypasta: "Copypasta",
  video: "Viral video",
  place: "Places",
};

export const wikiRegistry: readonly WikiRegistryEntry[] = [
  {
    slug: "an-iq-too-high",
    title: "An IQ Too High",
    description:
      "An IQ Too High is the crow-vs-equations reaction image from a 2022 Real Science YouTube thumbnail, reused since late 2025 to sarcastically roast bad takes.",
    cover: "/an-iq-too-high/cover.jpg",
    kind: "reaction",
  },
  {
    slug: "biddy-blas",
    title: "Biddy Blas",
    description:
      "Biddy Blas Scrib Doon meme: Star Wars Galactic Racer Crocin alien whose Huttese \"write it down\" went viral Oct 2026 - clips, reaction edits, Absolute Scrib Doon.",
    cover: "/biddy-blas/cover.jpg",
    kind: "character",
  },
  {
    slug: "does-he-know",
    title: "Does He Know",
    description:
      "Does He Know is a 2022 New Rockstars YouTube thumbnail of Paul Dano as the Riddler - Twitter's go-to reaction when someone seems oblivious to gossip or a secret.",
    cover: "/does-he-know/cover.jpg",
    kind: "reaction",
  },
  {
    slug: "glup-shitto",
    title: "Glup Shitto",
    description:
      "When loreheads cheer a deep-cut Star Wars cameo, fandom calls it Glup Shitto—Tumblr slang later winked at with a Glop Shdo poster in The Mandalorian and Grogu.",
    cover: "/glup-shitto/title-card.png",
    kind: "slang",
    trending: true,
    mostReadRank: 5,
  },
  {
    slug: "google-giggles",
    title: "Google Giggles",
    description:
      "Google Giggles is TikTok's fictional Google short-video app meme (2023) - the \"bro got banned from Google Giggles\" jab at cringe, outdated, normie clips.",
    cover: "/google-giggles/cover.jpg",
    kind: "slang",
  },
  {
    slug: "gta-6-phone-beach-driving",
    title: "GTA 6 Phone Beach Driving",
    description:
      "GTA 6 Phone Beach Driving meme: the greenscreen format of holding a phone while driving over beach NPCs - doomscroll punchlines on Jason's in-game screen.",
    cover: "/gta-6-phone-beach-driving/cover.webp",
    kind: "format",
    fresh: true,
  },
  {
    slug: "he-tryna-ignore-it",
    title: "He Tryna Ignore It",
    description:
      "Closed-eye dog by a stove fire (or LeBron courtside with Jimmy Goldstein) captioned \"he tryna ignore it\": the reaction for pretending not to see drama.",
    cover: "/he-tryna-ignore-it/dog-reaction.jpeg",
    kind: "catchphrase",
    trending: true,
    mostReadRank: 4,
  },
  {
    slug: "huss",
    title: "Huss",
    description:
      "Huss meaning: 2026 slang for sprint-breath exhalation - plus the Roblox Huss Huss Huss / In This Town partying audio that hit 36M+ TikTok views.",
    cover: "/huss/cover.webp",
    kind: "slang",
    fresh: true,
  },
  {
    slug: "i-guess-bro-jonah-hill",
    title: "I Guess Bro Jonah Hill GIF",
    description:
      "I Guess Bro Jonah Hill GIF is the War Dogs eye-scratch reaction meme on TikTok and X - users post I guess bro for exasperation, sarcasm, and reluctant agreement.",
    cover: "/i-guess-bro-jonah-hill/cover.jpg",
    kind: "reaction",
    fresh: true,
  },
  {
    slug: "i-lived-bitch",
    title: "I Lived Bitch",
    description:
      "I Lived Bitch meme: 2014 hospital text screenshot - \"I Lived Bitch\" - turned into a defiant survival catchphrase for beating physical or emotional hardship.",
    cover: "/i-lived-bitch/cover.jpg",
    kind: "catchphrase",
  },
  {
    slug: "is-we-getting",
    title: "Is We Getting",
    description:
      "Google autocomplete screenshots starting \"Is we getting…\"—usually food stamps, SNAP, or a stimulus check—revived as a snowclone when benefits talk spiked.",
    cover: "/is-we-getting/autocomplete.png",
    kind: "format",
    trending: true,
    mostReadRank: 3,
  },
  {
    slug: "jean-philanthrope",
    title: "Jean Philanthrope",
    description:
      "Jean Phil (Jean Philanthrope) is the viral AI Frenchman who shadowboxes on TikTok - blond bob, houndstooth suit. He's AI-generated, not a real person.",
    cover: "/jean-philanthrope/cover.jpg",
    kind: "person",
  },
  {
    slug: "last-ditch-bar",
    title: "Last Ditch Bar",
    description:
      "Greenfield's \"COVID-conscious lesbian bar\" Last Ditch blew up after a Boston Globe KN-95 / Saturday mask-optional fight—then soft-closed.",
    cover: "/last-ditch-bar/cover.png",
    kind: "place",
    trending: true,
    mostReadRank: 11,
  },
  {
    slug: "lord-miles",
    title: "Lord Miles",
    description:
      "Who is Lord Miles? Miles Routledge is a British adventure tourist and X personality whose April-May 2025 Haiti invasion posts went viral as a meme event.",
    cover: "/lord-miles/infobox.jpg",
    kind: "person",
  },
  {
    slug: "losercore-playlist",
    title: "Losercore Playlist",
    description:
      "Losercore Playlist is depay178's Spotify LOSERCORE alt-rock list that went viral mid-2026 via TikTok AI ads, X dunks, and a TV Girl fan-art theft claim.",
    cover: "/losercore-playlist/cover.jpg",
    kind: "sound",
  },
  {
    slug: "lucia-will-appreciate-this",
    title: "Lucia Will Appreciate This",
    description:
      "Lucia Will Appreciate This is the GTA 6 mission pop-up meme - Jason's gift/chore prompts edited into woke jokes, shopping gags, and Zuckerberg's Priscilla version.",
    cover: "/lucia-will-appreciate-this/cover.webp",
    kind: "format",
    fresh: true,
  },
  {
    slug: "malfoid",
    title: "Malfoid",
    description:
      "Fem Malfoy / Female Draco searches land on Malfoid: gender-swap Draco fanart—platinum Slytherin, tsundere roast, then blush—flooding X, TikTok, and AO3.",
    cover: "/malfoid/fcmN5.jpg",
    kind: "character",
    featured: true,
    trending: true,
    mostReadRank: 1,
  },
  {
    slug: "misery-girl",
    title: "Misery Girl",
    description:
      "Misery Girl meme is the 2026 TikTok slang that casts alt girls as Pupsies' Misery fans with 'dad play Misery' captions - origin, X face, and the pushback.",
    cover: "/misery-girl/cover.jpg",
    kind: "slang",
    fresh: true,
  },
  {
    slug: "my-moon-my-man",
    title: "My Moon My Man",
    description:
      "My Moon My Man TikTok trend: couples slideshows stretch FINNEAS's Feist cover lyric across two photos - Billboard tracked a 61% stream bump for the 2007 original.",
    cover: "/my-moon-my-man/cover.webp",
    kind: "sound",
    fresh: true,
  },
  {
    slug: "navy-seal-copypasta",
    title: "Navy Seal Copypasta",
    description:
      "Navy Seal Copypasta: the classic 'gorilla warfare' tough-guy rant - 300 kills, IP tracing, 'you're fucking dead, kiddo' - still pasted as overreaction comedy.",
    cover: "/navy-seal-copypasta/seal-still.jpg",
    kind: "copypasta",
  },
  {
    slug: "punishers-no-no-no-wait-wait-wait",
    title: "No No No Wait Wait Wait",
    description:
      "Punisher's no no no wait wait wait: Frank Castle's nightmare plea from The Punisher S1 as a viral panic reaction clip - also searched as no no wey wey wey.",
    cover: "/punishers-no-no-no-wait-wait-wait/cover.png",
    kind: "reaction",
  },
  {
    slug: "pterodactyl-in-mexico",
    title: "Pterodactyl in Mexico",
    description:
      "Pterodactyl in Mexico meme: the Nov 2026 AI TikTok \"flying dinosaur\" over Ciudad Juarez - Snopes flagged fake text artifacts; officials called it digital entertainment.",
    cover: "/pterodactyl-in-mexico/cover.webp",
    kind: "video",
    fresh: true,
  },
  {
    slug: "quirk-chungus",
    title: "Quirk Chungus",
    description:
      "Quirk Chungus meaning: iFunny millennial comic insult for a doggo/pupper \"quirky\" woman + man-child partner - Big Chungus mashup; X slang boom March 2024.",
    cover: "/quirk-chungus/cover.jpg",
    kind: "slang",
  },
  {
    slug: "robert-pattinson-cast-as-x",
    title: "Robert Pattinson Cast As X",
    description:
      "Robert Pattinson Cast As X memes: fake casting announcements after the Nov 2026 James Bond reveal - Snoopy, NFL QB, Nvidia CEO, and every role left.",
    cover: "/robert-pattinson-cast-as-x/cover.webp",
    kind: "format",
    fresh: true,
  },
  {
    slug: "scientists-reveal-the-hi",
    title: "Scientists Reveal the Hi",
    description:
      "Wide-eyed orange cat under a fake BBC chyron: \"Scientists reveal the hi.\" Swap the punchline for anything trivial—the exploitable news-thumbnail macro.",
    cover: "/scientists-reveal-the-hi/template-cat.webp",
    kind: "format",
    trending: true,
    mostReadRank: 6,
  },
  {
    slug: "sensitive-young-man",
    title: "Sensitive Young Man",
    description:
      "Sensitive Young Man is the sensitive young man slang meme - 2024 X archetype for misunderstood outsiders, from heart-of-gold posts to Autumn Jude Law macros.",
    cover: "/sensitive-young-man/cover.jpg",
    kind: "slang",
    fresh: true,
  },
  {
    slug: "smh",
    title: "SMH",
    description:
      "SMH meaning shaking my head: slang for disbelief, disapproval, or frustration - traced from 1994 Usenet to texts, Twitter, reaction GIFs, and news headlines.",
    cover: "/smh/cover.jpg",
    kind: "slang",
  },
  {
    slug: "state-property",
    title: "State Property",
    description:
      "Virginia fishing-pond TikTok: anglers claim \"state property,\" then the truck driver snaps \"State?\" and \"Hit the road, dude\"—also searched as Lock 'Em Up.",
    cover: "/state-property/truck-window.webp",
    kind: "video",
    trending: true,
    mostReadRank: 7,
  },
  {
    slug: "talk-to-me-doja",
    title: "Talk to Me Doja",
    description:
      "Talk to Me Doja is the TikTok dance trend pairing sped-up Doja Cat \"Like That\" with Urara's shy chin-hands sway from Yamada-kun and the Seven Witches.",
    cover: "/talk-to-me-doja/cover.webp",
    kind: "sound",
    fresh: true,
  },
  {
    slug: "tel-aviv-impressed",
    title: "Tel Aviv Impressed",
    description:
      "Tel Aviv Impressed is the 2026 Netanyahu blank-stare reaction meme - Ohio Impressed format used for sarcastic replies to Israel-related posts on TikTok.",
    cover: "/tel-aviv-impressed/cover.jpg",
    kind: "reaction",
  },
  {
    slug: "things-to-say",
    title: "Things to Say",
    description:
      "Things to Say meme explained: Aug 2026 TikTok ironic-advice lists that pair celebrity stills with lines you should never say to a dad, boss, or doctor.",
    cover: "/things-to-say/meeting-her-dad.jpeg",
    kind: "format",
  },
  {
    slug: "thoughts-on-lanterns",
    title: "Thoughts on Lanterns",
    description:
      "Thoughts on lanterns is a viral X exploitable: a Lanterns 2026 promo of Pierre and Chandler walking, redrawn as other duos with a franchise-swap caption.",
    cover: "/thoughts-on-lanterns/cover.jpg",
    kind: "format",
  },
  {
    slug: "tiffany-sloane",
    title: "Tiffany Sloane",
    description:
      "Tiffany Sloane (@tiffany.bbyx) looks like an Instagram stand-up comic—she is AI-generated. Joke-theft claims and an OnlyFans funnel helped wipe the feed.",
    cover: "/tiffany-sloane/infobox.jpg",
    kind: "person",
    trending: true,
    mostReadRank: 2,
  },
  {
    slug: "tip-toeing-in-my-jordans",
    title: "Tip Toeing in My Jordans",
    description:
      "Tip Toeing in My Jordans is the viral AI Rumpelstiltskin barn dance on TikTok and X, set to Riff Raff's Tip Toe Wing In My Jawwdinz - not a real '80s movie.",
    cover: "/tip-toeing-in-my-jordans/nbc-cover.jpg",
    kind: "sound",
  },
  {
    slug: "tom-pearl",
    title: "Tom Pearl",
    description:
      "Silver Tom and Golden Tom phonk aura edits, Aura of Letter T, and T Squad brainrot cast Tom Pearl as meme fodder—posts often note his criminal record up front.",
    cover: "/tom-pearl/aura-letter-t.jpg",
    kind: "person",
    trending: true,
    mostReadRank: 9,
  },
  {
    slug: "verity",
    title: "Verity",
    description:
      "ThatMob's yellow smiley Minecraft AI turns horror in the Verity series; \"It's me, it's Verity\" stuck so hard kids yell it at any yellow smiley on TikTok.",
    cover: "/verity/character.png",
    kind: "character",
    trending: true,
    mostReadRank: 10,
  },
  {
    slug: "wait-im-goated",
    title: "Wait I'm Goated",
    description:
      "Cute-animal macros and a plain white tee that just says \"wait im goated\"—soft irony from Instagram @bug2sick after @throwingfits put the phrase on merch.",
    cover: "/wait-im-goated/cover.jpg",
    kind: "catchphrase",
  },
  {
    slug: "what-do-djs-actually-do",
    title: "What the Fuck Do DJs Actually Do",
    description:
      "What do DJs actually do meme: Madeline Argy's teary July 2023 TikTok asking what DJ dials do, then DJ remix replies from Glass Petals, Loud Luxury, and Hedex.",
    cover: "/what-do-djs-actually-do/tt-madz.jpg",
    kind: "video",
  },
  {
    slug: "when-the-fajitas-come-out-sizzling",
    title: "When the Fajitas Come Out Sizzling",
    description:
      "When the Fajitas Come Out Sizzling is the fajitas sizzling restaurant catchphrase meme - from 2018 head-turns to 2025 Link dancing macros on Instagram and X.",
    cover: "/when-the-fajitas-come-out-sizzling/cover.jpg",
    kind: "catchphrase",
  },
  {
    slug: "white-girl-save-me",
    title: "White Girl Save Me",
    description:
      "White girl save me / white girl music meme: the Aug 2023 X catchphrase that spawned save-me-[X] edits, stan Twitter macros, and ironic pop-soundtrack TikToks.",
    cover: "/white-girl-save-me/cover.jpg",
    kind: "catchphrase",
  },
  {
    slug: "whole-house-mad",
    title: "Whole House Mad",
    description:
      "Whole House Mad is the viral X meme of dogs fighting while siblings scrap in the living room - the chaos reaction for when everyone is angry at once.",
    cover: "/whole-house-mad/cover.jpg",
    kind: "reaction",
  },
  {
    slug: "will-he-perform",
    title: "Will He Perform",
    description:
      "Will He Perform When He Has Money Right In Front Of Him is the Aug 2026 TikTok fail-audio trend: Remble's Touchable lyric timed to stunts that wipe out.",
    cover: "/will-he-perform/perform-cover.jpg",
    kind: "sound",
    fresh: true,
  },
  {
    slug: "wouldnt-you-like-to-know-weather-boy",
    title: "Wouldn't You Like to Know Weather Boy",
    description:
      "Weather boy meme from Fox 5 Vegas: kid snaps \"wouldn't you like to know, weather boy?\" at Ted Pretty - a staged 2017 skit turned catchphrase and image macro.",
    cover: "/wouldnt-you-like-to-know-weather-boy/cover.jpg",
    kind: "catchphrase",
  },
  {
    slug: "you-met-me-at-a-very-chinese-time",
    title: "You Met Me at a Very Chinese Time in My Life",
    description:
      "Fight Club's closer with one word swapped—\"very Chinese time\"—over dumplings, takeout, and Chinamaxxing clips that turn the drama into a nationality gag.",
    cover: "/you-met-me-at-a-very-chinese-time/beach.webp",
    kind: "catchphrase",
    trending: true,
    mostReadRank: 8,
  },
];

export function getWikiEntry(slug: string): WikiRegistryEntry | undefined {
  return wikiRegistry.find((e) => e.slug === slug);
}

export function getFeaturedWikiEntry(): WikiRegistryEntry | undefined {
  return wikiRegistry.find((e) => e.featured) ?? wikiRegistry[0];
}

export function getMostReadWikiEntries(limit = 8): WikiRegistryEntry[] {
  return [...wikiRegistry]
    .filter((e) => typeof e.mostReadRank === "number")
    .sort((a, b) => (a.mostReadRank ?? 99) - (b.mostReadRank ?? 99))
    .slice(0, limit);
}

/** Cover shelf: curated most-read first, then fill from the full registry. */
export function getCoverShelfEntries(limit = 16): WikiRegistryEntry[] {
  const ranked = getMostReadWikiEntries(wikiRegistry.length);
  const rankedSlugs = new Set(ranked.map((e) => e.slug));
  const rest = wikiRegistry.filter((e) => !rankedSlugs.has(e.slug));
  return [...ranked, ...rest].slice(0, limit);
}

const TRENDING_ORDER = [
  "tiffany-sloane",
  "is-we-getting",
  "he-tryna-ignore-it",
  "glup-shitto",
  "scientists-reveal-the-hi",
  "state-property",
  "you-met-me-at-a-very-chinese-time",
  "tom-pearl",
  "verity",
  "last-ditch-bar",
  "malfoid",
] as const;

export function getTrendingWikiEntries(): WikiRegistryEntry[] {
  const bySlug = new Map(wikiRegistry.map((e) => [e.slug, e]));
  return TRENDING_ORDER.map((slug) => bySlug.get(slug)).filter(
    (e): e is WikiRegistryEntry => Boolean(e?.trending),
  );
}

/** Homepage "New" strip - curated fresh flags, else newest most-read fill. */
export function getFreshWikiEntries(limit = 6): WikiRegistryEntry[] {
  const flagged = wikiRegistry.filter((e) => e.fresh);
  if (flagged.length > 0) return flagged.slice(0, limit);
  return getMostReadWikiEntries(limit);
}

const KIND_ORDER: readonly WikiEntryKind[] = [
  "slang",
  "catchphrase",
  "reaction",
  "format",
  "sound",
  "copypasta",
  "video",
  "person",
  "character",
  "place",
];

export function getWikiKindsPresent(): WikiEntryKind[] {
  const seen = new Set(wikiRegistry.map((e) => e.kind));
  return KIND_ORDER.filter((kind) => seen.has(kind));
}

export function getWikiEntriesGroupedByKind(): {
  kind: WikiEntryKind;
  label: string;
  entries: WikiRegistryEntry[];
}[] {
  return getWikiKindsPresent()
    .map((kind) => ({
      kind,
      label: WIKI_KIND_LABELS[kind],
      entries: wikiRegistry.filter((e) => e.kind === kind),
    }))
    .filter((group) => group.entries.length > 0);
}

export function searchWikiRegistry(query: string): WikiRegistryEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...wikiRegistry];
  return wikiRegistry.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.slug.includes(q) ||
      e.kind.includes(q),
  );
}
