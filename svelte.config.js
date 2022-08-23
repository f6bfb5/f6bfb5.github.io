import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // options passed to svelte.compile (https://svelte.dev/docs#compile-time-svelte-compile)
  compilerOptions: {
    // dev: true,
    // hydratable: true,
  },

  // an array of file extensions that should be treated as Svelte components
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    paths: {
      base: "",
      assets: "",
    },
    prerender: {
      // default: true,
      // enabled: false,
    },
    routes: (filepath) =>
      !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
    version: {
      name: Date.now().toString(),
      pollInterval: 0,
    },
    trailingSlash: "never",
    vite: () => ({}),
  },

  // SvelteKit uses vite-plugin-svelte. Its options can be provided directly here.
  // See the available options at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md

  // options passed to svelte.preprocess (https://svelte.dev/docs#compile-time-svelte-preprocess)
  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
