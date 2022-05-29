---
title: "【歌詞翻譯】BUMP OF CHICKEN - ギルド"
date: 2018-12-24T23:09:12.000Z
tags: Lyrics, Translate
---

<iframe id="video" src="https://www.youtube.com/embed/wwVlJfJgWJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>
  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/bump-of-chicken-guild.srt'
  onMount(() => {
    var loadSRT = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          var subtitles = parser.fromSrt(httpRequest.responseText, true);
          for (var i in subtitles) {
            subtitles[i] = {
              start : subtitles[i].startTime / 1000,
              end   : subtitles[i].endTime / 1000,
              text  : subtitles[i].text
            };
          }
          callback(subtitles);
        }
      };
      httpRequest.open('GET', url, true);
      httpRequest.send(null);
    };
    loadSRT(subfile, function(subtitles) {
      var youtubeExternalSubtitle = new YoutubeExternalSubtitle.Subtitle(document.getElementById('video'), subtitles);
    });
  })
</script>

```
得到人類這份工作 已經過了多久呢
覺得完全沒有拿到 恰如其分的薪水

不知何時起的誤解 我知道「這不是工作」
然而似乎為時已晚 已經變成只是工作

並非覺得悲傷 只是很疲憊
請讓我休息 打算和誰說呢

被奪走什麼 奪得了什麼
不斷地重覆 逐漸地遺忘
被污染的 是世界還是自己
無論如何 該將眼睛睜開了
這全部都是令人瘋狂的 正常的日常生活

感到饑餓的空殼 不願動彈 等待餌食
有誰能搭理我嗎 沒說出口 只是想著

人類這頭路被開除 已經過了多久呢
總之還是揮灑汗水 試著努力過下去

我回想起了那 許許多多的事
我能夠去面對 滿遍的眩目嗎

即使我不美麗 無法溫柔待人
我還能被允許 繼續呼吸著嗎
笑著應付過去 在鏡子前哭泣
不會被注意到 那是理所當然 因為我隱藏著
只是過著同樣夜晚白晝 正常的日常生活

想被人愛而吼叫著 卻害怕被人所愛
而逃進其中的牢籠 我要從隙中拉出
即使污穢也接受吧 世界是我自己的
沒有關係 你應該要用這樣的姿態活下去
這全部都是令人瘋狂的 正常的日常生活

得到之後 被開除後
過了多久 在做什麼
這是我期望的 這是我所選的
「這不是工作」 我知道的

得到之後 被開除後
過了多久 在做什麼
這是我期望的 這是我所選的
「這不是工作」 我知道的
```