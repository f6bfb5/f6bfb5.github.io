---
title: "正規表達式 Regular Expression"
date: 2019-09-17T20:08:26.000Z
summary:
tags: Toolbox
---

<style>
table {
  width: 100%;
}
table td:nth-child(1) {
  width: 25%;
}
table td:nth-child(3) {
  width: 20%;
}
</style>

## 基礎介紹

正規表達式（Regular Expression，常簡寫為 RegEx）是表達一串文字是否符合特定規則的搜尋用模型（pattern），常見頭尾以斜線 `/` 包住，字尾加上額外的搜尋條件

例如可以使用 `/^09\d{2}-?\d{3}-?\d{3}$/` 這段表達手機號碼的正規表達式，來自動判斷某串數字是否的確是一串手機號碼

在正規表達式裡，有一系列的對應符號可以用來表達相應的文字規律，例如上面範例裡的 `\d`，可以從底下的特殊字元部份知道，這是代表「數字」的意思，跟在後面的 `{2}` 則是指「這個字元（`\d` 所以是數字）會出現 2 次」，`?` 是「這個字元（`-`）是不是沒有出現，或者只出現一次」，以下是常用的符號介紹：

### 指定字元

| 記述 | 內容       | 範例       |
| ---- | ---------- | ---------- |
| `.`  | 任意字元   | `.n`       |
| `[]` | 指定之字元 | `[aeiou]`  |
| `()` | 指定之字串 | `(string)` |
| `-`  | 範圍內字元 | `[a-zA-Z]` |
| `^`  | 排除字元   | `[^a]`     |

### 字元次數

| 記述           | 內容     | 範例     |
| -------------- | -------- | -------- |
| `*`            | 任意數量 | `bo*`    |
| `+`            | 至少一個 | `a+`     |
| `?`            | 零或一個 | `e?le?`  |
| `{次數}`       | 指定數量 | `a{2}`   |
| `{下限, 上限}` | 指定範圍 | `a{1,3}` |

### 字元位置

| 記述 | 內容     | 範例 |
| ---- | -------- | ---- |
| `^`  | 以此開頭 | `^A` |
| `$`  | 以此結尾 | `t$` |

### 特殊字元

正規表達式有一系列代表指定範圍的特殊記述：

| 記述 | 內容                        | 等同           |
| ---- | --------------------------- | -------------- |
| `\d` | 數字                        | `[0-9]`        |
| `\w` | 文數字與底線字元 (\_)       | `[A-Za-z0-9_]` |
| `\s` | space 字元                  | `[\n\r\t]`     |
| `\D` | 排除數字                    |                |
| `\W` | 排除文數字                  |                |
| `\S` | 排除 space 類型字元         |                |
| `\n` | 換行符號 line feed          |                |
| `\r` | 換行符號 carriage return    |                |
| `\t` | 定位字元 (tab)              |                |
| `\v` | 垂直定位字元 (vertical tab) |                |

由於字元集與系統差異的原因，目前存在有使用 `LF`（Line feed，U+000A）、`CR`（Carriage Return，U+000D）和兩者併用的 `CR+LF`，可以使用 `[\r\n]` 來選取所有換行符號

由於這些字元在正規表達式裡具有特殊意義，想要選取 `[\$.|?*+( )` 這些特殊字元時，都需要在前面加上 `\` ，避開它原有的特殊意義，例如：`\$`、`\*`。

### Modifiers

在 JavaScript 中，使用 RegEx 可以於第二個斜線後再加上 modifier，指定進一步的選取條件，例如：`var patt = /w3schools/i` 會指定大小寫也要完全一致

| 記述 | 內容               |
| ---- | ------------------ |
| g    | 搜尋所有對應內容   |
| i    | 搜尋大小寫完全一致 |
| m    | 搜尋多行內容       |

### 常用範例

- 西元生日: `/^[1-9]\d{3}-\d{2}-\d{2}$/`
- 身分證字號: `/^[A-Z]\d{9}$/`
- Gmail 信箱: `/^\w+@gmail.com$/`
- 四則運算式: `/^[\d+-*\/]*$/`

## 在 VSCode 上使用正規表達式快速處理文字

在 VSCode 的搜尋功能內使用正規表達式符號時
<br>需啟用正規表達式搜尋功能（快捷鍵為 `Alt+R`）
<br>但不需在前後加上 `//`
<br>可以用 `Alt + Enter` 一次選取所有符合規則的字元

## 在 JavaScript 裡使用正規表達式

想在 JavaScript 上使用正規表達式，需先宣告一前後由 `/` 包圍的字串：

`var re = /ab+c/;`

或呼叫 `RegExp` 物件的建構函式：

`var re = new RegExp('ab+c');`

宣告完畢後，可搭配此變數與一字串 `str` 使用以下函式：

| 函式                         | 功能                                                             |
| ---------------------------- | ---------------------------------------------------------------- |
| `re.test(str)`               | 搜尋 `str` 字串是否有部分符合，回傳 boolean                      |
| `re.exec(str)`               | 搜尋 `str` 字串是否有部分符合，並回傳為 Array，若無則回傳 `null` |
| `str.match(re)`              | 搜尋 `str` 字串是否有部分符合，並回傳為 Array，若無則回傳 `null` |
| `str.search(re)`             | 搜尋 `str` 字串是否有部分符合，並回傳 index，若無則回傳 `-1`     |
| `str.replace(re, newSubstr)` | 搜尋 `str` 字串是否有部分符合，並以 `newSubstr` 取代該內容       |
| `str.split(re)`              |                                                                  |

例如想要快速取得 YouTube 直播聊天室的網址，就可透過正規表達式來比對影片網址：
<br/>（雖然取得直播網址的時候通常不會有這麼多種變化格式，以及如果 playlist 參數先放在 v 之前也可能會出錯。實際上很可能也只需要比對 `[0-9a-zA-Z_-]{11}` 就能取得直播 ID 了。）

```javascript
let preRe =
  /((http:\/\/)|(https:\/\/))?((youtu\.be\/)|((www\.youtube\.com\/)+((watch\?v=)|(v\/))))/;
let vidRe = /[0-9a-zA-Z_-]{11}/;
// different pattern of url of YouTube video
let urlsForTest = [
  "https://www.youtube.com/watch?v=gRr4fDVpw2c",
  "http://www.youtube.com/watch?v=gRr4fDVpw2c&feature=featured",
  "https://youtu.be/gRr4fDVpw2c",
  "http://www.youtube.com/v/gRr4fDVpw2c?fs=1&hl=en_US",
  "https://www.youtube.com/watch?v=gRr4fDVpw2c&list=PL7LdRPp7xCkP9JJYvAqrQJLScbSol7S4-&index=2",
];
let liveChatUrlPrefix = "https://www.youtube.com/live_chat?v=";

urlsForTest.forEach((url) => {
  console.log(liveChatUrlPrefix + url.replace(preRe, "").match(vidRe));
});
// https://www.youtube.com/live_chat?v=gRr4fDVpw2c
```

## 相關工具

| 名稱                                                              | 說明                   |
| ----------------------------------------------------------------- | ---------------------- |
| [Regex101](https://regex101.com/)                                 | 驗證內容是否符合表達式 |
| [Regulex](<https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24>) | 圖象化表達式內容       |
| [iHateRegex](https://ihateregex.io/)                              | 表達式 snippet         |
| [Regex Crossword](https://regexcrossword.com/)                    | 正規表達式字謎遊戲     |
