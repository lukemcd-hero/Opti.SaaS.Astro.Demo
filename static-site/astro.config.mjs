import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://opti-saas-astro-demo.vercel.app',
  adapter: vercel(),
  integrations: [sitemap()],
  transitions: true,
});
