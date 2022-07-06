---
title: "用 Foobar2000 來聽 Podcast"
date: 2021-12-02T19:33:28.000Z
tags: Toolbox
---

去年疫情爆發，Podcast 順勢在台灣爆紅，不免俗地也跟風聽了一陣子，這邊推薦兩份表單：[稍微分析了一下我的 Podcast 收聽紀錄 2018-2020](https://blog.yorkxin.org/posts/podcast-analysis.html)、[榨乾你的耳：親自用耳朵聽過的 Podcast Awesome List](https://medium.com/starrocket/maxine-podcast-awesome-list-5f864deb072b)，從上面發現了很多有趣的節目。

雖然因為收聽 Podcast 實在還是蠻花費時間的，之後已經沒什麼在聽了，不過還在收聽的時候，一直有幾個問題很困擾我：一些平台的預設播放順序是從新往舊播、每個人的節目音量大小會有落差且播放平台無法解決，老實說非常地惱人。

## Foobar2000

- [foobar2000](https://www.foobar2000.org/)
- [foobar2000: Components Repository - Podcatcher](https://www.foobar2000.org/components/view/foo_podcatcher)
- [foobar2000: Components Repository - ReplayGain DSP](https://www.foobar2000.org/components/view/foo_dsp_replaygain)

最後滿足我的，反而是老牌免費播放器――Foobar2000，搭配「Podcatcher」和「ReplayGain DSP」這兩個插件。

Podcatcher 可以讓 foobar2000 自動更新與下載所訂閱的 Podcast 節目，雖然最後更新已經是十年前的事情，近期爆紅的 Podcast 實際上也不算是什麼新東西，目前仍然可以正常使用。

安裝 ReplayGain DSP 則是由於 Foobar2000 內建的 ReplayGain 無法細調、EBU R128 Normalizer 是下壓到 R128 的標準，所以需要再另外找的替代版。

## 安裝

「Podcatcher」安裝完成後，會自動新增一個同名的專屬播放清單，Podcast 節目都會顯示在這裡。順序問題便可使用 Date 屬性排序解決。

### Podcatcher

- 「File」選單 →「Subscribe to Podcast Feed…」→ 輸入想聽的 Podcast RSS 網址後
- 「View」選單 →「Podcatcher Feed Manager」→ 獨立挑選想聽的主持人

### ReplayGain DSP

- 「File」選單 →「Preferences」
  <br/>→「Playback」→「DSP Manager」
  <br/>→ 從右邊新增「ReplayGain (alternative)」
  <br/>→ 雙擊或點「ReplayGain (alternative)」右邊的「…」開啟設定
  <br/>→ 將「Target loudness」設為「-16 LUFS (Podcasts)」

另外我還加上了 Equalizer 等化器，搭配網路上的 [Preset](https://github.com/LeafG/dotfiles/tree/master/leaf/.foobar2000/Foobar2k%20EQ%20Presets/Equalizer%20Presets) 裡的「EQ Vocal」進一步強化人聲。

## 結語

原本聲音小到會令人抓狂（大概是因為完全沒做調整，這類節目的音量聽起來只有到 -18db 甚至更低，在特定平台上根本聽不了）的節目馬上變得舒服許多，也能同時顯示所有已訂閱的創作者的新節目，不需要再一個一個點開來看新節目有沒有興趣，收聽體驗有了飛躍性的改善。

不過這種收聽方式也有一些缺點：無法標記節目是否已聽過、有些 Podcaster 因為檔案命名因素（ex. 呱吉的錄音檔案名稱都會是「rssFileVip.mp3」）在下載時會有問題、節目敘述需要特別點開內容來看…等等。

節目敘述大多是節目重點整理、補充資料或業配相關資訊，也能從選單裡點開來看，問題不大。前兩者就比較麻煩，尤其是檔名重複問題，時常會莫名播放到和所選完全不同的節目，例如點了某一集新資料夾，卻播起了人生晚長，就得把已經抓下來的檔案刪掉後再重新點擊播放，目前也沒有新的替代插件能用，算是比較遺憾的待改善點。

> 追記：將設定頁面 `Perferences` -> `Tools` -> `Podcatcher` 裡的 `Time range over which to automatically download podcasts` 移至最左邊的 `No automatic downloading`，並從 `File` -> `Update All Podcast Feeds` 更新來源後，即可避免相同檔名問題（吧）。

追記 2：我的 podcast 訂閱清單

| 名稱                                    | RSS 網址                                                                     | 類型 |
| --------------------------------------- | ---------------------------------------------------------------------------- | ---- |
| Backyard Hatena                         | `https://anchor.fm/s/7aad9de4/podcast/rss`                                   | 技術 |
| Rebuild                                 | `https://feeds.rebuild.fm/rebuildfm`                                         | 技術 |
| Sansan Tech Podcast                     | `https://feeds.soundcloud.com/users/soundcloud:users:554143311/sounds.rss`   | 技術 |
| fukabori.fm                             | `https://pitpa.jp/rss/fukabori`                                              | 技術 |
| texta.fm                                | `https://anchor.fm/s/330a9488/podcast/rss`                                   | 技術 |
| 頂樓加蓋/Overbuild                      | `https://open.firstory.me/rss/user/ck1npa6vwf2930786sj5qsoec`                | 技術 |
| 3Q 陳柏惟                               | `https://open.firstory.me/rss/user/ckzyvnsrg04gw0b721rwh5t41`                | 社會 |
| 《The Real Story》By 報導者             | `https://feeds.soundon.fm/podcasts/c1f1f3c9-8d28-42ad-9f1c-908018b8d9fc.xml` | 社會 |
| 你說的都對                              | `https://anchor.fm/s/f5cf9cc/podcast/rss`                                    | 社會 |
| 呱吉                                    | `https://feeds.soundon.fm/podcasts/ecd31076-d12d-46dc-ba11-32d24b41cca5.xml` | 社會 |
| 寶島少年兄                              | `http://feeds.soundcloud.com/users/soundcloud:users:756787843/sounds.rss`    | 社會 |
| 台灣通勤第一品牌                        | `https://anchor.fm/s/1ea77470/podcast/rss`                                   | 生活 |
| 法克廚難                                | `https://feeds.soundon.fm/podcasts/aaa97576-664a-4fcd-8c09-57b09f7819b3.xml` | 生活 |
| TBS ラジオ「アフター 6 ジャンクション」 | `https://anchor.fm/s/18d944c4/podcast/rss`                                   | 娛樂 |
| 尼爾喝牛奶：你的次文化指南              | `https://open.firstory.me/rss/user/cjyqpmw8l2qci07437m3pfqe6`                | 娛樂 |
| 按下任意鍵：不專業聊遊戲                | `https://link.chtbl.com/zd2GtOO7?platform=rss`                               | 娛樂 |
