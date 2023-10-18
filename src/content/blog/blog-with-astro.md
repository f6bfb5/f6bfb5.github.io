---
title: "Blog with Astro"
date: 2023-01-01T01:00:00.000Z
summary: ""
tags: ["F2E"]
---

- [Getting Started | astro.new](https://astro.new/latest)

TODO
---

- [x] Dynamic routing
- [x] Global style.css & related files
- [ ] favicon
- [ ] ~~MDX + svelte~~
- [v] OGP preview image
- [x] RSS
- [v] Sitemap
- [v] robots.txt

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

- [How to use `astro-og-canvas` with Astro | Aidan Kinzett](https://aidankinzett.com/blog/astro-open-graph-image/)
- [astro-og-canvas/packages/astro-og-canvas](https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas)

SEO
---

- [GitHub - jonasmerlin/astro-seo](https://github.com/jonasmerlin/astro-seo#readme)

favicon
---

Alpine.js
---

- [@astrojs/alpinejs 🚀 Astro 文檔](https://docs.astro.build/zh-tw/guides/integrations-guide/alpinejs/)

And more...
---

- [More Recipes 🚀 Astro 文檔](https://docs.astro.build/zh-tw/recipes/)
- [Add Last Modified Time 🚀 Astro 文檔](https://docs.astro.build/zh-tw/recipes/modified-time/)
