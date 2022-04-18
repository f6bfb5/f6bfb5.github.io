/** @type {import('@sveltejs/kit').Config} */

import adapter from "@sveltejs/adapter-auto";
import staticAdapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

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
    prerender: {
      default: true,
    },
    amp: false,
    appDir: "_app",
    browser: {
      hydrate: true,
      router: true,
    },
    csp: {
      mode: "auto",
      directives: {
        "default-src": undefined,
        // ...
      },
    },
    endpointExtensions: [".js", ".ts"],
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/lib",
      params: "src/params",
      routes: "src/routes",
      serviceWorker: "src/service-worker",
      template: "src/app.html",
    },
    floc: false,
    inlineStyleThreshold: 0,
    methodOverride: {
      parameter: "_method",
      allowed: [],
    },
    outDir: ".svelte-kit",
    package: {
      dir: "package",
      emitTypes: true,
      // excludes all .d.ts and files starting with _ as the name
      exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
      files: () => true,
    },
    paths: {
      assets: "",
      base: "",
    },
    prerender: {
      concurrency: 1,
      crawl: true,
      default: false,
      enabled: true,
      entries: ["*"],
      onError: "fail",
    },
    routes: (filepath) =>
      !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
    serviceWorker: {
      register: true,
      files: (filepath) => !/\.DS_Store/.test(filepath),
    },
    trailingSlash: "never",
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
