---
title: "使用 Emmet 快速完成內容"
date: 2019-07-21T13:47:08.000Z
summary:
---

## What is Emmet？

在撰寫網頁的時候，我們常會需要輸入許多重覆的 HTML 與 CSS 內容，例如 HTML 的標籤閉合、CSS 的屬性設定，因此 Vadim Makeev 在 2008 年時推出了一套編輯器的外掛程式，可以使用特定的簡寫語法，快速產生對應的完整內容。

例如 `#page>div.logo+ul#nav>li*5>a{Item $}` 這一串簡寫語法，按下 `Tab` 透過 Emmet 轉換後就會變為：

```html
<div id="page">
  <div class="logo"></div>
  <ul id="nav">
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</div>
```

就能替我們省下非常多輸入所消耗掉的時間，大幅提高生產效率。

## Emmet 語法

更詳細的語法與產生內容可以參考 [cheat sheet](https://docs.emmet.io/cheat-sheet/)。

### HTML

| 語法     | 內容                          | 範例                                |
| -------- | ----------------------------- | ----------------------------------- |
| HTML Tag | 閉合標籤                      | `div`                               |
| `>`      | 後代元素                      | `div>ul>li`                         |
| `+`      | 兄弟元素                      | `div+p+bq`                          |
| `^`      | 上級元素                      | `div+div>p>span+em^bq`              |
| `()`     | 元素分組                      | `div>(header>ul>li*2>a)+footer>p`   |
| `*`      | 複數元素                      | `ul>li*5`                           |
| `$`      | 元素迭代                      | `ul>li.item$*5`                     |
| `@`      | 搭配 `$` 使用，指定迭代初始值 | `ul>li.item$@-*5`                   |
| `{}`     | 文字內容                      | `p>{Click }+a{here}+{ to continue}` |
| `#`      | 設定 id                       | `#header`                           |
| `.`      | 設定 class                    | `.title`                            |
| `[]`     | 設定屬性                      | `p[title="Hello world"]`            |
| `lorem`  | 產生假文                      |                                     |

## CSS

CSS 由於屬性繁多，以下只列出比較常見的語法

| 語法  | 內容                      |
| ----- | ------------------------- |
| `m`   | `margin:`                 |
| `p`   | `padding:`                |
| `fz`  | `font-size:`              |
| `poa` | `position absolute;`      |
| `df`  | `display: flex;`          |
| `jcc` | `justify-content: center` |
| `aic` | `align-items: center`     |

### 屬性值

也可以在簡寫語法後面加上值，轉換後就會代入此值：`m10` ⟹ `margin: 10px;`、`mt10` ⟹ `margin-top: 10px;`

如果想要同時替屬性設定多個值時，只需要在屬性之間加上 `-` 即可：`m4-6` ⟹ `margin: 4px 6px;`

### 單位

Emmet 預設單位為 `px`，想使用其他單位需於值的後方再加上簡寫，例如：`w100p` ⟹ `width: 100%`、`m10p30e5x` ⟹ `margin: 10% 30em 5ex`

簡寫與單位對照如下

| 簡寫 | 產生單位 |
| ---- | -------- |
| `p`  | `%`      |
| `e`  | `em`     |
| `r`  | `rem`    |
| `x`  | `ex`     |
