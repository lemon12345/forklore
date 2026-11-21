/**
 * Upload wiki images from public/<slug>/… to Cloudflare R2.
 * Keys mirror public paths (e.g. malfoid/fcmN5.jpg → https://cdn…/malfoid/fcmN5.jpg).
 *
 * Usage: node --env-file=.env.local scripts/upload-wiki-assets-to-r2.mjs
 * Requires: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY,
 *           R2_BUCKET_NAME, R2_PUBLIC_URL
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pub = path.join(root, "public");

const SKIP_DIRS = new Set([
  "images",
  "users",
  "fonts",
  "videos",
]);
const SKIP_FILES = /^(logo|favicon|apple-touch|og|og_|placeholder|manifest)/i;
const MEDIA_EXT = /\.(webp|jpe?g|png|gif|svg|avif)$/i;

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  return (
    {
      ".webp": "image/webp",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".avif": "image/avif",
    }[ext] || "application/octet-stream"
  );
}

function walk(dir, base = dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (dir === pub && SKIP_DIRS.has(name)) continue;
      walk(full, base, out);
      continue;
    }
    if (!MEDIA_EXT.test(name) || SKIP_FILES.test(name)) continue;
    const rel = path.relative(base, full).split(path.sep).join("/");
    out.push({ full, key: rel });
  }
  return out;
}

function requireEnv(name) {
  const v = process.env[name]?.trim();
  if (!v) throw new Error(`Missing env ${name}`);
  return v;
}

async function main() {
  const accountId =
    process.env.R2_ACCOUNT_ID?.trim() ||
    process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
  if (!accountId) {
    throw new Error(
      "Missing env R2_ACCOUNT_ID (or CLOUDFLARE_ACCOUNT_ID). Find it in Cloudflare Dashboard → R2 → Overview (Account ID).",
    );
  }
  const accessKeyId = requireEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requireEnv("R2_SECRET_ACCESS_KEY");
  const bucket = requireEnv("R2_BUCKET_NAME");
  const publicUrl = requireEnv("R2_PUBLIC_URL").replace(/\/$/, "");

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });

  const files = walk(pub);
  console.log(`Uploading ${files.length} files to r2://${bucket} …`);

  let ok = 0;
  let fail = 0;
  const concurrency = 8;
  let i = 0;

  async function worker() {
    while (i < files.length) {
      const idx = i++;
      const { full, key } = files[idx];
      try {
        const body = fs.readFileSync(full);
        await client.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: body,
            ContentType: contentType(full),
            CacheControl: "public, max-age=31536000, immutable",
          }),
        );
        ok++;
        if (ok % 25 === 0 || ok === files.length) {
          console.log(`  ${ok}/${files.length} ok`);
        }
      } catch (err) {
        fail++;
        console.error(`FAIL ${key}:`, err?.message || err);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`Done. ok=${ok} fail=${fail}`);
  console.log(`Example: ${publicUrl}/${files[0]?.key || ""}`);
  if (fail) process.exit(1);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
