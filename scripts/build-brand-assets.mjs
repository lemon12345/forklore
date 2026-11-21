/**
 * Rasterize public/logo.svg into favicon, PWA, apple-touch, and OG assets.
 * Usage: node scripts/build-brand-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pub = path.join(root, "public");
const svgPath = path.join(pub, "logo.svg");
const assetsDir = path.join(
  process.env.USERPROFILE || "",
  ".cursor/projects/d-malfoid-wiki-nexty-dev-main/assets",
);

const svg = fs.readFileSync(svgPath);

async function pngFromSvg(size, out, { padding = 0, bg = null } = {}) {
  const inner = Math.round(size * (1 - padding * 2));
  const offset = Math.round((size - inner) / 2);
  const icon = await sharp(svg).resize(inner, inner).png().toBuffer();
  const base = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg || { r: 10, g: 10, b: 10, alpha: 1 },
    },
  });
  await base
    .composite([{ input: icon, left: offset, top: offset }])
    .png()
    .toFile(out);
  console.log("wrote", path.relative(root, out), `${size}x${size}`);
}

async function plainSvgPng(size, out) {
  await sharp(svg).resize(size, size).png().toFile(out);
  console.log("wrote", path.relative(root, out), `${size}x${size}`);
}

async function buildOg(localeSuffix = "") {
  const out = path.join(pub, `og${localeSuffix}.png`);
  const masterJpg = path.join(assetsDir, "forklore-og-master.jpg");
  const mark = await sharp(svg).resize(96, 96).png().toBuffer();

  if (fs.existsSync(masterJpg)) {
    await sharp(masterJpg)
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .composite([{ input: mark, left: 48, top: 48 }])
      .png()
      .toFile(out);
    console.log("wrote", path.relative(root, out), "from master jpg");
    return;
  }

  const svgText = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fafafa"/>
  <text x="180" y="310" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="96" fill="#0a0a0a">Forklore</text>
  <text x="180" y="390" font-family="system-ui, sans-serif" font-size="36" fill="#666666">Wiki — meme encyclopedia</text>
</svg>`;
  await sharp(Buffer.from(svgText))
    .composite([{ input: mark, left: 48, top: 267 }])
    .png()
    .toFile(out);
  console.log("wrote", path.relative(root, out), "fallback");
}

async function main() {
  await plainSvgPng(192, path.join(pub, "logo.png"));
  await plainSvgPng(512, path.join(pub, "logo-512.png"));

  // Maskable: ~20% safe padding on ink tile
  await pngFromSvg(192, path.join(pub, "logo-maskable.png"), {
    padding: 0.12,
    bg: { r: 10, g: 10, b: 10, alpha: 1 },
  });
  await pngFromSvg(512, path.join(pub, "logo-512-maskable.png"), {
    padding: 0.12,
    bg: { r: 10, g: 10, b: 10, alpha: 1 },
  });

  // Apple touch: opaque full-bleed (no transparency)
  await plainSvgPng(180, path.join(pub, "apple-touch-icon.png"));

  const ico16 = await sharp(svg).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(svg).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(svg).resize(48, 48).png().toBuffer();
  const icoBuf = await pngToIco([ico16, ico32, ico48]);
  fs.writeFileSync(path.join(pub, "favicon.ico"), icoBuf);
  console.log("wrote public/favicon.ico");

  await buildOg("");
  await buildOg("_zh");
  await buildOg("_ja");

  // Optional: keep a clean nexty backup name unused
  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
