---
title: "Vue 筆記"
date: 2019-12-07T06:42:15.000Z
published: 2019-12-07T06:42:15.000Z
author: f6bfb5
summary:
layout: blog
---

- [Vue.js 30 天隨身包](https://ithelp.ithome.com.tw/users/20107673/ironman/1470)
- [Vue.js 簡介 | 重新認識 Vue.js | Kuro Hsu](https://book.vue.tw/CH1/1-1-introduction.html)
- [Vue.js を習得するためにやった事 まとめ（随時更新）](https://qiita.com/i-ryo/items/baa50cf0a6647fe8bd2e)
- [Vue.js を 100 時間勉強して分かったこと](https://qiita.com/kskinaba/items/3e8887d45b11f9132012)
- [Vue 開発者のための Vue.js ベストプラクティス集 15 選](https://qiita.com/mtoyopet/items/87a32d8e3497c5421727)
- [2019 年版 Vue.js を使ってる人には必ず知っていてほしい Vue.js の武器とドキュメントに書かれていないコンポーネントやメンテナンスの際に役立つ Tips - Qiita](https://qiita.com/kahirokunn/items/6b4834b9a13406535f32)
- [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
- [Vue 知识点自检清单(上)](https://mp.weixin.qq.com/s?__biz=MzIyMDkwODczNw%3D%3D&mid=2247486027&idx=2&sn=3926be273630a65fc69c4494ce525fa9&chksm=97c597e5a0b21ef3ab889271a3ef15327472d5efb386bd6693949b48d40796f864bc152e9d9b&scene=21#wechat_redirect)
- [Vue.js を触る際に知っておきたい仮想 DOM の話](https://qiita.com/terry_6518/items/4ecb90fa474895b81b8a)
- [Vue Custom Transition Component - Milk Midi - Medium](https://medium.com/@milkmidi/vue-custom-transition-component-54fdcb905d77)
- [Vue.js の v-model を正しく使う - Qiita](https://qiita.com/simezi9/items/c27d69f17d2d08722b3a)
- [【Vue.js】v-model 解体新書 - Qiita](https://qiita.com/al_tarte/items/0ff49219cd1b25411b7a)
- [Vue でフォームのコンポーネント化に立ち向かう - Qiita](https://qiita.com/daiend/items/b179bbeae588429107ae)
- [無料で Vue.js + express で作った API を Azure Static Web Apps でホストしてみよう - Qiita](https://qiita.com/okazuki/items/54c91343d2b231f4e004)
- [\[掘竅\] 為什麼畫面沒有隨資料更新 - Vue 響應式原理（Reactivity） ~ PJCHEN der 那些沒告訴你的小細節](https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html)

## 介紹

- 輕量
- MVC 架構
- Components 系統
- Virtual DOM: V-Node
- Directives
- Two-way Binding
- Angular 使用 TypeScript 撰寫，React 使用 JSX 語法撰寫，皆需編譯。Vue 不需編譯，可以馬上開始使用

## 導入

### CDN

`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`

### npm

### Vue CLI

- [Vue-cli](https://cli.vuejs.org/)
- [Vue.js devtools Chrome extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

#### 簡單比較

- CDN：使用 Vue.js 的基礎功能
- Vue CLI：能夠在 Vue.js 的基礎上追加任意擴充功能
- Nuxt.js：整理好 Vue.js 各個擴充功能的套組

Vue CLI 與 Nuxt.js 最大的差別在於是否要進行 SSR（Server Side Rendering），不需要 SSR 的情況則不必準備 node.js 伺服器，可以直接將 SPA 或 Static Generated build 好的檔案直接放到 S3 或 Github Pages 上面。

#### 安裝 Vue 環境

`npm install -g vue-cli`
├ `npm install -g @vue/cli`
└ `npm install -g @vue/cli-service-global`

#### 建置

1. 使用官方提供的樣板快速建立專案，可使用 `vue list` 查看樣板列表。

```bash
vue init [template] [project_name]
vue init webpack [project_name]
vue init webpack-simple [project_name]
cd [projec_name]
npm install
npm run dev
npm run build
```

2. 建立自訂專案

```bash
vue create [project-name]
cd [projec_name]
npm run serve
npm run build
vue ui
```

3. 修改 build 後的檔案參照路徑：於根目錄底下新增／修改 `vue.config.js`：

```js
module.exports = {
  publicPath: "./,
}
```

## 基礎介紹

### Vue Instance（根實體）

每個 Vue App 皆從創造 vue instance 開始，透過 Vue Constructor 產生。
可傳入選項物件（Options）包含需要用到的屬性，
如：
├ 掛載點（el）
├ 資料（data）
├ 方法（methods）
├ 模板（template）
└ 生命期掛勾（hooks）...etc.

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
  },
});
```

### MVVM 架構

`View`（DOM）
← `ViewModel`（DOM Listeners、Vue Instance）
→ `Model`（Javascript objects）

`View`（DOM）
← `ViewModel`（Data Bindings、Vue Instance）
← `Model`（Javascript objects）

### Lifecycle 生命期

- [Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

vue 在 lifecycle 中會
├ 建立 Vue Instance
├ 綁定資料
├ 配置事件
├ 編譯樣板
└ 重覆修改資更新資料
直到 Vue Instance 被銷毀（destroyed）
才會解除綁定相關內容，完成整個 lifecycle。

vue 提供了 8 個 Instance Lifecycle Hooks，
能在 lifecycle 各個處理的時間點前後，提供客製化處理的方式，
這 8 個 hook 皆為 function。

#### 1. beforeCreate

時間點：初始化 vue instance 並開始 lifecycle 之後，開始綁定資料與配置事件之前。
此時仍然無法調用 `$data`。

應用場景：loading 進頁面的事件

#### 2. created

時間點：已創建 vue instance，可取得 `$data`，已綁定屬性與事件，尚未掛載 el 與生成 DOM。

#### 3. beforeMount

時間點：開始掛載 el 之前，首次調用相關 render 函式，尚未綁定 DOM。

#### 4. mounted

時間點：剛創建好的 `vm.$el` 取代 el，並掛載至 vm(app) 上，已綁定 DOM。

應用場景：對後端發出請求或讀取新資料

#### 5.（DOM 渲染）

#### 6.（偵測 DOM 變更）

#### 7. beforeUpdate

於資料更新時調用，可以在 Virtual DOM 重新 render 與 patch 之前變更資料狀態，
這個階段不會繪製 view。

#### 8. updated

資料更新後會讓 Virtual DOM 重新 render 頁面，繪製出正確的 view。

#### 9.（`this.$destroy();`）

#### 10. beforeDestroy

在 vue instance 被銷毀前調用。此階段還可以完全使用這個 vue instance。

#### 11. destroyed

vue instance 銷毀後可調用，調用後這個 vue instance 底下的資料與樣板會解除綁定，
事件會取消監聽，所有子組件也會被銷毀。

### Virtual DOM

DOM（Document Object Model）中文翻譯為「文件物件模型」，是 HTML、XML、SVG 文件可以使用的一組 API。
它提供了文件結構化的表示法（樹狀結構），並定義讓程式可以存取與改變文件架構、風格和內容的方法，
目的是為了搭起網頁與程式碼之間溝通的橋樑，將網頁與程式碼（或 script）連結在一起。
一個網頁的所有元素組織在一起，就構成了一棵 DOM Tree。

然而操作 DOM 會使頁面重新 render 才能顯示結果，非常耗費整體運作效能，
因此 Facebook 團隊研發 ReactJS 時改良 MVC 架構中的 View，出現了 Virtual DOM。

Virtual DOM（虛擬 DOM）是以 JavaScript 物件模擬特定 DOM Tree，
也就是不直接操作 DOM，而是改用模擬結構的方式，達到優化效能的目的，
讓頁面刷新載入的速度變快。

Virtual DOM 不會讓瀏覽器掃描整個 DOM Tree ＝不會刷新整個頁面，
它會使用 DOM diff 這個演算法去比較這一次跟上一次 Virtual DOM 的差異，
接著處理有差異的部分，然後更新需要被更新的組件。

Vue 在版本 2.0 之後才加入 Virtual DOM，
Vue 的 Virtual DOM 是 VNode，一個 VNode 的結構包含以下這些屬性：
├ `tag`：該節點的 html 標籤
├ `data`：該節點的數據資料
├ `children`：該節點底下的子節點
├ `text`：該節點的文本
├ `elm`：當前虛擬節點對應的真實 DOM 節點
├ `ns`：該節點的 namespace
├ `context`：編譯範圍
├ `functionalContext`：函數化組件的編譯範圍
├ `key`：該節點的 key 屬性，用來辨識該節點
├ `componentOptions`：創建 vue instance 會用到的資訊
├ `child`：該節點對應的 vue instance
├ `parent`：該節點的父節點
├ `raw`：raw html
├ `isStatic`：該節點是否為靜態節點
├ `isRootInsert`：該節點是否作為根節點插入 tree，值為 false
├ `isComment`：該節點是否作為註釋節點
├ `isCloned`：該節點是否為克隆節點
└ `isOnce`：該節點是否有 v-once 指令

而常見的 VNode 有這五類:
├ `EmptyVNode`：沒有內容的註釋節點
├ `TextVNode`：文本節點
├ `ElementVNode`：普通元素節點
├ `ComponentVNode`：組件節點
└ `CloneVNode`：克隆節點，可生成上面任意類型一模一樣的副本節點

### 專案架構

- [Structuring a Vue project — Authentication - Boris Savic - Medium](https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16)

```
.
├── package.json
├── package-lock.json
├── vue.config.js
├── dist/
└── src/
    ├── App.vue
    ├── assets/
    │   └── logo.png
    ├── styles/
    │   ├── _customize.scss
    │   ├── _dataAttribute.scss
    │   ├── _easing.scss
    │   ├── _element_ui_customize.scss
    │   ├── _flexbox.scss
    │   ├── _reset.scss
    │   ├── _scrollbar.scss
    │   ├── _variable.scss
    │   └── style.scss
    ├── components/
    │   └── HelloWorld.vue
    ├── main.js
    ├── router.js
    ├── services/
    │   ├── api.service.js
    │   ├── storage.service.js
    │   └── user.service.js
    ├── store/
    │   ├── auth.module.js
    │   └── index.js
    ├── views/
    │   ├── About.vue
    │   ├── Home.vue
    │   └── LoginView.vue
    ├── lang/
    │   ├── en.js
    │   ├── zh_tw.js
    │   └── index.js
    └── utils/
        ├── resetForm.js
        └── validate.js
```

- `npm run dev` 啟動後會同時開啟根目錄的 `index.html` 與 src 資料夾內的 `main.js`
- `main.js` 會同時執行 `App.vue` 與 router 資料夾內的 `index.js`

## 資料綁定

### 選項物件屬性：`data`

`data` 可用來儲存組件內部狀態或資料，其資料型態可以是 object 或 function，
但需要注意的是，各組件檔（`.vue`）為各自獨立非共用，
所以組件中的 `data` 只能是 function 型態。
範例如下：

```html
<div id="app">{{ message }}</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
  },
});
```

組件中的 data 只能是 function 型態：

```javascript
export default {
  data() {
    return {
      message: "Hello Test!",
    };
  },
};
```

### 資料綁定指令

#### `v-text`

- 更新指定元素的 `textContent`，即整個元素內容

```html
<div id="app">
  <span v-text="msg"></span>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
  },
});
```

- 只想更新部份內容時需改使用雙大括號 `{{ }}`

#### `v-html`

- 更新指定元素的 `innerHTML`，內容會為普通的 HTML 語法而非 Vue 模板。
- 注意不要使用此指令任意接受其他不可信任的 HTML，很容易導致 XSS 攻擊的風險。
- 由於此綁定資料內容未被 Vue 模板編譯，單一組件中的 scoped css 不會套用進 `v-html` 的 HTML 內容中。

#### `v-model`

- 雙向綁定 (Two-way Binding)
- 當使用者輸入資料到輸入框後，會自動將資料存在一個變數中，並即時更新資料到綁定的 View 當中
- 只能使用於自訂組件或表單元素：
  ├ 單行輸入框 `input`
  ├ 多行輸入框 `textare`
  ├ 單選按鈕 `radio`
  ├ 複選按扭 `checkbox`
  └ 下拉式選單 `select`
- 是整合 `v-bind:value="value"` 和 `v-on:input="value = $event.target.value"` 的語法糖
  └ `radio` 和 `select` 的綁定事件會從 `input` 換為 `change`

```html
<div id="app">
  <input type="text" v-model="message" />
  <div>{{ message }}</div>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
  },
});
```

### 修飾符號 modifiers

- `.lazy`: 改為使用 `onChange` 監聽，等到為非 focus 狀態（亦或是按下 Enter 鍵之後）才執行處理
- `.number`: 將預設值的型態 `string` 轉為數值 `number`
- `.trim`: 刪除內容中的首尾空白，使用 `onChange` 監聽

## 屬性綁定

### 屬性綁定指令

#### `v-bind` = `:`

- 綁定 HTML 元素的屬性（attribute）至 Vue instance
- 可省略為 `:`

```html
<div id="app">
  <a v-bind:href="url" v-bind:title="hint">link1</a>
  <a v:href="url" :title="hint">link1</a>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello World!",
  },
});
```

- 可使用 object 或 array 寫法綁定，稱為 Class & Style Binding

Object：

```html
<div id="app">
  <ul class="menulist">
    <li>
      <a href="#" :class="{ active: isActive, hasError: isError }">Home</a>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    isActive: true,
    isError: true,
  },
});
```

Object 2：

```html
<div id="app">
  <ul class="menulist">
    <li>
      <a href="#" :class="classObject">Home</a>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    classObject: {
      active: true,
      hasError: true,
    },
  },
});
```

Array：

```html
<div id="app">
  <ul class="menulist">
    <li>
      <a href="#" :class="[activeClass, errorClass]">Home</a>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    activeClass: "active",
    errorClass: "hasError",
  },
});
```

三元運算式判斷：

```html
<div id="app">
  <ul class="menulist">
    <li>
      <a href="#" :class="[isActive ? activeClass : '', errorClass]">Home</a>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Work</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    activeClass: "active",
    errorClass: "hasError",
  },
});
```

### 修飾符號 Modifiers

- `.prop`: 改為綁定 DOM 的屬性 (property)
- `.camel`: 2.1.0 版之後可用，
  ├ 若欲綁定的屬性名稱為 kebab-case 命名法（即屬性名稱含有 `-`）
  │ 可使用此裝飾符號將屬性名稱改為 camelCase 命名法
  │ 但建立專案時使用含有 `vue-loader` 或 `vueify` 的編譯器（如：Webpack）
  └ 便不需使用此修飾符號。

```html
<a :href="url" :title.prop="hint">link</a>
<br />
<svg :view-box.camel="viewBox"></svg>
```

## 事件處理

### 選項物件屬性: `methods`

methods 這個屬性用來定義方法，如果我們在 UI 操作了什麼動作
都可以寫 methods 去回傳方法，執行相對應的事件
通常 methods 定義方法的方式是一個包住 function 的 object
方法寫好後，就需要有個地方去呼叫（觸發）這個方法
此時我們可以在 HTML 元素中加入事件監聽器，使用的指令就是 `v-on`

### 事件處理指令

#### `v-on` = `@`

- 在 HTML 元素中加入事件監聽器，即可找到的對應事件處理方法
  也就是我們在 vue instance 宣告的 methods
- 可省略為 `@`

function：

```html
<div id="app">
  <p>{{ counter }}</p>
  <button v-on:click="addCounter()">Counter Plus</button>
  <button @click="addCounter()">Counter Plus</button>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
  methods: {
    addCount: function () {
      this.count += 1;
    },
  },
});
```

inline statement：

```html
<div id="app">
  <p>{{ counter }}</p>
  <button v-on:click="counter += 1">Counter Plus</button>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
  },
});
```

### 修飾符號 Modifiers

- `.stop`: 呼叫 js 中的 `event.stopPropagation()`，停止事件繼續傳遞。
- `.prevent`: 呼叫 js 中的 `event.preventDefault()`，防止執行瀏覽器事件的預設行為。
- `.capture`: 將事件傳遞方向改為向下捕獲（event capturing）模式。
- `.self`: 只在有事件監聽器的 HTML 元素本身觸發（不含子元素）時才會觸發方法。
- `.native`: 監聽組件根元素的原生事件。
- `.once`: 事件只能被呼叫一次。
- `.passive`: 2.3.0 版本後加入，以 `{ passive : true }` 的模式添加事件監聽器。
- `.left`: 只點擊滑鼠左鍵才會觸發事件。
- `.right`: 只點擊滑鼠右鍵才會觸發事件。
- `.middle`: 只點擊滑鼠中鍵才會觸發事件。
- `.{keyCode | keyAlias}`: 只按下鍵盤任一鍵值才會觸發事件。

沒有修飾符的執行結果是 bubbling 方向 （由內到外）
`thirdFunction()` -> `secondFunction()` -> `firstFunction()`
├ `.stop`：只 call `thirdFunction()`，不執行 `secondFunction()` 和 `firstFunction()`
├ `.prevent`：讓 submit 不會跳轉頁面
├ `.capture`：執行結果換為 capturing 方向（由外到內）
│ `firstFunction()` -> `secondFunction()` -> `thirdFunction()`
├ `.self`：在作用區範圍內才能呼叫 function
└ `.once`：function 只能執行一次

## 列表渲染

### `v-for`

- 迭代顯示陣列或物件中的元素
- `alias in expression`
- expression: `array`, `object`, `number`, `string`

array：

```html
<div id="app">
  <ul>
    <li v-for="(member, index) in memberArray">
      index: {{ index }}, id: {{ member.id }}, name: {{ member.name }}
    </li>
  </ul>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    memberArray: [
      { id: "11", name: "Eva" },
      { id: "12", name: "Ray" },
      { id: "13", name: "Ben" },
    ],
  },
});
```

object：

```html
<div id="app">
  <ul>
    <li v-for="(member, key, index) in memberObject">
      {{ index }} . {{ key }} : {{ member }}
    </li>
  </ul>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    memberObject: {
      name: "Eva",
      gender: "female",
      age: "22",
    },
  },
});
```

number：

```html
<div id="app">
  <span v-for="n in 5">{{ n }}</span>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
});
```

string：

```html
<div id="app">
  <span v-for="string in 'Vue'">{{ string }}</span>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
});
```

#### Key

在未設定 key 值的情況下，改變陣列中的元素會造成部分元素更新，但不會重新渲染元素。
`DOM diff` 比較出差異後，將 C 更新成 F、D 更新成 C、E 更新成 D、最後再放入 E，效率沒有比較好。
因此為了辨識每一項元素，Vue 提供 key 可以為每一項元素設定 key 值，
所以設定 key 值的目的就是在 Virtual DOM 更新的時候，提供較高的效能，
並使用 v-bind 綁定 key 屬性:key，讓陣列或物件裡的元素保有唯一性，
當元素更新時，可以確保重新渲染元素。

```html
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```

### 陣列元素操作

Vue 提供一組可以操作陣列的 method，用來變更陣列元素，觀察其變更。
├ `push()`: 新增元素
├ `pop()`: 刪除最後加入的元素
├ `shift()`: 刪除第一個元素
├ `unshift()`: 加入元素至第一個位置
├ `splice()`: 加入或移除元素
├ `sort()`: 由小至大排序元素
├ `reverse()`: 反轉元素排序
├ `filter()`: 過濾陣列元素，回傳符合條件內容的新陣列
├ `concat()`: 連接陣列，回傳新陣列
└ `slice()`: 切割陣列，回傳新陣列

## 條件渲染

### 條件渲染指令

#### `v-show`

- 根據 expression 值為 true 或 false，
  切換 CSS 屬性的 `display`，顯示或隱藏含有 `v-show` 的元素。

```html
<div id="app">
  <p v-show="isShow">{{ message }}<></p>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "v-show example",
    isShow: true,
  },
});

setInterval(function () {
  app.isShow = !app.isShow;
}, 1000);
```

#### `v-if`, `v-else-if`, `v-else`

- 當 expression 的條件成立後，才綁定該區資料並渲染出來

```html
<div id="app">
  <p v-if="isShow">{{ message }}<></p>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    message: "v-show example",
    isShow: true,
  },
});

setInterval(function () {
  app.isShow = !app.isShow;
}, 1000);
```

```html
<div id="app">
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</div>
```

```javascript
var app = new Vue({
  el: "#app",
  data: {
    type: "B",
  },
});
```

#### `v-show` vs `v-if`

##### 多層條件判斷

- `v-show` 只能對單獨元素做 true 或 false 的判斷。
- `v-if` 可以加上 `v-else-if` 與`v-else`，可以條判斷比較多條件的狀況。

##### 渲染 HTML 元素時機

- `v-show` 無條件渲染元素，不管條件 true 或 false，元素一定會被建立，然後再進行條件判斷
  使用 css 的 `display` 屬性來做顯示或消失的效果。
- `v-if` 當條件為 true 才會實際渲染元素，如果一開始條件為 false 則不會進行任何事情。(lazy)

##### 使用`<template>`元素

- `v-show` 無法使用。
- `v-if` 可以使用。

##### 在何時花費較多運算時間？

- `v-show` 初始渲染元素時：不管條件真假，一定會將元素建立出來。
- `v-if` 切換條件時：即使元素已存在，條件成立時就會重新渲染元素一次，
  所以在切換條件時，會花費較多運算時間。

##### 使用時機

- `v-show` 頻繁切換條件的時候，使用 `v-show` 比較好。
- `v-if` 條件控制比較複雜的時候，或則控制條件不太會改變，使用 `v-if` 比較好。

#### `v-if` with `v-for`

`v-for` 優先權高於 `v-if`，
因此當這兩個指令同時出現在同一個元素時，
`v-if` 會隨著 `v-for` 的循環次數跟著判斷條件幾次。

## 選項物件屬性

### `filter`

- 將文字資料格式化
- 可以在 filters 中放入自己寫好的 function，如全部英文字母轉大寫、價錢數值的格式化等等
- 可以用`|`串聯
- 是 JavaScript 函數，所以可以傳入參數
- 適合做簡單的文字格式處理，或是改變狀態
- 有兩種撰寫方式

1. mustache 模板插值(mustache interpolations)
   `{{ message | filterA }}`
2. v-bind 表達式(v-bind expressions)
   `<div v-bind:id="message | filterA"></div>`

- 兩種註冊方式

1. 本地過濾器（local filter）

```html
<div id="app">
  <span>{{ text || toUpperCase }}</span>
</div>
```

```js
var app = new Vue({
  el: "#app",
  data: {
    text: "hello vue",
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
});
```

2. 全局過濾器（global filter）

```html
<div id="app">
  <input type="text" v-model="mytext" />
  <p>{{ mytext || capitalize }}</p>
</div>
```

```js
Vue.filter("capitalize", function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

var app = new Vue({
  el: "#app",
  data: {
    mytext: "hello",
  },
});
```

### `computed`

- 對資料做處理計算，並且因為有 cache，可以避免重複處理資料，效能會比較好
- 和 `filter` 相同，在`computed` 裡撰寫 function
- 透過 this 從 data 取得資料並做運算
- 可用於做較複雜的邏輯運算處理

```html
<div id="app">
  <p>原始訊息：{{ message }}</p>
  <p>反轉訊息：{{ reverseMessage }}</p>
</div>
```

```js
var vm = new Vue({
  el: "#app",
  data: {
    message: "Hello",
  },
  computed: {
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
  },
});
```

### `watch`

- 監聽某個 data 值（變數），當值變動時，就去做對應的事情（函數）。
- 觀察特定的值
- 適用在資料值會一直有變化的時候
- 得到最後結果前，可以設置中間狀態

```html
<div id="app">
  <p>g (公克): <input type="text" v-model="g" /></p>
  <p>kg (公斤): <input type="text" v-model="kg" /></p>
  <p>t (公噸): <input type="text" v-model="t" /></p>
</div>
```

```js
var app = new Vue({
  el: "#app",
  data: {
    g: 0,
    kg: 0,
    t: 0,
  },
  watch: {
    g: function (value) {
      this.g = value;
      this.kg = value / 1000;
      this.t = value / 1000 / 1000;
    },
    kg: function (value) {
      this.g = value * 1000;
      this.kg = value;
      this.t = value / 1000;
    },
    t: function (value) {
      this.g = value * 1000 * 1000;
      this.kg = value * 1000;
      this.t = value;
    },
  },
});
```

## Component 組件系統

- 組件就像是 vue instance 的縮減版
- 分成兩種：全域組件與區域組件

### 全域註冊

- 利用 `Vue.component()` 方法直接建立的為全域組件
- 必須在 vue instance 初始化之前建立完成

```javascript
Vue.component("tagName", {
  // options
});
```

`tagName`：組件的 tag 名稱，可以在 HTML 中被拿來當標籤使用，
需保有唯一性，不能與其他全域組件的名稱重複。
`options`：選擇性參數，可套用 options 屬性(data、methods、filters、computed、watch)
注意 data 只能是 function 型態，若未使用 function，Vue 將會停止執行。

- 使用 `Vue.component()` 將 Component 註冊於全域環境下
- 函式參數 1 為 Component 名稱，參數 2 為關聯陣列。
- Component 直接註冊於全域環境下，並連動至 HTML 上的 `test-component` 標籤
- Vue 中介雖然與 `#app` 連動，但並沒有與 Component 連結。
- 官方不推薦使用全域註冊，例如使用 Webpack 這一類的 build 系統，
  註冊於全域環境底下的 Component 即使沒有進行運用，仍會包進最終 build 的檔案裡，
  增加使用者必須下載的 JavaScript 檔案大小。

```html
<div id="app">
  <global-component></global-component>
</div>
```

```js
Vue.component("global-component", {
  template:
    '<div><p>{{ message }}</p><button @click="notice">Click me</button></div>',
  data: function () {
    return {
      message: "This is a global comonent",
    };
  },
  methods: {
    notice: function () {
      alert("You can also write methods in global component");
    },
  },
});

var app = new Vue({
  el: "#app",
});
```

### 區域註冊

- 放在 vue instance 內，變成 vue instance 的其中一個 options 屬性，只能供該實體使用的為區域組件。

```html
<div id="app">
  <local-component></local-component>
</div>
```

```javascript
var local_component = {
  template:
    '<div><p>{{ message }}</p><button @click="notice">Click me!</button></div>',
  data: function () {
    return {
      message: "This is local component",
    };
  },
  methods: {
    notice: function () {
      alert("local component");
    },
  },
};

new Vue({
  el: "#app",
  components: {
    "local-component": local_component,
  },
});
```

### 組件組合與溝通

#### 父子組件溝通 `Props down, Events up`

- 當一個 A 組件包含另一個 B 組件，則 A、B 組件就形成了父子關係（parent-child relationship）
- Props down, Events up，父組件透過 props 向下傳遞資料給子組件，
  而子組件則是透過 events 將結果向上傳回給父組件。
- 組件的作用範圍是獨立的，所以子組件想接收父組件的資料時，我們不能直接引用父組件的資料，
  需要使用 props 屬性，將資料傳遞給子組件。

#### `Props Down`

- 為組件中的自訂屬性
- 它的接受值可以是陣列或物件
- 用來接收父組件的資料
- 透過 props 來接收模板屬性資料時，因不會做任何處理，資料型態為 string，
  若想要取得 number 型態的資料，需使用`v-bind`

```html
<div id="app">
  <child :name="data_name" message="I am a child."></child>
</div>
```

```js
Vue.component("child", {
  props: ["name", "message"],
  template: `<p>
    <font color=red>{{ name }}</font> says
    <font color=red>{{ message }}</font>
  </p>`,
});

var app = new Vue({
  el: "#app",
  data: {
    data_name: "Mary",
  },
});
```

```html
<div id="app">
  <p>無 v-bink: <child price="15"></child></p>
  <p>有 v-bink: <child :price="15"></child></p>
</div>
```

```js
Vue.component('child', {
  props: ['price'],
  template: '<span>{{ price + 1 }} {{{ typeof price }}}</span>
})

var app = new Vue({
  el: '#app'
})
```

#### camelCase vs kebab-case

在 HTML 中，屬性是不區分大小寫的，
因此在 HTML 中寫 myattribute 跟寫 myAttribute，HTML 會視為一樣的東西，
所以在組件中使用 props 去接收屬性的資料時，寫的是 camelCase（駝峰式命名法）的屬性名稱，
在 HTML 中則要自行轉換為 kebab-case（用 dash 間隔的命名法）。

#### Dynamic Props

```html
<div id="app">
  <input type="text" v-model="message" />
  <child :my-message="message"></child>
</div>
```

```js
Vue.component("child", {
  props: ["myMessage"],
  template: "<p>{{ myMessage }}</p>",
});

var app = new Vue({
  el: "#app",
  data: {
    message: "HelloWorld",
  },
});
```

#### 單向資料流

- Prop 是單向綁定的，也就是當父組件屬性資料改變時，只能單向傳遞資料給子組件，
  目的是為了不讓子組件可以任意去更改父組件的狀態。
- 當父組件更新時，子組件的所有 prop 也會跟著更新為最新的資料。
- 想要從子組件中更動父組件的資料狀態時，可以使用區域變數（local variable）或 computed 的方式來做。

```html
<div id="app">
  <child name="Mary"></child>
</div>
```

1. 區域變數

```js
Vue.componenrt("child", {
  props: ["name"],
  data: function() {
    var myName = '';
    myName = this.name + " is a girl.";
    return {
      myName: myName;
    }
  },
  template: '<p>{{ myName }}</p>'
});

var app = new Vue({
  el: '#app'
})
```

2. 使用 computed

```js
Vue.component('child', {
  props: ['name'],
  computed: {
    myName: function() {
      return this.name + " is a girl";
    }
  }
  template: '<p>{{ myName }}</p>'
})
```

#### Prop Validation

```js
Vue.component("child", {
  props: {
    id: Number,
    name: [String, Number],
    age: {
      type: String,
      default: "",
      validator: function (value) {
        return value > 0;
      },
      required: true,
    },
  },
});
```

- `type`：資料型態：
  ├ `String`
  ├ `Number`
  ├ `Boolean`
  ├ `Function`
  ├ `Object`
  ├ `Array`
  ├ `Symbol`
  └ 亦可是自訂的建構式函式，使用 `instanceof` 檢測
- `default`：預設值
- `validator`：檢驗屬性資料 expression
- `required`：該屬性是否必要

#### `Events up`

一個 Vue Instance 的事件介面（Event Interface）實作方式包含以下兩種：

- 使用 `$on(eventName)` 監聽事件
- 使用 `$emit(eventName)` 觸發事件

如果是兩個子組件要互相溝通，因為組件都是獨立運作在自己作用域的，
我們可以透過創建一個空的 Vue Instance 作為事件的總管理線。

```js
var bus = new Vue();

bus.$emit("id-selected", 1);

bus.$on("id-selected", function (id) {
  // content
});
```

但這只能適用於小型網站應用開發，中大型網站官方推薦使用 Vuex，它是一個狀態管理模式。

### Slot 插槽

- 將 `<slot></slot>` 寫進子組件下的 `template` 內
- 可以放入父組件所指定的資料

1. Single Slot
   `<slot></slot>` 會去接收父組件所指定的資料，
   如果沒有指令資料，則會顯示原本寫在子組件中 `<slot></slot>` 內的預設資料。

```html
<div id="app">
  <p>當父組件有指定資料時：<child>HELLO WORLD</child></p>
  <p>當父組件沒有指定資料時：<child></child></p>
</div>
```

```js
Vue.component("child", {
  template: "<span><slot>This is a default single slot.</slot></span>",
});

new Vue({
  el: "#app",
});
```

2. Named Slot
   為 slot 定義名稱，父組件就可以指令要在哪一個 slot 放入指定對應資料

```html
<div id="app">
  <child>
    <p slot="header">Header</p>
    <p>Main Content</p>
    <p slot="footer">Footer</p>
    >
  </child>
</div>
```

```js
Vue.component("child", {
  template: `<div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>`,
});

new Vue({
  el: "#app",
});
```

3. Scoped Slots
   如果我們在父組件的元素與 slot 做一些設定，slot 就可以將資料傳遞到父組件，
   跟上一篇使用過的 props 傳遞資料的用法很像。

```html
<div id="app">
  <child>
    <template scope="props">
      <p>{{ props.text }}</p>
    </template>
  </child>
</div>
```

```js
Vue.component("child", {
  template: `<div>
    <slot text="This is a text from slot."></slot>
  </div>`,
});

new Vue({
  el: "#app",
});
```

### Dynamic Components

可以透過綁定（`v-bind`）組件的 `is` 屬性決定要載入哪個組件，實現動態綁定與切換

```html
<div id="app">
  <ul class="navbar">
    <li><a href="#" @click="changeTab('home')"></a></li>
    <li><a href="#" @click="changeTab('about')"></a></li>
    <li><a href="#" @click="changeTab('contact')"></a></li>
  </ul>
  <hr />
  <component :is="currentView"></component>
</div>
```

```js
Vue.component("home", {
  template: "<div>This is home page.</div>",
});

Vue.component("about", {
  template: "<div>This is about page.</div>",
});

Vue.component("contactn", {
  template: "<div>This is contact page.</div>",
});

new Vue({
  el: "#app",
  data: {
    currentView: "home",
  },
  methods: {
    changeTab: function (v) {
      this.currentView = v;
    },
  },
});
```

區域組件寫法：

```js
new Vue({
  el: "#app",
  data: {
    currentView: "home",
  },
  methods: {
    changeTab: function (v) {
      this.currentView = v;
    },
  },
  components: {
    home: {
      template: "<div>This is Home page.</div>",
    },
    about: {
      template: "<div>This is About page.</div>",
    },
    contact: {
      template: "<div>This is Contact page.</div>",
    },
  },
});
```

#### 用 `keep-alive` 暫存動態組件的狀態

如果希望在動態組件切換的時候，可以保留原本的資料或狀態，暫存在記憶體中，避免重新渲染
這時候可以使用 `keep-alive`

```html
<div id="app">
  <ul class="navbar">
    <li><a href="#" @click="changeTab('home')">Home</a></li>
    <li><a href="#" @click="changeTab('about')">About</a></li>
    <li><a href="#" @click="changeTab('contact')">Contact</a></li>
  </ul>
  <hr />
  <component :is="currentView"></component>
  <keep-alive>
    <component :is="currentView"></component>
  </keep-alive>
</div>
```

```js
Vue.component("home", {
  template: `<div>This is Home page.
    <p><input type="text" placeholder="Type your name here..."></p>
  </div>`,
});

Vue.component("about", {
  template: `<div>This is About page.
    <p><input type="text" placeholder="Type your name here..."></p>
  </div>`,
});

Vue.component("contact", {
  template: `<div>This is Contact page.
    <p><input type="text" placeholder="Type your name here..."></p>
  </div>`,
});

new Vue({
  el: "#app",
  data: {
    currentView: "home",
  },
  methods: {
    changeTab: function (v) {
      this.currentView = v;
    },
  },
});
```

#### Dynamic import

```js
// 同期（普通）
import * as FileSaver from "file-saver";

// ==>

// 非同期
const FileSaverAsync = () => import("file-saver");

// --------

import JSZip from "jszip";

// ==>

const JSZipAsync = () => import("jszip").then((p) => p.default);

// ---------

import "filepond/dist/filepond.min.css";

// ==>

(async () => require("filepond/dist/filepond.min.css"))();
```

## Vue 3

- [Vue 3 狀態管理其它方案！跟 Vuex 說再見 ?. 教你如何在 Vue 3 利用 Provide 和 Inject 實作狀態管理！](https://medium.com/peerone-technology-%E7%9A%AE%E5%81%B6%E7%8E%A9%E4%BA%92%E5%8B%95%E7%A7%91%E6%8A%80/vue-3-%E7%8B%80%E6%85%8B%E7%AE%A1%E7%90%86%E5%85%B6%E5%AE%83%E6%96%B9%E6%A1%88-%E8%B7%9F-vuex-%E8%AA%AA%E5%86%8D%E8%A6%8B-8ad01f34f4ed)

### Global API

```javascript
import Vue from "vue";
import App from "./App.vue";

Vue.use(/* ... */);
Vue.mixin(/* ... */);
Vue.component(/* ... */);
Vue.directive(/* ... */);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

↓

```javascript
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(/* ... */);
app.mixin(/* ... */);
app.component(/* ... */);
app.directive(/* ... */);

app.mount(App, "#app");
```

### Global API Tree Shaking

- `Vue.nextTick`
- `Vue.observable`
- `Vue.version`
- `Vue.compile`
- `Vue.set`
- `Vue.delete`

```javascript
import Vue from "vue";

Vue.nextTick(() => {
  // something DOM-related
});
```

↓

```javascript
import { nextTick } from "vue";

nextTick(() => {
  // something DOM-related
});
```

### v-model

`<Comp :value='pageTitle' @input='pageTitle=$event' />`
↓
`<Comp :modelValue='pageTitle' @update:modelValue='pageTitle=$event' />`

### Functional Component

`import { h } from 'vue'`

### Composition API

## 應用

### 動畫 (`transition` 標籤)

- 將想加入動畫效果的元素放進 `<transition>` 與 `</transition>` 標籤之間
- 若是想同時渲染整個列表，例如使用 `v-for` 的時候，可使用 `<transition-group>` 與 `</transition-group>`

```javascript
<transition-group name="list" tag="p">
  <span v-for="item in items" v-bind:key="item" class="list-item">
    {{ item }}
  </span>
</transition-group>
```

- Vue 的動畫由 6 個 class 定義切換狀態

1. `.v-enter`: 進入切換後的初始狀態
2. `.v-enter-active`: 進入切換生效中的狀態
3. `.v-enter-to`: 切換結束的狀態，適用於 2.1.8 版本之後
4. `.v-leave`: 離開切換的開始狀態
5. `.v-leave-actiove`: 離開切換生效中的狀態
6. `.v-leave-to`: 切換結束的狀態，適用於 2.1.8 版本之後

- 以及 `.v-move` 套用於改變狀態時的過程
- 可加上 `name="my-transition"` 屬性，`v-enter` 會替換成 `my-transition-enter`，可自行定義動畫名稱。
- 亦可將去除 `v-` 的狀態名後加上 `-class` 當成屬性，自行定義切換動畫的 class。
- 可加上 `mode="in-out"` 屬性設定新元素先執行進入切換動畫，當前元素再執行離開切換， `out-in` 反之。

```javascript
<transition
  name="custom-classes-transition"
  enter-active-class="animated tada"
  leave-active-class="animated bounceOutRight"
>
  <p v-if="show">hello</p>
</transition>
```

### [axios](https://github.com/axios/axios)

1. `npm i axios vue-axios json-server`
2. 在 `src/` 裡新增 `service` 資料夾，並在裡頭新增 `api.js`

```js
/* api.js */

import axios from 'axios'
axios.defaults.baseURL = ''


// GET
const api = {
  async get (url, data) {
    try{
    let res = await axios.get(url, { params: data })
    res = res.data
    return new Promise((resolve) => {
      resolve(res)
    })
    } catch(err) {
      console.log(err)
    }
  }
},

// POST
const api = {
  async get (url, data) {
    try{
    let res = await axios.post(url, data)
    res = res.data
    return new Promise((resolve, reject) => {
      resolve(res)
    })
    } catch(err) {
      console.log(err)
    }
  },

// DELETE
const api = {
  async get (url, data) {
    try{
    let res = await axios.delete(url, {params: data})
    res = res.data
    return new Promise((resolve, reject) => {
      resolve(res)
    })
    } catch(err) {
      console.log(err)
    }
  }
}

export default api
```

3. 在欲使用的頁面中調用

```html
<script>
  export default {
    data() {
      return {
        tableData: [],
      };
    },
    methods: {
      async packageGetData() {
        const source = "http://localhost:3000/tableData";
        let res = await this.$api.get(source);
        this.tableData = [...res]; /
        console.log(res);
      },
    },

    created() {
      this.packageGetData();
    },
  };
</script>
```

### 使用 SCSS

#### 1. 引入至 Component

`component.vue`

```html
<style scoped lang="scss">
  @import "../assets/scss/component.scss";
</style>
```

#### 2. 引入至 App.vue

`App.vue`

```html
<style lang="scss">
  @import "../assets/scss/main.scss";
</style>
```

#### 3. 引入至 main.js

`main.js`

```javascript
import "@/assets/scss/main.scss";
```

#### 4. 從 webpack 引入

`npm i --save-dev node-sass sass-loader`

`vue.config.js`

```javascript
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
};
```

### [multi-page mode](https://medium.com/@nchuuu/%E5%88%A9%E7%94%A8vue-cli-%E9%80%B2%E8%A1%8C%E5%A4%9A%E9%A0%81%E6%89%93%E5%8C%85-633b39bb157)

`vue.config.js`

```javascript
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/index/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
```

## 延伸框架

| 名稱                                                          | 說明 |
| ------------------------------------------------------------- | ---- |
| [electron-vue](https://github.com/SimulatedGREG/electron-vue) |      |
| [VuePress](https://vuepress.vuejs.org/zh/guide/#features)     |      |
| [CarvueJS](https://carvuejs.github.io/home)                   |      |
| [Vite](https://github.com/antfu/vitesse)                      |      |

## UI Framework

| 名稱                                           | 說明 |
| ---------------------------------------------- | ---- |
| [Vuetify](https://vuetifyjs.com/)              |      |
| [bootstrap-vue](https://bootstrap-vue.js.org/) |      |
| [element-ui](http://element.eleme.io/#/en-US)  |      |
| [vue-material](https://vuematerial.io/)        |      |

- [BootstrapVue：環境建置 (引入全部元件/部分元件) | Titangene Blog](https://titangene.github.io/article/bootstrap-vue-env-import-components.html)

## Library

| 名稱                                                                                             | 說明 |
| ------------------------------------------------------------------------------------------------ | ---- |
| [vue-chartjs](https://vue-chartjs.org/)                                                          |      |
| [vue-fa](https://cweili.github.io/vue-fa/)                                                       |      |
| [vue-validate](https://baianat.github.io/vee-validate/)                                          |      |
| [eslint-plugin-vue](https://eslint.vuejs.org/)                                                   |      |
| [vue-lazyload](https://github.com/hilongjw/vue-lazyload)                                         |      |
| [vue-style-loader](https://github.com/vuejs/vue-style-loader#readme)                             |      |
| [vuedraggable](https://github.com/SortableJS/Vue.Draggable)                                      |      |
| [vue-socket.io](https://github.com/MetinSeylan/Vue-Socket.io)                                    |      |
| [vue-multiselect](https://vue-multiselect.js.org/)                                               |      |
| [vuejs-datepicker](https://codesandbox.io/s/mpklq49wp)                                           |      |
| [vue-md-editor](https://github.com/anguer/vue-editor)                                            |      |
| [vue-typer](https://github.com/cngu/vue-typer)                                                   |      |
| [vue-rate-it](https://craigh411.github.io/vue-rate-it/)                                          |      |
| [vue-good-table](https://xaksis.github.io/vue-good-table/)                                       |      |
| [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock#readme)                          |      |
| [vuesocial](https://www.growthbunker.dev/vuesocial/)                                             |      |
| [vuetable-2](https://github.com/ratiw/vuetable-2)                                                |      |
| [vue-apexcharts](https://apexcharts.com/vue-chart-demos/)                                        |      |
| [vue-google-charts](https://github.com/devstark-com/vue-google-charts)                           |      |
| [vue-moment](https://github.com/brockpetrie/vue-moment)                                          |      |
| [vue-crud](https://vue-crud.github.io/)                                                          |      |
| [vue-fullpage](https://github.com/alvarotrigo/vue-fullpage.js)                                   |      |
| [Vuesax](https://lusaxweb.github.io/vuesax/)                                                     |      |
| [Vuexy](https://themeforest.net/item/vuexy-vuejs-html-laravel-admin-dashboard-template/23328599) |      |
| [VueUse](https://qiita.com/mascii/items/558c7d5d5bf82eaa59a6)                                    |      |
