---
title: "如何建立 Chrome 插件"
date: 2019-11-05T01:57:35.000Z
published: 2019-11-05T01:57:35.000Z
author: f6bfb5
summary:
layout: blog
---

## Chrome 套件架構

1. manifest
2. background script
3. ui elements
4. content script
5. options page

## 詳細介紹

### mainfest

建立 Manifest 檔案

- `manifest.json`：基本設定
- `manifest_version`: manifest 檔案使用的格式版本（目前官方最新版為 2）
- `version`: 此套件的版本資訊（初次完成的版本可設定為 1）
- `name`: 套件名稱
- `description`: 套件簡短介紹
- `icons`: 提供套件將使用到的各尺寸圖像檔

```json
{
  "name": "Placeholder Image",
  "version": "1.1",
  "description": "Quickly find the right placeholder image for yourself!",
  "manifest_version": 2,
  "icons": {
    "16": "images/image16.png",
    "32": "images/image32.png",
    "48": "images/image48.png",
    "128": "images/image128.png"
  }
}
```

### background script

設定 Background Scripts

- `manifest.json`：設定 `background` 屬性和其相關設定
- `scripts`: 設定使用哪個背景腳本檔案（在此用 `background.js`）
- `persistent`: 設定背景腳本是否持續運行（官方建議 `false`: 根據事件開啟和關閉）

```json
{
  ...
  "background": {
    "scripts": [
      "background.js"
    ],
    "persistent": false
  },
  ...
}
```

## Download File Chrome Extension

```jsx
let images = [].slice
  .call(document.querySelectorAll("a"))
  .filter(
    (img) =>
      img.href &&
      img.href.indexOf("jpeg", img.href.length - "jpeg".length) !== -1
  );
for (img of images) img.setAttributeNode(document.createAttribute("download"));
```

- [いつも弟の部屋で口淫してくれるパシリの姉ちゃん(オリジナルサイズ差分 25 枚!!!)｜ハメドラゴン｜ pixivFANBOX](https://hamedoragon.fanbox.cc/posts/1197681)
- [Bookmarklet to download all images on a page](https://gist.github.com/sfrdmn/8834747)
- [google chrome extension - Download multiple images at once with Javascript - Stack Overflow](https://stackoverflow.com/questions/19830088/download-multiple-images-at-once-with-javascript)
- [Creating a Chrome Extension with VS Code - Gerald Versluis](https://blog.verslu.is/development/chrome-extension-vs-code/)

## 參考文章

- [[筆記] 從零開始製作 Chrome 套件到上架商店](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E7%AD%86%E8%A8%98-%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E8%A3%BD%E4%BD%9C-chrome-%E5%A5%97%E4%BB%B6%E5%88%B0%E4%B8%8A%E6%9E%B6%E5%95%86%E5%BA%97-4971ed79ac77)
- [初探 Chrome Extension](https://medium.com/chris-chuang/%E5%88%9D%E6%8E%A2-chrome-extension-19688ab79ae0)
