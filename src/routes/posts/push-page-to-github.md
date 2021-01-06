---
title: "推送網頁到 GitHub Pages"
date: 2020-05-25T00:26:32.000Z
published: 2020-05-25T00:26:32.000Z
author: f6bfb5
summary:
layout: blog
---

## 前置準備

- Github 帳號
- 理解版本控管

## 步驟

1. 登入 [Github](https://github.com/)，點選右上角 `+` -> `New repository`
2. 將 `Repository name` 命名為 `[你的 github 帳號].github.io` -> `Create Repositorty`
3. 開啟 Terminal，clone 專案至本地端: `git clone https://github.com/[你的帳號]/[你的帳號].github.io.git`
4. 開啟編輯器，建立檔案後 commit: `git add .`，push: `git push`，完成

## 新增子專案

### 1. 子資料夾方式

1. 直接在 `[你的帳號].github.io` 裡新增子專案目錄
2. push 上去後，就可從 `https://[你的帳號].github.io/[子專案]` 存取子專案網頁

這種方式的缺點是會造成主專案目錄過度龐大且混亂，建議使用獨立專案方式

### 2. 獨立專案方式

1. 登入 [Github](https://github.com/new) 新增專案
2. clone 專案
3. 建立 `gh-pages` branch: `git checkout -b gh-pages`
4. push，完成

### 其它

當同時存在子資料夾與獨立專案的同名專案時，會以獨立專案的分支內容為主
