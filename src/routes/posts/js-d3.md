---
title: "JavaScript 筆記 - D3.js"
date: 2021-01-11T00:07:30.000Z
---

### D3.js

- [D3.js Show Reel](https://bl.ocks.org/mbostock/1256572)
- [The D3 Graph Gallery - Simple charts made with d3.js](https://www.d3-graph-gallery.com/)
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
