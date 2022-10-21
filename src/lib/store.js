import { readable, writable } from "svelte/store";

export const tagsSelected = writable([]);

export const randomNav = readable([
  "共同幻想",
  "晴耕雨読",
  "雨天決行",
  "森羅万象",
  "諸行無常",
  "一期一会",
  "有象無象",
  "最短経路",
  "滅尽滅相",
  "残留思念",
  "右往左往",
  "万物流転",
  "片道切符",
  "天声人語",
  "他言無用",
  "有言実行",
  "盛者必衰",
  "沈思黙考",
  "熱願冷諦",
  "自他境界",
  "人身御供",
  "疑似同期",
  "毀誉褒貶",
  "不易流行",
  "テニヲハ",
  // 林纈
  // 翳光
  // Mary Sue
  // Ambivalence
  // Unparalleled
  // palimpsest
  // シズル感
  // ゆめうつつ
  // 兵どもが夢の跡
  // 虚飾で彩られたカラス
  // 禍福はあざなえる縄のごとし
  // 三十六劇
  // ラプラスの悪魔
  // シミュレーション仮説
  // 帰還不能点
  // ジャメヴ
  // 倒語
]);

export const logoLinks = readable([
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
  "https://www.youtube.com/watch?v=ybLKmO5Kq5A",
  // The Influences of Naoko Yamada
  "https://www.youtube.com/watch?v=K_c1gQw6S6Q",
  // Satoshi Kon - Editing Space
  "https://www.youtube.com/watch?v=oz49vQwSoTE",
  // ----------------------------------------
  // Music
  // ----------------------------------------
  // 【Official】Pokémon Special Music Video 「GOTCHA！」
  "https://www.youtube.com/watch?v=BoZ0Zwab6Oc",
  // 『リズと青い鳥』ミュージックPV
  "https://www.youtube.com/watch?v=OGWO3u8zgTU",
  // 坂本真綾 - おかえりなさい (Tomatomerde Remix)
  "https://www.youtube.com/watch?v=wbMe6DmtqMw",
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
  // .
  "https://www.nicovideo.jp/watch/sm36337465",
  // 名の無い星が空に堕ちたら
  "https://www.nicovideo.jp/watch/sm36920659",
  // ヤツメ穴 / 緑仙 (全部僕の声)
  "https://www.youtube.com/watch?v=s3dVPAAEX14",
  // あなたは世界の終わりにずんだを食べるのだ / なみぐる feat.ずんだもん
  "https://www.nicovideo.jp/watch/sm40487046",
  // エレクトロダンスロアなのだ？
  "https://www.nicovideo.jp/watch/sm35222783",
  // にじさんじ - Virtual to LIVE [Official Music Video]
  "https://www.nicovideo.jp/watch/sm35598094",
  // ----
  // ぼくのフレンド
  "https://www.youtube.com/watch?v=83xwNaTUB54",
  // the pillows / Funny Bunny
  "https://www.youtube.com/watch?v=f92VWkYl8CI",
  // TVアニメ「ゆるキャン△」MV～1/6の夢旅人2002ver.～
  "https://www.youtube.com/watch?v=lxt-zHlHd1o",
  // Sigur Rós - Hoppípolla
  "https://www.youtube.com/watch?v=JAYb8ZyjzD0",
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
  // ◆グノーシア　実況プレイ◆part1
  "https://www.nicovideo.jp/watch/sm38184937",
  // ◆VA-11 Hall-A　実況プレイ◆part1
  "https://www.nicovideo.jp/watch/sm41182424",
  // 【ゆっくり解説】平成のゲーム史を振り返ってみた Part1
  "https://www.nicovideo.jp/watch/sm35053910",
  // いんゆめにっき
  "https://www.nicovideo.jp/watch/sm37696367",
  // アダルトゲームの歴史【1981年～1985年】
  "https://www.nicovideo.jp/watch/sm37520821",
  // I miss the internet
  "https://steamcommunity.com/sharedfiles/filedetails/?id=160601394",
  // ----------------------------------------
  // Video
  // ----------------------------------------
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
  // ＬＯＣＡＬ５８ＴＶ - Contingency
  "https://www.youtube.com/watch?v=3c66w6fVqOI",
  // 日本国尊厳維持局 尊厳扶助政府有事宣言時フィルム
  "https://www.nicovideo.jp/watch/sm36221966",
  // [決意表明] 会社辞めてninja250で日本一周 phase 0
  "https://www.nicovideo.jp/watch/sm30344277",
  // blank vhs covers were kinda beautiful
  "https://www.youtube.com/watch?v=e9DfSCk-6Ko",
  // 【手描きにじさんじ】灰に灯る火はブルー【黛灰1st_Storage】
  "https://www.youtube.com/watch?v=oo5F2WVtLA8&t",
  // 【#001】作画オタクVTuber、自己紹介します！
  "https://www.youtube.com/watch?v=RqkAgWTZ98w",
  // 時間は空間から作られる 熱帯雨林気候が時間の概念を破壊する
  "https://www.youtube.com/watch?v=vvV5sz597JY",
  // 「危險心靈Dangerous Mind」
  "https://www.youtube.com/watch?v=yVfk6b4GQb4&list=PLLhKX7btG59fxp8_2xkBHC34Y4pm8fkJa&index=1",
  //
  // Nico
  // ----
  // ニコ厨と見るニコニコで流行ったアニメ
  "https://www.nicovideo.jp/watch/sm35971994",
  // MAD 　 ↑↑↓↓←→←→×○（2020 年 ver）
  "https://www.nicovideo.jp/watch/sm36399404",
  // ニコニコ動画宝島
  "http://www.nicovideo.jp/watch/sm34303211",
  // 敗北々しくて
  "http://www.nicovideo.jp/watch/sm34295558",
  // 【マリオメーカー２】勝利しないと爆発する妹のためにみんなでバトル #1【マリオ３スキン】
  "https://www.nicovideo.jp/watch/sm35323613",
  // 【マリオメーカー２】マリオ、きづけばきょうもまたリンクに
  "https://www.nicovideo.jp/watch/sm36084637",
  // 【マリオメーカー２】やあみんな　おれはリンク　マリオじゃないぜ
  "https://nico.ms/sm36110873",
  // 【マリオメーカー２】マリオ、しょうこりもなくリンクになる,
  "https://www.nicovideo.jp/watch/sm36068301",
  // ぼくらのニコニコはこれからだ！
  "https://nico.ms/sm35744482",
  // イチローのレーザービームで人類滅亡 2019 年 ver.
  "https://nico.ms/sm34810455",
  // 【歌ってみた】お正月の歌を平沢進っぽくアレンジ【Lotus】
  "https://nico.ms/sm36166697",
  // ニコニコ動画の世紀 2019
  "https://nico.ms/sm36069424",
  // 2012 年みたいな MAD に住んでるう p 主はどうすりゃいいですか？
  "https://nico.ms/sm35957126",
  // 全盛期みたいな MAD に住んでるニコ厨はどうすりゃいいですか？
  "https://www.nicovideo.jp/watch/sm35866765",
  // 【合作】らきめっど
  "https://www.nicovideo.jp/watch/sm40730527",
  // ----------------------------------------
  // Article
  // ----------------------------------------
  // 伊丹万作 演技指導論草案
  "https://www.aozora.gr.jp/cards/000231/files/1190_31196.html",
  // 「二次創作を元にした二次創作」を繰り返し、九次創作に至るまでの流れを図解してみました！
  "https://twitter.com/sin_ncd/status/1210874514403291136",
  // ひろゆき「なんだろう、一人で悩むのやめてもらっていいですか」
  "http://tasogarech.blog.jp/archives/7552248.html",
  // ニコニコ動画各時代の流行まとめ
  "https://dic.nicovideo.jp/a/%E3%83%8B%E3%82%B3%E3%83%8B%E3%82%B3%E5%8B%95%E7%94%BB%E5%90%84%E6%99%82%E4%BB%A3%E3%81%AE%E6%B5%81%E8%A1%8C%E3%81%BE%E3%81%A8%E3%82%81",
  // 【ニコニコ動画】七色のニコニコ動画 10 周年祭コメントアートまとめ
  "https://togetter.com/li/1362957",
  // Every Frame a Painting 告別心得感言（中文翻譯）
  "https://brettlin-78528.medium.com/every-frame-a-painting-%E5%91%8A%E5%88%A5%E5%BF%83%E5%BE%97%E6%84%9F%E8%A8%80-%E4%B8%AD%E6%96%87%E7%BF%BB%E8%AD%AF-c46ade3e93db",
  // 谁也成为不了中国的 YouTube
  "https://mp.weixin.qq.com/s?__biz=Mzg5NDY4Nzk1MQ==&mid=2247486790&idx=1&sn=e4a884a158e608fa341f6471baf673a5",
  // 畸形的台灣網路環境 (IP Peering) https://dada.tw/2009/03/24/197/
  // 如果真的要補回哥斯拉系列，應該如何開始？
  "https://moyashi.medium.com/%E5%A6%82%E6%9E%9C%E7%9C%9F%E7%9A%84%E8%A6%81%E8%A3%9C%E5%9B%9E%E5%93%A5%E6%96%AF%E6%8B%89%E7%B3%BB%E5%88%97-%E6%87%89%E8%A9%B2%E5%A6%82%E4%BD%95%E9%96%8B%E5%A7%8B-d8787e891d32",
  // 大卫·格雷伯演讲 "文化不是你的朋友"
  "https://www.douban.com/note/723810639/?_i=45210293AlgCgZ%2C45210663AlgCgZ",
  // 津波と放射能汚染で崩壊していた福島県 双葉町 → 2年ぶりに来たら、とんでもないことになっていた
  "https://rocketnews24.com/2022/08/01/1663113/",
  // こちら側のどこからでも切れます
  "https://anond.hatelabo.jp/20220925180359",
  // ----------------------------------------
  // Manga
  // ----------------------------------------
  // 時間跳躍式完全無劣化転送装置 - 山素
  "https://comic-days.com/episode/3269754496432828238",
  // 鍵がない - 伊藤拓登
  "https://comic-days.com/episode/3270296674337088734",
  // 全力Bird - しのと
  "https://shonenjumpplus.com/episode/316112896884974402",
]);

export const marqueeTexts = readable([
  "馬鹿か！お前は！図体がデカいからって、パイロットが乗ったグランチャーと戦えるほどお前は良く出来ちゃいないんだ！親父達が何と言おうと、お前達は人間を乗せるためのスペースを用意して生まれたんだ！それは何故だかわかるか！？（ﾊﾟﾝｯ）ええっ！？お前達が、この地球の進化の歴史の中で学んだことだよな！人間の反射神経と判断力と感性、それに生殖だけは人間のものを利用するつもりだからな！こいつのコピーは面倒だもんなァ！しかし！力を行使することは自分たちのものにした！ヘッ……人間ってヤツは、力の使い方を知らないエゴイスティックな動物だからだろ？だからお前たちは、お前たちに必要な人間だけを摂取して、地球が育てた生物の生体エネルギーの全てを吸収して、銀河旅行をするつもりだ！……それがお前達だ！けどそういうお前達が、何故かグランチャーとブレンパワードという二つに分かれて生まれた。しかもオスとメスとの関係でもない、もっと根源的に、陰陽とか、プラスマイナスくらいはっきりと反発し合う習性を持ってる。何故だよ！（ﾊﾟﾝｯ）一つで完全無欠に、永遠であるものなど、この世の中には無い！だからこうやって！グチャグチャに生まれてきたんなら、オルファンだってそうだろう！自分の反対にあるものと戦って、探してるものがあるんだろう！ビー・プレートとか、もう一人のオルファンとかさぁ！オーガニックで有機的なものが一つのものであるわきゃないのに！貴様！……お前は！比瑪程度の女にそそのかされて……！！",
  "「世直しのこと…知らないんだな。革命はいつもインテリが始めるが、夢みたいな目標をもってやるから、いつも過激なことしかやらない！」「四方から電波が来る！？」「しかし革命の後では、気高い革命の心だって、官僚主義と大衆に飲み込まれていくから、インテリはそれを嫌って、世間からも政治からも身を引いて世捨て人になる。だったら…」「私は、世直しなど考えていないッ！」",
  "人間は他人を信じないからさ。信じないから疑い、疑うから他人を悪いと思い始める。人間を間違わせるのさ。",
  "世界のデジタル化は、人の弱さを助長し、それぞれだけに都合の良い『真実』の生成を加速している。社会に満ちる『真実』の山を見てみるがいい……。高価な兵器が人道的に人を殺し――犯罪者の人権は被害者のプライバシーより丁重に扱われ――希少動物保護の寄付金が集まる傍らで、貧困に苦しむ人達がいる……。誰もがこう言われて育つわ。他人には優しくしよう。でも競争相手は叩きのめせ！『お前は特別だ』『信じていれば夢はかなう』だけど成功できる人間が一部だけなのは、初めから明らかよね……。君達が『自由』を『行使』した、これが結果だ。争いをさけ、傷つかないようにお互いをかばいあうための詭弁――『政治的正しさ』や『価値相対化』というキレイゴトの名の下に、それぞれの『真実』がただ蓄積されていく。衝突を怖れてそれぞれのコミュニティに引きこもり――ぬるま湯の中で適当に甘やかしあいながら、好みの『真実』を垂れ流す。かみ合わないのにぶつからない『真実』の数々。誰も否定されないが故に誰も正しくない。ここでは淘汰も起こらない。世界は『真実』で飽和する。それが世界を終わらせるのだ。緩やかに。",
  "驚く事はない。これは全て偽物だ。おまえの言う、取るに足らない存在だ。だがな、偽物が本物に敵わない、なんて道理はない。おまえが本物だというのなら、悉くを凌駕して、その存在を叩き堕とそう。いくぞ英雄王―――武器の貯蔵は十分か。",
  "狂人の真似とて大路を走らば、即ち狂人なり。悪人の真似とて人を殺さば、即ち悪人なり。驥を学ぶは驥の類ひ、舜を学ぶは舜の徒なり。偽りても賢を学ばんを、賢といふべし。",
  "人生は何事をもなさぬにはあまりに長いが何事かをなすにはあまりに短い",
  "孤独に歩め。悪をなさず、求めるところは少なく。林の中の象のように。",
  "「さぁ始まるザマすよ！」「行くでがんす」「ふんがー」「まともに始めなさいよ！！」",
  "あんたが全部あたしのものにならないなら、あたし、なにもいらない",
  "こっちはそんなの全部わかっててエンタメを提供してんの",
  "お前が何を見たとしても………信じろ、信じるということはそういうことだ。",
  "我、生きずして死すこと無し。理想の器、満つらざるとも屈せず。これ、後悔とともに死すこと無し。",
  "嗚呼、斑鳩が行く・・・・・・望まれることなく、浮き世から捨てられし彼等を動かすもの。それは、生きる意志を持つ者の意地に他ならない。",
  "よく来た。ここは１番目の「お前の場所」だ。しかし、今は私の場所だ。奪い返せばよい。…できるものなら。",
  "「さよなら‥‥」いつか聞いた言葉‥‥。「さよなら‥‥」いつも聞いた言葉‥‥。「さよなら‥‥」僕が聞きたかった言葉‥‥。「さよなら‥‥」僕が望んでいた言葉‥‥。「さよなら‥‥」最後の言葉‥‥。「さよなら‥‥」最期の言葉‥‥。「さよなら‥‥」彼女の唇はさよならのカタチをえがいて、こわばる。",
  "「ファイヤー」「アイスストーム」「ダイアキュート」「ブレインダムド」「ジュゲム」「ばよえ～ん」「ばよえ～ん」「ばよえ～ん」",
  "この物語はフィクションである。……が、１０年後においては定かではない。",
  "全部俺のもんだ！孤独も、苦痛も、不安も、後悔も…もったいなくてタナベなんかにやれるかってんだよ！",
  "宇宙服ごしに死の世界と隣り合って暮らしていく方法。誰でも知ってるようなことさ。オレァ、カンが悪いから、気づくのが遅れたよ。",
  "「結局何だったのかしら、あの歌」「ただの流行歌よ」「流行歌？」「何万年も昔に異星人の街で流行った、当たり前のラヴソング」",
  "「思い通りに生きろ。生きられる限りな。新しい世代か。ここは生き甲斐のある世界だった。しかし、私が正しいと信じて生きてきた時代は終わったようだ。うらやましいよ、お前たちがな。矢作省吾、もう二度と会うことはないだろう…！」",
  "失われたものの痛みは、いやされるのか？あらゆる孤独と悲しみの理由を知る日は、いつかくるのか？",
  "あなたは赤い部屋が好きですか？",
  "そうです。あのコが僕の畏敬する天使様なのです",
  "そいつはただ……ひとりぼっちだっただけさ。自分以外の誰ともゲームを楽しめない。……夢の中で生きてるような……そんな男だった",
  "グーで負けた。グーで負けるというのは、保守的なために敗北したかのような、苦い後悔が残るものだ。",
  "このハンバーガーとコーラは世界で一番売れている　だから世界で一番美味いものに決まってるだろ",
  "ナンデモナイヨ、タダ、マミヤクンガトビオリタダケダヨ。",
  "（・・・日記はここで終わっている）",
  "戦争を知らない世代――命へのリアルな気持ちが欠損していたのかも知れない――ゆえにあの頃――あの時代にそった青春と環状の歯車がガッツリかみ合ったのかも――そんな仲間たちが――そんな男たちが――あそこには大勢いた気がする",
  "生きるって、恥ずかしいことなんだ。もしかしたら世の中には、カッコ良く生きられる人もいるかもしれないけど、僕は知らない。そうじゃない。右往左往してジタバタして、カッコ良くなんかなくて。みっともなくて。自分を嫌いになりそうな毎日だ。でもここにいる。生きている。だから君も、生き恥をかいて、生き続けよう。みっともなくて、恥ずかしくて、逃げ出したくなる記憶と共に、生き続けよう。",
  "経験は思考から生まれ、思考は行動から生まれる。",
  "やあ、久しぶりだね。君は、自分のなりたい大人になれたかい？",
  "おおらかな気持ちでいることも、りっぱな公共心です。",
  "言語は思考を規定する",
  "このような運動を起こすとき、起こした最初の人、つまりリーダーがいつも過大評価される傾向にあります。しかし、お気づきのように、より評価されるべきは2人目のフォロワーなのです。2人目がいなければ、1人目はただの「変な人」で終わってしまうかもしれません。そこで、デレク・シヴァーズはこう言います。「本当に運動を起こそうと思うなら、リーダーについて行く勇気を持ち、他の人達にもその方法を示すことです。素晴らしいことをしている孤独なバカを見つけたら、立ち上がって参加する、最初の人間となる勇気を持ってください」と。",
  "なんで寺院に機械があんだよ！教えはどうなってんだ教えは！お前ら禁じられた機械を　平気で使ってんじゃねえか！分かってんのか！？｢シン｣が生まれたのは　人間が機械に甘えたせいだろうが！金取んのかよ！？くそったれ！",
  "そういう　して＂あげた＂から、して＂もらえる＂という思考は　ツライ人生になりましてよ～‼",
  "あの頃のインターネットは終わったんだ。もうあの時間は終わって、君も人生と向き合う時なんだ",
  "君は永遠にそいつらより若い",
  "深刻なエラーが発生しました",
  "きっと何者にもなれないお前たちに告げる",
  "夏の情景に包まれて、穏やかに流れる日々。陽射しの中で繰り返される、少女たちとの出会い。夏はどこまでも続いていく。青く広がる空の下で。彼女が待つ、その大気の下で。",
  "否定的な批評を行うことは容易である。なぜならば、どんなものでも、じっくりとよく見れば欠点を見つけることは常に可能だからである。もっぱら欠点に注意を向け、価値あることを無視することはしごく容易なことである。しかし批評の主たる魅力は、批評されているものよりも批評している者のほうが偉く見えることである。批評することはきわめて容易なので、それはしばしば、他のいかなる方法によっても人の興味を引くことができない凡庸な輩の避難所となる。",
  "4万円貸してくれませんか？必ず来月には返すのですが……",
  "火は一日で森を灰にするが、水と風は百年かけて森を育てる",
  "ここに来て一年になるが、ケイスはまだ電脳空間の夢を見、希望は夜ごとに薄れていく。”ナイト・シティ”でこれだけ覚醒剤をやり、あれだけ肩代わりし、危ない橋を渡ってきても、眠るときに見るのはマトリックス。無色の虚空に広がる、輝くロジックの格子ーー",
  "何、それは本当かね！？それは…気の毒に…",
  "その代はりに、無機的な、からっぽな、ニュートラルな、中間色の、富裕な、抜け目がない、或る経済大国が極東の一角に残るのであらう。",
  "人生に似てますね",
  "夏草や兵どもが夢の跡",
  "五月雨を集めて早し最上川",
  "力が…欲しいか…",
  "明日の犠牲者は以上です",
  "時代や環境のせいじゃなくて… 俺が悪いんだよ",
  "刻まれていく時が、退屈な一日に変わる　君は何気なく、時間を無駄に過ごす　故郷の狭い土地をうろついて　道を指し示してくれる何かを待っている",
  "「待ってください。アムロさん。僕はあなたに聞いてるんです。シャア・アズナブル。何の用です」「君を迎えに来た、カミーユ・ビダン」「聞けませんね」「ではどうすればいいというのだ、カミーユ」「みんな死んだんだ。エマさんも、アポリー中尉も、ヘンケン艦長も。あの戦争で死んでいった人たちは、それで世界を変えられると思っていたから、死んでいったんです。みんな、あなたを信じたんだ。なのにあなたは僕らの前から消えて、ネオ・ジオンの総帥となって戻ってきた。それでやることが地球つぶしだっていうんですか！？そんなバカな話はない！あれは一体何のための戦いだったんです！？シャア・アズナブル！」「言いたいことはわかるが、今はそんな状況ではない」「あなたはいつもそうだ。いつもいつもそうやって自分一人違う場所にいようとする。」「誰かが人類の業を負わねばならんのだ」「言ったはずだカミーユ。戦士は生きている限り戦わねばならんのだ。生きている者がすべきことがある。それをすることが、死んだ者への手向けにもなるのだ」「……わかりましたよ。協力はします。でもね、僕は絶対あなたを許しませんよ。シャア・アズナブル。それを忘れないでいてもらいましょう」",
  "俺より強い奴に会いに行く",
  "生きたいと思う心が欠如している程度では、残念ながら、死にたいと思うには不十分だ。",
  "「私には愛する人などいないし、自分自身もいつ死んでもかまわないと思っている」という応答に強い説得力があるのは、自分がいつ死んでもよいと思っている者に対して、いかなる倫理も無力であることを、それが教えてくれるからである。何よりまず自分の生を基本的に肯定していること、それがあらゆる倫理性の基盤であって、その逆ではない。それがニーチェの主張である。だから、子供の教育において第一になすべきことは、道徳を教えることではなく、人生が楽しいということを、つまり自己の生が根源において肯定されるべきものであることを、体に覚え込ませてやることなのである。生を肯定できない者にとっては、あらゆる倫理は空しい。この優先順位を逆転させることはできない。",
  "「なんとかなるよ、絶対だいじょうぶだよ」",
  "ネタからベタへ",
  "土地の独占所有は社会を腐らせる。GAFA はユーザーが離れたら終わりだが、土地所有は永遠。",
  "自分たちと異なる存在を、叩くことは簡単だ。だが彼は、どこまでも分かり合おうとした。どんなに対立しても、分かり合えると信じ続けた。たとえ裏切られ、傷つき、倒れ、力尽きても。なぜなら彼はお互いの理解の先にこそ、希望があると知っていたから。彼の背中を目指し、わたしたちは歩んでいきたい。55 年前に、未来があった。",
  "そんな思い出も時間と共にやがて消える。雨の中の涙のように。死ぬ時が来た。",
  "やはりエジプトか…いつ出発する？わたしも同行する",
  "面白きこともなき世をおもしろく",
  "生きてるだけでえらい",
  "「ソ連では希望こそ思想の中心である。階級が無く、淑女や紳士がおらず、誰もが友人であるような国にいるということ、それは稀に見るすがすがしい経験だった。明日、私はこの希望の土地を去り、我々の絶望の国へ帰る」（バーナード・ショー）",
  "名前を隠して楽しく日記。",
  "たったひとつの命を捨てて、生まれ変わった不死身の体。鉄の悪魔を叩いて砕く。キャシャーンがやらねば、誰がやる！",
  "花に嵐のたとえもあるぞ、さよならだけが人生だ",
  "…我々は、一人の英雄を失った！しかし、これは敗北を意味するのか!?否、始まりなのだ！地球連邦に比べ、我がジオンの国力は三十分の一以下である。にもかかわらず、今日まで闘い抜いてこられたのは何故か!?諸君!!我がジオン公国の戦争目的が正義だからだ！これは諸君らが一番知っている。我々は地球を追われ宇宙移民者にさせられた！そして一握りのエリートが、宇宙にまで膨れ上がった地球連邦を支配して五十余年！宇宙に住む我々が、自由を要求して、何度、連邦に踏みにじられたか！ジオン公国の掲げる、「人類一人ひとりの自由の為の戦い」を、神が見捨てるわけはない！…私の弟、諸君らが愛してくれたガルマ・ザビは死んだ！何故だ!?戦いは、やや落ち着いた。諸君らはこの戦争を、対岸の火と見過ごしているのではないか!?ガルマは諸君らの甘い考えを自覚させる為に死んだ！諸君の、父も、兄も、子も、その連邦の無思慮な抵抗の前に死んでいったのだ！この悲しみも、怒りも、忘れてはならない！それをガルマは、死を以て我々に示してくれた！我々は、この怒りを結集し！連邦軍に叩き付けて、初めて真の勝利を得る事が出来る！…この勝利こそ、戦死者全てへの最大の慰めとなる！国民よ！悲しみを怒りに変えて！立てよ、国民よ!!我らジオン公国々民こそ、選ばれた民である事を忘れないで欲しいのだ！優良種たる我らこそ、人類を救い得るのである!!ジーク・ジオン！！",
  "「絵」を描くという作業は『無限』である。どこで終わっていいのか、一枚をずーっと描いてられる。そして『物語』。仮に「恋人」が穴の底に落ちている設定があって、そこに「嫌いな友人」を身代わりに突き落とすと、その『恋人』は命が助かるという状況があったとしたなら、もし、あなたならどうしますか？　嫌いなヤツを突き落とす？　それは「正しい行動」じゃない気がする。考えると『無限』に答えが出なくなってしまう。ちなみに「絵」は、自分の「心」が終わりとした時が完成。自分勝手だと思う。",
  // https://twitter.com/simonmoulin/status/1574765192596299778
  "「始まってもないのに騒ぐな」「決まったことに文句言うな」「やってる最中に水差すな」「終わったことを蒸し返すな」「やったことの評価は歴史家に委ねたい」「証拠出せよ」「いつまでやってんだよ」「仮定の質問には答えられない」「個別の件には答えられない」「訴状が届いていないのでコメントできない」「係争中につきコメントできない」「判決が出たのでコメントを控える」",
  "あなたを詐欺罪と器物損壊罪で訴えます！理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！覚悟の準備をしておいて下さい。ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。慰謝料の準備もしておいて下さい！貴方は犯罪者です！刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！",
  "メロスは激怒した。必ず、かの邪智暴虐の王を除かなければならぬと決意した。メロスは政治がわからぬ。メロスは、村の牧人である。笛を吹き、羊と遊んで暮して来た。けれども邪悪に対しては、人一倍に敏感であった。",
  "オヤジ オヤジとゴロツキ共に慕われて…家族まがいの茶番劇で海にのさばり……何十年もの間 海に君臨するも 「王」にはなれず…何も得ず……!!終いにゃあ口車に乗った息子という名のバカに刺され…!!それらを守る為に死ぬ!!!実に空虚な人生じゃあありゃあせんか？",
  "私、いつまでもレイバーが好きなだけの女の子でいたくない。レイバーが好きな自分に甘えていたくないの。──お願い、車出して",
  "一日を変え、一生を変えるカクテルを！",
  "怖かろう、悔しかろう。例え鎧をまとおうと、心の弱さは守れないのだ…！",
  "Lain is omnipresent, existing everywhere.",
  "Make me sad, Make me mad, Make me feel alright.",
  "I thought what I'd do was, I'd pretend I was one of those deaf-mutes. or should I?",
  "Weaving the Web: The Past, Present and Future of the World Wide Web by its Inventor.",
  "I always wonder why birds choose to stay in the same place when they can fly anywhere on the earth, then I ask myself the same question.",
  "I need you.",
  "Experience is the name everyone gives to their mistakes.",
  "Colorless green ideas sleep furiously.",
  "Небо очень и очень темное , а Земля голубоватая .",
  "「這是冒險的終結嗎？世間的一切都沒有終結。我們來此尋找長生不老的秘密，是為了要成為神？我們是人，人類永遠都是凡人，雖然我們沒有獲得長生不老，但至少我們獲得了真實，我們開始於神話，現在我們要回到現實，不過……這個生活是真實的嗎？不，這只是電影，攝影機往後拉。」",
  '正如要有林林總總部份才能組成一個完整的人，而其中每一部份又要有千差萬別，才得以構成迥然不同之人，異於他人的面容，下意識裡的聲調，夢醒時所見的手掌，兒時的記憶，未來的命運，以及我的電子腦所觸及的信息海洋，所有的這一切，孕育了「我」，個人意識的升華，使我意識到自我的存在，同時也將我限定在"自我"之中。「孩童之時，所言俱為孩童，所感如是孩童，所思亦復孩童，唯成年之後，便將童心擯棄。」（哥林多前書 13 章-11）',
  "如果你關心的只是故事，或者可能人設，「那作畫到底有什麼重要的？」是這樣，如果故事在那頭，你在這頭，我們如何讓故事從點 A 到達點 B？我們透過音效、配音、作畫以及其他，你可以想出很多其他元素，不過把故事打包起來運送，我們叫它「敘事」，而為了達到好的敘事，你需要很多藝術家一起來思考這個非常困難的問題，「我們怎麼才能把故事講得最好？」正是他們創造性的答案，決定了他們藝術成品的效果。你可能見過有著非常好故事的動畫被沒勁的敘事拖後腿，你也可能見過非常沒營養的故事，而被非常刺激和富有想像力的敘事所挽救的動畫。你可以將其歸功於導演瞭解如何使用他的作畫團隊，不過確實是動畫家們在做真正的思考，思考「我如何透過動作來表達」、思考「我如何畫一系列的畫來讓觀眾與我筆下的角色感同身受」、思考「我如何讓觀眾理解我的角色所遭遇的經歷」。這就是敘事的本質，動畫家正位於其前線和中心。有些作品很匆忙的製作出來，而沒有人有時間在乎這個問題，導演沒功夫在乎，他就隨手拿漫畫分格當分鏡用，動畫家也沒功夫在乎，因為所有的原畫都被送到海外代工了，當一部片導演沒人在乎、動畫家沒人在乎，所有重要的「我們怎麼才能把故事講得最好」的問題就都沒人回答了。這就是為什麼好的作畫對於高品質敘事的包裝是重要的。最好的電影、電視動畫有一整個團隊，充滿了富有創造力的藝術家，讓他們的血淚和汗水融入到故事的運載工具中，即我們稱的「動畫」，紙面上故事裡要是寫著「某件事情發生了，角色很傷心」，但是卻需要藝術家們的技巧與熱情，來使這些情感和經歷變為真實。",
  "手塚治虫訪談「我與咖啡和紅茶共伴至深夜…」我最近突然在思考，我在畫的其實並不是「畫」。（中略）而要說我畫的是什麼，我認為是類似象形文字的東西。我筆下的人物，在驚訝時眼睛會變圓，生氣時會像鬍子大叔那樣皺起眉頭，或是整個頭部伸直。（笑）沒錯，這裡頭是有規律的。也就是說，它們是種符號。而把各種不同的符號組合起來，就會變成類似於畫的東西。（中略）漫畫對我而言，只是種表現手段的證書，我覺得實際上我並不是在畫畫，而是用一種特殊文字在寫故事。",
  "「我當然不會說那是個糟糕的電影，不過，基本上無論什麼娛樂都只是一時的，而且也應該如此，像這種沒有開始也沒有結束，只是一味迷住觀眾使其無法離開的電影，不管它是多了不起的東西，只是有害無益。」「哦，很嚴厲的批評呢，你是不是想說觀眾有自己應該回到的現實呢？」「是的。」「在這裡的觀眾中，也有人一回到現實就會遭到不幸，如果你把那些觀眾的夢想奪走，你承擔得起責任嗎？」「承擔不起啊。但正是在現實生活中拼搏，夢想才有意義，只是把自己投射到別人的夢想裡的話，跟死又有什麼兩樣。」「真是一個現實主義者啊。」「如果你把逃避現實叫做浪漫的話。」「好個堅強的女孩呢。什麼時候你堅信的現實建構完成了，再來叫我們吧。那時我們會從這個電影院裡出來的。」",
  "我不會忘記。今年發生的事，今天的事，星期一晚上的事。即使我們無法停止時間，仍能如此將其化為回憶。季節的空氣與氣溫、聲響和氣味與體溫，觸及肌膚的感受，會成為書籤帶我重回舊地。禮拜一是得面對自己的無價值與無力的一天。不管是街道、世界還是生活，這座小鎮實在太狹小了。我討厭禮拜一。因為又是仍不習慣的校園生活。沒辦法和朋友玩耍或運動。我該怎麼辦好。該拿這種心情怎麼辦好。我比大家都還孩子氣，大家都比我成熟。為什麼我沒辦法變成像大家那樣呢。大家是怎麼成為大人的呢。",
  "得到幸福的兩個開關，一個是吃下好吃的食物、沈浸在自己的興趣裡⋯只要自己一人就能夠按下的開關，另一個是被他人稱讚、認同，不是由他人按下就無法感受到幸福的開關。能由自己按下的開關雖然得到的幸福僅是輕微而少量的，但能在自己想要的時候按下。由他人按下的幸福開關所得到的幸福卻是強烈的，會希望他人能夠不斷地按下而欲罷不能。反之則會覺得不安和不滿滿溢而出，失去自信。最後就會變得覺得只要能讓他人按下開關什麼都願意去做，舞台就是讓他人按下開關的所在。在上面會覺得只要能受到歡迎什麼都會去做，即使是把自己的一切都出賣了，總之就是希望他人能夠按下開關。回過神來也許會發現失去了重要的東西。那⋯那麼該怎麼做才能避免這樣的事情發生呢？要把呈現出去和不呈現出去的東西分開來，呈現出去的就是「技藝」，想繼續站在舞台上，就得去磨練自己的技藝。",
  "因為要自己幫自己下決定很麻煩啊。自己絕對說不上是正確的。但也沒人能說這是錯的。所以只要有人說了該怎麼做就好，不管那是電視的星座占卜還是糖果包裝紙上的占卜，都沒什麼差別。",
  // https://nico.ms/sm34491960
  "世值大炎上時代，人們渴求著放火……我們不可招惹他人的不悅。要盡可能地避開使人反感的行動。各位知道為什麼你能夠存在在這個網路上嗎？因為整個社會願意不來群毆你！我們必須要持續求得社會上大多數人的許可！能讓我們享受網路和平的方法，就是持續獲得周遭人們的容許！我們只能對自己擴散出去的資訊做過最大程度的思慮之後，不斷祈求著「拜託請大家放過我」！唉呀？為什麼你不祈禱？難道你認為只要不做壞事就沒事，只要當個好人就好了嗎？不，你會死！我們不可能成為滿分的人！最多就是 99 分的存在！只要剩下那 1 分的部份，被聚焦到就會死亡！擴散訊息者為了避免被責難，絕不能犯下任何一點過錯，但接收訊息者只要發現一點錯誤，就能進行譴責！現在你已經被困在數萬接收者所提出極具魅力的是非問題中了！請你不讓眾人打出否定的答案！你做得到嗎？況且假使你真的是個滿分的人，你認為普通人有辦法理解嗎？實際上不管是非對錯如何，只要有了一定數量的人怎麼想，遊戲就已經結束了！",
  "「人類是透過說故事跟聽故事來探索跟理解世界的，而政治通常就是舊故事跟新故事之間的競爭。」ーー喬治．蒙比奧特",
  // ----------------
  "嗨（´・ω・｀）歡迎來到波本酒屋。這杯龍舌蘭是請你的，先喝了冷靜下來吧。嗯，「又是我」。不好意思。俗話說事不過三，我也不覺得道歉就能得到原諒。但是，我相信當你看到這則頁面的時候，你一定會感受到某種言語無法表達的，類似「雀躍」的東西。希望你在這動盪的亂世裡，不要忘了這種心情。帶著這樣的想法，我製作了這則頁面。那麼，你要點什麼呢。",
  "「願意聽別人說話的人並不多。每個人都只想說話，而說的話又不是什麼有內容的話。我也是其中之一。」",
  "「該說的話都已經被說過，但是因為沒人在聽，所以還得全都再說一遍。」",
  "會想求死，是因為滿是不安，會感到不安，是因為有所願，向世界，向自己所祈願的姿態顯得過於巨大，使得雙腳發抖，無法動彈，若是動起身來，就會無法保住自己的願望，你並不是想死，而是想以所願的姿態活著吧。願望是，非得要實現不可的嗎？",
  // "紀子「矢吹你…不會覺得寂寞嗎？其他同齡的青年們帶著情人走遍高山藍海歌頌青春，你卻只是日覆一日關在滿是汗水、凡士林與松脂味的體育館裡，跳著跳繩、做柔軟體操、空揮練拳、敲擊沙包。提到有什麼比較亮麗鮮明的回憶，也只有處在眩目照明的，牢籠般的拳擊場中，散遍著香菸煙霧的鬥技場，丟出椅墊嘲諷的酒醉客人，像鬥雞與鬥犬般互毆至滿頭鮮血的生活…而且明明身高還有成長的可能性，卻要為了控制體重，不能盡情飲食，這實在太不堪、太悲慘了。要將這稱作青春，實在太昏暗了！」矢吹「我不太會說話…但我不是因為有所虧欠，或是欠下人情才在打著拳鬥的。因為我喜歡拳鬥，所以才走到了現在。也許這和小紀你講的歌頌青春有點不同，但我至今已在滿是鮮血的拳擊場上，嘗過了數次那種燃燒般的充實感…這和那種無法點燃、不完全燃燒的虛煙可不同了。雖然僅有短短的一瞬間，但它燃燒得可刺眼了。之後，只留下純白的灰燼…不留一絲未燃的餘燼…純白的灰。我在接觸拳鬥之前，從未嘗過這種充實感。你能瞭解嗎，小紀，我不是因為有所虧欠，或是欠下人情才在打著拳鬥的。因為我喜歡拳鬥，我喜歡這種發狂似地咬緊對方的充實感。」",
  "說到虹色，也許很多人會聯想到的是「七色」，但在日本的傳統顏色裡，「虹色」指的是帶有些許黃色的，淡薄的紅色。以照片來說的話，虹色所指的並不是彩虹的本身，而是天空的顏色。為什麼這個顏色會被稱為虹色，說來有些不可思議。源由是「淡薄的紅色會因為光的反射，使得青色調或紫色調顯得更加強烈，呈現出各種不同的顏色，因而得名」。",
  "いつでも捜しているよ　どっかに君の姿を　カバンの中も 机の中も　探したけれど見つからないのに　それより僕と踊りませんか　朝が来るまで終わる事のないダンスを　踊ってない夜を知らない　踊ってない夜が気に入らない　君は知ってるかい？　踊らな死ぬ事を",
]);

export const randomImages = readable([
  "https://i.imgur.com/tdh6Lx8.png",
  "https://i.imgur.com/JuPO2pq.png",
  "https://i.imgur.com/wfrGELX.png",
  "https://i.imgur.com/mDbpu8Y.png",
  "https://i.imgur.com/qXRNc2f.png",
  "https://i.imgur.com/A3mWcEM.png",
  "https://i.imgur.com/lYVTGos.png",
  "https://i.imgur.com/R6mXTLQ.png",
  "https://i.imgur.com/FrB5LXZ.png",
  "https://i.imgur.com/BaLhn5v.png",
  "https://i.imgur.com/VjGDpsw.png",
  "https://i.imgur.com/u4DyT6c.png",
  "https://i.imgur.com/RmYyZX6.png",
  "https://i.imgur.com/e0ebkFy.png",
  "https://i.imgur.com/gHbQvYY.png",
  "https://i.imgur.com/zT1ex8v.png",
  "https://i.imgur.com/E5TWzEs.png",
  "https://i.imgur.com/iepJccR.png",
  "https://i.imgur.com/9SOlqJV.png",
  "https://i.imgur.com/rssA92w.png",
  "https://i.imgur.com/XHOlLwQ.png",
  "https://i.imgur.com/vCT9925.png",
  "https://i.imgur.com/VKSRtGQ.png",
  "https://i.imgur.com/61yWlp6.png",
  "https://i.imgur.com/frsPyaZ.png",
  "https://i.imgur.com/SgwJ0Yq.png",
  "https://i.imgur.com/rAstT0L.png",
  "https://i.imgur.com/WRO0rKZ.png",
  "https://i.imgur.com/ejmGCmo.png",
  "https://i.imgur.com/R0WyN9z.png",
  "https://i.imgur.com/7vSdphr.png",
  "https://i.imgur.com/KuewX4i.png",
  "https://i.imgur.com/4toHY6r.png",
  "https://i.imgur.com/4DYRfUT.png",
  "https://i.imgur.com/nZK2mYW.png",
  "https://i.imgur.com/sPDfxLs.png",
  "https://i.imgur.com/s4UfYv6.png",
  "https://i.imgur.com/cIApMDY.png",
  "https://i.imgur.com/erCA0z0.png",
  "https://i.imgur.com/BORBf45.png",
  "https://i.imgur.com/3MZQxxR.png",
  "https://i.imgur.com/8vy0ZIR.png",
  "https://i.imgur.com/42Tpjp6.png",
  "https://i.imgur.com/wgAOJuq.png",
  "https://i.imgur.com/K6TnpsB.png",
  "https://i.imgur.com/mAvTlnE.png",
  "https://i.imgur.com/d4T5Cns.png",
  "https://i.imgur.com/Uid1k2O.png",
  "https://i.imgur.com/Ag6GpPi.png",
]);

export const aboutImages = readable([
  // === Lain ===
  "https://media4.giphy.com/media/PZrjGkr334fXa/giphy.gif",
  "https://media0.giphy.com/media/udK21RQeWtaGQ/giphy.gif",
  "https://c.tenor.com/AL_kKT7aS9IAAAAC/serial-experiments-lain-yasuo-iwakura.gif",
  "https://c.tenor.com/_v4H6lwCZZ0AAAAC/serial-experiments-lain-lain.gif",
  "https://c.tenor.com/1nD0WjJfRr4AAAAC/lain-lain-iwakura.gif",
  "https://c.tenor.com/rz-36T9kAEIAAAAC/lain-playstation.gif",
  // src: https://tenor.com/view/anime-girl-gif-24497284
  "https://c.tenor.com/xK6H41lmjrQAAAAC/anime-girl.gif",
  "https://c.tenor.com/I2pOVoq3YAIAAAAC/lain-serial-experiments.gif",
  // === Anime ===
  "https://cdn.discordapp.com/attachments/942800436996505670/999437255263395900/IMG_7551.gif",
  // src: https://media4.giphy.com/media/nlk3Y1u3r1n5C/giphy.gif
  "https://64.media.tumblr.com/tumblr_m50esawubi1qghl49o1_r1_500.gifv",
  // src: https://media0.giphy.com/media/jsoMtBuP1Ahpu/giphy.gif
  "https://64.media.tumblr.com/697566623f56a200b381fa731c5d4b15/tumblr_merrziLMqG1qghl49o1_r1_500.gifv",
  "https://c.tenor.com/Ky-q-qGYd4AAAAAC/darker-than-black-dtb-hei.gif",
  "https://i.imgur.com/P3EwTea.gif",
  "https://c.tenor.com/aHBrM0hpUokAAAAC/air-airtv.gif",
  "https://c.tenor.com/tFggqYir3gEAAAAC/brain-powerd-brain-powered.gif",
  "https://c.tenor.com/ALHc1ovczTYAAAAC/dio-dio-brando.gif",
  "https://c.tenor.com/4oLj8LDw_-sAAAAC/digimon-tai.gif",
  "https://c.tenor.com/NrQ9k6ZJUk4AAAAC/edward-elric-fma.gif",
  "https://c.tenor.com/zPSOb4Cni_sAAAAC/fullmetal-alchemist-edward-elric.gif",
  "https://c.tenor.com/_Lsj1f5ioPEAAAAC/haman-gundam.gif",
  "https://c.tenor.com/GqWOrKpj8UAAAAAC/gundam-amuro.gif",
  "https://c.tenor.com/urtf9xuBAaMAAAAC/tengen-toppa.gif",
  // "https://c.tenor.com/0v63YjpRCuQAAAAC/madoka-magica.gif",
  // "https://c.tenor.com/Ads_EGsOaioAAAAC/promare-anime.gif",
  "../assets/promare-anime.gif",
  "https://c.tenor.com/iF2QagbiCSIAAAAC/eureka-eureka-seven.gif",
  "https://c.tenor.com/R27oaZQSMi4AAAAC/haibane-renmei-ailes-grises.gif",
  "https://c.tenor.com/zLBsleCsdOQAAAAC/akane-shinj%C5%8D-shinjou-akane.gif",
  "https://c.tenor.com/d6b6YPHSgYoAAAAC/scopedog-votoms.gif",
  "https://c.tenor.com/cT2SyKjw22IAAAAC/unlimited-blade.gif",
  "https://c.tenor.com/WVimaSM0jRMAAAAC/fate-heavens-feel3-heavens-feel3.gif",
  "https://c.tenor.com/xCide_38qFgAAAAC/cardcaptor-sakura-clear-card-sakura-kinomoto.gif",
  "https://c.tenor.com/eMnHWu4TCTEAAAAC/di-gi-charat.gif",
  "https://media.tenor.com/qvCwTpl0zTcAAAAC/ghost-in-the-shell-kokaku-kidotai.gif",
  // === Game ===
  "https://c.tenor.com/SjuAbL0uMakAAAAC/yume-nikki-yume.gif",
  "https://c.tenor.com/6L6itJ6PXKoAAAAC/chrono-trigger-courtroom.gif",
  "https://c.tenor.com/0lv-4Uu_h_EAAAAC/giygas.gif",
  "https://c.tenor.com/43Sbat6QfUoAAAAC/xenogears-mecha.gif",
  "https://c.tenor.com/e6DP5Mypb2MAAAAC/xenogears-cross.gif",
  "https://c.tenor.com/8LexFYcsTmQAAAAC/va11hall-a-jill.gif",
  "https://c.tenor.com/TCEyVCo9wG0AAAAC/dark-souls-bonfire.gif",
  "https://s3.amazonaws.com/com.twilio.prod.twilio-docs/original_images/1tFKtacF7rSNxnHmwfYKSOFzQU6p2XU3MdUtBdhS4n5pRfCHrvlpNaEK9fMLXkgu9Ys-04iEuX.png",
  // src: https://tenor.com/view/namco-x-capcom-anime-video-games-kosmos-xenogears-gif-16674177
  "https://c.tenor.com/Z44G6YGKlnkAAAAC/namco-x-capcom-anime.gif",
  "https://c.tenor.com/cd2lzZRW9WUAAAAC/omega-zero-megaman.gif",
  "https://i.imgur.com/gL1P7Q1.gif",
  "https://i.imgur.com/IrvMtvX.gif",
  // === Pixel art ===
  "https://c.tenor.com/-GZI0TXyO-AAAAAC/subway-yuri.gif",
  "https://c.tenor.com/BrNtIejIcXUAAAAC/pixel-art.gif",
  "https://c.tenor.com/a6pDrWf6gJgAAAAC/pixel-city-art.gif",
  "https://cdn.discordapp.com/attachments/980799725068488704/980843396291772446/image0.gif",
  // === Movie ===
  "https://64.media.tumblr.com/414c6d09204aba6b054341b45b68758d/tumblr_n381ofewGD1qghl49o1_r1_500.gifv",
  // "https://64.media.tumblr.com/4c10be689ac1391fc24526008320e33b/tumblr_moro5oFd9n1qghl49o1_r1_500.gifv",
  // "https://c.tenor.com/6-OKnddIaaIAAAAC/oddloop-frederic.gif",
]);

export const aboutLinks = readable([
  // ========================================
  // home of the first website
  "http://info.cern.ch/",
  // ネチケットガイドライン
  "https://www.cgh.ed.jp/netiquette/rfc1855j.html",
  // Internet Explorer 6
  "https://mrdoob.com/lab/javascript/effects/ie6/",
  // 我漸漸不信任 UX 的原因
  "https://intersection.tw/%E6%88%91%E6%BC%B8%E6%BC%B8%E4%B8%8D%E4%BF%A1%E4%BB%BB-ux-%E7%9A%84%E5%8E%9F%E5%9B%A0-c9ea15dd2ca7",
  // How I experience web today
  "https://how-i-experience-web-today.com/",
  // Right versus pragmatic
  "https://marco.org/2012/02/25/right-vs-pragmatic",
  // 003 别喂巨魔
  "https://www.youtube.com/watch?v=E4Z3c4mvSgM",
  // 網際網路之子 Aaron Swarts 想要看到的世界
  "https://jhuo.ca/post/talk_with_jade_aaron/",
  // 網際網路是人類歷史的一段彎路嗎？
  "https://mp.weixin.qq.com/s?__biz=Mzg5NDY4Nzk1MQ==&mid=2247486785&idx=1&sn=92461b367d4d2ffd9a78c1444032dcaf",
  // ========================================
  // 正直的人
  "https://yclou.blogspot.com/2015/07/blog-post_20.html",
  // 無敵の人になりかけた
  "https://anond.hatelabo.jp/20190529235940",
  // 「言葉にできない痛み」とは何か
  "http://www.parc-jp.org/alter/2007/alter_2007_08-09_tetsugaku.html",
  // 【飛行機乗り方】世の中わからんこと多すぎ問題【次郎の注文方法】
  "https://www.nicovideo.jp/watch/sm41044801",
  // Uncomfortable Truths - Existential Comics
  "https://existentialcomics.com/comic/431",
  // ========================================
  // 編程自學指南番外：如果媒體業像科技業一樣……
  "https://matters.news/@Andy/728-%E7%B7%A8%E7%A8%8B%E8%87%AA%E5%AD%B8%E6%8C%87%E5%8D%97%E7%95%AA%E5%A4%96-%E5%A6%82%E6%9E%9C%E5%AA%92%E9%AB%94%E6%A5%AD%E5%83%8F%E7%A7%91%E6%8A%80%E6%A5%AD%E4%B8%80%E6%A8%A3-zdpuAt6B8omvRQrg9WzkwKWWCC29DorS3ePdmAqiQwmimRW5Z",
  // 創業辯證法
  "https://matters.news/@Andy/6002-%E5%89%B5%E6%A5%AD%E8%BE%AF%E8%AD%89%E6%B3%95-zdpuB2fCc6WEa12hnher8fcsPVgsU58MDpwHyCcrEQF8H47m9",
  // 線性產值與指數產值
  "https://blog.kalan.dev/2021-10-17-linear-and-exponential-value/",
  // バッドノウハウと「奥が深い症候群」
  "http://0xcc.net/misc/bad-knowhow.html",
  // 生産的になろう（Aaron Swartz のブログから）
  "https://emptypage.jp/translations/aaron/productivity.html",
  // 相信你可以改變
  "https://takedaiori.medium.com/%E4%BA%9A%E4%BC%A6-%E6%96%AF%E6%B2%83%E5%85%B9-%E7%9B%B8%E4%BF%A1%E4%BD%A0%E5%8F%AF%E4%BB%A5%E6%94%B9%E5%8F%98-742cc62f2102",
  // 客觀看待自己
  "https://takedaiori.medium.com/%E4%BA%9A%E4%BC%A6-%E6%96%AF%E6%B2%83%E5%85%B9-%E5%AE%A2%E8%A7%82%E7%9C%8B%E5%BE%85%E8%87%AA%E5%B7%B1-d76a9e989e2b",
  // 享受痛苦
  "https://takedaiori.medium.com/%E4%BA%9A%E7%BA%B6-%E6%96%AF%E6%B2%83%E5%85%B9-%E7%9B%B4%E9%9D%A2%E7%97%9B%E8%8B%A6-731314989f96",
  // 正視現實
  "https://takedaiori.medium.com/%E4%BA%9A%E4%BC%A6-%E6%96%AF%E6%B2%83%E5%85%B9-%E6%AD%A3%E8%A7%86%E7%8E%B0%E5%AE%9E-8d8cccea3115",
  // 珍視錯誤
  "https://takedaiori.medium.com/%E4%BA%9A%E4%BC%A6-%E6%96%AF%E6%B2%83%E5%85%B9-%E7%8F%8D%E8%A7%86%E9%94%99%E8%AF%AF-80fd07147644",
  // 修理機器，不要修理人
  "https://takedaiori.medium.com/%E4%BA%9A%E7%BA%B6-%E6%96%AF%E6%B2%83%E5%85%B9-%E4%BF%AE%E7%90%86%E6%9C%BA%E5%99%A8-%E4%B8%8D%E8%A6%81%E4%BF%AE%E7%90%86%E4%BA%BA-f1e034f35cc",
  // ========================================
  // 語用（pragmatic）
  "https://aaphi.blogspot.com/2010/03/pragmatic.html",
  // 全世界的文化都有某個道德規則又怎樣
  "https://aaphi.blogspot.com/2010/02/blog-post_28.html",
  // ========================================
  // 日常の失敗も品質管理で解決できる
  "https://honeshabri.hatenablog.com/entry/quality-of-life-management",
  // もっとうまく書けるかもという妄執をやめれば速くうまく書ける
  "https://readingmonkey.blog.fc2.com/blog-entry-759.html",
  // 「結果が出ない焦り」と向き合う方法
  "https://note.com/4bata/n/n6f78b20d9814",
  // どんな服が良いのか分からない時は、他人の服装を丸パクリせよ
  "https://healthy-person-emulator.memo.wiki/d/%a4%c9%a4%f3%a4%ca%c9%fe%a4%ac%ce%c9%a4%a4%a4%ce%a4%ab%ca%ac%a4%ab%a4%e9%a4%ca%a4%a4%bb%fe%a4%cf%a1%a2%c2%be%bf%cd%a4%ce%c9%fe%c1%f5%a4%f2%b4%dd%a5%d1%a5%af%a5%ea%a4%bb%a4%e8",
  // 健康的な生活リズムを確立したほうがよい
  "https://healthy-person-emulator.memo.wiki/d/%b7%f2%b9%af%c5%aa%a4%ca%c0%b8%b3%e8%a5%ea%a5%ba%a5%e0%a4%f2%b3%ce%ce%a9%a4%b7%a4%bf%a4%db%a4%a6%a4%ac%a4%e8%a4%a4",
  // 自分の思っていることを相手にしっかり伝えるようにする
  "https://healthy-person-emulator.memo.wiki/d/%bc%ab%ca%ac%a4%ce%bb%d7%a4%c3%a4%c6%a4%a4%a4%eb%a4%b3%a4%c8%a4%f2%c1%ea%bc%ea%a4%cb%a4%b7%a4%c3%a4%ab%a4%ea%c5%c1%a4%a8%a4%eb%a4%e8%a4%a6%a4%cb%a4%b9%a4%eb",
  // 【対談】精神科医の名越康文先生と「心が弱ったときのあるある」について話す
  "https://www.youtube.com/watch?v=y7vX3Km396U",
  // 僕はただ、イマジナリーフレンドを作りたかっただけ。
  "https://kuwaki-ganbatta.hatenablog.com/entry/2022/05/08/070239",
  // お絵かきAIを試してみて自分がAIと同じだと気がついた
  "https://anond.hatelabo.jp/20220906213945",
  // ========================================
]);
