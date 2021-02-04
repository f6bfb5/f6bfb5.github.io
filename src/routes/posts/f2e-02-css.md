---
title: "前端筆記 (2) CSS"
date: 2019-07-18T07:09:01.000Z
published: 2019-07-18T07:09:01.000Z
author: f6bfb5
summary:
tags: F2E, CSS
layout: blog
---

<summary>

###### TOC

</summary>
<details>

- [1. 顯示與定位](#1-顯示與定位)
  - [display](#display)
    - [1. `block`](#1-block)
    - [2. `inline`](#2-inline)
    - [3. `inline-block`](#3-inline-block)
    - [4. `table`](#4-table)
    - [5. `float`](#5-float)
    - [6. Flexbox](#6-flexbox)
    - [7. Grid](#7-grid)
    - [8. 其它 display 屬性](#8-其它-display-屬性)
  - [overflow](#overflow)
  - [position](#position)
  - [vertical-align](#vertical-align)
- [2. 尺寸](#2-尺寸)
  - [避免邊界重疊（Margin Collapsing）](#避免邊界重疊margin-collapsing)
  - [單位](#單位)
- [3. 背景、色彩](#3-背景色彩)
  - [背景](#背景)
  - [色彩](#色彩)
  - [邊框](#邊框)
- [4. 文字](#4-文字)
- [5. 選取器](#5-選取器)
  - [選取器類別](#選取器類別)
  - [選取器運算子](#選取器運算子)
- [6. 動畫](#6-動畫)
  - [animation 動畫](#animation-動畫)
  - [@keyframes](#keyframes)
  - [transition 轉場](#transition-轉場)
  - [transform](#transform)
- [7. 媒體查詢](#7-媒體查詢)
- [8. 權重](#8-權重)
- [9. Reset](#9-reset)
- [10. Sass](#10-sass)
- [11. 版型檢查](#11-版型檢查)
  - [網頁兼容性](#網頁兼容性)
  - [可讀性](#可讀性)
  - [擴充性](#擴充性)
  - [重用性](#重用性)
  - [維護性](#維護性)
  - [[移动开发之设计稿转换页面单位尺寸](https://blog.csdn.net/ww0908/article/details/72730267)](#移动开发之设计稿转换页面单位尺寸httpsblogcsdnnetww0908articledetails72730267)
- [12. CSS 命名與設計模式](#12-css-命名與設計模式)
  - [OOCSS（模組化 CSS，Object Oriented CSS）](#oocss模組化-cssobject-oriented-css)
  - [[SMACSS](http://smacss.com/)（Scalable & Modular Architecture for CSS）](#smacsshttpsmacsscomscalable--modular-architecture-for-css)
  - [BEM（Block-Element-Modifier）](#bemblock-element-modifier)
  - [FLOCSS](#flocss)
  - [PRECSS](#precss)
  - [Atomic CSS 樣式原子化](#atomic-css-樣式原子化)
- [13. 現代 CSS 常見的基礎技術](#13-現代-css-常見的基礎技術)
  - [層級](#層級)
- [參考文章](#參考文章-1)

---

</details>

## 1. 顯示與定位

CSS 將每個內容元素的外觀架構區分為 `Margin`、`Border`、`Padding`、`Content`，並藉此實作出精準的版面配置、元素排列效果，也就是所謂的 Box Model（盒模型）

- `Margin` 是容器外部（例如與其它容器之間）的留空距離，此空間是透明的
- `Border` 是將內容與 Padding 包圍住的外框
- `Padding` 是從容器到內容部份的留空距離，此空間是透明的
- `Content` 是容器內如文字、圖片等元素的內容部份

![](https://i.imgur.com/WG75USi.jpg)

![](https://i.imgur.com/UQ5tRfs.png)

關於詳細的內距與邊框數值計算準則，過往的瀏覽器使用 `border-box`，元素所設定的長寬（`height`、`width`）會為最終顯示結果，而內距、邊框都會向內計算

之後 W3C（World Wide Web Consortium，全球資訊網協會）制定了新的標準盒模型 `content-box`，並為目前的瀏覽器預設值，元素中的長寬和內距、邊框、外距皆獨立計算

而盒模型可以透過 `box-sizing` 屬性指定，目前多半還是使用 `border-box`

- [CSS Layouts](http://frontendlabepam.github.io/FL5/css-layouts/css-layouts.html#1)
- [段組みの CSS。](https://lopan.jp/css-layout2/)

### display

`display` 屬性可以指定元素具有何種排版特性

#### 1. `block`

- 設定一元素為 `block-level`
- 佔滿整個容器寬度
- 可設定寬高

#### 2. `inline`

- 設定一元素為 `inline-level`
- 寬高設定無效
- 可設定 padding 的左右值，上下值無效、無法被撐開

#### 3. `inline-block`

- 同時擁有兩種 display 的特性，具有 `block` 的屬性，但不佔滿整個容器
- 可設定寬高，也可與其他元素並排
- 使用 `inline-block` 排板時，標籤如 `a` 或 `li` 之間會有空白字元，
- 需於父元素中設定字元大小為 0，再設定子元素的標籤文字大小。

#### 4. `table`

（待）

#### 5. `float`

- `float` 值會將該元素帶離原本的 normal flow，改為置於其容器的左方或右方
- 而文字或行內元素會循其區域換行，即常見的文繞圖／多欄編排效果
- 若一元素包含有 float 的子元素，其高度會變為 0（parent element collapsed）
  <br>之後的兄弟元素會因此覆蓋於其上方，造成跑版問題，需搭配 clearfix 處理

1. 無後續的兄弟元素時，設定在父元素上
2. 有後續的兄弟元素時，設定在兄弟元素上
3. 有後續的兄弟元素，亦可設定在父元素的虛擬元素上

```css
/* 
  1. overflow: hidden 
  設定於父元素
*/
.parent {
  overflow: hidden;
}

/* 
  2-1. clear: both 
  設定於鄰於父元素的兄弟元素
*/
.nextNonFloated_Element {
  clear: both;
}

/* 
  2-2. clear: both 
  設定於父元素的虛擬元素上
*/
.parent:after {
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```

#### 6. Flexbox

- 於 CSS3 新增的新排版模型
- 宣告底下的元素為 Flexbox 排版方式
  <br>會以母元素（容器，container）的中心處為基準
  <br>將定位點切為主軸（main axis，預設為橫排／`row`）
  <br>和次軸（cross axis，預設為直排／`column`）

![flexbox axis](https://i.imgur.com/S7QmP6M.png)

##### 容器屬性

- 於母元素／容器上，可以指定想要套用的子元素範圍，以及對齊的形式

###### `justify-content`

- 設定**所有子元素**於主軸（預設為橫排／X 軸）上要如何對齊
- CSS 裡還有 `justify-items` 和 `justify-self` 這兩個屬性，但在 Flexbox 裡沒有效果
- 5 種常用的對齊形式為：
  <br>├ `flex-start`：對齊於軸線起點處
  <br>├ `flex-end`：對齊於軸線終點處
  <br>├ `center`：對齊於軸線中間
  <br>├ `space-between`：平均分配內容空間，但開頭元素會貼齊於起點、結尾元素會貼齊於終點
  <br>└ `space-around`：平均分配內容空間，間距亦為平均分配

![flexbox justify-content](https://i.imgur.com/HZEA8ce.png)

###### `align-items`

- 設定**單行裡的元素**於次軸（預設為直排／Y 軸）上要如何對齊
- 5 種常用的對齊形式為：
  <br>├ `flex-start`：對齊於軸線起點處
  <br>├ `flex-end`：對齊於軸線終點處
  <br>├ `center`：對齊於軸線中間
  <br>├ `stretch`：撐滿整個軸線
  <br>└ `baseline`：對齊於內容基線

![flexbox align-items](https://i.imgur.com/exBQCBM.png)

###### `align-content`

- 設定**多行元素**於次軸上要如何對齊
  <br>└ `align-content` **只在多行內容才有效果**，控制的是**所有行**的對齊方式
- 6 種常用的對齊形式為：
  <br>├ `flex-start`：對齊於軸線起點處
  <br>├ `flex-end`：對齊於軸線終點處
  <br>├ `center`：對齊於軸線中間
  <br>├ `space-between`：平均分配內容空間，但開頭行會貼齊於起點、結尾行會貼齊於終點
  <br>└ `space-around`：平均分配內容空間，間距亦為平均分配
  <br>└ `stretch`：撐滿整個軸線

![flexbox align-content](https://i.imgur.com/SY0Cqju.png)

###### 容器設定

- `flex-direction`：設定容器主軸
  <br>├ `row`：橫排
  <br>├ `row-reverse`：橫排、反轉順序
  <br>├ `column`：直排
  <br>└ `column-reverse`：直排、反轉順序

![flexbox flex-direction](https://i.imgur.com/BhhRsSp.png)

- `flex-wrap`：設定容器內容是否於寬度超過時換行
  <br>├ `nowrap`：不換行
  <br>├ `wrap`：換行
  <br>└ `wrap-reverse`：換行時反轉順序

![flexbox flex-wrap](https://i.imgur.com/ndWssPi.png)

- `flex-direction`、`flex-wrap` 可簡寫於 `flex-flow` 屬性內

##### 內容屬性

- `flex-grow`：分配剩餘空間，預設值為 `0`
- `flex-basis`：控制主軸長度（主軸為衡=寬度 width，主軸為縱=高度 height）
  <br>權重比 width 和 height 大
- `flex-shrink`：收縮比，預設值為 `1`
  <br>`( 子項目寬*收縮比/總比值 ) * 超出值 = 扣除值`
  <br>若設為 0 則由 basis 與 grow 進行計算
- `flex-grow`、`flex-basis`、`flex-shrink` 可簡寫於 `flex` 屬性內
- `order`：設定元素所處順序，各個元素的預設值為 0
  <br>設定其中一個元素為 1 就會移到最右邊（其它為 0）
  <br>設定為 -1 則會移到最左邊
- `align-self` 內容屬性可再獨立設定於次軸上的對齊位置，設定此屬性後母容器的 `align-items` 則會無效

#### 7. Grid

- 以二維的方式定位的模型
- grid 並非用於取代 flexbox，而是補足 flexbox 的不足
- 需先使用 `display: grid` 定義主容器顯示類型，再使用 `grid-template` 定義版型結構
- [CSS Grid Generator | LayoutIt!](https://grid.layoutit.com/)

##### 宣告長寬

- `grid-template-columns`：宣告每行 （橫列）的寬度，劃分出 Y 軸線
- `grid-template-rows`：宣告每列（直列）的高度，劃分出 X 軸線
- 寬高可使用空行區隔，用以指定每行／列內的各空間寬度
- 亦可使用 `repeat(4, 2rem)` 一次建立 4 行 2rem 寬度的空間
  <br>`repeat()` 內還可使用 `auto-fill` 填滿所有空間，或 `auto-fit` 填滿至指定空間
- 也可以使用 `grid-auto-columns`、`grid-auto-rows` 快速指定版型
  <br>ex：`grid-auto-columns: 60px;`

###### 長寬單位

- `fr` 是總數比例單位，例如 `grid-template-columns: 1fr 1fr 2fr;` 是宣告每欄寬度為 1/4、1/4、2/4
- `max-content` 取得容器最大尺寸的空間，當成填充條件
  <br>`min-content` 取得容器最小尺寸的空間，當成填充條件
  <br>`minmax ( min, max )` 以最小尺寸 `min` 定義，最大尺寸需小於或等於 `max`
- `auto` 自動設定空間尺寸，上述寬高指定也可以混用
  <br>ex：`grid-template-columns: 1fr min-content minmax ( 100px, max-content ) ;`

##### 分配元素

- `grid-auto-flow`：宣告 Grid 的排列方式
  <br>├ 預設為 `row` 先欄後列
  <br>└ 還有 `column` 先列後欄、 `dense` 自動填滿
- `grid-template-areas`：定義主容器裡各區塊的位置與名稱，可使用 `.` 略過某區塊不指定

```css
.example {
  grid-template-areas:
    "header header header header header"
    "side main main main main"
    "side footer footer footer footer";
}
```

- `grid-area`：指定區塊名稱，並配置至對應位置
- `grid-area` 的區塊必須是連接在一起的，即不可一個區塊名稱分散於兩側位置，並且只能是矩形
- `grid-gap`：區域之間的距離，可省略前面的前綴 `grid-`
  <br>├ `grid-gap: { grid-row-gap } { grid-column-gap };`
  <br>├ `grid-column-gap: { grid-column-gap };`
  <br>└ `grid-row-gap: { grid-row-gap };`

##### 區塊

- `grid-column: <起始 column-num> / <結束 column-num>`：宣告區塊定位自己位置
- `grid-row: <起始 row-num> / <結束 row-num>`：宣告區塊定位自己位置
- `justify-self`，`align-self`：同 `flexbox` 用法

##### 其它 grid 參考資料

- [GRID: A simple visual cheatsheet for CSS Grid Layout](https://grid.malven.co/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [關於 Grid Layout 的使用姿勢](https://blog.hinablue.me/css-grid-layout/)
- [CSS Grid | 剛學會怎麼用 Grid，那就來畫個 TV 檢驗圖練練手吧！- 手寫筆記 - Medium](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/using-css-grid-to-draw-test-card-7ed24d3559ab)
- [CSS | 所以我說那個版能不能好切一點？- Grid 基本用法 - Enjoy life enjoy coding - Medium](https://medium.com/enjoy-life-enjoy-coding/css-%E6%89%80%E4%BB%A5%E6%88%91%E8%AA%AA%E9%82%A3%E5%80%8B%E7%89%88%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A5%BD%E5%88%87%E4%B8%80%E9%BB%9E-grid-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-cd763091cf70)

#### 8. 其它 display 屬性

- `none`：清除此元素
  <br>└ 此屬性值常與 `visibility: hidden` 相提並論

設定為 `display: none` 的元素在 DOM 和 CSSOM trees 結合後的 Render Tree 中不會產生對應的盒模型，故不佔有任何排版空間，但仍然存在於 DOM Tree 上，可以進行相關操作

而 `visibility: hidden` 的元素仍然會保留其 box，因此雖然內容不可視，仍會佔有空間

- `inherit`：繼承父元素的 display 屬性值
- `initial`：該元素的預設屬性值
- `unset`：等同於 `inherit` 和 `initial` 的組合值
  <br>├ 若該屬性預設為繼承，此值等同 `inherit`
  <br>└ 若該屬性預設為不可繼承，此值等同 `initial`

### overflow

`overflow` 可以決定當內容超過容器尺寸時如何呈現，可設定為：

- `visible`：內容全部可見、會全部渲染至超出容器、可能與其它內容重疊
- `hidden`：隱藏超出容器部份的內容
- `auto`：替超出容器部份的方向加上捲動軸
- `scroll`：無論內容是否超出容器，加上捲動軸

### position

#### 1. `static`

- 預設定位，依照 document flow 決定

#### 2. `relative`

- 相對，保留原始空間，自初始座標進行偏移
- 有定位的物件的 `z-index` 會優先於沒有定位的元素
- 如果兩個都有定位，位於原始碼後方的元素會蓋過前方的元素

#### 3. `absolute`

- 絕對，類似於 `fixed`，獨自獨立一層
- 當一個物件設定為絕對定位，會去父層尋找非 `static` 的元素定錨
- 首個有定位的父層元素，會成為元素絕對定位位置的座標依據
  <br>└ 如果沒有，預設會定位在**瀏覽器視窗上** （注意，不是 `body` 也不是 `html`）
- 不同於 `fixed`，預設只會定位一次，拉動捲軸會跟著捲軸跑，不會固定在視窗上

#### 4. `fixed`

浮動，以瀏覽器視窗為定位，固定於視窗範圍內
<br>├ 將 `top`、`left`、`right`、`left` 都設為 0，
<br>│ `margin` 設定為 `auto`，元素就會在瀏覽器正中間。
<br>├ `fixed`、`absolute`、`float` 與 `flex` 底下的元素皆預設為不會自動抓取空間寬度，
<br>└ 因此設定寬度後會取得所在空間寬度並與空間等寬。

#### 5. `sticky`

邊界，（待）

#### 6. `z-index`

- `z-index` 非 `display` 的值，而是另一個獨立的屬性
- 用於決定非 `static` 的元素圖層關係，預設值為 `0`
- `z-index` 值越高的元素會位於圖層的越前方

![z-index](https://i.imgur.com/LBE29Hq.png)

#### 如何運用 display 與 position 做出置中效果

- [23 種 CSS 垂直置中技巧](http://csscoke.com/2018/08/21/css-vertical-align/)
- [連續 30 天的超實務網頁設計的垂直置中教學](https://ithelp.ithome.com.tw/users/20112550/ironman/2092)

### vertical-align

（待）

## 2. 尺寸

- [フロントエンドのプロ直伝！CSS 余白設定の三原則 ( ＋線の引き方 )](https://qiita.com/yama-t/items/da7740769cfc0f8446a0)
- [\[30 道難解的 CSS 排版\] 第 1 道：認識對齊 I](https://ithelp.ithome.com.tw/articles/10213624?sc=hot)

1.  `height`：高度
2.  `width`：寬度
3.  `padding`：內間隔
4.  `margin`：外間隔

- `padding` 和 `margin` 的值設為 `auto` 時，其值等同 `母元素的長寬度 - 當前元素的長寬度`

### 避免邊界重疊（Margin Collapsing）

當兩個 block 都有設定上下的 margin，並且這兩個 margin 相鄰時，最終計算結果會只留下較大邊的 margin，造成 margin collapsing

#### 「相鄰」可以再細分為三種情況

1. 於同一層內相鄰時，設定 margin 造成的上下 margin 相鄰
2. 父元素與第一個子元素或最後一個子元素，設定 margin 造成的上下 margin 相鄰
3. 兩個元素之間存在空元素時，此兩個元素設定 margin 造成的上下 margin 相鄰

- Codepen：[Margin Collapsing](https://codepen.io/f6bfb5/pen/NWRoRNB)

```html
<!-- 兩個元素的 margin 會重疊，實際上只剩下 16px 的 margin -->
<section>
  <!-- 同一層內相鄰 -->
  <div class="block mb-16">margin-bottom: 16px</div>
  <div class="block mt-16">margin-top: 16px</div>
  <!-- 父元素與子元素 -->
  <div class="block mb-16 mt-16">
    <div class="block mt-16">parent and child both margin-top: 16px</div>
    <div class="block mb-16">parent and child both margin-bottom: 16px</div>
  </div>
  <!-- 中間存在空元素 -->
  <div class="block mb-16">margin-bottom: 16px</div>
  <div></div>
  <div class="block mt-16">margin-top: 16px</div>
</section>

<style>
  .mt-16 {
    margin-top: 16px;
  }

  .mb-16 {
    margin-bottom: 16px;
  }
</style>
```

#### 如何解決 margin collapsing

通用解：可以改為使用 `padding`，或是設定父元素（發生於兄弟身上時則指其共通的父元素，於父子身上時則指該父元素）為 block 以外的 model

第 2 種情況可以替父元素設置 `overflow: hidden`、`padding`、`border` 或 `float`（但需要設定其寬度與另外加上 `clearfix` 元素）來解決

#### 不會發生 margin collapsing 的情況

- 水平相鄰的元素（左右 margin）
- root 元素
- 兩個 block 由 `padding`、`border` 或 inline box、clearance 隔開
- `float` 元素的兄弟、父子
- `position: absolute;` 元素的兄弟、父子

#### 參考資料

- [Css 系列 - 如何避免邊界重疊 ( Margin Collapsing )](https://github.com/marshal604/blog/issues/6)
- [Day23 CSS：Collapsing margins](https://ithelp.ithome.com.tw/articles/10225741)
- [話說 Margin-collapse 是什麼呢？](https://ithelp.ithome.com.tw/articles/10219975)

### 單位

- [一次搞懂 CSS 字體單位：px、em、rem 和 %](https://www.oxxostudio.tw/articles/201809/css-font-size.html)
- [CSS: em, px, pt, cm, in…](https://www.w3.org/Style/Examples/007/units.zh_HK.html)
- [CSS Ruler](https://katydecorah.com/css-ruler/)
- 速算：`100%` = `1em` = `1rem` = `16px` = `12pt`
- 螢幕內容列印時的單位轉換：`Pixel` → `inch` → `dot`
- 螢幕內容顯示時的單位轉換：相對單位 → `px` → （ppi） → `inch` → 絕對單位
  <br>（`1inch` = `2.54cm` = `25.4mm` = `72pt` = `6pc`）

1.  `px`（pixel，像素）：絕對值
    <br>├ 於同一顯示器下時，不會因為瀏覽器視窗長寬改變，或是網頁內容更換而使得像素的尺寸改變
    <br>└ `pixel` 是種圖像元素單位，沒有個具體的長寬值，實際的物理尺寸會隨著顯示器的解析度與寬度而改變
2.  `%`：相對值，參照 `母元素`，視其母元素為 100%
3.  `em`：相對值，參照 `當前元素`，視當前元素的字體大小為 1em
4.  `rem`：相對值，參照 html 根元素 `<html>`，視根元素的字體大小為 1rem
    <br>└ 瀏覽器的預設字體大小為 `16px`，因此通常 `1rem` = `16px`
5.  `vw`：相對值，參照`瀏覽器畫面寬度`，視畫面寬度為 100vw
    <br>└ 語法上省略了中間的 `%` 符號，其中的 `v` 為從 viewport（視口）而來，
6.  `vh`：相對值，參照瀏覽器畫面高度，視畫面寬為 100vh
7.  `vmax`：相對值，目前 `vw` 和 `vh` 兩者之中比較大的值
8.  `vmin`：相對值，目前 `vw` 和 `vh` 兩者之中比較小的值
9.  `ex`：相對值，等同於第一個可用字體裡的「x 文字的高度」
    <br>└ 但在不包含 x 文字的字體之中亦會定義此單位，通常用於以文字為重的設計中
10. `calc()`：可在括號中撰寫計算式，指定較為複雜的動態數值
    <br>└ 上述的單位皆可用於此計算中
11. `max()`
12. `min()`
13. `clamp()`

- [了解 CSS min()/max()/clamp()数学函数 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2020/04/css-min-max-clamp/)

#### 關於 `%` 參照基準的一些小細節

- [What does 100% mean in CSS?](https://wattenberger.com/blog/css-percents)

我們會很直覺地認為，當一個元素使用 `%` 指定 `height` 或 `width` 時，參考的基準點就是母元素的對應屬性（換句話說，`height: 50%` 就是母元素高度的一半，而 `width: 25%` 是母元素寬度的四分之一），但當我們用在 `margin-top`（和 `margin-bottom`）時，會發現 `margin` 與 `padding` 參照的都是**母元素的寬度**，而不會依據方向決定取用高度或寬度。

以及 `transform` 裡的 `translate` 使用 `%` 時，會參照的是**元素自身的寬度或高度**，例如 `transform: translate(0%, 100%)` 會向下移動等同元素自身高度的距離。

總合這些特性可以得知，當我們想要垂直至中一個元素，並且不想要因為其大小改變而跑版時，我們會設置 `top: 50%; left: 50%;`（元素以左上角為錨點，移動母元素一半的長寬＝母元素的中心處），再使用 `transform: translate(-50%, -50%)`（往回移動元素自身一半的長寬，補回因為基準點在左上而需要的距離差）來達成。

## 3. 背景、色彩

### 背景

1.  `background-color`
2.  `background-image`
3.  `background`
    <br>├ `background: color image attachment repeat poition / size`
    <br>├ 各值都可忽略，僅 `background-position` 與 `background-size` 擁有相依關係
    <br>│ 有 `background-position` 時，可以不必加上 `/`
    <br>│ 有 `background-size` 時，一定要加上 `/` 以及 `background-position`
    <br>├ `linear-gradient(顏色漸變方向角, 色碼 1, 色碼 2);`
    <br>└ `radial-gradient(ellipse 或 circle, 顏色 1, 顏色 2) ;`
4.  [`background-position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)

### 色彩

- [エンジニアのための配色まとめ](https://qiita.com/maccotsan/items/d51c992a20385427e689)
- [プログラマが知っているとよい色使い ( 安全色 ) とカラーユニバーサルデザイン](https://qiita.com/kaizen_nagoya/items/cb7eb3199b0b98904a35)
- [RGB、HSL、Hex 網頁色彩碼，看完這篇全懂了](http://csscoke.com/2015/01/01/rgb-hsl-hex/)
- [Web 開發者需要瞭解的基礎色彩理論](https://juejin.im/post/5c6caee26fb9a049df24a4df)
- [Beginning Graphic Design: Color - YouTube](https://www.youtube.com/watch?v=_2LLXnUdUIc)

#### 三原色

- RGB
- 以 R 在上方順時鐘排列

#### 第二次色

- 印表機的 CMYK（藍、洋紅、黃）三色
- 由 RGB 中間色產出的混合色
- 以 C 在下方同呈順時鐘排列

#### 色相環

- 色相 Hue
  <br>├ 顏色
  <br>└ 0 度為 R（紅）色，120 度為 G（綠）色，240 度為 B（藍）色
- 飽和度 Saturation
  <br>├ 顏色的強度，即顏色的濃淡、鮮豔度
  <br>└ 不同於明度於飽和度降低後，為接近灰色而不是黑色。
- 明度 Lightness
  <br>├ 顏色從黑到白的明暗程度
  <br>└ 一般 HSL 色彩的 L 預設值會為 50%，調暗往 0% 調整，調亮往 100% 調整。

HSL 色彩寫法為 `HSL (色相角度不加單位 0~360, 色彩飽和度 0~100%, 色彩亮度 0~100%)`。

#### 十六進位色彩

- [Hex colors](https://www.colorhexa.com/)

#### 色彩調和

- 單色系公式（Monochromatic）
  <br>使用飽和度與明度創造變畫，一定能創造出和諧的配色組合
- 類似色系（Analogous）
  <br>運用色相環上鄰近的顏色配對
  <br>例如紅橘或冷色調的藍綠
- 補色系（Complementary）
  <br>色相環上位於相對面位置的兩個顏色，例如藍橘或經典的紅綠，
  <br>避免過於單調可以加入明暗或濃淡的變化
- 補色分割法（Split Complementary）
  <br>使用互補色左右兩邊的顏色來做搭配，提供同程度的對比但更多的顏色組合
- 三等色法（Triadic）
  <br>色相環上正三角型的三個顏色，組合通常非常顯眼，特別適用三原色或二次顏色時，需小心使用
- 矩形配色法（Tetradic）
  <br>互用兩組補色做配對，有一為主色時能達到最好效果

#### 易看的色彩

- [色による「見やすさ」のデザイン | dwango creators' blog（ドワンゴクリエイターズブログ）](http://creator.dwango.co.jp/13693.html)
- [伝わるデザイン - 配色](https://tsutawarudesign.com/miyasuku5.html)
- [印刷物の可読性に対する背景色及び年齢・照度の影響](https://www.jstage.jst.go.jp/article/jcsaj/41/3+/41_163/_pdf)
- [視認性・可読性の確保 | 使いやすさを考えた配色 | 基礎からわかるホームページの配色](https://www.webcolordesign.net/color_point/usability/readable_color.html)
- [視認性と可読性 | Creator 　 Index](http://creator-index.com/2015/01/729/)
- [Colour Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)

#### 網頁安全色

- [Web セーフカラー　カラーコード一覧 - Qiita](https://qiita.com/yuma_h/items/13989334fc7a6d016ea5)

### 邊框

#### `border`

- 邊框線
- `border: border-width border-style color;`
  <br>├ 無強制順序需求
  <br>├ border-width: `<length>`, `thin`, `medium`, `thick`
  <br>├ border-style: `solid`, `none`, `hidden`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`
  <br>└ color: `rgb()`, `rgba()`, `hsl()`, `hsla()`, `<hex-color>`, `<named-color>`, `currentcolor`
- 可以搭配 `border-radius` 做出圓角框線效果

<div class="ml-2rem w-fit p-8 bd bdrs">圓角框線效果</div>

<style>
.ml-2rem {
  margin-left: 2rem;
}

.w-fit {
  width: fit-content;
}

.p-8 {
  padding: 8px; 
}

.bd {
  border: 1px solid black; 
}

.bdrs {
  border-radius: 16px; 
}
</style>

- `border` 本身具有空間，在使用時須注意計算
  <br>├ 用於動畫時，可以設定為 `hidden`，或是設定初始顏色為透明色解決空間問題
  <br>└ 因為四邊 `border` 會彼此交疊，此特性可用於無長寬的虛擬元素來製作圖形
- [CSS だけで三角・矢印を作る方法 | webclips](https://design.webclips.jp/css-arrow/)

  ```css
  .message-box::after {
    content: "";
    border: 10px solid transparent;
    border-top-color: #00cc99;
  }
  ```

- 對話框效果：

<div class="bubble01">對話框效果範例 1</div>

<style>
  .bubble01 {
    position: relative;
    display: inline-block;
    width: 200px;
    text-align: center;
    color: #fff;
    padding: 25px;
    margin-left: 2rem;
    background-color: #f39800;
    border-radius: 5px;
  }
  .bubble01:before {
    content: "";
    position: absolute;
    display: block;
    z-index: 1;
    border-style: solid;
    border-color: #f39800 transparent;
    border-width: 10px 10px 0 10px;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
  }
</style>

```css
.bubble01 {
  position: relative;
  display: inline-block;
  width: 200px;
  text-align: center;
  color: #fff;
  padding: 25px;
  background-color: #f39800;
  border-radius: 5px;
}
.bubble01:before {
  content: "";
  position: absolute;
  display: block;
  z-index: 1;
  border-style: solid;
  border-color: #f39800 transparent;
  /* 只有上、右、左有邊框（空間），左右邊框為透明色
  因此最後會變為尖端朝下的小三角形 */
  border-width: 10px 10px 0 10px;
  bottom: -10px;
  left: 50%;
  margin-left: -10px;
}
```

<div class="bubble02">對話框效果範例 2</div>

<style>
.bubble02 {
  position: relative;
  display: inline-block;
  width: 200px;
  text-align: center;
  color: #fff;
  padding: 25px;
  margin-left: 2rem;
  background-color: #f39800;
  border-radius: 5px;
}

.bubble02:before {
  content: "";
  position: absolute;
  display: block;
  z-index: 1;
  border-style: solid;
  border-color: #f39800 transparent;
  border-width: 20px 20px 0 0;
  bottom: -20px;
  left: 50%;
  margin-left: -10px;
}
</style>

```css
.bubble02 {
  position: relative;
  display: inline-block;
  width: 200px;
  text-align: center;
  color: #fff;
  padding: 25px;
  background-color: #f39800;
  border-radius: 5px;
}

.bubble02:before {
  content: "";
  position: absolute;
  display: block;
  z-index: 1;
  border-style: solid;
  border-color: #f39800 transparent;
  /* 只有上、右有邊框（空間），左、下無邊框，右邊框為透明色
  因此最後會變為直角在左上的等邊三角形 */
  border-width: 20px 20px 0 0;
  bottom: -20px;
  left: 50%;
  margin-left: -10px;
}
```

#### `outline`

- 外框線
- `outline: outline-width outline-style color;`
  <br>└ 無強制順序需求
- `outline` 不佔有空間
- 只有矩形外觀，無法改變視覺效果

#### `box-shadow`

- 陰影
- `box-shadow: horizonalOffset verticalOffset blurRadius optionalSpreadRadius color`
- `box-shadow` 也不佔有空間

## 4. 文字

1.  `color`：文字色彩
2.  `font-size`：字級
    <br>├ 使用 `em` 時若想簡化換算，可以在 `body` 指定 `font-size: 62.5%;`，
    <br>│ 讓 `1em = 16px x 62.5% = 10px`，這樣 `px` 數只需要除以 10 就能換算成 `em`。
    <br>└ 使用 `rem` 可以避免字體大小逐層複合的連鎖反應，讓所有網頁文字同時等比例縮放。
3.  `font-weight`：字重
4.  `text-align`：文字對齊
5.  `text-decoration`：文字裝飾
6.  `text-indent`：文字首行縮排
7.  `font-family`／`font-style`：字體
    <br>├ `sans-serif`：英美字體的「無襯線體」，對應到中文的「黑體」。
    <br>├ `serif`：英美字體的「襯線體」，對應到中文的「明體」。
    <br>├ `monospace`：等寬字體。常用於程式的原始碼字體。
    <br>├ `cursive`：手寫風格字體。會依據 OS 與瀏覽器而有大幅差異。
    <br>└ `fantasy`：裝飾風格字體。同樣會依據 OS 與瀏覽器有大幅差異。
8.  `letter-spacing`：字距
9.  `line-height`：行高
    <br>└ 字距用 em，行高用 ex
10. `overflow-wrap: break-word;`：換行
    <br>├ `word-wrap: break-word;`
    <br>├ `word-break: break-all;`
    <br>└ `word-break: break-word;`

- [Google Font](https://fonts.google.com/)
- [line-height について考えませんか - Qiita](https://qiita.com/an_apco/items/87ff859950bc2752ae8c)
- [vw と rem を組み合わせて、4K ディスプレイを考慮した文字サイズを設計する - Qiita](https://qiita.com/y___k/items/e663c3d9586861b8aa0d)
- [讓文字配合 RWD 網站自動縮放大小 - VHS—Design vitamin for creative mind. - Medium](https://medium.com/vhs-design-vitamin-for-creative-mind/font-size-4b4817ac17a3)
- [《網頁設計》舒適的中文文章 CSS 排版設定（附加思源黑體注意事項） - iamtie（我是鐵）](https://www.iamtie.com/2020/09/cssarticlesetting.html)

## 5. 選取器

### 選取器類別

1. `*`：全體選擇器 universal selector
2. `div`：type 選取器
3. `.chrisClass1`：class 選取器
4. `#chrisID`：ID 選取器
5. attribute 屬性選取器
6. `selector[attritube=vaule]`：presence and value selectors 指定屬性選擇器
   <br>├ `[attribute~=value]` 選定多個以空格隔開的 attribute 其中之一的值為 value 的元素
   <br>└ `[attribute|=value]` 選定接在 `-` (U+002D) 或者單獨的 attribute 值為 value 呃元素，常用於選定語言子碼
7. substring matching attribute selectors 局部屬性選擇器
   <br>├ `[attribute^='value']` 選定 attribute 值以 value 開頭／前綴的元素
   <br>├ `[attribute$='value']` 選定 attribute 值以 value 結尾／後綴的元素
   <br>└ `[attribute*='value']` 選定 attribute 值中包含 value 的元素
8. psuedo-class 選取器 `:`
   <br>├ 同樣屬於 class 的一種
   <br>├ 可說是 CSS 本身提供的分類
   <br>└ 優先權同 class

#### psuedo-class 選取器

- 錨點虛擬類別
  <br>├ `:link`：尚未點擊
  <br>├ `:hover`：滑鼠碰觸
  <br>├ `:active`：點擊當下
  <br>├ `:focus`：取得焦點
  <br>├ `:visited`：點擊過後
  <br>│ 由於虛擬類別的優先權同於 class
  <br>│ 會遇到後者覆寫前者的規則問題
  <br>│ 在撰寫順序上需注意應為：
  <br>├ 1. `a`
  <br>│ 2. `a: visited`
  <br>│ 3. `a: hover`
  <br>└ 4. `a: active`
- 狀態虛擬類別
  <br>├ `:checked`
  <br>├ `:unchecked`
  <br>├ `:enabled`
  <br>└ `:disabled`
- 序列虛擬類別
  <br>├ `:empty`
  <br>└ `:not()`
- `*-child`
  <br>├ `:first-child`：第一個子元素
  <br>├ `:last-child`：最後一個子元素
  <br>├ `:nth-child(數字)`：第幾個子元素（從 1 數起，不是從 0）
  <br>├ `:nth-child(2n)`：偶數的子元素（2 的倍數）
  <br>├ `:nth-child(2n+1)`：奇數的子元素
  <br>├ `:nth-last-child(數字)`：從後面數來第幾個子元素
  <br>└ `:only-child`：父元素內只有一個子元素
- `*-of-type`
  <br>├ `:first-of-type`：同一種元素的第一個
  <br>├ `:last-of-type`：同一種元素的最後一個
  <br>├ `:nth-of-type(數字)`：同一種元素裏頭的第幾個
  <br>├ `:nth-last-of-type(數字)`：同一種元素從後面屬過來第幾個
  <br>└ `:only-of-type`：只有這種元素

9. `::`：psuedo-element 選取器

- 應用於裝飾性的物件上
- `:: before（:before）`
  <br>在原本的元素「之前」加入內容，以 `display: inline-block` 的屬性存在
- `:: after（:after）`
  <br>在原本的元素「之後」加入內容，以 `display: inline-block` 的屬性存在
- `:: before（:before）` 與 `:: after（:after）` 一定要有 `content` 的屬性
- `content` 屬性可使用的值有：
  <br>├ `none`
  <br>├ `normal`
  <br>├ `string`
  <br>├ `url`
  <br>├ `counter`
  <br>├ `attr`
  <br>├ `open-quote`
  <br>├ `close-quote`
  <br>├ `no-open-quote`
  <br>└ `no-close-quote`

10. 其它的偽元素選取器：

- `::selection`
- `::first-line（: first-line）`
- `::first-letter（: first-letter）`
- `::cue（: cue）`
- `::backdrop`
- `::placeholder`
- `::marker`
- `::spelling-error`
- `::grammar-error`

11. `:root`

- 通常用於存放 CSS 變數用
- 使用 `var(變數名稱)` 套用
- 變數以 `--` 開頭命名，ex: `--primary-color`

```css
:root {
  --width: 100vw;
  --max-width: 100vw;

  @media (min-width: 42em) {
    --width: 42rem;
  }
}
```

### 選取器運算子

- [CSS Selector 速見表](https://codepen.io/nana8/full/aXQgoj)
- `+` 選擇緊鄰元素
  <br>├ 也就是第 2 個元素緊接於第 1 個元素之後，並且兩者擁有相同母元素
  <br>├ `A + B`
  <br>└ 例：`h2 + p` 會選擇所有緊鄰於 `<h2>` 之後的 `<p>`
- `~` 選擇兄弟元素，
  <br>├ 也就是第 2 個元素在第 1 個元素後方任意位置，並且兩者擁有相同母元素
  <br>├ `A ~ B`
  <br>└ 例：`p ~ span` 會選擇所有在 `<p>` 元素之後的 `<span>`元素
- `>` 選擇直接子元素
  <br>├ `A > B`
  <br>└ 例：`ul > li` 僅會選擇 `<ul>` 元素巢狀內第一層的 `<li>` 元素
- `\s` 選擇所有子元素
  <br>├ `A B`
  <br>└ 例：`div span` 會選擇所有 `<div>` 內的 `<span>` 元素

### 選取器的權重

選取器具有權重，瀏覽器會依其決定要顯示的樣式
<br>相同權重但是後寫的 css，會覆蓋先寫的 css
<br>當一個元素同時有兩個選擇器，權重高的優先生效

### 基本權重

基本權重由高至低為：

- `!important`
- `inline style`
- `id`
- `class`／`psuedo-class`（偽類）／`attribute`（屬性選擇器）
- `Element`
- `*`

| 元素                                                   | 權重                                |
| ------------------------------------------------------ | ----------------------------------- |
| `Element`                                              | 所有的 Element 的權重都是 `0-0-0-1` |
| `class`                                                | 每一個 class 的權重都是 `0-0-1-0`   |
| `psuedo-class`                                         | 和 attribute 權重相同               |
| `id`                                                   | 每一個 id 的權重都是 `0-1-0-0`      |
| `inline style attribute`<br>（寫在 html 行內的 style） | 權重為 `1-0-0-0`                    |
| `!important`                                           | 可以蓋過所有的權重                  |

## 6. 動畫

### animation 動畫

CSS 的動畫共有 8 個 properties，而其中名稱與總播放時間為必須的，這 8 個 properties 分別為：

1. `animation-name`：此動畫的名稱
2. `animation-duration`：動畫完整播放所需時間，預設值為 0
   <br>├ 必須大於等於 0，負值無效
   <br>│ 可使用整數或小數點，單位為秒（s）或毫秒（ms）
   <br>├ 根據人類資訊處理模型，人類感知物件平均所需時間為 230ms（0.23s）
   <br>│ 不同人的最短感知到最長感知時間落在 70ms 到 700ms 前後
   <br>├ 簡單且重覆性高的動態效果（如選單），時間過長（如 600ms = 0.6s）會令人有冗長的感覺
   <br>└ 設定在 250ms = 0.25s 前後較能讓人感受到動態，同時不會有等待的感覺
3. `animation-timing-function`：動畫的速度曲線，預設值為 ease（起始結束減速，中途加速）
   <br>├ 為由貝茲曲線（Cubic Bezier）所構成的函數圖型，CSS 有數個預先定義好的值
   <br>├ 如 `linear`（線性）、`ease`（起始結束減速，中途加速）、`ease-in`（漸入）、`ease-out`（漸出）、`ease-in-out`（漸入漸出）...etc.
   <br>├ 亦可自行定義貝茲曲線的數值：`cubic-bezier(n1, n2, n3, n4)`，其值需為介於 0 至 1 之間的小數或整數
   <br>├ 實際效果可以參照 [Easing 函數](https://easings.net/) 或是 [cubic-bezier(.17,.67,.83,.67)](https://cubic-bezier.com/#.17,.67,.83,.67)
   <br>└ 除了貝茲曲線圖型外，亦可使用 [`steps()`](http://ghmagical.com/article/0gU2Wefas7hn) 做出跳躍的效果
4. `animation-delay`：動畫開始的時間點，預設值為 0
   <br>└ 可設為負值，負值意味動畫立即開始，並且提早結束
5. `animation-iteration-count`：動畫播放次數，預設值為 `1`，可設為 `n（正整數）`或 `infinite`
6. `animation-direction`：動畫播放順序，預設值為 normal（正向播放）
   <br>├ `normal`
   <br>├ `reverse`
   <br>├ `alternate`：奇數次正向播放，偶數次反向播放
   <br>└ `alternate-reverse`
7. `animation-play-state`：動畫播放狀態，預設值為 running（播放）
   <br>├ `paused`
   <br>└ `running`
8. `animation-fill-mode`：動畫播放開始前或結束後的狀態，預設值為 none（回到初始狀態）
   <br>├ `none`：動畫結束後立即回至開始前的狀態
   <br>├ `forwards`：動畫結束後保持結束時的狀態
   <br>├ `backwards`
   <br>└ `both`

並且可簡寫成 `animation: 動畫名稱 播放時長 開始時間點 速度曲線 次數 順序 開始前結束後狀態 播放狀態(播放或是暫停)`
<br>如：`animation: rotation 2s ease 0s 1 alternate none running;`

#### easing 強弱

Easing 還再分有 8 種強弱關建字：`Sine`、`Quad`、`Cubic`、`Quart`、`Quint`、`Expo`、`Circ`、`Back`，其中前 6 種裡 `Sine` 為變化最緩慢，之後到 `Expo` 變化最劇烈，最後 2 種的 `Circ` 的餘韻比 `Expo` 再長一點，`Back` 則是會再反彈

- [【CSS アニメーション】transition のイージングに ease-in や ease-out を適当に設定するのはやめましょう - Qiita](https://qiita.com/s-kato/items/d5d1ceee9e2a28e02e6e)

### @keyframes

`animation` 只能定義單次的動畫，如果我們想要做出一連串的動畫變化效果，
也就是所謂的時間軸和關鍵影格時，我們就需要 `@keyframes` 了
時間軸有兩種寫法：

1. `from` -> `n%` -> `to`
2. `0%` -> `n%` -> `100%`
   <br>└ 基本上 `from` = `0%`，`to` = `100%`

```css
div:hover {
  animation: chloe 2s infinite;
}

@keyframes chloe {
  0% {
    // 也可以寫成 from {...}
    border-radius: 50%;
  }
  100% {
    // 也可以寫成 to {...}
    border-radius: 0%;
  }
}
```

亦可透過 Chrome DevTools 調整，要注意的是在 `@keyframes` 裡面寫 `!important` 是沒有效果的。

#### 參考文章

- [完整解析 CSS 動畫 ( CSS Animation )](https://www.oxxostudio.tw/articles/201803/css-animation.html)
- [CSS アニメーション 入門](https://qiita.com/soarflat/items/4a302e0cafa21477707f)
- [CSS アニメーションを使いこなすために知っておきたい 5 つのこと](http://qiita.com/nekoneko-wanwan/items/e8114c6e34d2950a7b28)
- [CSS プロパティのアニメーション](https://developer.mozilla.org/ja/docs/Tools/Performance/Scenarios/Animating_CSS_properties)
- [CSS アニメーションについて深く知る](https://qiita.com/yuki153/items/9aac0e5c8d7230a7bbe2)
- [[CSS アニメーション]三 ( 卍^o^ ) 卍 ← こいつのこれ → 卍を回したい](https://qiita.com/mame_hashbill/items/98118f4e7721a1ac30c9)

### transition 轉場

- `transition: 屬性 轉換時間 延遲執行動畫的時間 速度;`
  <br>└ 預設值為 `transition: all 300ms 0s ease;`
- `transition-property`：指定變動的參數
- `transition-duration`：開始至結束
- `transition-delay`：準備至開始
- `transition-timing-function`：指定 Easing

### transform

- [【CSS3】 Transform ( 変形 ) 関連のまとめ - Qiita](https://qiita.com/7968/items/eddfeb4b424d7c2d2d34)
- `transform` 可以用來移動、旋轉、縮放或傾斜元素
- 與 `transition` 或 `@keyframes` 一同使用可做出互動動畫效果
- 想同時套用多個效果時，使用空格連接即可
  <br>├ `transform: translateX(20px) translateY(20px) rotate(30deg);`
  <br>├ 套用的順序亦會互相影響，例如先套用傾斜和套用傾斜可能會有不同結果
  <br>└ 若個別記述多個 `transform` 時，只有最後一個會有效果
- `translate`：移動
  <br>├ `translate(X軸移動距離, Y軸移動距離)`
  <br>├ `translateX(X軸移動距離)`
  <br>├ `translateY(Y軸移動距離)`
  <br>├ `translateZ(Z軸移動距離)`
  <br>├ `translate3d(X軸移動距離, Y軸移動距離, Z軸移動距離)`
- `rotate`：旋轉，使用 `deg` 單位
  <br>├ `rotate(旋轉角度)`
  <br>├ `rotateX(X軸旋轉角度)`
  <br>├ `rotateY(Y軸旋轉角度)`
  <br>├ `rotateZ(Z軸旋轉角度)`
  <br>└ `rotate3d(X軸旋轉向量, Y軸旋轉向量, Z軸旋轉向量, 旋轉角度)`
- `scale`：縮放，以 `1` 為比例基準
  <br>├ `scale(數值, 數值)`
  <br>├ `scaleX(數值)`
  <br>├ `scaleY(數值)`
  <br>├ `scaleZ(數值)`
  <br>└ `scale3d(數值, 數值, 數值)`
- `skew`：傾斜，使用 `deg` 單位
  <br>├ `skew(X軸傾斜角度, Y軸傾斜角度)`
  <br>├ `skewX(X軸傾斜角度)`
  <br>├ `skewY(Y軸傾斜角度)`
  <br>├ 由於計算方式的關係，`skew` 的順序不同會出現不同結果
  <br>├ 範例：使用 `skew()` 做出斜邊效果
  <br>└ 想得出相同結果，建議改用 `matrix()`

<div class="emphasis-skew-border">
    Content here
    <br/>content here
    <br/>content here
</div>

<style>
  .emphasis-skew-border {
    position: relative;
    width: 160px;
    padding: 10px 20px;
    font-size: 20px;
    z-index: 0;

    color: #2e8def;
    background: #333333;
    border-bottom: 3px solid #2e8def;
  }

  .emphasis-skew-border:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    background: #333333;
    border-bottom: 3px solid #2e8def;
    border-right: 20px solid #2e8def;

    transform-origin: bottom left;
    -ms-transform: skew(-30deg, 0deg);
    -webkit-transform: skew(-30deg, 0deg);
    transform: skew(-30deg, 0deg);
  }
</style>

```html
<div class="emphasis-skew-border">
  Content here
  <br />content here <br />content here
</div>

<style>
  .emphasis-skew-border {
    position: relative;
    width: 160px;
    padding: 10px 20px;
    font-size: 20px;
    z-index: 0;

    color: #2e8def;
    background: #333333;
    border-bottom: 3px solid #2e8def;
  }
  .emphasis-skew-border:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    background: #333333;
    border-bottom: 3px solid #2e8def;
    border-right: 20px solid #2e8def;

    transform-origin: bottom left;
    -ms-transform: skew(-30deg, 0deg);
    -webkit-transform: skew(-30deg, 0deg);
    transform: skew(-30deg, 0deg);
  }
</style>
```

- `matrix`：結合上述四種變形的記述方式，亦是這幾種變形的實際實作方式
  <br>├ 使用 6 個參數的矩陣，進行轉換計算（即矩陣乘法），`Matrix = translate * rotate * scale * skew`
  <br>├ `matrix(a, b, c, d, e, f)`
  <br>├ 數學上的對應記述為：
  ```
  a c e       x     a*x + c*y + e
  b d f   *   y  =  b*x + d*y + f
  0 0 1       1      0  +  0  + 1
  ```
  <br>│ 轉換後的水平位置：`x(prevCoordSys) = ax + cy + e`
  <br>│ 轉換後的垂直位置：`y(prevCoordSys) = bx + dy + f`
  <br>│ ex. `transform: matrix(1, 0, 0, 1, 100, 100);`
  <br>│ 轉換後的水平縮放：`s*x = ax + cy + e`，`s` 為比例
  <br>│ 轉換後的垂直縮放：`s*y = bx + dy + f`，`s` 為比例
  <br>│ ex. `transform: matrix(3, 0, 0, 0.5, 0, 0);`
  <br>├ `matrix(cosθ, sinθ, -sinθ, cosθ, 0, 0)`
  <br>│ 轉換後的水平旋轉：`x(prevCoordSys) = x*cosθ - y*sinθ + 0`
  <br>│ 轉換後的垂直旋轉：`y(prevCoordSys) = x*sinθ + y*cosθ + 0`
  <br>│ ex. `transform: matrix(0.866025,0.500000,-0.500000,0.866025,0,0);`
  <br>├ `matrix(1, tan(θy), tan(θx), 1, 0, 0)`
  <br>│ 轉換後的水平傾斜：`x(prevCoordSys) = x + y*tan(θx) + 0`
  <br>│ 轉換後的垂直旋轉：`y(prevCoordSys) = x*tan(θy) + y + 0`
  <br>└ ex. `transform: matrix(1,0,0.75,1,0,0);`
- `matrix3d`：使用 16 個參數，以各列序優先排序
  <br>├ `matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)`
  <br>├ `a1 b1 c1 d1 a2 b2 c2 d2 a3 b3 c3 d3` 標記線性轉換
  <br>├ `a4 b4 c4 d4` 標記套用轉換
  <br>├ 數學上的對應記述為：
  ```
    a1 b1 c1 d1       x       a1*x + b1*y + c1*z + d1
    a2 b2 c2 d2   *   y   =   a2*x + b2*y + c2*z + d2
    a3 b3 c3 d3       z       a3*x + b3*y + c3*z + d3
    a4 b4 c4 d4       1       a4*x + b4*y + c4*z + d4
  ```
- `transform-origin`：設定變形的錨定基準點
  <br>├ `transform-origin: X軸位置 Y軸位置`
  <br>└ 2D 預設值為 `50% 50%`，3D 為 `50% 50% 0`
- `transform-style`：設定變形空間
  <br>├ `flat`：2D 空間，此為預設值
  <br>├ `preserve-3d`：3D 空間，想使用 3D 變形需設定此參數
  <br>└ 此屬性不會繼承，所有子元素皆需個別設定
- `perspective`：設定元素的透視距離，僅可套用於子元素上，單位為 `px`
  <br>└ `perspective: 遠近值`
- `perspective-origin`：指定 `perspective` 透視點，預設值為元素中心
  <br>├ `perspective-origin: X軸位置 Y軸位置`
  <br>└ 可使用具單位的值，或 `left`、`center`、`right`、`top`、`center`、`bottom` 等位置單詞
- `transform: perspective()`：效果和 `perspective` 相同
  <br>├ 但此設定會套用至所有已變形的 3D 空間子元素
  <br>└ 而 `respective` 是設定該元素的視覺深度
- `backface-visibility`：由於 HTML 元素有前後堆疊關係，即使在前方的元素變形（ex. `rotateY(180deg)`）仍然會蓋過後方的元素
  <br>└ 將此屬性設為 `hidden` 能讓位居前方的元素轉為背向時隱藏，預設為 `visible`

#### clip-path

- `clip-path` 可以用來裁切元素，決定其顯示的形狀樣式
- 可以使用既有的 SVG 網址，或是內建的圖形 function 指定形狀
- `clip-path: <clip-source> | [ <basic-shape> || <geometry-box> ] | none`
  <br>├ `clip-source`：SVG 圖形的 URL
  <br>├ `basic-shape`：基礎圖形 function
  <br>│ 有 `circle`、`ellipse`、`polygon`、`inset` 等圖形可使用
  <br>│ 各個 function parameter 等詳細內容請參照 [CSS Shapes 規範](https://www.w3.org/TR/css-shapes-1/#typedef-basic-shape) 或 [CSS Shape Functions](https://oreillymedia.github.io/Using_SVG/guide/css-shapes.html)
  <br>├ `geometry-box`：搭配 `basic-shape` 使用的設定參數，提供圖形參照用的盒模型設定
  <br>└ 例如使用 `margin-box`, `border-box`, `padding-box`, `content-box`...etc. 決定參照點
- 範例：`polygon(point1x point1y, point2x point2y, point3x point3y, point4x point4y)`
  <br>├ 此例將第一個點的 `y` 向下平移了 `calc(var(--clip-padding) * 2`
  <br>└ 剩餘三點則為原本的角落端點，因此最終形狀為一個單斜邊四邊形

<div class="clip-path"></div>

<style>
:root {
    --width: 100vw;
    --full-width: 100vw;
    --magic-number: 0.09719;
    --skew-padding: calc(var(--width) * var(--magic-number));
    --clip-padding: calc(var(--full-width) * var(--magic-number));
}

.clip-path {
  position: relative;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 50%,
      0,
      transparent 100%
    ), linear-gradient(-135deg, #0cc, #066);
  background-size: 0.5em 0.5em, 100% 100%;
  padding: calc(
      (var(--clip-padding) * 2) - (var(--clip-padding) - var(--skew-padding))
    ) 0 4em;
  clip-path: polygon(
    0% calc(var(--clip-padding) * 2),
    100% 0%,
    100% 100%,
    0% 100%
  );
  -webkit-clip-path: polygon(
    0% calc(var(--clip-padding) * 2),
    100% 0%,
    100% 100%,
    0% 100%
  );
}
</style>

```css
/* 
  CSS Tutorial: Create Diagonal Layouts Like It's 2020
  https://9elements.com/blog/pure-css-diagonal-layouts/ 
*/
.clip-path {
  position: relative;
  margin-top: calc((var(--clip-padding) * -1) - 2px);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 50%,
      0,
      transparent 100%
    ), linear-gradient(-135deg, #0cc, #066);
  background-size: 0.5em 0.5em, 100% 100%;
  padding: calc(
      (var(--clip-padding) * 2) - (var(--clip-padding) - var(--skew-padding))
    ) 0 4em;
  clip-path: polygon(
    0% calc(var(--clip-padding) * 2),
    100% 0%,
    100% 100%,
    0% 100%
  );
  -webkit-clip-path: polygon(
    0% calc(var(--clip-padding) * 2),
    100% 0%,
    100% 100%,
    0% 100%
  );
}
```

## 7. 媒體查詢

針對不同裝置，套用不同的樣式與適合閱讀的文字大小。

### RWD

```css
@media screen and (條件) and (條件) ... {
  // 判斷式，用在 screen 螢幕的媒體
}
```

以手機頁面呈現為優先設計，先在手機頁面中將圖片設定為 100%，
<br>平板或桌機尺寸再用 `display: flex` 或其他方式做排版。

如果先寫桌機版再用複寫的設定到手機版，對手機耗電量大，效能比較不好，
<br>所以都建議先從手機尺寸設計版面。

- 常用相關關鍵字
  <br>├ all
  <br>├ screen
  <br>├ print
  <br>├ Queries
  <br>├ and
  <br>├ not
  <br>└ only

```css
@media (max-width: 575.99px) {
  ...;
}
@media (min-width: 576px) and (max-width: 767.99px) {
  ...;
}
@media (min-width: 768px) and (max-width: 991.99px) {
  ...;
}
@media (min-width: 992px) and (max-width: 1199.99px) {
  ...;
}
@media (min-width: 1200px) {
  ...;
}
```

[Day22：小事之 Media Query](https://ithelp.ithome.com.tw/articles/10196578)

- 設定檢視區（Viewport）
  <br>`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  <br>使用 CSS3 Media queries @media 針對不同寬度的瀏覽器提供適合的頁面樣式
- 盡量使用相對寬度
- 使用流動性/比例式網格系統
- 五大外觀設計模式
  1. 主體為流動（mostly fluid）
  2. 欄內容下排（column drop）
  3. 版面配置位移（layout shifter）
  4. 微小調整（tiny tweaks）
  5. 畫布外空間利用（off canvas）
- 使用相對比例的響應式大小圖片與影片
- 使用 video 元素來載入、播放影片
- 使用多種格式的影片，以便在多種行動平台上播放
- 正確設定影片大小，確保你的影片不會超出容器
- 無障礙設計很重要：請為 video 元素新增 track 子元素

```html
<video controls>
  <source src="chrome.webm" type="video/webm" />
  <source src="chrome.mp4" type="video/mp4" />
  <p>Sorry, 您的瀏覽器並不支援 video 元素喔</p>
</video>
```

## 8. Reset

1.  [reset.css](https://meyerweb.com/eric/tools/css/reset/)
    <br>└ 將 margin 和 padding 全設為 0，並自行修改設定
2.  [normalize.css](http://necolas.github.io/normalize.css/)
    <br>└ 軟性統一瀏覽器規範、修正 Bug，提高可用性
3.  [sanitize.css](https://csstools.github.io/sanitize.css/)
4.  [ress.css](https://github.com/filipelinhares/ress)
    <br>└`link rel='stylesheet' href='https://unpkg.com/ress/dist/ress.min.css'`
5.  [A Modern CSS Reset](https://hankchizljaw.com/wrote/a-modern-css-reset/)

有兩種好的 debug 框線做法：

1.  用 `outline`（用法和 `border` 一模一樣）
2.  用 `box-shadow`

## 9. Sass

- syntactically awesome style sheets
- CSS 預處理器，擴充了如下的各種寫法
  <br>├ variables
  <br>├ nesting（`&`）
  <br>├ mixins
  <br>├ functions
  <br>├ operations
  <br>├ `@include`
  <br>├ `@extend`
  <br>└ `@content`

※目前變數也可以直接寫在原生 CSS 裡，並且除了常見的數值單位或純數值之外，也可以儲存關鍵字、字串或圖片網址，以至於用於 `box-shadow` 或 `color` 這種具有一系列屬性的值，並且可以套用進各種 CSS function，但變數無法用來儲存動畫，仍然需要搭配如 Houdini 裡的 [CSS Properties and Values API](https://drafts.css-houdini.org/css-properties-values-api/) 來實作

```scss
:root {
  --min: 1rem;
  --max: 4rem;
  --clamped-font-size: clamp(var(--min), 2.5vw, var(--max));

  --bullets: circle;
  --casing: uppercase;

  /* image from an external URL (PNG in this case) */
  --image-from-somewhere: url(https://codersblock.com/assets/images/logo.png);

  /* image from embedded data (SVG in this case) */
  --image-embedded: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z'%3E%3C/path%3E%3C/svg%3E");
}

p {
  font-size: var(--clamped-font-size);
}

ul {
  list-style-type: var(--bullets);
  text-transform: var(--casing);
}

.a {
  background-image: var(--image-from-somewhere);
}

.b::after {
  content: var(--image-embedded);
}
```

### [7+1 Sass 設計模式](https://sass-guidelin.es/#the-7-1-pattern)

```
sass/
│
├ base/
│ ├ _reset.scss # Reset/normalize
│ ├ _typography.scss # Typography rules
│ └ ... # Etc…
│
├ components/
│ ├ _buttons.scss # Buttons
│ ├ _carousel.scss # Carousel
│ ├ _cover.scss # Cover
│ ├ _dropdown.scss # Dropdown
│ └ ... # Etc…
│
├ layout/
│ ├ _navigation.scss # Navigation
│ ├ _grid.scss # Grid system
│ ├ _header.scss # Header
│ ├ _footer.scss # Footer
│ ├ _sidebar.scss # Sidebar
│ ├ _forms.scss # Forms
│ └ ... # Etc…
│
├ pages/
│ ├ _home.scss # Home specific styles
│ ├ _contact.scss # Contact specific styles
│ └ ... # Etc…
│
├ themes/
│ ├ _theme.scss # Default theme
│ ├ _admin.scss # Admin theme
│ └ ... # Etc…
│
├ utils/
│ ├ _variables.scss # Sass Variables
│ ├ _functions.scss # Sass Functions
│ ├ _mixins.scss # Sass Mixins
│ └ _helpers.scss # Class & placeholders helpers
│
├ vendors/
│ ├ _bootstrap.scss # Bootstrap
│ ├ _jquery-ui.scss # jQuery UI
│ └ ... # Etc…
│
│
└ `main.scss` # Main Sass file
```

### 編譯成 css

- [決断力を消耗しない Sass 開発環境構築](https://speakerdeck.com/bcrikko/set-up-sass-development-environment)

1.  在專案目錄底下建立 css 與 scss 資料夾
    <br>└ 安裝編譯套件：`npm install -D node-sass`
2.  在 `./package.json` 加上 `{ "scripts": { "sass": "node-sass scss/style.scss css/style.css" }}`
    <br>│ 執行 `npm run sass` 就會進行編譯
    <br>├ 可再加上 `-output-style expanded` 改善輸出 CSS 結構可視化
    <br>└ 或 `-source-map true` 在使用開發工具時改為參照 Sass 檔案
3.  刪除多餘的檔案：`npm install -D rimraf`
    <br>│ 在 `./package.json` 加上 `{ "scripts": { "build": "npm run clean && npm run sass", "sass": "...", "clean": "rimraf css" }}`，
    <br>└ 執行 `npm run build` 就會先 clean 再編譯 sass
4.  監視自動編譯：`{ "scripts": { "watch": "npm run sass -- --watch", "build": "...", "sass": "...", "clean": "..." }}`
    <br>└ 執行 `npm run watch`
5.  加上前綴詞：`npm install -D postcss-cli autoprefixer`
    <br>│ 在 `./package.json` 加上 `{ "scripts": {}, "browserslist: [ ">= 1%", "ie >= 10"] }`
    <br>│ 指定對應國內 1% 以上使用率的瀏覽器和 IE10
    <br>└ 詳細的對應瀏覽器可以參照 https://browsersl.ist/
6.  在 `./package.json` 加上 `{ "scripts": { "watch": "...", "build": "npm run clean && npm run sass && npm run autoprefix", "clean": "...", "sass": "...", "autoprefix": "post css --use autoprefixer --map false --output css/style.css css/style.css" }, "browserslist": [ "..." ]}`
    <br>└ `npm run build` 就會以 clean -> sass -> autoprefixer 的順序執行

## 10. 版型檢查

- [CSS 筆記、建議與指導方針總整理](https://github.com/doggy8088/CSS-Guidelines)
- [cssreference.io](https://cssreference.io/)
- [CSS Style Guides](https://dailydevlinks.com/css-style-guides/)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Google が推奨する HTML/CSS のスタイルガイドについて](https://www.wan55.co.jp/column/detail/id=485)
- [文件、規範參考 - Material Design](https://wcc723.github.io/design/2018/10/20/design-guide/)
- [Google Material Design 正體中文版](https://wcc723.gitbooks.io/google_design_translate/content/index.html)
- [CSSLint の全 32 個のルールをサンプルコードを書きながら解説しました](https://qiita.com/oh_rusty_nail/items/12e5783a9630a6905b1e)
- [How to 速度改善 ー Web パフォーマンスについて知っておきたいこと 7 選ー](https://qiita.com/masanarih0ri/items/1c6b856da0bd04bed995)

1.  類別階層不超過四層為原則
2.  不使用 ID，一律使用 class
3.  使用 OOCSS 建立類別工具庫
4.  使用 SMACSS 來建立 Sass 結構
5.  排版結構以 BEM 來開發
6.  導入 BS4 的 Grid System
7.  使用 Sass for 來管理擴充元件
8.  一率採用小駝峰式命名
9.  導入第三方插件在 Sass import vendor
10. 使用 REM 單位
11. 佈局使用 flexbox 進行元件設計

### 網頁兼容性

1.  跨瀏覽器（Chrome、Firefox、Edge）
2.  螢幕解析度（1920、1440、1280、1024、768、414、320）

### 可讀性

1.  class（`-`）或（`_`）自訂規則，注重大小駝峰寫法
2.  縮排與註解規則

### 擴充性

1.  具有元件化設計觀念（BEM、SMACSS 或自訂規則）
2.  不輕易影響主體架構（JS hooks）

### 重用性

1.  自訂 class 可在多處使用（OOCSS）
2.  無重複套用多餘 CSS

### 維護性

1.  整體結構是否清晰易懂（Sass import）
2.  整體風格一致性

### [移动开发之设计稿转换页面单位尺寸](https://blog.csdn.net/ww0908/article/details/72730267)

1.  設計稿的單位是 `px`，一般是 750px。
2.  `px`、`rem` 混用，`rem` 的 html `font-size` 用 16px。
3.  750px 的設計圖以 375 px 量長寬，
    <br>例如設計圖裡有一元素寬度是 100px，
    <br>那麼可得到寬度是 `(100px / 2) / 16px` = 3.125rem。
4.  根據裝置寬度不同，設定不同的 html 的 `font-size`。

## 11. CSS 命名與設計模式

- [1 段上の CSS 設計・コーディングの概念図 ( HCDC モデル図 )](https://qiita.com/croco_works/items/3f0f7407db5f263d2562)
- [HCDC による分析と考察／CSS 設計のモデル図が出来るまで](https://qiita.com/croco_works/items/9a0698097fba2312b9ad)
- [漫談 CSS 架構方法 - 以 OOCSS, SMACSS, BEM 為例](https://www.slideshare.net/kurotanshi/css-oocss-smacss-bem)
- [CSS 不是我們想像的這麼簡單！](https://speakerdeck.com/kurotanshi/css-bu-shi-wo-men-xiang-xiang-de-zhe-mo-jian-dan-tai-bei-chang)
- [CSS のクラス名を決めるときに使うリストをつくりました](https://qiita.com/manabuyasuda/items/dbb76ed36970bec95470)
- [Naming -名前付け- - Qiita](https://qiita.com/Koki_jp/items/f3d3e824f98d182d4100)
- [CSS のクラス名を書く前に最低限知っておくべきルール＆BEM を改良してみた - Qiita](https://qiita.com/taka555/items/6c39f3fe7fca834aa448)
- [各 CSS 設計手法を取り入れる上でのメリット・デメリットをまとめてみた](https://qiita.com/nezurika/items/a964e21d3596b0ee4c9a)
- [CSS 設計完全ガイドで学んだ PRE_CSS を Elm で堅牢に実装する](https://qiita.com/ababup1192/items/9a305c95cdf4d93fd32a)
- [脱・ Atomic Design - HTML+CSS コーディングの粒度分類法 ( HTML Parts )](https://qiita.com/croco_works/items/e34d1b0c0e50b37031d7)
- [1 年前に素人が FLOCSS 使って直面した疑問/失敗に対し、PRECSS を学んで解消 / 前進できた話 - Qiita](https://qiita.com/SYM_simu/items/9d653155fd98e12a641c)

### OOCSS（模組化 CSS，Object Oriented CSS）

#### 兩大原則

- 結構與外觀分離 Separate Structure and Skin
- 容器與內容分離 Separate Container and Content

```css
#button {
  width: 200px;
  height: 50px;
  padding: 10px;
  border: solid 1px #ccc;
  box-shadow: rgba (0, 0, 0, 0.5) 2px 2px 5px;
}

#box {
  width: 400px;
  overflow: hidden;
  border: solid 1px #ccc;
  background: linear-gradient (#ccc, #222);
  box-shadow: rgba (0, 0, 0, 0.5) 2px 2px 5px;
}

#widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
  border: solid 1px #ccc;
  background: linear-gradient (#ccc, #222);
  box-shadow: rgba (0, 0, 0, 0.5) 2px 2px 5px;
}

.button {
  width: 200px;
  height: 50px;
}

.box {
  width: 400px;
  overflow: hidden;
}

.widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
}

.skin {
  border: solid 1px #ccc;
  background: linear-gradient (#ccc, #222);
  box-shadow: rgba (0, 0, 0, 0.5) 2px 2px 5px;
}
```

### [SMACSS](http://smacss.com/)（Scalable & Modular Architecture for CSS）

- Categorization 將結構分類
- Naming rules 命名規則
- Decoupling CSS from HTML CSS 與 HTML 分離

#### 1. Base

- CSS Reset
- CSS Normalize
- 在 Base 類別裡不應使用 !important

```css
/* Base */

html {
  background-color: #fff;
}

body,
form {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

h1,
h2,
h3 {
  margin: 1em 0;
}
```

#### 2. Layout

- Header
- Sidebar
- Content

```css
/* Layout */

# header {
  width: 960px;
  margin: 0 auto;
}

.l-article {
  ...;
}

.l-grid {
  ...;
}

.l-grid > li {
  ...;
}
```

#### 3. Module

- 頁面上可單獨存在並且可重複使用的元件
- 定義 Module 時應避免使用 id 或標記名稱做選擇器
- 子模組以原模組名稱加 dash（`-`）作為名稱。如: `.mod-header`, `.mod-body`

例如：

- Tabs
- Customized List
- Button

```html
<div class="fld">
  <span>Folder name</span>
</div>
```

```css
/* The Folder Module */
.fld > span {
  padding-left: 20px;
  background: url (icon.png);
}
```

```html
<div class="fld">
  <span>Folder Name</span>
    <span> ( 32 items ) </span>
</div>

<div class="fld">
  <span class="fld-name">Folder Name</span>
    <span class="fld-items> ( 32 items ) </span>
</div>
```

#### 4. State

- 與 Layout, Module 搭配
- 表示 Layout 或 Module 的狀態變化
- 由 class 定義
- 命名規則是 `.is-*` 開頭

例如：

- Disabled State
- Default State
- Active State
- Default State

```css
/* State */
.is-hidden {
  display: none;
}

.is-error {
  font-weight: 700;
  color: #f00;
}

.is-tab-active {
  border-bottom-color: transparent;
}
```

#### 5. Theme

- 定義網站主視覺
- 類似 Layout，但影響的是網站整體視覺的變化。
- class 名稱通常以 `.theme-*` 做開頭

### BEM（Block-Element-Modifier）

- 拋棄語意式命名，改以工具功能、性質命名。

#### 命名結構

- 以 Block 起始
- Element 接續（中間使用 2 個底線連結）
- Modifier 做結（中間使用 2 個橫線連結）。
- `block__element--modifier`

#### 1. Block

可獨立再利用的內容，即前端框架裡的元件，例如 card 便是個好的 Block 例子。

避免如 shopping-list 這類具體的名字，
<br>命名為 check-list 這類一般性的名稱，能夠在各種情況下再利用。
<br>例如命名為 check-list 後便能同時在 shopping-list 和 TODO List 裡使用。

- 在頁面上獨立存在並可重複使用的元件
- 如同 SMACSS 的 Module, Layout
- 每個 Block 都是獨立存在的

```css
.button .b-button .text-field .b-text-field .heading .b-heading .menu .b-menu;
```

#### 2. Element

只存在於 Block 裡的內容，例如 `card__title` 或 `card__text`、`card__button`。

Element 只允許一層巢狀。也就是說，規範上是不可命名為 `card__button__text`的。
<br>但可以將 button 定義為新的 Block，並命名為 `button__text`。

- 為 Block 的一部份（子組件）
- 無法獨立於 Block 之外
- 有些 Block 可能沒有 Element

```css
.button__icon .text-field__label .heading__title .menu__item;
```

#### 3. Modifier

用於修飾 Block 或 Element，因此必定存在做為基底的 class。
<br>以 card 為例：card card--featured. card class 本身有 padding 和 border, card--featured class 只改變背景顏色。

- 用來定義 Block 或 Element 的狀態或屬性
- 類似 SMACSS 的 State
- 同一個 Block 或 Element 可以允許多組 modifier 同時存在

```css
.button_active .text-field_editable .heading_align_top .menu__item_promo;
```

#### [Chainable BEM modifiers](https://qiita.com/yasuhiro-yamada/items/25b170d2b56005bf413e)

由 Jordan Lewis 所提出的 BEM 改寫方式，簡略為 `-命名空間-值`，
<br>例如：`-color-red`, `-size-large`，同一個命名空間不可賦予兩個以上的值。

```html
<!-- Large green button -->
<button class="btn -color-green -size-large"></button>
```

```scss
.btn {
  font-size: 20px;
  background-color: grey;

  &.-color-green {
    background-color: green;
  }

  &.-size-large {
    font-size: 30px;
    padding: 10px;
  }
}
```

由伺服器端或 JavaScript 進行狀態修改的 class 則加上 `is-`。

- [BEM, CSS 設計模式](https://chupainotebook.blogspot.com/2019/05/bemcss.html)
- [BEM を使うべき 5 つの理由 ( なぜ BEM が G.R.E.A.T といえるのか )](https://frasco.io/5-reasons-to-use-bem-f5ca38f748a1)
- [[BEM 設計]うわああああ三 ( 卍^o^ ) 卍ってならない BEM の書き方をワイヤーフレーム使って整理するぞ ( その 1 )](https://qiita.com/mame_hashbill/items/bf541f795533b40e3cdc)
- [[BEM 設計]うわああああ三 ( 卍^o^ ) 卍ってならない BEM の書き方をワイヤーフレーム使って整理するぞ ( その 2 )](https://qiita.com/mame_hashbill/items/81267a7ec498ff113a3b)
- [うわあああああああ三 ( 卍^o^ ) 卍ってなってたどりついた私的な BEM の使い方](https://qiita.com/mame_hashbill/items/972b124a9a476cf8b326)
- [naming BEM sub blocks [duplicate]](https://stackoverflow.com/questions/22723290/naming-bem-sub-blocks)
- [BEM Naming](http://getbem.com/naming/)
- [BEM Key concepts](https://en.bem.info/methodology/key-concepts/)
- [一番詳しい CSS 設計規則 BEM のマニュアル](https://qiita.com/Takuan_Oishii/items/0f0d2c5dc33a9b2d9cb1)
- [[HTML/SCSS] BEM 設計をワイヤーフレームを使って解説してみる](https://qiita.com/mame_hashbill/items/c5b09461d7acfce047fa)
- [flocss](https://github.com/hiloki/flocss)

### FLOCSS

### PRECSS

### Atomic CSS 樣式原子化

- [Atomic Design を分かったつもりになる | DeNA DESIGN BLOG](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B/)
- [フロントエンドのコンポーネント設計に立ち向かう - Qiita](https://qiita.com/seya/items/8814e905693f00cdade2)

## 12. 現代 CSS 常見的基礎技術

- [現代開発者のための CSS 基礎技術 - Qiita](https://qiita.com/arowM/items/e1af320e2755461649a0#%E7%8F%BE%E4%BB%A3%E7%9A%84%E3%81%AA%E4%BD%BF%E3%81%84%E3%81%8B%E3%81%9F%E3%81%AE%E5%9F%BA%E7%A4%8E)

1.  套用的對象差異：單頁網頁／網頁應用程式
2.  支援的瀏覽器差異
3.  分離文章構造與表現手法
4.  不使用行內樣式
5.  不使用表現手法命名 class
6.  使用 psuedo-class, wai-aria, custom data attribute 處理不同狀態下的樣式
7.  使用 modern reset, vender prefix 處理瀏覽器差異
8.  使用 transition, animation 處理動畫

### 層級

1.  基本層：一般就是 reset.css 或 normalize.css
2.  框架層：處理網頁整體框架的 css
    <br>└ 左右欄、全屏、上下左右區塊，有什麼東西都沒差
3.  元件層：處理單個 UI 元件的 css
    <br>└ 一個小按鈕，在哪裏都沒差
4.  狀態層：處理單個 UI 元件的狀態
    <br>└ 錯誤的樣子，按鈕也會出現錯誤的樣子，箱子也會。.
5.  模板層：只處理模板的 css，專屬於這個設計的 css
    <br>└ 一個小按鈕，在某個模板，我的按鈕比較不一樣

## 參考文章

- [竹白筆記本 - HTML & CSS 整理](https://hackmd.io/@chupai/Byo_VJu84/)
- [前端新手村](https://ithelp.ithome.com.tw/articles/10196272)
- [CSS SECRETS 筆記](https://hackmd.io/vs5zeSweTt-0AHM9iyyY_w?both)
- [Sass 學習筆記](https://hackmd.io/@chupai/BJASrHh9V/)
- [CSS 專家密技](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/zh-TW)
- [CSS 黑魔法小技巧](https://github.com/jawil/blog/issues/29)
- [30 seconds of CSS](https://30-seconds.github.io/30-seconds-of-css/)
- [CSS Debugging Tips and Tricks](https://css-tricks.com/debugging-tips-tricks)
- [前端切版資源整理 - Dean 的前端 & 設計部落格](https://deanocean.github.io/2020/12/03/2020-12-03-%E5%89%8D%E7%AB%AF%E5%88%87%E7%89%88%E8%B3%87%E6%BA%90%E6%95%B4%E7%90%86/)
