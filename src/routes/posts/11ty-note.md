---
title: "Eleventy雜記"
date: 2022-09-03T21:55:00.000Z
summary: ""
tags: F2E
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
      },
    };
  };
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

- 將 `css` 資料夾裡的檔案複製到 `output/css`
  - `.eleventy.js`
    ```javascript
    module.exports = function (eleventyConfig) {
      // ...
      // copy files in `css/` to `output/css`
      eleventyConfig.addPassthroughCopy("css");
      return {
        // ...
        passthroughFileCopy: true,
      };
    };
    ```
- 於樣板檔案裡引入 CSS 檔案
  - `base.njk`
    ```html
    <link rel="stylesheet" href="/css/global.css" />
    ```

### Collections

- [Collections](https://www.11ty.dev/docs/collections/)

### Component

- 新增 `src/components/[component-name].njk`
  - 檔案名稱需為 kebab-case 格式
- 於 `src/_includes/components/[component-name]/` 新增：
  - `script.js`
  - `style.css`
- 於想使用的樣板檔案裡加入標籤：
  - `component: component-name`

## Deploy

- 11ty build 後的網頁即可直接上線
- 若是使用如 GitHub 的子 repo，則需替連結加上 prefix
  - `package.json`
    - `"build": "env NODE_ENV=production npx @11ty/eleventy --pathprefix '[repo_name]'",`
  - 修改所有樣版檔案裡的連結
    - 例如：`<link rel="stylesheet" href="/css/global.css" />`
    - 需改為：`<link rel="stylesheet" href="{{ '/css/global.css' | url }}" />`
    - [url Filter](https://www.11ty.dev/docs/filters/url/)

### GitHub Actions

新增 `.github/workflows/build-and-deploy.yaml`：

```yaml
name: Build and Deploy
on: [push]
permissions:
  contents: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: public # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```

## 參考連結

- [How to Deploy Eleventy to GitHub Pages With GitHub Actions](https://www.rockyourcode.com/how-to-deploy-eleventy-to-github-pages-with-github-actions/)
- [Create A Static Site Using 11ty & Deploy to Neocities](https://www.flamedfury.com/guides/11ty-homepage-neocities/)
- [離開 Hexo，使用 Eleventy 架設部落格](https://frannn.dev/posts/82901432/)
- [用 11ty 寫部落格的心得](https://lavif.me/post/11ty-blog)
- [用 Astro 重寫部落格的心得](https://lavif.me/post/astro-blog)
