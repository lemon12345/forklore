import fs from "node:fs";

const p = "content/wiki/registry.ts";
let s = fs.readFileSync(p, "utf8");

const fixes = [
  [
    /\/\*\* Show in homepage [\s\S]*?strip\. \*\//,
    "/** Show in homepage “New” strip. */",
  ],
  [
    /description: "Biddy Blas Scrib Doon meme:[^"]+"/,
    'description: "Biddy Blas Scrib Doon meme: Star Wars Galactic Racer Crocin alien whose Huttese \\"write it down\\" went viral Oct 2026—clips, reaction edits, Absolute Scrib Doon."',
  ],
  [
    /description: "Does He Know is a 2022[^"]+"/,
    'description: "Does He Know is a 2022 New Rockstars YouTube thumbnail of Paul Dano as the Riddler—Twitter\'s go-to reaction when someone seems oblivious to gossip or a secret."',
  ],
  [
    /description: "Glup Shitto is a 2020[^"]+"/,
    'description: "Glup Shitto is a 2020 Tumblr-coined Star Wars fandom slang name for obscure characters fans cheer in mainstream media; 2026’s The Mandalorian and Grogu nodded to it with a Glop Shdo poster Easter egg."',
  ],
  [
    /description: "Google Giggles is TikTok's fictional[^"]+"/,
    'description: "Google Giggles is TikTok\'s fictional Google short-video app meme (2023)—the \\"bro got banned from Google Giggles\\" jab at cringe, outdated, normie clips."',
  ],
  [
    /description:\s*"GTA 6 Phone Beach Driving meme:[^"]+"/,
    'description:\n      "GTA 6 Phone Beach Driving meme: the greenscreen format of holding a phone while driving over beach NPCs—doomscroll punchlines on Jason’s in-game screen."',
  ],
  [
    /description:\s*"Huss meaning:[^"]+"/,
    'description:\n      "Huss meaning: 2026 slang for sprint-breath exhalation—plus the Roblox Huss Huss Huss / In This Town partying audio that hit 36M+ TikTok views."',
  ],
  [
    /description:\s*"Lucia Will Appreciate This is the GTA 6[^"]+"/,
    'description:\n      "Lucia Will Appreciate This is the GTA 6 mission pop-up meme—Jason\'s gift/chore prompts edited into woke jokes, shopping gags, and Zuckerberg\'s Priscilla version."',
  ],
  [
    /description: "Misery Girl meme is the 2026[^"]+"/,
    'description: "Misery Girl meme is the 2026 TikTok slang that casts alt girls as Pupsies\' Misery fans with \'dad play Misery\' captions—origin, X face, and the pushback."',
  ],
  [
    /description:\s*"My Moon My Man TikTok trend:[^"]+"/,
    'description:\n      "My Moon My Man TikTok trend: couples slideshows stretch FINNEAS’s Feist cover lyric across two photos—Billboard tracked a 61% stream bump for the 2007 original."',
  ],
  [
    /description: "Navy Seal Copypasta:[^"]+"/,
    'description: "Navy Seal Copypasta: the classic \'gorilla warfare\' tough-guy rant—300 kills, IP tracing, \'you\'re fucking dead, kiddo\'—still pasted as overreaction comedy."',
  ],
  [
    /description: "Punisher's no no no wait wait wait:[^"]+"/,
    'description: "Punisher\'s no no no wait wait wait: Frank Castle\'s nightmare plea from The Punisher S1 as a viral panic reaction clip — also searched as no no wey wey wey."',
  ],
  [
    /description:\s*"Pterodactyl in Mexico meme:[^"]+"/,
    'description:\n      "Pterodactyl in Mexico meme: the Nov 2026 AI TikTok “flying dinosaur” over Ciudad Juárez—Snopes flagged fake text artifacts; officials called it digital entertainment."',
  ],
  [
    /description: "Quirk Chungus meaning:[^"]+"/,
    'description: "Quirk Chungus meaning: iFunny millennial comic insult for a doggo/pupper \\"quirky\\" woman + man-child partner—Big Chungus mashup; X slang boom March 2024."',
  ],
  [
    /description:\s*"Robert Pattinson Cast As X memes:[^"]+"/,
    'description:\n      "Robert Pattinson Cast As X memes: fake casting announcements after the Nov 2026 James Bond reveal—Snoopy, NFL QB, Nvidia CEO, and every role left."',
  ],
  [
    /description: "Scientists Reveal the Hi is a 2025[^"]+"/,
    'description: "Scientists Reveal the Hi is a 2025–2026 exploitable image macro that mimics a BBC News thumbnail: a wide-eyed orange cat under a deadpan ‘Scientists reveal the hi’ chyron."',
  ],
  [
    /description: "Sensitive Young Man is the sensitive young man slang meme[^"]+"/,
    'description: "Sensitive Young Man is the sensitive young man slang meme—2024 X archetype for misunderstood outsiders, from heart-of-gold posts to Autumn Jude Law macros."',
  ],
  [
    /description: "SMH meaning shaking my head:[^"]+"/,
    'description: "SMH meaning shaking my head: slang for disbelief, disapproval, or frustration—traced from 1994 Usenet to texts, Twitter, reaction GIFs, and news headlines."',
  ],
  [
    /description: "State Property \(also Lock[^"]+"/,
    'description: "State Property (also Lock ’Em Up / Hit the Road Dude) is a 2025–2026 viral-video meme from a Virginia pond confrontation: a truck driver rejects “state property,” then orders trespassers to hit the ro"',
  ],
  [
    /description:\s*"Talk to Me Doja is the TikTok dance trend[^"]+"/,
    'description:\n      "Talk to Me Doja is the TikTok dance trend pairing sped-up Doja Cat “Like That” with Urara’s shy chin-hands sway from Yamada-kun and the Seven Witches."',
  ],
  [
    /description: "Tel Aviv Impressed is the 2026[^"]+"/,
    'description: "Tel Aviv Impressed is the 2026 Netanyahu blank-stare reaction meme — Ohio Impressed format used for sarcastic replies to Israel-related posts on TikTok."',
  ],
  [
    /description: "Tip Toeing in My Jordans is the viral AI[^"]+"/,
    'description: "Tip Toeing in My Jordans is the viral AI Rumpelstiltskin barn dance on TikTok and X, set to Riff Raff’s Tip Toe Wing In My Jawwdinz—not a real ’80s movie."',
  ],
  [
    /description: "What is the Verity meme\?[^"]+"/,
    'description: "What is the Verity meme? A yellow smiley AI from ThatMob’s Minecraft horror series. “It’s Me, It’s Verity” made kids shout it at smileys on TikTok."',
  ],
  [
    /description: "When the Fajitas Come Out Sizzling is the fajitas[^"]+"/,
    'description: "When the Fajitas Come Out Sizzling is the fajitas sizzling restaurant catchphrase meme—from 2018 head-turns to 2025 Link dancing macros on Instagram and X."',
  ],
  [
    /description: "Whole House Mad is the viral X meme[^"]+"/,
    'description: "Whole House Mad is the viral X meme of dogs fighting while siblings scrap in the living room—the chaos reaction for when everyone is angry at once."',
  ],
  [
    /description: "Weather boy meme from Fox 5 Vegas:[^"]+"/,
    'description: "Weather boy meme from Fox 5 Vegas: kid snaps \\"wouldn\'t you like to know, weather boy?\\" at Ted Pretty—a staged 2017 skit turned catchphrase and image macro."',
  ],
  [
    /description: "You Met Me at a Very Chinese Time in My Life is a 2025[^"]+"/,
    'description: "You Met Me at a Very Chinese Time in My Life is a 2025–2026 catchphrase parody of Fight Club’s final line, paired with China-coded photos, food clips, and later Chinamaxxing lifestyle videos."',
  ],
  [
    /\/\*\* Homepage [\s\S]*?fill\. \*\//,
    "/** Homepage “New” strip — curated fresh flags, else newest most-read fill. */",
  ],
];

for (const [re, rep] of fixes) {
  if (!re.test(s)) {
    console.log("NO MATCH:", String(re).slice(0, 60));
  } else {
    s = s.replace(re, rep);
    console.log("fixed:", String(re).slice(0, 50));
  }
}

fs.writeFileSync(p, s, "utf8");
const fffd = (s.match(/\uFFFD/g) || []).length;
console.log("remaining FFFD:", fffd);
if (fffd) {
  for (const [i, line] of s.split(/\n/).entries()) {
    if (line.includes("\uFFFD")) console.log(i + 1, line.trim().slice(0, 120));
  }
}
