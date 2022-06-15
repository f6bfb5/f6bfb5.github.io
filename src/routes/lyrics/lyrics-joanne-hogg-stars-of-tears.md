---
title: "【歌詞翻譯】Joanne Hogg - STARS OF TEARS"
date: 2019-07-19T12:33:15.000Z
tags: Lyrics, Translate
---

<iframe id="video" title="Joanne Hogg - STARS OF TEARS" src="https://www.youtube.com/embed/zWOysygnZUk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>
  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/joanne-hogg-stars-of-tears.srt'
  onMount(() => {
    var loadSRT = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          var subtitles = parser.fromSrt(httpRequest.responseText, true);
          for (var i in subtitles) {
            subtitles[i] = {
              start : (subtitles[i].startTime / 1000) - 1,
              end   : (subtitles[i].endTime / 1000) - 1,
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
你的指尖溫柔撫過我的心
生命的力量綿綿不斷
這首歌始終如此難忘
彷彿天使寄宿其中

而我想問你
我們能否撫平喪失之人的悲痛？
（生命之力在延續著）
我們能否知曉一切悲傷的來由？
（淚水與寂寥）
我們能否接住這破碎世界的淚？
當它不斷地墜落至這地球上，不斷墜落…

時間的長河帶我更瞭解你
內心似如夏日晴天的藍霧
領向無法解鎖門扉的鑰匙
受傷的鳥 啟程離去

而我想問你
我們能否撫平喪失之人的悲痛？
（生命之力在延續著）
我們能否知曉一切悲傷的來由？
（淚水與寂寥）
我們能否接住這破碎世界的淚？
當它不斷地墜落至這地球上，不斷墜落…
```