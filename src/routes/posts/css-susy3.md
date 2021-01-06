---
title: "CSS Susy 3"
date: 2019-11-09T00:32:49.000Z
published: 2019-11-09T00:32:49.000Z
author: f6bfb5
summary:
layout: blog
---

Susy 3 是一套用於快速計算網格分割尺寸用的工具。

### 安裝

1. npm

- [Offical Document](https://www.oddbird.net/susy/docs/)

`npm install susy`

有 `無前綴詞彙` 與 `附前綴詞彙` 的兩種版本可以使用。

```
// 無前綴版
@import '<path-to>/susy/sass/susy';

// 附前綴版
@import '<path-to>/susy/sass/susy-prefix';
```

除錯用網格背景上色

```
// 無前綴版
@import '<path-to>/susy/sass/plugins/svg-grid';

// 附前綴版
@import '<path-to>/susy/sass/plugins/svg-grid/prefix';

.container {
  background: susy-svg-grid() no-repeat scroll;
}
```

2. webpack

- [CSS – SUSY3 – 安裝教學(1)，透過 webpack 從頭開始建立架構](http://jsnwork.kiiuo.com/archives/2803/css-susy3-%e5%ae%89%e8%a3%9d%e6%95%99%e5%ad%b81%ef%bc%8c%e9%80%8f%e9%81%8e-webpack-%e5%be%9e%e9%a0%ad%e9%96%8b%e5%a7%8b%e5%bb%ba%e7%ab%8b%e6%9e%b6%e6%a7%8b/)

3. Codepen

將預處理器改為 SCSS ，在 CSS 來源裡引入這兩個 pen：
Susy 3 - Codepen
https://codepen.io/mirisuzanne/pen/awdMoa
Susy 3 SVG Image Plugin - Codepen
https://codepen.io/mirisuzanne/pen/QgyoWp

### 設定變數

[Welcome to Susy3!](https://www.oddbird.net/2017/06/28/susy3/)

#### 1. `$columns` 格線佈局的水平空間

對應至 CSS 網格系統的 `$grid-template-columns`，設定切分成幾份欄位。

```css=
// 對稱的 layouts
$grid-template-columns: repeat(12, 120px);
$columns: susy-repeat(12, 120px);

// 不對稱的混合 layouts
$grid-template-columns: 120px repeat(4, 1fr) 30em;
$columns: 120px susy-repeat(4) 30em;
```

CSS 網格系統在流動欄位上使用 `fr` 單位， Susy 裡則使用無單位數字，即 `susy-repeat(4)` 會創造一個 4 格的流動網格，等同於設定為 `1 1 1 1`。

例如：

```css=
// 經典的 12 格網格 (兩者結果相同)
$columns: susy-repeat(12, 5em);
$columns: 5em 5em 5em 5em 5em 5em 5em 5em 5em 5em 5em 5em;

// 聖杯狀網格
$columns: 12em 1 200px;

// 中間區域增加更多欄位的聖杯狀網格
$columns: 12em susy-repeat(4) 200px;
$columns: 12em 1 1 1 1 200px;

//輪替重覆的欄位
$columns: susy-repeat(3, 8em, 200px);
```

Susy 不會直接修改 DOM，而是使用 `calc()` 替不相容與流動式的網格產生內容。

#### 2. `$gutters` 格線間隔

對應至 CSS 網格系統的 `grid-column-gap`，設定欄位之間的間隔大小。

```css=
// 流動式間隔
$gutters: 0.25;

// 固定間隔
$gutters: 10px;
```

#### 3. `'spread'` 與 `'container-spread'`

[Understanding Spread in Susy3](https://www.oddbird.net/2017/06/13/susy-spread/)

`spread` 有三個值，用以調整元素與 container 欄位的間隔設定，通常情況下只會用到前兩種，分別是 `narrow` 、 `wide` 、 `wider`，預設值為 `narrow`。

1. `narrow` : 欄位的兩端無間隔
2. `wide` : 每個欄位左右皆會有間隔
3. `wider` : 欄位的兩端會多一份間隔

使用前需將 `box-sizing` 設定為 `border-box`

`* { box-sizing: border-box; }`

#### 4. 全域設定

全域設定的 4 個設定變數儲存於 `$susy` 變數裡，可以從此進行修改，以下為預設值。

```css=
$susy: (
  "columns": susy-repeat(4),
  "gutters": 0.25,
  "spread": "narrow",
  "container-spread": "narrow"
);
```

### 使用

[CSS – SUSY3 – 使用方法(2)](https://jsnwork.kiiuo.com/archives/2805/css-susy3-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/)

#### 1.`span()`

設定元素的佔欄位數。

```css=
[col="4"] {
  width: span(4);
}
```

#### 2. `gutter()`

設定元素是否佔用間隔。

```css=
[col="4"] {
  width: span(4) + gutter();
}
```

#### 3. 斷點設計 `susy-use` 與 `susy-at` mixin

[Change grid settings based on responsive breakpoints in Susy 3 #658](https://github.com/oddbird/susy/issues/658)
[media queries & grid settings](https://www.oddbird.net/2017/09/25/susy-use/)

如果想藉由不同的斷點改變排板，需要在不同的 media query 裡重新設定一次全域變數，因此我們可以透過另外新增兩個 mixin 傳入斷點變數設定來簡化修改：

1. `susy-use`

將斷點變數從 media query 裡獨立出來。

```css=
@mixin susy-use($config) {
  $config: susy-compile($config);

  $global: $susy;
  $susy: map-merge($susy, $config) !global;

  @content;

  $susy: $global !global;
}
```

範例：

```css=
// 不同斷點裡的欄位與間隔設定
$medium: (
  "columns": susy-repeat(8),
  "gutters": 1em,
);

@media (min-width: 30em) {
  @include susy-use($medium) {
    // 此區塊的內容會套用 $medium 的設定。
  }
}
```

2. `susy-at`

可以直接在 media query 之外的變數裡設定斷點大小。
※使用此 mixin 亦需引入 `susy-use`！

```css=
@mixin susy-at($config) {
  $config: susy-compile($config);

  $min: map-get($config, "min-width");
  $min: if($min, "(min-width: #{$min})", null);
  $max: map-get($config, "max-width");
  $max: if($max, "(max-width: #{$max})", null);

  $and: if($min and $max, "#{$min} and #{$max}", null);

  $query: $and or $min or $max;

  @media #{$query} {
    @include susy-use($config) {
      @content;
    }
  }
}
```

範例：

```css=
// 不同斷點的斷點大小、欄位與間隔設定
$medium: (
  "min-width": 30em,
  "columns": susy-repeat(8),
  "gutters": 1em
);

@include susy-at($medium) {
  // 此區塊會建立新斷點
  // 此區塊的內容會套用 $medium 的設定。
}
```

3. `gallery`

```css
// https://github.com/oddbird/susy/issues/648
@mixin gallery($span, $config: ()) {
  $grid: susy-compile($span, $config);
  $span: map-get($grid, "span");
  $column-count: length(map-get($grid, "columns"));
  $count: floor($column-count / $span);
  $spread: map-get($grid, "spread") + 2;
  $container-spread: map-get($grid, "container-spread") + 2;
  $extra: ($container-spread - $spread) * 0.5;
  $extra-push: su-call("su-gutter", $grid) * $extra;

  float: left;
  margin-right: -100%;

  @for $n from 1 through ($count) {
    $nth: unquote("#{$count}n + #{$n}");
    $location: $span * ($n - 1) + 1;

    &:nth-child(#{$nth}) {
      $width: susy-compile($span at $location, $grid);
      width: su-call("su-span", $width);

      @if ($location > 1) {
        $wide: susy-compile("first" $location - 1 "wide", $grid);
        clear: none;
        margin-left: su-call("su-span", $wide) + $extra-push;
      } @else {
        clear: both;
        margin-left: if($extra-push > 0, $extra-push, 0);
      }
    }
  }
}
```

### 範例

[Susy3: Pushing, Pulling, and Padding](https://codepen.io/mirisuzanne/pen/BZjMXK?editors=0100)
[Grid: Susy 3](https://codepen.io/marco3w/pen/KJEKNM?editors=0100)
https://codepen.io/f6bfb5/pen/voObgB
https://sass-lang.com/documentation/interpolation

[なぜ 960px がグリッドにするときに良いのか計算してみた](https://qiita.com/terrierscript/items/fe6cc48ab98ffd6c55e2)
[Grid Calculator](http://gridcalculator.dk/)
