---
title: "前端筆記 (3) Javascript"
date: 2019-07-18T07:10:16.000Z
published: 2019-07-18T07:10:16.000Z
author: f6bfb5
summary:
layout: blog
---

- [JavaScript Primer](https://jsprimer.net/#javascript-primer)
- [現代の JavaScript チュートリアル](https://ja.javascript.info/)
- [JavaScript 竹白記事本](https://hackmd.io/@chupai/rkBjZjh7H/)
- [邁向 JavaScript 勇者之路](https://ithelp.ithome.com.tw/users/20083608/ironman/1354)

## 現代 JS 的常見基礎技術

- [Node.js](https://nodejs.org/en/)
- Package Manager
  <br>├ npm
  <br>├ Yarn
  <br>└ Bower
- Task Runner / Module Bundler
  <br>├ gulp
  <br>├ Grunt
  <br>├ webpack
  <br>└ Parcel
- Transpiler / Compiler
  <br>└ Babel
- Alt JS
  <br>├ CoffeeScript
  <br>├ TypeScript
  <br>└ PureScript
- Framework / UI Library
  <br>├ React
  <br>├ Vue.js
  <br>├ Angular
  <br>└ Riot.js

## 撰寫

### 變數

- case senstive
- 首字符可為任意 unicode 或 `$`、`_`
- 第二字符之後除任意 unicode 或 `$`、`_` 之外，還可為 `0-9`
- 保留字不可用為變數名稱

### 宣告

- `var` 函式作用域
- `let` 區塊作用域，不可重複宣告
- `const` 區塊作用域，不可重複宣告、不可再次賦值

#### 變數提升 (Hosting)

JavaScript 引擎在解析原始碼時，會先將所有已宣告的變數提升到程式碼的頂部，綁定其所屬作用域但不賦值。

```javascript
console.log(a); // 顯示 undefined
var a = 1;
```

因此上述例子的 `a` 並未宣告與賦值，但在執行上不會報錯。

### 命名

- 易於理解的內容名稱
- 不過長或過短
- 不使用容易混淆的名稱
- 開頭使用 `_` 表示具有特殊意義，非必要不使用
- 統一命名風格
- 只使用英文命名
- 習慣用法如下：
  <br>├ 變數／函式名稱：camelCase
  <br>├ 類別名稱：PascalCase
  <br>└ 常數：全大寫，字詞間用下底線 `_`

```javascript
let numberOfStudents
const numberOfLegs
function setBackgroundColor()
class Student{}
```

## 型別

程式語言裡常見的型別有動態型別與靜態型別，靜態型別語言的變數於編譯時已經確定其型別， JavaScript 所屬的動態型別則是於執行階段變數賦值後才會擁有型別。

Javascript 內建有七大型別：

- `Null`（`null`）：值為空或不存在
- `Undefined`（`undefined`）：值未被定義、初始值
- `Boolean`（`true`、`false`）：布林值
- `Number`（整數 `1` 或浮點數 `3.14`）：
  <br>能儲存根據 IEE 754-2008 標準所定義的
  <br>範圍於 `(2^53 -1)` 到 `2^53 -1` 之間的數字
  <br>另外還有三個符號值： `+Infinity` 、 `-Infinity` 、 `NaN` （Not a Number）
  <br>可以透過 `Number.MAX_VALUE` 或 `Number.MIN_VALUE` 兩個常數
  <br>以及在 ES6 新增的 `Number.isSafeInteger()` 、 `Number.MAX_SAFE_INTEGER` 、 `Number.MIN_SAFE_INTEGER` 來檢查數字是否位於標準範圍之內
- `String`(`Hello World`)：文字，以單括號 `'` 或雙括號 `"` 包覆起來的字元
- `Object`：資料或函式的組合＝ Property
  <br>可由 `{鍵 (Key) : 值 (Value)}` 或 `new Object()` 宣告
  <br>可以透過 `.Key` 或 `['Key']` 存取或操作 `Object` 裡的 property，刪除則需使用 `delete`
  <br>除了上述其中三種原始資料型別（ `Boolean` 、 `Number` 、 `String` ）也是 `Object` 之外
  <br>一些特殊的資料型別例如 `Array` 、 `Date` 、 `Function` 、 `RegExp` 也都屬於 `Object`
- `Symbol`（於 ES6 新增）：此類型的值唯一且不可修改
  <br>通常用於做為 Object 的 Key 使用

以及

- `BigInt` （於 Chrome 67 新增）： BigInt 則可儲存超過 `Number` 範圍的值
  <br>於數值後面加上 `n` 或使用 `BigInt()` 函式轉型即可
  <br>例如 `const bigInt = 123456789012345678901234567890n;`
  <br>`Number` 常見的運算子操作都可同樣套用於 `BigInt` 上
  <br>但 `BigInt` 類型的值不可與 `Number` 類型的值進行操作，會造成 `TypeError` 錯誤

### `typeof` 運算子

`typeof` 是能檢視一個值型別的運算子。

```javascript
var a;
typeof a; // "undefined"

a = null;
typeof a; // "object"

a = undefined;
typeof a; // "undefined"

a = "string";
typeof a; // "string"

a = 5;
typeof a; // "number"

a = true;
typeof a; // "boolean"

a = { a: 5 };
typeof a; // "object"

a = Symble();
typeof a; // "symble"
```

但是 `typeof a` 並非詢問 `a` 變數的型別，而是詢問「目前在 `a` 中的值的型別是什麼」。JavaScript 的變數單純只是值的容器。

`null` 的類型是 `object`，這是由於歷史原因造成的。1995 年的 JavaScript 語言第一版，只設計了五種資料類型（物件、整數、浮點數、字串和布林值），沒考慮 `null`，只把它當作 `object` 的一種特殊值。後來 `null` 獨立出來，作為一種單獨的資料類型，為了兼容以前的代碼，`typeof null` 傳回 `object` 就沒法改變了，所以是一個萬年 Bug。

我們可以利用 `null` 會被 `typeof` 檢測為 `object` 並且會轉為 `false` 的結果來驗證值是否為 `null。`

```javascript
var a = null;

if (!a && typeof a === "object") {
  console.log("null");
}
```

## 非同步處理

- [【初心者向け】JavaScript の非同期処理を理解する　 callback、Promise そして async/await へ - Qiita](https://qiita.com/G-awa/items/652107a9abf7ff6d0d06)
- [JavaScript Promise：簡介](https://developers.google.com/web/fundamentals/primers/promises?hl=zh-tw)
- [別這樣使用 Promise](https://medium.com/frochu/%E5%88%A5%E9%80%99%E6%A8%A3%E4%BD%BF%E7%94%A8promise-d4f5a731adb4)

### Callback

```js
function addAsync(num1, num2, callback) {
  return $.getJSON(
    "https://example.com",
    {
      num1: num1,
      num2: num2,
    },
    callback
  );
}

addAsync(1, 2, (success) => {
  const result = success;
});
```

- 多次呼叫會造成語法內嵌，出現 callback hell

### Promises

- `Promise` 有三種狀態：
  <br>├ 1. `pending`: 等待
  <br>├ 2. `resolved`: 成功
  <br>└ 3. `rejected`: 失敗
- `new Promise(function (resolve, reject) {})`
- Promise 執行成功後需在內部 function 呼叫 (撰寫) `resolve(成功結果)`，失敗則呼叫 `reject(失敗結果)`
- 可以在 `Promise` 後方接上 `.then` 或 `.catch` 執行對應行為，`.then` 的參數為從 `resolve(成功結果)` 傳來的結果，`.catch` 的參數則是從 `reject(失敗結果)` 傳來。
- 可解決 callback hell 問題

```js
function promiseFn(num, time = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num ? resolve(`${num}, 成功`) : reject("失敗");
    }, time);
  });
}

promiseFn(1)
  .then((res) => {
    console.log(res);
    return promiseFn(2);
  })
  .then((res) => {
    console.log(res);
  });
```

### Async / Await

- 於 ES7 新增
- 欲使一 function 回傳 Promise，需於該 function 前加上 `async`
- 使用 Promise 或 function 回傳的 Promise 時需使用 `await`
  <br>└ 如 `let phone = await willGetNewPhone` 或 `let message = await showOff(phone)`
- 可於函式內使用 `try {} catch (error) {}` 攔截例外

```javascript
async function getData() {
  const data1 = await promiseFn(1);
  const data2 = await promiseFn(2);
  console.log(data1, data2);
}

getData();
```

### RxJS (Observables)

- [希望是最淺顯易懂的 RxJS 教學](https://blog.techbridge.cc/2017/12/08/rxjs/)
- [30 天精通 RxJS](https://blog.jerry-hong.com/series/rxjs)

- 可以被取消
- 需要時才執行

```js
let Observable = Rx.Observable;
let resultA, resultB, resultC;

function addAsync(num1, num2) {
  const promise = fetch(
    `http://example.com?num1=${num1}&num2=${num2}`
  ).then((x) => x.json());
  return Observable.fromPromise(promise);
}

addAsync(1, 2)
  .do((x) => (resultA = x))
  .flatMap((x) => addAsync(x, 3))
  .do((x) => (resultB = x))
  .flatMap((x) => addAsync(x, 4))
  .do((x) => (resultC = x))
  .subscribe((x) => {
    console.log("total", x);
    console.log(resultA, resultB, resultC);
  });
```

- `Observable.fromPromise` 會將 Promise 轉換成 observable stream。
- `.do` 和 .`flatMap` 是 Observable 的運算子。

## AJAX

- [Native な JavaScript で Fetch API を利用し Ajax を行う](https://qiita.com/doriven/items/503fdc6de9bc0e725334)
- [Javascript の Ajax についての基本まとめ - Qiita](https://qiita.com/katsunory/items/9bf9ee49ee5c08bf2b3d)
- [透過 curl、Python、Postman 來 Request API \- 🐴 的學習筆記](https://jzchangmark.wordpress.com/2016/06/12/%E9%80%8F%E9%81%8E-curl%E3%80%81python%E3%80%81postman-%E4%BE%86-request-api/)
- [一起來把煩人 XMLHttpRequest 變成 Fetch 怎麼樣？](https://realdennis.medium.com/%E4%B8%80%E8%B5%B7%E4%BE%86%E6%8A%8A%E7%85%A9%E4%BA%BA-xmlhttprequest-%E8%AE%8A%E6%88%90-fetch-%E6%80%8E%E9%BA%BC%E6%A8%A3-8657f2854894)
- [AJAX 與 Fetch API · 從 ES6 開始的 JavaScript 學習生活](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)

### 1. XMLHttpRequest

- js 原生
- 難以閱讀與撰寫

```javascript
const result = document.querySelector(".result");
function reqOnload() {
  const data = JSON.parse(this.responseText);
  var email = data.results[0].email;
  result.textContent = email;
}
function reqError(err) {
  console.log(err);
}
var request = new XMLHttpRequest();
request.open("get", "https://randomuser.me/api/", true);
request.send();
request.onload = reqOnload;
request.onerror = reqError;
```

### 2. jQeury

- 基於 XHR 開發，然而 XHR 架構不清晰，並已有替代方案
- jQuery 整體項目太大，效益低落
- [什麼是 jQuery？前端框架盛行還需要 JavaScript 函式庫嗎？｜ ALPHA Camp Blog](https://tw.alphacamp.co/blog/jquery-javascript-library-overview)

```javascript
var result = $(".result");

$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    result.html(data.results[0].email);
  },
});
```

### 3. Fetch

- 自 ES6 起提供的方式
- 概念相近 jQuery 的 `$.ajax`
- 使用 ES6 的 Promise 進行回傳，回傳`ReadableStream`物件
- 需搭配 then 與 catch 進行處理
- 會將 400，500 都當做請求成功，需要另外做處理
- 預設不帶 cookie
- 不支援 timeout handle
- 不支援監測請求的進度
- 較早的瀏覽器並不支援 (IE11 以下不支援)

```javascript
const result = document.querySelector(".result");

fetch("https://randomuser.me/api/", {})
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((data) => {
    var email = data.results[0].email;
    result.textContent = email;
  })
  .catch((err) => {
    console.log(err);
  });
```

### 4. Axios

- [Vue 套件介紹：axios - Eugene Su](https://eugenesu0515.github.io/Blog/2018/06/25/Vue%E5%A5%97%E4%BB%B6%E4%BB%8B%E7%B4%B9%EF%BC%9Aaxios/)
- Vue.js 作者推薦使用
- 使用需引入 [axios](https://github.com/axios/axios)
- 概念相近 jQuery 的 `$.ajax`
- 可以在 node.js 中使用
- 支援防 CSRF
- 提供併發請求
- 相當輕量，約 13kb

```javascript
const result = document.querySelector(".result");

axios
  .get("https://randomuser.me/api/")
  .then(function (response) {
    let data = response.data;
    result.textContent = data.results[0].email;
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Execued");
  });
```

## ES6 加進的新功能

### 1. Default Parameters

更快速的 function 參數給定預設值：

```javascript
var link = function (height = 50, color = "red", url = "https://example.com") {
  // ...
};
```

### 2. Template Literals

允許透過語法 `${val}` 將變數嵌入至字串中：

```javascript
var name = `Your name is ${first} ${last}.`;
```

### 3. Multi-line Strings

允許使用 \`（backticks）接受多行字串指定：

```javascript
var name = `first line
second line`;
```

### 4. Destructing Assignment

```javascript
object[a, b, …rest] = [1, 2, 3, 4, 5];
console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // [3, 4, 5]

var o = {p: 42, q: true};
var {p, q} = o;
console.log(p); // 42
console.log(q); // true
```

### 5. Object Literals

```javascript
function getCar(make, model, value) {
 return {
   // with property value shorthand
  // syntax, you can omit the property
  // value if key matches variable
  // name
  make, // same as make: make
  model, // same as
  model: model
  value, // same as value: value
  // computed values now work with
  // object literals
  ['make' + make]: true,
  // Method definition shorthand syntax
  // omits `function` keyword & colon
  depreciate() {
    this.value -= 2500;
  }
 };
}
let car = getCar('Kia', 'Sorento', 40000);
```

### 6. Arrow Function

箭頭函式亦會更改物件裡的 this 指向行為，從原本的指向呼叫者改為指向其所屬物件

```javascript
(param1, param2, ..., paramN) => { statements }
(param1, param2, ..., paramN) => expression
// 等於 : => { return expression; }

// 只有一個參數時, 括號才能不加:
(singleParam) => { statements }
singleParam => { statements }

// 若無參數, 就一定要加括號:
() => { statements }
```

### 7. Promise

```javascript
var wait1000 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });

wait1000()
  .then(function () {
    console.log("Yay!");
    return wait1000();
  })
  .then(function () {
    console.log("Wheeyee!");
  });
```

### 8. Let & Const, Block-Scoped

- `let` 和 `const` 的作用域從之前 `var` 的函式變成了離此變數最近的 `{}` 區塊範圍內
- `let` 不可重覆宣告，執行時會吐出錯誤
- `const` 宣告時即須初始化，並且不可修改

```javascript
function letExample(value) {
  if (value) {
    let letValue = value;
    console.log("inside block", letValue);
    // [SyntaxError] redeclaration of letValue would be a SyntaxError
    let letValue = "foo";
  }
  try {
    // [SyntaxError] Accessing letValue is a Reference Error because it
    // was defined w/in if-block
    console.log(letValue);
    // if we get here, it means that the JS engine didn't
    // throw an exception, which means that the engine
    // (or transpiled code) did not faithfully reproduce
    // how let should work
    console.log("let not faithfully handled");
  } catch (e) {
    // e is a ReferenceError
    console.log("letValue not accessible", e);
  }
}
letExample(2);
```

### 9. Classes

ES6 透過 prototype 和 function 實作出了類 inheritance 結構的 class，但仍和傳統 Java、Python 的 class 有些差別

```javascript
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.);
  }
}
```

### 10. Module

```javascript
// Export
export var port = 3000;
export function getAccounts(url) {
  // ...
}

// Import
import { port, getAccounts } from "module";
console.log(port);
```

## MutationObserver

- [JavaScript 是如何工作的：使用 MutationObserver 跟踪 DOM 的变化](https://blog.fundebug.com/2019/01/10/understand-mutationobserver/)
- [How JavaScript works: tracking changes in the DOM using MutationObserver | by Alexander Zlatkov | SessionStack Blog](https://blog.sessionstack.com/how-javascript-works-tracking-changes-in-the-dom-using-mutationobserver-86adc7446401)
- [DOM 变动观察器（Mutation observer）](https://zh.javascript.info/mutation-observer)

### 簡介

`MutationObserver` 會在指定的 DOM 出現變化，例如增減節點、變更屬性、修改文字時回傳通知。

### 使用

想要使用 `MutationObserver` 之前，我們需要先建立一個 instance，並且傳入一個 function 讓它每次偵測到變化時調用。

```javascript
const mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation);
  });
});
```

建立好的物件有三個 methods：

- `observe`：開始監聽變化，需要兩個參數—— 你想觀測的 DOM 節點和設定用的物件
- `disconnect`：停止監聽變化
- `takeRecords`：回傳 callback 啟動之前的最後一次修改

這裡有個開始監聽變化的例子：

```javascript
// Starts listening for changes in the root HTML element of the page.
// 第一個傳入參數為監察目標，可改為如 document.querySelector("body")
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true,
});
```

當我們調用了 `mutationObserver.observe(...)` 開始監聽，網頁上的 DOM 出現變化時，我們就能在控制台裡看到 mutations 陣列裡的各個 [MutationRecord](https://developer.mozilla.org/zh-TW/docs/Web/API/MutationObserver#MutationRecord) 的記錄。

當工作完成，我們想要停止觀察 DOM，可以調用相關 method：

```javascript
// Stops the MutationObserver from listening for changes.
mutationObserver.disconnect();
```

在 `MutationObserver` 出現之前，人們用來觀測網頁元件變化的方法有：

- Polling
- MutationEvents
- CSS animations

Polling：最簡單也最簡潔的方法，使用瀏覽器的 `setInterval` WebAPI 定期檢查是否發生任何變化，但這種方法會明顯地降低網路應用／網站的效能。

MutationEvents：於 2000 年加入的 [Mutation events API](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events)，由於它在每次 DOM 變化都會被調用，同樣導致效能問題，目前 `MutationEvents` API 已經被棄用。

CSS animations：這是個有些特怪異的方案，基本上的概念是一個有 CSS 動畫的元素加進 DOM 中時，動畫開始就會觸發 animationstart 事件，當我們再對這個事件加上 handler，就能掌握元素加進 DOM 中的確切時間。

```html
<div id="container-element"></div>
```

```css
@keyframes nodeInserted {
  from {
    opacity: 0.99;
  }
  to {
    opacity: 1;
  }
}

#container-element * {
  animation-duration: 0.001s;
  animation-name: nodeInserted;
}
```

需要先檢查 `event.animationName` 是否是我們所想要的動畫。

```javascript
var insertionListener = function (event) {
  // Making sure that this is the animation we want.
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: " + event.target);
  }
};

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari
```

`MutationObserver` 相較這些方案提供了更多優勢，包括它涵蓋了 DOM 中的每種可能變化，以及分段啟動的特性，讓它有更好的效能，並且擁有相當優秀的支援性。

## IntersectionObserver

- [example](https://codepen.io/osublake/embed/6fd214ecd74e7091ec7b609bb0270f97?height=450&slug-hash=6fd214ecd74e7091ec7b609bb0270f97&user=osublake&tab-bar-color=%23222&name=cp_embed_2#result-box)

### 簡介

`IntersectionObserver` 會在指定的目標出現在觀察器 (window) 中時，才回傳 `true`，
不同於 jQuery 的 `onscroll` 是在每次捲動時都執行一次監聽。

### 使用

`let observer = new IntersectionObserver(callback, [option]);`

- `callback`: 要執行的動作函式

callback 預設的傳入參數為一陣列

```javascript
[
  {
    // 唯讀變數，目標元素的矩形節點的資訊 (ID、座標、長寬)
    boundingClientRect: {},
    // 目標元素的出現比例
    intersectionRation: 1,
    // 唯讀變數，目標元素與觀察器的相交區域
    intersectionRect: {},
    // 是否出現於觀察器中
    isIntersecting: true,
    // 觀察器的資訊
    rootBounds: {},
    // 目標
    target: 目標的 DOM 節點
  }
];
```

- `option`: 有三個參數可調整

```javascript
{
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0]
}
```

`root`: 可指定某個特定的 element 做為觀察器: `root: documnet.getElementById('container')`，預設值為 `null`，即目前觀看中的視窗。
`rootMargin`: 四個值依序為上、右、下、左，可放大或縮小的觀察器的範圍，預設值為 `"0px 0px 0px 0px"`。
`threshold`: 指定目標出現於觀察器內的百分比，到達該值後才執行 callback，可指定多個值如: `[0, 0.25, 0.5, 0.75, 1]` 會在目標出現 0%、25%、50%、75%、100% 的時候都執行一次 callback 函式，預設值為 `[0]`，即目標接觸到觀察器的邊緣便觸發 callback 函式。

`observer.observe(el)`
`observer.unobserve(el)`
`observer.disconnect()`

## 進階

### What's THIS in JavaScript ?

- `this` 是 JavaScript 的一個關鍵字。
- `this` 是 function 執行時，自動生成的一個內部物件。
- 隨著 function 執行場合的不同，`this` 所指向的值，也會有所不同。
- 在大多數的情況下，`this` 代表的就是呼叫 function 的物件（Owner Object of the function）。
  亦即 function 執行時所屬的物件，而非 function 本身
- 脫離物件的 `this` 基本上沒有任何意義
- 沒有意義的 `this` 會根據**嚴格模式**以及**環境**給一個預設值
- 嚴格模式底下預設就是 `undefined`，非嚴格模式在瀏覽器底下預設值是 `window`。
- 要看 this，就看這個函式「怎麽」被呼叫
  例如 `addEventListener` 底下的 `this` 會是「觸發事件的元素」
  但裡頭的 callback function 中的 `this` 會因為 Default Binding 而指向 `window`
- 可以用 `call`、`apply` 與 `bind` 指定 this 的值
  或是 arrow function 強制綁定 this、使用一個變數儲存 this 當做參考值

```jsx
"use strict";
function hello(a, b) {
  console.log(this, a, b);
}

hello.call("yo", 1, 2); // 第一個參數值即為 this
hello.apply("hihihi", [1, 2]); // apply 以 Array 的方式傳進參數
// 這兩種方式皆為呼叫 function 的函式

const myHello = hello.bind("my");
myHello(); // bind 則是會回傳一個新的 function
// 並且在調用 bind 後值就不會改變了
```

- [What's THIS in JavaScript ? [上]](https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/)
- [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.techbridge.cc/2019/02/23/javascript-this/)
- [重新認識 JavaScript: Day 20 What's "THIS" in JavaScript (鐵人精華版)](https://ithelp.ithome.com.tw/articles/10193193)

### Closure

閉包（Closure）是利用變數作用域的特性，加上一層 function 以限制儲存環境的變數值作用範圍，避免污染 global 環境，且此變數不會因為 function 執行完畢後而消失

```js
// without closure
var count = 0;

function counterTick() {
  return ++count;
}

console.log(counterTick()); // 1
console.log(counterTick()); // 2

// with closure
function counter() {
  var count = 0;

  function counterTick() {
    return ++count;
  }
  return counterTick;

  // also could be written as arrow function
  return () => ++count;
}

var countFunc = counter();

console.log(countFunc()); // 1
console.log(countFunc()); // 2
```

- [所有的函式都是閉包：談 JS 中的作用域與 Closure](https://blog.techbridge.cc/2018/12/08/javascript-closure/)

### Hoisting

Hoisting（提升）是指一個變數或函式在宣告前就被使用，JavaScript 就會在使用之前再進行一次宣告，而變數只會單純宣告不會給定值，因此執行結果通常會是 `undefined` ，具體上如下例

```jsx
var x = 1;

var doSomething = function (y) {
  var x; // 此行非原本撰寫的程式
  // 是由於下面使用的 x=100 裡的 x 未經宣告
  console.log(x); // 而被 JavaScript 提升至執行序的先頭
  // 概念上類似移動至此函式的最上方進行宣告
  // 因此函式內部的 console.log 會是 undefined
  x = 100;
  return x + y;
};

console.log(doSomething(50)); // 150
console.log(x); // 1
```

函式則分有存入變數及直接定義的兩種宣告方式，存入變數的函式宣告由於與變數同樣只有宣告被提升，因此會出現 `TypeError` 錯誤，直接定義的函式則會連同內容一起被提升

```jsx
square(2);

// 傳入變數式
// 執行結果會為 TypeError: square is not a function
var square = function (number) {
  return number * number;
};

// 直接定義式
// 執行結果為正常輸出
function square(number) {
  return number * number;
}
```

若有同名的定義函式和變數使用，由於函式的優先權較高，執行結果會是定義函式

`let` 和 `const` 一樣也有 Hoisting 行為，但這兩種宣告不會被初始化成 `undefined` ，並且在賦值之前就存取這兩種宣告的值時，會直接拋出錯誤

而當初加入 Hoisting 設計的原因是為了達成函式相互歸遞（mutual recursion），以及避免必須以類 ML 語言的順序撰寫（avoid painful bottom-up ML-like order）

實際運作上是 JavaScript 會於執行 function 時產生一個 Execution Contexts 執行環境（同理亦有 global EC），將所有需要的資訊存在裡面，裡頭會有個對應的 Variable Object 用以存放宣告的變數、函式和傳入的變數，在執行的時候到 VO 裡頭查找，並依參數、函式和變數的順序放入其中

參數傳進 VO 時直接放入，沒有值的話會初始化為 `undefined` ；function 傳進 VO 時新增一屬性放入建立 function 完後的回傳值（可類比為指向此 function 的指標），已有同名屬性時進行覆蓋；變數傳進 VO 時新增一屬性並賦值為 `undefined` ，已有同名屬性時則不會修改該值

`let` 和 `const` 多做了一個檢查，皆是在「提升之後」和「賦值之前」的「執行期間」內（Temporal Dead Zone）被存取就會拋出錯誤，亦即 Hoisting 的原理實質上是執行時序的調動，而非程式碼的編修

- [我知道你懂 hoisting，可是你了解到多深？](https://blog.techbridge.cc/2018/11/10/javascript-hoisting/)

### TypeScript

- [TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/)

## 參考資料

- [重新認識 JavaScript 系列](https://ithelp.ithome.com.tw/users/20065504/ironman/1259)
- [Learning Advanced JavaScript](https://johnresig.com/apps/learn/)
- [克服 JS 的奇怪部份](https://chupainotebook.blogspot.com/search/label/%E5%85%8B%E6%9C%8D%20JS%20%E7%9A%84%E5%A5%87%E6%80%AA%E9%83%A8%E5%88%86)
- [JavaScript 开发者应懂的 33 个概念](https://github.com/stephentian/33-js-concepts)
- [【翻訳】JavaScript 開発者が知るべき 33 のコンセプト リンク集 - Qiita](https://qiita.com/oimo23/items/b380a914867ec973039a)
- [2016 年から 2019 年までの JavaScript の全て](https://qiita.com/rana_kualu/items/6bcc99226be741348c34)
- [You Don't Know JS Yet: Get Started - 2nd Edition](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md)
- [無瑕的程式碼 JavaScript](https://github.com/AllJointTW/clean-code-javascript)
- [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
- [JavaScript | 關於 Object ，一口氣全說完](https://medium.com/enjoy-life-enjoy-coding/javascript-%E9%97%9C%E6%96%BC-object-%E4%B8%80%E5%8F%A3%E6%B0%A3%E5%85%A8%E8%AA%AA%E5%AE%8C-4bb924bcc79f)
- [JS 原力覺醒 — Event Queue & Event Loop 、Event Table](https://medium.com/walkout/js-%E5%8E%9F%E5%8A%9B%E8%A6%BA%E9%86%92-day13-event-queue-event-loop-event-table-374fbbef3e40)
- [覺得 JavaScript function 很有趣的我是不是很奇怪 - Huli](https://blog.huli.tw/2020/04/18/javascript-function-is-awesome/)
