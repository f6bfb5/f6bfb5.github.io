// import adapter from "@sveltejs/adapter-auto";
import staticAdapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

// const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // options passed to svelte.compile (https://svelte.dev/docs#compile-time-svelte-compile)
  compilerOptions: {},

  // an array of file extensions that should be treated as Svelte components
  extensions: [".svelte", ".md"],

  kit: {
    adapter: staticAdapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    paths: {
      assets: "",
      base: "",
    },
    prerender: {
      default: true,
    },
    routes: (filepath) =>
      !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
    version: {
      name: Date.now().toString(),
      pollInterval: 0,
    },
    vite: () => ({}),
  },

  // SvelteKit uses vite-plugin-svelte. Its options can be provided directly here.
  // See the available options at https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md

  // options passed to svelte.preprocess (https://svelte.dev/docs#compile-time-svelte-preprocess)
  preprocess: [
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "src/routes/_post.svelte",
        _: "src/routes/_post.svelte",
      },
    }),
  ],
};

export default config;
