---
title: "【歌詞翻譯】樋口了一 - 1/6の夢旅人2002"
date: 2018-12-25T11:51:05.000Z
tags: Lyrics, Translate
---

<iframe id="video" title="樋口了一 - 1/6の夢旅人2002" src="https://www.youtube.com/embed/lxt-zHlHd1o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>
  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/higuchi-ryouichi-1-6-dream-traveller.srt'
  onMount(() => {
    var loadSRT = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          var subtitles = parser.fromSrt(httpRequest.responseText, true);
          for (var i in subtitles) {
            subtitles[i] = {
              start : (subtitles[i].startTime / 1000) + 13,
              end   : (subtitles[i].endTime / 1000) + 13,
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
轉啊轉啊地球旋轉著
一無所有時已是如此
為了隨時都能飛奔而出
我想要像骰子般地翻滾

在想哭的時候
即使想去見你
也只是在逞強
現在仍什麼都 什麼都不懂

（※）
用我們的淚水填滿這世界
即使這份無所適從的情感
降下了今日的雨
新的早晨依舊仍會再開始

我想要像這樣子 像這樣子 活下去
像這樣子活下去

獨自一人無法做到的事
只要有堅強笑臉的伙伴 就能達成
到達之後一切才是開始
現在沒有餘裕決定終點

去愛著誰這件事
一直去相信什麼
現在比什麼都更加支持我

用我們的淚水填滿這世界
即使自筋疲力竭的腳下起
一切都完全凍結
總有一天南風會再次歌唱

我想要像這樣子 像這樣子 歡笑著
像這樣子歡笑著

（※）
```