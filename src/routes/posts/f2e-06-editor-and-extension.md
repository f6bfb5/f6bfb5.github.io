---
title: "前端筆記 (6) 編輯器與相關資源"
date: 2019-07-18T07:06:00.000Z
summary:
tags: F2E
---

<style>
table {
  width: 100%;
}
table td:nth-child(1) {
  width: 25%;
}
table td:nth-child(3) {
  width: 20%;
}
</style>

## 編輯器

| 名稱                                     | 說明 |
| ---------------------------------------- | ---- |
| [VSCode](https://code.visualstudio.com/) |      |
| [Vim](https://www.vim.org/)              |      |
| [Atom](https://atom.io/)                 |      |
| [Brackets](http://brackets.io/)          |      |

## 線上編輯器

| 名稱                                   | 說明                          |
| -------------------------------------- | ----------------------------- |
| [CodeSandbox](https://codesandbox.io/) |                               |
| [Coder](https://coder.com/projects)    | 可在瀏覽器上使用的雲端 VSCode |
| [StackBlitz](https://stackblitz.com/)  |                               |
| [Codepen](https://codepen.io/)         |                               |
| [JS Bin](http://jsbin.com/)            |                               |
| [Plunker](https://plnkr.co/)           |                               |
| [CSS Deck](http://cssdeck.com/)        |                               |
| [Dabblet](http://dabblet.com/)         |                               |
| [Liveweave](http://liveweave.com/)     |                               |
| [JSFiddle](https://jsfiddle.net/)      |                               |

## VSCode

- [VS Code 23 個常用快捷鍵速查表](https://hackmd.io/@sean666/HJ3x8K6Z8)
- [Visual Studio Code 快速鍵一覽表](https://poychang.github.io/vscode-shortcuts/)
- [過去の自分に教えなければならない VSCode のショートカット - Qiita](https://qiita.com/rana_kualu/items/ea78200036fc80dce0a9)

| 按鍵             | 功能                                          |
| ---------------- | --------------------------------------------- |
| `Ctrl+P`         | 開啟檔案<br>加上 `:行數` 會再自動跳至指定行數 |
| `Ctrl+Shift+E`   | 跳至左側檔案管理處                            |
| `Ctrl+B`         | 隱藏側邊欄                                    |
| `Ctrl+G`         | 跳至指定行數                                  |
| `Ctrl+Shift+L`   | 反白所有指定文字                              |
| `Ctrl+Shift+H`   | 跳至搜尋欄                                    |
| `Ctrl+Q`         | 切換終端                                      |
| `Ctrl+L`         | 反白當前行內容                                |
| `Alt+↑／↓`       | 移動當前行內容                                |
| `Shift+Alt+↑／↓` | 快速複製當前行內容                            |
| `Ctrl+Shift+P`   | Master Key                                    |

## VSCode 插件

- [VSCode のオススメ拡張機能 24 選 (と Tips をいくつか)](https://qiita.com/sensuikan1973/items/74cf5383c02dbcd82234#1-vscode-icons)
- [JavaScript 開発者のための優秀な VSCode ツール 26 選](https://qiita.com/rana_kualu/items/4a4ce6ea7f489dc19f63)
- [これがなくては生きていけない VS Code エクステンション 10 選 - Qiita](https://qiita.com/rana_kualu/items/9f6919311f1407a71c5f)
- [The Ultimate VSCode Setup for Front End/JS/React | by Elad Ossadon | Productivity Freak | Medium](https://medium.com/productivity-freak/the-ultimate-vscode-setup-for-js-react-6a4f7bd51a2)

### 外觀樣式

| 名稱                                                                                                          | 說明                          |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [Bracket Pair Colozier](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) | 括號上色                      |
| [Indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)                  | 色彩區隔不同深度的縮排        |
| [Indenticator](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator)                      | 重點標示目前縮排線            |
| [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer)                  | 色彩化 VSCode 的 Console 輸出 |
| [VSCode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)              | 圖示主題                      |
| [MATERIAL ICON THEME](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)          | Material 風格圖示主題         |
| [MATERIAL THEME](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)          | Material 風格主題             |
| [PEACOCK](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)                        | VSCode 多視窗獨立色彩         |
| [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)                    |                               |

### 內容生成

| 名稱                                                                                                                            | 說明                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)                            | 自動修改前後對應標籤                            |
| [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)                                      | `Alt + W`                                       |
| [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)                              | 自動關閉標籤                                    |
| [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)                                    | `F1` -> 輸入 `File:` 處理複製、移動、新增等功能 |
| [PATH INTELLISENSE](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)                     | 自動補完輸入檔案路徑                            |
| [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)                             | 自動補完檔案路徑                                |
| [INTELLISENSE FOR CSS, SCSS](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)               |                                                 |
| [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) | 自動從已輸入的 class 內補完命名                 |
| [NPM INTELLISENSE](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)                       |                                                 |
| [JAVASCRIPT (ES6) CODE SNIPPETS](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)                |                                                 |
| [advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)                           | `cmd+alt+n` (Mac), `ctrl+alt+n` (Win, Linux)    |
| Code Spell Checker                                                                                                              | 檢查拼字錯誤                                    |
| Encode Decode                                                                                                                   | 轉換字串編碼                                    |
| Gremlins Tracker                                                                                                                | 檢查難以辨識的問題字元                          |
| Tabnine Autocomplet AI                                                                                                          | 預測自動完成內容                                |
| Toggle Quotes                                                                                                                   | 切換單雙引號                                    |
| I18n Ally                                                                                                                       | 即時翻譯選取字串                                |

#### USER SNIPPET

- 透過快捷鍵快速產生內容
- 完全由使用者自訂
- `File（檔案）` -> `Preferences（喜好設定）` -> `User Snippets（使用者程式碼片段）`
- [snippet generator](https://snippet-generator.app/)
- [Using Current Date and Time In VS Code Snippets - DEV](https://dev.to/chaseadamsio/using-current-date-and-time-in-vs-code-snippets-4gog)

```json
{
  "Print to console": {
    "scope": "javascript,typescript",
    "prefix": "log",
    "body": ["console.log('$1')", "$2"],
    "description": "Log output to console"
  }
}
```

- `scope`：指定此 snippets 的使用語言
- `prefix`：指定此 snippets 的快捷關鍵字
- `description`：顯示此 snippets 時右邊的內容說明
- `body`：此 snippets 的實際輸入內容
- `$1`、`$2`：可以在按下 Tab 鍵後讓錨點跳至此處

### 輔助工具

| 名稱                                                                                                                                         | 說明                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Debugger for Chrome                                                                                                                          | VSCode 版的 Debugger，可以直接在編輯器上下斷點或監控執行狀態         |
| [CDNJS](https://marketplace.visualstudio.com/items?itemName=JakeWilson.vscode-cdnjs)                                                         | `F1` -> 輸入 `cdnjs`                                                 |
| [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)                                                     | 在本地建立可即時反應檔案更新的預覽伺服器                             |
| [LIVE SASS COMPILER](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)                                               |                                                                      |
| [LIVE SHARE EXTENSION PACK](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)                             | 同步分享 Coding                                                      |
| [Setting Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)                                                  | Upload Key : `Shift + Alt + U` <br> Download Key : `Shift + Alt + D` |
| EditorConfig                                                                                                                                 | 統一 IDE 細項設定                                                    |
| Polacode-2020                                                                                                                                | 快速產生程式碼選取區塊截圖                                           |
| Peacock                                                                                                                                      | 指定不同專案視窗色彩                                                 |
| [NODE EXEC](https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node)                                                    |                                                                      |
| [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)                                                     | `Ctrl/Cmd + Shift + P` -> type `Quokka`                              |
| [Wallaby.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)                                                   | `Ctrl/Cmd + Shift + P` -> type `Wallaby` OR `Ctrl/Cmd + Shift + =`   |
| [AUTO-OPEN MARKDOWN PREVIEW](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview)                      |                                                                      |
| [MARKDOWN PREVIEW GITHUB STYLING](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles)                |                                                                      |
| [VETUR](https://marketplace.visualstudio.com/items?itemName=octref.vetur) / 各種語言框架輔助套件                                             |                                                                      |
| [PROJECT MANAGER](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)                                           |                                                                      |
| [BLUEPRINT - NEW FILES AND FOLDERS OF FILES FROM TEMPLATES](https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint)        | 建立泛用樣板檔案                                                     |
| [Search Docsets](https://marketplace.visualstudio.com/items?itemName=silverlakesoftware.searchdocsets-vscode)                                | `Shift + F1`                                                         |
| [Vue VS Code Extension Pack - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack) |                                                                      |
| [VueDX - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features)                          |                                                                      |

#### Live Server

- 也有提供自訂進入點、PORT、HTTPS 功能、預設以無痕模式開啟等等
- HTTPS 需搭配 [mkcert](https://github.com/FiloSottile/mkcert) 產生本地 SSL 檔案、修改系統 hosts 檔案模擬自訂網域
- `settings.json`：

```json
{
  "liveServer.settings.CustomBrowser": "chrome:PrivateMode",
  "liveServer.settings.port": 443,

  "liveServer.settings.https": {
    "enable": true,
    "cert": "", // 需使用完整路徑
    "key": "", // 需使用完整路徑
    "passphrase": ""
  },

  "liveServer.settings.host": "",
  "liveServer.settings.proxy": {
    "enable": true,
    "baseUri": "/api/",
    "proxyUri": "http://localhost:3000"
  },

  "liveServer.settings.root": "/web",
  "liveServer.settings.mount": [["/enterURL", "./mountFolder"]]
}
```

#### Blueprint

- 模板資料夾預設存在 `blueprint-templates` 資料夾底下
- 可以依據官方說明文裡面，在 `settings.json` 裡面修改參照模板資料夾的路徑
- `"blueprint.templatesPath": ["./.vscode/blueprint-templates"`
- 模板分類概念是最外面的 Folder 是替模板命名用，裡面的子層資料夾才會收納模板檔案
- 可以使用 `__name__` 從輸入自訂資料夾或檔案的名稱，檔案內的自訂名稱則要改為雙括寫法 `{{name}}`
- 其它常用的命名法有 `__pascalCase_name__` 和 `__lowerDotCase_name__`
- 可以使用 `$` 開頭自行命名額外變數

### 規範限制

| 名稱                                                                                                            | 說明                                 |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [GITLENS](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                  |                                      |
| [GIT HISTORY](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)                      |                                      |
| [CODE SPELL CHECKER](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) |                                      |
| [Prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)         | `CMD + Shift + P` -> Format Document |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                            |                                      |
| [DOCUMENT THIS](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)                            | `Ctrl+Alt+D` and again `Ctrl+Alt+D`  |
| [Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)               | `F1` -> `Add doc comments`           |
| [CODEMETRICS](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)             | 顯示函式的計算複雜度                 |

### 彩蛋番外

| 名稱                                                                                              | 說明                                                                  |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [GREMLINS TRACKER](https://marketplace.visualstudio.com/items?itemName=nhoizey.gremlins)          |                                                                       |
| CSS PEEK / 各種檔案關聯輔助套件                                                                   |                                                                       |
| [BETTER COMMENTS](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) | 依註解功能不同標上相應的色彩，如 `#!` 或是 `#?`、`#*`                 |
| [TODO TREE](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)            |                                                                       |
| [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) |                                                                       |
| [Todo+](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-todo-plus)     |                                                                       |
| [POLACODE](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)                      | 截取程式碼片段儲存為圖片                                              |
| [LEETCODE](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode)         | 在 VSCode 上解 LeetCode                                               |
| [Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug)             |                                                                       |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)      | To run code: `Ctrl+Alt+N` <br> To stop the running code: `Ctrl+Alt+M` |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)         | 顯示引用檔案大小                                                      |
| [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)                    |                                                                       |
| [PlantUML in a nutshell](http://plantuml.com/en/)                                                 | 支援快速繪製各種 UML 圖形                                             |
| [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff)           | 比較不同版本內容差異                                                  |
| [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex)             | `Ctrl+Alt+M`                                                          |
| [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)              | `Ctrl+Alt+R`(`Cmd+Alt+R` for macOS)                                   |

#### 字型

| 名稱                                                                       | 說明                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------- |
| [Myrica](https://github.com/tomokuni/Myrica/blob/master/product/Myrica.md) | 統合 Inconsolata 和源真黑體與 Mgen+ 的英日等寬字型 |
| [Ricty](https://rictyfonts.github.io/)                                     | 統合 Inconsolata 和 Migu 1M 的英日等寬字型         |
| [FIRA CODE](https://github.com/tonsky/FiraCode)                            | 將如 `===` 或 `<$` 的記述轉成單一字符的程式用字型  |
| [SOURCE CODE PRO](https://github.com/adobe-fonts/source-code-pro)          | 由 Adobe 推出的程式用等寬字型                      |

## vim

### 基礎操作

`vim 檔案名稱`：使用 vim 開啟檔案

開啟檔案之後，Vim 預設會為「觀看模式」，只能瀏覽文件內容，需要按下 `i` 鍵後，左下角會出現 `--INSERT--`，代表進入「編輯模式」，才能修改文件，詳細的模式功能可參照下表。

| 按鍵                | 功能                                         |
| ------------------- | -------------------------------------------- |
| `v`                 | 觀看模式                                     |
| `i`                 | 於錨點處進入編輯模式                         |
| `I`                 | 於錨點所在行的第一個非空白字元處進入編輯模式 |
| `a`                 | 於錨點行最後處進入編輯模式                   |
| `A`                 | 於錨點所在行的最後一個字元處進入編輯模式     |
| `o`                 | 於錨點處下方新增一行後進入編輯模式           |
| `O`                 | 於錨點處上方新增一行後進入編輯模式           |
| `cc`                | 刪除錨點所在行內容後進入編輯模式             |
| `r`                 | 進入僅更換一個字元的編輯模式                 |
| `ESC`／`Ctrl` + `[` | 取消指令或退出編輯模式                       |
| `:`                 | 命令行模式                                   |

修改完文件內容後，需要先按下 `ESC` 鍵回到觀看模式，再按下 `:` 鍵，左下角有同樣出現冒號時，就成功進入 Vim 的「命令行模式」，再輸入 `w`（顯示為 `:w`）後按下 `Enter` 便可存檔，同樣操作輸入 `:q` 可以離開編輯器，更詳細的命令行模式功能可以參照下表。

### 檔案功能

| 按鍵             | 功能                                       |
| ---------------- | ------------------------------------------ |
| `:w`             | 存檔                                       |
| `:!w`            | 強制存檔                                   |
| `:w [檔案名稱]`  | 另存新檔                                   |
| `:q`             | 退出 vi                                    |
| `:!q`            | 不存檔退出                                 |
| `:wq`            | 存檔並退出 vi                              |
| `:x`             | 存檔並退出 vi                              |
| `:w !sudo tee %` | 以 root 的權限存檔                         |
| `:e [檔案名稱]`  | 編輯其它檔案                               |
| `:e!`            | 還原至檔案編輯前的狀態                     |
| `:r [檔案名稱]`  | 讀取另一個檔案的內容，並添加到錨點行的後面 |
| `:n`             | 切換到下一個開啟的檔案                     |
| `:N`             | 切換到上一個開啟的檔案                     |
| `:set nu`        | 顯示行號                                   |
| `:set nonu`      | 取消行號顯示                               |
| `:files`         | 列出所有開啟的檔案                         |
| `:Ex`            | 開啟檔案瀏覽器                             |
| `:Ex [路徑]`     | 於指定路徑開啟檔案瀏覽器                   |
| `:Hex`           | 分割水平視窗後，再開啟檔案瀏覽器           |
| `:Vex`           | 分割垂直視窗後，再開啟檔案瀏覽器           |
| `:Tex`           | 新增頁籤後，再開啟檔案瀏覽器               |
| `:Hex [路徑]`    | 分割水平視窗後，再於指定路徑開啟檔案瀏覽器 |
| `:Vex [路徑]`    | 分割垂直視窗後，再於指定路徑開啟檔案瀏覽器 |
| `:Tex [路徑]`    | 新增頁籤後，再於指定路徑開啟檔案瀏覽器     |

### 視窗分割

| 按鍵                 | 功能                                           |
| -------------------- | ---------------------------------------------- |
| `:new`               | 新增水平分割視窗                               |
| `:new 檔案名稱`      | 新增水平分割視窗，並在新增的視窗載入檔案       |
| `:vnew`              | 新增垂直分割視窗                               |
| `:vnew 檔案名稱`     | 新增垂直分割視窗，並在新增的視窗載入檔案       |
| `:sp`                | 新增水平分割視窗，並在新增的視窗載入目前的檔案 |
| `:sp 檔案名稱`       | 新增水平分割視窗，並在新增的視窗載入檔案       |
| `:vsp`               | 新增垂直分割視窗，並在新增的視窗載入目前的檔案 |
| `:vsp 檔案名稱`      | 新增垂直分割視窗，並在新增的視窗載入檔案       |
| `Ctrl + W -> 方向鍵` | 切換視窗                                       |
| `:only`              | 僅保留目前的視窗                               |

### 頁籤

| 按鍵             | 功能                                |
| ---------------- | ----------------------------------- |
| `:tabe`          | 新增頁籤                            |
| `:tabe 檔案名稱` | 新增頁籤，並在新頁籤載入指定檔案    |
| `:tabc`          | 關閉目前頁籤，等同 `:q`             |
| `:tabo`          | 關閉所有頁籤                        |
| `:tabn`          | 移至下一個頁籤                      |
| `:tabp`          | 移至上一個頁籤                      |
| `gt`             | 移至下一個頁籤                      |
| `gT`             | 移至上一個頁籤                      |
| `:tabfirst`      | 移至第一個頁籤                      |
| `:tablast`       | 移至最後一個頁籤                    |
| `:tabm 頁籤編號` | 移至特定編號的頁籤（編號從 0 開始） |
| `:tabs`          | 列出所有頁籤                        |

Vim 也可以使用 `h`、`j`、`k`、`l` 四個鍵替代左、下、上、右鍵，在前方先輸入數字（例：`11h`）可以做出指定次數的移動，詳細的錨點移動相關操作可以參照下表。

### 移動錨點

| 按鍵             | 功能                                   |
| ---------------- | -------------------------------------- |
| `h`              | 左                                     |
| `j`              | 下                                     |
| `k`              | 上                                     |
| `l`              | 右                                     |
| `gg`             | 移到第一行                             |
| `G`              | 移到最後一行                           |
| `[數字] + G`     | 移動到第 `[數字]` 行                   |
| `^`／`0`         | 移動到該行最前面                       |
| `$`              | 移動到該行最後面                       |
| `[數字] + Space` | 向右移動 `[數字]` 個字元               |
| `[數字] + Enter` | 向下移動 `[數字]` 行                   |
| `ctrl+f`         | 移動至次頁                             |
| `ctrl+b`         | 移動至前頁                             |
| `H`              | 移動至畫面最上端                       |
| `M`              | 移動至畫面中央處                       |
| `L`              | 移動至畫面最下方                       |
| `b`              | 移至上個字串首個字元                   |
| `B`              | 移至上個字串首個字元（包含符號）       |
| `w`              | 移至下個字串首個字元                   |
| `W`              | 移至下個字串首個字元（包含符號）       |
| `e`              | 移至下個字串最後一個字元               |
| `ea`             | 移至下個字串最後一個字元並進入編輯模式 |

### 搜尋與取代

| 按鍵                                            | 功能                                                                              |
| ----------------------------------------------- | --------------------------------------------------------------------------------- |
| `/[字串]`                                       | 向下搜尋 `字串`                                                                   |
| `/\c[字串]`                                     | 向下搜尋 `字串`，不分大小寫                                                       |
| `*`                                             | 將錨點移到 `字串` 上，直接按 `*` 也可以做向下搜尋                                 |
| `?[字串]`                                       | 向上搜尋 `字串`                                                                   |
| `?\c[字串]`                                     | 向上搜尋 `字串`，不分大小寫                                                       |
| `:set ic`                                       | 搜尋時不分大小寫                                                                  |
| `:set noic`                                     | 搜尋時分辨大小寫                                                                  |
| `n`                                             | 繼續下一個搜尋結果                                                                |
| `N`                                             | 繼續上一個搜尋結果                                                                |
| `:[起始行],[終止行]s/[搜尋字串]/[取代字串]/gic` | 取代第 `n` 行到第 `n` 行中的 `字串`<br> (`g`: 整行全部 `i`: 不分大小寫 `c`: 詢問) |
| `:1,$s/[搜尋字串]/[取代字串]/gic`               | 取代全部字串<br> (`g`: 整行全部 `i`: 不分大小寫 `c`: 詢問)                        |
| `:noh`                                          | 結束搜尋                                                                          |

### 標記與複製

| 按鍵            | 功能                                                 |
| --------------- | ---------------------------------------------------- |
| `v`             | 開始字串標記                                         |
| `v -> Ctrl + V` | 開始區塊標記                                         |
| `V`             | 開始行標記                                           |
| `d`             | 刪除標記的內容                                       |
| `y`             | 複製標記的內容                                       |
| `yy`            | 複製錨點行                                           |
| `yyp`           | 複製貼上                                             |
| `yG`            | 複製錨點行到最後一行                                 |
| `y1G`           | 複製錨點行到第一行                                   |
| `y$`            | 複製錨點處至最後一個字元為止的內容                   |
| `y0`            | 複製錨點處到第一個字元為止的內容                     |
| `p`             | 在下一行貼上複製或刪除的內容                         |
| `P`             | 在上一行貼上複製或刪除的內容                         |
| `Ctrl + R -> 0` | 在下一行貼上複製或刪除的內容，適用於編輯模式及指令行 |

### 刪除

| 按鍵          | 功能                           |
| ------------- | ------------------------------ |
| `dd`          | 刪除錨點行                     |
| `[數字] + dd` | 刪除 `[數字]` 行               |
| `ddp`         | 剪下貼上                       |
| `dG`          | 刪除錨點行起到最後一行的內容   |
| `d1G`         | 刪除錨點行起到第一行的內容     |
| `d$`          | 刪除錨點處到最後一個字元的內容 |
| `d0`          | 刪除錨點處到第一個字元的內容   |

### 其它指令

| 按鍵       | 功能                                                        |
| ---------- | ----------------------------------------------------------- |
| `J`        | 將錨點行與下一行合併                                        |
| `u`        | 還原指令                                                    |
| `Ctrl + R` | 重做指令                                                    |
| `Ctrl + N` | 自動補齊曾輸入過的單字                                      |
| `.`        | 重覆上一個指令                                              |
| `! 命令`   | 執行 linux 指令，並顯示執行結果                             |
| `TOhtml`   | 將目前編輯的檔案轉換成 HTML 原始碼 (會新增一個水平分割視窗) |

### 檔案瀏覽器操作

- 需先以 `:Ex` 或關聯指令進入檔案瀏覽器

| 按鍵 | 功能               |
| ---- | ------------------ |
| `-`  | 移動到上層目錄     |
| `d`  | 建立目錄           |
| `D`  | 刪除目錄           |
| `R`  | 重新命名           |
| `s`  | 切換排序方式       |
| `r`  | 切換升冪/降冪排序  |
| `i`  | 切換檔案的排列方式 |
| `/`  | 搜尋字串           |
| `x`  | 執行檔案           |
| `o`  | 新增水平視窗       |
| `v`  | 新增垂直視窗       |

### 參考資料

- [vi 與 vim 的指令整理](http://www.vixual.net/blog/archives/234)
- [vim 程式編輯器](http://linux.vbird.org/linux_basic/0310vi.php)
- [アニメーションで学ぶ Vim 入門 ～精選 10 機能～](https://qiita.com/KoyanagiHitoshi/items/82ef910432552d0a4553)
- [ｖｉエディタの使い方](https://prev.net-newbie.com/linux/commands/vi.html)
- [ぼくの Vim さばきを支える設定とその導入手順を紹介する](https://qiita.com/jiroshin/items/ee86ea426a51fa24b319)
- [Vim 幼稚園から Vim 小学校へ - Qiita](https://qiita.com/hachi8833/items/7beeee825c11f7437f54)
- [脱初心者を目指すなら知っておきたい便利な Vim コマンド 25 選 (Vimmer レベル診断付き) - Qiita](https://qiita.com/jnchito/items/57ffda5712636a9a1e62)
- [vim を使うとき十字キーで移動して、vimmer に殺されるその前に](https://qiita.com/fasahina/items/2767891134028648f288)
- [なぜ私は Vim を使うことになったのか〜開発用エディターとしての Vim の有用性に関するご報告〜](https://qiita.com/hodanov/items/399590f61db5a56077d7)
- [Vim のターミナルの真の力お見せしますよ](https://qiita.com/gorilla0513/items/4d1c610f1283bbe46f81)

## Vimium

[Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) 是一套可以在瀏覽器上以類 vim 方式瀏覽網頁的 chrome 套件。

### 基礎操作

| 按鍵 | 功能                 |
| ---- | -------------------- |
| j    | 向下移動             |
| k    | 向上移動             |
| h    | 向左移動             |
| l    | 向右移動             |
| ---- | -------------------- |
| gg   | 頁面頂部             |
| G    | 頁面底部             |
| ---- | -------------------- |
| d    | 向下捲動（PageDown） |
| u    | 向上捲動（PageUp）   |

### 頁面互動

| 按鍵 | 功能                                     |
| ---- | ---------------------------------------- |
| f    | 點擊頁面元素，於當前頁籤開啟             |
| F    | 點擊頁面元素，於全新頁籤開啟             |
| r    | 重新整理                                 |
| t    | 開新頁籤                                 |
| ---- | ---------------------------------------- |
| yt   | 複製當前頁籤，於新頁籤中開啟             |
| 1t   | 開啟一個頁籤（可依數字開新指定數量頁籤） |
| ---- | ---------------------------------------- |
| T    | 顯示所有已開啟頁籤                       |
| gs   | 顯示原始碼                               |
| ---- | ---------------------------------------- |
| yy   | 複製當前頁籤連結                         |
| yf   | 複製頁面元素連結                         |

### 頁面導覽

H 回上一頁
L 到下一頁

J, gT 切換到左邊頁籤
K, gt 切換到右邊頁籤

g0 切換到第一個頁籤（可依數字跳到指定頁籤）
g$ 切換到最後一個頁籤

^ 切換到上個使用的頁籤

x 關閉當前頁籤
X 恢復上個關閉的頁籤

W 獨立當前頁籤至新視窗

i 進入插入模式

### 搜尋

p 當前頁籤貼上文字搜尋
P 開新頁籤貼上文字搜尋
o 搜尋紀錄、書籤，於當前頁籤開啟
O 搜尋紀錄、書籤，於全新頁籤開啟
b 只搜尋書籤，於當前頁籤開啟
B 只搜尋書籤，於全新頁籤開啟

/ 進入搜尋模式
n 尋找下一個結果
N 尋找上一個結果

### 錨點

ma 設置 local 錨點
mA 設置 global 錨點
`a 跳至 local 錨點 `A 跳至 global 錨點
`` 跳至移動前的位置

gi focus 至頁面第一個輸入元素
gu 移動至網域根目錄
ge 編輯目前網址
gE 編輯目前網址，並於新頁籤開啟
zH 向左捲動
zL 向右捲動

v 進入預覽模式
V 進入預覽行模式

### 於預覽模式中

j 向下一行
k 向上一行
h 向左一個字元（可於前方加上數字移動指定範圍）
l 向右一個字元（可於前方加上數字移動指定範圍）
w 移至下一個標點符號
e 移至上一個標點符號
b 取消選擇字員
