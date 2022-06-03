---
title: "免安裝、單一程式看遍所有影片！簡潔強大的播放器 mpv"
date: 2019-07-19T15:18:13.000Z
summary: "mpv 是一套免費開源跨平台的播放器，免安裝的特性對於不想在電腦裡安裝太多東西的使用者來說相當方便，下載後直接開啟就能播放影片。"
tags: Toolbox
---

## 介紹

[mpv](https://mpv.io/) 是一套免費開源跨平台的播放器，承繼 mplayer2 與 MPlayer 兩套軟體開發而來，免安裝的特性對於不想在電腦裡安裝太多東西的使用者來說相當方便，下載後直接開啟就能播放影片，然而沒有工具列與功能列表，機制全都需要透過鍵盤操作的特徵，也因此勸退了許多入坑的使用者。

## [常用操作](https://mpv.io/manual/master/#keyboard-control)

mpv 的快捷鍵可以開啟 `~/.config/mpv/input.conf` 進行修改，並且在 `~/.config/mpv/doc` 內有提供範例檔案，`mpv` 資料夾內預設不會有此設定檔案，需自行建立，或直接從 `doc` 資料夾內複製範例檔案到 `mpv` 資料夾進行修改。

自訂輸入格式請參照 [官方文件](https://github.com/mpv-player/mpv/blob/master/DOCS/man/input.rst#inputconf-syntax)。

檔案內以 `#` 符號開頭的內文都是註解。如果想修改「`#`」鍵的功能需改用 `SHAPE` 當成綁定目標。

### 播放

| 按鍵                  | 功能                            |
| --------------------- | ------------------------------- |
| `←`／`→`              | 倒/快轉 5 秒                    |
| `↑`／`↓`              | 倒/快轉 1 分鐘                  |
| `<`／`>`              | 切換至播放清單裡的前/下一支影片 |
| `p`／`空白鍵`／`右鍵` | 暫停                            |
| `f`                   | 進入全螢幕模式                  |
| `ESC`                 | 離開全螢幕模式                  |
| `O`                   | 顯示播放資訊                    |
| `Alt` + `0`／`1`／`2` | 調整影片顯示大小                |

#### 調整畫面

| 按鍵     | 功能       |
| -------- | ---------- |
| `1`／`2` | 調整對比   |
| `3`／`4` | 調整明亮   |
| `5`／`6` | 調整伽瑪值 |
| `7`／`8` | 調整飽和度 |

### 字幕

| 按鍵                        | 功能               |
| --------------------------- | ------------------ |
| `Ctrl` + `←`／`→`           | 切換字幕           |
| `Ctrl` + `Shift` + `←`／`→` | 調整字幕延遲       |
| `z`／`Z` & `x`              | 調慢/快字幕 0.1 秒 |
| `r`／`R` & `t`              | 調高/低字幕位置    |

### 音量

| 按鍵                 | 功能                   |
| -------------------- | ---------------------- |
| `/` & `9`／`*` & `0` | 降低/提高音量          |
| `m`                  | 靜音                   |
| `-`／`#`             | 切換音軌               |
| `Ctrl` + `+`／`-`    | 調慢/快聲音延遲 0.1 秒 |

## [播放器設定](https://github.com/mpv-player/mpv/blob/master/DOCS/man/mpv.rst#configuration-files)

mpv 的設定可以透過修改 `~/.config/mpv/mpv.conf` 進行變更，同樣在 `~/.config/mpv/doc` 內有提供範例檔案，可以設定如是否使用 GPU 加速、影像縮放時使用的演算法，藉此調整畫面的銳利度、整體音量大小與變化程度的平衡、設定播放完畢後是否關閉播放器、讀取 youtube 影片時預設使用的解析度。

### [影像處理](https://github.com/mpv-player/mpv/blob/master/DOCS/man/vo.rst)

- [User Shaders·mpv-player/mpv Wiki](https://github.com/mpv-player/mpv/wiki/User-Scripts#user-shaders)
- [bloc97/Anime4K](https://github.com/bloc97/Anime4K)
- [bjin/mpv-prescalers](https://github.com/bjin/mpv-prescalers/tree/master)

`mpv.conf`

```conf
vo=gpu
profile=gpu-hq
glsl-shaders="~~/shaders/LumaSharpenHook.glsl;~~/shaders/SSimSuperRes.glsl;"
glsl-shaders-append="~~/shaders/ravu-lite-r3.hook"

gpu-api=vulkan

scale=ewa_lanczossharp
cscale=ewa_robidouxsharp
dscale=ewa_robidouxsharp

video-sync=display-resample
interpolation=yes
tscale=oversample

dither-depth=auto

hr-seek = yes
```

### 聲音處理

[Audio Loudness Normalization With FFmpeg](http://peterforgacs.github.io/2018/05/20/Audio-normalization-with-ffmpeg/)

```conf
# 音量標準化 [改善背景音過大，人聲過小時的狀況]
# https://github.com/mpv-player/mpv/issues/3979
# https://github.com/mpv-player/mpv/issues/6563
# [解釋] https://superuser.com/questions/323119/how-can-i-normalize-audio-using-ffmpeg

# 下面兩者擇一：
# af=lavfi=[dynaudnorm=g=5:f=250:r=0.9:p=0.5]
af = lavfi=[loudnorm=I=-16:TP=-3:LRA=4]

# DYNAUDNORM: https://ffmpeg.org/ffmpeg-filters.html#dynaudnorm
#
# 動態音量標準化，這套過濾器會將聲音輸入添增至某一目標大小（例如 0dBFS）。
# 並在以往"單純"的標準化演算法之上，此動態音量標準化會再__動態地__
# 重新調整聲音輸入的增益係數。使得較為"安靜"的部份能獲得更多的增益，
# 同時讓較為"響亮"的部份免於交調失真或削波失真。換句話說，動態音量標準化
# 可以讓聲音安靜與響亮的部份"均勻化"，讓整體聲音有同樣的大小。然而要注
# 意的是，動態音量標準化__並不會__套用"動態範圍壓縮"，聲音檔案的__每個部份__
# 都會保留 100% 的動態範圍。

# LOUDNORM: https://ffmpeg.org/ffmpeg-filters.html#loudnorm
#
# 使用 EBU R128 響度測量進行標準化，有動態標準化與線性標準化模式。
# 支援 1-pass （可用於串流與檔案） 和 2-pass （僅限檔案） 模式。
```

### Youtube-dl 相關設定

```conf
# 設定目標檔案規格
ytdl-format = bestvideo[ext=mp4][height<=?1080][fps<=?60]+bestaudio/best

# 使用 yt-dlp
# 由於目前 Youtube-dl 有部分網站支援性的問題（例如 NicoNico），目前有一系列的 Youtube-dl 延伸開發 project，[YT-DLP](https://github.com/yt-dlp/yt-dlp) 是其中一套更新相當頻繁，並且支援性相當優秀的相關工具。
#
# 想要使用 Youtube-dl 之外的程式介接網路影片，需要多加上：
script-opts=ytdl_hook-ytdl_path="~~/yt-dlp"
script-opts-append=ytdl_hook-ytdl_path="~~/yt-dlp"
```

### 獨立使用 youtube-dl 觀看網路影片

例如 NicoNico 的影片目前無法直接使用 mpv 內的網址處理觀看，就需要於命令列使用此方式另外將影片資料傳入播放器內。

`youtube-dl.exe -o - {%url%} | mpv -`

## [外掛套件](https://github.com/mpv-player/mpv/wiki/User-Scripts)

mpv 可以使用 lua 語言撰寫第三方套件，套件檔案通常放置於 `~/.config/mpv/scripts/`。

| 名稱                                                                                                          | 功能                                                         |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [autoload](https://github.com/mpv-player/mpv/blob/master/TOOLS/lua/autoload.lua)                              | 播放檔案後會自動讀取同資料夾內的其它檔案並加入播放清單內。   |
| [open-file-dialog](https://github.com/rossy/mpv-open-file-dialog)                                             | 可使用 `Ctrl+O` 從程式內直接開啟檔案視窗選擇影片播放         |
| [SmartCopyPaste Script](https://github.com/Eisa01/mpv-scripts#smartcopypaste-script)                          | 可使用 `Ctrl+V` 將檔案路徑或網址貼至 mpv 播放。              |
| [reload](https://github.com/4e6/mpv-reload)                                                                   | 可使用 `Ctrl+r` 在播放線上影片緩衝過久時重新載入。           |
| [mpv-oled-screensaver](https://github.com/Akemi/mpv-oled-screensaver)                                         | 保護 OLED 避免烙痕效應，在影片暫停 15 秒後會自動轉為黑畫面。 |
| [cycle-video-rotate](https://github.com/VideoPlayerCode/mpv-tools/blob/master/scripts/cycle-video-rotate.lua) | 可使用 `Alt+方向鍵` 旋轉影片                                 |

## 外部連結

- [Archlinux Wiki - mpv](https://wiki.archlinux.org/index.php/Mpv)
- [mpv - LUA SCRIPTING](https://github.com/mpv-player/mpv/blob/master/DOCS/man/lua.rst)
- [mpv - User Scripts](https://github.com/mpv-player/mpv/wiki/User-Scripts)
- [mpv 播放器折腾记录](https://hooke007.github.io/mpv-lazy/mpv.html)
- [nicovideo.jp issue · Issue #29225 · ytdl-org/youtube-dl](https://github.com/ytdl-org/youtube-dl/issues/29225)
- https://github.com/rossy/mpv-repl
- https://github.com/noaione/mpv-discordRPC/blob/master/Scripts/mpv-drpc.lua
- https://github.com/Samillion/mpv-ytdlautoformat

## 追伸

把 NicoNico 動畫的留言轉換成可在播放器上觀看的字幕檔案。

### 下載留言

1. 下載並開啟 [NicomentXenoglossia](http://xenog.web.fc2.com/)。
2. （推薦）點擊右上角左邊第一個選項監控剪貼簿。
3. `詳細設定` -> `DL の挙動（コメント／情報）`-> 取消勾選 `ダウンロードしたコメントファイルには BoonSutazioData を追加する`
4. 在下方的 `ダウンロードするもの` 只勾選 `コメントファイル` 。
5. 於輸入欄貼上網址並按下 Enter 鍵將影片加入下載清單，點選 `ダウンロード` 開始下載。

### 轉換留言

1. 安裝 [Python 3](https://www.python.org/download/releases/3.0/)
2. 下載 [danmaku2ass](https://github.com/m13253/danmaku2ass)
3. 依照文件範例使用命令列呼叫轉換指令
   範例：`danmaku2ass.py -s 1920x1080 -fn "MS PGothic" -fs 48 -a 0.8 -dm 5 -ds 5 input.xml -o output.ass`
4. （推薦）新增批次檔快速進行處理
   `danmaku2ass.py -s 1920x1080 -fn "Noto Sans" -fs 80 -a 0.95 -dm 5 -ds 5 %1 -o %~n1.ass`
5. 完成。

### 直接讓播放器讀取 `.xml` 檔案

挫折。

- [loaddanmaku](https://github.com/huisedenanhai/LoadDanmaku)
- [Hack of the day: extracting comments from Nicovideo](https://www.dennogumi.org/2019/01/hack-of-the-day-extracting-comments-from-nicovideo/)
