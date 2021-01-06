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

- Null 空值
- Undefined 「未定義」或「不存在」
- Boolean 布林值 (`true`、`false`)
- Number 數值 (整數 `1` 或浮點數 `3.14`)
- String 字串 (`Hello World`)
- Object 物件 (值集合)
- Symbol 於 ES6 新增的新型別

又可細分為：

1. 基本型別 (primitive type) / 原始型別

- Boolean
- Number
- String
- 特殊值 (`undefined`、`null`)

2. 複合型別 (complex type) / 參考型別 (reference type)

- Object 物件，可再分為三個子型别 (subtype)
- Object 狹義物件
- Array 陣列
- Function 函式

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

## 基礎語法

### for...in 和 for...of 的差別

1. 迭代 **物件屬性** 時使用 `for...in`，迭代 **陣列** 時使用 `for...of`
2. `for..in` 輸出 **屬性名稱 (key)**，`for...of` 輸出 **值 (value)**
3. `for...of` 是 ES6 的新語法，補足了 ES5 `for...in` 的不足之處
4. `for...of` 不能迭代物件，需與 `Object.keys()` 搭配使用

### Array

- `var fiveItems = new Array(5);`：建立指定長度陣列
- `fill(value[, start=0[, end=this.length]])`：填入輸入值至陣列的指定索引開始至結尾處
- `map()` 可以使用自訂判斷為真的值建立一個新陣列：`map1 = array1.map(x ⇒ x*2 );`，注意此方法與資料型態的 `Map()` 是不同東西。
- `reduce()` 簡言之能夠簡化需要遞迴整個陣列的操作，並回傳一經過處理後的值。例如計算整個陣列總和可以使用 `array1.reduce((pre,cur) => pre+cur)` 求得。
- 檢查陣列是否為空：`if (typeof image_array !== 'undefined' && image_array.length > 0)`

#### 快速產生陣列內容

- [alternative range()](https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp)
- 數值: `[...Array(5).keys()];` => `[0, 1, 2, 3, 4]`
- 文字: `String.fromCharCode(...[...Array('D'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));` ⇒ `"ABCD"`
- 組合: `for (const x of Array(5).keys()) console.log(x, String.fromCharCode('A'.charCodeAt(0) + x));` ⇒ `0,"A" 1,"B" 2,"C" 3,"D" 4,"E"`

#### slice(), splice(), split()

##### slice()

- `array.slice(begin, end)`
- 複製陣列項目，不會修改原始陣列，回傳指定兩點之間的內容
- `begin`：開始複製項目的位置，負值則為反方向計算
- `end`：結束複製項目的位置，留空時會複製至結尾

##### splice()

- `array.splice(start, deleteCount, item...)`
- 新增／刪除陣列項目，會修改原始陣列，回傳被刪除的項目
- `start`：插入或刪除項目的位置，負值則為反方向計算
- `deleteCount`：刪除的個數，傳入 0 則不會刪除
- `item...`：要插入的新項目。

##### split()

- `string.split(seperator, length)`
- 分割字串成陣列，不會修改原始字串，回傳分割後的字串陣列
- `seperator`：字符或正規表達式，依照此參數分割字串
- `length`：回傳陣列的最大長度

#### forEach(), map(), filter(), find(), every(), some(), reduce()

- [關於 JS 陣列 20 種操作的方法](https://hsiangfeng.github.io/javascript/20190421/1216566123/)
- [JavaScript 陣列 (array) 操作處理大全](https://w3c.hexschool.com/blog/6594e4ff)

##### forEach()

```javascript
itemsArray.forEach((item, index, array) => {
  // code here
});
```

- 處理陣列內**每個**資料
- 無回傳值（`undefined`）
- 會改變原始陣列資料

##### map()

```javascript
itemsArray.map(function (item, index, array) {
  return item + item;
});
```

- 處理陣列內**每個**資料
- 回傳一個新的陣列
- 不會改變原始陣列資料

##### filter()

```javascript
itemsArray.filter((item, index, array) => {
  return item % 2 == 1;
});
```

- 回傳**所有**處理為 true 的項目
- 回傳一個新的陣列

##### find()

```javascript
itemsArray.find((item, index, array) => {
  return item % 2 == 1;
});
```

- 回傳**第一個**處理結果為 true 的項目

##### every()

```javascript
itemsArray.every((item, index, array) => {
  return item % 2 == 1;
});
```

- 檢查陣列內**所有**值是否符合條件
- 回傳 boolean 值

##### some()

```javascript
itemsArray.some((item, index, array) => {
  return item % 2 == 1;
});
```

- 檢查陣列內**是否存在一**值符合條件
- 僅需有值符合即可
- 回傳 boolean 值

##### reduce()

```javascript
var myArr = [1, 2, 3];

// 處理每個元素後等待回傳結果，第一次處理時代入初始值 0
var result = myArr.reduce(function (prev, element) {
  // 與之前的數值加總，回傳後代入下一輪的處理
  return prev + element;
}, 0);
```

- 自陣列首值依序處理
- 第一次被呼叫時，`accumulator` 與 `currentValue` 的值可能為兩種不同的狀況：
  <br>├ 1. 呼叫 `reduce()` 有提供 `initialValue` 時，`accumulator` 會等於 `initialValue`，`currentValue` 等於陣列中的第一個元素值
  <br>└ 2. 未提供 `initialValue`時，`accumulator` 會等於陣列的第一個元素值，`currentValue` 等於陣列的第二個元素

#### 如何安全使用會破壞 Array 資料的 Method

例如 `reverse()` 會直接改變原本陣列的資料：

```js
const arr1 = [1, 2, 3];
// arr1: [1,2,3]
arr1.reverse();
// [3,2,1]
arr1;
// [3,2,1]
```

可以使用展開運算子 `[...arr]` 或是 `concat()` 避開修改原本的陣列：

```js
const arr2 = [1, 2, 3];
// arr2: [1,2,3]
const changedArr2 = [...arr2].reverse();
arr2;
// [1,2,3]
changedArr2;
// [3,2,1]
```

```js
const arr3 = [1, 2, 3];
// arr3: [1,2,3]
const changedArr3 = arr3.concat().reverse();
arr3;
// [1,2,3]
changedArr3;
// [3,2,1]
```

- [便利ページ：Javascript でちょっとした便利な機能を作ってみた](https://qiita.com/poruruba/items/6c67c7eef34ed302feb3)
- [JavaScript Pro Tips - Code This, NOT That - YouTube](https://www.youtube.com/watch?v=Mus_vwhTCq0)

### String

- `String.substr( start, length )`
- `String.substring( start, end )`
- 預設會擷取到最後一個字符

#### String to Int

`parseInt(string, radix)`

### Object

1. `obj[key] = value`
2. `{ [key]: value }`
3. `Object.keys(obj)`
4. `Object.values(obj)`
5. `Object.entries(obj)`
6. `!("key" in obj)`
7. `obj.hasOwnProperty("key")`
8. `delete obj[key]`

### Queue & Stack

- JS 可直接使用 Array 的
  <br>├ `push` 放入結尾
  <br>├ `unshift` 放入開頭
  <br>├ `pop` 取出結尾
  <br>└ `shift` 取出開頭
  <br>來實作這兩種資料結構。

#### Queue

- First In First Out
- `unshift()`、`pop()`

#### Stack

- Last In First Out
- `push()`、`pop()`

### Map & Set

- JS 於 ES6 新增 `Set` 與 `Map` 兩種物件
- [Map and Set](https://javascript.info/map-set)

#### Map

- `Map` 關心的是 `{ 鍵 (key) : 值 (value) }` 的對應關係

```js
// ES6 Map
let mapTable = new Map();

// Add
mapTable.set("string", "string value");
mapTable.set({}, { obj: 1 });
mapTable.set(
  function () {},
  function () {
    console.log("function");
  }
);
mapTable.set(1, 100);

// Get
mapTable.get("string");

// Has
mapTable.has({});

// Iterator
// returns for keys
mapTable.keys();
// returns for values
mapTable.values();
// returns for [key, value], used by default in for...in
mapTable.entries();

// Delete
mapTable.delete(1);

// Delete All
mapTable.clear();

// Length
mapTable.size;

// To Array
[...mapTable.values()];
```

#### Set

- `Set` 關心的是不重覆值的獨立元素 `{value1, value2}`

```jsx
// ES6 Set
let setTable = new Set([1, 2, 3, 4, 5]);

// Add
setTable.add(6);

// Has
setTable.has(1);

// Iterator
setTable.entries();
setTable.keys();
setTable.values();

// Delete
setTable.delete(1);

// Delete All
setTable.clear();

// Length
setTable.size;

// To Array
[...setTable];
Array.from(setTable);
```

### MutationObserver

- [JavaScript 是如何工作的：使用 MutationObserver 跟踪 DOM 的变化](https://blog.fundebug.com/2019/01/10/understand-mutationobserver/)
- [How JavaScript works: tracking changes in the DOM using MutationObserver | by Alexander Zlatkov | SessionStack Blog](https://blog.sessionstack.com/how-javascript-works-tracking-changes-in-the-dom-using-mutationobserver-86adc7446401)
- [DOM 变动观察器（Mutation observer）](https://zh.javascript.info/mutation-observer)

#### 簡介

`MutationObserver` 會在指定的 DOM 出現變化，例如增減節點、變更屬性、修改文字時回傳通知。

#### 使用

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

### IntersectionObserver

- [example](https://codepen.io/osublake/embed/6fd214ecd74e7091ec7b609bb0270f97?height=450&slug-hash=6fd214ecd74e7091ec7b609bb0270f97&user=osublake&tab-bar-color=%23222&name=cp_embed_2#result-box)

#### 簡介

`IntersectionObserver` 會在指定的目標出現在觀察器 (window) 中時，才回傳 `true`，
不同於 jQuery 的 `onscroll` 是在每次捲動時都執行一次監聽。

#### 使用

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

## 非同步處理

- [【初心者向け】JavaScript の非同期処理を理解する　 callback、Promise そして async/await へ - Qiita](https://qiita.com/G-awa/items/652107a9abf7ff6d0d06)
- [JavaScript Promise：簡介  |  Web  |  Google Developers](https://developers.google.com/web/fundamentals/primers/promises?hl=zh-tw)
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

## Import

- [完全解析 JavaScript import、export | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/development/2020/03/25/import-export/)

## What's THIS in JavaScript ?

[What's THIS in JavaScript ? [上]](https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/)

## 小技巧

### 強制轉換資料型別

```javascript
Math.max(1, 2, 3); // 3;
Math.min(1, 2, 3); // 1;
Math.max(1, 2, 3) > Math.min(1, 2, 3); // true;
Math.max() > Math.min(); // false
Math.max(); // -Infinity;
Math.min(); // Infinity;

0.1 + 0.1 + 0.1; // 0.30000000000000004;

true == 1; // true;
true + true; // 2;
true + true === 2; // true;
true === 2 - true; // false;
2 - true; // 1;
true == 1; // true;
true === 1; // false;

[] + []; // ""
{
}
+{}; // "[object Object][object Object]"
[] + {}; // "[object Object]"
{
}
+[]; // 0
1 + []; // "1"
[] + 1; // "1"
{
}
+0; // 0

"5" + 3; // "53";
3 + "5"; // "35";
"0" + 3 + 1; // "031";
"0" + (3 + 1); // "04";
"5" - 3; // 2;
"5" * 3; // 15
"15" / 3; // 5
"5" === 5; // false
"5" == 5; // true
+"5"; // 5
-"123"; // -123;

[...Array(5)].map((_, i) => i); // [ 0, 1, 2, 3, 4 ]
```

### 4 個 request 的方法

- [Native な JavaScript で Fetch API を利用し Ajax を行う](https://qiita.com/doriven/items/503fdc6de9bc0e725334)
- [Javascript の Ajax についての基本まとめ - Qiita](https://qiita.com/katsunory/items/9bf9ee49ee5c08bf2b3d)
- [透過 curl、Python、Postman 來 Request API \- 🐴 的學習筆記](https://jzchangmark.wordpress.com/2016/06/12/%E9%80%8F%E9%81%8E-curl%E3%80%81python%E3%80%81postman-%E4%BE%86-request-api/)
- [一起來把煩人 XMLHttpRequest 變成 Fetch 怎麼樣？](https://realdennis.medium.com/%E4%B8%80%E8%B5%B7%E4%BE%86%E6%8A%8A%E7%85%A9%E4%BA%BA-xmlhttprequest-%E8%AE%8A%E6%88%90-fetch-%E6%80%8E%E9%BA%BC%E6%A8%A3-8657f2854894)
- [AJAX 與 Fetch API · 從 ES6 開始的 JavaScript 學習生活](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)

#### 1. XMLHttpRequest

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

#### 2. jQeury

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

#### 3. Fetch

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

#### 4. Axios

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

### **Good Javascript with modern feature** vs **Bad Code**

#### console.log

##### 1. table

```js
cosnt foo = { name: 'tom', age: 30, nervous: false}
cosnt bar = { name: 'dick', age: 40, nervous: false}
cosnt baz = { name: 'harry', age: 50, nervous: true}

// Bad Code
console.log(foo);
console.log(bar);
console.log(baz);

// Good Code
console.log("%c My Friends,", "color: orange; font-weight: bold");
console.log({ foo, bar, baz });

console.table([foo, bar, baz]);
```

##### 2. time

```js
console.time("looper");

let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd("looper");
```

##### 3. trace

```js
const deleteMe = () => console.trace("bye bye database");

deleteMe();
deleteMe();
```

#### destucturing

```js
const turtle = {
  name: "Bobo",
  legs: 4,
  shell: true,
  type: "amphibious",
  meal: 10,
  diet: "berries",
};

// Bad Code
function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kils of ${animal.diet}`;
}

// Good Code
function feed({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}
// OR
function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}
```

#### Template literals

```js
// Bad Code
let bio =
  horse.name +
  "is a " +
  horse.size +
  " horse skilled in " +
  horse.skills.join(" & ");

// Good Code
const { name, size, skills } = horse;

bio = `${name} is a ${size} skilled in ${skills.join(" & ")}`;

console.log(bio);
```

```js
function horseAge(str, age) {
  const ageStr = age > 5 ? "old" : "young";
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
```

#### spread syntax

```js
const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 45 };

// Bad Code
pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

// OR
const lv10 = Object.assign(pikachu, stats);
const lv11 = Object.assign(pikachu, { hp: 45 });

// Good Code
const lv10 = { ...pikachu, ...stats };
const lv11 = { ...pikachu, hp: 45 };
```

#### Array

```js
let pokemon = ["Arbok", "Raichu", "Sandshrew"];

// Bad Code
pokemon.push("Bulbasaur");
pokemon.push("Metapod");
pokemon.push("Weedle");

// Good Code

// Push
pokemon = [...pokemon, "Bulbasaur", "Metapod", "Weedle"];

// Shift
pokemon = ["Bulbasaur", "Metapod", "Weedle", ...pokemon];
```

#### loops

```js
const orders = [500, 30, 99, 15, 223];

// Bad Code
const total = 0;
const withTax = [];
const highValue = [];
for (let i = 0; i < orders.length; i++) {
  // Reduce
  total += orders[i];

  // Map
  withTax.push(orders[i] * 1.1);

  // Filter
  if (orders[i] > 100) {
    highValue.push(orders[i]);
  }
}

// Good Code
const total = orders.reduce((acc, cur) => acc + cur);
const withTax = orders.map((v) => v * 1.1);
const highValue = orders.filter((v) => v > 100);
```

#### async / await

```js
const random = () => {
  return Promise.resolve(Math.random());
};

// Bad Code
const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then((v) => {
      first = v;
      return random();
    })
    .then((v) => {
      second = v;
      return random();
    })
    .then((v) => {
      third = v;
      return first + second + thrid;
    })
    .then((v) => {
      console.log(`Result ${v}`);
    });
};

// Good Code
const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const thrid = await random();

  console.log(`Result ${first + second + thrid}`);
};
```

### ES6 加進的新功能

#### 1. Default Parameters

更快速的 function 參數給定預設值：

```javascript
var link = function (height = 50, color = "red", url = "https://example.com") {
  // ...
};
```

#### 2. Template Literals

允許透過語法 `${val}` 將變數嵌入至字串中：

```javascript
var name = `Your name is ${first} ${last}.`;
```

#### 3. Multi-line Strings

允許使用 \`（backticks）接受多行字串指定：

```javascript
var name = `first line
second line`;
```

#### 4. Destructing Assignment

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

#### 5. Object Literals

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

#### 6. Arrow Function

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

#### 7. Promise

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

#### 8. Let & Const, Block-Scoped

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

#### 9. Classes

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

#### 10. Module

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

### QR Code

- [JavaScript で実装してみる QR コードジェネレータ - Qiita](https://qiita.com/bellbind/items/b80698ceddebb6dfe4aa)
- [qrcode.js](https://davidshimjs.github.io/qrcodejs/)

```javascript
$("#qrcode_area").empty();
new QRCode($("#qrcode_area")[0], this.qrcode_input);
```

### Encode

```javascript
base64_encode: function(encode){
            try{
                if( encode )
                    this.base64_output = btoa(this.base64_input);
                else
                    this.base64_output = atob(this.base64_input);
            }catch( error ){
                alert(error);
            }
        },
        url_encode: function(encode){
            try{
                if( encode )
                    this.url_output = encodeURI(this.url_input);
                else
                    this.url_output = decodeURI(this.url_input);
            }catch( error ){
                alert(error);
            }
        },
        html_encode: function(space){
            const html_entities = {
                '\"': '&quot;',
                '&': '&amp;',
                '\'': '&apos;',
                '<': '&lt;',
                '>': '&gt;',
                ' ': space ? '&nbsp;' : undefined,
            };

            this.html_output = this.html_input.split('').map((entity) => {
                return html_entities[entity] || entity;
            }).join('');
        },
```

### Password

```javascript
passwd_create: function(){
            var passwd_num = Number(this.passwd_num);
            var passwd_number_num = this.passwd_check_number ? Number(this.passwd_number_num) : 0;
            var passwd_symbol_num = this.passwd_check_symbol ? Number(this.passwd_symbol_num) : 0;
            if( passwd_num < 1 || passwd_num < (passwd_number_num + passwd_symbol_num) ){
                alert('入力が不正です。');
                return;
            }
            if( (!this.passwd_check_lower_letter && !this.passwd_check_upper_letter) && passwd_num != (passwd_number_num + passwd_symbol_num)){
                alert('入力が不正です。');
                return;
            }

            var kind = Array(passwd_num);
            kind.fill(0);
            for( var i = 0 ; i < passwd_number_num ; i++ )
                kind[i] = 'n';
            for( var i = 0 ; i < passwd_symbol_num ; i++ )
                kind[passwd_number_num + i] = 's';

            for( var i = 0 ; i < passwd_num ; i++ ){
                var index = make_random(passwd_num - 1);
                if( index == i || kind[i] == kind[index] )
                    continue;
                var temp = kind[i];
                kind[i] = kind[index];
                kind[index] = temp;
            }

            const number_pattern = '0123456789';
            var alpha_pattern = '';
            if( this.passwd_check_lower_letter ){
                if( this.passwd_check_ecept_lO )
                    alpha_pattern += "abcdefghijkmnopqrstuvwxyz";
                else
                    alpha_pattern += "abcdefghijklmnopqrstuvwxyz";
            }
            if( this.passwd_check_upper_letter ){
                if( this.passwd_check_ecept_lO )
                    alpha_pattern += "ABCDEFGHJKLMNPQRSTUVWXYZ";
                else
                    alpha_pattern += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }

            var passwd = '';
            for( var i = 0 ; i < kind.length ; i++ ){
                if( kind[i] == 'n' ){
                    var index = make_random(number_pattern.length - 1);
                    passwd += number_pattern.charAt(index);
                }else if( kind[i] == 's' ){
                    var pattern = this.passwd_symbol_pattern;
                    var index = make_random(pattern.length - 1);
                    passwd += pattern.charAt(index);
                }else{
                    var index = make_random(alpha_pattern.length - 1);
                    passwd += alpha_pattern.charAt(index);
                }
            }

            this.passwd_password = passwd;
        }
```

## 函式庫

### 資料處理

- [lodash](https://lodash.com/)
- [moment.js](https://momentjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [sheetjs](https://sheetjs.com/)
- [jExcel](https://github.com/paulhodel/jexcel)
- [newsdev/archieml-js](https://github.com/newsdev/archieml-js)
- [cheerio](https://github.com/cheeriojs/cheerio)
- [delay](https://www.npmjs.com/package/delay)

### 圖型繪製

- [chroma.js](https://github.com/gka/chroma.js)
- [chromatic-sass](https://github.com/bugsnag/chromatic-sass)
- [image-to-ascii](https://github.com/IonicaBizau/image-to-ascii)
- [dxm-text-animation](https://github.com/sujoyu/dxm-text-animation)
- [HIGHCHARTS](https://www.highcharts.com/)

### 動態效果

- [Three.js](https://threejs.org/docs/)
- [anime.js](https://animejs.com/)
- [mojs/mojs](https://github.com/mojs/mojs)
- [julianshapiro/velocity](https://github.com/julianshapiro/velocity)
- [Popmotion/popmotion](https://github.com/popmotion/popmotion)
- [maxwellito/vivus](https://github.com/maxwellito/vivus)
- [GSAP 生態系](https://greensock.com/get-started-js)
- [CreateJS でオブジェクトを操作してみた](https://qiita.com/pn299pn/items/e6b9f7a61d895923e55e)
- [jlmakes/scrollreveal](https://github.com/jlmakes/scrollreveal)
- [thednp/kute.js](https://github.com/thednp/kute.js/)
- [mattboldt/typed.js](https://github.com/mattboldt/typed.js)
- [TimelineMax](https://greensock.com/timelinemax)
- [Easeing](https://greensock.com/ease-visualizer)
- [Pixi.JS](https://pixijs.io/pixi-filters/tools/demo/)
- [matter.js](http://brm.io/matter-js/)
- [p5.js](https://p5js.org/)
- [phaser](https://github.com/photonstorm/phaser)
- Textillate.js
- BounceJS
- DynamicJS
- ParticleJS
- MoveJS
- HoverIntent
- JqueryTransit
- FlyingCodeJS

### 其它

- [intro.js](https://introjs.com/)
- [Darkmode.js](https://darkmodejs.learn.uno/)
- [dat.gui](https://github.com/dataarts/dat.gui)
- [scene.js](https://daybrush.com/scenejs/)

### D3.js

- [D3.js Show Reel](https://bl.ocks.org/mbostock/1256572)
- [The D3 Graph Gallery – Simple charts made with d3.js](https://www.d3-graph-gallery.com/)
- [Learn D3.js step by step](http://d3indepth.com/)
- [D3.js 的研究 - 黃冠融 - Medium](https://medium.com/@mybaseball52/d3-js-%E7%9A%84%E7%A0%94%E7%A9%B6-21da2ab7a2bb)
- [D3.js 基礎繪圖](https://medium.com/@mybaseball52/d3-js-basics-of-drawing-charts-4580dca5cee3)
- [增強 D3.js 的視覺化功能](https://medium.com/@mybaseball52/%E5%A2%9E%E5%BC%B7-d3-js-%E7%9A%84%E8%A6%96%E8%A6%BA%E5%8C%96%E5%8A%9F%E8%83%BD-9497f8553790)

#### 處理資料

- [数组 · d3/d3 Wiki](https://github.com/d3/d3/wiki/%E6%95%B0%E7%BB%84)
- [The difference between d3.nest(), d3.map() and data.map / Stuart Thompson / Observable](https://observablehq.com/@stuartathompson/the-difference-between-d3-nest-d3-map-and-data-map)
- [Nesting and Accessing Data in D3v4 | Amber Thomas Data Portfolio & Blog](https://amber.rbind.io/2017/05/02/nesting/)

#### 定義比例 ( `scale.linear()` )

- Scale 分為兩大類，一類是以數字或日期為比例縮放的「Quantitative」，一類是是以自訂的名稱或標籤為縮放依據的「Ordinal」
- Quantitative Scale 分為 linear、pow、log、quantize、threshold、quantile 和 identity，其中以 linear 最常使用
- [SVG D3.js - 定義比例 ( scale.linear() ) - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201411/svg-d3-03-scale-linear.html)

#### 繪製線段

- [Drawing axis in d3.js](https://www.d3-graph-gallery.com/graph/custom_axis.html)
- `line()`
- `.interpolate()`

### [quicksettings](https://github.com/bit101/quicksettings)

`<script src="https://cdn.jsdelivr.net/npm/quicksettings@latest/quicksettings.min.js"></script>`

```javascript
const cat = new Cat();
const settings = QuickSettings.create(window.innerWidth - 200);

// input:text
settings.addTest("Name", (v) => {
  cat.setName(v);
});
// checkbox
settings.addBoolean("Sleep", cat.isSleep, (v) => {
  cat.setSleep(v);
});
// button
settings.addButton("meow", () => {
  cat.meow();
});
```

## 框架

- [Open Source Javascript Platform for Web, Mobile, and Desktop | Meteor](https://www.meteor.com/)
- [Koa - next generation web framework for node.js](https://koajs.com/)
- [alpinejs/alpine: A rugged, minimal framework for composing JavaScript behavior in your markup.](https://github.com/alpinejs/alpine)
- [NestJS - A progressive Node.js framework](https://nestjs.com/)
- [AdonisJs - Node.js web framework](https://adonisjs.com/?fbclid=IwAR3-RUQoWibCTQnSJrnKuEC6hD8PGBCoVAGn38PP0BjgsGSpp7DUDrIZOME)
- [frourio](https://qiita.com/m_mitsuhide/items/00b139bb565dddf8006a)

## 進階

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
- [有趣的 JavaScript 运算符用法](https://www.infoq.cn/article/jPF4p0Srd9qhVbWMaOFh)
- [7 Useful JavaScript Tricks](https://davidwalsh.name/javascript-tricks)
- [JS 原力覺醒 — Event Queue & Event Loop 、Event Table](https://medium.com/walkout/js-%E5%8E%9F%E5%8A%9B%E8%A6%BA%E9%86%92-day13-event-queue-event-loop-event-table-374fbbef3e40)
- [覺得 JavaScript function 很有趣的我是不是很奇怪 - Huli](https://blog.huli.tw/2020/04/18/javascript-function-is-awesome/)
- [\[JavaScript\]初心者が初見で必ず thinking 顔になるもの特集 - Qiita](https://qiita.com/kozzzz/items/b4cd57ead41fc6355afd)
- [なぜ JavaScript の Date コンストラクタは例外を投げないのか - Qiita](https://qiita.com/uhyo/items/4cef6d0b52ffd20c1af4)

## TypeScript

- [TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/)
