---
title: "Google App Script 筆記"
date: 2020-08-25T03:21:09.000Z
summary:
tags: F2E, Google
---

- [contributorpw/google-apps-script-awesome-list: The usual list of links to interesting resources for Google Apps Script](https://github.com/contributorpw/google-apps-script-awesome-list#parsing)
- [【GAS x Vue.js】JavaScript のみで今、家計簿をつくるとしたら【ハンズオン付き！】 - Qiita](https://qiita.com/matsu7089/items/6ea7931e97ae703f6607?utm_campaign=6922a8b5e9-Qiita_newsletter_419_07_15_2020&utm_term=0_e44feaa081-6922a8b5e9-34565689#%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-onget-%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8B)
- [【初心者向け Tips】単純作業はもう嫌だ！GAS ツール作りの 4 つの技 - Qiita](https://qiita.com/hironobu-igawa/items/9b5c224d9bbe7b9843be)
- [Google Apps Script（GAS）を利用した業務改善 - Qiita](https://qiita.com/FUJIvillage/items/e22ad7efdf7fc898ffda)
- [Google Apps Script の割り当て値と制限値 - Qiita](https://qiita.com/mitonattou919/items/de415bb9302a52d52e2e)

## GET / POST

```javascript
function doGet(e) {
  const target = e.parameter.target;
  getHandler(target);
}
```

```javascript
function doPost(e) {
  const parameter = JSON.parse(e.postData.contents);
  const target = parameter.target;
  postHandler(target);
}
```

## Sheet Handler

### Read

- `SpreadsheetApp.getActiveSpreadsheet()`
- `Spreadsheet#getSheetByName(name)`
- `Sheet#getRange(row, column)`
- `Sheet#getRange(row, column, numRows)`
- `Sheet#getRange(row, column, numRows, numColumns)`
- `Sheet#getRange(cellRangeNotation)`
  <br>└ ex: `getRange("A1:B2")`
- `Range#getValues()`
  <br>│ ex. `const values = sheet.getRange("A1:C2").getValues();`
  <br>└ `const values = sheet.getRange("A1:C2").getValues().flat();`

### Write

- `Range#setValues(values)`

#### 寫入整個陣列內容

```javascript
const rowLength = array.length;
const colLength = array[0].length;
sheet.getRange(1, 1, rowLength, colLength).setValues(array);
```

### Edit Trigger

```javascript
function onEdit(e) {
  //目当てのシートでなければ中断
  if (e.range.getSheet().getSheetName() !== "シート名") {
    return;
  }

  //ヘッダ行だった場合も中断
  const row = e.range.getRow();
  if (row < 2) {
    return;
  }

  var date = new Date();
  var today = Utilities.formatDate(date, "Asia/Tokyo", "yyyy/MM/dd");
  var time = Utilities.formatDate(date, "Asia/Tokyo", "HH:mm");

  //A1セルに８桁の年月日 B1セルに２４時間表記の時刻
  var spreadsheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート名");
  spreadsheet.getRange("A1").setValue(today);
  spreadsheet.getRange("B1").setValue(time);
}
```

## Use Library

- [GAS でライブラリを使う・作る方法 - Qiita](https://qiita.com/shikumiya_hata/items/5e11ff875a9dd050a722)
- 開啟 App Script 程式碼頁面
  <br>├ -> Resources -> Libraries
  <br>├ -> 複製 cheeriogs 的說明頁面裡的 script ID
  <br>└ -> 貼至下方的 add library -> 追加
- [Google Apps Script + OAuth ライブラリで、freee API の操作を行う - Qiita](https://qiita.com/TakeshiNickOsanai/items/62810b0e96bf37bd0eca)

## Crawler

### [UrlFetchApp](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)

- [法改正情報を早く確実にキャッチするために GAS で自動化するツールを作って運用してみた。 - Qiita](https://qiita.com/yamaguchi_yo/items/09bfc5c32faffa3beb62)
- [スクレイピングいろいろ - Qiita](https://qiita.com/cyoi0129/items/1cafb446dbe176e9366e)

```javascript
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("urlリスト");
var rows = sheet.getDataRange();
var numRows = rows.getNumRows();
var values = rows.getValues();
// 一行ずつチェック
var results = [];
for (var i = 1; i <= numRows - 1; i++) {
  var row = values[i];
  // GSSから対象URLの値を取得
  var name = row[0];
  var url = row[1];
  // 前回のハッシュ値
  var hash = row[2];
  // htmlを取得
  var html = UrlFetchApp.fetch(url);
  var text = html.getContentText();
  // ハッシュ値を計算
  var md5bin = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, text);
  var md5 = Utilities.base64Encode(md5bin);
  // 前回と同じならスキップ
  if (hash == md5) continue;
  results.push([name, url]);
  sheet.getRange(1 + i, 3).setValue(md5);
}
if (results.length == 0) {
  Logger.log("更新はありませんでした。");
  return;
}
```

### [Cheeriogs](https://github.com/tani/cheeriogs)

- cheerio 的 Google Sheet 版
- 可以用類似 jQuery 的語法解析 HTML 內容

1. 選擇「Tool」 → 「Script Editor」
2. 「Library」 → 「Script ID」處加入 `1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0`

```javascript
const url = "";
const htmlContent = UrlFetchApp.fetch(url).getContentText("UTF-8");
const $ = Cheerio.load(htmlContent);

const title = $("title").first().text();
ret["title"] = title;
ret["description"] = $("meta[name='description']").first().attr("content");
ret["pref"] = title.replace("赤十字血液センター｜日本赤十字社", "");
ret["demand_date"] = $(".center-main-today-timedate").first().text();
ret["demands"] = [];
$(".center-main-today-types-state").each((index, element) => {
  ret["demands"][index] = $(element).text();
});
```

## Discord Webhook

### URL Fetch App

- `UrlFetchApp.fetch(url[, params])`

#### parameters

| parameter          | type   | description                                                                                                      |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------- |
| url                | String | 傳送 HTTP Request 的目標網址                                                                                     |
| params.contentType | String | Request 的 Content-Type                                                                                          |
| params.headers     | Object | 設定 Request Header 的 key/value object                                                                          |
| params.method      | String | 指定使用何種 method，預設為 `GET`                                                                                |
| params.payload     | String | 指定 Request Body。`GET` 時無法指定。指定後會被視為 `application/x-www-form-urlencoded` 或 `multipart/form-data` |

#### Handle Response

| method            | type    | description          |
| ----------------- | ------- | -------------------- |
| getContentText()  | String  | 取得 Response Body   |
| getHeaders()      | Object  | 取得 Response Header |
| getResponseCode() | Integer | 取得回傳的 HTTP 狀態 |

```javascript
const data = {
  channel: "sample",
  text: "hello"
};

response = UrlFetchApp.fetch(
  "https://slack.com/api/chat.postMessage",
  {
    contentType: "application/json"
    headers: {
      "Authorization": "Bearer xoxp-xxxxxxxxx-xxxx"
    },
    method: "post",
    payload: JSON.stringify(data)
  });

console.log(response.getResponseCode()); // output: 200
console.log(response.getContentText());  // output: '{ "OK": true, ... }'
```

### 建立 Webhook

1. 點擊 Discord 頻道右邊的齒輪鍵
2. 點擊畫面左邊的 `Integrations` -> `Create Webhook` -> `Copy Webhook URL`

### 撰寫 GAS

`Google App Script`

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

## Add Timestamp

```javascript
// 今天
var date = new Date();
var today = Utilities.formatDate(date, "Asia/Taipei", "顯示格式");

// 明天 i=1 昨天 i=-1
var date = new Date();
date.setDate(date.getDate() + i);
var day = Utilities.formatDate(date, "Asia/Taipei", "顯示格式");
```

`顯示格式` 的部份可以使用 `年：y`、`月：M`、`日：d`、`時（12 小時制）：h`、`時（24 小時制）：H`、`分：m`、`秒：s` 自行制定格式

例：`'yyyy/MM/dd/HH:mm'` → `2020/12/31/23:59`

## Set Trigger

- [【Google Apps Script】トリガーによる定期実行の時間のズレをなくす方法 - Qiita](https://qiita.com/tapatyo/items/465a982635ba3933b32d)

### Display Message Box

```javascript
if (Browser.msgBox("確認", "是否要執行？", Browser.Buttons.YES_NO) != "yes") {
  return;
}
```

## Write GS code on VSCode

- [\[clasp\]Google Apps Script を VSCode/Typescript/Git で書く。 - Qiita](https://qiita.com/jooji/items/76f07f3f82900ebcd2b8)

## Backup Sheet

```javascript
const file = DriveApp.getFileById('File ID');
const folder = DriveApp.getFolderById('Folder ID');
const filename = file.getName() + '_' + Utilities.formatDate(new Date(), 'JST' 'MM/dd/HH:mm');

file.makeCopy(filename, folder);
```

### Conver Sheet to excel file

```javascript
//エクセルを返すURL
var fetchUrl =
  "https://docs.google.com/feeds/download/spreadsheets/Export?key=" +
  "シートID" +
  "&amp;exportFormat=xlsx";

//OAuth
var fetchOpt = {
  headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
  muteHttpExceptions: true,
};

//エクセルファイルゲット！
var xlsxFile = UrlFetchApp.fetch(fetchUrl, fetchOpt)
  .getBlob()
  .setName("任意の名前.xlsx");
```
