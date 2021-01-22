---
title: "CSS - Tailwindcss 把樣式都寫在 HTML class 上"
date: 2019-12-06T13:19:59.000Z
published: 2019-12-06T13:19:59.000Z
author: f6bfb5
summary:
layout: blog
---

## What is Tailwindcss？

過去 Bootstrap、Material UI、Bulma 這些框架是先定義好各種常見功能的 component，例如 card、navbar 或 modal，雖然可以直接套入樣式使用，但在客製化上就比較麻煩。

Tailwindcss 是一套 Utility-First（以功能性為主）的 CSS 框架，改為把各種 CSS 會用到的屬性簡化為對應的 class，例如 `p-8` 是 `padding: 2rem;`、`rounded-xl` 是 `border-radius: 0.75rem;`、`md:flex` 是 `@media (min-width: 768px) { display: flex; }`，把樣式都直接寫在了 HTML 的 class 上。

## 安裝

- [Document](https://tailwindcss.com/docs/installation)

## 參考文章

- [還在跟複雜的 CSS 的設定奮鬥嗎？用 Tailwind 來幫你實現真正的高效整潔！](https://5xruby.tw/posts/tailwind-css-plugin/)
