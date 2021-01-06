---
title: "前端筆記 (7) 網頁測試"
date: 2019-07-18T07:16:11.000Z
published: 2019-07-18T07:16:11.000Z
author: f6bfb5
summary:
layout: blog
---

- [前端工程師在 GitHub 上持續整合與部署(CI/CD)](https://medium.com/yusong-blog/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%9C%A8github%E4%B8%8A%E6%8C%81%E7%BA%8C%E6%95%B4%E5%90%88%E8%88%87%E9%83%A8%E7%BD%B2-ci-cd-9735f622ae68)
- [Chrome の拡張機能を 2 つ使うだけでブラウザの操作を自動化！？ - Qiita](https://qiita.com/Daara_y/items/4f006ead604e015186dc)
- [Web スクレイピングの注意事項一覧 - Qiita](https://qiita.com/nezuq/items/c5e827e1827e7cb29011)
- [Python Web スクレイピング テクニック集「取得できない値は無い」JavaScript 対応@追記あり 6/12 - Qiita](https://qiita.com/Azunyan1111/items/b161b998790b1db2ff7a)
- [六角學院線上分享單元測試 QA 區](https://hackmd.io/Jsn8miqHQdWUUdqgrIc9Cg)
- [step-by-step-unit-testing](https://github.com/ms314006/step-by-step-unit-testing)

## 1. [Selenium](https://selenium.dev/)

## 2. [Jest](https://jestjs.io/)

### 安裝

`npm install --save-dev jest`
`yarn add puppeteer jest`

### 使用

`util.test.js`

`test()` 是 Jest 提供的 function，
第一個參數為文字敘述，第二個參數則是傳入一個 function
`expect()` 是傳入要接受測試的函式
`toBe()` 是預期得到的結果

`npm run jest`: 測試所有的測試檔案
`npm run jest [檔案]`: 測試指定檔案

### 參考

- [十分鐘上手前端單元測試 - 使用 Jest](https://wcc723.github.io/development/2020/02/02/jest-intro/)
- [Jest | 讓 Jest 為你的 Code 做測試-基礎用法教學](https://medium.com/enjoy-life-enjoy-coding/%E8%AE%93-jest-%E7%82%BA%E4%BD%A0%E7%9A%84-code-%E5%81%9A%E5%96%AE%E5%85%83%E6%B8%AC%E8%A9%A6-%E5%9F%BA%E7%A4%8E%E7%94%A8%E6%B3%95%E6%95%99%E5%AD%B8-d898f11d9a23)

## 3. [Cypress.io](https://www.cypress.io/)

## 4. [Storybook](https://storybook.js.org/)

## 5. [Nightwatch](https://nightwatchjs.org/)

## 6. [Puppeteer](https://github.com/puppeteer/puppeteer)

### 簡介

Puppter 是由 Google Chrome 官方團隊所推出的無界面 (Headless) Chrome 工具，是一套 Node 的 Library，提供 API 透過 DevTools Protocol 控制無介面的 Chrome，亦可透過調整參數使用完整版的 Chrome。

常見用途：

- 產生網頁頁面的截圖或 PDF 檔
- 抓取 Single Page Application 產生預覽內容 (Server-Side Rendering)
- 從網站上抓取想要的內容
- 自動送出表單、測試 UI、控制輸入
- 建構自動化測試環境

### 安裝

`yarn add puppeteer`
`npm i puppeteer`

### 使用

```js
const puppeteer = require('puppeteer')
const url = ''

(async() => {
  const browser = await.puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  // action here...

  await browser.close()
})
```

#### 可進行操作

截圖: `await page.screenshot({path: 'screenshot.png'})`

只截取特定部份:

```js
const element = await page.$('h1')
await element.screenshot({path: 'screenshot_h1.png})
```

執行 JS:

```js
await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  h1.textContent = "hoge";
});
```

點擊: `await page.click('.button_element')`

```js
let button_element = await page.$(".button_element");
await button_element.click();
```

等待: `await page.waitForNavigation({waitUntil: 'domcontentloaded'})`
`await page.waitFor('.lazy')`
`await page.waitFor(5000)`

取得 DOM 樹:

```js
const bodyHandle = await page.$('body')
const html = await.page.evaluate(body => body.innerHTML.bodyHandle)
console.log(html);
```

### 參考

- [Puppeteer v2.1.1 API](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
- [Puppeteer でできることまとめ](https://techblog.gmo-ap.jp/2018/12/28/puppeteer%E3%81%A7%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%93%E3%81%A8%E3%81%BE%E3%81%A8%E3%82%81/)
- [Day 17 Puppeteer API 介紹 - class: Page method part 3 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10202445)
- [うるるを Puppeteer でスクレイピングしてみた](https://qiita.com/KawamotoShuji/items/878ae659a5c6e540343e)
- [puppeteer での要素の取得方法](https://qiita.com/go_sagawa/items/85f97deab7ccfdce53ea)
- [Puppeteer：模拟浏览器操作行为的利器](https://github.com/chenxiaochun/blog/issues/38)
- [Medium 爬蟲進化史](https://blog.techbridge.cc/2019/07/13/medium-crawler/)
- [Puppeteer 爬蟲常用技巧](https://blog.typeart.cc/using-puppeteer-crawler-common-skills/)
- [puppeteer/block-images.js at main · puppeteer/puppeteer](https://github.com/puppeteer/puppeteer/blob/main/examples/block-images.js)
- [puppeteer/api.md at main · puppeteer/puppeteer](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagesetrequestinterceptionvalue)

## 文章

- [\[閒聊\] 笑談軟體測試的幾個階段（一） - 看板 Soft_Job - 批踢踢實業坊](https://www.ptt.cc/bbs/Soft_Job/M.1332567899.A.C00.html)
- [\[閒聊\] 笑談軟體測試的幾個階段（二） - 看板 Soft_Job - 批踢踢實業坊](https://www.ptt.cc/bbs/Soft_Job/M.1332601969.A.342.html)
- [\[閒聊\] 笑談軟體測試的幾個階段（三） - 看板 Soft_Job - 批踢踢實業坊](https://www.ptt.cc/bbs/Soft_Job/M.1332681709.A.EB4.html)
- [\[閒聊\] 笑談軟體測試的幾個階段（四） - 看板 Soft_Job - 批踢踢實業坊](https://www.ptt.cc/bbs/Soft_Job/M.1332697283.A.630.html)
- [\[閒聊\] 笑談軟體測試的幾個階段（五） 測試權重 - 看板 Soft_Job - 批踢踢實業坊](https://www.ptt.cc/bbs/Soft_Job/M.1332863702.A.076.html)
- [\[心得\] 笑談軟體測試的幾個階段（六） 歷史代碼 - 看板 Soft_Job - 批踢踢實業坊](https://www.ptt.cc/bbs/Soft_Job/M.1597938487.A.566.html)
