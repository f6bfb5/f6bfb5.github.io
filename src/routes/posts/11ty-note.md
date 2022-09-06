---
title: "Eleventy 雜記"
date: 2022-09-03T21:55:00.000Z
summary: ""
tags: 
---

- [Eleventy, a simpler static site generator](https://www.11ty.dev/)
- [Eleventy Documentation](https://www.11ty.dev/docs/)

## 安裝

- Setup
  ```bash
  mkdir 11ty-project && cd 11ty-project
  npm init -y
  npm install @11ty/eleventy
  ```
- `packages.json` Base Configuration
  ```javascript
  "scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy"
  }
  ```
- `.eleventy.js` Eleventy Configuration
  ```javascript
  module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
      }
    }
  }
  ```
  - 原始檔案放置於 `/src` 資料夾下
  - 11ty 會將建置檔案輸出到 `/public` 資料夾
  - 元件檔案放置於 `/src/_includes` 資料夾下

## 撰寫

- 11ty 預設使用 Nunjucks 作為樣板語言
  - 也可使用其他如 pug 或 ejs
  - 調整好設定後即會自動轉換
- Nunjucks 檔案的副檔名為 `.njk`

### CSS

- `.eleventy.js`
  ```javascript
  module.exports = function (eleventyConfig) {
    // ...

    // copy files in `css/` to `output/css`
    eleventyConfig.addPassthroughCopy('css')

    return {
      // ...
      passthroughFileCopy: true
    }
  }
  ```
- `base.njk`
  ```html
  <link rel="stylesheet" href="/css/global.css" />
  ```

### Collections

- [Collections - Eleventy](https://www.11ty.dev/docs/collections/)

## Deploy

## 參考連結

- [How to Deploy Eleventy to GitHub Pages With GitHub Actions](https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/)
- [Create A Static Site Using 11ty & Deploy to Neocities](https://www.flamedfury.com/guides/11ty-homepage-neocities/)
- [離開 Hexo，使用 Eleventy 架設部落格](https://frannn.dev/posts/82901432/)
- [用 11ty 寫部落格的心得](https://lavif.me/post/11ty-blog)
- [用 Astro 重寫部落格的心得](https://lavif.me/post/astro-blog)