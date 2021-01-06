---
title: "使用 Emmet 快速完成內容"
date: 2019-07-21T13:47:08.000Z
published: 2019-07-21T13:47:08.000Z
author: f6bfb5
summary:
layout: blog
---

- 文章來源：[前端必知的 Emmet 实用操作，大致了解了下 Emmet 这个神器](http://www.fly63.com/article/detial/128)

## 簡介

作為一個前端，你肯知道在前端開發的過程中，一大部分的工作是寫 HTML、CSS 代碼。

特別是手動編寫 HTML 代碼的時候，效率會特別低下，因為需要敲打很多尖括號，而且很多標籤都需要閉合標籤等。

於是，就有了 Emmet（前身為 Zen Coding）。(當然這是以前的情況，現在作為一個合格的現代編輯器多多少少都集成了代碼自動提示，自動補全等功能)。

它作為一款強大的插件支持了許多編輯器與 IDE，什麼 vscode，sublime，atom，webstorm 等等都支持你可以直接在你的編輯器插件中搜索安裝，一些已自帶集成

我們先來看看官網的示例：
`#page>div.logo+ul#nav>li*5>a{Item $}`

在我們用了 emmet 後 一個 tap 就會生成下面這一大段。酷不酷炫，炫不炫酷

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

## 速見表

- [cheat sheet](https://docs.emmet.io/cheat-sheet/)
- 子元素: `>`
- 相鄰元素: `+`
- 上級元素: `^`
- 產生複數元素: `*`
- 包裝區域元素: `()`
- ID: `#`
- CLASS: `.`
- 元素屬性: `[]`
- 遞增: `$`
- 自訂遞增遞減: `@`
- 元素內容: `{}`
- 假文: `lorem`

## Emmet 語法

## 標籤

- `div` ⟹ `<div></div>`
- `foo` ⟹ `<foo></foo>`

### 後代： `>`

- `div>ul>li` ⟹

```html
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

### 兄弟：`+`

- `div+p+bq` ⟹

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

### 上級：`^`

- `div+div>p>span+em^bq` ⟹

```html
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>
```

### 乘法：`*`

- `ul>li*5` ⟹

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### 分組：`()`

- `div>(header>ul>li*2>a)+footer>p` ⟹

```html
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

### ID 和 CLASS

- `div#header+div.page+div#footer.class1.class2.class3` ⟹

```html
<div id="header"></div>
<div class="page">
  <div>
    <div id="footer" class="class1 class2 class3"></div>
    自定義屬性 td[title="Hello world!" colspan=3] ⟹

    <td title="Hello world!" colspan="3"></td>
  </div>
</div>
```

### 自增符號：`$`

- `ul>li.item$*5` ⟹

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

### 改變自增基數和方向：`@`

- `ul>li.item$@-*5` ⟹

```html
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```

- `ul>li.item$@3*5` ⟹

```html
<ul>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
  <li class="item6"></li>
  <li class="item7"></li>
</ul>
```

### 文本：`{}`

- `a[#]{Click me}` ⟹

```html
<a href="#">Click me</a>
```

### Lorem Ipsum(亂數假文)：`lorem`

- `lorem` ⟹

```html
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique impedit
quaeiure
```

## Emmet 的 css 支持

### css 屬性

`m` ⟹ `margin:`
`fz` ⟹ `font-size:`

### 屬性值

`m10` ⟹ `margin: 10px;`
`mt10` ⟹ `margin-top: 10px;`

### 多個屬性值

對於有多個屬性值的 CSS 屬性，在編寫時只需在屬性值之間添加-：

`m4-6` ⟹ `margin: 4px 6px;`

### 單位

Emmet 默認單位為`px`，其他單位如下

`p` → `%`
`e` → `em`
`r`→ `rem`
`x` → `ex`
`w100p` ⟹ `width: 100%`
`m10p30e5x` ⟹ `margin: 10% 30em 5ex`
