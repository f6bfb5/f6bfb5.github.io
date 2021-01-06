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

之前陸續試了幾個能搭配 Markdown 產生網頁的 library，像是 Hexo 或 Gridsome，但對於內容幾乎只是給自己看的雜記的我來說，用起來總覺得有種殺雞用牛刀的感覺，趁著之前也有些許關注的 Svelte 在今年興起熱潮，換了 Routify 的 blog template 來試試使用效果如何。

## 安裝 Svelte

```bash
mkdir svelte-md-blog
cd svelte-md-blog
npx @sveltech/routify init --branch blog
npm run dev
```

## What's inside it?

### [Svelte](https://svelte.dev/)

一套秉持「Write less code」的精神，為了建構 UI 而生的 JavaScript 編譯器，不採用 Virtual DOM diff，而是用原生 JS 直接修改 DOM，擁有相對優秀的執行速度與檔案大小表現。

### [Routify](https://routify.dev/)

基於檔案系統結構的 Svelte routing library，因應檔案變更自動產生路由，並具有 SPA、SSR、PWA、產生 Meta Tags、分割 code 的功能。

- [Routify (Svelte Router) をコードリーディングして完全に理解する - Qiita](https://qiita.com/sho0211/items/ea99738f69d4426dbb1e)

### [MDsveX](https://mdsvex.com/)

可以在 Markdown 裡使用 Svelte component、在 Svelte component 裡使用 Markdown 的 Library。

## How does it work?

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

## Setting HTML metatags

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

## Deploy
