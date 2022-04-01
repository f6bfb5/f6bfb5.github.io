---
title: "前端筆記 (4) 自動化工具"
date: 2019-07-18T07:04:00.000Z
tags: F2E
---

為了簡化各種工作，開發前端也有許多自動化工具可使用，例如自動化工作流程的 gulp，以及整合、打包模組的 webpack。

## npm

- `npm` 是 Node.js 的套件管理系統，在開發起初時使用 `npm init` 指令會在開發環境底下新增 `package.json` 檔案，將所使用的套件名稱與版本等相關資訊儲存在裡面。
- 每次追加新的 `xxx` 套件時，執行 `npm install xxx --save` 就會更新 `package.json` 裡面的 `dependencies`，並且新增另一個 `package-lock.json` 檔案。
- `xxx` 套件的最新版本為 `1.0.0` 時，`package.json` 的 `dependencies` 會以範圍格式記載 `"xxx": "^1.0.0"`，亦即適用以 1 開頭的最新版本檔案，然而若是已經推播最新版本 `yyy` 含有漏洞亦或問題，直接使用 `npm install` 會難以重現開發環境
- 雖然 `package-lock.json` 存有該次建構時的確切版本，但 `npm install` 會覆寫 `package-lock.json` 裡的版本紀錄，若是需要以建構環境時的套件版本為主，需改用 `npm ci`，便會以 `package-lock.json` 為主要參照來源。
- 想更新 `package-lock.json` 時則直接使用 `npm install` 或 `npm update`。
- [Composer 與 NPM 指令 install 與 update 的差異｜ SoarLin's blog](https://soarlin.github.io/2017/04/21/Composer-NPM-install-update/)

## Gulp

[Gulp](https://gulpjs.com/) 是一套任務管理工具，可將工作流程自動化，例如自動重新整理網頁、編譯 SASS、檢查程式碼、壓縮 CSS 與 JavaScript 或圖片檔案等等，亦可自訂所需的處理內容。

### 安裝

Gulp 運行於 node.js 底下，因此需先安裝 node.js 與 npm。

1. `npm install --global gulp-cli`：安裝 gulp-cli
2. 開啟需使用 gulp 的專案資料夾
3. `npm init`：初始化專案資料夾
4. `npm install --save-dev gulp`：安裝 gulp package
5. `gulp --version`：確認安裝的 gulp 版本

## Webpack

[Webpack](https://webpack.js.org/) 是一套模組整合工具，可以打包零散的 JavaScript 模組，以及解決舊瀏覽器不支援新語法的問題，以利於後續管理與維護。

亦可將各種靜態資源，例如 JavaScript 、CSS、SASS、圖片檔案視為模組，透過各種 loader 轉換與載入資源，最後由 webpack 打包、最佳化成為 JavaScript 檔。

### 安裝

1. 開啟需使用 webpack 的專案資料夾
2. `npm init`：初始化專案資料夾
3. `npm install --save-dev webpack webpack-cli`：安裝 webpack package
