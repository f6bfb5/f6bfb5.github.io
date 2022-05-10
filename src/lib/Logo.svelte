<script>
  const randomTargetUrlArr = [
    // ----------------------------------------
    // Anime
    // ----------------------------------------
    // 【CM】プラネテス Planetes Blu-ray Box PV【翻譯】
    "https://www.youtube.com/watch?v=en3Gg3k1y3Q",
    // Anime Central 日本動畫的作畫講座（2013）繁中字幕
    "https://www.youtube.com/watch?v=xnTBQPoB6yQ",
    // TIFF マスタークラス 「アニメ映画史、最重要変化点を語る」
    "https://www.youtube.com/watch?v=3Y6zlM-n9Kg",
    // 「最高のおもてなしだ」
    "https://www.nicovideo.jp/watch/sm24304243",
    // ヤッタモン勝ちなんや
    "https://www.nicovideo.jp/watch/sm24550780",
    // 『リズと青い鳥』メイキング
    "https://www.youtube.com/watch?v=Pfo4kTK-sws&list=PLTNhweghpLi2U9Liu1wszAR7nlJAUFv-M",
    // 'The End of Evangelion' and Stan Brakhage
    "https://medium.com/@EstherRosenfield/the-end-of-evangelion-and-stan-brakhage-e57fb668181f",
    // The Illusion of Peace in Mamoru Oshii's Patlabor 2
    "https://youtu.be/ybLKmO5Kq5A",
    // ----------------------------------------
    // Music
    // ----------------------------------------
    // 【Official】Pokémon Special Music Video 「GOTCHA！」
    "https://www.youtube.com/watch?v=BoZ0Zwab6Oc",
    // 『リズと青い鳥』ミュージックPV
    "https://www.youtube.com/watch?v=OGWO3u8zgTU",
    // 坂本真綾 - おかえりなさい (Tomatomerde Remix)
    "https://www.youtube.com/watch?v=wbMe6DmtqMw",
    // ヤツメ穴
    "https://www.youtube.com/watch?v=C9PFVo1FEwU",
    // ラグとレイン
    "https://www.youtube.com/watch?v=AzFJUrKO8U0",
    // 週末のDDRメドレーを　あの頃のようには踊れない
    "https://www.nicovideo.jp/watch/sm9244874",
    // アニソンmixメドレー
    "https://soundcloud.com/f6bfb5/sets/k4psq4s1vpbd",
    // 【ｺﾞﾑ】　ロックマン2　おっくせんまん！（Version ｺﾞﾑ）
    "https://www.nicovideo.jp/watch/sm83",
    // ファミコンの実機演奏操作を解説！【NES BAND】
    "https://youtu.be/KmGvN3fmsbY",
    // ファミコンの音声出力比較をしてみたら意外な機器の音質が良かった【9 通り】
    "https://youtu.be/LXCrwoQzrwI",
    // ----------------------------------------
    // Game
    // ----------------------------------------
    // 【CM】Linda Cube Again【翻譯】
    "https://www.youtube.com/watch?v=Jc1QGIhnTaU",
    // 【CM】Serial Experiments Lain for PS 【翻譯】
    "https://www.youtube.com/watch?v=KZONR1BFZ3s",
    // #lain20th
    "https://www.youtube.com/watch?v=uOREjHyENtc",
    // serial experiments lain プレイ動画 level1【コメ実況風】
    "https://www.nicovideo.jp/watch/sm5667565",
    // さよならを教えて-プレイ動画 00
    "https://www.nicovideo.jp/watch/sm938664",
    // 登山家たちのクトゥルフ神話TRPG
    "https://www.nicovideo.jp/watch/sm30884037",
    // クリスマスを一人で過ごした後に見る動画　ーGetting Over Itー
    "https://www.nicovideo.jp/watch/sm32489042",
    // 絶望を越えた超やりこみ聖剣LOM #1（Lv99の敵しかいない世界）
    "https://www.nicovideo.jp/watch/sm33802520",
    // 攻略本を越えた超やりこみゼノギアス【実況】Part1（23時間収録分）
    "https://www.nicovideo.jp/watch/sm28923737",
    // 【街】憧れのサウンドノベルを今やる【実況】part1
    "https://www.nicovideo.jp/watch/sm10588950",
    // 【ゆっくり解説】平成のゲーム史を振り返ってみた Part1
    "https://www.nicovideo.jp/watch/sm35053910",
    // いんゆめにっき
    "https://www.nicovideo.jp/watch/sm37696367",
    // ----------------------------------------
    // Video
    // ----------------------------------------
    // 「人們對電影的論述，實際上只是對於電影的紀錄罷了」
    "https://www.youtube.com/watch?v=veVUyJFPqUc",
    // クラフトボス『Flash Back Memories』3分39秒 宮崎吐夢 サントリー
    "https://www.youtube.com/watch?v=ezF1ZJurYig",
    // 鮭1尾を食い尽くす【19品】
    "https://www.nicovideo.jp/watch/sm24627168",
    // ニコニコ動画の流行した動画、話題を振り返ってみた【（仮）時代】
    "https://www.nicovideo.jp/watch/sm32180468",
    // あなたのインターネットはどこから？
    "https://www.youtube.com/watch?v=P7W7Vtti78U",
    // 古きネット文化よ、永遠に。
    "https://www.nicovideo.jp/watch/sm29763392",
    // 削除動画
    "https://www.nicovideo.jp/watch/sm38213757",
    // [決意表明] 会社辞めてninja250で日本一周 phase 0
    "https://www.nicovideo.jp/watch/sm30344277",
    // blank vhs covers were kinda beautiful
    "https://www.youtube.com/watch?v=e9DfSCk-6Ko",
    // 【手描きにじさんじ】灰に灯る火はブルー【黛灰1st_Storage】
    "https://www.youtube.com/watch?v=oo5F2WVtLA8&t",
    // 【#001】作画オタクVTuber、自己紹介します！
    "https://www.youtube.com/watch?v=RqkAgWTZ98w",
    // ----------------------------------------
    // Article
    // ----------------------------------------
    // 伊丹万作 演技指導論草案
    "https://www.aozora.gr.jp/cards/000231/files/1190_31196.html",
    // 「二次創作を元にした二次創作」を繰り返し、九次創作に至るまでの流れを図解してみました！
    "https://twitter.com/sin_ncd/status/1210874514403291136",
  ];

  function getRandomEleFromArr(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }

  let targetUrl = getRandomEleFromArr(randomTargetUrlArr);
</script>

<a
  href={targetUrl}
  target="_blank"
  rel="noreferrer noopener"
  on:click={() => (targetUrl = getRandomEleFromArr(randomTargetUrlArr))}
>
  <img
    src="data:image/gif;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAABbl4Awr28AAAAAAC4pp4ACgUAAFomhAB4aGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIiIiQiQiIkREREREJCIiQRERERESIiJBEhEREREiIkFCQRFRESIiQRIRERFRIiJBEREREREiIkE2ZmZmESQiQWYAAAZhJCJBZgAABmEkIkFmAAAGYSQiQWYAAAZhRCJBZgAABmFEIkE2ZmZmMUQiQRERERERRCJERERERERCLABwAAgAMAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAwAA"
    alt="logo"
    style="width: 36px; height: 42px;"
  />
</a>

<style scoped>
  a {
    margin-right: 20px;
  }
</style>
