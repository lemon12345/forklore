/**
 * Daily Know Your Meme watch → queue.json + HTML digest.
 *
 * Usage:
 *   pnpm kym:watch
 *   pnpm kym:watch -- --limit 40 --days 14
 *   pnpm kym:watch -- --open          # Windows: open today.html
 *
 * Writes:
 *   content/wiki/kym-watch/seen.json
 *   content/wiki/kym-watch/queue.json
 *   content/wiki/kym-watch/today.html
 *   content/wiki/kym-watch/reports/YYYY-MM-DD.html
 *
 * Does NOT scrape KYM article bodies or auto-publish Forklore pages.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "content/wiki/kym-watch");
const reportsDir = path.join(outDir, "reports");
const seenPath = path.join(outDir, "seen.json");
const queuePath = path.join(outDir, "queue.json");
const todayHtmlPath = path.join(outDir, "today.html");
const SITEMAP_URL = "https://knowyourmeme.com/sitemap.xml";

const SKIP_TITLE =
  /\b(nsfw|porn|gore|rape|leak|doxx|dox|suicide|murder|assassinat|beheading|neegy)\b/i;

function parseArgs(argv) {
  const args = { limit: 50, days: 30, open: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--limit" && argv[i + 1]) args.limit = Number(argv[++i]);
    if (argv[i] === "--days" && argv[i + 1]) args.days = Number(argv[++i]);
    if (argv[i] === "--open") args.open = true;
  }
  return args;
}

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function extractLocs(xml) {
  const entries = [];
  const re =
    /<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]*)<\/lastmod>)?/gi;
  let m;
  while ((m = re.exec(xml))) {
    entries.push({
      loc: m[1].trim(),
      lastmod: (m[2] || "").trim() || null,
    });
  }
  return entries;
}

function isMemeEntryUrl(loc) {
  try {
    const u = new URL(loc);
    if (u.hostname !== "knowyourmeme.com") return false;
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts[0] !== "memes" || parts.length !== 2) return false;
    if (
      ["events", "cultures", "subcultures", "people", "sites"].includes(
        parts[1],
      )
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function loadJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return fallback;
  }
}

function loadForkloreSlugs() {
  const registryPath = path.join(root, "content/wiki/registry.ts");
  const src = fs.readFileSync(registryPath, "utf8");
  const slugs = new Set();
  for (const m of src.matchAll(/slug:\s*"([^"]+)"/g)) slugs.add(m[1]);

  const contentDir = path.join(root, "content");
  for (const name of fs.readdirSync(contentDir)) {
    if (fs.existsSync(path.join(contentDir, name, "article.ts"))) {
      slugs.add(name);
    }
  }
  return slugs;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatWhen(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("zh-CN", { hour12: false });
}

function dayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function renderRows(items, emptyText) {
  if (!items.length) {
    return `<tr><td colspan="5" class="empty">${escapeHtml(emptyText)}</td></tr>`;
  }
  return items
    .map((item, i) => {
      const badge = item.isNewToWatch
        ? `<span class="badge new">NEW</span>`
        : `<span class="badge">queue</span>`;
      return `<tr>
  <td class="num">${i + 1}</td>
  <td>
    <div class="title">${escapeHtml(item.title)}</div>
    <code class="slug">${escapeHtml(item.slug)}</code>
    ${badge}
  </td>
  <td class="muted">${escapeHtml(formatWhen(item.lastmod))}</td>
  <td><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">KYM ↗</a></td>
  <td class="muted">写 Forklore 词条时用此 slug</td>
</tr>`;
    })
    .join("\n");
}

function buildHtml({
  generatedAt,
  windowDays,
  limit,
  newToday,
  queue,
  coveredInWindow,
  sitemapCount,
}) {
  const dateLabel = dayKey(new Date(generatedAt));
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Forklore · KYM 日报 ${escapeHtml(dateLabel)}</title>
  <style>
    :root {
      --bg: #fafafa;
      --card: #fff;
      --ink: #0a0a0a;
      --muted: #666;
      --dim: #8a8a8a;
      --line: rgba(10,10,10,.08);
      --accent: #2f6dbc;
      --new: #0d7a4f;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font: 15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif;
      color: var(--ink);
      background: var(--bg);
    }
    .wrap { max-width: 920px; margin: 0 auto; padding: 40px 20px 64px; }
    h1 { font-size: 1.75rem; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 8px; }
    .meta { color: var(--muted); font-size: 13px; margin-bottom: 28px; }
    .stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 32px;
    }
    @media (max-width: 700px) {
      .stats { grid-template-columns: repeat(2, 1fr); }
    }
    .stat {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 14px 16px;
    }
    .stat b { display: block; font-size: 1.4rem; letter-spacing: -0.02em; }
    .stat span { color: var(--dim); font-size: 12px; }
    h2 {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: var(--dim);
      margin: 28px 0 12px;
      font-weight: 600;
    }
    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      overflow: hidden;
    }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px 14px; text-align: left; vertical-align: top; border-top: 1px solid var(--line); }
    th { font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: var(--dim); background: #fcfcfc; border-top: 0; }
    .num { width: 36px; color: var(--dim); font-variant-numeric: tabular-nums; }
    .title { font-weight: 560; margin-bottom: 4px; }
    .slug { font-size: 12px; color: var(--muted); }
    .muted { color: var(--muted); font-size: 13px; white-space: nowrap; }
    .empty { color: var(--dim); text-align: center; padding: 28px 14px; }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .badge {
      display: inline-block;
      margin-left: 8px;
      padding: 1px 7px;
      border-radius: 999px;
      font-size: 10px;
      letter-spacing: .04em;
      background: #eee;
      color: var(--muted);
      vertical-align: middle;
    }
    .badge.new { background: #e6f6ef; color: var(--new); }
    .note {
      margin-top: 28px;
      padding: 14px 16px;
      border-radius: 12px;
      background: #f3f3f3;
      color: var(--muted);
      font-size: 13px;
    }
    .workflow { margin-top: 10px; padding-left: 18px; }
    .workflow li { margin: 4px 0; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>KYM 日报 · ${escapeHtml(dateLabel)}</h1>
    <p class="meta">
      生成于 ${escapeHtml(formatWhen(generatedAt))} · 来源
      <a href="${escapeHtml(SITEMAP_URL)}" target="_blank" rel="noopener noreferrer">sitemap.xml</a>
      · 窗口 ${windowDays} 天 · 队列上限 ${limit}
    </p>

    <div class="stats">
      <div class="stat"><b>${newToday.length}</b><span>今日新发现</span></div>
      <div class="stat"><b>${queue.length}</b><span>待写队列</span></div>
      <div class="stat"><b>${coveredInWindow}</b><span>窗口内已有词条</span></div>
      <div class="stat"><b>${sitemapCount}</b><span>Sitemap meme 数</span></div>
    </div>

    <h2>今日新发现（相对上次监测）</h2>
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题 / slug</th>
            <th>KYM 更新</th>
            <th>链接</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          ${renderRows(newToday, "本次没有比上次更新更新的新 URL（队列见下方）")}
        </tbody>
      </table>
    </div>

    <h2>待写队列（不在 Forklore）</h2>
    <div class="card">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>标题 / slug</th>
            <th>KYM 更新</th>
            <th>链接</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          ${renderRows(queue, "队列为空")}
        </tbody>
      </table>
    </div>

    <div class="note">
      <strong>每日更新流程</strong>
      <ol class="workflow">
        <li>跑 <code>pnpm kym:watch</code>（或带 <code>--open</code> 直接打开本页）</li>
        <li>从「今日新发现 / 待写队列」点开 KYM 核对</li>
        <li>挑 1–3 条写原创 Forklore 词条（不要复制 KYM 正文）</li>
        <li>写完后加入 <code>content/&lt;slug&gt;/</code> + registry；下次监测会自动剔除</li>
      </ol>
    </div>
  </div>
</body>
</html>
`;
}

async function main() {
  const { limit, days, open } = parseArgs(process.argv.slice(2));
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;

  console.log(`Fetching ${SITEMAP_URL} …`);
  const res = await fetch(SITEMAP_URL, {
    headers: {
      "user-agent":
        "ForkloreKYMWatch/1.0 (+https://forklore.wiki; editorial sourcing)",
      accept: "application/xml,text/xml,*/*",
    },
  });
  if (!res.ok) {
    throw new Error(`sitemap fetch failed: ${res.status} ${res.statusText}`);
  }

  const xml = await res.text();
  const locs = extractLocs(xml).filter((e) => isMemeEntryUrl(e.loc));
  const forklore = loadForkloreSlugs();
  const seenPrev = loadJson(seenPath, { urls: {} });
  const seenUrls = { ...(seenPrev.urls || {}) };

  const nowIso = new Date().toISOString();
  const queueAll = [];
  const newToday = [];
  let coveredInWindow = 0;

  for (const { loc, lastmod } of locs) {
    const slug = new URL(loc).pathname.split("/").filter(Boolean).pop();
    const title = titleFromSlug(slug);
    const lastmodMs = lastmod ? Date.parse(lastmod) : NaN;
    const withinWindow = !Number.isFinite(lastmodMs) || lastmodMs >= cutoff;
    const firstSeen = !seenUrls[loc];

    seenUrls[loc] = {
      slug,
      title,
      lastmod,
      firstSeenAt: seenUrls[loc]?.firstSeenAt || nowIso,
      lastSeenAt: nowIso,
    };

    if (!withinWindow) continue;
    if (forklore.has(slug)) {
      coveredInWindow += 1;
      continue;
    }
    if (SKIP_TITLE.test(title) || SKIP_TITLE.test(slug)) continue;

    const item = {
      slug,
      title,
      url: loc,
      lastmod,
      isNewToWatch: firstSeen,
      alreadyInForklore: false,
      status: "queued",
    };
    queueAll.push(item);
    if (firstSeen) newToday.push(item);
  }

  const byLastmod = (a, b) => {
    const ta = a.lastmod ? Date.parse(a.lastmod) : 0;
    const tb = b.lastmod ? Date.parse(b.lastmod) : 0;
    return tb - ta;
  };
  queueAll.sort(byLastmod);
  newToday.sort(byLastmod);

  const queue = queueAll.slice(0, limit);

  fs.mkdirSync(reportsDir, { recursive: true });

  const payload = {
    updatedAt: nowIso,
    source: SITEMAP_URL,
    windowDays: days,
    limit,
    count: queue.length,
    newTodayCount: newToday.length,
    note: "Manual curation only — write original Forklore entries; do not copy KYM prose.",
    newToday,
    items: queue,
  };

  fs.writeFileSync(
    seenPath,
    JSON.stringify(
      {
        updatedAt: nowIso,
        source: SITEMAP_URL,
        count: Object.keys(seenUrls).length,
        urls: seenUrls,
      },
      null,
      2,
    ),
  );
  fs.writeFileSync(queuePath, JSON.stringify(payload, null, 2));

  const html = buildHtml({
    generatedAt: nowIso,
    windowDays: days,
    limit,
    newToday,
    queue,
    coveredInWindow,
    sitemapCount: locs.length,
  });
  fs.writeFileSync(todayHtmlPath, html);
  const datedReport = path.join(reportsDir, `${dayKey()}.html`);
  fs.writeFileSync(datedReport, html);

  console.log(
    `Sitemap memes: ${locs.length} · new today: ${newToday.length} · queued: ${queue.length} · already covered (window): ${coveredInWindow}`,
  );
  for (const item of newToday.slice(0, 12)) {
    console.log(`  [NEW] ${item.title}`);
  }
  console.log(`HTML: ${path.relative(root, todayHtmlPath)}`);
  console.log(`Also: ${path.relative(root, datedReport)}`);

  if (open) {
    const target = todayHtmlPath;
    if (process.platform === "win32") {
      exec(`start "" "${target}"`);
    } else if (process.platform === "darwin") {
      exec(`open "${target}"`);
    } else {
      exec(`xdg-open "${target}"`);
    }
    console.log("Opened today.html");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
