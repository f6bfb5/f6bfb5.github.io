<script>
  const randomImgArr = [
    "_c_choju22_0020_s512_choju22_0020_4.png",
    "_c_choju23_0036_s512_choju23_0036_11.png",
    "_c_choju38_0037_s512_choju38_0037_5.png",
    "_c_choju46_0040_s512_choju46_0040_11.png",
    "_c_choju49_0035_s512_choju49_0035_0.png",
    "_c_choju56_0008_s512_choju56_0008_1.png",
    "_c_choju57_0032_s512_choju57_0032_3.png",
    "_c_choju60_0025_s512_choju60_0025_0.png",
  ];
  const randomTargetUrlArr = [
    // 「人們對電影的論述，實際上只是對於電影的紀錄罷了」
    "https://www.youtube.com/watch?v=veVUyJFPqUc",
    // 【CM】Linda Cube Again【翻譯】
    "https://www.youtube.com/watch?v=Jc1QGIhnTaU",
    // 【CM】Serial Experiments Lain for PS 【翻譯】
    "https://www.youtube.com/watch?v=KZONR1BFZ3s",
    // 【CM】プラネテス Planetes Blu-ray Box PV【翻譯】
    "https://www.youtube.com/watch?v=en3Gg3k1y3Q",
    // Anime Central 日本動畫的作畫講座（2013）繁中字幕
    "https://www.youtube.com/watch?v=xnTBQPoB6yQ",
    // TIFF マスタークラス 「アニメ映画史、最重要変化点を語る」
    "https://www.youtube.com/watch?v=3Y6zlM-n9Kg",
    // 【Official】Pokémon Special Music Video 「GOTCHA！」 | BUMP OF CHICKEN - Acacia
    "https://www.youtube.com/watch?v=BoZ0Zwab6Oc",
    // 『リズと青い鳥』ミュージックPV
    "https://www.youtube.com/watch?v=OGWO3u8zgTU",
    // Sakamoto Maaya [坂本 真綾] - Okaerinasai [おかえりなさい] (Tomatomerde Remix) - Map / Storyboard by Rizen
    "https://www.youtube.com/watch?v=wbMe6DmtqMw",
    // ヤツメ穴
    "https://www.youtube.com/watch?v=C9PFVo1FEwU",
    // serial experiments lain プレイ動画 level1【コメ実況風】
    "https://www.nicovideo.jp/watch/sm5667565",
    // ラグとレイン
    "https://www.youtube.com/watch?v=AzFJUrKO8U0",
    // #lain20th
    "https://www.youtube.com/watch?v=uOREjHyENtc",
    // さよならを教えて-プレイ動画 00
    "https://www.nicovideo.jp/watch/sm938664",
    // クラフトボス『Flash Back Memories』3分39秒 宮崎吐夢 サントリー
    "https://www.youtube.com/watch?v=ezF1ZJurYig",
    // 登山家たちのクトゥルフ神話TRPG
    "https://www.nicovideo.jp/watch/sm30884037",
    // クリスマスを一人で過ごした後に見る動画　ーGetting Over Itー
    "https://www.nicovideo.jp/watch/sm32489042",
    // 鮭1尾を食い尽くす【19品】
    "https://www.nicovideo.jp/watch/sm24627168",
    // 絶望を越えた超やりこみ聖剣LOM #1（Lv99の敵しかいない世界）
    "https://www.nicovideo.jp/watch/sm33802520",
    // 攻略本を越えた超やりこみゼノギアス【実況】Part1（23時間収録分）
    "https://www.nicovideo.jp/watch/sm28923737",
    // 【街】憧れのサウンドノベルを今やる【実況】part1
    "https://www.nicovideo.jp/watch/sm10588950",
    // 週末のDDRメドレーを　あの頃のようには踊れない
    "https://www.nicovideo.jp/watch/sm9244874",
    // ニコニコ動画の流行した動画、話題を振り返ってみた【（仮）時代】
    "https://www.nicovideo.jp/watch/sm32180468",
    // 【ゆっくり解説】平成のゲーム史を振り返ってみた Part1
    "https://www.nicovideo.jp/watch/sm35053910",
    // あなたのインターネットはどこから？
    "https://www.youtube.com/watch?v=P7W7Vtti78U",
    // 古きネット文化よ、永遠に。
    "https://www.nicovideo.jp/watch/sm29763392",
    // 「最高のおもてなしだ」
    "https://www.nicovideo.jp/watch/sm24304243",
    // ヤッタモン勝ちなんや
    "https://www.nicovideo.jp/watch/sm24550780",
    // 削除動画
    "https://www.nicovideo.jp/watch/sm38213757",
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
    src={getRandomEleFromArr(randomImgArr)}
    class="easter-egg"
    alt="easter_egg"
  />
</a>

<style>
  .easter-egg {
    position: fixed;
    max-width: 240px;
    max-height: 240px;
    left: 1600px;
    bottom: 80px;
  }
</style>
