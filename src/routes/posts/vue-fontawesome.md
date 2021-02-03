---
title: "Vue 筆記 - fontawesome"
date: 2019-12-07T06:46:15.000Z
author: f6bfb5
summary:
tags: F2E, JavaScript
layout: blog
---

## vue-fontawesome

### 安裝

- `npm i -D @fortawesome/{vue-fontawesome,fontawesome-svg-core,free-brands-svg-icons}`
- 免費圖示：
  ├ `@fortawesome/free-solid-svg-icons`
  ├ `@fortawesome/free-regular-svg-icons`
  └ `@fortawesome/free-brands-svg-icons`
- 付費圖示：
  ├ `@fortawesome/pro-solid-svg-icons`
  ├ `@fortawesome/pro-regular-svg-icons`
  ├ `@fortawesome/pro-light-svg-icons`
  └ `@fortawesome/pro-duotone-svg-icons`

### 設定付費資訊

```bash
# A. 全體設定
npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
npm config set "//npm.fontawesome.com/:_authToken" TOKEN

# B. 在 project 主資料夾或與 package.json 相同位置的資料夾裡建立 .npmrc 檔案設定
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=TOKEN
```

### 導入

`main.js`

```javascript
import { library } from "@fortawesome/fontawesome-svg-core";

// 圖示名稱至 fontawesome 網站 https://fontawesome.com/icons?d=gallery 上搜尋
// 依欲使用的風格選擇
// free-solid-svg-icons 為填滿圖示，通常以 fas 為標頭
import { 欲使用的圖示名稱 as 圖示變數 } from "@fortawesome/free-solid-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

// free-regular-svg-icons 為一般圖示，通常以 far 為標頭
import { 欲使用的圖示名稱 as 圖示變數 } from "@fortawesome/free-regular-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 加入至 project 中
library.add(欲使用的圖示名稱);

Vue.component("font-awesome-icon", FontAwesomeIcon);
```

### 使用

組件的名稱於上方的 `Vue.component` 裡設定，如文內的範例是 `font-awesome-icon`；在欲使用的頁面裡加入：
`<font-awesome-icon :icon="['圖示標頭', '圖示名稱']" />`
ex: `<font-awesome-icon :icon="['fab', 'font-awesome']" />`
