---
title: "Blog with Hexo"
date: 1990-01-01T00:00:00.000Z
---

## 指令速見表

1. 新建記事 `hexo n`
2. 清除暫存 `hexo clean`
3. 產生推播 `hexo g -d`

---

## 0. 準備安裝

開始使用 hexo 建置部落格之前，需先安裝 `git` 和 `nodejs`

安裝建置用的相關套件： `npm install hexo-cli -g`

本文預設使用 GitHub 做為建置平台，Hexo 可放置於 GitHub Pages 的主分支上，或是子網域頁面（在 GitHub Pages 主頁面的專案之外另開一個專案）上

參考： [將 hexo 部署到 GitHub page](http://alincode.github.io/blog/2016/03/05/hexo-deploy/)

## 1. 放置網域

### a. GitHub Pages 主分支（repo/url: `AccountName.github.io`）

1. 以 `自己的 GitHub 帳號.github.io` 命名建立一個 Repo ，遵循網頁上的指令完成建立作業
2. 進行後續建置

參考：

- [使用 GitHub 免費製作個人網站](https://gitbook.tw/chapters/github/using-github-pages.html)
- [使用 GitHub 遠端儲存庫 - 入門篇](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/24.md)

### b. 子網域頁面（repo: `RepoName`, url: `AccountName.github.io/RepoName`）

1. 以 `子網域名稱` 命名建立一個 Repo ，遵循網頁上的指令完成建立作業
2. 建立 `gh-pages` 分支
3. 切回 `master` 主支進行後續建置

參考：

- [關於分支的基本觀念與使用方式](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/08.md)
- [開始使用分支](https://gitbook.tw/chapters/branch/using-branch.html)
- [Git 教學：如何 Push 上傳到 GitHub？](https://gitbook.tw/chapters/github/push-to-github.html)

## 2. 部落格建構

### a. 初始化

1. 將建立好的 Repo pull 至本地硬碟裡後，將命令列錨點移至該資料夾內
2. 確定分支為 `master` 之後，使用 `hexo init blog-name` 指令初始化存放部落格內容的資料夾
3. 將錨點移進該資料夾內，執行 `npm install` 與 `hexo init` 完成初始化

### b. 設定

Repo 母資料夾底下的 `_confiy.yml` 可以設定如標題、副標、說明等內容

```yml
title: 部落格標題
subtitle: 副標(可留空)
description: 部落格說明
author:
language: (預設設定為en)
timezone: (預設設定為執行電腦上的時區)

url: http://example.com
root: /blog/
permalink: :year/:month/:day/:title/
permalink_defaults:
```

## 3. 正式上線

### a. 撰寫文章

這時已經可以運行如文章新增與預覽的基本功能：

1. 建立記事：`hexo new post-name` = `hexo n`
   - （可選）清除暫存：`hexo clean`
2. 產生記事靜態頁面：`hexo generate` = `hexo g`
3. 在本地上執行伺服器進行預覽：`hexo server` = `hexo s`

### b. 推送

1. 安裝推送到 GitHub Pages 的套件：
   `npm install hexo-deplyer-git --save`

2. 於 `_config.yml` 設定 Deploy：

```yml
deploy:
  type: git
  repo: <repository url>
  branch: gh-pages // 只有建置在子網域頁面時才需要
```

3. 推送：`hexo deploy` = `hexo d`
   - 生成頁面後即推送：`hexo generate --deploy` = `hexo g -d`

參考： [Hexo - 佈署](https://hexo.io/zh-tw/docs/deployment)

### （可選）c. 線上編輯後自動更新

也可以利用 GitHub 所提供的 CI/CD（持續性整合與自動化部署）服務 GitHub Actions，自動化儲存與發表文章的處理

1. 於 GitHub 上建立一個新專案，push hexo 上去後，將此專案設為 Private
2. 設立 SSH Key 提供給 GitHub Actions 使用

```bash
ssh-keygen -f github-deploy-key
```

留空點擊兩次 Enter 後，會在 hexo 資料夾底下產生兩個新檔案 `github-deply-key`（私鑰）與 `github-deploy-key.pub`（公鑰）

3. 至原始碼專案的 Settings 的 Secrets 分頁裡，點選 Add a new secret，
   - 於 Name 輸入 `HEXO_DEPLOY_PRI`，Value 輸入私鑰 `github-deply-key` 裡的內容
4. 至靜態網頁專案的 Settings 的 Deploy keys 分頁裡，
   - 於 Title 輸入 `HEXO_DEPLOY_PUB`，Key 輸入公鑰 `github-deploy-key.pub` 裡的內容，勾選 Allow write access
5. 開啟 hexo 資料夾裡的 `_config.xml` 檔案，編輯 `deploy` 的部份改為 SSH 連線

```xml
deploy:
  type: git
  repo: git@github.com:[YOUR_GITHUB_ACCOUNT/YOUR_STATIC_WEB_REPO_NAME].git
  branch: master
```

6. 推送更新專案
7. 至原始碼專案頁面的 Actions 分頁，點選右上角的 `Set up a workflow yourself`
   - 設定自動部署時要使用的環境與執行的指令，以及 Hexo 所需要的主題和插件安裝
   - 把 `main.yml` 推上 `workflows/` 之後，再次回到 Actions 確認 workflows 是否已更新

`main.yml` 參考：

```yml
name: Deploy Blog

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    env:
      HEXO_DEPLOY_PRI: ${{secrets.HEXO_DEPLOY_PRI}}
      USER_NAME: USER_NAME
      USER_EMAIL: USER_EMAIL

    strategy:
      matrix:
        node-version: [10.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Setup Hexo
        run: |
          mkdir -p ~/.ssh/
          echo "$HEXO_DEPLOY_PRI" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name $USER_NAME
          git config --global user.email $USER_EMAIL
          npm i -g hexo-cli
          npm i hexo-generator-tag hexo-generator-feed hexo-renderer-ejs hexo-renderer-less hexo-renderer-marked hexo-pagination hexo-all-minifier hexo-autoprefixer hexo-front-matter
          npm i
      - name: Deploy
        run: |
          hexo g -d
```

8. 本地端亦需同步推上建立 `main.yml` 後的 commit

```bash
git remote update
git pull
```

9. 若有修改 blog 的佈景或設定時也需要同部更新原始碼

```bash
git add --all
git commit -m "update"
git push origin master
```

10. 至原始碼專案的 `source/_posts` 資料夾裡，點選右上角的 `Create new file`，
    - 輸入完文章內容後，點擊 `Commit new file` 便可線上發布文章了

#### 參考

- [Hexo + GitHub Actions 打造自動部署](https://blog.weitw.net/posts/350dd70b/index.html)
- [通过 GitHub Actions 自动部署 Hexo](https://gythialy.github.io/deploy-hexo-to-github-pages-via-github-actions/)

## 4. 套件

### a. 主題

- Apollo ([hexo-theme-apollo](https://github.com/pinggod/hexo-theme-apollo))
- Element ([hexo-theme-element](https://github.com/artchen/hexo-theme-element))
- Modernist ([hexo-modernist](https://github.com/heroicyang/hexo-theme-modernist))
- Light ([hexo-theme-light](https://github.com/hexojs/hexo-theme-light))

### b. RSS

`npm install hexo-generator-feed --save`

### c. Sitemap

`npm install hexo-generator-seo-friendly-sitemap --save`

`_config.yml`設定：

```yml
sitemap:
  path: sitemap.xml
  template: ./sitemap_template.xml
```

### d. 壓縮

- [Hexo-filter-cleanup](https://github.com/mamboer/hexo-filter-cleanup)
  - `npm install hexo-filter-cleanup --save`

`Hexo-filter-cleanup`也整合了以下三個插件：

1. [hexo-html-minifier](https://github.com/hexojs/hexo-html-minifier)
   - `npm install hexo-html-minifier --save`
2. [hexo-clean-css](https://github.com/hexojs/hexo-clean-css)
   - `npm install hexo-clean-css --save`
3. [hexo-uglify](https://github.com/hexojs/hexo-uglify)
   - `npm install hexo-uglify --save`

- [hexo-filter-optimize](https://github.com/theme-next/hexo-filter-optimize)
  - `npm install hexo-filter-optimize --save`

`_config.yml`設定：

```yml
filter_optimize:
  enable: true
  # remove static resource query string
  #   - like `?v=1.0.0`
  remove_query_string: true
  # remove the surrounding comments in each of the bundled files
  remove_comments: false
  css:
    enable: true
    # bundle loaded css file into the one
    bundle: true
    # use a script block to load css elements dynamically
    delivery: true
    # make specific css content inline into the html page
    #   - only support the full path
    #   - default is ['css/main.css']
    inlines:
    excludes:
  js:
    # bundle loaded js file into the one
    bundle: true
    excludes:
  # set the priority of this plugin,
  # lower means it will be executed first, default is 10
  priority: 12

  # ---

html_minifier:
  exclude:
  removeComments: true
  removeCommentsFromCDATA: false
  removeCDATASectionsFromCDATA: false
  collapseWhitespace: true
  conservativeCollapse: true
  preserveLineBreaks: true
  collapseBooleanAttributes: false
  removeAttributeQuotes: false
  removeRedundantAttributes: false
  preventAttributesEscaping: false
  useShortDoctype: false
  removeEmptyAttributes: false
  removeScriptTypeAttributes: false
  removeStyleLinkTypeAttributes: false
  removeOptionalTags: false
  removeIgnored: false
  removeEmptyElements: false
  lint: false
  keepClosingSlash: false
  caseSensitive: false
  minifyJS: true
  minifyCSS: true
  minifyURLs: false
```

## 5. 文章編寫 （Markdown 記法）

- [HackMD 的 Markdown 輸入格式對照表](https://hackmd.io/5I6nEE0aQTGYT1PzTyTBAw)
- [Markdown テキストでシーケンス図とフローチャートを描く](https://qiita.com/ka215/items/a709665cb34c505ccf1f)

```markdown
# 主標題

## 副標題

> 引言

- 清單
- 清單

1. 有序清單
2. 有序清單

**粗體**
_斜線_
~刪除線~

連結
[an example](http://example.com/ "Title")
This is [an example][id] reference-style link.
[id]: http://example.com/ "Optional Title Here"

圖片
![エビフライトライアングル](http://i.imgur.com/Jjwsc.jpg "サンプル")

待辦事項

- [ ] Eat
- [x] Code
  - [x] HTML
  - [x] CSS
  - [x] JavaScript
- [ ] Sleep

閱讀更多

＜!-- more --＞

嵌入 Youtube 影片
{%youtube [Youtube影片ID] %}

{%raw%}不需解析的 markdown 原文{%endraw%}
```

## 6. 補充連結

- [Hexo で始めるお手軽な静的ブログ　-インストールと配備-](https://qiita.com/in_silico_/items/7e6ed639c24142bdbd04)
- [Hexo で始めるお手軽な静的ブログ　-画像投稿とプラグインの追加-](https://qiita.com/in_silico_/items/31c2c0bc1cf061c86250)
- [Hexo で作ったブログを GitHub Pages で公開](https://pepese.github.io/blog/hexo-github-pages/)
- [Hexo ブログで使ってるプラグインを公開します](https://photo-tea.com/p/usecase-of-hexo-plugin/)
