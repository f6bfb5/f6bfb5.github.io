---
title: "Blog with SolidJS"
date: 2025-01-01T01:00:00.000+08:00
summary: ""
tags: ["F2E"]
---

## SolidStart

[Getting started - SolidStart Docs](https://docs.solidjs.com/solid-start/getting-started)

`npm init solid@latest`

[Route pre-rendering - SolidStart Docs](https://docs.solidjs.com/solid-start/building-your-application/route-prerendering)

[Content Collectionsでブログを作る](https://zenn.dev/melodyrouter/articles/91d4d1b56db8af)

https://andi.dev/blog/how-solid-start-blog/

## SolidJS (o)

[vite-plugin-solid - npm](https://www.npmjs.com/package/vite-plugin-solid)

`npm install -D vite-plugin-solid`
`npm install solid-js`

`vite.config.js`

```diff
import { defineConfig } from 'vite'
+ import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
+    solidPlugin(),
  ],
})
```
