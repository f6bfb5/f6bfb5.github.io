import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// import sitemap from "@astrojs/sitemap";
// import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://f6bfb5.github.io/',
  integrations: [
    mdx(),
    // sitemap(),
    // robotsTxt()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
  build: {
    format: 'file'
  }
});