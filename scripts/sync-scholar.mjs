#!/usr/bin/env node
// ---------------------------------------------------------------------------
//  sync-scholar.mjs — refresh citation counts / pull new papers from Google
//  Scholar into src/data/publications.json.
//
//  Usage:  npm run sync:scholar
//
//  Notes:
//   • Google Scholar has no official API and may rate-limit/serve a CAPTCHA.
//     If that happens, just try again later, or update publications.json by hand.
//   • This script is SAFE: it writes to publications.scholar-sync.json (a
//     side file) so it never clobbers your curated links/abstracts. You then
//     diff and copy over the bits you want (usually just citation counts and
//     any brand-new entries).
// ---------------------------------------------------------------------------
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SCHOLAR_ID = 'jGOzdbgAAAAJ';
const URL = `https://scholar.google.com/citations?user=${SCHOLAR_ID}&hl=en&cstart=0&pagesize=100`;
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'publications.scholar-sync.json');

const stripTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();

const res = await fetch(URL, {
  headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36' },
});
if (!res.ok) {
  console.error(`Scholar returned HTTP ${res.status}. It may be rate-limiting — try again later.`);
  process.exit(1);
}
const html = await res.text();
if (html.includes('not a robot') || html.includes('unusual traffic')) {
  console.error('Scholar served a CAPTCHA. Try again later or update publications.json by hand.');
  process.exit(1);
}

const rows = html.split('class="gsc_a_tr"').slice(1);
const pubs = [];
for (const r of rows) {
  const title = (r.match(/class="gsc_a_at"[^>]*>([\s\S]*?)<\/a>/) || [])[1];
  const grays = [...r.matchAll(/class="gs_gray">([\s\S]*?)<\/div>/g)].map((m) => stripTags(m[1]));
  const cites = (r.match(/class="gsc_a_ac[^"]*"[^>]*>([0-9]*)<\/a>/) || [])[1];
  const year = (r.match(/class="gsc_a_h[^"]*"[^>]*>([0-9]{4})<\/span>/) || [])[1];
  if (title) {
    pubs.push({
      title: stripTags(title),
      authors: grays[0] || '',
      venue: grays[1] || '',
      year: year ? Number(year) : null,
      citations: cites ? Number(cites) : 0,
    });
  }
}
pubs.sort((a, b) => (b.year || 0) - (a.year || 0) || b.citations - a.citations);
writeFileSync(OUT, JSON.stringify({ syncedAt: new Date().toISOString().slice(0, 10), count: pubs.length, publications: pubs }, null, 2));
console.log(`Pulled ${pubs.length} entries -> ${OUT}`);
console.log('Review it, then copy citation counts / new papers into src/data/publications.json.');
