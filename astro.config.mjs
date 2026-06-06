import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: this is a GitHub *user* page (vaishnavmohit.github.io),
  // so it is served from the domain root — base stays '/'.
  site: 'https://vaishnavmohit.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
