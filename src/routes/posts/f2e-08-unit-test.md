---
title: "前端筆記 (8) 網頁測試"
date: 2019-07-18T07:08:00.000Z
summary:
tags: F2E
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

#### 撰寫

`util.test.js`

- `test()` 是 Jest 提供的 function，第一個參數為文字敘述，第二個參數則是傳入一個 function
- `expect()` 是傳入要接受測試的函式
- `toBe()` 是預期得到的結果

#### 執行

`npm run jest`: 測試所有的測試檔案
`npm run jest [檔案]`: 測試指定檔案

### 參考

- [十分鐘上手前端單元測試 - 使用 Jest](https://wcc723.github.io/development/2020/02/02/jest-intro/)
- [Jest | 讓 Jest 為你的 Code 做測試-基礎用法教學](https://medium.com/enjoy-life-enjoy-coding/%E8%AE%93-jest-%E7%82%BA%E4%BD%A0%E7%9A%84-code-%E5%81%9A%E5%96%AE%E5%85%83%E6%B8%AC%E8%A9%A6-%E5%9F%BA%E7%A4%8E%E7%94%A8%E6%B3%95%E6%95%99%E5%AD%B8-d898f11d9a23)

## 3. [Cypress](https://www.cypress.io/)

## 4. [Storybook](https://storybook.js.org/)

## 5. [Nightwatch](https://nightwatchjs.org/)

## 6. [Puppeteer](https://github.com/puppeteer/puppeteer)

### 簡介

Puppter 是由 Google Chrome 官方團隊所推出的無界面（Headless）Chrome 工具，是一套 Node 的 Library，提供 API 讓使用者可以透過 DevTools Protocol 控制無介面的 Chrome，亦可透過調整參數使用完整版的 Chrome。

常見用途：

- 產生網頁頁面的截圖或 PDF 檔
- 抓取 Single Page Application 產生預覽內容 (Server-Side Rendering)
- 從網站上抓取想要的內容
- 自動送出表單、測試 UI、控制輸入
- 建構自動化測試環境

### 安裝

```bash
npm i puppeteer
# or use yarn
yarn add puppeteer
```

### 使用

使用方式相當簡單，安裝完 puppeteer 的套件之後，將相關的程式碼寫進一支 js 檔案裡，並直接使用 Node.js 執行便可使用：`node example.js`

#### 基礎使用

```js
// 引入 puppeteer
const puppeteer = require('puppeteer')
const url = ''

(async() => {
  // 啟動 puppeteer
  const browser = await.puppeteer.launch({
    // 使用背景模式執行
    headless: true,
  });
  // 開啟新分頁
  const page = await browser.newPage();
  // 前往頁面
  await page.goto(url);

  // action here...

  // 關閉 puppeteer
  await browser.close()
})

// 也可以使用 then 撰寫
puppeteer.launch({ headless: false }).then(async browser => {
  const page = await browser.newPage();
  await page.goto(url);
  // action here...
  await browser.close();
})
```

`launch` 裡面可以使用諸多參數，調整瀏覽器的細部運作設定，例如：

- `headless: [boolean]`：是否以背景模式執行瀏覽器
- `useDataDir: [string]`：儲存使用者的相關資料
- `slowMo: [number]`：設定每個操作的延遲毫秒數
- `args: [array[string]]`：設定傳入給瀏覽器的相關參數
- `timeout: [number]`：等待瀏覽器啟動的時間長度
- `devtools: [boolean]`：啟動後是否開啟開發者工具列，啟用此選項時 `headless` 必須為 `true`

#### 獲取節點

網頁最常見的操作是，我們會專注於某個節點上，例如一個連結、按鈕，或是一個文字輸入框、一段文字內容，在 puppeteer 裡，我們可以透過類似 jQuery 的寫法來取得網頁節點。

```javascript
// 取得 DOM
await page.$(".listItem ul li");

// 取得 DOM 裡的值
const target = await page.$(".listItem ul li");
const targetText = await page.evaluate(
  (_target) => _target.textContent,
  target
);
// 等同於
const targetText = await page.$eval(".listItem ul li", (el) => el.textContent);
// 也可以取得 DOM 的其它屬性，例如 HTML 內容，或是連結網址
const targetText = await page.$eval(".listItem ul li", (el) => el.innerHTML);
const href = await page.$eval(".btn-download", (el) => el.getAttribute("href"));

// 取得所有節點
const targets = await page.$$("a");
// 同樣可以結合 evaluate 使用，但傳入的是 DOM 陣列，需要再做一次迭代處理
const targets = await page.$$eval("a", (els) => els.map((el) => el.innerHTML));
```

#### 操作節點

在拿到節點之後，我們就可以進行相應操作，例如點擊按鈕、輸入文字，或是取得節點內容、下載檔案、截圖等等。

```javascript
// 輸入內容
await page.type("#email", "example@example.com");

// 點擊元素
await page.click("#loginButton");

const agreeButton = await page.$(".btn-input");
await agreeButton.click({ clickCount: 1, delay: 100 });

// 截圖頁面
await page.screenshot({ path: "screenshot.png" });

// 截圖指定元素
const element = await page.$("h1");
await element.screenshot({ path: "screenshot_h1.png" });
```

#### 等待頁面

由於網頁操作常會出現非同步的狀況，例如點擊同意使用規約之後，網頁會自行跳轉，puppeteer 有一系列與等待相關的 function：

- `page.waitFor(selector/function/timeout[, options[, args]])`：等待 selector 出現／function 執行完畢／時間過後，才執行後面動作
- `page.waitForNavigation(options)`：等待頁面跳轉完，才執行後面動作，通常會用於點擊連結或同意使用者規約等等頁面會發生跳轉的行為之後
- `page.waitForSelector(selector[, options])`：等待至元素出現，才執行後面動作
- `page.waitForRequest(url/predicate, options)`：等待 request 處理完畢
- `page.waitForResponse(url/predicate, options)`：等待獲得 response

```javascript
// 點擊同意按鈕
const agreeButton = await page.$(".btn-input");
await agreeButton.click({ clickCount: 1, delay: 100 });
// 點擊後網頁會自動跳頁，因此等待至跳轉完畢，再進行後續處理
await page.waitForNavigation({ waitUntil: "networkidle0" });
// some other execution...
```

#### 使用 cookie 登入

```javascript
const fs = require("fs");

// 從本地端讀取 oookie 檔案
const cookies = JSON.parse(fs.readFileSync("./cookies.json", "utf-8"));
await page.setCookie(...cookies);
```

#### 儲存檔案

puppeteer 裡只有提供截圖功能，並沒有下載檔案的 function（之前似乎有個 `page.setDownloadBehavior` 或 `browser.setDownloadBehavior`？），想要下載檔案的話，需要再搭配 `fs`，以及 `$eval` 使用。

```javascript
const fs = require("fs");

// 取得檔案連結
const href = await page.$eval(".btn-download", (anchor) =>
  anchor.getAttribute("href")
);
// 取得檔案名稱
const split = href.split("/");
let filename = split[split.length - 1];
// 取得檔案資料
let bufferData = await page.goto(href);
// 使用 fs 下載檔案
fs.writeFileSync(
  "./download/" + filename,
  await bufferData.buffer(),
  function (err) {
    if (err) {
      throw err;
    }
    console.log("File saved!");
  }
);
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
