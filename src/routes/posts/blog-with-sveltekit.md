---
title: "Blog with SvelteKit"
date: 2022-01-01T01:00:00.000Z
tags: F2E
---

## What's it all about?

- [Svelte](https://svelte.dev/)
  - 一套秉持「Write less code」的精神，為了建構 UI 而生的 JavaScript 編譯器
  - 不採用 Virtual DOM diff，使用原生 JS 直接修改 DOM，擁有相對優秀的執行速度與檔案大小表現
- [Sapper](https://sapper.svelte.dev/)
  - 定位類似於 React 的 Next.js、Vue 的 Nuxt.js 的 framework 工具
  - 基於 Svelte 處理與補足了如 SSR、SPA、SSG 等應用製作的需求
- [SvelteKit](https://kit.svelte.dev/)
  - 基於諸多原因從 Sapper 翻新而來的 Svelte framework
  - 改為使用 Vite，進一步簡化樣板架構

## Common directory structure

```
src/
  |- routes/
  | |- index.svelte ----> localhost:3000
  | |- contact.svelte ----> localhost:3000/contact
  | |
  | |- about/
  | |  |- index.svelte ----> localhost:3000/about
  | |  |_ products.svelte ----> localhost:3000/about/products
  | |
  | |- user/
  | |  |_ [userId].svelte ----> 透過 `load` function
  | |                             或 `page` store 取得動態變數
  | |- posts/
  | |  |_ index.json.js ----> localhost:3000/posts.json
  | |
  | |- __layout.svelte ----> 預設頁面 layout 元件
  | |                        子元件會嵌套至 <slot/> 元素裡
  | |- __layout-foo.svelte ----> 別名 layout
  | |_ special-page@foo.svelte ----> 使用別名 layout 的頁面
  |                                  localhost:3000/special-page
  |- lib/ ----> 子元件資料夾
  | |- Header.svelte
  | |_ Footer.svelte
  |
  |_ app.html

static/
  |- global.css
  |- highlight.css
  |- favicon.ico
  |- robots.txt
  |_ .nojekyll

svelte.config.js
mdsvex.config.js
```

## Features

### Read articles from markdown file

- [Sveltekit blog w/MDSVex: [dynamic routing] vs endpoints?](https://www.reddit.com/r/sveltejs/comments/rs0iby/sveltekit_blog_wmdsvex_dynamic_routing_vs/)
- 要將 markdown 檔案轉換成網頁，可用 api 方式呼叫，或先存取所有內容後再轉址

```
A. return posts from an endpoint
src/
  |_ routes/
    |_ blog/
    | |- 0001.md
    | |- 0002.md
    | |- index.svelte ----> file page
    | |_ _post.svelte ----> private layout
    |
    |- api/
      |_ posts.json.js ----> api of file pages

mdsvex.config.js
```

```
B. dynamically routing from subfolder to root
src/
  |_ routes/
    |- posts/
    | |- 0001.md
    | |_ 0002.md
    |
    |- index.svelte ----> file pages list, could be moved to another page
    |- [slug].svelte ----> file page
    |_ _post.svelte ----> private layout

mdsvex.config.js
```

`0001.md`：

```markdown
---
title: First Post
date: 2022-01-01T00:00:00.000Z
---

Hello _World!_

**This is the first post**
```

---

#### A. return posts from an endpoint

- [Let's learn SvelteKit by building a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)

```javascript
// api/posts.json.js
export const get = async () => {
  const allPostsFiles = import.meta.glob("../blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return {
    body: sortedPosts,
  };
};
```

```html
<!-- blog/index.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch({'/api/posts.json'})
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  export let posts;
</script>

<ul>
  {#each posts as post}
  <li>
    <h2>
      <a href="{post.path}"> {post.meta.title} </a>
    </h2>
    Published {post.meta.date}
  </li>
  {/each}
</ul>
```

---

#### B. dynamically routing from subfolder to root

- [SvelteKit: routing from other folders](https://blog.stranianelli.com/sveltekit-routing-from-other-folders-english/)
- [el3um4s/memento-sveltekit-and-github-pages](https://github.com/el3um4s/memento-sveltekit-and-github-pages)

```html
<!-- index.svelte -->
<!-- Grab all files to regenerate link path -->
<script context="module">
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);
  let body = [];

  for (let path in allPosts) {
    const post = allPosts[path];
    const metadata = post.metadata;

   const p = {
      path,
      metadata,
    };
    body.push(p);
  }

  export const load = async () => {
    return {
      props: {
        posts: body,
      },
    };
  };
</script>

<script>
  export let posts;

  import { base } from '$app/paths';
</script>

<ul>
  {#each posts as { slugPage, metadata: {title, slug}} }
    <li>
      <a href={`${base}/${slug}`}>{title}</a>
    </li>
  {/each}
</ul>
```

```html
<!-- [slug].svelte -->
<script context="module">
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);
  let body = [];

  for (let path in allPosts) {
    const post = allPosts[path];
    const metadata = post.metadata;
    const namePage = path.split("/");
    const slugPage = namePage[namePage.length - 1].slice(0, -3);
    const p = {
      post,
      path,
      metadata,
      slugPage,
    };
    body.push(p);
  }

  export const load = ({ params }) => {
    const posts = body;
    const { slug } = params;

    const filteredPosts = posts.filter((p) => {
      return slug.toLowerCase() === p.slugPage.toLowerCase();
    });
    if (filteredPosts.length === 0) {
      return {
        status: 404,
        error: new Error(`slug is not found`)
      };
    } else {
      return {
        props: {
          page: filteredPosts[0].post.default,
          metadata: filteredPosts[0].metadata,
          slugPage: slug,
        },
      };
    }
  };
</script>

<script>
  export let page;
  export let metadata;
  export let slugPage;
</script>

<svelte:component this="{page}" />
```

#### Set layout to the private one

- [mdsvex docs!](https://mdsvex.com/docs#layout=)

```html
<!-- _post.svelte -->
<script>
  // These props get filled in from the page's frontmatter
  export let title;
  export let date;
</script>

<header>
  <h1 class="title">{title}</h1>
  <p class="meta">
    <span class="date">{date}</span>
  </p>
</header>
<article>
  <slot />
</article>
```

```javascript
// mdsvex.config.js
// ...
export default {
  extensions: [".md"],
  layout: {
    // `blog` layout set in the frontmatter
    blog: "src/routes/_post.svelte",
    // `_` is the fallback or default layout
    _: "src/routes/_post.svelte",
  },
  //...
};
```

```javascript
// svelte.config.js
// ...
import mdsvexConfig from "./mdsvex.config.js";
// ...
const config = {
  // ...
  preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
```

### Add static adapter for static pages

- [Adapters • Docs • SvelteKit](https://kit.svelte.dev/docs/adapters#supported-environments-static-sites=)
- `npm i -D @sveltejs/adapter-static`

```javascript
// svelte.config.js
// ...
import adapter from "@sveltejs/adapter-static";
// ...
const config = {
  // ...
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    // ...
  },
};

export default config;
```

### Write Remark and Rehype plugin

- [How to get favicon's URL from a generic webpage in Javascript? - Stack Overflow](https://stackoverflow.com/questions/10282939/how-to-get-favicons-url-from-a-generic-webpage-in-javascript)
- [Transforming Markdown with Remark & Rehype](https://www.ryanfiller.com/blog/remark-and-rehype-plugins)
- [MDSveX and Svelte Kit](https://www.furudean.com/blog/svelte-kit-mdsvex)
- [remark](https://github.com/remarkjs/remark)
- [mdast](https://github.com/syntax-tree/mdast)

```javascript
// lib/_append-link-favicon.js
// Don't know if put it in the lib folder is a good choice
import visit from "unist-util-visit";

function transformer(ast) {
  visit(ast, "link", visitor);

  function visitor(node) {
    if (node.children[0].type !== "image") {
      const url = node.url;
      node.children = [
        {
          type: "image",
          url: `https://s2.googleusercontent.com/s2/favicons?domain=${url}`,
          alt: node.children[0].value,
        },
        {
          type: "html",
          value: `<span>${node.children[0].value}</span>`,
        },
      ];
    }
  }
}

function appendLinkFavicon() {
  return transformer;
}

export default appendLinkFavicon;
```

```javascript
// mdsvex.config.js
import appendLinkFavicon from "./src/lib/_append-link-favicon.js";
import urls from "rehype-urls";

function processUrl(url, node) {
  if (node.tagName === "a") {
    if (!url.href.startsWith("/")) {
      node.properties.target = "_blank";
      node.properties.rel = "noopener";
    }
  }
}

export default {
  extensions: [".md"],
  layout: {
    blog: "src/routes/_post.svelte",
    _: "src/routes/_post.svelte",
  },
  remarkPlugins: [appendLinkFavicon],
  rehypePlugins: [[urls, processUrl]],
};
```

## Ref

- `$lib` is default alias of `$project/src/lib`
- [The Unwritten Svelte Stores Guide](https://dev.to/jdgamble555/the-unwritten-svelte-stores-guide-47la)
- [How to Build a Reading Progress Bar With CSS and JavaScript](https://webdesign.tutsplus.com/tutorials/reading-progress-bar-css-javascript--cms-36635)
- [How to Deploy SvelteKit Apps to Github Pages](https://sveltesaas.com/articles/sveltekit-github-pages-guide/)
- [RSS - Version 2.0 Tags and Syntax](https://www.tutorialspoint.com/rss/rss2.0-tag-syntax.htm)
- [Best practices for XML sitemaps and RSS/Atom feeds](https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom)
- [beyonk-adventures/svelte-google-analytics](https://github.com/beyonk-adventures/svelte-google-analytics)
- [SvelteKit google analytics double reporting](https://stackoverflow.com/questions/71861393/sveltekit-google-analytics-double-reporting)
- [mdx-mermaid](https://sjwall.github.io/mdx-mermaid/)

## Example repo

- [Sh031224/svelte-kit-github-page-example](https://github.com/Sh031224/svelte-kit-github-page-example)
- [svelteland/svelte-kit-blog-demo](https://github.com/svelteland/svelte-kit-blog-demo)
- [marydotdev/simple-sveltekit-starter-v2](https://github.com/marydotdev/simple-sveltekit-starter-v2)
- [janosh/awesome-svelte-kit](https://github.com/janosh/awesome-svelte-kit)

## 雜談

剛從 Sapper 跳到 SvelteKit 的時候，由於是直接修改舊檔案，官方文件也沒有提供檔案架構範例參考，真的是看得一個頭兩個大，但摸了一陣子，比較理解大概是怎麼運作之後，覺得其實意外地相當俐落，而且有了 MDsveX 也讓頁面的可玩性變得很大，例如可以直接在 Markdown 裡撰寫可互動的元件：

<script>
  let counter = 0;
  const minus = () => counter--;
  const plus = () => counter++;
</script>

<div style="display: flex; justify-content: center; align-items: center;">
  <button on:click={() => minus()}>&minus;</button>
  <span style="margin: 0 1em;">{counter}</span>
  <button on:click={() => plus()}>&plus;</button>
</div>

雖說如此還是有很多沒有完全理解或活用的部份，像是 `import.mega.globEager` 似乎在預覽時會有效能上的問題，也還有像預覽縮圖、文章大綱、閱讀所需時間等等想實裝的功能，或是統整樣式到 Tailwind CSS 或 Windi CSS，但就抱著至少能動的精神，簡單整理了目前用到的核心架構。
