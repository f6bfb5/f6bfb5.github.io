---
title: "Blog with Hono"
date: 2025-01-01T01:00:00.000+08:00
summary: ""
tags: ["F2E"]
---

## What is Hono?

## Setup

1. `npm create hono@latest`>cloudflare-pages
2. `npm i @hono-vite-ssg`

`vite.config.ts`

```javascript
import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import devServer from '@hono/vite-dev-server'

const entry = './src/index.tsx'

export default defineConfig({
  plugins: [
    devServer({ entry }),
    ssg({ entry })
  ]
})

```

`src/index.tsx`

## Tailwind

[Installing Tailwind CSS with Vite - Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

`npm install tailwindcss @tailwindcss/vite`

`vite.config.js`

```diff
import { defineConfig } from 'vite'
+ import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
+    tailwindcss(),
  ],
})
```

## Markdown

- [remarkjs/remark-frontmatter: remark plugin to support frontmatter (YAML, TOML, and more)](https://github.com/remarkjs/remark-frontmatter)
- [remcohaszing/remark-mdx-frontmatter: A remark plugin for converting frontmatter metadata into MDX exports](https://github.com/remcohaszing/remark-mdx-frontmatter)

## Sitemap

## RSS Feed

## satori

- budoux

## Ref

- [SSG Helper - Hono](https://hono.dev/docs/helpers/ssg)
- [yusukebe/hono-ssg-example](https://github.com/yusukebe/hono-ssg-example/tree/main)
- 2024-02-05 [個人ブログをNext.jsのSSGからHonoのSSGに移行した](https://zenn.dev/razokulover/articles/9818ef632f677f)
- 2024-03-04 [ブログをAstroからHonoのSSGに移行しました- tkan☕️](https://tkancf.com/blog/blog-migration-astro-to-hono)
- 2025-03-08 [Hono v4 で Markdown を SSG する | SIWL.dev](https://siwl.dev/blog/articles/hono-ssg/)
- 2024-06-01 [HonoXのSSGで個人ブログを構築しました - mooriii's blog](https://blog.mooriii.com/entry/honox-ssg-blog)
