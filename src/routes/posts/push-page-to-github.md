---
title: "推送網頁到 GitHub Pages"
date: 2020-05-25T00:26:32.000Z
published: 2020-05-25T00:26:32.000Z
author: f6bfb5
summary:
layout: blog
---

## 前置準備

- Github 帳號
- 理解版本控管

## 步驟

1. 登入 [Github](https://github.com/)，點選右上角 `+` -> `New repository`
2. 將 `Repository name` 命名為 `[你的 github 帳號].github.io` -> `Create Repositorty`
3. 開啟 Terminal，clone 專案至本地端: `git clone https://github.com/[你的帳號]/[你的帳號].github.io.git`
4. 開啟編輯器，建立檔案後 commit: `git add .`，push: `git push`，完成

## 新增子專案

### 1. 子資料夾方式

1. 直接在 `[你的帳號].github.io` 裡新增子專案目錄
2. push 上去後，就可從 `https://[你的帳號].github.io/[子專案]` 存取子專案網頁

這種方式的缺點是會造成主專案目錄過度龐大且混亂，建議使用獨立專案方式

### 2. 獨立專案方式

1. 登入 [Github](https://github.com/new) 新增專案
2. clone 專案
3. 建立 `gh-pages` branch: `git checkout -b gh-pages`
4. push，完成

當同時存在子資料夾與獨立專案的同名專案時，會以獨立專案的分支內容為主

## 非原生網頁專案

如果我們的網頁是透過如 vue-cli、Svelte 這類打包工具或編譯器產生，直接把原始碼丟上去是無法顯示的，這時我們可以透過 `gh-pages` 套件或是 GitHub Actions 來把產生出來的網頁推送上去

### gh-pages 套件

1. `npm i gh-pages --save-dev`
2. 編輯 `package.json`，新增：

```json
{
  // ...
  "scripts": {
    "predeploy": "[使用建置服務] build",
    "deploy": "gh-pages -d dist"
    ...
  }
  ...
}
```

### GitHub Action 自動部署 build 資料夾到 gh-pages 分支

- [Deploy to GitHub Pages · Actions · GitHub Marketplace](https://github.com/marketplace/actions/deploy-to-github-pages)

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
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: build # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```
