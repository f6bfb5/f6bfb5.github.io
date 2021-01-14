---
title: "JavaScript 筆記 - D3.js"
date: 2021-01-11T00:07:30.000Z
---

## 入門設置

### 安裝

#### script 引入

- `<script src="https://d3js.org/d3.v5.min.js"></script>`

#### npm

1. `npm install --save d3`
2. `<script type="text/javascript" src="node_modules/d3/build/d3.js"></script>`

### 新增元素

- `d3.select("body").append("p").text("Hello!");`

### 綁定資料

```javascript
var dataset = [1, 2, 3, 4, 5];
d3.select("body")
  .selectAll("p") // 這裡選擇的是一組不存在的 p 元素
  .data(dataset) // 遍歷 dataset 中的變數
  .enter() // 利用 d3.js 中的 enter() 加入新元素
  .append("p")
  .text(function (d) {
    return d;
  }) // 傳入 dataset 中的變數
  .style("color", function (d) {
    // 設定元素的樣式
    if (d > 2) {
      // 可以使用 function 彈性處理樣式
      return "red";
    } else {
      return "black";
    }
  });
```

### 使用 SVG

想使用 d3.js 搭配 SVG，需要先在網頁上設置 SVG 元素

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>D3.js example</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
  </head>
  <body>
    <svg width="500" height="50"></svg>
    <script>
      // js code goes here
      // 也可以使用 d3.js 的 method 創建一個 SVG 元素
      d3.select("body").append("svg").attr("width", 500).attr("height", 50);
    </script>
  </body>
</html>
```

SVG 預設有許多圖形，例如 `rect`、`circle`、`ellipse`、`line`、`text`、`path`，以畫面左上角為原點 `(0,0)`，`x 座標值`向右增加，`y 座標值` 向下增加。

- `rect`：四角形，需要設定 x、y 座標以及寬、高
  <br>`<rect x="0" y="0" width="500" height="50"/>`
- `circle`：圓形，需要設定 x、y 座標以及半徑
  <br>`<circle cx="250" cy="25" r="25"/>`
- `line`：線條，需要設定起點座標、終點座標及顏色，預設顏色為透明
  <br>`<line x1="0" y1="0" x2="500" y2="50" stroke="black"/>`
- `text`：文字，需要設定 x、y 座標
  <br>`<text x="250" y="25">Text</text>`

亦可使用各種樣式設定：

| 值           | 說明                                            |
| ------------ | ----------------------------------------------- |
| fill         | 填充色，可使用色名、12 進位數、RGB 和 RGBA 指定 |
| stroke       | 外框色                                          |
| stroke-width | 外框線粗度                                      |
| opacity      | 透明度                                          |
| font-family  | 字體名稱                                        |
| font-size    | 字體大小                                        |

SVG 沒有類似 CSS 中 `z-index` 的概念，之後設定的元素會顯示在上方

對 SVG 圖形有了基本概念後，我們可以如下加入一系列的 SVG 元素

```javascript
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 100);
var dataset = [1, 2, 3, 4, 5];
var circles = svg.selectAll("circle").data(dataset).enter().append("circle");
circle
  .attr("cx", function (d, i) {
    return i * 50 + 25;
  })
  .attr("cy", 50)
  .attr("r", function (d) {
    return 5 * d;
  })
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", function (d) {
    return d;
  });
```

## 基本使用

### data()

```javascript
// div 元素已存在的情況
// 將資料加入現有的元素內
var dataset = [1, 2, 3, 4, 5, 6];
var div = d3.selectAll("div").data(dataset);

// 沒有 div 元素的情況
// 使用 enter() 產生新的元素
d3.selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .style("color", "red")
  .text(function (d) {
    return "this data is " + d;
  });

// div 元素已存在的情況下，再加入新的元素
// 可以使用 merge() 一起選擇
var div = d3.selectAll("div").data(dataset);

var divEnter = div.enter().append("div");

var divUpdate = divEnter.merge(div);

divUpdate.style("color", "blue").text(function (d) {
  return "this data is " + d;
});

// 也可以使用 exit() 反轉選擇
dataset = ["A", "B"]; // 新加入的資料
var div = d3
  .selectAll("div") // div 裡已有其它資料
  .data(dataset)
  .style("color", "red")
  .text(function (d) {
    return "this data is " + d;
  });

div
  .exit() // 選擇新的 dataset 以外的資料
  .style("color", "green");

div.exit().remove(); // 也可以藉此刪除新的 dataset 以外的資料
```

### 建立表格

#### 從 array 建立

```javascript
var dataset = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

d3.select("body")
  .append("table")
  .attr("border", "1")
  .append("tbody")
  .selectAll("tr")
  .data(dataset)
  .enter() // 二維陣列
  .append("tr")
  .selectAll("td")
  .data(function (row) {
    return row;
  })
  .enter() // 一維陣列
  .append("td")
  .text(function (d) {
    return d;
  });
```

#### 從 object 建立

```javascript
var dataset = [
  { name: "A", para1: 0, para2: 5 },
  { name: "B", para1: 1, para2: 6 },
  { name: "C", para1: 2, para2: 7 },
  { name: "D", para1: 3, para2: 8 },
  { name: "E", para1: 4, para2: 9 },
];

var names = d3.keys(dataset[0]); // 取出 object 的 key 陣列

var table = d3.select("body").append("table").attr("border", "1");

table
  .append("thead")
  .append("tr")
  .selectAll("th")
  .data(names) // 傳入 table header 用的 key 陣列
  .enter()
  .append("th")
  .text(function (d) {
    return d; // 加入 key
  });

table
  .append("tbody")
  .selectAll("tr")
  .data(dataset) // 傳入初始資料
  .enter()
  .append("tr")
  .selectAll("td")
  .data(function (row) {
    return d3.entries(row); // 取出 object 的 key 和 value
  })
  .enter()
  .append("td")
  .text(function (d) {
    return d.value; // 只加入 value
  });
```

## 滑鼠操作／觸碰事件處理

## 基礎圖表

## 輪廓圖／熱點圖

## 階層資料

## 力模擬圖

## 繪製台灣地圖

1. 到政府資料開放平台下載[台灣地圖](https://data.gov.tw/dataset/7442)的 shp 檔案
   <br>其它還有更詳細的[鄉鎮市區地圖](https://data.gov.tw/dataset/7441)及[村里地圖](https://data.gov.tw/dataset/7440)
   > ESRI Shapefile（shp），或簡稱 shapefile，是美國環境系統研究所公司（ESRI）開發的空間資料開放格式。

### 轉換格式

#### mapshaper

1. 使用線上網站工具 [mapshaper](https://mapshaper.org/) 拖曳進 `.dbf`、`.prj`、`.shp`、`.shx` 這四種類型的檔案
2. 點擊右上角的「Simplify」，勾選「prevent shape removal」後點擊「Apply」
3. 調整簡化比例到可接受的比例，幾乎到 1% 前後都還在相當詳細的範圍內
4. 點擊右上角的「Export」，d3 可用的格式為 `GeoJSON` 和 `TopoJSON`
   <br>但 TopoJSON 仍需要使用[套件](https://github.com/topojson/topojson)轉換資料型別才可使用
   > GeoJSON 是一種基於 JSON 的地理空間數據交換格式，它定義了幾種類型 JSON 對象以及它們組合在一起的方法，以表示有關地理要素、屬性和它們的空間範圍的數據。
   > ToopJSON 是由 D3 的作者基於 GeoJSON 推出的延伸格式，縮減了 GeoJSON 的冗餘內容，更加壓縮檔案大小

#### shapefile

```bash
# 1. 安裝轉換用的套件 shapefile
npm install -g shapefile
# 2. 使用 Big5 編碼轉換
shp2json COUNTY_MOI_1090820.shp -o COUNTY_MOI_1090820.json --encoding big5
```

### 繪製地圖

- `d3.geoMercator`：以麥卡托投影法繪製地圖
- `center`：地圖中心點座標
- `scale`：地圖縮放倍率
- `d3.geoPath`：轉換投影資料成為 path 路徑
- `turf`：如果繪製出來是一塊黑色方塊，需要使用 turf.js 轉換 winding order
  <br>（不太確定精確意思，應該是投影橢圓時有分為依照順時鐘或逆時鐘判斷哪一面是外側
  <br> 而轉換工具可能不會準確做到這件事，畫出來是內側圖型時就會變成一塊黑，
  <br> 需要再做一次外圈順序轉換才能正常顯示）

```html
<script>
  import { onMount } from "svelte";

  let d3Ready = false;
  let turfReady = false;
  let mounted = false;

  onMount(function () {
    mounted = true;
    if (d3Ready && turfReady) {
      // 讀取地圖資料後呼叫繪圖 function
      d3.json("COUNTY_MOI_1090820.json").then((data) => draw(data));
      // 亦可使用 fetch
      // fetch("COUNTY_MOI_1090820.json")
      //   .then((res) => res.json())
      //   .then((data) => draw(data));
    }
  });

  function d3Loaded() {
    d3Ready = true;
    if (mounted && turfReady) {
      d3.json("COUNTY_MOI_1090820.json").then((data) => draw(data));
    }
  }

  function turfLoaded() {
    d3Ready = true;
    if (d3Ready && mounted) {
      d3.json("COUNTY_MOI_1090820.json").then((data) => draw(data));
    }
  }

  function draw(mapData) {
    const map = d3.select(".map").attr("width", 960).attr("height", 500);
    // 設定投影中心點與縮放倍率
    const projection = d3.geoMercator().center([121, 24]).scale(6000);

    // 轉換投影資料為路徑
    const path = d3.geoPath().projection(projection);
    const fixedFeatures = mapData.features.map((feature) =>
      turf.rewind(feature, { reverse: true })
    );

    // 繪製地圖
    map
      .selectAll("path")
      .data(fixedFeatures)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("stroke", "black")
      .attr("stroke-width", "0.7")
      .attr("fill", "steelblue");
  }
</script>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/Turf.js/6.2.0/turf.min.js"
    on:load="{turfLoaded}"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/d3/6.3.1/d3.min.js"
    on:load="{d3Loaded}"
  ></script>
</svelte:head>

<svg class="map" />
```

- [How to use external Javascript libraries (e.g. Stripe.js) in SvelteJS - Niels van der Molen](https://www.nielsvandermolen.com/external-javascript-sveltejs/)
- [javascript - D3.js Drawing geojson incorrectly - Stack Overflow](https://stackoverflow.com/questions/49311001/d3-js-drawing-geojson-incorrectly)

## 參考文章

- [D3.js v4/5 使い方 徹底攻略 - データビジュアライゼーション・ラボ](https://wizardace.com/)
- [The D3 Graph Gallery - Simple charts made with d3.js](https://www.d3-graph-gallery.com/)
- [Learn D3.js step by step](http://d3indepth.com/)
- [API 中文手册 · d3/d3 Wiki](https://github.com/d3/d3/wiki/API--%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C)
