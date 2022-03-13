---
title: "Chrome 擴充功能"
date: 2021-11-30T14:31:12.000Z
tags: F2E
---

## 製作擴充功能

建立好作業用資料夾後，新增「manifest.json」並貼上：

```json
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 2
}
```

就已完成一個什麼都不會做的擴充功能。

## 安裝擴充功能

1. 點選 Chrome 選單 →「其他工具」→「擴充功能」或是在網址輸入 `chrome://extensions/` 開啟擴充功能的設定頁面
2. 開啟右上角的「開發人員模式」
3. 點選左上角的「載入未封裝項目」選擇方才儲存「manifest.json」的資料夾，即可完成安裝開發中的擴充功能。

## 實作功能：顯示對話視窗

## 參考文章

- [Chrome 拡張機能 を作ってみる](https://noitalog.tokyo/chrome-extensions/)

## 確認其他人製作的擴充功能原始碼

- [ブラウザ拡張機能のソースコードを確認する | バグ取りの日々](https://www.bugbugnow.net/2021/06/sourcecode-for-extension.html?m=1)
