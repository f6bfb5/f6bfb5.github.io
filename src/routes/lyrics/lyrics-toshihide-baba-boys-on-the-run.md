---
title: "【歌詞翻譯】馬場俊英 - Boys on the run"
date: 2021-07-02T00:30:42.000Z
tags: Lyrics, Translate
---

<iframe id="video" src="https://www.youtube.com/embed/-S7rNasoTqc?controls=0" title="馬場俊英 - Boys on the run" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<svelte:head>

  <script src="../subtitle/youtube.external.subtitle.min.js"></script>
  <script src="../subtitle/subtitles.parser.js"></script>

</svelte:head>

<script>
  import { onMount } from 'svelte';
  let subfile = '../subtitle/toshihide-baba-boys-on-the-run.srt'
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
Hey boys, do it,
do it, do it, do it, boys
Hey boys, do it,
do it, do it, do it, boys

Hey boys, do it,
do it, do it, do it, boys
Hey boys, do it,
do it, do it, do it, boys

校園時日 究竟是什麼令我們如此熱衷
超過 40 度的盛夏球場奪走了一切
平凡的賽局迎來終盤下半局 沒有任何起色
阿洋站在下一棒打手等待區 一人望著天空
夢想如同場外壞球 已經遠去
宛如細線斷裂 從夢清醒過來
夏蟬停止鳴叫 比賽靜靜畫下句點

一方面亮一說著不能只在電話裡講 把她叫了出來
透過兩手傳來 有些令人害燥
卻也滲入體內般的柔情
街道染上夕陽與頭燈
以及街燈的色彩
不禁緊抱 拉近她的臉 接吻
兩人相互凝視
他卻哭說「你什麼都不懂」
但不需要擔心
這也是愛情表現
沒錯 女人說的話有一半
總是 總是 Meaningless 大家都知道的

Hey boys, do it,
do it, do it, do it, boys

在電話亭裡細語「這是最後的機會了」
今年 32 歲的祐次 留下妻子在山梨 隻身來到東京
站在獨房公寓窗邊 俯望夜晚的甲州街道
點燃香菸後又捻熄
捻熄後卻再次點燃
最後吐出「明天的事情
沒有人會知道呀」
抬頭望見的是東京的夜空
山梨的小鎮…如今已遠在彼方

沒有稱得上是機會的機會
走進死路的熱情與友情
跌跌撞撞的青春 故事靜靜走向高潮
次郎從吉他盒裡取出 Les Paul
唱著小小的 小小的 背叛的節奏
沒錯 「大家一起努力吧」
即便昨晚才一同乾杯
但不必迷惘 答案已在心中
只要相信 只要相信
這 10 根手指與 6 根弦

Hey boys, do it,
do it, do it, do it, boys

然後現在 我走進路過的打擊場
在時速 140 公里的隊列等著
那個熱到不行的盛夏藍天 炙熱的球場
陽炎般的快樂
現在仍能聽到鳴於耳邊的遠方歡聲
真有人曾想像那天我會一發逆轉嗎？
但我總是認真地瞄著下一顆球
夢想有一天能繞完整個菱角 回到本壘
然後對觀眾們用力地 PEACE！
PEACE！PEACE！PEACE！PEACE！PEACE！
再比出 POSE！

Hey boys, do it, Hey boys,
Hey boys, do it,
do it, do it, do it, boys
Hey boys, do it,
do it, do it, do it, boys

Hey boys, do it,
do it, do it, do it, boys
Hey boys, do it, do it, do it, do it, do it, do it, do it, do it,

……I Like You!
```