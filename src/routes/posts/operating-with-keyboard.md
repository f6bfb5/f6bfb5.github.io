---
title: "盡可能使用鍵盤操作 Windows"
date: 2022-06-05T17:04:28.000Z
summary: ""
tags: Toolbox
---

## 推薦軟體

| 名稱                                                                         | 說明                                        |
| ---------------------------------------------------------------------------- | ------------------------------------------- |
| [Flow Launcher](https://www.flowlauncher.com/)                               | 快速執行程式與各種功能的 launcher           |
| [Everything](https://www.voidtools.com/downloads/)                           | 超級快速的檔案搜索工具                      |
| [Vimium](https://vimium.github.io/)                                          | 以類似 vim 編輯器的機制操作瀏覽器的插件     |
| [Surfingkeys](https://github.com/brookhong/Surfingkeys)                      | 類似 Vimium，但有相當高自訂空間的另一套插件 |
| [Ctrl2cap](https://docs.microsoft.com/en-us/sysinternals/downloads/ctrl2cap) | 將 Caps Lock 鍵的功能切換成 Ctrl 鍵         |

## Windows 系統

| 按鍵             | 功能                         |
| ---------------- | ---------------------------- |
| `win + e`        | 開啟檔案總管                 |
| `win + d`        | 顯示桌面                     |
| `win + x`        | 開啟各類系統程式             |
| `win + space`    | 切換輸入法                   |
| `win + ↑`        | 視窗最大化                   |
| `win + ←／→`     | 視窗移至左／右半邊           |
| `win + ←／→ + ↑` | 視窗移至左／右上角四分之一處 |
| `Tab`            | 下個錨點                     |
| `Shift + Tab`    | 上個錨點                     |
| `Alt + ↑`        | 往上一層                     |
| `Alt + ←／→`     | 往上／下一頁                 |
| `Alt + D`        | 跳到地址列                   |
| `Shift + F10`    | 開啟右鍵選單                 |

- [啟動 Windows 設定應用程式 - UWP applications](https://docs.microsoft.com/zh-tw/windows/uwp/launch-resume/launch-settings-app)

## Flow Launcher

WIP

## Vimium

- Vimium 是一套以類似 vim（vim-like）的機制操作瀏覽器的插件
- 使用 `hjkl` 左下上右移動，可以用食指定位鍵 `j` 是「向後（下）移動」來記憶
- 於前方加上數字可指定移動範圍，例如 `5j` 會往下移動 5 行

```
         ^
         k
   < h       l>
         j
         v
```

### 基礎操作

- 使用 vim-like 的陣痛期，最容易感到挫折的，就是不熟悉操作
  - 但即使只用下列第一或第二區塊功能，已能滿足大多瀏覽需求
  - 一蹴可及並不實際，可於有需求時再查詢如何進行操作，慢慢讓肌肉記憶
- 以下列表僅為個人體感常用操作，完整介紹請看 `?` 或官方網站
- `<C>` 是 Ctrl 鍵的簡稱
- 大寫鍵即 `Shift + 小寫鍵`

| 按鍵        | 功能                           | 備註                 |
| ----------- | ------------------------------ | -------------------- |
| `d`         | 向下捲動                       | Vim 中為 `<C-d>`     |
| `u`         | 向上捲動                       | Vim 中為 `<C-u>`     |
| `gg`        | 移到頁面頂端                   |                      |
| `G`         | 移到頁面底部                   |                      |
| **----**    |                                |                      |
| `f`         | 於當前頁籤開啟頁面元素連結     | 點擊按鍵也會用到     |
| `F`         | 於全新頁籤開啟頁面元素連結     |                      |
| `I`         | 於無痕模式開啟頁面元素連結     |                      |
| `W`         | 將當前頁籤獨立成為全新視窗     |                      |
| `yy`        | 複製當前頁籤連結               |                      |
| `yf`        | 複製頁面元素連結               |                      |
| `x`         | 關閉當前頁籤                   |                      |
| `X`         | 恢復關閉頁籤                   |                      |
| `J` 或 `gT` | 跳至上個頁籤                   |                      |
| `K` 或 `gt` | 跳至下個頁籤                   |                      |
| `g0`        | 跳至首個頁籤                   |                      |
| `g$`        | 跳至最後頁籤                   |                      |
| **----**    |                                |                      |
| `gi`        | 跳至頁面輸入框                 |                      |
| `H`         | 回上一頁                       |                      |
| `L`         | 往下一頁                       |                      |
| `<<`        | 頁籤左移                       |                      |
| `>>`        | 頁籤右移                       |                      |
| `gf`        | 跳至頁面下個 frame             |                      |
| `gF`        | 跳至頁面主要 frame             |                      |
| **----**    |                                |                      |
| `o`         | 搜尋紀錄、書籤，於當前頁籤開啟 |                      |
| `O`         | 搜尋紀錄、書籤，於全新頁籤開啟 |                      |
| `b`         | 搜尋書籤，於當前頁籤開啟       |                      |
| `B`         | 搜尋書籤，於全新頁籤開啟       |                      |
| `T`         | 顯示所有已開啟頁籤             |                      |
| `ge`        | 編輯目前網址                   |                      |
| `gE`        | 編輯目前網址，於全新頁籤開啟   |                      |
| **----**    |                                |                      |
| `p`         | 於當前頁籤貼上複製內容         | 搜尋關鍵字或前往網址 |
| `P`         | 於全新頁籤貼上複製內容         | 搜尋關鍵字或前往網址 |
| **----**    |                                |                      |
| `?`         | 查看操作一覽                   |                      |

### 切換模式

- 因應需求切換，Vim 分有各種操作模式
  - 例如預設模式、選擇模式（Visual Mode）、輸入模式（Insert Mode）…等等
- Vimium 也分有預設模式、選擇模式、輸入模式與搜尋模式
- 原本在 Vim 中，輸入模式是從「移動錨點」切換到「編輯文字」
  - 由於 Vimium 預設沒有錨點、使用 `gi` 跳至文字輸入框
  - 輸入模式的使用情境為另有獨立操作功能需求的時候
  - 例如使用鍵盤操作的網頁遊戲，或是練習／測試打字速度的網站

| 按鍵               | 功能         |
| ------------------ | ------------ |
| `v` 或 `V`         | 進入選擇模式 |
| `/`                | 進入搜尋模式 |
| `i`                | 進入輸入模式 |
| `<C+[>` 或 `<C+c>` | 回到預設模式 |

### 選擇模式

- 選擇模式就是操作滑鼠的反白功能（選擇範圍）
- 同樣使用 `hjkl` 執行基礎移動
- 可使用 `c` 於基準點（錨點）重設選擇範圍
- 可使用 `Shift + F10` 對錨點觸發右鍵功能，例如儲存圖片

| 按鍵               | 功能                 |
| ------------------ | -------------------- |
| `w`                | 錨點移至下個單字字首 |
| `e`                | 錨點移至下個單字字尾 |
| `b`                | 錨點移至上個單字字首 |
| `0`                | 錨點移至行首         |
| `$`                | 錨點移至行尾         |
| `y`                | 複製選擇範圍內容     |
| `<C+[>` 或 `<C+c>` | 回到預設模式         |

### 搜尋模式

- 跳至搜尋結果後，可再切換到選擇模式，用以快速定位錨點

| 按鍵 | 功能         |
| ---- | ------------ |
| n    | 尋找下個結果 |
| N    | 尋找上個結果 |

### 感想

Vimium 裝了應該有半年，上個月才在 VSCode 裡安裝 vim 插件，剛開始用的時候總需要打開說明文件或放[指令簡表](https://blog.vgod.tw/2009/12/08/vim-cheat-sheet-for-programmers/)在旁邊看，也因為沒有什麼協助提示，常常不曉得誤觸什麼操作、該怎麼解除或復原，陣痛期真的只能多看資料跟多使用來累積經驗，以及祈禱找到的資料整理得夠簡潔又好懂，這邊推薦 [1 小時就愛上 Vim 的教學](https://minerva.mamansoft.net/%F0%9F%93%971%E6%99%82%E9%96%93%E3%81%A7Vim%E3%81%AB%E6%83%9A%E3%82%8C%E3%82%8B%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB/%F0%9F%93%921%E6%99%82%E9%96%93%E3%81%A7Vim%E3%81%AB%E6%83%9A%E3%82%8C%E3%82%8B%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB)（日文資料）。

習慣之後最大的好處就是鍵盤與滑鼠之間移動花費的時間變短，減少了需求的操作時間，也開始能理解為何所謂的「小紅點鍵盤」會有熱狂人氣，以 Windows 來說，即使不是玩遊戲，還是會有需要用到滑鼠的操作，小紅點填補了這部份缺點，可惜就是價錢和供給量沒那麼漂亮了。

- [回到未來](https://tex.com.tw/pages/%E5%9B%9E%E5%88%B0%E6%9C%AA%E4%BE%86)

## 🏄Surfingkeys

| 按鍵 | 功能             |
| ---- | ---------------- |
| `E`  | 跳至上個頁籤     |
| `R`  | 跳至下個頁籤     |
| `t`  | 開啟連結欄       |
| `O`  | 開啟文字連結     |
| `ya` | 複製頁面連結網址 |
| `;e` | 開啟設定         |

Surfingkeys 提供了 vimium 所缺乏的大幅可自訂性，例如原本我是使用另一個插件將頁面連結轉換成 Markdown 格式，Surfingkeys 則可直接以自訂功能作到這件事；但一些預設操作較不那麼直覺，比較適合有一定相關熟悉度的人。

- [Surfingkeys/README_CN.md](https://github.com/brookhong/Surfingkeys/blob/master/README_CN.md)
- [Surfingkeys/API.md](https://github.com/brookhong/Surfingkeys/blob/master/docs/API.md)
- [Surfingkeys カスタマイズ](https://fewlight.net/20200225/)
- [surfingkeys](https://gist.github.com/sofcj1/1b775c99400bbada2d9f5e476bdfdb8c)

```javascript
api.Hints.characters = "asdfghjklvbnmrtyu";
api.Hints.characterUpper = false;
settings.smoothScroll = false;
settings.modeAfterYank = "Normal";
settings.focusFirstCandidate = false;
settings.defaultSearchEngine = "d";
// settings.stealFocusOnLoad = false;

// --- mapping ---
api.map("H", "S"); // back in history
api.unmap("S");
api.map("L", "D"); // forward in history
api.unmap("D");
api.map("J", "E"); // previous tab
api.unmap("E");
api.map("K", "R"); // next tab
api.unmap("R");
api.unmap("<Ctrl-c>");

api.map("<Ctrl-h>", "<<");
api.map("<Ctrl-l>", ">>");
api.map("F", "gf");
api.map("Q", ";di");

api.mapkey("o", "Open a URL in current tab", () => {
  api.Front.openOmnibar({ type: "URLs", extra: "getAllSites", tabbed: false });
});
api.mapkey("p", "Open URL in clipboard", () => {
  openClipboard();
});
api.mapkey("P", "Open clipboard URL in new tab", () => {
  openClipboard(true);
});
let openClipboard = (newTab = false) => {
  api.Clipboard.read((response) => {
    var markInfo = {
      scrollLeft: 0,
      scrollTop: 0,
    };
    if (newTab) {
      markInfo.tab = {
        tabbed: true,
        active: true,
      };
    } else {
      markInfo.tab = {
        tabbed: false,
        active: false,
      };
    }
    if (response.data.match(/^http/)) {
      markInfo.url = response.data;
    } else {
      markInfo.url =
        // 'https://www.google.com/search?q=' +
        "https://duckduckgo.com/?q=" + encodeURIComponent(response.data);
    }
    api.RUNTIME("openLink", markInfo);
  });
};
api.mapkey("yY", "Copy current page's link as markdown format", () => {
  const url = new URL(window.location.href);
  var title = window.document.title.replace(/(<|>)/g, "\\$1");
  api.Clipboard.write(`[${title}](${url.href})`);
});

// --- ESC hatch ---
api.map("<Ctrl-[>", "<Esc>");
api.map("<Ctrl-c>", "<Esc>");
api.imap("<Ctrl-[>", "<Esc>");
api.imap("<Ctrl-c>", "<Esc>");
api.cmap("<Ctrl-[>", "<Esc>");
api.cmap("<Ctrl-c>", "<Esc>");

// --- insert mode ---
api.iunmap(":");
api.iunmap("<Ctrl-f>");
api.iunmap("<Ctrl-u>");
api.iunmap("<Ctrl-i>");

api.addSearchAlias("t", "Twitter", "https://twitter.com/search?q=");
api.addSearchAlias(
  "y",
  "YouTube",
  "https://www.youtube.com/results?search_query="
);

// --- theme ---
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
```

### Todo

- Open detected links from text in new window
- Open a link in new incognito window
