---
title: "使用 NodeCG 妝點直播介面"
date: 2019-11-13T08:48:54.000Z
summary:
tags: F2E
---

## 介紹

[NodeCG](https://nodecg.com/) 是為了直播所設計的介面框架，提供使用者能使用網頁撰寫動態與複雜的直播介面設計，透過操作快速修改介面內容。

範例：

- [SGDQ2018-Layouts](https://github.com/gamesdonequick/sgdq18-layouts)
- [RTA in Japan-Layouts](https://github.com/RTAinJapan/rtainjapan-layouts)

## 安裝

### 前置需求

- [Node.js](http://nodejs.org/)
- npm (已於 Node.js 0.6.3 版後內建)
- [git](https://git-scm.com/downloads)

### 建立網站

```bash
git clone https://github.com/nodecg/nodecg.git
cd nodecg
npm install --production
node index.js
```

可於 [`cfg/nodecg.json`](https://nodecg.com/tutorial-6_nodecg-configuration.html) 修改設定。

### 安裝 Bundle

- [awesome-nodecg](https://github.com/nodecg/awesome-nodecg/blob/master/README.md)

1. 使用 `nodecg-cli` 安裝

```bash
npm install --global nodecg-cli
nodecg install lange/lange-notify
```

2. 安裝來自 Bitbucket 的 Bundle

`nodecg install bitbucket:username/repo-name`

3. 安裝來自其它 git 提供者的 Bundle

`nodecg install https://gitlab.com/username/repo-name.git`

### 自製 Bundle

1. 安裝 `Yeoman` (網站樣板頁面工具) 和 `generator-nodecg` (快速產生 NodeCG 樣板檔案)

```bash
npm install --global yo generator-nodecg
cd bundles
mkdir my-first-bundle
cd my-first-bundle
yo nodecg
```

亦可指定產生特定類型的樣版頁面

```bash
yo nodecg:panel
yo nodecg:graphic
yo nodecg:extension
```

2. 開啟 `nodecg/bundles/bundle-sample/dashboard/panel.html` 修改 Panel 頁面
3. 開啟 `nodecg/bundles/bundle-sample/extension.js` 修改 JS
4. 開啟 `nodecg/bundles/bundle-sample/graphics/index.html` 修改 Layout 頁面
