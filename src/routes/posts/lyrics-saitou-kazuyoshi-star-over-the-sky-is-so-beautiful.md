---
title: "【歌詞翻譯】齊藤和義 - 空に星が綺麗"
date: 2019-08-27T11:36:56.000Z
tags: Lyrics, Translate
---

<iframe id="video" title="齊藤和義 - 空に星が綺麗" src="https://www.youtube.com/embed/Xak46UZuJQE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>
  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/saitou-kazuyoshi-star-over-the-sky-is-so-beautiful.srt'
  onMount(() => {
    var loadSRT = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          var subtitles = parser.fromSrt(httpRequest.responseText, true);
          for (var i in subtitles) {
            subtitles[i] = {
              start : (subtitles[i].startTime / 1000) + 2.5,
              end   : (subtitles[i].endTime / 1000) + 2.5,
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
吹著口哨向前走吧 垂頭喪氣的朋友啊
縱使人生一波三折 天上繁星依舊美麗
到那充滿回憶的公園去逛逛吧？
或許能夠想起 最近遺忘的東西
當時的我們啊 沒有什麼要守護
成天追逐著夢 悠然自在的日子

吹著口哨向前走吧 垂頭喪氣的我啊
遠方傳來的吉它聲 飄然消失於空中
我並沒有忘記
那份仍在胸中鼓動的心情 但是…

當時的我們 如今卻卑躬屈膝
表面上笑著 心中默默流著淚

吹著口哨向前走吧 垂頭喪氣的朋友啊
這不是任何人的錯 事情就是這樣子啊
吹著口哨向前走吧 天上繁星依舊美麗
```