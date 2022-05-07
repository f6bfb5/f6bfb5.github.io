---
title: "【歌詞翻譯】The High-Lows - 日曜日よりの使者"
date: 2019-08-27T11:21:10.000Z
tags: Lyrics, Translate
---

<iframe id="video" src="https://www.youtube.com/embed/3uIzx6w8OEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>
  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/the-high-lows-messenger-from-sunday.srt'
  onMount(() => {
    var loadSRT = function(url, callback) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          var subtitles = parser.fromSrt(httpRequest.responseText, true);
          for (var i in subtitles) {
            subtitles[i] = {
              start : (subtitles[i].startTime / 1000),
              end   : (subtitles[i].endTime / 1000),
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

能不能就這樣子<br>
帶我到那遠方去<br>
是你 你就是那 來自週日的使者

Sha la la

能不能就這樣子<br>
帶我到那遠方去<br>
是你 你就是那 來自週日的使者

即使這整個世界<br>
都滿遍懾人豪雨<br>
來自週日的使者 也會捧腹大笑

Sha la la

讓自己沉浸在於<br>
昨晚入喉的酒杯<br>
浮現在水面上的 來自週日的使者

隨口撒個謊言<br>
為了度過當下

不傷害任何人的 來自週日的使者

（※）<br>
流星最後抵達於<br>
悲傷沉澱的西方<br>
讓我們前去迎接<br>
從東方昇起之物 來自週日的使者

能不能就這樣子<br>
帶我到那遠方去<br>
是你 你就是那 來自週日的使者<br>
即使這個城市 正需要我<br>
現在就出發吧 來自週日的使者

（※）

Sha la la
