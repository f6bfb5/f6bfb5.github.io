---
title: "Webpack 筆記"
date: 2019-07-21T13:37:47.000Z
published: 2019-07-21T13:37:47.000Z
author: f6bfb5
summary:
layout: blog
---

- [\[譯 + 補充\] Webpack 2 學習筆記 | DEVLOG of andyyou](https://andyyou.github.io/2017/02/17/webpack-2-beginner-guide/)
- [Webpack 筆記整理 (一)](https://medium.com/@cos214159/webpack-%E7%AD%86%E8%A8%98%E6%95%B4%E7%90%86-%E4%B8%80-7fc63bcf1ecb)
- [Webpack をシンプルに理解しよう](https://qiita.com/yusuke_ten/items/a40ec089c55599ce1b3e)

## 什麼時候不要使用 npm install

- [あなたが npm install をしてはいけない時](https://qiita.com/jigengineer/items/2b15797b850179cb8be0)

- `npm` 是 Node.js 的套件管理系統，在開發起初時使用 `npm init` 指令會在開發環境底下新增 `package.json` 檔案，將所使用的套件名稱與版本等相關資訊儲存在裡面。
- 每次追加新的 `xxx` 套件時，執行 `npm install xxx --save` 就會更新 `package.json` 裡面的 `dependencies`，並且新增另一個 `package-lock.json` 檔案。
- `xxx` 套件的最新版本為 `1.0.0` 時，`package.json` 的 `dependencies` 會以範圍格式記載 `"xxx": "^1.0.0"`，亦即適用以 1 開頭的最新版本檔案，然而若是已經推播最新版本 `yyy` 含有漏洞亦或問題，直接使用 `npm install` 會難以重現開發環境
- 雖然 `package-lock.json` 存有該次建構時的確切版本，但 `npm install` 會覆寫 `package-lock.json` 裡的版本紀錄，若是需要以建構環境時的套件版本為主，需改用 `npm ci`，便會以 `package-lock.json` 為主要參照來源。
- 想更新 `package-lock.json` 時則直接使用 `npm install` 或 `npm update`。
