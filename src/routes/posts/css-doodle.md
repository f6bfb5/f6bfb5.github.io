---
title: "CSS Doodle"
date: 2020-02-16T06:31:34.000Z
published: 2020-02-16T06:31:34.000Z
author: f6bfb5
summary:
layout: blog
---

## Example

https://codepen.io/0x010C/pen/QWwPGWm

```
<css-doodle>
  :doodle {
    @grid: 5;
    @size: 30vmax; grid-gap: 1px;
    background: #f5f5f5;
    }
  background-color: hsla(@r(0,360), 70%, 70%, @r(.1,1));
  transform: scale(@rand(0.2, 1));
</css-doodle>
```

- `:doodle`: `css-doodle` 元素
- `@grid`: 畫布 5x5
- `@size`: 單個圖案大小
- `grid-gap`: 圖案間距
- `@nth` ,`@even`, `@odd`, `@at`: 指定特定座標圖案
- `@use`: 樣式可撰寫於 `css-doodle` 標籤內或是 `style` 裡

```html
<css-doodle> @use: var(--rule-a); </css-doodle>
```

```css
:root {
  --rule-a {
    :doodle {
      @grid: 5;
      @size: 30vmax;
      grid-gap: 1px;
      background: #f5f5f5;
    }
    background-color: hsla(@r (0, 360), 70%, 70%, @r (0.1, 1));
    transform: scale(@rand (0.2, 1));
  }
}
```

`@place-cell`: 以母元素做為相對位置

```css
@size: 1.6em;
@nth (1) {
  @place-cell: 0 top;
}
@nth (2) {
  @place-cell: right 25%;
}
@nth (3) {
  @place-cell: center;
}
@nth (4) {
  @place-cell: .8em calc(100% - .8em);
}
@nth (5) {
  @place-cell: 75% 80%;
}
```
