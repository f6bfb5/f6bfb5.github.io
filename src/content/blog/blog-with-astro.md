---
title: "Blog with Astro"
date: 2023-01-01T01:00:00.000+08:00
summary: ""
tags: ["F2E"]
---

- [Getting Started | astro.new](https://astro.new/latest)

TODO
---

- [x] Dynamic routing
- [x] Global style.css & related files
- [x] favicon
- [ ] ~~MDX + svelte~~
  - [x] Alpine.js
  - [x] UnoCSS
- [x] OGP preview image
- [x] RSS
- [v] Sitemap
- [x] robots.txt

Markdown + 彈性路由
---

- [Markdown & MDX 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/markdown-content/)

### 1. .glob

- [Using dynamic routes to organize blog posts in Astro - SeanMcP.com](https://www.seanmcp.com/articles/using-dynamic-routes-to-organize-blog-posts-in-astro/)
  - 文內的 `.fetchContent` 已經棄用，需改為 `.glob`
  - `[slug].astro`：
  ```astro
  ---
  export async function getStaticPaths() {
      const content = await Astro.glob('./posts/*.{md,mdx}')
      return content.map((item) => ({
          params: { slug: item.url.split("/").pop() },
          props: {
              ...item,
          },
      }));
  }

  const {
      Content,
      frontmatter: { title },
  } = Astro.props;
  ---

  <h1>{title}</h1>
  <Content />
  ```

### 2. Collections

- [Content Collections 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/content-collections/)
- [How to use content collection in Astro. - DEV Community](https://dev.to/obinnaspeaks/how-to-use-content-collection-in-astro-43j2)
- [AstroでMDファイルの管理にContent Collectionsを利用する - to-R Media](https://www.to-r.net/media/astro-content-collections/)
- [Astro 系列文第十六日：內容集合 - 網頁東東](https://www.webdong.dev/post/astro-content-collection/)
- 定義集合：`content/config.ts`
  ```javascript
  import { z, defineCollection } from 'astro:content';

  const blogCollection = defineCollection({
      schema: z.object({
          title: z.string(),
          date: z.date(),
          summary: z.string(),
          tags: z.array(z.string()),
      })
  });
  // 輸出名稱需與文件資料夾相同
  export const collections = {
      'blog': blogCollection,
  };
  ```
- `script/blog.ts`
  ```javascript
    import { getCollection } from 'astro:content';

    export async function getAllBlogs() {
        const blogs = await getCollection('blog');
        return blogs
          .map(blog => ({ params: { slug: blog.slug }, props: { blog },}))
          .sort(
            (a, z) =>
              new Date(z.props.blog.data.date).getMilliseconds()
              - new Date(a.props.blog.data.date).getMilliseconds()
          )
    }
  ```
- `[slug].astro`
  ```astro
  ---
  import { getAllBlogs } from "../scripts/blog";
  import MarkdownPostLayout from "../layouts/MarkdownPostLayout.astro";
  
  export async function getStaticPaths() {
      const content = await getAllBlogs();
      return content;
  }
  
  const { blog } = Astro.props;
  const { Content } = await blog.render();
  ---
  
  <MarkdownPostLayout title={blog.data.title}>
      <Content />
  </MarkdownPostLayout>
  ```

MDX
---

- Markdown + JSX
- [@astrojs/mdx 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/integrations-guide/mdx/)
- 安裝
  - `npx astro add mdx`

RSS feed
---

- [Add an RSS feed 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/rss/)
- `npm install @astrojs/rss`
- 設定
  - 需先於 `astro.config` 裡設定 `site`
  - `pages/rss.xml.js`
  ```javascript
  import rss from '@astrojs/rss';
  import { getCollection } from 'astro:content';
  
  export async function GET(context) {
      const blog = await getCollection('blog');
      return rss({
          title: "title",
          description: "description",
          site: context.site,
          items: blog.map((post) => ({
              title: post.data.title,
              pubDate: post.data.date,
              description: post.data.description,
              link: `/${post.slug}`,
          })),
      })
  }
  ```

Sitemap
---

- [@astrojs/sitemap 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/integrations-guide/sitemap/)
- `npx astro add sitemap`
- 設定
  - `layouts/Layout.astro`
  ```astro
  <head>
    <link rel="sitemap" href="/sitemap.xml" />
  </head>
  ```
  - `astro.config.mjs`

robots.txt
---

- [astro-lib/packages/astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme)
- `npx astro add astro-robots-txt`

OGP preview
---

### astro-og-canvas

- [How to use `astro-og-canvas` with Astro | Aidan Kinzett](https://aidankinzett.com/blog/astro-open-graph-image/)
- [astro-og-canvas/packages/astro-og-canvas](https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas)

### satori

- [Astro.js 小ネタ集 その②](https://asopi.tech/blog/20230615_1#satori-%E3%81%A7-html%E3%81%8B%E3%82%89%E7%94%BB%E5%83%8F%E7%94%9F%E6%88%90)
  - [satoriを使ったAstroのOGP画像生成メモ | Marginalia](https://blog.lacolaco.net/2023/06/astro-satori-og-image-generation/)
  - [BudouXとSatoriを使ってタイトルが分かち書きされたOGP画像を出力する。 - return $lock;](https://retrorocket.biz/archives/use-budoux-with-satori)
- `npm i satori satori-html @resvg/resvg-js`
- [Error: `No loader is configured for ".node" files: node_modules/@resvg/resvg-js-linux-x64-musl/resvgjs.linux-x64-musl.node`](https://github.com/yisibl/resvg-js/issues/175)
  - `astro.config.mjs`
  ```javascript
  vite: {
    ssr: {
      external: ['@resvg/resvg-js']
    },
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
  ```
- Satori 使用與 React Native 同樣的 layout 引擎，**沒有實作完整的 CSS**
  - [vercel/satori: Enlightened library to convert HTML and CSS to SVG](https://github.com/vercel/satori/tree/main#css)
- 支援 TailwindCSS
- https://og-playground.vercel.app/

### Puppeteer

- [huli-life-blog/apps/og-image-generator/app.js at main · aszx87410/huli-life-blog](https://github.com/aszx87410/huli-life-blog/blob/main/apps/og-image-generator/app.js)

SEO
---

- [GitHub - jonasmerlin/astro-seo](https://github.com/jonasmerlin/astro-seo#readme)

favicon
---

Alpine.js
---

- [@astrojs/alpinejs 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/integrations-guide/alpinejs/)
- `npx astro add alpinejs`

<div x-data="{ count: 0 }" style="margin: auto;">
    <button x-on:click="count++">Increment</button>
    <span x-text="count"></span>
</div>

SolidJS
---

- [@astrojs/solid-js | Docs](https://docs.astro.build/en/guides/integrations-guide/solid-js/)
- `npx astro add solid`

UI frameworks
---

- [Front-end frameworks | Docs](https://docs.astro.build/en/guides/framework-components/#using-framework-components)

UnoCSS
---

- [UnoCSS Astro Integration](https://unocss.dev/integrations/astro)
- `npm i -D unocss`
- `astro.config.mjs`
  ```javascript
  import { defineConfig } from 'astro/config'
  import UnoCSS from 'unocss/astro'

  export default defineConfig({
    integrations: [
      UnoCSS(),
    ],
  })
  ```
- 建立 `uno.config.ts`
  ```javascript
  import {
    defineConfig,
    presetUno,
    presetAttributify,
  } from 'unocss'

  export default defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
    ],
  })
  ```
  - 加入 Presets：Uno 與 Attributify
- Attributify 預設屬性值：
  - `['bg', 'flex', 'grid', 'border', 'text', 'font', 'class', 'className', 'p', 'm', 'animate']`

<div class="grid place-items-center content-center">
 <div class="py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md">
  UnoCSS classes also work in Markdown!
 </div>
</div>

Pagefind
---

- [静的サイト向けの全文検索エンジンと UI ライブラリの Pagefind](https://azukiazusa.dev/blog/static-site-search-engine-and-ui-library-pagefind/)

Pass variable from frontmatter to script
---

- [javascript - how to pass variable from frontmatter to script in Astro JS? - Stack Overflow](https://stackoverflow.com/questions/76714410/how-to-pass-variable-from-frontmatter-to-script-in-astro-js)
- [Scripts and Event Handling 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/client-side-scripts/#web-components-with-custom-elements)

swup
---

- [swup/astro: Astro integration for swup 🚀](https://github.com/swup/astro)
  - [Integrations — swup https://swup.js.org/other/integrations/]
- `npm i @swup/astro`

And more...
---

- [More Recipes 🚀 Astro 文檔](https://docs.astro.build/zh-tw/recipes/)
- [Add Last Modified Time 🚀 Astro 文檔](https://docs.astro.build/zh-tw/recipes/modified-time/)
