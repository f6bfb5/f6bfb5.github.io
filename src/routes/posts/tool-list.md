---
title: "Toolbox"
date: 1969-07-21T02:58:00.000Z
summary: "各種電腦工具軟體整理。"
tags: Toolbox
---

各種電腦工具軟體整理。

## 系統

| 名稱                                                                                            | 說明                                                             |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Ninite](https://ninite.com/)                                                                   | 一次快速安裝各種軟體                                             |
| [Rufus](https://rufus.ie/)                                                                      | 簡易建立可開機 USB 裝置，alt: [balenaEtcher][]                   |
| [Ventoy](https://github.com/ventoy/Ventoy)                                                      | 直接使用映像檔啓動 OS                                            |
| [Flow Launcher](https://www.flowlauncher.com/)                                                  | 快速執行程式與各種功能的 launcher，alt: [wox][] 似乎已經不再維護 |
| [Everything](https://www.voidtools.com/downloads/)                                              | 超級快速的檔案搜索工具                                           |
| [Geek Uninstaller](https://geekuninstaller.com/)                                                | 會將關聯檔案一同刪除的程式反安裝工具，alt: [BCU][]               |
| [PIME](https://github.com/EasyIME/PIME/releases)                                                | 新酷音輸入法，包含可在 Windows 11 上使用的舊注音輸入法           |
| [SKK](https://dic.nicovideo.jp/a/skk)、[SKKFEP][]、[CorvusSKK][]                                | 由東北大學的佐藤雅彦開發，原本用於 Emacs 上的日文輸入法。        |
| [Divvy](https://mizage.com/divvy/)                                                              | 切割視窗位置                                                     |
| [orchis](http://www.eonet.ne.jp/~gorota/)                                                       | 快速執行程式                                                     |
| [CLaunch](https://hp.vector.co.jp/authors/VA018351/en/claunch.html)                             | 快速開啟資料夾                                                   |
| [TreeSize](https://www.jam-software.com/treesize_free/)                                         | 分析硬碟檔案空間佔用分佈，alt: [WinDirStat][]                    |
| [Auslogics Disk Defrag](https://www.auslogics.com/en/software/disk-defrag/)                     | 硬碟重組                                                         |
| [4gb_patch](https://ntcore.com/?page_id=371)                                                    | 讓 32 位元的應用程式使用超過 4GB 的記憶體（可能沒有效果）        |
| [Ctrl2cap](https://docs.microsoft.com/en-us/sysinternals/downloads/ctrl2cap)                    | 將 Caps Lock 鍵切換成 Ctrl 鍵的功能                              |
| [Autoruns](https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns)                    | 檢視各種系統相關的檔案與設定                                     |
| [SysinternalsSuite](https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite) | 微軟發佈的疑難排解工具套件                                       |
| [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)    |                                                                  |
| [Debug Monitor Tool](https://docs.microsoft.com/en-us/sysinternals/downloads/debugview)         |                                                                  |
| [NTFSLinksView](https://www.nirsoft.net/utils/ntfs_links_view.html)                             | 顯示所有的 symbolic link                                         |
| [ShellExView](https://www.nirsoft.net/utils/shexview.html)                                      | 管理 shell                                                       |
| [HWMONITOR](https://www.cpuid.com/softwares/hwmonitor.html#version-history)                     | 監測系統狀況                                                     |
| [Hayabusa](https://itib.hatenablog.com/entry/2021/12/31/222946)                                 | 快速檢測 Windows 事件                                            |
| CrystalDiskInfo                                                                                 |                                                                  |
| CrystalDiskMark                                                                                 |                                                                  |
| [RunCat](https://github.com/Kyome22/RunCat_for_windows)                                         | KAWAII                                                           |

[balenaetcher]: https://www.balena.io/etcher/
[wox]: http://www.wox.one/
[bcu]: https://www.bcuninstaller.com/
[skkfep]: http://coexe.web.fc2.com/programs.html
[corvusskk]: https://github.com/nathancorvussolis/corvusskk
[windirstat]: https://windirstat.net/

### SKK

不同於過往由輸入法解析文法，SKK 是交由使用者透過首字大寫與空白鍵，去主動提示需要轉換的語句，例如「今日も事件だダイナマイト刑事」，SKK 的輸入會變成：`Kyou moJiken daqdainamaitoDeka`，這樣的好處是能精確指定想要轉換的詞句（當然，仍不保證能有正確的詞彙，例如[ニコニコ百科上的介紹文](https://dic.nicovideo.jp/a/skk)就能從留言看到過去版本也有錯字），不必每次輸入完畢後，不論要轉換與否都得再按下 Enter 鍵，能大幅提高輸入的速度。

以及 SKK 採用快速鍵切換輸入模式：

```
   ------ l ------> [ASCII] <----- l ------
  |                  ^   |                 |
  |                  l <C-j>               |
  |       <--<C-q>-- |   v   --q-->        |
  [半形片假名]      [平假名] <--q-- [片假名]
  |       --<C-q>--> |   ^  <--<C-j>--     |
  |       --<C-j>--> L <C-j>               |
  |                  v   |                 |
   ------ L -----> [全形英文] <---- L -----
```

相較於原本日文 IME 需要使用 `F7` 至 `F10` 等功能鍵，也省下了相當程度的輸入時移動。並且除了由有志人士提供的轉換詞彙庫（可以透過以下連結安裝），SKK 也可以隨時加入自訂詞彙供日後使用。

- 設定頁可以從對輸入欄的文字模式點擊右鍵開啟
- [SKK Openlab - 辞書](http://openlab.ring.gr.jp/skk/dic-ja.html)
  - [SKK 辞書 - SKK 辞書 Wiki](http://openlab.ring.gr.jp/skk/wiki/wiki.cgi?page=SKK%BC%AD%BD%F1)
  - [SKK dictionary files gh-pages](https://skk-dev.github.io/dict/)
- 於「辞書 1」分頁點選「URL 追加」，加入想要的辭典種類網址後，點擊「取込」
- 匯入完成後，切換至其他輸入法後再切回即會生效

但語言詞彙的變化日新月異，固定的字典檔終究有無法填補的需求，對此 SKK 也能透過串接 Google API，在遇到字典檔裡沒有的詞彙時發送轉換的請求。

- [2020 年版。SKK で Google 日本語入力の辞書を使う - sasasin's blog](https://sasasin.hatenablog.com/entry/2020/06/06/192712)
- [2021 年初頭に SKK を Windows/Mac で Google 日本語入力からの候補取得といっしょに絵文字まで変換して使うための方法 - あじーん-0.0.2-SNAPSHOT](https://nishikawasasaki.hatenablog.com/entry/2021/01/07/004422)
  - `pip install google-ime-skk-py`
  - `google-ime-skk-py`

## OS

- [ReactOS](https://reactos.org/)
  - open-source Windows environment
- [ravynOS](https://ravynos.com/)
  - open-source macOS environment
- [Pop!\_OS](https://pop.system76.com/)
- [Q4OS](https://q4os.org/index.html)
- [lubuntu](https://lubuntu.me/)
- [Android-x86](https://www.android-x86.org/)
- [Virtual x86](https://copy.sh/v86/)

### not recognized as internal or external command

- `Win + R` -> `sysdm.cpl`
- Advanced -> Environment Variables...
- PATH -> Add Program Path
  - `%SYSTEMROOT%\System32`

## 建構全平台通用的環境

- [開発環境へのこだわり](https://speakerdeck.com/hsbt/kai-fa-huan-jing-hefalsekodawari)
- [fish shell](https://fishshell.com/)
- [Chocolatey Cheat Sheet](https://gist.github.com/yunga/99d04694e2466e017c5502d7c828d4f4)
- [BusyBox](https://www.busybox.net/)
- [Coreutils](https://www.gnu.org/software/coreutils/coreutils.html)

| alternative                                                | description                                                           |
| ---------------------------------------------------------- | --------------------------------------------------------------------- |
| [fzf](https://github.com/junegunn/fzf)                     | fuzzy finder, interactive filter                                      |
| [peco](https://github.com/peco/peco)                       | interactive filter                                                    |
| [zoxide](https://github.com/ajeetdsouza/zoxide)(cd)        | smarter cd command                                                    |
| [fd](https://github.com/sharkdp/fd)(find)                  | 搜尋檔案                                                              |
| [ripgrep](https://github.com/BurntSushi/ripgrep)(rg, grep) | search plain-text data sets for lines that match a regular expression |
| [sd](https://github.com/chmln/sd)(sed)                     | stream editor for filtering and transforming text                     |
| [bat](https://github.com/sharkdp/bat)(cat)                 | 顯示檔案內容                                                          |
| [dog](https://github.com/ogham/dog)(dig)                   | domain information groper                                             |
| [tealdeer](https://github.com/dbrgn/tealdeer)(man)         | an interface to the system reference manuals                          |
| [ghq](https://github.com/x-motemen/ghq)                    |                                                                       |
| [gem-src](https://github.com/amatsuda/gem-src)             |                                                                       |
| [dust](https://github.com/bootandy/dust)(du)               | 顯示當前路徑的資料夾結構與檔案空間使用率                              |
| [exa](https://github.com/ogham/exa)(ls)                    | 顯示當前路徑下的資料夾與檔案                                          |
| [duf](https://github.com/muesli/duf)(df)                   | 以圖表方式顯示硬碟使用率                                              |
| [procs](https://github.com/dalance/procs)(ps)              | 顯示執行中程序的資訊                                                  |
| [bottom](https://github.com/ClementTsang/bottom)(top)      | 顯示執行中程序的資訊，並且即時更新                                    |
| [httpie](https://github.com/httpie/httpie)(curl)           |                                                                       |

## 檔案

| 名稱                                                | 說明                         |
| --------------------------------------------------- | ---------------------------- |
| [PowerToys](https://github.com/microsoft/PowerToys) | 微軟推出的多功能系統輔助軟體 |
| [AntRenamer](https://antp.be/software/renamer)      | 快速規則式重新命名大量檔案   |
| [Unlocker](http://emptyloop.com/unlocker/)          | 強制解除檔案使用鎖定狀態     |
| [FastCopy](https://fastcopy.jp/en/)                 | 快速複製／備份檔案           |

- [jnzd/vimified-windows-explorer](https://github.com/jnzd/vimified-windows-explorer)

### 解壓縮

| 名稱                                           | 說明                               |
| ---------------------------------------------- | ---------------------------------- |
| [7-Zip](https://www.developershome.com/7-zip/) | 萬用壓縮／解壓縮工具               |
| [Bandizip](https://tw.bandisoft.com/bandizip/) | 可處理檔案名稱編碼問題的解壓縮工具 |

## 下載

| 名稱                                                                                                                   | 說明 |
| ---------------------------------------------------------------------------------------------------------------------- | ---- |
| [JDownloader](http://jdownloader.org/)                                                                                 |      |
| [Tranmission QT](https://transmissionbt.com/download/)                                                                 |      |
| [Youtube-dl](https://mrs0m30n3.github.io/youtube-dl-gui/)                                                              |      |
| [動画ゲッター](https://www.douga-getter.com/)                                                                          |      |
| [TwitchLeecher](https://github.com/Franiac/TwitchLeecher/releases)                                                     |      |
| [kakorokuRecorder](https://jp.videoproc.com/record/kakorokurecorder-download-install.htm)                              |      |
| [ニコ生の録画方法 まとめ](https://ch.nicovideo.jp/nico-lab/blomaga/ar8759)                                             |      |
| [FlickrDownloader](https://weils.net/blog/2017/01/10/flickr-downloader-%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BC%89%E5%99%A8/) |      |

## 文件

| 名稱                                                               | 說明                                           |
| ------------------------------------------------------------------ | ---------------------------------------------- |
| [Notepad++](https://notepad-plus-plus.org/)                        | 開源的強大文字編輯器                           |
| [TeraPad](https://tera-net.com/library/tpad.html)                  | 老牌的高效能文字編輯器                         |
| [HxD](https://mh-nexus.de/en/hxd/)                                 | Freeware Hex Editor and Disk Editor            |
| [Stirling](https://www.vector.co.jp/soft/win95/util/se079072.html) | Binary Editor                                  |
| [Obsidian](https://obsidian.md/)                                   | 可以將 Markdown 筆記轉換成內部連結卡片盒的軟體 |
| [Text2MindMap](https://tobloef.com/text2mindmap/)                  | 文字版心智圖                                   |
| [pytesseract](https://pypi.org/project/pytesseract/)               | 辨識圖片文字的 python library                  |

<details>
  <summary>pytesseract example</summary>

```python
try:
  from PIL import Image
except ImportError:
  import Image
import pytesseract
import os

pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
image_path = r'path to image file'

f = []
t = []
input_dir = r'path to images file'

# print(pytesseract.image_to_string(Image.open(path), lang='jpn'))
# print(pytesseract.image_to_string(Image.open(path), lang='jpn_vert'))

for root, dirs, filenames in os.walk(input_dir):
  for filename in filenames:
    try:
      print(filename)
      f.append(filename)
      img = Image.open(input_dir+ filename)
      text = pytesseract.image_to_string(img, lang='jpn')
      t.append(text)
      print(text)
      print('-='*20)
    except:
      continue

outputfile = open(input_dir + "result.txt", "w")
for element in t:
  outputfile.write(element + "\n")
outputfile.close()
```

</details>

### 語系切換

| 名稱                                                                 | 說明                         |
| -------------------------------------------------------------------- | ---------------------------- |
| [繁化姬](https://github.com/James1201/Fanhuaji-GUI-Release/releases) | 搭配詞語本地化的繁簡轉換工具 |
| [Locale Emulator](https://pooi.moe/Locale-Emulator/)                 | 切換程式執行環境語系         |
| [NTLEA](https://archive.codeplex.com/?p=ntlea)                       | 切換程式執行環境語系         |

## 網路

### 網路連線

| 名稱                                                                       | 說明                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------- |
| [OpenVPN](https://openvpn.net/download-open-vpn/)                          | VPN Client                                          |
| [WinSCP](https://winscp.net/eng/download.php)                              | SFTP client                                         |
| [Putty](https://www.putty.org/)                                            | SSH and telnet client                               |
| [MobaXterm](https://mobaxterm.mobatek.net/)                                | tabbed SSH client                                   |
| [TCPView](https://docs.microsoft.com/en-us/sysinternals/downloads/tcpview) | show detailed listings of all TCP and UDP endpoints |
| [ngrok](https://ngrok.com/)                                                | make a public ip                                    |
| [xlight](https://www.xlightftpd.com/)                                      | Windows FTP and SFTP Server                         |
| [HFS](https://www.rejetto.com/hfs/)                                        | HTTP File Server                                    |
| [croc](https://github.com/schollz/croc)                                    | securely transfer files between 2 computers         |
| [Send Anywhere](https://send-anywhere.com/)                                |                                                     |
| [AdapterWatch](https://www.nirsoft.net/utils/awatch.html)                  | 監測網路卡使用狀況                                  |
| [CurrPorts](https://www.nirsoft.net/utils/cports.html)                     | 監測應用程式使用的網路 port                         |
| [Termshark](https://termshark.io/)                                         | 命令列版本的 WireShark                              |

### 通訊軟體

| 名稱                                                    | 說明 |
| ------------------------------------------------------- | ---- |
| [Discord](https://discordapp.com/)                      |      |
| [Telegram](https://telegram.org/)                       |      |
| [Slack](https://slack.com/intl/en-tw/)                  |      |
| [MAPS.ME](https://maps.me/)                             |      |
| [BRIDGEFY](https://www.bridgefy.me/)                    |      |
| [ZELLO](https://zello.com/)                             |      |
| [PATCHWORK](https://github.com/ssbc/patchwork/releases) |      |

### 網路瀏覽

| 名稱                                                             | 說明                       |
| ---------------------------------------------------------------- | -------------------------- |
| [chrlauncher](https://www.henrypp.org/product/chrlauncher)       |                            |
| ungoogled-chromium                                               |                            |
| [icecat-win64](https://github.com/muslayev/icecat-win64)         |                            |
| [PTTStar](https://www.ptt.cc/bbs/EZsoft/M.1546241396.A.D95.html) |                            |
| [JaneXeno](http://janexeno.client.jp/janexenobeta.htm)           |                            |
| [commenomi](http://air.fem.jp/commenomi/)                        | 可顯示流動式留言的透明視窗 |

### chrome 插件

| 名稱                                                                                                                | 說明                                |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)                         | 使用類似 Vim 編輯器的方式瀏覽網站   |
| [終結內容農場](https://chrome.google.com/webstore/detail/content-farm-terminator/lcghoajegeldpfkfaejegfobkapnemjl)  | 要是感到厭煩，放棄也是一種選擇啊。  |
| [ClearURLs](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk/)                  | 移除網址的多餘內容                  |
| [TabAttack](https://chrome.google.com/webstore/detail/tabattack/ginflokhdahakklidfjlogllkkhokidj)                   | 轉換瀏覽頁面網址成為 markdown 格式  |
| [Close download bar](https://chrome.google.com/webstore/detail/close-download-bar/bkfclmjddajodogcbpohgfpdkgdecgmg) | 設定 `Alt + W` 為「關閉下載欄」功能 |
| [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)               | 快速顯示網站內容結構                |

- [Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
- [UI.Vision RPA](https://chrome.google.com/webstore/detail/uivision-rpa/gcbalfbdmfieckjlnblleoemohcganoc)
- [無料で Chrome・Firefox の操作を自動化＆ファイルのアップロードやデスクトップの操作もできる「UI.Vision」](https://gigazine.net/news/20220417-ui-vision/)
- [DeepL 翻訳（ベータ版）](https://chrome.google.com/webstore/detail/deepl-translate-beta-vers/cofdbpoegempjloogbagkncekinflcnj?hl=ja)

#### Shopping

- [Augmented Steam](https://chrome.google.com/webstore/detail/augmented-steam/dnhpnfgdlenaccegplpojghhmaamnnfp)
- [Keepa - Amazon Price Tracker](https://chrome.google.com/webstore/detail/keepa-amazon-price-tracke/neebplgakaahbhdphmkckjjcegoiijjo)
- [Add to Buyee](https://chrome.google.com/webstore/detail/add-to-buyee/ocjpgibbldacmpedgjgmcdcikjeopnpb)

#### YouTube Pack

- [fiahfy/youtube-live-chat-flow](https://github.com/fiahfy/youtube-live-chat-flow)
- [YouTubeLiveClock](https://chrome.google.com/webstore/detail/youtubeliveclock/chpodcedholiggcllnmmjlnghllddgmj)
- [Unhook](https://chrome.google.com/webstore/detail/unhook-remove-youtube-rec/khncfooichmfjbepaaaebmommgaepoid)
- [Volume Master](https://chrome.google.com/webstore/detail/volume-master/jghecgabfgfdldnmbfkhmffcabddioke)
- [Open-as-Popup](https://chrome.google.com/webstore/detail/open-as-popup/ncppfjladdkdaemaghochfikpmghbcpc)

#### Twitch Pack

- [Gumbo: Twitch Companion](https://chrome.google.com/webstore/detail/gumbo-twitch-companion/aalmjfpohaedoddkobnibokclgeefamn)
- [FrankerFaceZ](https://chrome.google.com/webstore/detail/frankerfacez/fadndhdgpmmaapbmfcknlfgcflmmmieb)
  - Enable Portrait Mode
- [TTV LOL](https://chrome.google.com/webstore/detail/ttv-lol/ofbbahodfeppoklmgjiokgfdgcndngjm)

#### NicoNico Pack

### 資安

| 名稱                                                     | 說明                             |
| -------------------------------------------------------- | -------------------------------- |
| [Sandboxie](https://github.com/sandboxie-plus/Sandboxie) | 可於沙盒環境下執行程式           |
| [LessPass](https://www.lesspass.com/#/)                  | 從 Master 密碼產生高強度雜湊密碼 |
| [Anonymouse.org](http://anonymouse.org/anonwww.html)     | 匿名掛載網頁                     |
| [aguse.jp](https://www.aguse.jp/)                        | 掃描網址安全性                   |
| [VirusTotal](https://www.virustotal.com/zh-tw/)          | 掃描網址或檔案安全性             |
| [Password Security info](https://passwordsecurity.info/) | 檢查密碼是否已遭外洩             |
| [Have I Been Pwned](https://haveibeenpwned.com/)         | 檢查信箱是否已遭外洩             |
| [Kiken URL List](http://gunkanmaki.jog.buttobi.net/)     | 危險網址內容解說                 |

## 遠端協作

- Webex
- Jitsi
- Splashtop

## 影音播放

| 名稱                                           | 說明 |
| ---------------------------------------------- | ---- |
| [mpv](https://mpv.io/)                         |      |
| [Foobar2000](https://www.foobar2000.org/)      |      |
| [MangaMeeya](https://mangameeya.softonic.jp/)  |      |
| [JPEGView](https://github.com/sylikc/jpegview) |      |

### MangaMeeya

- [Avisynth を活用しよう](https://geolog.mydns.jp/www.geocities.co.jp/comicview7/meeya_avisynth/avisynth.html)
- [アーカイブ - AviSynth.info](https://www.avisynth.info/?%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96)

```
縦横比固定リサイズ(1.5,0,0,false,false,false,false,false,false,true);
YUY2へ変換(false)
WarpSharp(-20,3,128,-0.6)
KenKunNR(256,1,128)
アンシャープマスク(130,2,0)
RGB24へ変換(false)
```

### JPEGView

```ini
ShowFullScreen=false
WrapAroundFolder=false
SkipFileOpenDialogOnStartup=true
AutoZoomMode=Fit
IniEditor=system
```

## 螢幕資料參考

| 名稱                                                                                                     | 說明           |
| -------------------------------------------------------------------------------------------------------- | -------------- |
| [PassMark Software - Video Card (GPU) Benchmark Charts](https://www.videocardbenchmark.net/gpu_list.php) | 顯示卡測分網站 |
| [DisplaySpecifications](https://www.displayspecifications.com/en)                                        | 螢幕測資       |
| [Input Lag Database](https://displaylag.com/display-database/)                                           | 顯示延遲測資   |
| [RTINGS.com](https://www.rtings.com/)                                                                    | 電視測資       |

### 螢幕測試工具

| 名稱                                                                 | 說明                                         |
| -------------------------------------------------------------------- | -------------------------------------------- |
| [LCD monitor test images](http://www.lagom.nl/lcd-test/)             | 測試對比、銳利度、輝度、灰階等效果的工具網站 |
| [LCD Delay Checker](http://bygzam.seesaa.net/article/110314791.html) | 螢幕延遲測試                                 |

## 遊戲輔助工具

| 名稱                                                                                | 說明                       |
| ----------------------------------------------------------------------------------- | -------------------------- |
| [PS3_Sixaxis_Driver](http://blog.livedoor.jp/ebiflynageruyo/archives/38271889.html) | PS3 手把驅動程式           |
| [JoyToKey](https://joytokey.net/en/)                                                | 使用手把模擬鍵盤行為       |
| [HTML5 Gamepad Tester](http://html5gamepad.com/)                                    | 手把功能測試網站           |
| [Memory Hack Software](http://memoryhacking.com/)                                   |                            |
| [WinIPS](http://fuji.drillspirits.net/winips/)                                      | 掛載 IPS 至 SFC 遊戲       |
| [Open-PS2-Loader](https://github.com/ifcaro/Open-PS2-Loader)                        | 讓 PS2 可透過 USB 讀取遊戲 |
| [GS Mode Selector](https://www21.atwiki.jp/improper_code/sp/pages/85.html)          | 更改 PS2 畫面輸出          |
| [HD_Project](https://www21.atwiki.jp/improper_code/sp/pages/69.html)                | 更改 PS2 畫面輸出          |

### 視窗化工具

| 名稱                                                                                             | 說明                                                     |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [WindowedBorderlessGaming](https://westechsolutions.net/sites/WindowedBorderlessGaming/download) | 無邊框全螢幕啟動遊戲                                     |
| [dxwnd](https://www.majorgeeks.com/files/details/dxwnd.html)                                     | 遊戲視窗化工具                                           |
| [D3DWindower](https://ux.getuploader.com/Honihoni_Republic/download/21)                          | 遊戲視窗化工具                                           |
| [3D-Analyzer](http://www.3dfxzone.it/dir/tools/3d_analyze/index.php)                             | 透過模擬改善顯示卡效能與視覺效果，亦可用於調整遊戲解析度 |

## 圖片處理

| 名稱                                                                          | 說明                        |
| ----------------------------------------------------------------------------- | --------------------------- |
| [GIMP](https://www.gimp.org/downloads/)                                       | 免費開源的圖片處理軟體      |
| [Affinity Photo](https://affinity.serif.com/en-gb/photo/)                     | PhotoShop 的類似軟體        |
| [PhotoSift](https://www.rlvision.com/photosift/about.php)                     | 使用鍵盤快速分類圖片        |
| [Ralpha Image Resizer](https://www.vector.co.jp/soft/winnt/art/se487522.html) | 批次化處理圖片              |
| [ウゴツール](https://mclover.hateblo.jp/UgoTool)                              | 製作動態塗鴉效果圖片        |
| [Gifski](https://gif.ski/)                                                    | 號稱最高品質的 GIF 壓縮程式 |
| [apngasm](http://apngasm.sourceforge.net/)                                    | 以一系列圖片製作 APNG 動圖  |
| [Pngyu](https://nukesaq88.github.io/Pngyu/)                                   | 壓縮 PNG 檔案               |

## 影片

### 剪輯

| 名稱                                                                        | 說明                                   |
| --------------------------------------------------------------------------- | -------------------------------------- |
| [AviUtl](http://spring-fragrance.mints.ne.jp/aviutl/)                       | 日本愛用的免費影片編輯軟體             |
| [NicoVisualEffects](http://nive.jp/)                                        | 以 AE 的替代品為目標開發的免費 MG 軟體 |
| [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve) | 以顏色校正功能聞名的影片剪輯軟體       |
| [Shotcut](https://shotcut.org/)                                             | 開源免費跨平台的影片剪輯軟體           |
| [Avidemux](http://avidemux.sourceforge.net/)                                | 簡易功能的開源影片編輯軟體             |
| [LosslessCut](https://github.com/mifi/lossless-cut/releases)                | 無失真的影片剪輯軟體                   |

### 學習資料

- [motiontable](http://foxcodex.html.xdomain.jp/)
- [知識経験ゼロから映像を作るためにした 7 つのこと](https://note.com/lon_comb/n/n853d7a121e8d)
- [Aviutl Tips - 001 「動画をストップモーションっぽくしよう」](https://qiita.com/Aodaruma/items/11338a2b727649dc192b)
- [為什麼我的合成看起來不真實](http://evanwen.weebly.com/28858201604063625105303402151225104304753621520358199813049523526.html)
- [60『静止した時間の中で』メイキング](http://oomugi.hatenablog.com/entry/2020/06/27/222707)
- [ＣＧ制作演習資料](http://web.wakayama-u.ac.jp/~tokoi/cgpe2020.html)
- [Hyperlapse：讓你的縮時活起來](https://www.jacksonlin.net/20180118-how-to-shoot-hyperlapse/)
- [你應該使用動態模糊(Motion Blur)嗎?](https://medium.com/us-motion-translator/%E4%BD%A0%E6%87%89%E8%A9%B2%E4%BD%BF%E7%94%A8%E5%8B%95%E6%85%8B%E6%A8%A1%E7%B3%8A-motion-blur-%E5%97%8E-e0b956a1e7b5)
- [自我進修 MG 的方法](https://medium.com/small-stuff/mg-note-01-af57a073b79c)
- [麦 Baku](https://baku89.com/articles)
- [AviUtl&テクニック - FLAPPER](https://seguimiii.com/category/aviutl-tech)

### 特效

| 名稱                                                  | 說明                                  |
| ----------------------------------------------------- | ------------------------------------- |
| [Delir](https://delir.studio/)                        | 開源的影片特效後製軟體                |
| [NATRON](https://natrongithub.github.io/)             | 注重於 Motion Graphics 的影片特效軟體 |
| [HitFilm](https://fxhome.com/product/hitfilm-express) |                                       |
| [Cavalry](https://cavalry.scenegroup.co/)             | 類似 AfterEffects 的 影片特效軟體     |
| [AnimeEffects](http://animeeffects.org/ja/)           | 可以處理圖片自由變型的後製軟體        |

- [Olive](https://www.olivevideoeditor.org/download.php)
- [NiVE](http://nive.jp/NiVE2/index.php?NiVE%A4%CB%A4%C4%A4%A4%A4%C6)

#### After Effects

- [KEYboard](https://www.notion.so/KEYboard-0da1a93393b44b96bea79482b98b7786)

### 輔助

| 名稱                                                                  | 說明                |
| --------------------------------------------------------------------- | ------------------- |
| [GANTAI](https://fairway.ne.jp/gantai/)                               | 快速加上馬賽克      |
| [Mkvtoolnix](https://mkvtoolnix.download/)                            | 處理 Mastroska 檔案 |
| [Aegisub](https://github.com/Aegisub/Aegisub)                         | 影片字幕編輯軟體    |
| [SubtitleEdit](https://www.nikse.dk/subtitleedit)                     | 影片字幕編輯軟體    |
| [pyTranscriber](https://github.com/raryelcostasouza/pyTranscriber)    | 自動產生字幕軟體    |
| [mtn](https://gitlab.com/movie_thumbnailer/mtn/-/wikis/home#download) | 製作影片縮時一覽圖  |

- [Revan654/movie-thumbnailer-mtn](https://github.com/Revan654/movie-thumbnailer-mtn)
- `mtn.exe -c 4 -w 1024 -h 0 -r 0 -s 60 -z -P -f [path-to-font-file] [video-file]`

### 錄影

- [LICEcap](https://www.cockos.com/licecap/)
- [ScreenToGif](https://www.screentogif.com/)

### 直播

- [OBS Studio](https://obsproject.com/ja)
- [Wirecast](http://www.telestream.net/wirecast/)
- [CameraFi Live](https://play.google.com/store/apps/details?id=com.vaultmicro.camerafi.live&hl=zh_TW)
- [CamTwist](https://camtwiststudio.com/)
- [AmaRecTV](http://www.amarectv.com/)
- [實作在家裡自架 IRL 戶外直播伺服器](https://hitorigs.live/irl-server-setting-up/)

### 手繪動畫

| 名稱                                                                     | 說明                         |
| ------------------------------------------------------------------------ | ---------------------------- |
| [OpenToonz](https://opentoonz.github.io/index.html)                      | 吉卜力愛用的開源動畫製作軟體 |
| [OPTPiX SpriteStudio](https://www.webtech.co.jp/spritestudio/index.html) | 製作 Live2D 動畫專用的工具   |

- [TVPaint](https://www.tvpaint.com/)
- [CACANi](https://cacani.sg/?v=3d9975706be3)
- [Tools OLM Digital R&D](https://olm.co.jp/rd/technology/tools/?lang=en)

## 遊戲製作

- [everestpipkin/tools-list](https://github.com/everestpipkin/tools-list)
  - [GB Studio](https://www.gbstudio.dev/)
  - [NoCode で GB ソフトができるソフトウェア『GBStudio』の仕組みを調べてみた](https://qiita.com/Akatsuki_py/items/a5981582d0cf93a577f3)
- [ジャンル別ゲームの作り方とアルゴリズムまとめ](https://nslab.hatenablog.com/entry/20090627/1246028707)
  - アクションゲームアルゴリズムマニアックス
  - パズルゲームアルゴリズムマニアックス
  - シューティングゲームアルゴリズムマニアックス
- [2D 当たり判定超入門](http://www.zengeren.com/content/data/05/05_2DCollision.pdf)
- [衝突判定 2D 編](https://qiita.com/Nekonecode/items/2d26902d5656fd3f1aa5)
- [ゲームプランナーに役立ちそうな資料まとめ Web 編](https://my-syumi-game.hatenablog.com/entry/2021/08/12/011604)
- [BYTEPATH #0 - Introduction](https://github.com/adnzzzzZ/blog/issues/30)
- [心が折れずにゲーム開発を続ける方法](https://docs.google.com/presentation/d/1WYo14faJY9LVSAazTT3_FCoCYv48JODZlZO7rppuZPQ/edit#slide=id.g89fd1a9fd7_2_316)
- [一般的な RPG の経験値を計算してみる](https://qiita.com/yuji_yasuhara/items/83a67a784d4d6152a2de)
- [ドット絵のキャラクターを自然に 3D 空間に馴染ませるテクニック](https://qiita.com/flankids/items/3a69bbdc4b52d0a516ef)
- [マリオカートの ER 図について考える](https://qiita.com/assu_mz/items/9d80320e6f778d83c61f)
- [Houdini でアニメっぽいシルエット・ディテールを作成する](https://flypot.jp/2019/10/18/houdini-anime-style/)
- [ShaderGraph](http://r-ngtm.hatenablog.com/archive/category/ShaderGraph)

### Unity

- [Bolt](https://assetstore.unity.com/packages/tools/visual-scripting/bolt-163802)
- [[Unity]スパイダーバース感!?モーション FPS 制御によるアニメチックな映像表現](https://qiita.com/flankids/items/c36ccdc02031fa304365)

## 音樂

| 名稱                                                                   | 說明                     |
| ---------------------------------------------------------------------- | ------------------------ |
| [Audacity](https://www.audacityteam.org/)                              |                          |
| [GoldWave](https://www.goldwave.com/)                                  |                          |
| [VocalShifter](http://ackiesound.ifdef.jp/download.html#vs)            |                          |
| [MP3Tag](https://www.mp3tag.de/en/)                                    |                          |
| [Youlean Loudness Meter 2](https://youlean.co/youlean-loudness-meter/) | 監控麥克風輸入的音量響度 |
| [Orban Loudness Meter 2](https://www.orban.com/meter)                  | 監控電腦上播放的音量響度 |

## 字體

### 綜藝／POP 風字體

| 名稱                                                                         |
| ---------------------------------------------------------------------------- |
| [しねきゃぷしょん](https://www.vector.co.jp/soft/data/writing/se314690.html) |
| [瀬戸フォント](https://nonty.net/font/freefont/setofont/)                    |
| [あくあフォント](https://www.vector.co.jp/soft/data/writing/se244261.html)   |
| [みかちゃん](http://mikachan.osdn.jp/dl.html)                                |
| [ふい字](https://studio-kikoro.appspot.com/blog/20151208_font.html)          |
| [アームド・レモン](https://www.vector.co.jp/soft/data/writing/se334877.html) |
| [ホリディ MDJP05](http://mksd.jp/holiday05.html)                             |
| [殴り書きクレヨン](http://font.sumomo.ne.jp/font_2.html)                     |
| [仕事メモ書き](http://font.sumomo.ne.jp/shigoto.html)                        |
| [KF ひま字](https://www.kfstudio.net/font/kfhimaji/)                         |
| [Y.Oz Vox](http://yozvox.web.fc2.com/82788144826E829A81408275828F8298.html)  |
| [清松手寫體](https://github.com/jasonhandwriting/JasonHandwriting)           |
| [ヘタレ字](http://bakafonts.kyakirun.com/japanese/page2.htm)                 |

### 不可商用 or 需聯絡

| 名稱                         |
| ---------------------------- |
| [しょかきうたげ][]           |
| [ainezunouzu フォント][]     |
| [三丁目フォント][]           |
| [ラムダシステム日本語書体][] |
| [SH G30][]                   |

[しょかきうたげ]: https://shokaki.hatenablog.jp/entry/2019/08/06/172131
[ainezunouzu フォント]: https://web.archive.org/web/20190104214816/http://www.geocities.jp/o030b/ainezunouzu/font/font20121018.html
[三丁目フォント]: https://web.archive.org/web/20190330044820/http://www.geocities.jp/bokurano_yume/
[ラムダシステム日本語書体]: https://www.lambda.co.jp/contents/font_japanese.html
[sh g30]: http://smart-pda.net/isourou/other/e830w/Chapter-0402.html
http://smart-pda.net/tips/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%82%92%E5%A4%89%E3%81%88%E3%82%88%E3%81%86/

<style>
table {
  width: 100%;
  table-layout: fixed;
}
tr {
  display: flex;
  max-width: 100%;
}
tr th {
  word-break: keep-all;
}
tr td:nth-child(1) {
  min-width: 50%;
  flex-basis: 50%;
  flex-wrap: nowrap;

  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
}

@media screen and (max-width: 576px) {
  tr {
    flex-direction: column;
  }
  tr td:nth-child(1) {
    flex-basis: 100%;
  }
}
</style>
