---
title: "與RSS一同遠離演算法推播"
date: 2022-08-13T08:12:24.000Z
summary: ""
tags:
---

## RSS

RSS 是個 1999 年出現，可說有段歷史的資訊來源規範，大致上的運作模式是，網站會提供一份 RSS 來源檔案，通常是個 xml 檔，裡頭使用標籤區分內容的標題、簡短敘述、縮圖、原始網址…等等，並會隨著網站新增內容一同更新，使用者可以透過各種 RSS 閱讀器程式或插件定期送出更新請求，即時掌握內容最新狀況，就像社群網站會有的通知，或 YouTube 的小鈴鐺功能。

![RSS icon](https://i.imgur.com/cE8uPNG.png)

但社群網站與 YouTube 最為人詬病的，就是基於各種不透明因素的內容推播機制，反而常讓讀者不知不覺漏了想看的內容，也讓內容提供者疲於迎合背後的演算法。RSS 不考慮任何變因，只依照訂閱列表提供最新內容，簡潔的設計反而成了優勢，保證將所有內容送到使用者手上，生態系也已成熟，有許多便利的閱讀器可以使用，提昇過濾與消化內容的速度。

## 閱讀器

![RSS reader example](https://i.imgur.com/fyNwhaF.png)

### [應用程式] QuiteRSS

- [下載](https://quiterss.org/en/download)
- 新增來源：`Ctrl` + `N`
- 切換來源：`Ctrl` + `↑`／`↓`
- 切換內容：`←`／`→`
- 複製內容連結：錨點移至該則內容後 `y`
- 使用瀏覽器開啟內容：`Ctrl` + `O`

### [瀏覽器插件] Feedbro

- [安裝](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa)
- [jp-locale](https://github.com/ktkr3d/feedbro-locale)

## RSS 來源

這個名詞最近比較常與 Podcast 一同出現，正是因為 Podcast 主要採取這種方式提供內容，但其實還有非常多內容有提供 RSS 來源，像 YouTube 雖然沒有於頁面明確加入圖示或連結，只要直接將頻道網址，或是 `https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID` 新增到閱讀器來源，即可訂閱頻道內容。遺憾的是，像 Facebook 這種把內容鎖在帳號背後的網站，則還沒有什麼好的訂閱手段。

- [ニコニコ動画](https://www.nicovideo.jp/rss)
- [ライブドアブログ](https://help.blogpark.jp/archives/52366452.html)
- [報導者](https://public.twreporter.org/rss/twreporter-rss.xml)
- [[はてブ]関連ページ・RSS 一覧](https://anond.hatelabo.jp/20220521220951)
- [Get podcasts RSS Feed Urls](https://getrssfeed.com/)

## 延伸閱讀

- [Use RSS for privacy and efficiency](https://rsapkf.org/weblog/q2z)