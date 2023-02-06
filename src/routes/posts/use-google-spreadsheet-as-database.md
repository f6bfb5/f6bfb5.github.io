---
title: "使用Google Sheet作為資料庫"
date: 2022-07-23T15:41:12.000Z
summary: ""
tags: F2E, Toolbox
---

## 介紹

- Google 的 Sheet API 可以直接將 Sheet 內容轉換成 JSON 格式輸出
- 亦可從外部傳進資料，修改 Sheet 裡的內容
- 並有提供 CORS 支援，可免於處理跨域的困擾

## 實作

### 1. [純讀取] Spreadsheets Data API

- 發佈表單
  - 「檔案（File）」
  - 「發佈到網路（Publish to the web）」
  - 選擇要發佈的 Sheet／發佈整份文件
  - 點擊「發佈（Publish）」
- 複製原始表單網址裡 `[sheet-id]` 的部份
  - `https://docs.google.com/spreadsheets/d/[sheet-id]/`
  - 注意：不是發佈頁面的連結網址，是**表單的網址**
- 從 API 取得資料
  - 將 `[sheet-id]` 貼至 Spreadsheets Data API 網址裡的對應處
  - `https://spreadsheets.google.com/feeds/cells/[sheet-id]/[sheet-index]/public/values?alt=json`
  - `https://spreadsheets.google.com/feeds/list/[sheet-id]/[sheet-index]/public/values?alt=json`
    - 預設格式為 xml，在後面加上 `?alt=json` 改為取得 JSON 格式
  - `[sheet-index]` 可以指定要取得表單裡的哪個分頁
  - ex: `https://spreadsheets.google.com/feeds/cells/[sheet-id]/1/public/values?alt=json`
    - `od6` 似乎是 API 的預設值？
- 主要內容在 `feed.entry.content` 或 `feed.entry.gs$cell` 裡

資料結構：

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

### 2. [可讀寫] Google Apps Script

- 建立 GAS 檔案
  - 「Extensions」
  - 「指令碼編輯器（Script editor）」
    - 現在改成了「Apps Script」
- 撰寫 GAS
  - 預設以 `doGet()` 處理 GET 要求、`doPost()` 處理 POST 要求
  - 詳見下方範例
- 發佈 API
  - 「Deploy」
  - 「Select type」
    - 「網路應用程式（web app）」
  - 「Description」
    - 發佈註解
  - 「將應用程式執行為（Execute the app as）」
    - **「我（Me）」**
  - 「具有應用程式存取權的使用者（Who has access to the app）」
    - **「任何人，甚至匿名使用者（Anyone, even anonymous）」**
  - 「部署（Deploy）」
    - 「核對權限（Authorize access）」
    - 選擇授權用的 Google 帳號
    - 「進階（Advanced）」
    - 「前往 `此應用程式名稱`（Go to `[web app name]` (unsafe)）」
    - 「允許（Allow）」
  - 「Web app」底下的「URL」即為讀取與寫入用的網址
    - 之後也可以從「Deploy」→「Manage deployments」裡查詢
  - 開發時可善用「Test deployments」
- 若有更改程式
  - 部署時「專案版本（Project version）」要選擇「新增（New）」
  - 既有數字是之前發佈的版本，不會反應最新的修改內容
  - **改動後一定要選擇「新增」專案版本，才會有效反應**
- 表單資料格式
  - 要注意 Google Sheet 預設會自動轉換各種資料
    - 例如 `0123` 會被轉換成數值後，變成 `123`
  - 推薦事先點選表單左上角格全選後，將格式設為「純文字（Plain text）」
  - Google Sheet 的最大可儲存量為 1000 萬格資料
    - 最大行數為 18278 行
    - 一次可新增 40000 列
    - 字串上限長度為 50000 字元
    - 詳細限制可參考 [Google Drive Help](https://support.google.com/drive/answer/37603)

<details>
  <summary>範例程式</summary>

```javascript
// Sheet 網址裡 [sheet-id] 的部份
// https://docs.google.com/spreadsheets/d/[sheet-id]/
// 
//            col1 col2
// row1 ---->  |    |
// row2 ---->  |    |
//             v    v

const SpreadSheetID = "";
const SpreadSheet = SpreadsheetApp.openById(SpreadSheetID);

// simpilify output function
function textOutput(obj, mimeType = "JSON") {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType[mimeType]
  );
}

function getSheet(sheetName) {
  return SpreadSheet.getSheetByName(sheetName);
}

// ----------
// doGet
// ----------

function getAllSheetData(sheetName) {
  const Sheet = getSheet(sheetName);

  // getSheetValues(startRow, startColumn, numRows, numColumns)
  //
  // the first row is category,
  // so row starts from 2
  //
  // and if the first row is not needed,
  // the result length would be full length -1
  //
  return Sheet.getSheetValues(
    2,
    1,
    Sheet.getLastRow() - 1,
    Sheet.getLastColumn()
  );
}

function getSheetDataByRange(sheetName, range) {
  const Sheet = getSheet(sheetName);

  // wouldn't return category row (the first row) by default
  const startRow = range.startRow ? range.startRow : 2;
  const startCol = range.startCol ? range.startCol : 1;

  let rowRange =
    range.endRow && range.startRow
      ? range.endRow - range.startRow + 1
      : Sheet.getLastRow() - 1;
  let colRange =
    range.endCol && range.startCol
      ? range.endCol - range.startCol + 1
      : Sheet.getLastColumn();
  if (rowRange > Sheet.getLastRow()) rowRange = Sheet.getLastRow() - 1;
  if (colRange > Sheet.getLastColumn()) colRange = Sheet.getLastColumn();

  const data = Sheet.getSheetValues(startRow, startCol, rowRange, colRange);
  return data;
}

// columnsArray [2, 5]
// would return
//   {
//     2: [ ['col2_cell1'], ['col2_cell2'], ['col2_cell3'] ],
//     5: [ ['col5_cell1'], ['col5_cell2'], ['col5_cell3'] ]
//   }
function getSheetDataBySpecificColumns(sheetName, columnsArray) {
  const Sheet = getSheet(sheetName);
  const data = {};
  columnsArray.forEach((column) => {
    // skip the first row
    data[column] = Sheet.getSheetValues(2, column, Sheet.getLastRow(), 1);
  });
  return data;
}

function doGet(e) {
  // accept object as parameter
  const params = e?.parameter;
  if (!params) {
    return textOutput({ response: "200" });
  }

  // you can customize what value to use for different execution
  // and the object key name
  // like params.exec or case "getAllData"
  switch (params.action) {
    case "getAll":
      return textOutput(getAllSheetData("Sheet1"));
      break;
    case "getSpecificColumns":
      // accept array-like input and parse it
      return textOutput(
        getSheetDataBySpecificColumns("Sheet1", JSON.parse(params.columnsArray))
      );
      break;
    default:
      return textOutput({ response: "200" });
      break;
  }
}

// ----------
// doPost
// ----------

function appendSheetRow(sheetName, newRowData) {
  const Sheet = getSheet(sheetName);
  const newRow = Sheet.getLastRow() + 1;
  // accept numeric key as row-col index
  // for example,
  // data: { 1: "Cell 1 data", 2: "Cell 2 data", 3: "Cell 3 data" }
  // would save to the row by the key
  for (const [index, cellData] of Object.entries(newRowData)) {
    Sheet.getRange(newRow, index).setValue(cellData);
  }
}

function editSheetSpecificCell(sheetName, row, col, value) {
  getSheet(sheetName).getRange(row, col).setValue(value);
}

function deleteSheetRow(sheetName, row) {
  getSheet(sheetName).deleteRow(row);
}

function doPost(e) {
  // accept object as post data
  const postContents = JSON.parse(e?.postData.contents);
  if (!postContents) {
    return textOutput({ response: "200" });
  }

  // you can customize the key and value for different execution
  switch (postContents.action) {
    case "appendRow":
      // again, you can also customize the key and value for post data
      appendSheetRow("Sheet1", postContents.data);
      return textOutput({ response: "200" });
      break;
    case "editCell":
      editSheetSpecificCell(
        "Sheet1",
        postContents.row,
        postContents.col,
        postContents.data
      );
      return textOutput({ response: "200" });
      break;
    case "deleteRow":
      deleteSheetRow("Sheet1", postContents.row);
      return textOutput({ response: "200" });
    default:
      return textOutput({ response: "200" });
      break;
  }
}

// ----------
// onEdit
// ----------
// google apps script - onEdit trigger for specific sheets in a spreadsheet? - Stack Overflow
// https://stackoverflow.com/questions/49465608/onedit-trigger-for-specific-sheets-in-a-spreadsheet

function onEdit(e) {
  if (!e) {
    return;
  }

  const editedSheetName = e.range.getSheet().getName();
  if (editedSheetName != "SomeSheetName") {
    // some execution here
  }
}
```

</details>

## 參考文章

- [寫給純前端，讓 Google Sheets 當你的後端完成寫入功能](https://medium.com/unalai/%E5%AF%AB%E7%B5%A6%E7%B4%94%E5%89%8D%E7%AB%AF-%E8%AE%93-google-sheets-%E7%95%B6%E4%BD%A0%E7%9A%84%E5%BE%8C%E7%AB%AF%E5%AE%8C%E6%88%90%E5%AF%AB%E5%85%A5%E5%8A%9F%E8%83%BD-715799e5e013)
- [Google 試算表 (前後端實作)](https://tutorials.webduino.io/zh-tw/docs/socket/useful/google-sheet-2.html)
- [盤點各種線上協作資料(庫)方案 - g0v.hackpad.tw](https://g0v.hackpad.tw/5Ofw64qSz7P#:h=Google-Spreadsheet)

## GAS

- [SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)
- [Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
- [Web Apps](https://developers.google.com/apps-script/guides/web)
- 處理 GET
  ```javascript
  function doGet(e) {
    const target = e.parameter.target;
    getHandler(target);
  }
  ```
- 處理 POST
  ```javascript
  function doPost(e) {
    const parameter = JSON.parse(e.postData.contents);
    const target = parameter.target;
    postHandler(target);
  }
  ```
- 除了 `event.parameter` 之外，還有一個 `event.parameters`（多了 s）
  - 兩者傳入的內容結構會不同，詳細可見 [Web Apps](https://developers.google.com/apps-script/guides/web)
- 操作觸發處理
  - `onEdit(event)`
    - 想做進一步操作似乎會有權限問題…？
  - `Apps Script` 頁面左側的 `Triggers`
    - 可以解決權限問題
  - `Apps Script` 頁面左側的 `Executions` 可查看腳本執行是否正常
- GAS 的回傳資料格式
  - 字串：`return ContentService.createTextOutput("回傳字串");`
  - HTML：`return HtmlService.createHtmlOutput(HTMLString);`
  - JSON：
    ```javascript
    const JSONString = JSON.stringify(result);
    return ContentService.createTextOutput(JSONString).setMimeType(
      ContentService.MimeType.JSON
    );
    ```
- 從 GAS 獲取資料
  - GET 請求
  - 透過網址傳送參數
  - 參數傳到 `e.parameter`
  ```javascript
  const apiUrl = "";
  const action = "getSpecificColumns";
  const columnsArray = [1, 2, 3];
  // 若網址參數內有另外傳入結構式資料
  // 例如傳入陣列，須做 JSON.stringify()
  // GAS 處也要進行 JSON.parse() 處理
  const getParameter = `?action=${action}
  &columnsArray=${JSON.stringify(columnsArray)}`;

  await fetch(apiUrl + getParameter, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // 處理取得資料
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  ```
- 傳送資料至 GAS
  - POST 請求
  - 透過請求傳送資料
  - 資料傳到 `e.postData.contents`
  ```javascript
  const apiUrl = "";
  const postData = {
    action: "appendRow",
    data: {
      1: "some data to post",
    },
  };

  await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "text/plain;charset=utf-8",
    },
    redirect: "follow",
  });
  ```
- 讀取表單
  - SpreadSheet
    - `SpreadsheetApp.getActiveSpreadsheet()`
    - `SpreadsheetApp.openById(SpreadSheetID)`
  - Sheet
    - `Spreadsheet#getSheetByName(sheetName)`
    - `Spreadsheet#getSheets()[sheetIndex]`
  - Range
    - `Sheet#getRange(row, column)`
      - 表單的行與列起始座標值是 `1`，不是 `0`，須注意
    - `Sheet#getRange(row, column, numRows)`
    - `Sheet#getRange(row, column, numRows, numColumns)`
    - `Sheet#getRange(cellRangeNotation)`
      - ex: `getRange("A1:B2")`
    - `Range#getValues()`
      - ex. `const values = sheet.getRange("A1:C2").getValues();`
      - `const values = sheet.getRange("A1:C2").getValues().flat();`
    - `Sheet#getSheetValues(startRow, startColumn, numRows, numColumns)`
      - 表單的行與列起始座標值是 `1`，不是 `0`，須注意
- 寫入表單
  - Range
    - `Range#setValues(values)`
    - ```javascript
      const rowLength = array.length;
      const colLength = array[0].length;
      sheet.getRange(1, 1, rowLength, colLength).setValues(array);
      ```
- 建立觸發函式按鈕
  - Insert -> Drawing -> Shape 選擇任意圖案後輸入文字 -> Save and close
  - 右鍵點擊圖案 -> 點擊圖案右上角的三點圖示 -> Assign script -> 輸入要綁定的函式名稱（不需參數括弧）
- [Utilities](https://developers.google.com/apps-script/reference/utilities/utilities)
  - Timestamp
    - `Utilities.formatDate(new Date(), "Asia/Taipei", "顯示格式");`
    - 顯示格式
      - `年：y`
      - `月：M`
      - `日：d`
      - `時（12 小時制）：h`
      - `時（24 小時制）：H`
      - `分：m`
      - `秒：s`
      - `'yyyy/MM/dd/HH:mm'` → `2020/12/31/23:59`
  - Hash
    - `var md5bin = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, text);`
    - `var md5 = Utilities.base64Encode(md5bin);`
- Use library
  - Libraries > 貼上 script id > 追加
  - [Cheeriogs](https://github.com/tani/cheeriogs)
- Message Box
  - `if (Browser.msgBox("確認", "是否要執行？", Browser.Buttons.YES_NO) != "yes")`

### 撰寫 Discord Webhook

- 建立 Discord 獲取 Webhook 用的網址
  - 點擊 Discord 頻道右邊的齒輪鍵
  - 點擊 `Integrations` -> `Create Webhook` -> `Copy Webhook URL`
- 撰寫 GAS 的通知函式
  - [UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)
    - `UrlFetchApp.fetch(url[, params])`
  - params
    - `contentType`
    - `headers`
    - `method`
    - `payload`
  - response
    - `getContentText()`
    - `getHeaders()`
    - `getResponseCode()`
    - `getBlob()`

```javaScript
function sendToDiscord(message) {
  const url      = ''; // 上方建立的 Webhook 網址

  const token    = ''; // Webhook 網址後半的 token 部份
                       // * 未確認是否已不需要
  const channel  = '#general';
  const text     = message;
  const username = 'bot';
  const parse    = 'full';

  const method   = 'POST';

  const payload = {
    'token'     : token,
    'channel'   : channel,
    'content'   : text,
    'username'  : username,
    'parse'     : parse,
  };

  const params = {
    'method': method,
    'payload': payload,
    'muteHttpExceptions': true
  };

  response = UrlFetchApp.fetch(url, params);
}
```

### Unit Test

```javascript
function assert(cond) {
  if (cond !== true) throw 'NG'
}

function assertEquals(actual, expected) {
  if (actual !== expected) throw `NG: ${actual} !== ${expected}`
}

function assertThrows(func) {
  try {
    func();
  } catch (e) {
    Logger.log(e);
    return ;
  }
  throw 'NG: No expection.';
}
```

### Save as excel file

```javascript
var sheetID = "";
var fetchUrl =
  "https://docs.google.com/feeds/download/spreadsheets/Export?key=" +
  sheetID +
  "&amp;exportFormat=xlsx";

//OAuth
var fetchOpt = {
  headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
  muteHttpExceptions: true,
};

var xlsxFile = UrlFetchApp.fetch(fetchUrl, fetchOpt)
  .getBlob()
  .setName("filename.xlsx");
```

### 參考文章

- [google-apps-script-awesome-list](https://github.com/contributorpw/google-apps-script-awesome-list#parsing)
- [【GAS x Vue.js】JavaScript のみで今、家計簿をつくるとしたら【ハンズオン付き！】](https://qiita.com/matsu7089/items/6ea7931e97ae703f6607?utm_campaign=6922a8b5e9-Qiita_newsletter_419_07_15_2020&utm_term=0_e44feaa081-6922a8b5e9-34565689#%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-onget-%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B)
- [【初心者向け Tips】単純作業はもう嫌だ！GAS ツール作りの 4 つの技](https://qiita.com/hironobu-igawa/items/9b5c224d9bbe7b9843be)
- [Google Apps Script（GAS）を利用した業務改善](https://qiita.com/FUJIvillage/items/e22ad7efdf7fc898ffda)
- [Google Apps Script の割り当て値と制限値](https://qiita.com/mitonattou919/items/de415bb9302a52d52e2e)
- [GAS でライブラリを使う・作る方法](https://qiita.com/shikumiya_hata/items/5e11ff875a9dd050a722)
- [Google Apps Script + OAuth ライブラリで、freee API の操作を行う](https://qiita.com/TakeshiNickOsanai/items/62810b0e96bf37bd0eca)
- [法改正情報を早く確実にキャッチするために GAS で自動化するツールを作って運用してみた。](https://qiita.com/yamaguchi_yo/items/09bfc5c32faffa3beb62)
- [スクレイピングいろいろ](https://qiita.com/cyoi0129/items/1cafb446dbe176e9366e)
- [【Google Apps Script】トリガーによる定期実行の時間のズレをなくす方法](https://qiita.com/tapatyo/items/465a982635ba3933b32d)

## Google Charts

- QR Code
  - [QR 圖碼](https://developers.google.com/chart/infographics/docs/qr_codes)
  - 可以透過網址請求即時取得 QR Code 的圖片
  - `https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl=`[內容文字]
    - ![google charts qr code example](https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl=example)
  - 但此 API 已不再維護，隨時都可能無法再使用

## [番外？] 客製化 Google Form

- 使用 Google Form 製作好和需求相同形式的表單
- 點擊右上預覽表單
- 開啟開發者工具
- 尋找 `<form>` 標籤的 `action` 屬性中的傳送表單網址
  - `action=[表單網址]`
  - `https://docs.google.com/forms/u/0/d/e/xxxxxxx/formResponse`
- 尋找所有提問的 id
  - `name=[提問 ID]`
  - 通常為 `entry.xxxxxxx`，可使用此關鍵字快速搜尋
- 另外撰寫表格網頁，將傳送行為綁定至自訂的傳送按鍵上

### 參考文章

- [独自フォームと Google フォームを連携してかっこよくスマートにアンケート回収する](https://qiita.com/inoue2002/items/78dac54dba93ea4a087a)
- [【2020 年最新版】カスタマイズしたフォームから JavaScript で Google フォームに回答を送信](https://qiita.com/Robot-Inventor/items/56e2b7b69760d045fad3)
- [【GAS】自動返信機能付き Google フォームの作り方](https://valmore.work/auto-response-from-google-form/)
- [GoogleフォームとGASを使って利便性高くセキュアな共有ドライブ運用を作る](https://zenn.dev/howdy39/articles/066bb145b8f247)
