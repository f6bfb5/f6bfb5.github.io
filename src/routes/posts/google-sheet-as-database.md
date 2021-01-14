---
title: "使用 Google Sheet 做為資料庫使用"
date: 2020-07-23T00:40:12.000Z
published: 2020-07-23T00:40:12.000Z
author: f6bfb5
summary: "Google 所提供的 Sheet API 可以直接將 Sheet 內容轉換成 JSON 格式輸出，亦可接受從外部傳進資料，修改 Sheet 裡的內容，並且都有提供 CORS 支援，可以免於處理跨域的困擾。"
layout: blog
---

Google 所提供的 Sheet API 可以直接將 Sheet 內容轉換成 JSON 格式輸出，
<br>亦可接受從外部傳進資料，修改 Sheet 裡的內容，
<br>並且都有提供 CORS 支援，可以免於處理跨域的困擾。

本文整理了兩種使用方式：

1. 直接串現有的 API 純讀取
2. 透過 Google Apps Script 讀取與寫入

## 1. 純讀取（Google Sheets Only）

### 表單處理

1. 開啟 Google 表單檔案
2. 點擊「檔案（File）」
   <br>├ →「發佈到網路（Publish to the web）」
   <br>├ → 挑選要發佈的 Sheet，或是發佈整份文件
   <br>└ →「發佈（Publish）」將此表單公開
3. 複製表單網址裡 `[sheet-id]` 的部份
   <br>├ （注意：不是發佈頁面的連結網址，是原始 Sheet 的網址）
   <br>└ `https://docs.google.com/spreadsheets/d/[sheet-id]/`
4. 將 `[sheet-id]` 貼進下方 Spreadsheets Data API 網址裡的對應處
   <br>├ `https://spreadsheets.google.com/feeds/cells/[sheet-id]/[sheet-index]/public/values?alt=json`
   <br>├ or `https://spreadsheets.google.com/feeds/list/[sheet-id]/[sheet-index]/public/values?alt=json`
   <br>└ 預設格式為 xml，我們在後面加上 `?alt=json` 改為取得 JSON 格式的資料
5. `[sheet-index]` 可以指定想要取用整份表單裡的第幾個分頁，
   <br>├ 在一些相關文章裡會看到這邊填上 `od6`，
   <br>│ 這個用法看起來是 API 的預設值，
   <br>│ 我們可以改為直接填上需要的頁數數字即可
   <br>├ 如: `https://spreadsheets.google.com/feeds/cells/[sheet-id]/1/public/values?alt=json`
   <br>└ 這就是我們需要的資料庫網址了

### 接入網頁

我們從 GET 取得的原始資料內容結構為（僅截取較常用到的資訊）：

```json
{
  "version": "1.0",
  "encoding": "UTF-8",
  "feed": {
    "xmlns": "http://www.w3.org/2005/Atom",
    ...
    "title": {
      "type": "text",
      "$t": "Sheet1"
    },
    "link": [...],
    ...
    "entry": [
      {
        "id": {...},
        ...
      },
      "content": {
        "type": "text",
        "$t": "content"
      },
      "link": [...],
      "gs$cell": {
        "row": "1",
        "col": "1",
        "$t": "content"
      },
      ...
    ]
  }
}
```

主要儲存的內容在 `feed.entry.content` 或 `feed.entry.gs$cell` 裡

我使用的是 `axios` 搭配 `vue` 和 `Bootstrap`
<br>以 `loading` 判斷於資料讀取完畢前顯示讀取動畫

```html
<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else v-for="entry in entries">{{ entry.content.$t }}</div>
    </div>
  </div>
</template>

<script>
  new Vue({
    el: "#app",
    data() {
      return {
        entries: null,
        loading: true,
        error: false,
      };
    },
    mounted() {
      axios
        .get(
          "https://spreadsheets.google.com/feeds/cells/[sheet-id]/1/public/values?alt=json"
        )
        .then((res) => (this.entries = res.data.feed.entry))
        .catch((err) => {
          console.log(err);
          this.error = true;
        })
        .finally(() => (this.loading = false));
    },
  });
</script>
```

可以再搭配 `filter()` 單獨取得每一行（row）資料：

```javascript
let rowData = [];
let rowIndex = 1;
entry
  .filter((item) => item.gs$cell.row == rowIndex)
  .forEach((item) => rowData.push(item.content.$t));
```

或是每一列（col）資料：

```javascript
let colData = [];
let colIndex = 1;
entry
  .filter((item) => item.gs$cell.col == colIndex)
  .forEach((item) => colData.push(item.content.$t));
```

完成！

## 2. 讀取 + 寫入（Google Sheets + Google Apps Script）

### 簡介

1. 開啟 Google 表單檔案
2. 點擊「工具（Tools）」
   <br>└ →「指令碼編輯器（Script editor）」
3. 撰寫 GAS 上的處理 function
   <br> GAS 預設以
   <br>├ `doGet` function 處理 GET 要求
   <br>└ `doPost` function 處理 POST 要求
4. 點擊「發佈（Publish）」
   <br>├ →「部署為網路應用程式…（Deploy as web app...）」
   <br>├ →「將應用程式執行為（Execute the app as）」選擇「我（Me）」
   <br>├ →「具有應用程式存取權的使用者（Who has access to the app）」
   <br>│ 選擇「任何人，甚至匿名使用者（Anyone, even anonymous）」
   <br>├ →「部署（Deploy）」→「核對權限」→ 選擇授權用的 Google 帳號
   <br>├ →「進階」→「前往（此應用程式名稱）」→ 允許
   <br>└ → 此 app URL 即為讀取與寫入用的網址
5. （※重要）更新 GAS 程式後，在重新發佈時「專案版本（Project version）」要選擇「新增（New）」
   <br>├ 既有數字是之前點擊發佈時的版本的程式碼，不會反應最新的修改內容
   <br>└ 改動後一定要選擇「新增」專案版本，才會有效反應
6. 撰寫網頁部份處理 function

### Google App Script

```javascript
// 複製 Sheet 網址裡 [sheet-id] 的部份
// https://docs.google.com/spreadsheets/d/[sheet-id]/
const SpreadSheetID = "";
// 下方的表單名稱
const sheetName = "";

function doGet(e) {
  const params = e.parameter;
  const SpreadSheet = SpreadsheetApp.openById(SpreadSheetID);
  const Sheet = SpreadSheet.getSheetByName(sheetName);

  // default wouldn't return category row (the first row)
  const row = params.row ? params.row : 2;
  const col = params.col ? params.col : 1;
  let rowRange =
    params.endRow && params.row
      ? params.endRow - params.row + 1
      : Sheet.getLastRow() - 1;
  let colRange =
    params.endCol && params.col
      ? params.endCol - params.col + 1
      : Sheet.getLastColumn();
  if (rowRange > Sheet.getLastRow()) rowRange = Sheet.getLastRow() - 1;
  if (colRange > Sheet.getLastColumn()) colRange = Sheet.getLastColumn();

  const data = Sheet.getSheetValues(row, col, rowRange, colRange);

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doPost(e) {
  const params = e.parameter;
  const SpreadSheet = SpreadsheetApp.openById(SpreadSheetID);
  const Sheet = SpreadSheet.getSheetByName(sheetName);
  const NewRow = Sheet.getLastRow() + 1;

  // customize data key here
  const dataKey = ["data"];

  // add Timestamp in the first column
  Sheet.getRange(NewRow, 1)
    .setValue(new Date())
    .setNumberFormat("yyyy/MM/dd hh:mm");

  // add data by keys to the last row
  dataKey.forEach((key, i) => {
    Sheet.getRange(NewRow, i + 2).setValue(params[key]);
  });

  return ContentService.createTextOutput("POST success");
}
```

GAS 有三種回傳資料的方式

1. 回傳字串

`return ContentService.createTextOutput("GET 回傳字串");`

2. 回傳 HTML

`return HtmlService.createHtmlOutput(HTMLString);`

3. 回傳 JSON

```javascript
const JSONString = JSON.stringify(result);
return ContentService.createTextOutput(JSONString).setMimeType(
  ContentService.MimeType.JSON
);
```

### 網頁取得

#### Fetch

```javascript
// 上面步驟取得的網址
const appUrl = "";

fetch(appUrl, {
  method: "GET",
})
  .then((respons) => {
    // GAS 回傳資料為 JSON 格式時
    return respons.json();
  })
  .then((respons) => {
    // response data here
    console.log(respons);
  })
  .catch((error) => {
    console.log(error);
  });
```

也可以搭配 `URLSearchParams` 傳入參數，做進一步的取得處理
參數會傳至 GAS 中的 `e.parameter` 裡

```javascript
// 上面步驟取得的網址
const appUrl = new URL("");
const params = {
  action: "getAll",
};
appUrl.search = new URLSearchParams(params).toString();

fetch(appUrl, {
  method: "GET",
})
  .then((respons) => {
    // GAS 回傳資料為 JSON 格式時
    return respons.json();
  })
  .then((respons) => {
    // response data here
    console.log(respons);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### jQuery

```javascript
const appUrl = '';

$.get(appUrl + "?action=getAll",
  function(e) {
    console.log(e);
  }
);

$.post(appUrl, {
    action: 'create',
    data: 'Hello World!',
  },
  function(e) {
      console.log(e);
  }
);

$.ajax({
    type: "post",
    url: appUrl,
    data: {
      action: 'create',
      data: 'Hello World!',
    },
    success: function(e) {
      console.log(e);
    }
  });
}
```

### 網頁傳送

```javascript
const appUrl = "";
const params = {
  action: "create",
  data: "Hello World!",
};

fetch(appUrl, {
  method: "POST",
  body: JSON.stringify(params),
});
```

### 參考文章

- [寫給純前端，讓 Google Sheets 當你的後端完成寫入功能 | by Lai | UnaLai | Medium](https://medium.com/unalai/%E5%AF%AB%E7%B5%A6%E7%B4%94%E5%89%8D%E7%AB%AF-%E8%AE%93-google-sheets-%E7%95%B6%E4%BD%A0%E7%9A%84%E5%BE%8C%E7%AB%AF%E5%AE%8C%E6%88%90%E5%AF%AB%E5%85%A5%E5%8A%9F%E8%83%BD-715799e5e013)
- [Google 試算表 ( 前後端實作 ) - Webduino 實戰智慧插座教學](https://tutorials.webduino.io/zh-tw/docs/socket/useful/google-sheet-2.html)
- [盤點各種線上協作資料(庫)方案 - g0v.hackpad.tw](https://g0v.hackpad.tw/5Ofw64qSz7P#:h=Google-Spreadsheet)
