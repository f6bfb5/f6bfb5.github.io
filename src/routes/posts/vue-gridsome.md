---
title: "Vue - 靜態網頁產生器 Gridsome"
date: 2019-12-06T10:48:03.000Z
published: 2019-12-06T10:48:03.000Z
author: f6bfb5
summary:
tags: F2E, JavaScript
layout: blog
---

## What is gridsome

- [Gridsome](https://gridsome.org/) 是一套 Vue.js 靜態網站產生器的 JAMstack (JavaScript、API、Markup) 架構框架，建構靈感來自於 React 製的靜態網站生成框架 Gatsby。
- JAMStack 架構可以達成更好的網站效能、更低的建構成本、更高的安全性與更良好的開發者體驗。
- Gridsome 最大的特徵為使用 GraphQL 方式取得資料，在選取資料來源上有非常高的自由度。
- 在建構階段便處理好所有的效能優化，包括 `code-splitting`、`asset optimisation`、`lazy-loading`，以及滿分的 `Lighthouse scores out-of-the-box`。

## GraphQL？

### Query

```GraphQL
query {
  # 想取得的資料模型名稱
  persona(personId: 1) {
    # 想取得的資料內容
    name
    age
    address
    # 也可取得相關資料模型
    company {
      name
    }
  }
}
```

### Mutation

```GraphQL
mutation personMutation {
  update(name: "New name") {
    id
    name
  }
}
```

### Subscription

```GraphQL
subscription {
  nameChange {
    name
  }
}
```

## 安裝框架

- `yarn global add @gridsome/cli` or `npm install --global @gridsome/cli`

## 創建專案

1. `gridsome create my-gridsome-site`
2. `cd my-gridsome-site`
3. `gridsome develop`

## 目錄結構

```
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── index.html
    ├── App.vue
    ├── components/
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── Blog.vue
    └── templates/
        └── BlogPost.vue
```

### `package.json`

此檔案包含 project 所使用的 plugins 資訊。

### `gridsome.config.js`

此檔案包含 project 和 plugins 的設定資訊。
更多資訊請參考 [Project configuration](https://gridsome.org/docs/config/)。

### `gridsome.server.js`

此檔案可自選是否要使用，用於串接 Gridsome 伺服器的各個部份。此檔案必須 export 一存取 API 用的 function。

### `/src`:

- `main.js`: 從此導入通用樣式和 scripts。此檔案亦可 export 一存取客戶端 API 用的 function。安裝 Vue plugins、註冊 components 和 directives 亦在此檔案內處理。
- `components/`: 在此資料夾內新增會插入至 Pages 和 Layouts 內的 Components。
- `layouts/`: Layouts 是 Pages 和 Templates 這類內容的 Vue Components 包裝器。
  像 headers、footers、sidebars 這類網站上的 components 都會放在 Layouts 裡。
- `pages/`: Pages 通常用於一般頁面或從 GraphQL 集合中列出的項目。
  從這邊新增 `.vue` 檔案以創建頁面。 例如 **About.vue** 會建立 **site.com/about** 頁面。
- `templates/`: Templates 負責顯示節點 (單頁) 的集合。
  用於 **GraphQL 集合** 的樣板應該新增於此。
  例如要建立 `WordPressPost` 集合的樣板，要於此資料夾新增檔案 `WordPressPost.vue`。
- `index.html`: 當需要覆寫原本用於產生頁面的 HTML 樣板時，只需要在 `src` 資料夾內建立一個新的 `index.html` 檔案即可。
- `App.vue`: `App.vue` 是包含所有 pages 和 templates 的主要 component。當想修改所有頁面上的 layout 時，可以在 `src` 資料夾內新增 `App.vue` 覆寫預設內容。
- (可選) `assets/`: 通用樣式、圖片、字體、 icons 檔案。
- (可選) `data/`: 如 `.json` 或 `.yaml` 這類匯入至 components 內的資料檔案。

### `/static`:

此資料夾下的檔案會在編譯時直接複製到 dist 資料夾內。

### Components

#### Images

Gridsome 內建有 `<g-image>` component 輸出已經最佳化過的漸進式圖片。可在寬度或高度改變時即時修改或裁剪圖片尺寸。 `<g-images>` 也會建立一個超小的模糊行內 base64 圖片，並使用 IntersectionObserver 達成 lazy load 的效果。

#### Linking

Gridsome 內建有 `<g-link>` component 使用 IntersectionObserver 預先取得畫面裡的連結頁面。這使得 Gridsome 網站能在點擊頁面時的瀏覽速度大幅加快。

## 速成專案

- [gridsome/gridsome-starter-default: 🐣 Default starter for Gridsome](https://github.com/gridsome/gridsome-starter-default)
- [gridsome/gridsome-starter-blog: A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.](https://github.com/gridsome/gridsome-starter-blog)
- [noxify/gridsome-starter-casper-v2: Grisome starter based on Ghost Casper V2 and tailwindcss.](https://github.com/noxify/gridsome-starter-casper-v2)

## 撰寫內容

- [使用 Gridsome 讀取 Markdown | 點燈坊](https://fpjs.fun/gridsome/data/markdown/)
- [Gridsome でブログを作成する - Building a Blog with Vue and Markdown Using Gridsome - Qiita](https://qiita.com/neneta0921/items/2dff64e3c9589e046330)

原始碼基礎架構和 Vue 相去不大，多了一個 `<page-query>` 撰寫 GraphQL 語法用。

```vue
<template>
  <div>
    <h2>Latest blog posts</h2>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>
  </div>
</template>

<page-query>
query Blog {
  posts: allWordPressPost (limit: 5) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>
```

### query

#### `gridsome.config.js`

```js
module.exports = {
  siteName: "Gridsome Blog",
  siteDescription: "A simple blog designed with Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/blog/:slug",
      },
    },
  ],
};
```

#### `Index.vue`

```GraphQL
<page-query>
query ($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "YYYY-MM-DD")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
```

#### `Home.vue`

```GraphQL
<page-query>
query Home ($page: Int) {
  posts: allPost (page: $page, perPage: 9) @paginate {
    totalCount
    pageInfo {
      totlaPages
      currentPage
    }
    edges {
      node {
        id
        title
        timeToRead
        content
        excerpt
        description
        path
        tages {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
```

#### `Post.vue`

```GraphQL
<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "YYYY-MM-DD")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>
```

`Tag.vue`

```GraphQL
<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "YYYY-MM-DD")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>
```

### 修正預設路由無法處理中文標題的問題

1. 在 markdown 檔案的 meta 資訊裡加入 `path` 供路由處理使用
2. 將 `gridsome.config.js` 的 `templates` 裡的 `Post` 改為 `/:path`

## 推播上線

- [Deploy to GitHub pages - Gridsome](https://gridsome.org/docs/deploy-to-github/)

1. 使用 git 建立版控，使用 `git remote add origin <url>` 設定 repo
2. 使用 `yarn add gh-pages` 或 `npm i gh-pages` 安裝 `gh-pages`
3. 於 `gridsome.config.js` 裡新增

```js
  siteUrl: 'https://<your-github-username>.github.io',
  pathPrefix: '/<your-gridsome-repo-name>',
```

4. 於 `package.json` 裡新增

```json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
```

5. 執行指令 `npm run deploy`

## 可用插件

### Tailwindcss

- `yarn add tailwindcss --dev`
- `yarn add @fullhuman/postcss-purgecss --dev`
- `yarn add postcss-import --dev`
- `yarn add postcss-nested --dev`

`gridsome.config.js`:

```js
class TailwindExtractor {
  static extract(content) {
    return content.match(/{A-Za-z0-0-_:\/]+/g) || [];
  }
}

module.exports = {
  // ...
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal)
      .use('postcss-loader')
      tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
      ])

      if (process.env.NODE_ENV === 'production') {
        options.plugins.push(...[
          require('@fullhuman/postcss-prugecss')){
            content: [
              'src/assets/**/*.css',
              'src/**/*.vue',
              'src/**/*.js'
            ],
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['css', 'vue', 'js']
              }
            ]
          }
        ])
      }

      return options
    })
  },
  // ...
}
```

`main.js`:

```js
/*! purgecss start ignore */
@import 'tailwindcss/base';
/*! purgecss end ignore */

@import 'tailwindcss/components';
@imprt 'tailwindcss/utilities';

// Other import css file
// @import './components/custom-css-file
```

### Font Awesome

#### 安裝

- `npm i -D @fortawesome/{vue-fontawesome,fontawesome-svg-core,free-brands-svg-icons}`
- 免費圖示：
  <br>├ `@fortawesome/free-solid-svg-icons`
  <br>├ `@fortawesome/free-regular-svg-icons`
  <br>└ `@fortawesome/free-brands-svg-icons`
- 付費圖示：
  <br>├ `@fortawesome/pro-solid-svg-icons`
  <br>├ `@fortawesome/pro-regular-svg-icons`
  <br>├ `@fortawesome/pro-light-svg-icons`
  <br>└ `@fortawesome/pro-duotone-svg-icons`

#### 設定付費資訊

```bash
# A. 全體設定
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
npm config set "//npm.fontawesome.com/:_authToken" TOKEN

# B. 在 project 主資料夾或與 package.json 相同位置的資料夾裡建立 .npmrc 檔案設定
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=TOKEN
```

#### 導入

`main.js`

```javascript
import { library } from "@fortawesome/fontawesome-svg-core";

// 圖示名稱至 fontawesome 網站 https://fontawesome.com/icons?d=gallery 上搜尋
// 依欲使用的風格選擇
// free-solid-svg-icons 為填滿圖示，通常以 fas 為標頭
import { 欲使用的圖示名稱 as 圖示變數 } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

// free-regular-svg-icons 為一般圖示，通常以 far 為標頭
import { 欲使用的圖示名稱 as 圖示變數 } from "@fortawesome/free-regular-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 加入至 project 中
library.add(欲使用的圖示名稱);

Vue.component("font-awesome-icon", FontAwesomeIcon);
```

#### 使用

元件的名稱於上方的 `Vue.component` 裡設定，如文內的範例是 `font-awesome-icon`；在欲使用的頁面裡加入：
<br>`<font-awesome-icon :icon="['圖示標頭', '圖示名稱']" />`
<br>ex: `<font-awesome-icon :icon="['fab', 'font-awesome']" />`

### Google Adsense

- [Adsense](https://www.google.com/adsense/new/)
- [Gridsome で作ったサイトに Google Adsense を導入する方法 | K note](https://knote.dev/post/2020-04-19/gridsome-google-adsense/)

1. 在 `<head></head>` 內新增 Adsense 需要的 Script
   由於使用 Gridsome 在 `src/main.js` 內新增的方法，會因為 `vue-meta` 在切換頁面時遇到錯誤，

```js
export default function (Vue, { head }) {
  head.script.push({
    type: "text/javascript",
    "data-ad-client": "ca-pub-XXXXXXXXXXXXXXXX",
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    async: true,
  });
}
```

    需改為直接加在 `src/index.html` 的 `<head>` 標籤內。

```html
<!DOCTYPE html>
<html ${htmlAttrs}>
  <head>
    ${head}

    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    ></script>
  </head>

  <body ${bodyAttrs}>
    ${app} ${scripts}
  </body>
</html>
```

2. 新增 Adsense 用的 component `components/Adsense.vue`

```vue
<template>
  <ins
    class="adsbygoogle"
    :data-ad-layout="adLayout"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
    :data-full-width-responsive="adResponsive"
    :data-ad-layout-key="adLayoutKey"
    :style="adStyle"
  />
</template>

<script>
export default {
  props: {
    adClient: {
      type: String,
      required: false,
      default: "ca-pub-XXXXXXXXXXXXXXXX",
    },
    adSlot: {
      type: String,
      required: true,
      default: "",
    },
    adFormat: {
      type: String,
      required: false,
      default: "auto",
    },
    adLayout: {
      type: String,
      required: false,
      default: null,
    },
    adStyle: {
      type: String,
      required: false,
      default: "display: block;",
    },
    adResponsive: {
      type: String,
      required: false,
      default: null,
    },
    adLayoutKey: {
      type: String,
      required: false,
      default: null,
    },
  },
  mounted() {
    this.showAd();
  },
  methods: {
    showAd() {
      this.$nextTick(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error(error);
        }
      });
    },
  },
};
</script>
```

3. 在頁面內加入 component

```html
<template>
  <div>
    <adsense
      ad-layout="in-article"
      ad-slot="9999999999"
      ad-format="fluid"
      ad-responsive="false"
    />
  </div>
</template>
```

### RSS

- [Gridsome でイチからブログを作る - RSS を配信する | Trial and Spiral](https://blog.solunita.net/posts/develop-blog-by-gridsome-from-scratch-publish-rss/)
- `yarn add gridsome-plugin-feed`
- `npm install gridsome-plugin-feed`
