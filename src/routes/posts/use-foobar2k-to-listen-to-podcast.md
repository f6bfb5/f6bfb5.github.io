---
title: "用 Foobar2000 來聽 Podcast"
date: 2021-12-02T19:33:28.000Z
---

去年疫情爆發，Podcast 順勢在台灣爆紅，不免俗地也跟風聽了一陣子，這邊推薦兩份表單：[稍微分析了一下我的 Podcast 收聽紀錄 2018-2020](https://blog.yorkxin.org/posts/podcast-analysis.html)、[榨乾你的耳：親自用耳朵聽過的 Podcast Awesome List](https://medium.com/starrocket/maxine-podcast-awesome-list-5f864deb072b)，從上面發現了很多有趣的節目。

雖然因為收聽 Podcast 實在還是蠻花費時間的，之後已經沒什麼在聽了，不過還在收聽的時候，一直有幾個問題很困擾我：一些平台的預設播放順序是從新往舊播、每個人的節目音量大小會有落差且播放平台無法解決，老實說非常地惱人，而且難以理解的是，前者不只一個大型平台這樣設計，時代是不是越活越回去了？

## Foobar2000

- [foobar2000](https://www.foobar2000.org/)
- [foobar2000: Components Repository - Podcatcher](https://www.foobar2000.org/components/view/foo_podcatcher)
- [foobar2000: Components Repository - ReplayGain DSP](https://www.foobar2000.org/components/view/foo_dsp_replaygain)

最後滿足我的反而是老牌免費播放器――Foobar2000，搭配「Podcatcher」和「ReplayGain DSP」這兩個插件。

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

不過這種收聽方式也有一些缺點：無法標記節目是否已聽過、有些 Podcaster 因為檔案命名因素（ex. 呱吉的檔案名稱都會是「rssFileVip.mp3」）在下載時會有問題、節目敘述需要特別點開內容來看…等等。

節目敘述大多是節目重點整理、補充資料或業配相關資訊，也能從選單裡點開來看，問題不大。前兩者就比較麻煩，尤其是檔名重複問題，時常會莫名播放到和所選完全不同的節目，例如點了某一集新資料夾，卻播起了人生晚長，就得把已經抓下來的檔案刪掉後再重新點擊播放，目前也沒有新的替代插件能用，算是比較遺憾的待改善點。
