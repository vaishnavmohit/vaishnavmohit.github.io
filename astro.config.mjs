import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { readdirSync, readFileSync } from 'node:fs';

// Is there at least one published (non-draft) blog post? If not, keep the
// empty /blog/ index out of the sitemap (the page itself is also noindex'ed).
function hasPublishedPosts() {
  try {
    return readdirSync('./src/content/blog')
      .filter((f) => /\.(md|mdx)$/.test(f))
      .some((f) => !/^draft:\s*true/m.test(readFileSync(`./src/content/blog/${f}`, 'utf8')));
  } catch {
    return false;
  }
}
const blogLive = hasPublishedPosts();

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: this is a GitHub *user* page (vaishnavmohit.github.io),
  // so it is served from the domain root — base stays '/'.
  site: 'https://vaishnavmohit.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => {
        if (page.includes('/privacy')) return false;
        if (!blogLive && /\/blog\/?$/.test(page)) return false;
        return true;
      },
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  // Old Jekyll-site URLs → new pages (keeps backlinks and indexed entries alive).
  // Static hosting can't send 301s, so Astro writes tiny meta-refresh pages;
  // the old CV PDF path is served by a real copy in public/assets/pdf/.
  redirects: {
    '/publications': '/research',
    '/awards': '/about',
    '/education': '/experience',
    '/experience_backup': '/experience',
    '/news': '/blog',
    '/cv': '/pdf/Mohit_Vaishnav_CV.pdf',
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
