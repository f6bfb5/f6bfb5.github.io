---
title: "Toolbox - 電腦系統篇"
date: 2019-10-21T18:10:11.000Z
summary: "各種電腦工具軟體整理。"
tags: Toolbox
---

<style>
table {
  width: 100%;
}
table td:nth-child(1) {
  width: 25%;
  padding-left: 2em;
}
table td:nth-child(3) {
  width: 20%;
  text-align: center;
}
</style>

各種電腦工具軟體整理。

## 系統

| 名稱                                                                                            | 說明                                                                                                        | 付費     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| [Ninite](https://ninite.com/)                                                                   | 一次快速安裝各種軟體                                                                                        | FREE     |
| [Flow Launcher](https://www.flowlauncher.com/)                                                  | 快速執行程式與各種功能的 launcher，alt: [wox][wox_link] 似乎已經不再維護                                    | FREE     |
| [Everything](https://www.voidtools.com/downloads/)                                              | 超級快速的檔案搜索工具                                                                                      | FREE     |
| [Geek Uninstaller](https://geekuninstaller.com/)                                                | 會將關聯檔案一同刪除的程式反安裝工具，alt: [BCU][bcu_link]                                                  | 具付費版 |
| [PIME](https://github.com/EasyIME/PIME/releases)                                                | 新酷音輸入法，包含可在 Windows 11 上使用的舊注音輸入法                                                      | FREE     |
| [SKK](https://dic.nicovideo.jp/a/skk)                                                           | 由東北大學的佐藤雅彦開發，原本用於 Emacs 上的日文輸入法。[SKKFEP][skkfep_link]、[CorvusSKK][corvusskk_link] | FREE     |
| [Divvy](https://mizage.com/divvy/)                                                              | 切割視窗位置                                                                                                | 具付費版 |
| [orchis](http://www.eonet.ne.jp/~gorota/)                                                       | 快速執行程式                                                                                                | FREE     |
| [CLaunch](https://hp.vector.co.jp/authors/VA018351/en/claunch.html)                             | 快速開啟資料夾                                                                                              | FREE     |
| [Rufus](https://rufus.ie/)                                                                      | 簡易建立可開機 USB 裝置，alt: [balenaEtcher][balenaetcher_link]                                             | FREE     |
| [TreeSize](https://www.jam-software.com/treesize_free/)                                         | 分析硬碟檔案空間佔用分佈，alt: [WinDirStat][windirstat_link]                                                | FREE     |
| [Auslogics Disk Defrag](https://www.auslogics.com/en/software/disk-defrag/)                     | 硬碟重組                                                                                                    | 具付費版 |
| [4gb_patch](https://ntcore.com/?page_id=371)                                                    | 讓 32 位元的應用程式使用超過 4GB 的記憶體（可能沒有效果）                                                   | FREE     |
| [Ctrl2cap](https://docs.microsoft.com/en-us/sysinternals/downloads/ctrl2cap)                    | 將 Caps Lock 鍵切換成 Ctrl 鍵的功能                                                                         | FREE     |
| [Autoruns](https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns)                    | 檢視各種系統相關的檔案與設定                                                                                | FREE     |
| [SysinternalsSuite](https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite) | 微軟發佈的疑難排解工具套件                                                                                  | FREE     |
| [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)    |                                                                                                             | FREE     |
| [Debug Monitor Tool](https://docs.microsoft.com/en-us/sysinternals/downloads/debugview)         |                                                                                                             | FREE     |
| [NTFSLinksView](https://www.nirsoft.net/utils/ntfs_links_view.html)                             | 顯示所有的 symbolic link                                                                                    | FREE     |
| [ShellExView](https://www.nirsoft.net/utils/shexview.html)                                      | 管理 shell                                                                                                  | FREE     |
| [HWMONITOR](https://www.cpuid.com/softwares/hwmonitor.html#version-history)                     | 監測系統狀況                                                                                                | FREE     |
| [Hayabusa](https://itib.hatenablog.com/entry/2021/12/31/222946)                                 | 快速檢測 Windows 事件                                                                                       | FREE     |
| CrystalDiskInfo                                                                                 |                                                                                                             | FREE     |
| CrystalDiskMark                                                                                 |                                                                                                             | FREE     |
| [RunCat](https://github.com/Kyome22/RunCat_for_windows)                                         | KAWAII                                                                                                      | FREE     |

[wox_link]: http://www.wox.one/
[bcu_link]: https://www.bcuninstaller.com/
[skkfep_link]: http://coexe.web.fc2.com/programs.html
[corvusskk_link]: https://github.com/nathancorvussolis/corvusskk
[balenaetcher_link]: https://www.balena.io/etcher/
[windirstat_link]: https://windirstat.net/

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

## 建構全平台通用的環境

- [開発環境へのこだわり](https://speakerdeck.com/hsbt/kai-fa-huan-jing-hefalsekodawari)
- [fish shell](https://fishshell.com/)
- [Chocolatey Cheat Sheet](https://gist.github.com/yunga/99d04694e2466e017c5502d7c828d4f4)

| alternative                                      | description                                                           | Linux command |
| ------------------------------------------------ | --------------------------------------------------------------------- | ------------- |
| [fzf](https://github.com/junegunn/fzf)           | fuzzy finder, interactive filter                                      |               |
| [peco](https://github.com/peco/peco)             | interactive filter                                                    |               |
| [zoxide](https://github.com/ajeetdsouza/zoxide)  | smarter cd command                                                    | cd            |
| [fd](https://github.com/sharkdp/fd)              | search for files in a directory hierarchy                             | find          |
| [ripgrep](https://github.com/BurntSushi/ripgrep) | search plain-text data sets for lines that match a regular expression | grep          |
| [sd](https://github.com/chmln/sd)                | stream editor for filtering and transforming text                     | sed           |
| [bat](https://github.com/sharkdp/bat)            | concatenate files and print on the standard output                    | cat           |
| [dog](https://github.com/ogham/dog)              | domain information groper                                             | dig           |
| [tealdeer](https://github.com/dbrgn/tealdeer)    | an interface to the system reference manuals                          | man           |
| [ghq](https://github.com/x-motemen/ghq)          |                                                                       |               |
| [gem-src](https://github.com/amatsuda/gem-src)   |                                                                       |               |

## 檔案

| 名稱                                                | 說明                         | 付費 |
| --------------------------------------------------- | ---------------------------- | ---- |
| [PowerToys](https://github.com/microsoft/PowerToys) | 微軟推出的多功能系統輔助軟體 | FREE |
| [AntRenamer](https://antp.be/software/renamer)      | 快速規則式重新命名大量檔案   | FREE |
| [Unlocker](http://emptyloop.com/unlocker/)          | 強制解除檔案使用鎖定狀態     | FREE |
| [FastCopy](https://fastcopy.jp/en/)                 | 快速複製／備份檔案           | FREE |

- [jnzd/vimified-windows-explorer](https://github.com/jnzd/vimified-windows-explorer)

### 解壓縮

| 名稱                                           | 說明                               | 付費 |
| ---------------------------------------------- | ---------------------------------- | ---- |
| [7-Zip](https://www.developershome.com/7-zip/) | 萬用壓縮／解壓縮工具               | FREE |
| [Bandizip](https://tw.bandisoft.com/bandizip/) | 可處理檔案名稱編碼問題的解壓縮工具 | FREE |

## 文件

| 名稱                                                               | 說明                                           | 付費 |
| ------------------------------------------------------------------ | ---------------------------------------------- | ---- |
| [Notepad++](https://notepad-plus-plus.org/)                        | 開源的強大文字編輯器                           | FREE |
| [TeraPad](https://tera-net.com/library/tpad.html)                  | 老牌的高效能文字編輯器                         | FREE |
| [HxD](https://mh-nexus.de/en/hxd/)                                 | Freeware Hex Editor and Disk Editor            |      |
| [Stirling](https://www.vector.co.jp/soft/win95/util/se079072.html) | Binary Editor                                  |      |
| [Obsidian](https://obsidian.md/)                                   | 可以將 Markdown 筆記轉換成內部連結卡片盒的軟體 |      |
| [Text2MindMap](https://tobloef.com/text2mindmap/)                  | 文字版心智圖                                   | FREE |
| [pytesseract](https://pypi.org/project/pytesseract/)               | 辨識圖片文字的 python library                  | FREE |

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

| 名稱                                                                 | 說明                         | 付費 |
| -------------------------------------------------------------------- | ---------------------------- | ---- |
| [繁化姬](https://github.com/James1201/Fanhuaji-GUI-Release/releases) | 搭配詞語本地化的繁簡轉換工具 | FREE |
| [Locale Emulator](https://pooi.moe/Locale-Emulator/)                 | 切換程式執行環境語系         | FREE |
| [NTLEA](https://archive.codeplex.com/?p=ntlea)                       | 切換程式執行環境語系         | FREE |

## 網路

### 網路連線

| 名稱                                                                       | 說明                                                | 付費 |
| -------------------------------------------------------------------------- | --------------------------------------------------- | ---- |
| [OpenVPN](https://openvpn.net/download-open-vpn/)                          | VPN Client                                          | FREE |
| [WinSCP](https://winscp.net/eng/download.php)                              | SFTP client                                         | FREE |
| [Putty](https://www.putty.org/)                                            | SSH and telnet client                               | FREE |
| [MobaXterm](https://mobaxterm.mobatek.net/)                                | tabbed SSH client                                   | FREE |
| [TCPView](https://docs.microsoft.com/en-us/sysinternals/downloads/tcpview) | show detailed listings of all TCP and UDP endpoints | FREE |
| [ngrok](https://ngrok.com/)                                                | make a public ip                                    |      |
| [xlight](https://www.xlightftpd.com/)                                      | Windows FTP and SFTP Server                         |      |
| [HFS](https://www.rejetto.com/hfs/)                                        | HTTP File Server                                    |      |
| [croc](https://github.com/schollz/croc)                                    | securely transfer files between 2 computers         |      |
| [Send Anywhere](https://send-anywhere.com/)                                |                                                     |      |
| [AdapterWatch](https://www.nirsoft.net/utils/awatch.html)                  | 監測網路卡使用狀況                                  | FREE |
| [CurrPorts](https://www.nirsoft.net/utils/cports.html)                     | 監測應用程式使用的網路 port                         | FREE |
| [Termshark](https://termshark.io/)                                         | 命令列版本的 WireShark                              | FREE |

### 通訊軟體

| 名稱                                                    | 說明 | 付費 |
| ------------------------------------------------------- | ---- | ---- |
| [Discord](https://discordapp.com/)                      |      |      |
| [Telegram](https://telegram.org/)                       |      |      |
| [Slack](https://slack.com/intl/en-tw/)                  |      |      |
| [MAPS.ME](https://maps.me/)                             |      |      |
| [BRIDGEFY](https://www.bridgefy.me/)                    |      |      |
| [ZELLO](https://zello.com/)                             |      |      |
| [PATCHWORK](https://github.com/ssbc/patchwork/releases) |      |      |

### 網路瀏覽

| 名稱                                                             | 說明                       | 付費 |
| ---------------------------------------------------------------- | -------------------------- | ---- |
| [chrlauncher](https://www.henrypp.org/product/chrlauncher)       |                            |      |
| ungoogled-chromium                                               |                            |      |
| [icecat-win64](https://github.com/muslayev/icecat-win64)         |                            |      |
| [PTTStar](https://www.ptt.cc/bbs/EZsoft/M.1546241396.A.D95.html) |                            | FREE |
| [JaneXeno](http://janexeno.client.jp/janexenobeta.htm)           |                            | FREE |
| [commenomi](http://air.fem.jp/commenomi/)                        | 可顯示流動式留言的透明視窗 | FREE |

### chrome 插件

| 名稱                                                                                                                | 說明                                |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)                         | 使用類似 Vim 編輯器的方式瀏覽網站   |
| [Feedbro](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa)                       | RSS 訂閱插件                        |
| [終結內容農場](https://chrome.google.com/webstore/detail/content-farm-terminator/lcghoajegeldpfkfaejegfobkapnemjl)  | 要是感到厭煩，放棄也是一種選擇啊。  |
| [ClearURLs](https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk/)                  | 移除網址的多餘內容                  |
| [TabAttack](https://chrome.google.com/webstore/detail/tabattack/ginflokhdahakklidfjlogllkkhokidj)                   | 轉換瀏覽頁面網址成為 markdown 格式  |
| [Close download bar](https://chrome.google.com/webstore/detail/close-download-bar/bkfclmjddajodogcbpohgfpdkgdecgmg) | 設定 `Alt + W` 為「關閉下載欄」功能 |
| [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)               | 快速顯示網站內容結構                |

- [Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
- [UI.Vision RPA](https://chrome.google.com/webstore/detail/uivision-rpa/gcbalfbdmfieckjlnblleoemohcganoc)
- [無料で Chrome・Firefox の操作を自動化＆ファイルのアップロードやデスクトップの操作もできる「UI.Vision」](https://gigazine.net/news/20220417-ui-vision/)
- [DeepL 翻訳（ベータ版）](https://chrome.google.com/webstore/detail/deepl-translate-beta-vers/cofdbpoegempjloogbagkncekinflcnj?hl=ja)

#### Feedbro

| 名稱                                                                | 說明             | 種類 |
| ------------------------------------------------------------------- | ---------------- | ---- |
| [jp-locale](https://github.com/ktkr3d/feedbro-locale)               | 日文化           | 設定 |
| [ニコニコ動画](https://www.nicovideo.jp/rss)                        | NicoNico 動畫    | 來源 |
| Youtube                                                             | 貼上頻道網址即可 | 來源 |
| [ライブドアブログ](https://help.blogpark.jp/archives/52366452.html) | Livedoor Blog    | 來源 |
| [報導者](https://public.twreporter.org/rss/twreporter-rss.xml)      | 報導者           | 來源 |

- [Get podcasts RSS Feed Urls](https://getrssfeed.com/)

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

| 名稱                                                     | 說明                             | 類型 |
| -------------------------------------------------------- | -------------------------------- | ---- |
| [Sandboxie](https://github.com/sandboxie-plus/Sandboxie) | 可於沙盒環境下執行程式           | 程式 |
| [LessPass](https://www.lesspass.com/#/)                  | 從 Master 密碼產生高強度雜湊密碼 | 插件 |
| [Anonymouse.org](http://anonymouse.org/anonwww.html)     | 匿名掛載網頁                     | 網站 |
| [aguse.jp](https://www.aguse.jp/)                        | 掃描網址安全性                   | 網站 |
| [VirusTotal](https://www.virustotal.com/zh-tw/)          | 掃描網址或檔案安全性             | 網站 |
| [Password Security info](https://passwordsecurity.info/) | 檢查密碼是否已遭外洩             | 網站 |
| [Have I Been Pwned](https://haveibeenpwned.com/)         | 檢查信箱是否已遭外洩             | 網站 |
| [Kiken URL List](http://gunkanmaki.jog.buttobi.net/)     | 危險網址內容解說                 | 網站 |

### 留存資訊

- [Quotebacks - Quote the web](https://quotebacks.net/)

  - 網頁服務，備份網路上的文字內容與來源，可手動將內容貼至網頁內的文字框，或使用所提供的 Bookmarklet 可於反白選取文字後快速產生備份內容。
  <blockquote class="quoteback" darkmode="" data-title="ネットでなにも発信しないのが最適解になってきた" data-author="@hatenaanond" cite="https://anond.hatelabo.jp/20211017124401">
  <p>結果、<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E3%83%8D%E3%83%83%E3%83%88" target="_blank" rel="noopener">ネット</a>では当たり<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E3%81%95%E3%82%8F%E3%82%8A" target="_blank" rel="noopener">さわり</a>のないことだけ書いて、<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E3%83%8D%E3%83%83%E3%83%88" target="_blank" rel="noopener">ネット</a>では誰とも<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E4%BA%A4%E6%B5%81" target="_blank" rel="noopener">交流</a>しないのが最適解になってきた。</p><p><a class="keyword" href="https://anond.hatelabo.jp/keyword/%E3%83%8D%E3%83%83%E3%83%88" target="_blank" rel="noopener">ネット</a>で発信すること<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E8%87%AA%E4%BD%93" target="_blank" rel="noopener">自体</a>が<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E3%83%AA%E3%82%B9%E3%82%AF" target="_blank" rel="noopener">リスク</a>だし、<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88" target="_blank" rel="noopener">メリット</a>ないし、<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E4%B8%8D%E5%BF%AB" target="_blank" rel="noopener">不快</a>な思いするだけっていう<a class="keyword" href="https://anond.hatelabo.jp/keyword/%E4%B8%96%E7%95%8C" target="_blank" rel="noopener">世界</a>になりつつある。</p>
  <footer>@hatenaanond<cite> <a href="https://anond.hatelabo.jp/20211017124401">https://anond.hatelabo.jp/20211017124401</a></cite></footer>
  </blockquote><script note="" src="https://cdn.jsdelivr.net/gh/Blogger-Peer-Review/quotebacks@1/quoteback.js"></script>

- [WorldBrain's Memex](https://getmemex.com/)
  - Chrome 插件，除了可備份網頁成為書籤，也可畫線標註重點，或於其上加入文字註記與標籤，並可設計客製化的匯出格式，方便整合至其他筆記軟體內。
- [Hypothesis](https://web.hypothes.is/)
  - Chrome 插件，可共同協作註解或劃記並討論一篇網頁文章的內容。

## 遠端協作

- Webex
- Jitsi
- Splashtop

## 影音播放

| 名稱                                           | 說明 | 付費 |
| ---------------------------------------------- | ---- | ---- |
| [mpv](https://mpv.io/)                         |      |      |
| [Foobar2000](https://www.foobar2000.org/)      |      |      |
| [MangaMeeya](https://mangameeya.softonic.jp/)  |      |      |
| [JPEGView](https://github.com/sylikc/jpegview) |      |      |

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

## 下載

| 名稱                                                                                                                   | 說明 | 付費 |
| ---------------------------------------------------------------------------------------------------------------------- | ---- | ---- |
| [JDownloader](http://jdownloader.org/)                                                                                 |      |      |
| [Tranmission QT](https://transmissionbt.com/download/)                                                                 |      |      |
| [Youtube-dl](https://mrs0m30n3.github.io/youtube-dl-gui/)                                                              |      |      |
| [動画ゲッター](https://www.douga-getter.com/)                                                                          |      |      |
| [TwitchLeecher](https://github.com/Franiac/TwitchLeecher/releases)                                                     |      |      |
| [kakorokuRecorder](https://jp.videoproc.com/record/kakorokurecorder-download-install.htm)                              |      |      |
| [ニコ生の録画方法 まとめ](https://ch.nicovideo.jp/nico-lab/blomaga/ar8759)                                             |      |      |
| [FlickrDownloader](https://weils.net/blog/2017/01/10/flickr-downloader-%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BC%89%E5%99%A8/) |      |      |
