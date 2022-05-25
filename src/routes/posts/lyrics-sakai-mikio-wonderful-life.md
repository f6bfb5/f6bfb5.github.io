---
title: "【歌詞翻譯】酒井ミキオ - Wonderful Life"
date: 2018-12-25T12:42:06.000Z
tags: Lyrics, Translate
---

<iframe id="video" title="酒井ミキオ - Wonderful Life" src="https://www.youtube.com/embed/Pj-iPkgTzoE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>
  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/sakai-mikio-wonderful-life.srt'
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

```
一口將水飲盡
抬頭望向夕陽 熾紅灼燒的雲
今天已經結束 走在行道樹下 回家吧
即使事情太多而恐慌 勉強自己 遇到挫折
肯定也抓住了些什麼 放輕鬆吧

因為人生是多麼美好
拿出勇氣去愛自己吧
敲開新的門扉
慢慢地向前走

在喧囂的街道上
望著令人悲傷的人們
因為些微細小的事情
互不讓步　時而爭吵…
但是地球仍在轉動著
太陽仍會平等地昇起
去比較幸福什麼的
並沒有任何意義呀

因為人生是多麼美好
你和我和所有的人們
即使笨拙　即使顯得難堪
都是獨一無二的自我

從昨天的失誤裡看見的
朝向明天的路標
即使去嘆息日常毫無變化
也僅是空談無法改變

因為這是美好的人生
拿起勇氣去愛自己吧
敲開新的門扉
慢慢地向前走

因為人生是多麼美好
你和我和所有的人們
都一直不斷在尋找
快樂與悲傷的意義 so just on my way
```