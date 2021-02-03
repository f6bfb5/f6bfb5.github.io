---
title: "前端筆記 (6) 網頁開發者工具"
date: 2019-07-18T07:15:32.000Z
published: 2019-07-18T07:15:32.000Z
author: f6bfb5
summary:
tags: F2E
layout: blog
---

- [[學習筆記] Chrome Dev Tools 開發者工具實用功能整理](https://pjchender.blogspot.com/2017/06/chrome-dev-tools.html)

- 在 console 視窗中點右鍵，勾選 `Log XMLHTTPRequest`，可以看到該網站所發出的 AJAX request。
- 在 console 中輸入 `document.designMode = 'on'`， 點選網頁文字會直接出現游標，可以直接編輯網頁內容。

## Debugger

- `Sources` -> `Event Listener Breakpoints`
- 右鍵 -> `Break on...` -> `attribute modifications`
- Step over Line of Code (step over)
- Step into Next Function Call (step into)
- Step out of Current Function (step out)
- 右鍵 -> `clear console history`

### monitor event

- `monitorEvents(element, [event])` 設定斷點偵測觸發的事件
- `unmonitorEvents(element, [event])` 關閉事件監聽
- `getEventListeners(element)` 查看 DOM 元素綁定事件

### HTML Element

在 chrome 中可以像使用 jQuery 一樣使用 `$` 當做選擇器，`$` 表示的是 `document.querySelector([selector])`；如果要選擇多個 DOM 元素，要使用 `$$`，表示的是 `document.querySelectorAll([selector])`。

也可以在 element 視窗中點選一個 DOMElement，接著在 console 中輸入 `$0`，一樣可以選到該元素，`$0` 表示的是當前 chrome 所選取到的元素。

在 console 中可以使用 `keys(obj)` 和 `values(obj)` 來取的物件的鍵和值。

## 7 個好用的 `console` 除錯方法

### 1. `console.count()`

- 以所處的函式為目標，顯示被呼叫的次數。
- 亦可傳入變數，單獨監看參數為該變數時的執行次數。

```javascript
function sayHello1(name) {
  console.count();
  console.log(name);
}

function sayHello2(name) {
  console.count(name);
}

sayHello("Indrek");
sayHello("William");
sayHello("Kelly");
```

### 2. `console.warn()`

- 用以警告開發者傳入的參數不足、所使用的 API／Package 為不推薦的版本…等等的訊息。

```javascript
function sayHello(name) {
  if (!name) {
    console.warn("No name given");
  }
}

sayHello();
```

### 3. `console.table()`

- 以表格的形式顯示陣列、物件的內容。

```javascript
const fruits = [
  "Apple",
  "Watermelon",
  "Orange",
  "Pear",
  "Cherry",
  "Strawberry",
  "Nectarine",
  "Grape",
  "Mango",
  "Blueberry",
  "Pomegranate",
  "Carambola",
  "Plum",
  "Banana",
  "Raspberry",
  "Mandarin",
  "Jackfruit",
  "Papaya",
  "Kiwi",
  "Pineapple",
  "Lime",
  "Lemon",
  "Apricot",
  "Grapefruit",
  "Melon",
  "Coconut",
  "Avocado",
  "Peach",
];

console.table(fruits);
```

### 4. `console.group()`

- 整理輸出訊息的巢狀層級，將輸出的資料分群。

```javascript
console.log("This is the first level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the first level");
```

### 5. `console.trace()`

- 追蹤 function 的堆疊。

`console.trace(new Hoge());`

### 6. `console.dir()`

- 檢視這個 DOM 元素中的所有屬性。

`console.dir(document.getElementsByTagName('div'));`

### 7. `console.dirxml()`

- 查看 DOM 元素的樹狀結構。

`console.dirxml(document.getElementsByTagName('a'));`
