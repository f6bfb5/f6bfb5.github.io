---
title: "真女神轉生3雜記"
date: 2024-01-01T20:35:38.000+08:00
summary: ""
tags: ["ACG", "Game"]
---

<script>
  // ==================================================
  // parameter: 力 魔 体 速 運
  const magatama = [
    [
      {
        name: "マロガレ",
        parameter: [2, 1, 2, 1, 1],
        skill: [
          { name: "突撃", level: 3 },
          { name: "アナライズ", level: 4 },
          { name: "一分の活泉", level: 6 },
          { name: "暴れまくり", level: 10 },
          { name: "反撃", level: 20 },
          { name: "貫通", level: 0 },
        ]
      },
      {
        name: "ワダツミ",
        parameter: [0, 3, 2, 2, 1],
        skill: [
          { name: "アイスブレス", level: 7 },
          { name: "一分の魔脈", level: 11 },
          { name: "氷結高揚", level: 15 },
          { name: "フォッグブレス", level: 21 },
          { name: "耐氷結", level: 24 },
        ]
      },
      {
        name: "アンク",
        parameter: [1, 1, 4, 0, 2],
        skill: [
          { name: "ディア", level: 5 },
          { name: "逃走加速", level: 12 },
          { name: "メディア", level: 19 },
        ]
      },
      {
        name: "イヨマンテ",
        parameter: [2, 0, 2, 2, 3],
        skill: [
          { name: "タルンダ", level: 5 },
          { name: "スクンダ", level: 13 },
          { name: "ラクンダ", level: 16 },
          { name: "勝利の息吹", level: 36 },
        ]
      },
      {
        name: "シラヌイ",
        parameter: [0, 5, 0, 4, 0],
        skill: [
          { name: "ファイアブレス", level: 9 },
          { name: "火炎高揚", level: 14 },
          { name: "挑発", level: 19 },
          { name: "耐火炎", level: 23 },
        ]
      },
      {
        name: "ヒフミ",
        parameter: [0, 3, 0, 4, 3],
        skill: [
          { name: "竜巻", level: 17 },
          { name: "衝撃高揚", level: 22 },
          { name: "雄叫び", level: 24 },
          { name: "耐衝撃", level: 27 },
          { name: "衝撃無効", level: 40 },
        ]
      },
      {
        name: "カムド",
        parameter: [5, 0, 2, 3, 0],
        skill: [
          { name: "ヒートウェーブ", level: 18 },
          { name: "気合い", level: 23 },
          { name: "心眼", level: 25 },
          { name: "会心", level: 29 },
        ]
      },
      {
        name: "ナルカミ",
        parameter: [5, 6, 0, 0, 0],
        skill: [
          { name: "放電", level: 21 },
          { name: "電撃高揚", level: 26 },
          { name: "耐電撃", level: 30 },
          { name: "電撃無効", level: 44 },
        ]
      },
    ],
    [ "アナテマ", "ミアズマ", "ニルヴァーナ", "ムラクモ", "ゲッシュ", "ジェド", "ムスペル", "ゲヘナ" ] ,
    [ "カムロギ", "サタン", "アダマ", "ヴィマーナ", "グンダリ", "ソフィア", "ガイア", "カイラース" ],
    [ "マサカドゥス" ]
      // {
      //   name: "",
      //   parameter: [0, 0, 0, 0, 0],
      //   skill: [
      //     { name: "", level:  },
      //   ]
      // },
  ];
  // ==================================================
  // TODO: filter
  const demons = [
    // recipe
    // check
    { level: 95, type: "破壊神", name: "シヴァ" },
    { level: 93, type: "魔神", name: "ヴィシュヌ" },
    { level: 91, type: "大天使", name: "ミカエル" },
    { level: 91, type: "魔王", name: "モト" },
    { level: 87, type: "大天使", name: "ラファエル" },
    { level: 84, type: "大天使", name: "ラファエル" },
    { level: 83, type: "邪神", name: "マダ" },
    { level: 81, type: "妖鬼", name: "オンギョウキ" },
    { level: 80, type: "夜魔", name: "リリス" },
    { level: 78, type: "魔神", name: "ミトラ" },
    { level: 77, type: "魔王", name: "アルシエル" },
    { level: 76, type: "鬼神", name: "トール" },
    { level: 75, type: "妖獣", name: "フレスベルク" },
    { level: 74, type: "地母神", name: "スカディ" },
    { level: 74, type: "魔王", name: "スルト" },
    { level: 73, type: "邪神", name: "サマエル" },
    { level: 73, type: "大天使", name: "ウリエル" },
    { level: 72, type: "鬼神", name: "ビシャモンテン" },
    { level: 72, type: "鬼女", name: "ランダ" },
    { level: 70, type: "夜魔", name: "ニュクス" },
    { level: 69, type: "魔王", name: "アバドン" },
    { level: 68, type: "堕天使", name: "フラロウス" },
    { level: 67, type: "地母神", name: "カーリー" },
    { level: 67, type: "鬼女", name: "アトポロス" },
    { level: 66, type: "龍王", name: "ユルング" },
    { level: 66, type: "妖鬼", name: "フウキ" },
    { level: 65, type: "魔神", name: "オーディン" },
    { level: 64, type: "威霊", name: "アルビオン" },
    { level: 64, type: "女神", name: "スカアハ" },
    { level: 64, type: "邪神", name: "トウテツ" },
    { level: 64, type: "天使", name: "ソロネ" },
    { level: 63, type: "霊鳥", name: "ガルーダ" },
    { level: 63, type: "凶鳥", name: "グルル" },
    { level: 63, type: "鬼女", name: "ラケシス" },
    { level: 63, type: "幽鬼", name: "ヴェータラ" },
    { level: 62, type: "妖鬼", name: "スイキ" },
    { level: 61, type: "破壊神", name: "ホクトセイクン" },
    { level: 61, type: "魔獣", name: "ケルベロス" },
    { level: 60, type: "神獣", name: "バロン" },
    { level: 59, type: "妖鬼", name: "キンキ" },
    { level: 58, type: "軍神", name: "ガネーシャ" },
    { level: 58, type: "邪神", name: "ギリメカラ" },
    { level: 58, type: "鬼女", name: "クロト" },
    { level: 58, type: "堕天使", name: "デカラビア" },
    { level: 57, type: "地母神", name: "パールバティ" },
    { level: 57, type: "妖精", name: "ティターニア" },
    { level: 56, type: "魔神", name: "アマテラス" },
    { level: 56, type: "破壊神", name: "セイテンタイセイ" },
    { level: 56, type: "夜魔", name: "クィーンメイプ" },
    { level: 55, type: "龍王", name: "ケツアルカトル" },
    { level: 55, type: "地霊", name: "ゴグマゴグ" },
    { level: 55, type: "聖獣", name: "キマイラ" },
    { level: 54, type: "女神", name: "ラクシュミ" },
    { level: 54, type: "魔獣", name: "スパルナ" },
    { level: 54, type: "妖鬼", name: "シキオウジ" },
    { level: 53, type: "夜魔", name: "ロア" },
    { level: 52, type: "幻魔", name: "クー・フーリン" },
    { level: 52, type: "妖魔", name: "イフリート" },
    { level: 52, type: "鬼神", name: "ジコクテン" },
    { level: 52, type: "鬼女", name: "ダーキニー" },
    { level: 52, type: "外道", name: "シャドウ" },
    { level: 52, type: "魔王", name: "ロキ" },
    { level: 50, type: "天使", name: "ドミニオン" },
    { level: 49, type: "地霊", name: "ティターン" },
    { level: 49, type: "幽鬼", name: "レギオン" },
    { level: 48, type: "女神", name: "サティ" },
    { level: 48, type: "妖魔", name: "プルシキ" },
    { level: 47, type: "魔神", name: "アタバク" },
    { level: 47, type: "夜魔", name: "キウン" },
    { level: 46, type: "幻魔", name: "ハヌマーン" },
    { level: 46, type: "神獣", name: "ヤタガラス" },
    { level: 46, type: "妖精", name: "オベロン" },
    { level: 45, type: "堕天使", name: "オセ" },
    { level: 45, type: "鬼神", name: "タケミカヅチ" },
    { level: 45, type: "邪神", name: "パズス" },
    { level: 44, type: "龍神", name: "セイリュウ" },
    { level: 44, type: "妖鬼", name: "ヨモツイクサ" },
    { level: 44, type: "妖魔", name: "ジン" },
    { level: 44, type: "破壊神", name: "ディオニュソス" },
    { level: 43, type: "聖獣", name: "ビャッコ" },
    { level: 43, type: "妖精", name: "セタンタ" },
    { level: 43, type: "鬼女", name: "ヤクシニー" },
    { level: 43, type: "妖獣", name: "モスマン" },
    { level: 42, type: "外道", name: "ファントム" },
    { level: 41, type: "地母神", name: "クシナダヒメ" },
    { level: 41, type: "天使", name: "ヴァーチャー" },
    { level: 39, type: "鬼神", name: "オオクニヌシ" },
    { level: 38, type: "幻魔", name: "クラマテング" },
    { level: 38, type: "魔神", name: "ホルス" },
    { level: 38, type: "妖精", name: "トロール" },
    { level: 37, type: "龍王", name: "ナーガラジャ" },
    { level: 37, type: "夜魔", name: "サキュバス" },
    { level: 37, type: "妖魔", name: "オンコット" },
    { level: 37, type: "堕天使", name: "ベリス" },
    { level: 36, type: "聖獣", name: "スザク" },
    { level: 36, type: "御魂", name: "サキミタマ" },
    { level: 35, type: "地霊", name: "サルタヒコ" },
    { level: 34, type: "魔獣", name: "オルトロス" },
    { level: 34, type: "龍王", name: "ミズチ" },
    { level: 33, type: "軍神", name: "ヴァルキリー" },
    { level: 33, type: "邪神", name: "バフォメット" },
    { level: 33, type: "鬼神", name: "コウモクテン" },
    { level: 33, type: "天使", name: "パワー" },
    { level: 32, type: "鬼女", name: "ヨモツシコメ" },
    { level: 32, type: "御魂", name: "クシミタマ" },
    { level: 31, type: "妖獣", name: "ヌエ" },
    { level: 30, type: "女神", name: "サラスヴァティ" },
    { level: 30, type: "邪神", name: "アラハバキ" },
    { level: 29, type: "堕天使", name: "エリゴール" },
    { level: 29, type: "御魂", name: "ニギミタマ" },
    { level: 28, type: "妖魔", name: "カラステング" },
    { level: 28, type: "龍王", name: "ナーガ" },
    { level: 28, type: "幽鬼", name: "ビシャーチャ" },
    { level: 28, type: "天使", name: "プリンシパリティ" },
    { level: 28, type: "外道", name: "ブラックウーズ" },
    { level: 27, type: "聖獣", name: "センリ" },
    { level: 27, type: "鬼神", name: "ゾウチョウテン" },
    { level: 26, type: "聖獣", name: "カイチ" },
    { level: 26, type: "妖精", name: "ケルピー" },
    { level: 25, type: "夜魔", name: "インキュバス" },
    { level: 25, type: "妖鬼", name: "オニ" },
    { level: 25, type: "妖獣", name: "ライジュウ" },
    { level: 25, type: "御魂", name: "アラミタマ" },
    { level: 24, type: "龍神", name: "ゲンブ" },
    { level: 24, type: "地母神", name: "キクリヒメ" },
    { level: 23, type: "魔獣", name: "バイブ・カハ" },
    { level: 23, type: "妖魔", name: "ディース" },
    { level: 22, type: "神獣", name: "マカミ" },
    { level: 21, type: "聖獣", name: "ユニコーン" },
    { level: 20, type: "妖鬼", name: "モムノフ" },
    { level: 20, type: "堕天使", name: "フォルネウス" },
    { level: 20, type: "鬼女", name: "ターラカ" },
    { level: 20, type: "幽鬼", name: "ラフィン・スカル" },
    { level: 20, type: "精霊", name: "フレイミーズ" },
    { level: 19, type: "妖魔", name: "コッパテング" },
    { level: 19, type: "妖精", name: "ジャックランタン" },
    { level: 18, type: "女神", name: "アメノウズメ" },
    { level: 18, type: "天使", name: "アークエンジェル" },
    { level: 18, type: "魔獣", name: "ネコマタ" },
    { level: 18, type: "夜魔", name: "フォーモリア" },
    { level: 17, type: "鬼神", name: "タケミナカタ" },
    { level: 17, type: "幽鬼", name: "ヤカー" },
    { level: 16, type: "外道", name: "ブロブ" },
    { level: 15, type: "妖獣", name: "バイコーン" },
    { level: 15, type: "精霊", name: "アクアンズ" },
    { level: 14, type: "妖魔", name: "イソラ" },
    { level: 14, type: "龍王", name: "ノズチ" },
    { level: 13, type: "聖獣", name: "シーサー" },
    { level: 13, type: "魔獣", name: "イヌガミ" },
    { level: 13, type: "地霊", name: "スダマ" },
    { level: 11, type: "天使", name: "エンジェル" },
    { level: 11, type: "精霊", name: "エアロス" },
    { level: 11, type: "幽鬼", name: "コロンゾン" },
    { level: 10, type: "妖精", name: "ハイピクシー" },
    { level: 8, type: "妖魔", name: "アプサラス" },
    { level: 8, type: "夜魔", name: "リリム" },
    { level: 7, type: "鬼女", name: "ダツエバ" },
    { level: 7, type: "妖精", name: "ジャックフロスト" },
    { level: 7, type: "精霊", name: "アーシーズ" },
    { level: 7, type: "外道", name: "モウリョウ" },
    { level: 6, type: "妖獣", name: "チン" },
    { level: 6, type: "外道", name: "スライム" },
    { level: 5, type: "地霊", name: "カハク" },
    { level: 4, type: "幽鬼", name: "ガキ" },
    { level: 4, type: "妖鬼", name: "シキガミ" },
    { level: 3, type: "地霊", name: "コダマ" },
    { level: 2, type: "妖精", name: "ピクシー" },
    { level: 1, type: "外道", name: "ウィルオウィスプ" },
  ];
  // ==================================================
  const achievements = [
    {
      title: "東京が死んで僕が生まれた",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/3304988fef954208cca087939d92706d5ed0218b.jpg",
      description: "初めてマガタマを入手した",
      isDone: false,
    },
    {
      title: "アマラ転輪鼓、始動",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/a0dee78b0242a5b1f2ce2051c9403fd54beb5afc.jpg",
      description: "初めてターミナルを使用した",
      isDone: false,
    },
    {
      title: "初勝利",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/7d4b66823879d8f7ef28ad1625a74be2be9339db.jpg",
      description: "初めての戦闘で勝利した",
      isDone: false,
    },
    {
      title: "小さな一歩",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/c92d3f018f57cc4af46fc2cbd975d1d6d2170239.jpg",
      description: "主人公（あなた）が初めてレベルアップした",
      isDone: false,
    },
    {
      title: "初コンタクト",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/d3409f272e00da4d3a773e5237e0558d3164eb17.jpg",
      description: "初めて戦闘中の会話で悪魔を仲魔にした",
      isDone: false,
    },
    {
      title: "変わり果てた東京",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/972f0dbcca232d271f2a66a37ff12fbfd6b957bb.jpg",
      description: "初めてボルテクス界へ降り立った",
      isDone: false,
    },
    {
      title: "初不調",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/f9a4922b64689ee20b39efe27574eee83fe1a8e8.jpg",
      description: "初めてバッドステータスにかかった",
      isDone: false,
    },
    {
      title: "予期せぬ力",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/e3d308e7f43d0df88c655668de5885edb8ee5fb6.jpg",
      description: "仲魔が初めてスキルを変異させた",
      isDone: false,
    },
    {
      title: "新たな姿",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/94ec8fe7fc381577c3dd490fe2031af20255a6be.jpg",
      description: "仲魔が初めて変化した",
      isDone: false,
    },
    {
      title: "禁断の秘術",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/1071b06dc7971bcbbfda0213eed2504d79c27ee8.jpg",
      description: "初めて悪魔合体を行った",
      isDone: false,
    },
    {
      title: "死の安らぎ",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/472e67d196870cfe9589abfe2d7835869428721f.jpg",
      description: "初めてゲームオーバーになった",
      isDone: false,
    },
    {
      title: "踏破の喜び",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/40cd5a54131e300c8e35fe094c179fbe77812a7a.jpg",
      description: "１つのダンジョンのオートマップをすべて埋めた",
      isDone: false,
    },
    {
      title: "プレスターンバトルの修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/3e8bf3921ee35efa09728e51ecfca2412c97da8b.jpg",
      description: "戦闘でＷＥＡＫを１００回突いた",
      isDone: false,
    },
    {
      title: "初制御",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/3240b12689c22562514c72ee9eaea943bdc69639.jpg",
      description: "いずれかのマガタマをマスター状態にした",
      isDone: false,
    },
    {
      title: "人修羅を超え",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/c2bb02211b8f5f7361afde9fba1bf1382442762a.jpg",
      description: "主人公（あなた）の種族名を新たに取得した",
      isDone: false,
    },
    {
      title: "異界トラベラー",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/29621dea3ba05de2b9087e48d8b8c7868e81b87a.jpg",
      description: "ターミナルで転送を５０回行った",
      isDone: false,
    },
    {
      title: "一撃の修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/e91ddcac16bdc28fc817586ab2e196644b53f7b3.jpg",
      description: "一度の攻撃で９９９ダメージオーバー",
      isDone: false,
    },
    {
      title: "ライトゲーマー",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/250cf79c12c335dcc02f9548f006f38bffa8fb95.jpg",
      description: "パズルボーイを１回クリアした",
      isDone: false,
    },
    {
      title: "交渉の修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/69b051e584b908360912bc7069ff01bec3f3f149.jpg",
      description: "戦闘中の会話で３０体の悪魔を仲魔にした",
      isDone: false,
    },
    {
      title: "プロゲーマー",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/09b1c3ad7f3ef7a3eb758aa80041abaebd92954c.jpg",
      description: "パズルボーイをすべてクリアした",
      isDone: false,
    },
    {
      title: "悪魔合体の修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/8aebaf15e7e9af7d2acd4c67c88c96c5bae525be.jpg",
      description: "悪魔合体を５０回行った",
      isDone: false,
    },
    {
      title: "ドリンクマニア",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/0029b62484bd25b49c0cffbfc32d3c6eeac44aab.jpg",
      description: "自動販売機で買える飲み物をすべて購入した",
      isDone: false,
    },
    {
      title: "いっぱしの悪魔",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/056e7b3abc6d931cfe15ca3182023f28f31c66b4.jpg",
      description: "難易度ＮＯＲＭＡＬでクリアした",
      isDone: false,
    },
    {
      title: "マガタマの修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/d9e5e7826b4b7c5582287e4345af50e279617782.jpg",
      description: "すべてのマガタマを入手した",
      isDone: false,
    },
    {
      title: "慕われの修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/4e43fb64b9b9959e353d18cf5b0f04e5b136f32d.jpg",
      description: "仲魔からギフトを１００回受け取った",
      isDone: false,
    },
    {
      title: "遥かなる高み",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/c133c8f33a8d9472bb4141de34fdc149db54e747.jpg",
      description: "主人公（あなた）のパラメータをすべてＭＡＸにした",
      isDone: false,
    },
    {
      title: "期待の指揮官",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/cf624ad20a553afa52e5bd083f80e6b8252a8ba1.jpg",
      description: "いずれかの仲魔のパラメータをすべてＭＡＸにした",
      isDone: false,
    },
    {
      title: "変わらぬ日常、変わる心",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/fc1d12d02b05f23f49a01b9033f79c9081c6b852.jpg",
      description: "日常を創世し直した",
      isDone: false,
    },
    {
      title: "歴戦の悪魔",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/45d33213601d7b6301d71b628588212a806ee74e.jpg",
      description: "難易度ＨＡＲＤでクリアした",
      isDone: false,
    },
    {
      title: "混沌王",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/859a0c0d6eea50f4d08725a73c9f82484ccbbd56.jpg",
      description: "すべてのマガタマをマスター状態にした",
      isDone: false,
    },
    {
      title: "悪魔全書の修羅",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/52c1e5a6acc6ed58e755e5c91e36231b23cf565f.jpg",
      description: "悪魔全書登録率１００％達成",
      isDone: false,
    },
    {
      title: "混沌が残る",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/10ae0f890e3eab0f290fb536ab7a939a6bcdce50.jpg",
      description: "創世を行わない行く末を確かめた",
      isDone: false,
    },
    {
      title: "強く麗しい世界",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/8de97aa194930e537d9ce2b94d5875c6bb5663d2.jpg",
      description: "ヨスガの世界を創世した",
      isDone: false,
    },
    {
      title: "誰も見たことのない世界",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/168250824b1484a2c044a22b198f0f282a462892.jpg",
      description: "ムスビの世界を創世した",
      isDone: false,
    },
    {
      title: "静寂の世界",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/0cc3c15eeffc9e7806e86c3f18b8060573c1325c.jpg",
      description: "シジマの世界を創世した",
      isDone: false,
    },
    {
      title: "創世王",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/080db9f67f6af78330c5013021e0a218ff968e90.jpg",
      description: "すべての結末、世界の行く末を確かめた",
      isDone: false,
    },
    {
      title: "真なる混沌王",
      image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1413480/a5d20e14539ea9ab4b9852b89c10f1038a0473ba.jpg",
      description: "すべての実績を解除した",
      isDone: false,
    },
  ];
  // ==================================================
  let sortedByFinished = true;
  let isTasksDoneArr = JSON.stringify(achievements.map(achievement => achievement.isDone));
</script>

## 禍魂

<table x-data>
  <template x-for="row in magatama">
  <tr>
    <template x-for="cell in row">
      <td x-text="cell"></td>
    </template>
  </tr>
  </template>
</table>

## 惡魔

- [真女神転生３　逆引き悪魔合体一覧](https://xn--68j2b7bjy.jp/shin3/shin3_gdevil.html)
- [悪魔全書コンプリートへの道](https://arl.sakura.ne.jp/dds/nocturned/na00_zensyo.htm)

<table x-data>
  <template x-for="demon in demons">
    <tr>
      <td x-text="demon.level"></td>
      <td x-text="demon.type"></td>
      <td x-text="demon.name"></td>
    </tr>
  </template>
</table>

## 成就

<div x-data>
  <button x-on:click="() => {
    isTasksDoneArr = '[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,false,false,false,true,true,false,false,false,false,false,false]';
    newTasksDoneArrHandler();
  }">My progress</button>

<div class="">
  <div class="">
    <input type="text"
      x-bind:value="isTasksDoneArr"
      x-on:change="newTasksDoneArrHandler" />
    <div>
      <input type="checkbox" id="sortedByFinished"
        x-bind:checked="sortedByFinished" />
      <label for="sortedByFinished">Move finished to bottom</label>
    </div>
  </div>
    <template
      x-for="(achievement, i) in achievements"
    >
      <div class=""
        x-bind:style="achievement.isDone && sortedByFinished && { 'order: 2; opacity: .5;' }"
        >
        <input type="checkbox"
          x-bind:checked="achievement.isDone"
          x-on:change="() => taskDoneHandler(i)" />
        <img class=""
          x-bind:src="achievement.image"
          x-bind:alt="achievement.title">
        <div class="">
          <span class="" x-text="achievement.title"></span>
          <span x-text="achievement.description"></span>
        </div>
      </div>
    </template>
  </div>
</div>
