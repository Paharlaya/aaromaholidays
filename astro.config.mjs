// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// On GitHub Pages these come from the deploy workflow; locally they fall back
// to the live domain at the root path.
export default defineConfig({
  site: process.env.SITE_URL || 'https://aaromaholidays.com',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
});
