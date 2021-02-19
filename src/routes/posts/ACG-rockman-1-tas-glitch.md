---
title: "洛克人 1 的呼叫 Ending 漏洞機制解說"
date: 2019-02-19T13:59:42.000Z
tags: ACG, Game
description: "在 2014 年 5 月遊戲 TAS 界出現了一支在半分鐘內通關洛克人的破天荒影片，震撼了許多人，而這種經過精密的機制解析與流程操控的遊戲通關方式，僅隔一個月竟然出現人力操作達成了同樣的成果，人類無極限！"
---

## 介紹

在 2014 年 5 月，遊戲圈出現了一支使用輔助程式，在**半分鐘內**通關洛克人 1 的破天荒影片，而這種需要經過精密的機制解析，與流程操控的遊戲通關方式，僅隔一個月竟然出現人力操作達成同樣的成果，人類無極限！本文會對其所使用的機制與流程進行解說。

<iframe width="560" height="315" src="https://www.youtube.com/embed/u5qom2q7cUU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
△【TAS】 ロックマン 1 in 00:32.11 【任意コード実行】

## TAS 與 ACE

在介紹這次主題的遊戲漏洞前，先為不熟悉的的讀者解釋一下所謂的「TAS」以及「ACE」是什麼，
「TAS」指的是「**使用工具輔助做出的競速通關 / 炫技遊玩（Tool-Assisted Speedrun / Superplay）**」，具體來說，會使用像是遊戲模擬器上搭載的輔助功能，減慢遊戲整體執行速度、逐格操作、快速存檔 / 讀取、記憶體觀察…等等，藉此達成在理論上可能但實際難度非常高的遊玩技巧。

「ACE」則是「**執行任意代碼 (Arbitrary Code Execution)**」，這邊的「代碼」其實就是程式碼的意思，指使用遊戲軟、硬體安全性上的漏洞，去執行任何程式碼，講白了就是用遊戲操作寫程式，常見手法有如本文的直接呼叫（跳至）遊戲結局。

## TAS 使用機制

### DelayObjectFFGlitch 技巧

在《洛克人 1》裡，當洛克人經過特定地圖的某些地點後，會出現不可視的「`0xFF`」物件（後稱 `FF 物件`）。例如 Ice Man 關卡的此處：

[![img01](https://i.imgur.com/FZkBQwv.gif)](https://i.imgur.com/FZkBQwv.gif)

△ 「`0xFF`」物件出現於畫面不可視之處

這個物件會讓影像處理單位（PPU, Picture Processing Unit）進行 Pattern Table Remap。推測是用於重新建構畫面用的物件。

在正常情況的程式執行流程是 `1. 物件 FF 出現` → `2. 處理物件 FF（讀取 Bank 2 的資料）` → `3. 切換至 Bank 6` → `4. 讀取敵人資料編號`。

若是在切換 Bank 之前，經由**特定的操作**超載待處理的指令量，會導致未切換至 Bank 6 之前，就直接在 Bank 2 讀取敵人編號的資料，造成畫面異常或是出現錯誤的敵人。

敵人的 AI 舉動是在 `0x00`～`0x3A` 這個範圍裡的物件資料，程式流程是「執行敵人的 AI 程式 → 從物件編號得出要 jump 的（下一個資料的）目標 → 執行目標位置的 AI 程式」，因此使用 Delay Object 技巧，會讓最後的目標變成範圍外的物件，造成各種問題。

例如物件 `F5` 出現後，需要執行敵人行動的 AI 模式 → 由於未切換 Bank，物件編號得到的 jump 目標為「`C0BD`」→ `C0BD` 為「通關處理過程中的物件」位置，因此遊戲會突然通關。

[![img02](https://i.imgur.com/pwkEkYJ.gif)](https://i.imgur.com/pwkEkYJ.gif)

△ 異常出現的 Electric Man

而 jump 目標詳細來說，系統會從 `$AA3B` + 2×（物件編號）取得 [AI 位置](http://www.yuko2ch.net/rockman/JumpAddressList.txt)，故物件編號為 `0x15` 時，目標位置會是 `$AA3B` + 2×0x15 = `$AA65` 裡所儲存的值，因此跳至儲存的「`B23C`」執行 AI。

可能出現的各種物件 00 ～ FF 中，大部份的物件會造成遊戲重新開始或無法繼續遊玩，在上例的 Ice Man TAS 的實際運用裡，是發現 `$23`（每 frame 增加 1 的計數器）的值走至 55 時，有可能會出現「物件 55」，之後再藉由**調整道具的出現量、音樂的演奏變化時間點、 rock buster 的高低座標**得到想要的後續目標位置。

套用計算法，`$AA3B` + 2×0x55 = `$AAE5`，裡頭儲存的 AI 位置為「`$600`」，搭配下列操作調整相關資料：

| 位置 | 數值     | 行為                                                           | 如何調整                                                                                                                                                                    |
| ---- | -------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0600 | 54 F8    | NOP F8,X（什麼都不做，往下執行 ）                              | 移動洛克人的 Y 座標 =54                                                                                                                                                     |
| 0602 | 50 4D    | BVC `$0651`（jump 至 `$651`）                                  | 調整 rock buster 第 1 發和第 2 發的 Y 座標 =50, 4D                                                                                                                          |
| 0650 | 3C       | UNDEFINED（這裡不會執行）                                      | delay FF 出現物件 3 的 ObjectFireDelay=3C                                                                                                                                   |
| 0651 | AD 22 1F | LDA `$1F22`=#`$0A`（讀取 0x0A 裡的 `$1F22` 並儲存至 A 暫存器） | 擊倒普通的敵人掉落道具的 ObjectFireDelay=AD,22<br>delay FF 出現的物件 1 的 ObjectFireDelay=1F                                                                               |
| 0654 | 6C 18 00 | JMP (`$0018`)=`$C460`（`$C460`: jump 至通關處理的途中）        | 擊倒普通的敵人掉落道具的 ObjectFireDelay=6C,18<br>delay FF 出現的物件 55 的 ObjectFireDelay=00<br>`$0018` 的數値由操作控制器 1 的「左下」+ 控制器 2 的「左右 Select」=60,C4 |

C45E: A9 00 lda #$00
<br>C460: 85 31 sta $31(CurrentStage)　 ← 遊戲程式會 jump 至這裡並進行中斷處理
<br>C462: 4C 0C C1 jmp $C10C

進入遊戲 ending。

利用這個漏洞，就能在事先準備好讀取的資料後，達成想要的操作結果。

### DoubleObjectFFGlitch

1. 在物件 FF 會出現的地方來回移動
2. 物件 FF 出現後，會在 16 frames 裡每 frame 進行一次物件 FF 的處理
3. 在物件 FF 進行處理的 frame 裡，讓物件 FF 朝左出現
4. 會變為從 Bank 2 讀入錯誤的物件

同樣的，由調整 `$23`（每 frame 增加 1 的計數器）決定讀入的物件，以下則是一些有趣的物件：

- `75`、`F5`: 通過該關卡，但下一關開始會破圖。
- `4A` : 出現後，過一段時間通過該關卡，下一關的關卡圖像正常。
- `42` : 磁力條，由於看不見、初始座標會變動、會往 11 點鐘方向並馬上消失，因此難以取得，在晃動人物時偶爾會有成功取得的狀況。

一旦某項物件出現後，直到消滅為止不會再出現下個物件，若出現了目標之外的物件就要以離開畫面一類的手法來清除。

[![img03](https://i.imgur.com/LEoXwhg.gif)](https://i.imgur.com/LEoXwhg.gif)

[![img04](https://i.imgur.com/b0naPNm.gif)](https://i.imgur.com/b0naPNm.gif)

[![img05](https://i.imgur.com/xO6xO8i.gif)](https://i.imgur.com/xO6xO8i.gif)

△ 本次 RTA 的關鍵地點

在氣力人關卡的圖片位置三處，進行 DoubleObjectFFGlitch（在圖片的位置左右移動）就會將 `$17`（控制器 2）做為下一個讀取的物件編號，因此可由控制器 2 的數值決定物件 00 ～ FF 的出現。

若是同時按住控制器 2 的「左、上、下、Select、A」鍵，會出現物件 75 ，通過目前關卡，但下一關會破圖。

※兩者的差異應該是在，前者使用增加畫面道具量造成的處理延遲，去影響物件的產生，後者利用物件出現的方向，因此原文解說內有註明，後者技巧只需要來回移動，不需加上處理 delay 。

## 人力 RTA

<iframe width="560" height="315" src="https://www.youtube.com/embed/SoUd69Xs9gg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

△【RTA】ロックマン in3:53【2014-06-21】

### 目標

將記憶體調整成下列的對應數值後 :

| 位置   | 數值 |
| ------ | ---- |
| `$482` | 8A   |
| `$483` | 50   |
| `$484` | 13   |
| `$498` | 4A   |
| `$499` | 20   |
| `$49A` | 60   |
| `$49B` | C4   |
| `$605` | 20   |
| `$606` | 82   |
| `$607` | 04   |

進行 DoubleObjectFFGlitch 就會進入 Ending 畫面。

### 流程

1. 在 Electric Man 的關卡裡，於梯子上進行射擊的動作，**僅按下 1 frame** 下鍵，會變為半抓住梯子的樣子，
   <br>[![img06](https://i.imgur.com/5srrun8.jpg)](https://i.imgur.com/5srrun8.jpg)
   <br>洛克人朝左的狀況下，按下上鍵，會變為頭卡在天花板的穿牆狀態，按下跳躍鍵，跳到最高處後，按下右鍵，會穿越至磁力條的右方，這個狀態下按左鍵，會由於子畫素（subpixel）的關係，有 1/8 的機率可以拿到磁力條，再按下一次跳躍鍵，就會回到穿牆狀態。
2. 進入 Guts Man 關卡
3. 在關卡開頭等待第二隻小矮兵的 3 連攻擊，在下圖的位置等待至第 3 發中央的子彈消失於畫面外後， `$49B` 的值會變為 C4 。
   <br>[![img07](https://i.imgur.com/EhAhmrY.jpg)](https://i.imgur.com/EhAhmrY.jpg)
4. 在畫面內有 2 隻小矮兵的狀態下，**保持畫面裡有 2 連攻擊**追至下圖的位置，等待至第 2 發中央的子彈消失於畫面外後， `$49A` 的值會變為 60。
   <br>這裡若是遇到 3 連攻擊 `$49B` 會因此取得 C4 之外的值。
   <br>[![img08](https://i.imgur.com/fAcJeMt.jpg)](https://i.imgur.com/fAcJeMt.jpg)
5. 在畫面內有 1 隻小矮兵的狀態下，在下圖位置等待 2 連攻擊的第 2 發中央子彈消失於畫面外後， `$499` 的值會變為 20。
   <br>這裡同樣若是遇到 3 連攻擊，在這之前的調整會因此偏掉。
   <br>[![img09](https://i.imgur.com/O046zDW.jpg)](https://i.imgur.com/O046zDW.jpg)
   <br>這裡小矮兵的攻擊間隔是由亂數決定，若是運氣不好，會有可能為了 3 連攻擊或 2 連攻擊，要等上數十秒。
   <br>若是途中失敗可從 `$49B` 重新開始調整。
6. 接下來要調整 `$498`，移動至斷崖的另一邊後，擊敗 3 隻敵人**並使畫面上顯示 3 個道具**後，在下圖的位置受到傷害，會使 `$498` 的值變為 4A 。
   <br>若是失敗仍可在血量允許的情況下持續調整。
   <br>[![img10](https://i.imgur.com/uFBy8hb.jpg)](https://i.imgur.com/uFBy8hb.jpg)
7. 接下來是 `$482`～`$484` 的調整，在下圖的位置向右連射 3 發 buster ，在第 3 發子彈消失於畫面外後，`$484` 的值會變為 13。
   <br>[![img11](https://i.imgur.com/5KVdRku.jpg)](https://i.imgur.com/5KVdRku.jpg)
8. 在下圖的位置向右連射 2 發 buster ，在第 2 發子彈消失於畫面外後，`$483` 的值會變為 50。
   <br>[![img12](https://i.imgur.com/ZKGmALT.jpg)](https://i.imgur.com/ZKGmALT.jpg)
9. 在下圖的位置向右射單發 buster ，子彈消失於畫面外後，`$482` 的值會變為 8A。
   <br>在這之後若再發射 buster，會造成先前調整的數值變動，**要注意不可再使用 buster** ，若是失敗則要再從 `$484` 開始重新調整。
   <br>[![img13](https://i.imgur.com/O95Y27D.jpg)](https://i.imgur.com/O95Y27D.jpg)
10. 接下來是 `$605`～`$607` 的調整，從第三階樓梯開始，使用磁力條逐格拉高 10 高度。
    <br>[![img14](https://i.imgur.com/ceJ1S7O.jpg)](https://i.imgur.com/ceJ1S7O.jpg)
11. 注意磁力條的顯示時間，將畫面最上方的磁力條調整為**畫面裡出現的第 3 條**， `$607` 的值會變為 04 。
    <br>需將時間調整為，這時踏台的第 2 條和第 1 條的磁力條，在設置第 3 條後會馬上消失。
    <br>[![img15](https://i.imgur.com/6qy17F2.jpg)](https://i.imgur.com/6qy17F2.jpg)
12. 在踏台的第 2 條磁力條消失前，射出磁力條並跳至最高，可以使用 Start → Select 微調磁力條至下圖的位置（與右邊的山峰平行）後，放開 B 鍵便能在此設置磁力條。
    <br>由於這時先前設值的第 1 和第 2 條磁力條已經消失了，這時設置的磁力條會變為第 1 條，`$605` 會變為 20 。
    <br>[![img16](https://i.imgur.com/uQmEdO7.jpg)](https://i.imgur.com/uQmEdO7.jpg)
13. 著地後朝左射出磁力條，並在最大跳躍後，在**頂點附近**朝右，將磁力條設置於如下圖的階梯上固定，這會是第 2 條磁力條，`$606` 變為 82 。
    <br>若是這時失敗會由於磁力條的殘量不足，必須整個 run 重來過。
    <br>若只是想成功可以從 `$484` 的調整重新開始。
    <br>[![img17](https://i.imgur.com/MPvesQN.jpg)](https://i.imgur.com/MPvesQN.jpg)
14. 調整至此**必須沒有任何 1 格點陣**的偏差，並且為了使用 DoubleObjectFFGlicth 叫出物件 55，需要**按下控制器 2 的「←、↑、Select、A」鍵**。
    <br>影片的跑者是使用膠帶固定住 A 鍵，用雙腳踩下十字鍵與 Select 鍵。
    <br>然而 Guts Man 關的 DoubleObjectFFGlicth 比起 Ice Man 的難易度更高，在人力執行上是一定程度的運 Game，這點只能不斷嘗試來達成。
    <br>而最重要的是，**要在這 3 條磁力條消失前達成 DoubleObjectFFGlicth 的技巧**，若是成功達成執行技巧，呼叫出物件 55，就會和 TAS 影片一樣突然進入 ending 。
    <br>磁力條消失的時間是 150 frames（約 2.5 秒左右），因此僅有大概 1 ～ 2 次的跳躍機會可嘗試，雖然單次 run 的整體時間很短，仍然是個極為困難的技巧。

## 參考文章：

- [ディレオブジェクトテク](http://www.yuko2ch.net/rockman/mm1tasmap.html)
- [ロックマン 1 のディレイエンディング TAS について](http://ch.nicovideo.jp/TASVideos/blomaga/ar529967)
- [ロックマン 1 の新技：DoubleObjectFFGlitch について](http://ch.nicovideo.jp/TASVideos/blomaga/ar535617)
- [ロックマン RTA における　任意コード実行テクニックについて](http://ch.nicovideo.jp/nou/blomaga/ar558601)
- [ロックマン 1 in 00:32.11 の解説用動画](http://www.nicovideo.jp/watch/sm23553625)

## 追記

- [【TAS】 ロックマン 1 in 00:27.04 【任意コード実行】](https://www.nicovideo.jp/watch/sm36192523)

在 2020 年的 1 月 6 號，ピロ彦 P 上傳了一支大幅更新版本的影片，
這次把原本就很驚人的 32 秒紀錄再推進了 5 秒，全破《洛克人 1》只需要 27 秒！

### 機制簡記

- 利用 Y 軸座標執行任意程式碼
- 打大補 `$610` -> 3A
- 調整掉落道具高度 `3A ** 17 18` 產生 `55`
- 在 `$8C`=05 的 2px 位置調整成 NEXT=130 前後產生 `$17` 物件
- 為了讓產生物件的 Y 座標變成 `$16` 先調整 `$611`=6C
- 物件 `55` 不會執行純讀取資料（ROM）而會執行 RAM 的 `$600`
- `$600` 是岩男 Y 座標，`$601` 為 F8 固定值，`$602` 是第 3 發子彈的 Y 座標
- 調整成 `48 F8 54 54 48 F8 F8` 程式就會執行至 `$610` 即敵人 Y 座標物件位址為止
- 34 和 54 是 NOP（No Operation），F8 是 SED（Stream Editor）都是在紅白機上無功能的指令
- 48 PHA 是把 A 暫存器的值推到 Stuck 上
- 執行 `$600` 時 A 暫存器是 06 因此 Stuck 的值是 06 06
- `$611` 之後的 `6C 17 18` JUMP 到 `$1817`（`$0017` 的鏡像複製值）的 16bit 值
- `$17` 是 2P 在前一幀的輸入 `$18` 是 1P 的新輸入減去前一幀輸入
- 在跳躍之前執行兩次 PHA 回傳的位置會變成 `$0606`+1
- 第一次的跳躍讓 A 暫存器值變為 0A，第二次跳躍讓關卡變為 0A+1
- 關卡的值（`$31`）變成 0B 進入 Ending

### 參考文章

- [NES 研究室 - 6502](http://hp.vector.co.jp/authors/VA042397/nes/6502.html)
