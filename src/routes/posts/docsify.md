---
title: "docsify - 從 Markdown 即時轉譯成網頁樣板"
date: 2020-10-14T03:51:04.000Z
summary: "Docsify 是一套以 Vue 為基底撰寫，即時解析 markdown 檔案產生網頁頁面的靜態網站產生器，特徵是初始化完畢後，只需要 index.html 和 markdown 檔案即可運作，不需進行 build。"
---

[Docsify](https://docsify.js.org/) 是一套以 Vue 為基底撰寫，即時解析 markdown 檔案產生網頁頁面的靜態網站產生器，特徵是初始化完畢後，只需要 `index.html` 和 markdown 檔案即可運作，不需進行 build。

## 安裝

```bash
npm i docsify-cli -g

# 初始化
docsify init ./檔案放置資料夾

# 預覽
docsify serve docs
```

## 檔案結構

初始化後，此資料夾底下會有三個檔案

- `index.html`：主頁面（進入點），以及與設置相關的內容
- `README.md`：主頁面（進入點）內容
- `.nojekyll`：使 Github Pages 不忽略名稱以 `_` 開頭的檔案

### 路由

Docsify 以資料夾進行分層，並藉此決定路徑：

```
.
├── 檔案放置資料夾
│   ├── 2017
│   ├── 2018
│   ├── 2019
│   │   ├── YYYYMMDD_作業事項
│   │   │   ├── README.md    // 說明書
│   │   │   ├── _sidebar.md  // 側邊欄（資料樹狀大綱）
│   │   │   └── image.png    // 說明書內的使用圖片
│   │   ├── YYYYMMDD_作業事項
│   │   │   ...
│   │   └── README.md
│   ├── .nojekyll
│   ├── README.md
│   ├── _sidebar.md
│   └── index.html
├── node_modules
├── package.json
├── script
└── yarn.lock
```

並且可透過 `_sidebar.md` 加入側邊欄、 `_navbar.md` 加入下拉選單，這些指引功能檔案的內容需以清單格式撰寫：

```markdown
- [需求規格](/spec/ "需求規格")
  - [內容 A](/spec/contentA/ "內容A")
  - [內容 B](/spec/contentB/ "內容B")
- [時程安排](/schedule/ "時程安排")
- [開發者技術](/dev/ "開發者技術")
- [API 文件](/api/ "API 文件")
- [DB schema](/dbSchema/ "DB schema")
- [其他文件紀錄](/otherDocument/ "其他文件紀錄")
```

## Deploy

如前面說的，Docsify 只需要 `index.html` 和 markdown 檔案即可運作，deploy 亦只需要處理這兩者即可，詳細步驟可以參照官方文件 [Deploy](https://docsify.js.org/#/deploy)。

## 參考資料

- [Docsify - Quick start](https://docsify.js.org/#/quickstart)
