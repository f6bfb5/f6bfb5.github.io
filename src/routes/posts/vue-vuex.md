---
title: "Vue 筆記 - Vuex"
date: 2019-12-07T06:43:15.000Z
summary:
tags: F2E, JavaScript
---

## 介紹

- [Vuex](https://vuex.vuejs.org/) 參考 Flux design pattern 與 Redux 狀態管理模式
- 將 `單向資料流 Flux 設計模式` 實作進 Vue 框架中，取 `flux` 中的 `x` 得名
- 使用單一狀態樹統一管理應用程式的所有狀態，並儲存狀態（`state`）於 `store`

### `Actions`:

1. 定義 App 的所有行為
   前端組件觸發事件時會 `dispatch` 給 `Actions`
   `Actions` 不會直接修改 `State`，而是提交（commit） `mutation`
   讓對應的 `mutation handler` 去更改 `State`
2. 亦可非同步與 Backend API 溝通

### `Mutations`:

1. 從 `commit` 接收 `Actions` 傳遞的資料與行為，透過計算處理後更改 `State`
2. 每個 `Mutation` 都有一個字串型態的 `type`（事件類型）和 `handler`（回調函數）。
3. `handler`（回調函數）是實際更改狀態的地方，首個傳入參數便為 `State`
4. 只有 `commit mutation` 才可更改 `State` 中的狀態，不可直接調用 `mutation handler`

### `State`:

1. 使用一個物件型態記錄 App 所有狀態
2. 由 `Mutation` 更改狀態
3. 建議將所有 App 狀態存入 `Store` 中，但 Vuex 仍可讓組件保有局部狀態

### 單向資料流

所有的動作從 `action` 出發，將結果存進 store 中，改變 `state`，
`state` 改變後，`view` 會連同改變，
而這一連串的行為是 `不可逆` 的，因此稱為單向資料流。

## 安裝

1. npm: `npm instasll vuex --save`
2. CDN: `https://unpkg.com/vuex`

### 設置

`main.js`:

```js
import Vuex from "vuex";
Vue.use(Vuex);
```

## 參考文章

- [Vuex 起手式 - HackMD](https://hackmd.io/@chupai/BJA4FwcJL)
- [Vuex 學習筆記 :: 2018 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20107601/ironman/1454)
- [vuex をまだ理解していない全人類に捧ぐ vuex を利用したコードの図解 - Qiita](https://qiita.com/fruitriin/items/42b0ebc5f8a524a0ae17)
