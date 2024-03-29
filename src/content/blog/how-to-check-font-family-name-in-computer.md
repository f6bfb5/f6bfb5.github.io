---
title: "如何查詢可套用至font-family上的字體名稱"
date: 2021-11-14T17:09:25.000+08:00
summary: ""
tags: ["F2E"]
---

- Windows 的情況：
  1. 「設定」→「個人化」→「字型」
  2. 於「可用字型」底下，位於字型預覽圖下方的名稱
- Mac 的情況：
  1. 「Finder」→「Application」→「Font Book」
  2. 點擊字體裡選單的「i」開啟詳細資訊欄
  3. 裡頭的「Family」、「正式名稱」或「PostScript 名稱」皆可使用
- 通用解：直接貼上字體檔案名稱（不含副檔名）
  1. 例如字體檔案為 `crazeE-font2 thin.tff`
  2. 設定為 `font-family: 'crazeE-font2 thin';` 即可

## 參考資料

- [CSS の font-family に書くフォント名の調べ方 - Neo's World](https://neos21.net/blog/2017/12/25-01.html)
- [How to find out what a font on my computer's web font name is?](https://graphicdesign.stackexchange.com/questions/63885/how-to-find-out-what-a-font-on-my-computers-web-font-name-is)
