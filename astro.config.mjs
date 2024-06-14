import { defineConfig } from 'astro/config';

// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";

import alpinejs from "@astrojs/alpinejs";
import UnoCSS from 'unocss/astro';
import { externalLink } from './src/externalLink';
// import mdx from "@astrojs/mdx";
// import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://f6bfb5.github.io/',
  integrations: [
    // sitemap(),
    // robotsTxt(),
    alpinejs(),
    UnoCSS(),
    // mdx(),
    // swup(),
  ],
  markdown: {
    rehypePlugins: [[externalLink, { domain: "f6bfb5.github.io" }]],
    shikiConfig: {
      theme: 'dracula'
    }
  },
  build: {
    format: 'file'
  },
  vite: {
    ssr: {
      external: ['@resvg/resvg-js']
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});