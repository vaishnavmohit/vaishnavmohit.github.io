# Mohit Vaishnav — Portfolio (Astro)

A fast, SEO-optimized personal site built with [Astro](https://astro.build) +
[Tailwind CSS](https://tailwindcss.com). Founder + scientist positioning,
dark/light mode, auto-generated sitemap, JSON-LD structured data, and a
publications list seeded from Google Scholar.

---

## 1. Run it locally

You need **Node.js 18+** (you have 20). From this folder:

```bash
npm install        # first time only — installs dependencies
npm run dev        # start the dev server
```

Then open **http://localhost:4321** in your browser. The dev server hot-reloads:
edit any file, save, and the page updates instantly.

To preview the real production build locally:

```bash
npm run build      # outputs static site to ./dist
npm run preview    # serves ./dist at http://localhost:4321
```

---

## 2. How to update content (no coding needed)

Almost everything lives in plain data files — edit, save, done.

| What you want to change            | Edit this file                                  |
| ---------------------------------- | ----------------------------------------------- |
| Name, tagline, social links        | `src/data/site.ts`                              |
| Contact-form key (see §3b)         | `src/data/site.ts` → `web3formsKey`             |
| Headline stats (Kaggle, etc.)      | `src/data/site.ts` → `stats`                    |
| Jobs / education / awards          | `src/data/experience.ts`                        |
| Publications                       | `src/data/publications.json`                    |
| Home / About / Contact wording     | `src/pages/index.astro` / `about.astro` / `contact.astro` |
| Your photo                         | replace `public/img/profile.jpg`                |
| Favicon                            | replace `public/img/favicon.png`                |
| Social-share preview image         | replace `public/img/og-default.png` (1200×630)  |

### Add a blog post

Drop a new `.md` file in `src/content/blog/`. Copy the header from the existing
post (`from-research-to-product.md`) — set `title`, `description`, `date`,
`tags`, then write in Markdown. Set `draft: true` to hide a work-in-progress.

### Add more photos

Put images in `public/img/` and reference them as `/img/yourphoto.jpg` in any
page. Tip: keep them under ~300 KB — resize with
`sips -Z 1200 big.jpg --out small.jpg` (built into macOS).

---

## 3b. Turn on the contact form (one-time, ~2 min)

Your email address is deliberately **not** printed anywhere on the site, so
scrapers can't harvest it. The Contact page uses a form that delivers messages
straight to your inbox via [Web3Forms](https://web3forms.com) — free, unlimited,
no account to manage.

1. Go to <https://web3forms.com>, enter the inbox you want messages delivered to,
   and they email you an **access key** (a long string).
2. Paste it into `src/data/site.ts` → `web3formsKey: '...'`.
3. Commit + push. Done — submissions now arrive in your inbox.

Until you add the key, the form shows a gentle "not configured yet" message and
the page still works. Spam protection (honeypot) is already built in; you can add
a captcha later from the Web3Forms dashboard.

---

## 3. Refresh publications from Google Scholar

Your papers are already seeded in `src/data/publications.json` (curated, with
links + abstracts). To pull fresh citation counts or new papers later:

```bash
npm run sync:scholar
```

This writes `src/data/publications.scholar-sync.json` (a safe side-file — it
never overwrites your curated data). Open it, then copy any new citation counts
or new papers into `src/data/publications.json` by hand. (Google Scholar has no
official API and sometimes shows a CAPTCHA — if so, just try again later.)

---

## 4. Host it on GitHub Pages

This site replaces your old Jekyll site in the **`vaishnavmohit.github.io`**
repo. Because that's a GitHub *user* page, the site must live in that exact repo
and serves from the domain root — which is already configured in
`astro.config.mjs` (`site: 'https://vaishnavmohit.github.io'`).

Deployment is automatic via GitHub Actions (`.github/workflows/deploy.yml`):
**every push to `source` rebuilds and publishes the site in ~1 minute.** You never
run a build by hand.

### One-time setup

1. Put these project files into the `vaishnavmohit.github.io` repo (see the
   migration note your assistant left, or copy this folder's contents over the
   old Jekyll files and commit).
2. On GitHub: **repo → Settings → Pages → Build and deployment → Source:
   "GitHub Actions"**.
3. Push to `source`. Watch **repo → Actions** for the green check. Your site goes
   live at **https://vaishnavmohit.github.io**.

### Day-to-day after that

```bash
git add .
git commit -m "update: new blog post"
git push
```

…and the live site updates itself. That's the whole workflow.

### (Optional) custom domain later

1. Buy a domain (e.g. `mohitvaishnav.com`).
2. Add a file `public/CNAME` containing just `mohitvaishnav.com`.
3. In your domain registrar's DNS, add these `A` records pointing the apex at
   GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153` — and a `CNAME` record for `www` → `vaishnavmohit.github.io`.
4. In **Settings → Pages → Custom domain**, enter the domain and enable
   "Enforce HTTPS".
5. Update `site:` in `astro.config.mjs` to your new domain and push.

---

## 4b. Analytics, CV & Google Search Console

- **Google Analytics 4** is wired up (`G-CJ1FLXGREG` in `src/data/site.ts` →
  `analyticsId`). It loads **only in production** and **only after a visitor
  accepts** the cookie banner — nothing from Google is downloaded before that
  (the choice is remembered in `localStorage`). Decline = no analytics at all. Change the ID or set it to `''` to disable.
- **CV / résumé**: the "Download CV" buttons point to `public/pdf/Mohit_Vaishnav_CV.pdf`
  (carried over from the old site — **replace it with a current PDF** when you can;
  keep the same filename, or update `cvUrl` in `src/data/site.ts`).
- **Google Search Console** (recommended, ~2 min):
  1. Go to <https://search.google.com/search-console>, add the property
     `https://vaishnavmohit.github.io`.
  2. Choose the **HTML tag** verification method; copy the `content="..."` value.
  3. Paste it into `src/data/site.ts` → `googleSiteVerification`, then push.
  4. Back in Search Console click **Verify**, then submit your sitemap:
     `https://vaishnavmohit.github.io/sitemap-index.xml`.

## 4c. Knowledge-Graph / entity data (for the Google Knowledge Panel)

Every page emits one JSON-LD graph (`WebSite`, `Person`, `Organization` for
Kimova AI, the page type, breadcrumbs, plus page-specific nodes such as the
publications list, the PhD `Thesis` and `BlogPosting`s). It is built in
`src/lib/schema.ts` from the identity data in `src/data/site.ts`:

- `site.bio` — the canonical two-sentence biography. Paste it **verbatim** on
  LinkedIn, ORCID, Scholar, Crunchbase, Wikidata… consistency is the signal.
- `identifiers` — ORCID, Scholar, DBLP, IdRef, VIAF, theses.fr, HAL ids.
- `sameAsProfiles` — every profile page that is about *you*; also rendered as
  `<link rel="me">`. Fill `crunchbaseUrl` / `wikidataUrl` when those exist.
- `almaMaters`, `university`, `site.company` — schools and employers.

Old Jekyll URLs (`/publications`, `/awards`, `/education`, `/cv`, `/news`)
redirect via `astro.config.mjs`; the CV is also kept at the old
`/assets/pdf/` path. The blog index is `noindex` until a post is published.

## 4d. Content TODO (collect material, then we build the pages)

- [ ] **Talks & media page** — gather talk titles, event names, dates, slide/video
      links (e.g. Robert Scoble's ACL 2026 clip on X), podcast appearances, press
      quotes. One line each is enough; the page + `Event`/`VideoObject` schema
      come later.
- [ ] **Press kit page** — 2–3 headshots (already have `profile.jpg`), the
      canonical bio from `src/data/site.ts`, Kimova AI logo, contact route.
- [ ] **Publish the first blog post** (`src/content/blog/from-research-to-product.md`
      → set `draft: false`) so `/blog/` becomes indexable.
- [ ] **Kaggle stat** — find a linkable leaderboard for the "Top 5" result or
      reword it in `src/data/site.ts` → `stats` and `src/data/experience.ts` → `awards`.
- [ ] **Defense slides** — the Google Slides link on `/phd-thesis` requires sign-in;
      make it public or remove the button.
- [ ] **CV PDF** — current file says "AI Engineer" and prints your email; export a
      fresh one and replace `public/pdf/Mohit_Vaishnav_CV.pdf` (+ `public/assets/pdf/`).

## 4e. Images

Photos live in `public/img/`. After replacing `profile.jpg`, `about.jpg` or
`phd-thesis.png`, run `node scripts/optimize-images.mjs` to regenerate the WebP
variants and the favicon set the pages reference.

## 5. Project structure

```
src/
  data/            ← edit these to update the site (site, experience, publications)
  components/       ← reusable UI (Header, Footer, cards, SEO/meta, icons)
  layouts/Base.astro ← the page shell (head, nav, footer) used by every page
  pages/            ← one file = one route (index, about, research, experience, blog, contact)
  content/blog/     ← Markdown blog posts
  styles/global.css ← Tailwind layer + design tokens
public/             ← static files served as-is (images, robots.txt, favicon)
scripts/sync-scholar.mjs ← Google Scholar refresh helper
.github/workflows/deploy.yml ← auto-deploy to GitHub Pages
```

Built with Astro · Tailwind · deployed on GitHub Pages.
