---
title: "前端筆記 (4) 自動化工具"
date: 2019-07-18T07:04:00.000Z
---

為了簡化各種工作，開發前端也有許多自動化工具可使用，例如自動化工作流程的 gulp，以及整合、打包模組的 webpack。

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
