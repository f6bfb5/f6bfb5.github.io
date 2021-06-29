---
title: "CSS - Tailwind CSS 把樣式都寫在 HTML class 上"
date: 2019-12-06T13:19:59.000Z
summary: "Tailwind CSS 是一套 Utility-First（以功能性為主）的 CSS 框架，改為把各種 CSS 會用到的屬性簡化為對應的 class，例如 p-8 是 padding: 2rem;、rounded-xl 是 border-radius: 0.75rem;、md:flex 是 @media (min-width: 768px) { display: flex; }，把樣式都直接寫在了 HTML 的 class 上。"
tags: F2E, CSS
---

## What is Tailwind CSS？

過去 Bootstrap、Material UI、Bulma 這些框架是先定義好各種常見功能的 component，例如 card、navbar 或 modal，雖然可以直接套入樣式使用，但在客製化上就比較麻煩。

Tailwind CSS 是一套 Utility-First（以功能性為主）的 CSS 框架，改為把各種 CSS 會用到的屬性簡化為對應的 class，例如 `p-8` 是 `padding: 2rem;`、`rounded-xl` 是 `border-radius: 0.75rem;`、`md:flex` 是 `@media (min-width: 768px) { display: flex; }`，把樣式都直接寫在了 HTML 的 class 上。

## 安裝

- [Document](https://tailwindcss.com/docs/installation)

## 相關 Library

### Twind

[Twind](https://github.com/tw-in-js/twind) 是一套整合 CSS-in-JS 和 Tailwind 的 library，適合用在舊專案，或是使用到會和 Tailwind CSS 的 class 名稱有衝突的 library 或 框架時，Twind 提供了 hash 過後的 class 名稱，又能保持既有的 Tailwind 寫法

## 參考文章

- [還在跟複雜的 CSS 的設定奮鬥嗎？用 Tailwind 來幫你實現真正的高效整潔！](https://5xruby.tw/posts/tailwind-css-plugin/)
