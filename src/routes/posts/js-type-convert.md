---
title: "JavaScript 筆記 - 資料型別轉換與資料處理"
date: 2021-01-11T00:07:30.000Z
tags: F2E, JavaScript
---

## 強制轉換資料型別

```javascript
// Convery Data Type
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

// convert to boolean
const obj = { hoge: "hoge" };
!!obj.hoge; // true
```

## 複製內容

```javascript
// Shallow Copy
// only copy first depth data
const shallowCopy = { ...obj };

// Deep Copy
// use JSON.parse/stringify
const deepCopy = JSON.parse(JSON.stringify(obj));
// or use loadsh
const deepCopy = _.cloneDeep(obj);
```

## 檢查 Nullish

```javascript
// Nullish Coalescing
// check whether left-hand is null or undefined
const hoge = null ?? "default"; // "default"
const fuga = false ?? "default"; // false

// Optional Chaining
// check whether obj ref is nullish
obj = {
  fuga: "fuga",
};

obj?.hoge; // undefined
obj && obj.hoge; // equal to this statement
obj?.fuga; // "fuga"
obj?.fuga?.hoge; // undefined
```

- [\[JavaScript\]初心者が初見で必ず thinking 顔になるもの特集 - Qiita](https://qiita.com/kozzzz/items/b4cd57ead41fc6355afd)
- [有趣的 JavaScript 运算符用法](https://www.infoq.cn/article/jPF4p0Srd9qhVbWMaOFh)
- [7 Useful JavaScript Tricks](https://davidwalsh.name/javascript-tricks)

## for...in 和 for...of 的差別

1. 迭代 **物件屬性** 時使用 `for...in`，迭代 **陣列** 時使用 `for...of`
2. `for..in` 輸出 **屬性名稱 (key)**，`for...of` 輸出 **值 (value)**
3. `for...of` 是 ES6 的新語法，補足了 ES5 `for...in` 的不足之處
4. `for...of` 不能迭代物件，需與 `Object.keys()` 搭配使用

## Array

- `var fiveItems = new Array(5);`：建立指定長度陣列
- `fill(value[, start=0[, end=this.length]])`：填入輸入值至陣列的指定索引開始至結尾處
- `map()` 可以使用自訂判斷為真的值建立一個新陣列：`map1 = array1.map(x ⇒ x*2 );`，注意此方法與資料型態的 `Map()` 是不同東西。
- `reduce()` 簡言之能夠簡化需要遞迴整個陣列的操作，並回傳一經過處理後的值。例如計算整個陣列總和可以使用 `array1.reduce((pre,cur) => pre+cur)` 求得。
- 檢查陣列是否為空：`if (typeof image_array !== 'undefined' && image_array.length > 0)`

### 快速產生陣列內容

- [alternative range()](https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp)

```javascript
// 數值
[...Array(5).keys()]; // => [0, 1, 2, 3, 4]

// 文字
String.fromCharCode(
  ...[...Array("D".charCodeAt(0) - "A".charCodeAt(0) + 1).keys()].map(
    (i) => i + "A".charCodeAt(0)
  )
); // ⇒ "ABCD"

// 組合
for (const x of Array(5).keys())
  console.log(x, String.fromCharCode("A".charCodeAt(0) + x)); // ⇒ 0,"A" 1,"B" 2,"C" 3,"D" 4,"E"
```

### 刪除 Array

```javascript
// delete array
const array = ["a", "b", "c"];
array.length = 0; // array = []
```

### slice() vs splice() vs split()

#### slice()

- `array.slice(begin, end)`
- 複製陣列項目，不會修改原始陣列，回傳指定兩點之間的內容
- `begin`：開始複製項目的位置，負值則為反方向計算
- `end`：結束複製項目的位置，留空時會複製至結尾

#### splice()

- `array.splice(start, deleteCount, item...)`
- 新增／刪除陣列項目，會修改原始陣列，回傳被刪除的項目
- `start`：插入或刪除項目的位置，負值則為反方向計算
- `deleteCount`：刪除的個數，傳入 0 則不會刪除
- `item...`：要插入的新項目。

#### split()

- `string.split(seperator, length)`
- 分割字串成陣列，不會修改原始字串，回傳分割後的字串陣列
- `seperator`：字符或正規表達式，依照此參數分割字串
- `length`：回傳陣列的最大長度

### forEach(), map(), filter(), find(), every(), some(), reduce()

- [關於 JS 陣列 20 種操作的方法](https://hsiangfeng.github.io/javascript/20190421/1216566123/)
- [JavaScript 陣列 (array) 操作處理大全](https://w3c.hexschool.com/blog/6594e4ff)

#### forEach()

```javascript
itemsArray.forEach((item, index, array) => {
  // code here
});
```

- 處理陣列內**每個**資料
- 無回傳值（`undefined`）
- 會改變原始陣列資料

#### map()

```javascript
itemsArray.map(function (item, index, array) {
  return item + item;
});
```

- 處理陣列內**每個**資料
- 回傳一個新的陣列
- 不會改變原始陣列資料

#### filter()

```javascript
itemsArray.filter((item, index, array) => {
  return item % 2 == 1;
});
```

- 回傳**所有**處理為 true 的項目
- 回傳一個新的陣列

#### find()

```javascript
itemsArray.find((item, index, array) => {
  return item % 2 == 1;
});
```

- 回傳**第一個**處理結果為 true 的項目

#### every()

```javascript
itemsArray.every((item, index, array) => {
  return item % 2 == 1;
});
```

- 檢查陣列內**所有**值是否符合條件
- 回傳 boolean 值

#### some()

```javascript
itemsArray.some((item, index, array) => {
  return item % 2 == 1;
});
```

- 檢查陣列內**是否存在一**值符合條件
- 僅需有值符合即可
- 回傳 boolean 值

#### reduce()

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

### 如何安全使用會破壞 Array 資料的 Method

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

## String

- `String.substr( start, length )`
- `String.substring( start, end )`
- 預設會擷取到最後一個字符

### String to Int

`parseInt(string, radix)`

## Object

1. `obj[key] = value`
2. `{ [key]: value }`
3. `Object.keys(obj)`
4. `Object.values(obj)`
5. `Object.entries(obj)`
6. `!("key" in obj)`
7. `obj.hasOwnProperty("key")`
8. `delete obj[key]`

## Queue & Stack

- JS 可直接使用 Array 的
  <br>├ `push` 放入結尾
  <br>├ `unshift` 放入開頭
  <br>├ `pop` 取出結尾
  <br>└ `shift` 取出開頭
  <br>來實作這兩種資料結構。

### Queue

- First In First Out
- `unshift()`、`pop()`

### Stack

- Last In First Out
- `push()`、`pop()`

## Map & Set

- JS 於 ES6 新增 `Set` 與 `Map` 兩種物件
- [Map and Set](https://javascript.info/map-set)

### Map

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

### Set

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
