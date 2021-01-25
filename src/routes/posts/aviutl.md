---
title: "強大的免費影片剪輯後製軟體 Aviutl"
date: 2021-01-05T01:58:08.000Z
published: 2021-01-05T01:58:08.000Z
author: f6bfb5
summary:
layout: blog
---

## 程式本體

- [AviUtl 主程式](http://spring-fragrance.mints.ne.jp/aviutl/)
- [拡張編集 File Reader (exedit.aui)](http://spring-fragrance.mints.ne.jp/aviutl/)
  ※延伸編輯插件 (拡張編集プラグイン) 解壓縮後的檔案請與 aviutl.exe 放在同一層級的資料夾下。
  解說：[AviUtl と拡張編集プラグインの導入方法](http://aviutl.info/dl-innsuto-ru/)

### 常見檔案格式介紹

### 專案檔

- `.aup`: Aviutl 內建的 project 檔案，最多可存放達 50 場景的整體作業狀態。
  <br>在延伸編輯插件的視窗裡，右鍵點選 `產生新 project (新規プロジェクトの作成)`，
  <br>以及 Aviutl 本體視窗的 `檔案 (ファイル)` → `儲存正在編輯的 project (編集プロジェクトの保存)` 所操作的都是這個格式的檔案。
- `.exa`: `延伸編輯插件(拡張編集プラグイン)` 的設定參照檔案，
  <br>例如替文字加上外框與影子後輸出成 `.exa` 參照檔案（エイリアスを作成），
  <br>就可直接在加入新文字時選用參照設定，
  <br>或是直接將 `.exa` 檔案拖進延伸編輯插件的視窗裡。
  <br>通常儲存於 aviutl 資料夾底下的 `plugins` 資料夾的任意子資料夾。
- `.exo`: 延伸編輯插件（拡張編集プラグイン）自有的 project 檔案，
  <br>存放單一場景內的作業狀態，
  <br>在延伸編輯插件的時間線上點選右鍵選擇 `檔案 (ファイル)` → `輸出 object 檔案 (オブジェクトファイルのエクスポート)` 即輸出成此類型檔案。
  <br>通常作為 object 輸入用，例如由 93 所製作[炫光特效 object](http://seguimi.blog.fc2.com/blog-entry-632.html)，
  <br.通常儲存於 aviutl 資料夾底下的 `plugins` 資料夾裡。

### 腳本檔

- 腳本檔案通常須存放在 aviutl 資料夾底下的 `scripts` 資料夾內才可使用，
  <br>並且建議以作者或是效果去命名資料夾，區分為數眾多的檔案。
- `.anm`: 動畫效果。有些腳本製作者會在腳本名稱後方標註用途，
  <br>如 `@ANM1`、`@ANM2` 為汎用動畫效果，
  <br>`@TA` 為使用於文字物件的動畫效果，
  <br>`@音声` 為會與影片內的聲音聯動變化的動畫效果，
  <br>`@加減速` 為調整加速與減數＂強弱＂用的動畫效果，
  <br>`@連番` 為讀取連續圖片用的動畫效果。
- `.obj`: 自訂物件。
- `.scn`: 場景切換。
- `.cam`: 鏡頭效果。

### 匯入影片檔案

- [L-SMASH Works File Reader (lwinput.aui)](http://pop.4-bit.jp/?page_id=7929)
  <br>可讀取許多泛用格式的影片檔案。
  <br>解說：[L-SMASH Works とは？導入方法と使い方](http://aviutl.info/l-smash-works/)
- [PSDToolKit](https://oov.github.io/aviutl_psdtoolkit/index.html)
  <br>可讀取 PSD 與字幕檔案，搭載許多便利功能插件。

### 輸出檔案

- [拡張 x264 出力(GUI) ex (x264guiEx)](https://rigaya34589.blog.fc2.com/)
  <br>解說：[【AviUtl】x264guiEx の導入方法と使い方(2/3)【MP4 出力】](http://aviutl.info/x264guiex-intro/)
- [ffmpeg / avconv 出力(ffmpegOut.auo)](http://rigaya34589.blog135.fc2.com/)
  <br>解說：[【AviUtl】FFmpegOUT で WebM･ASF･TS 形式の動画をエンコードする方法【出力プラグイン】](http://aviutl.info/ffmpegout/)
- [WMV 出力](http://www.geocities.jp/aji_0/)
  <br>解說：[【AviUtl】WMV 形式で動画をエンコードする方法【出力プラグイン】](http://aviutl.info/wmv-puraguinn/)
- [PNG 出力](http://auls.client.jp/)
- [動画コーデックの種類と違い(H.264･VP9･MPEG･Xvid･DivX･WMV 等)【比較】](http://aviutl.info/ko-dekku-tigai/)
  <br>codec 比較。

### 畫面濾鏡

- [NL-Means Light](http://nilposoft.info/aviutl-plugin/)
  <br>除噪。
- [SharpenResize](http://nilposoft.info/aviutl-plugin/)
  <br>能夠將縮放後的影片畫面處理得更加乾淨銳利，並可套用特定遮罩及除噪。
- [WarpSharpMT](http://www40.atwiki.jp/aviutl41991/pages/37.html)
  <br>解說：[【AviUtl】輪郭補正で動画の画質を向上させる方法【シャープ系フィルタプラグイン】](http://aviutl.info/sharp/)
- [【AviUtl ＋ x264guiEx】ニコニコ新仕様用 自己流エンコード設定【（く）対応】](http://ch.nicovideo.jp/suisyou_P/blomaga/ar1137037)
- [輪郭補正で動画の画質を向上させる方法](http://aviutl.info/sharp/)

## 腳本、動畫效果

- [AviUtl スクリプト Wiki](http://aviutlscript.wiki.fc2.com/wiki/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E7%B4%B9%E4%BB%8B)
- [AviUtl Script Scrapbox](https://scrapbox.io/aviutl/)
- [93](https://twitter.com/Respectrum93)
- [Aodaruma](https://twitter.com/Aodaruma_)
- [rikky](http://hazumurhythm.com/wev/downloads/)
- [UndoFish](https://twitter.com/undofish)
- [ティム](http://twitter.com/Tim_No_Heya)[スクリプト置き場](https://tim3.web.fc2.com/sidx.htm#DiaSha)
- [白水](https://purinka.work/download/hksy.html)
- [Ψ(｀ ∀´)Ψ ｹｹｹ と (´･ω･`)ｼｮﾎﾞｰﾝ](http://madeinpc.blog50.fc2.com/)
- [さつきさんのページ](https://dic.nicovideo.jp/u/2787743#script)
- [AviUtl プラグイン フィルタ by うえぽん](http://auf.jpn.xxxxxxxx.jp/)
- [AviUtl 物置 - JPN takeshima](http://takeshima.halfmoon.jp/room/aviutl.html)
- [Nagomiku 自作スクリプト](https://scrapbox.io/nanikani-shugo/Nagomiku%E8%87%AA%E4%BD%9C%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88)
- [AviUtl Script 開発無料カウンター](http://niconicotetu.web.fc2.com/download_page.html)
- [VHS 風](https://twitter.com/sdkd500/status/1042352681241591810?s=21)
- [【AviUtl】おすすめの便利プラグインまとめ【2018】](http://aviutl.info/plugins/#i-18)
  <br>推薦插件懶人包。

## 腳本筆記

### TA-Normal

<summary>

- [TA-Track を使ったテキストの演出 - FLAPPER](https://seguimiii.com/aviutl-tech/tatrack)
- 由 93 所製作的文字動畫腳本

</summary>
<details>

- 需勾選文字`個別物件化`
- `in/out`: -100 至 0 登場，0 至 100 退場
- `ズレ`: 首文字至末文字出現變化的時間差，`0` 則一同變化
- `order`: `0` 順時鐘，`1` 逆時鐘，`2` 中間為起點，`3` 隨機，`{0,0}` 分別設定 `in` 與`out`
- `seed`: `order` 設為 3 時所使用的亂數，同樣可使用 `{0,0}` 分別設定

</details>

### TA 標準登場

<summary>

- 由 さつき 所製作的文字動畫腳本

</summary>
<details>

- [さつき/TA | OCR & Aviutl Wiki | Fandom](https://ocraviutl.fandom.com/ja/wiki/%E3%81%95%E3%81%A4%E3%81%8D/TA)
- [TA 標準登場を使った小技 - ニコニコ動画](https://www.nicovideo.jp/watch/sm26208050)
- [TA 標準登場を使った小技 補足 と その他使用したエフェクトなど](http://ch.nicovideo.jp/m93/blomaga/ar782185)

1. X 距離: `obj.ox` or `obj.ox*2`
2. X 距離: `-obj.ox`
   <br>トラッキング
3. Y 距離: `obj.oy`
4. X 距離: `obj.ox` + Y 距離: `obj.oy`
5. X 距離: `-obj.ox` + Y 距離: `-obj.oy`
6. X 距離: `obj.x` + Y 距離 `obj.y`
7. X 距離: `-obj.x` + Y 距離 `-obj.y`
8. X 距離: `obj.x+obj.ox` + Y 距離 `obj.y+obj.oy`
9. X 距離: `obj.x-obj.ox` + Y 距離 `obj.y-obj.oy`
10. X 距離: `-obj.w`
11. Y 距離: `-obj.h`
12. X 距離: `obj.index%2 * 200`
13. Y 距離: `(1+obj.index)%2 * 200`
14. X 距離: `obj.index%2 * 200` + Y 距離 `(1+obj.index)%2 * 200`
15. Y 距離: `0 * math.sin(math.pi/2*obj.index)`
16. Y 距離: `0 * math.sin(math.pi/2*obj.index)`
    <br>\+ X 距離 `200 * math.cos(math.pi/2*obj.index)`
17. Y 距離: `rand(-300, 300, obj.index, 0)`
18. Y 距離: `(obj.index==5 and 200) or 0`
19. Y 距離: `(obj.index<5 and 300) or -200`

</details>

### DelayDraw2

- [DelayDraw2 - AviUtl](https://scrapbox.io/aviutl/DelayDraw2)

### 常用快捷鍵

| 按鍵       | 功能                 |
| ---------- | -------------------- |
| `Ctrl + N` | 建立新專案           |
| `S`        | 切割選擇物件         |
| `R`        | 新增中間點           |
| `E`        | 新增效果             |
| `T`        | 更改選擇物件時間長度 |
| `TAB`      | 切換至當前幀的物件   |
| `W`        | 切換至下個物件       |
| `Q`        | 切換至前個物件       |
| `G`        | 切換格線系統顯示     |
| `Ctrl+V`   | 顯示幀外區域         |

### [個別オブジェクト指定制御スクリプト](https://www.nicovideo.jp/watch/sm33005753)

- @B2_LimitedEffecter.anm

```
設定選擇欲操作的個別物件參數
```

### [ちょっとノリノリスクリプト](https://www.nicovideo.jp/watch/sm33151219)

```
Pattern:
1. 反轉
2. 反復移動
3. 擴大縮小
4. 擴大縮小(縱向)
5. 擴大縮小(斜向)
6. 透明度
7. 回轉
8. 亮度
9. 模糊
10. 發光
11. 逆光
12. 放射模糊
13. 振動
14. 扭曲
15. 波紋
16. 色偏
17. 跳動
18. 搖晃
19. 隨機瞬間移動
20. 隨機移動
21. 爆氣
22. 彈動
23. 齒輪
24. 隨機放大
25. 隨機放大移動
26. 隨機角度
27. 隨機角度移動
28. 反復橫向跳動
29. 放射線移動
30. 色相
```

### [文字前後關係](https://twitter.com/_e_Pi_/status/1015723721468727296)

```
[テキスト]
[テキスト一枚化 *@rikkyテキスト]
[縁取り]
[シャドー]
```

- [cossy ｜ note](https://note.com/cossy)

## 網路資源筆記

### [MOTION PERIODIC TABLE](http://foxcodex.html.xdomain.jp/)

抽出 Motion Graph 裡的基本要素，並基於規則整理成元素周期表形式的格式。

```
1 族：Offset、回轉類
2 族：變形類
3 族：時間操作類
4-8 族：特殊
9 族：腳本類
10 族：Wipe類
11 族：擴散類
12-13 族：模糊、光源類
14 族：移動類
15 族：回轉類
16 族：放大縮小類
17 族：修飾類
18 族：碎形類

重要、使用頻率高的要素會盡量置於周期上方。
```

### [【#03】【Aviutl】コツとか講座的な動画](https://www.youtube.com/watch?v=L0iPNN0a9q4)

1. 推薦腳本
   UndoFish - easing
   さつき - スクリプト一式
   常用: 斜めブラインド、円形並べ、画像ループ 2
2. 關於文字
   縁取り＋シャドー
   グラデーション＋縁取り＋シャドー
   グラデーション＋縁取り＋縁取り＋縁取り
   グラデーション＋縁取り＋縁取り＋縁取り＋シャドー
   グラデーション＋縁取り＋シャドー＋縁取り＋縁取り

### [15 秒でわかる Aviutl の豆知識](https://twitter.com/seruire/status/1013719050151575552?s=12)

1. 不要使用預設顏色
2. 巨大的圓加上模糊就成背景
3. Loop 小圖形
4. 替圖形加上最細的斜ブラインド
5. Frame Buffer + 圖片 Loop + 50%放大率
6. 替文字加上邊框和影子
7. 使用 easing

### [AviUtl の、小技・小テクニック・小ネタよせあつめ](http://ch.nicovideo.jp/jiro2CSVmemo/blomaga/ar1115152)

- AviUtl 的小技巧整理

```
1. 回顧 Shortkey
2. Backup 是救命繩
3. 勾選「画像処理を間引いて表示」可減輕處理負荷
4. LuaJIT 版的 lua51.dll
5. 文字尺寸放大、擴大率縮小->銳利度上升
6. 常見文字設計
・ロンハーから
文字(淡青)：シャドー(濃青・左上)・縁取り(白)・シャドー(淡緑・右下)x2
文字(淡赤)：縁取り(赤)・シャドー(赤・右下)x2
影(白)：縁取り(白)・ぼかし
ハーフトーン(白)：縁取り(白)・ぼかし・モザイクマスク(R改)
文字(濃黄)：縁取り(白)・シャドー(淡黒・右)・縁取り(黄)

・知らない世界から
文字(濃赤)
影1(白)：縁取り(白)・ぼかし
影2(黄)：縁取り(黄)・ぼかし
文字(淡青)：縁取り(白)・シャドー(黒・右下)
文字(赤)：シャドー(濃赤・右下)・シャドー(中央)
7. 降低彩度
8. 使用領域拡張+クリッピング的演出
9. 糊焦
FrameBuffer + 模糊範圍5 透明度40 + 合成模式 Screen
10. 三大模糊
X/Y軸移動->方向模糊
Z軸移動->放射模糊
Z軸旋轉->旋轉模糊
11. 圖形經過的地方變色
^
上  「AviUtl（赤、上のオブジェクトでクリッピング適用）」
至 「図形」
下 「AviUtl（白）」

^
上  「元画像」
至 「メロンパン（縁取り+ぼかし）」
下 「元画像（明るさ↓+ぼかし：陰影、上のオブジェクトでクリッピング適用）」
    「メロンパン」
12. 推薦腳本
+ ベジエ軌道T
+ ランダム配置@ANM1でパーティクルっぽいの
+ ティム氏の縁取りTスクリプト
+ 93氏のMultiSlicer

```

### [從零開始的 MAD 剪輯【場景切換/加入文字/特效】](https://www.nicovideo.jp/watch/sm32980085)

```
+ 場景切換
ぼかし
レンズブラー
グロー
グロー＋単色化
ラスター
ラスター＋色ずれ
ラスター＋グロー
リール回転
MultiSlicer
+ 文字
明朝
縁取り
円形
差分
大きい文字
座標の拡大縮小
TAぼかし登場
拡大縮小して登場
+ 效果
フレームバッファ＋拡大率
フレームバッファ＋振動
フレームバッファ＋色ずれ
フレームバッファ＋座標移動
フレームバッファ＋ランダムラスター
フレームバッファ＋ランダム色ずれ
フレームバッファ＋色調補正
フレームバッファ＋ランダム小物配置
フレームバッファ＋本当のブロックノイズ
フレームバッファ＋レンズフレア
フレームバッファ＋周辺ボケ光線
フレームバッファ＋セピアノイズ
+ 素材
NC131110 側邊雜訊
NC116843 繪本效果
NC116839 簽筆筆處
NC130133 電影膠捲
NC63190 掃描線

```

### [業餘人士所製作的新、中手向 MotionGraph 講座](https://www.nicovideo.jp/watch/sm29882572)

```
+ 移動圖形
移動是MG的基本
只要改變座標即可
+ 使用加減速
進階->easing
+ 「錯開」
1. 錯開「圖形的位置」
2. 錯開「移動的距離」
3. 錯開「圖形的大小」
4. 錯開「移動的方向」
5. 錯開「圖形的速度」

```

### [簡單的配色方法](https://twitter.com/Aodaruma_/status/835723839472488450)

```
彩度: 顏色的鮮豔度
高彩度: 休閒、活潑
低彩度: 自然、放鬆
輝度: 顏色的明亮度
高輝度: 生態、優雅
低輝度: 懷舊、紳士

```

### [Mov 講](https://twitter.com/Aodaruma_/status/787322133315661824)

```
心理4原色: 人類認識顏色的四大色，紅、黃、綠、藍。
12色相環: 將心理4原色的間色和對比色補完後的色環，以及再做一次補色的24色相環。

```

### [【AviUtl の使い方】作業効率が向上するタイムラインの操作](https://www.youtube.com/watch?v=6h7jBl0PsLI)

```
1. 捲動Timeline
+ 滾輪: 左右移動
+ Alt+滾輪 上下移動
+ Alt+左鍵
2. 多重選擇物件
+ Ctrl + 左鍵: 單選
+ Ctrl + 左鍵拖曳: 複選
+ Shift + Ctrl + 左鍵: 複選起點至終點間的物件
+ Ctrl + 左鍵點選Layer: 圈選Layer內所有物件
+ Ctrl+右鍵: Menu可選擇物件範圍
3. 修改複數物件
+ 在多重選擇狀況下，修改好第一個物件的數值後，點擊數值旁的鍵頭圖項即可套用至其他複選物件
+ 亦可套用複數效果
+ 無法同時修改中位點的數值與刪除效果
4. 一體化
+ 複選後右鍵→グループ化
+ 可以同時移動物件位置、中位點時間點、長短
5. 插入空幀
+ 右鍵→空フレームの挿入
6. 鎖定Layer
+ 對最左邊欲鎖定的Layer右鍵→レイヤーのロック
+ 仍會受到空幀插入的影響
7. 連結座標
+ 對最左邊欲連結的Layer右鍵→座標のリンク
+ 同Layer下所有物鍵的座標會統一
+ 只能使用移動功能，直接輸入數值無效
+ 只適用X, Y, Z的座標數值

```

### [漫畫、同人誌的字體選擇](https://twitter.com/mizuako_d/status/1039078201274720256?s=12)

```
放送や回想シーン用: 源瑛ラテゴ
モノローグ用: 源柔ゴシックMedium
心の中のセリフ用: 源真ゴシックRegular
一般的なセリフ用: I-OTF アンチック Std B / F910新コミック体
強調セリフ: 源瑛Nuゴシック
かわいい感じのセリフ: ぼくたちのゴシック2ボールド
かわいい感じのセリフ: りいポップ角
恐怖: g_コミックホラー

長文: 細い明朝體
短文: 黑體
不在本文內使用裝飾系字體

・文字の太さ＝相手との距離感
・基準グリフからの変形量＝対象の運動量
・装飾としての太さ＝対象の質量
・角/跳ねセリフの差＝対象の速度

一般字幕是1秒中4字，一個畫面最多兩行（是日文）。
十五秒的廣告，每一畫面長平均1.5秒－2秒。
音樂動畫每一畫面平均3秒－4秒。
三十分鐘的節目每一畫面平均20秒。
資訊性節目的每一個畫面平均5－10秒。
電影的每一畫面平均9秒。

以上是日文，據分析中文比日文濃縮四倍，所以時間應更長

```

- [スクリプト・プラグイン一覧](http://seguimi.blog.fc2.com/blog-entry-559.html)

```
文字輪郭追跡
sinwave
砕け散るパズル
レイヤーにライン (2D)
Delay 個別
集中線 T
TA-Anchour
TA-Arrange
TA-Normal
簡易水玉
漫画化
曲面変形
ゆらめき
カラーパレット
PNG 出力
MultiSlicer
中点無視 (R)
ライン * R
オートターゲット
簡易変形シリーズ
ベジエ軌道 T
被写界深度
パペットツール (R)
ロール巻取 (ページめくり)
扇クリッピング (R)
カスタムフレアとプリセット
風揺れ
画像プルンプルンスクリプト
イージング
巻く
虹色グラデーション
色調調整セット ver5
泡
燃焼
輪郭追跡
扇クリッピング (現在入手不可)→記事
はためき
飛び舞う格子線
砂状 (現在入手不可→) 記事
ルービックキューブ
角丸四角形
Tracking ライン

```

### [Aviutil 勝手に勉強会 2](http://ch.nicovideo.jp/chana7/blomaga/ar712919)

### [Aviutl テクニックモーメント](https://twitter.com/i/moments/904588884427685888)

### [オブジェクト分割と Delay 個別](http://seguimi.blog.fc2.com/blog-entry-719.html)

### [一括でオブジェクトを動かす【AviUtl】](http://ch.nicovideo.jp/Jinsichi/blomaga/ar217688)

### [【AviUtl】ありふれたういんどうず　製作のすゝめ](http://ch.nicovideo.jp/jiro2CSVmemo/blomaga/ar1015784)

- [aviutl でカットインを作成](https://www.nicovideo.jp/watch/sm35223553)
- [【AviUtl】 オートターゲット スクリプト](https://nico.ms/sm16555929)
- [2020 年版 AviUtl ―フリー高性能動画編集ソフト― を導入しよう](https://www.nicovideo.jp/watch/sm36195005)
- [https://scrapbox.io/aviutl-script/obj](https://scrapbox.io/aviutl-script/obj)
- [https://aviutlscript.wiki.fc2.com/](https://aviutlscript.wiki.fc2.com/)
- [https://mypacesnail.hatenablog.com/entry/2018/12/15/212159](https://mypacesnail.hatenablog.com/entry/2018/12/15/212159)
- [https://gist.github.com/erioru/e56f31cae4806156f38f](https://gist.github.com/erioru/e56f31cae4806156f38f)

```
@デバッグ
debug_print(string.format("%f",obj.track0))
debug_print(string.format("%f",obj.getvalue(0)))

```

```
@変数
local fsize=obj.track0
debug_print(string.format("%f",fsize))

```

```
@色調補正
obj.effect("色調補正","明るさ",113.0,"ｺﾝﾄﾗｽﾄ",110.0,"輝度",120.0)

```

```
@グラデーション
obj.effect("グラデーション","強さ",100,"color",RGB(248,248,248),"color2",RGB(96,96,96))

```

```
@シャドー
obj.effect("シャドー","X",4,"Y",4,"濃さ",100,"拡散",0,"color",RGB(8,8,8))

```

```
@縁影
obj.effect("縁取り","サイズ",6,"ぼかし",5,"color",RGB(248,248,248))
obj.effect("シャドー","X",4,"Y",4,"濃さ",100,"拡散",0,"color",RGB(8,8,8))

```

```
@ダブル縁取り
obj.effect("縁取り","サイズ",8,"ぼかし",10,"color",RGB(8,8,8))
obj.effect("縁取り","サイズ",6,"ぼかし",5,"color",RGB(248,248,248))

```

```
@斜めシャドー縁
obj.effect("縁取り","サイズ",8,"ぼかし",10,"color",RGB(8,8,8))
obj.effect("シャドー","X",16,"Y",16,"濃さ",100,"拡散",0,"color",RGB(8,8,8))
obj.effect("縁取り","サイズ",6,"ぼかし",5,"color",RGB(248,248,248))

```

```
@四角縁
obj.effect("縁取り","サイズ",10,"ぼかし",10,"color",RGB(0,0,255))
obj.effect("クリッピング","上",10,"下",10,"左",5,"右",5,"中心の位置を変更",1)
obj.effect("縁取り","サイズ",3,"ぼかし",10,"color",RGB(0,0,0))
obj.effect("クロマキー","color_yc",ce010008b4fe)

```

```
@四角縁ノイズ風
obj.effect("縁取り","サイズ",10,"ぼかし",10,"color",RGB(0,0,255))
obj.effect("クリッピング","上",10,"下",10,"左",5,"右",5,"中心の位置を変更",1)
obj.effect("縁取り","サイズ",3,"ぼかし",10,"color",RGB(0,0,0))
obj.effect("クロマキー","color_yc",ce010008b4fe)
obj.effect("ノイズ","強さ",33,"周期X",1,"周期Y",1,"type",5)

```

```
@白字紅背
obj.effect("縁取り","サイズ",10,"ぼかし",10,"color",RGB(255,0,0))
obj.effect("クリッピング","上",5,"下",5,"左",10,"右",10,"中心の位置を変更",1)
obj.effect("縁取り","サイズ",3,"ぼかし",10,"color",RGB(0,0,0))

```

```
@動的ダブル縁取り local
local fsize=obj.track0
obj.effect("縁取り","サイズ",fsize*8,"ぼかし",10,"color",RGB(8,8,8))
obj.effect("縁取り","サイズ",fsize*6,"ぼかし",5,"color",RGB(248,248,248))

```

```
@斜めシャドー縁 local
local fsize=obj.track0
obj.effect("縁取り","サイズ",fsize*8,"ぼかし",10,"color",RGB(8,8,8))
obj.effect("シャドー","X",16,"Y",16,"濃さ",100,"拡散",0,"color",RGB(8,8,8))
obj.effect("縁取り","サイズ",fsize*6,"ぼかし",5,"color",RGB(248,248,248))

```

```
@四角縁 local
local fsize=obj.track0
obj.effect("縁取り","サイズ",fsize*10,"ぼかし",10,"color",RGB(0,0,255))
obj.effect("クリッピング","上",fsize*10,"下",fsize*10,"左",fsize*10-10,"右",fsize*10-10,"中心の位置を変更",1)
obj.effect("縁取り","サイズ",3,"ぼかし",10,"color",RGB(0,0,0))
obj.effect("クロマキー","color_yc",ce010008b4fe)

```

```
@四角縁ノイズ風 local
local fsize=obj.track0
obj.effect("縁取り","サイズ",fsize*10,"ぼかし",10,"color",RGB(0,0,255))
obj.effect("クリッピング","上",fsize*10,"下",fsize*10,"左",fsize*10-10,"右",fsize*10-10,"中心の位置を変更",1)
obj.effect("縁取り","サイズ",3,"ぼかし",10,"color",RGB(0,0,0))
obj.effect("クロマキー","color_yc",ce010008b4fe)
obj.effect("ノイズ","強さ",33,"周期X",1,"周期Y",1,"type",5)

```

```
@白字紅背 local
local fsize=obj.track0
obj.effect("縁取り","サイズ",fsize*10,"ぼかし",10,"color",RGB(255,0,0))
obj.effect("クリッピング","上",fsize*10-5,"下",fsize*10-5,"左",fsize*10-10,"右",fsize*10-10,"中心の位置を変更",1)
obj.effect("縁取り","サイズ",3,"ぼかし",10,"color",RGB(0,0,0))

```

```
@点付け
<? function ten(s,x,y,wait)
	mes("<r0>")
	for i=1, #s, 2 do
		mes( "<r0>"..string.sub(s,i,i+1).."<p-"..x..",-"..y..">・<p+0,+"..y.."><w"..wait..">")
	end
	mes("<r>")
end
?>
<? function ten2(s,x,y,wait)
	mes("<r0>")
	for i=1, #s, 1 do
		mes( "<r0>"..string.sub(s,i,i).."<p-"..x..",-"..y..">･<p+0,+"..y.."><w"..wait..">")
	end
	mes("<r>")
end
?>
＜?ten("文字列",[サイズ],[高さ],[待ち時間])?＞
--半角英数はten2のほうで
--定義して使ってください。

```
