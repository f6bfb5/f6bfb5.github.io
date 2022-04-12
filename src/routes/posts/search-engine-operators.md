---
title: "為了能找到想要的內容 好用的搜尋相關參數"
date: 2022-04-11T23:03:34.000Z
summary: ""
tags:
---

## Google

- [Refine web searches - Google Search Help](https://support.google.com/websearch/answer/2466433)

| 關鍵字                       | 功能                                  | 範例                                                                                                                                                                                    |
| ---------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OR`／` \|`                  | 內容包含其一關鍵字                    | [Gundam OR Evangelion](https://www.google.com/search?&q=Gundam+OR+Evangelion)                                                                                                           |
| `AND`                        | 內容包含所有關鍵字                    | [Gundam AND Evangelion](https://www.google.com/search?&q=Gundam+AND+Evangelion)                                                                                                         |
| `-`                          | 內容不包含該關鍵字                    | [Gundam -Unicorn](https://www.google.com/search?&q=Gundam+-Unicorn)                                                                                                                     |
| `*`                          | 任意字元補足關鍵字缺失部份            | [steve \* apple](https://www.google.com/search?q=steve+*+apple)                                                                                                                         |
| `()`                         | 指定特定關鍵字條件                    | [(ipad OR iphone) apple](https://www.google.com/search?q=%28ipad+OR+iphone%29+apple)                                                                                                    |
| `""`                         | 內容完全符合指定關鍵字                |                                                                                                                                                                                         |
| `$`                          | 搜尋價錢                              | [ipad $329](https://www.google.com/search?q=ipad+%24329)                                                                                                                                |
| `#..#`                       | 搜尋兩者之間範圍的內容                | [ゲーム 1990..1999](https://www.google.com/search?q=%E3%82%B2%E3%83%BC%E3%83%A0+1990..1999)                                                                                             |
| `before:`／`after:`          | 搜尋特定時間範圍的內容                | [千と千尋 徹夜 before:2002-01-01](https://www.google.com/search?q=%E5%8D%83%E3%81%A8%E5%8D%83%E5%B0%8B+%E5%BE%B9%E5%A4%9C+before%3A2002-01-01)                                          |
| `AROUND(X)`                  | 兩個關鍵字之間不超過 X 個字的其他內容 | [エヴァンゲリオン AROUND(6) 原画集](https://www.google.com/search?q=%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3+AROUND%286%29+%E5%8E%9F%E7%94%BB%E9%9B%86) |
| `define:`                    | 搜尋關鍵字的詞句解釋                  | [define:仕掛け](https://www.google.com/search?q=define%3A%E4%BB%95%E6%8E%9B%E3%81%91)                                                                                                   |
| `cache:`                     | 搜尋特定網站快取內容                  | [cache:twitter.com](http://webcache.googleusercontent.com/search?q=cache%3Atwitter.com)                                                                                                 |
| `filetype:`                  | 搜尋特定類型檔案內容                  | [社外秘 filetype:pdf](https://www.google.com/search?q=%E7%A4%BE%E5%A4%96%E7%A7%98+filetype:pdf)                                                                                         |
| `site:`                      | 搜尋特定網站／網域內容                |                                                                                                                                                                                         |
| `related:`                   | 搜尋特定網站／網域的相關內容          |                                                                                                                                                                                         |
| `intitle:`／`allintitle:`    | 搜尋標題含有關鍵字的內容              |                                                                                                                                                                                         |
| `inurl:`／`allinurl:`        | 搜尋網址含有關鍵字的內容              |                                                                                                                                                                                         |
| `intext:`／`allintext:`      | 搜尋內容含有關鍵字的內容              |                                                                                                                                                                                         |
| `weather:`                   | 搜尋某地的天氣                        | [weather:tokyo](https://www.google.com/search?q=weather%3Atokyo)                                                                                                                        |
| `stocks:`                    | 搜尋股票資訊                          | [stocks:ncbdf](https://www.google.com/search?q=stock%3Ancbdf)                                                                                                                           |
| `map:`                       | 搜尋地圖資訊                          | [map:akihabara](https://www.google.com/search?q=map%3Aakihabara)                                                                                                                        |
| `movie:`                     | 搜尋電影資訊                          | [movie:リズと青い鳥](https://www.google.com/search?q=movie%3A%E3%83%AA%E3%82%BA%E3%81%A8%E9%9D%92%E3%81%84%E9%B3%A5)                                                                    |
| `in`                         | 單位轉換                              | [$1 in JPY](https://www.google.com/search?q=%241+in+JPY)                                                                                                                                |
| `source:`                    | 搜尋特定新聞來源                      | [アニメ source:NHK](https://www.google.com/search?q=%E3%82%A2%E3%83%8B%E3%83%A1+source%3ANHK&tbm=nws)                                                                                   |
| `inanchor:`／`allinanchor:`  | 搜尋含有特定錨點文字的內容            |                                                                                                                                                                                         |
| `blogurl:`                   | 搜尋定網站／網域的部落格              |                                                                                                                                                                                         |
| `loc:placename`／`location:` | 搜尋位於特定區域的內容                |                                                                                                                                                                                         |

這些參數可以互相搭配使用，例如日本前陣子火紅的「[まとも検索](https://fukuyuki.github.io/mtm.html)」就是利用了限定於來自公家機關、論文單位或可信度較高的檔案類型的搜尋參數組合，藉此過濾出相對可信的內容。

## Twitter

- [Search operators | Docs | Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-api/v1/rules-and-filtering/search-operators)
- [🔍 Advanced Search on Twitter](https://github.com/igorbrigadir/twitter-advanced-search)

| 關鍵字                                 | 功能                         |
| -------------------------------------- | ---------------------------- |
| `OR`                                   | 內容包含其一關鍵字           |
| `""`                                   | 內容完全符合指定關鍵字       |
| `-`                                    | 內容不包含該關鍵字           |
| `from:account`                         | 來自特定帳號的內容           |
| `to:account`                           | 傳送給特定帳號的內容         |
| `@account`                             | 有提及特定帳號的內容         |
| `filter:safe`                          | 移除敏感內容                 |
| `filter:media`                         | 僅包含圖片或影片的內容       |
| `-filter:retweets`                     | 不包含轉推內容               |
| `filter:images`                        | 僅包含圖片的內容             |
| `filter:links`                         | 僅包含連結的內容             |
| `url:keyword`                          | 內容含有包含特定關鍵字的連結 |
| `since:yyyy-mm-dd`／`until:yyyy-mm-dd` | 搜尋特定時間範圍的內容       |
| `lang:`                                | 搜尋特定語言的內容           |
