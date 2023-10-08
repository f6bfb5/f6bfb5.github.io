---
title: "關於挑選協作筆記工具軟體"
date: 2023-07-24T20:13:27.000Z
summary: "大概嘗試過一輪後，我認為至今仍還沒有一個「All-in-one」的協作筆記／集合內容萬能解，雖然不同工具在功能上都有些許重疊的部份，各自的優缺點與副作用會在使用規模達到一定程度（而且不必很多，大約 20 頁起？）後開始浮現…"
tags:
---

## __比較__

HackMD、Notion、Google 表單、PukiWiki、Obsidian…現在有太多筆記軟體可以使用，光看介紹就不免覺得頭昏眼花，這些工具到底有什麼差？

以有協作可能性的案例而言，在大概嘗試過一輪後，我認為至今仍還沒有一個「All-in-one」的協作筆記／集合內容萬能解，雖然不同工具在功能上都有些許重疊的部份，各自的優缺點與副作用會在使用規模達到一定程度（而且不必很多，大約 20 頁起？）後開始浮現，

大致可以如此總結：

| 種類         | 適合情境 | 範例                | 協作模式       | 副作用                 |
| ------------ | -------- | ------------------- | -------------- | ---------------------- |
| 傳統 Wiki    | 豐富文字 | PukiWiki、MediaWiki | 留言區、筆記頁 | 管理成本曲線成長       |
| 單頁式筆記   | 高單獨性 | HackMD              | 彈出式留言區   | 難以組合結構內容       |
| Zettelkasten | 數量龐大 | Obsidian、Scrapbox  | 直接修改       | 難以限定閱讀動線       |
| 表單         | 固定格式 | Google 表單         | 彈出式留言區   | 不適用於表單之外的用途 |

例如想製作一個團體的活動紀錄，像是所謂的「非公式 Wiki」，大概會有個人資訊頁面（興趣、小故事、活動平台、社群標籤、基礎介紹…）、活動紀錄（影片、音樂、比賽…）等等：

<div style="display: flex; justify-content: center;">
<div id="menubar" style="padding: 4px; border: 1px solid #ccc; display: inline-block;">
  <p style="margin: 0px 0px .25em 0px; padding: 0; background: white; box-shadow: 2px 2px #CCC;">■ A 組別</p>

- B 成員
  - 個人介紹
  - 活動紀錄
    - 類別 1
    - 類別 2
- C 成員
  - 個人介紹
  - 活動紀錄
    - 類別 1
    - 類別 3

</div>
<div id="menubar" style="margin-left: 4px; padding: 4px; border: 1px solid #ccc; display: inline-block;">
  <p style="margin: 0px 0px .25em 0px; padding: 0; background: white; box-shadow: 2px 2px #CCC;">■ D 組別</p>

- E 成員
  - 個人介紹
  - 活動紀錄
    - 類別 2
    - 類別 4
- F 成員
  - 個人介紹
  - 活動紀錄
    - 類別 4
    - 類別 5

</div>
</div>

<style>
#menubar ul, #menubar li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#menubar li p {
  display: inline-block;
}
#menubar ul > li:not(:last-child):before {
  content: "┣ "
}
#menubar ul > li:last-child:before {
  content: "┗ "
}

#menubar ul > li:not(:last-child) > ul > li:not(:last-child):before {
  content: "┃┣ "
}
#menubar ul > li:not(:last-child) > ul > li:last-child:before {
  content: "┃┗ "
}
#menubar ul > li:last-child > ul > li:not(:last-child):before {
  content: "　┣ "
}
#menubar ul > li:last-child > ul > li:last-child:before {
  content: "　┗ "
}

#menubar ul > li:not(:last-child) > ul > li:not(:last-child) > ul > li:not(:last-child):before {
  content: "┃┃┣ "
}
#menubar ul > li:not(:last-child) > ul > li:not(:last-child) > ul > li:last-child:before {
  content: "┃┃┗ "
}
#menubar ul > li:not(:last-child) > ul > li:last-child > ul > li:not(:last-child):before {
  content: "┃　┣ "
}
#menubar ul > li:not(:last-child) > ul > li:last-child > ul > li:last-child:before {
  content: "┃　┗ "
}
#menubar ul > li:last-child > ul > li:not(:last-child) > ul > li:not(:last-child):before {
  content: "　┃┣ "
}
#menubar ul > li:last-child > ul > li:not(:last-child) > ul > li:last-child:before {
  content: "　┃┗ "
}
#menubar ul > li:last-child > ul > li:last-child > ul > li:not(:last-child):before {
  content: "　　┣ "
}
#menubar ul > li:last-child > ul > li:last-child > ul > li:last-child:before {
  content: "　　┗ "
}
</style>

這種具有豐富文字內容，而且通常頁面間互有關連性，就會比較適合選用傳統 Wiki 類型的工具。

### 單頁式

以 HackMD 來說，撰寫完各個頁面後，要製作目錄選單時，必須先新增一個獨立文件、調整設定改為書籍模式，再加入各個連結，且較難調整外觀細節，例如選單裡的項目行距，或是想補充額外資訊等等，都容易造成跑版，各個頁面也必須逐一加入逆向連結，避免從單獨頁面存取的人找不到整個目錄，這點似乎有在近期加入的 Footer 元件裡改善？

在 PukiWiki 裡只須修改預設顯示的側邊選單欄，就會自動同步在所有頁面上，也沒有顯示模式切換上的問題，並且還能加入像是「最近更新」、「人氣頁面」或捷徑區等等內容，比起「目錄選單」，更像是「多功能式選單」。

Markdown 預設也有 **粗體** 或 _斜體_ 等裝飾，但要加入 <span style="color: #1D9BF0;">顏色</span> 或 <span style="padding: 2px; color: white; background: #1D9BF0;">背景顏色</span> 等更豐富的效果，就需要直接撰寫 HTML 和 CSS，然而以單頁呈現的內容來說，HackMD 確實是個相當理想的選擇。

### 表單式

在台灣不知為何有許多人使用的 Google 表單，有個非常明顯的困境：[悲劇的 SEO 效果與搜尋結果的呈現](https://www.google.com/search?q=site:https://docs.google.com/spreadsheets/)，如果只是臨時用的筆記還算堪用，要作為長期整理和提供資訊的平台實在是拿石頭砸自己的腳。

常伴隨而來的是偏離表單原始設計的「神 Excel」排版，看似豪華，實則更難閱讀與控制，除了網頁常見的縱軸移動，還會出現橫軸移動，頁面數量一多（還比開頭提的更少，大概 6-8 頁？）後，連分頁部份也得捲動才能瀏覽，加上佔比偏大的功能區，嚴重壓縮可瀏覽和操作的空間。

這點在已成主流裝置的手機上更為明顯，還會跳出是否安裝專屬 App 的詢問，讀者看到有興趣或需要的內容之前就先累死了。圖片或連結等等在操作或管理上也都很麻煩，完全是個只對編輯者方便，對讀者不便的工具。

這也是因為表單原先便是用於處理固定格式的資料，例如數據統計、問券、意見調查或活動參加登記表等等，再透過內部函式快速取得簡易處理後的資料，或串接 API 進行整形呈現，用作筆記本身就是種非正規的用法。

### Zettelkasten 式

Zettelkasten 式筆記在主流社群裡則較為少見，離線版較知名的範例有 Obsidian，也可發佈成網頁放到網路上，純線上版的則有 Scrapbox，這則和 HackMD 的單頁式導向完全相反，更重視「頁面間的連結性」，只要任一頁面有單向連結，系統就會自動在另一方也加上對應連結

再回到前面的例子，活動平台或活動紀錄的各個頁面，也可能會因為有共同連結而串接起來，好處是幾乎能確保找得到內容，壞處是對於初次接觸的人而言，**過多連結反而容易造成消化困難**。

而有趣的是，Zettelkasten 的真正價值也在「過多連結」上面，因為「**幾乎能確保找得到內容**」。也就是說，只用於所舉例的這種單一主題的情境下會顯得混亂，但用於偏向雜記、隨筆或剪貼簿性質的龐大內容整理時，就能透過連結快速看出各種頁面間的關係，甚至是意外得出有趣的新想法，這點也和傳統 Wiki 重視主題層級呈現可說是完全相反。

### 傳統 Wiki

最後是如維基百科的 MediaWiki 或 PukiWiki 這種早期的 Wiki 系統，當然也不是完美無缺，有個經典的問題可以用作範例：[蝙蝠問題](https://ja.wikipedia.org/wiki/%E3%81%93%E3%81%86%E3%82%82%E3%82%8A%E5%95%8F%E9%A1%8C)，當一物**同時能分類到 A 和 B 時，就會發生處理上的困難**，不論分類到哪一邊，都容易造成後續問題。

以及如**超過三層以上的層疊內容，將意味著之後參與的編輯者也必須先理解整體構造**，使得維護成本不斷上升，因此一般會認為較適合如遊戲攻略之類的單一主題內容，確保編輯與閱讀的品質能夠兼具。

還有由於台灣不像日本有許多「租借 Wiki」（WIKIWIKI.jp、wikiru.jp、atwiki、Seesaa Wiki…）的服務，只能自己從頭架設，或是就跟著使用這些海外網站，缺乏相關資源在學習成本上也會比較高。

~~雖然全世界似乎也只有日本才比較流行 Wiki 文化…~~

## __總結__

就像一開頭說的，All-in-one 的筆記／集合內容萬能解並不存在，比起什麼「用了就能事半功倍」的生產力色情，要思考的應該是：**你想整理或呈現的資訊是什麼？**

例如「看過什麼作品」，要做成可排序搜尋的表格？或是單頁的無序列表？或是選定的內容主題範疇延伸會到什麼程度？多淺？多深？多簡略或多詳細？先有概念之後，才能實際去評估各個工具的效益，並做出有效的選擇。

更重要的是，**你願意和這工具相處半年、一年，甚至十年嗎？**

內容沒有捷徑，需要的是如照護植物般的剪修和維護，是場超長期的馬拉松，也沒有什麼「上個世代的東西」，只有從需求出發，挑選能夠解決問題的工具才是正途。
