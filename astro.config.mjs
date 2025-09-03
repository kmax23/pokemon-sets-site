import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['pokemontcgsdk'],
    },
  },
  integrations: [mdx(), sitemap()],
});