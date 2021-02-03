---
title: "CSS - Susy 3 快速計算排版欄寬與間隔的 library"
date: 2019-11-09T00:32:49.000Z
published: 2019-11-09T00:32:49.000Z
author: f6bfb5
summary: "Susy 是一套 Sass 的響應式版面引擎，在還沒有 flexbox 和 grid 的時候，Susy 提供了一系列的 Sass function ，可以搭配變數快速計算出網格分割的尺寸、處理斷點變版，讓工程師不再需要苦於自行處理數值，到了 Susy 3 之後，則簡化成了可以與 flexbox 和 float 搭配使用的功能性 library。"
tags: F2E, CSS
layout: blog
---

## What is Susy 3？

Susy 是一套 Sass 的響應式版面引擎，在還沒有 flexbox 和 grid 的時候，Susy 提供了一系列的 Sass function ，可以搭配變數快速計算出網格分割的尺寸、處理斷點變版，讓工程師不再需要苦於自行處理數值，到了 Susy 3 之後，則簡化成了可以與 flexbox 和 float 搭配使用的功能性 library。

Susy 3 提供了無前綴詞彙的 `sass/susy` 與附前綴詞彙的 `sass/susy-prefix` 兩種版本可以使用。以計算內容總寬度的 `span()` function 為例，附前綴詞彙版本需要改為使用 `susy-span()`。

官方提供了[一系列的匯入方式](https://www.oddbird.net/susy/docs/)，除了直接自 CSS 檔案引用路徑之外，也可以使用 Eyeglass、Webpack、Gulp、Grunt 等打包工具匯入。

## 設定容器欄位

Susy 3 以變數設定容器要切分成幾份欄位，並將客製化的分割方式儲存於 `$susy` 變數裡，此變數有四個預設屬性：

1. `columns`：各欄寬度，類似 grid 的 `grid-template-columns`
2. `gutters`：各欄之間的間隔，類似 grid 的 `grid-column-gap`
3. `spread`：設定跨欄內容的間隔模式
4. `container-spread`：設定容器外圍的間隔模式

```scss
$susy: (
  "columns": susy-repeat(4),
  "gutters": 0.25,
  "spread": "narrow",
  "container-spread": "narrow",
);
```

除了附單位的值之外，也可以使用無單位數字來設定響應式的欄位寬度——類似於 CSS 變數單位中的 `fr`，或是使用 `susy-repeat($count, $value)` 函式設定連續欄寬——類似於 CSS 原生的 `repeat()`。

間隔模式有 `narrow`（預設值）、`wide`、`wider` 三種值可以設定，但使用前需將 `box-sizing` 設定為 `border-box`。這部份單看文字或許比較難以理解，可以參考 [Understanding 'Spread' in Susy3](https://www.oddbird.net/2017/06/13/susy-spread/) 一文。

1. `narrow`：欄位的兩端無間隔
2. `wide`：每個欄位左右皆會有間隔
3. `wider`：欄位的兩端會多一份間隔

也可以使用 `susy-settings()` 函式覆寫所有設定，或是使用 `susy-get()` 修改單獨設定。

## 設定元素佔比

Susy 3 裡有 3 個 function 可以取得相關數值，分別是 `span()`、`gutter()`、`slice()`，以及使用兩個關鍵字 `at` 選取位置，`of` 選取欄數，將對應的 function 指定至 CSS 屬性上，即可簡化許多計算

1. `span()`：取得欄寬，例如 `span(6 of 12)` 會取得 12 欄中 6 欄的寬度，並同時處理減去間隔的計算
2. `gutter()`：取得間隔寬，例如 `gutter(of 6)` 取得 6 欄中單欄的間隔寬
3. `slice()`：取得欄的子集，適合用於格線不對稱時，例如 `susy-slice(3 at 3 of (1 2 3 5 8))` 是從 `(1 2 3 5 8)` 寬度的格線裡，自第 3 欄開始，選取 3 欄，最後得到結果會為 `3 5 8`

```scss
.floats {
  float: left;
  width: span(3 of 6); // 48.27586%;
  margin-left: gutter(of 6); // 3.44828%;
}
```

## 斷點設計

如果想在不同的斷點改變排板，我們會需要在不同的 media query 裡都重新設定一次全域變數，造成反覆撰寫的問題，Susy 官方再提供了[兩個 mixin](https://www.oddbird.net/2017/09/25/susy-use/)，可以傳入斷點變數，簡化設定修改

### 1. `susy-use`

從 media query 裡獨立斷點變數。

```scss
@mixin susy-use($config) {
  $config: susy-compile($config);

  $global: $susy;
  $susy: map-merge($susy, $config) !global;

  @content;

  $susy: $global !global;
}
```

範例：

```scss
// 變數儲存不同斷點的欄位與間隔設定
$medium: (
  "columns": susy-repeat(8),
  "gutters": 1em,
);

@media (min-width: 30em) {
  @include susy-use($medium) {
    // 使用 susy-use mixin 與變數套用斷點設定
  }
}
```

### 2. `susy-at`

可以直接在 media query 之外的變數裡設定斷點大小。
※使用此 mixin 亦需引入 `susy-use`！

```scss
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

```scss
// 變數儲存不同斷點的斷點大小、欄位與間隔設定
$medium: (
  "min-width": 30em,
  "columns": susy-repeat(8),
  "gutters": 1em,
);

@include susy-at($medium) {
  // 使用 susy-at mixin 與變數建立新斷點
}
```

### 3. `gallery`

```scss
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
