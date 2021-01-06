---
title: Blog with Svelte
date: 1970-01-02T00:00:00.000Z
---

#### Anchor links using remark-slug

- [前言](#前言)
- [安裝 Svelte](#安裝-svelte)
- [What's inside it?](#whats-inside-it)
- [How does it work?](#how-does-it-work)

---

## 前言

之前陸續試了幾個能搭配 Markdown 產生網頁的 library，像是 Hexo 或 Gridsome，但對於內容幾乎只是給自己看的雜記的我來說，用起來總覺得有種殺雞用牛刀的感覺，趁著之前也有些許關注的 Svelte 在今年興起熱潮，換了 Sapper 的 blog template 來試試使用效果如何。

（追記：原本是先看到 Routify 的 blog template 覺得很不錯，但 Routify 似乎因為需要用到檔案路徑做 SPA，沒辦法 host 在 GitHub Pages 上，參考：[淺談新手在學習 SPA 時的常見問題：以 Router 為例 - Huli](https://blog.huli.tw/2019/09/18/spa-common-problem-about-router/)，最後改用了 Sapper）

## Routify Blog Template

### 安裝

```bash
mkdir svelte-md-blog
cd svelte-md-blog
npx @sveltech/routify init --branch blog
npm run dev
```

### What's inside it?

#### [Svelte](https://svelte.dev/)

一套秉持「Write less code」的精神，為了建構 UI 而生的 JavaScript 編譯器，不採用 Virtual DOM diff，而是用原生 JS 直接修改 DOM，擁有相對優秀的執行速度與檔案大小表現。

#### [Routify](https://routify.dev/)

基於檔案系統結構的 Svelte routing library，因應檔案變更自動產生路由，並具有 SPA、SSR、PWA、產生 Meta Tags、分割 code 的功能。

- [Routify (Svelte Router) をコードリーディングして完全に理解する - Qiita](https://qiita.com/sho0211/items/ea99738f69d4426dbb1e)

#### [MDsveX](https://mdsvex.com/)

可以在 Markdown 裡使用 Svelte component、在 Svelte component 裡使用 Markdown 的 Library。

### How does it work?

```html
<script>
  import { layout, isActive, url, goto, page } from "@svelte/routify";
  export let node = $layout;
</script>

<ul>
  {#each node.children as node}
  <li>
    <a href="{$url(node.path)}" class:active="{$isActive(node.path)}"
      >{node.title}</a
    >
    {#if node.children.length}
    <svelte:self {node} />
    {/if}
  </li>
  {/each}
</ul>
```

### Setting HTML metatags

- [HTML Metatags - Routify](https://routify.dev/docs/metatags)
- [網站管理員 - Sharing](https://developers.facebook.com/docs/sharing/webmasters/)

| Metatags         | 說明                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| `og:title`       | 網頁內容的標題，不包含網站名稱等任何品牌內容                                        |
| `og:url`         | 網頁內容的網址，此網址應為標準網址（canonical URL）                                 |
| `og:description` | 內容的簡短說明，通常為 2 到 4 個句子                                                |
| `og:image`       | 用戶將內容分享至 SNS 時顯示的圖像網址，建議為 `1.91:1` 比例、最小 `1200x630` 解析度 |
| `og:type`        | 內容的媒體類型，每個網址都應該是單一物件，預設為 `website`                          |
| `og:locale`      | 資源的地區設定，預設為 `en_US`，原生內容以非英文撰寫時才需設定                      |

`pages\_layout.svelte`

```svelte
$: metatags.title = $page.meta.frontmatter
  ? $page.meta.frontmatter["title"]
  : `${$page.title}`;
$: metatags.description = $page.meta.frontmatter
  ? $page.meta.frontmatter["summary"]
  : "";

$: metatags["twitter:title"] = $page.meta.frontmatter
  ? $page.meta.frontmatter["title"]
  : `${$page.title}`;
$: metatags["twitter:description"] = $page.meta.frontmatter
  ? $page.meta.frontmatter["summary"]
  : "";
```

### Deploy

（待）

## Sapper Blog Template

### 安裝

```bash
npx degit Charca/sapper-blog-template your-blog-name
cd your-blog-name
npm install # or yarn!
npm run dev
```

### What's inside it?

#### Sapper

Sapper 是套定位類似於 React 的 Next.js、Vue 的 Nuxt.js 的 framework 工具，基於 Svelte 之上處理與補足了例如 SSR、SPA、SSG 這類製作應用的需求

### How does it work?

template 中的 blog 相關檔案位於 `src/routes/blog`，主要功能由以下三個檔案實作：

- `_posts.js`：讀取和 parse markdown 檔案的 module
- `[slug].svelte`：文章頁面的 template
- `index.svelte`：文章列表的 template

文章則放置於 `src/routes/blog/posts` 資料夾中，文章檔案名稱會 parse 成為網頁路徑，撰寫於文章開頭到 `<!-- mode -->` 之間的內容會成為預覽部份，標題和日期記載在檔案內的 yaml 區域內

### Deploy

這次我參考了[Deploy to GitHub Pages · Actions · GitHub Marketplace](https://github.com/marketplace/actions/deploy-to-github-pages)，讓 GitHub Actions 在 push 原始碼上去之後跑 build 和 deploy 到 `gh-pages` branch，再把 `github.io` 的顯示來源也改成 `gh-pages` branch

比較不同的是 `npm run build` 生產出來的網頁仍然和 Routify 一樣需要後端伺服器，需要改以 `npm run export` 讓 Sapper 自己爬一遍整個網站產生靜態頁面，才能 host 到 GitHub Pages 上

1. 在專案資料夾根目錄底下新增一個 `.github` 資料夾
2. 在裡頭新增一個 `workflows` 資料夾
3. 在裡頭新增一個 `deploy-to-github-pages.yaml` 檔案
4. 貼上以下截取自上方連結的內容
5. 將檔案 push 到 GitHub 後，就可透過 GitHub Actions 把 build 完畢的檔案自動 branch 到 `gh-pages` 分支

```yml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run export

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: __sapper__/export # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```
