---
title: "搬家到Pop!_OS"
date: 2022-11-04T20:43:59.000Z
summary: "Pop!_OS 是一套由美國電腦硬體製造商 System76 基於 Linux 發行版系統 Ubuntu 再行修改的作業系統，採用修改自 GNOME 的桌面環境，預先安裝好 LibreOffice、FireFox 等應用程式，並有提供如欄式視窗配置、全鍵盤操作、快速啟動器等便捷功能，也提供對 AMD、NVIDIA 等 GPU 的支援，被認為是近期十分適合首次入門 Linux 世界的選擇。"
tags:
---

<p style="margin-top: 1em; text-align: center;">搬過去啦！✌</p>

## Pop!\_OS 是什麼？

Pop!\_OS 是一套由美國電腦硬體製造商 System76 基於 Linux 發行版系統 Ubuntu 再行修改的作業系統，採用修改自 GNOME 的桌面環境，預先安裝好 LibreOffice、FireFox 等應用程式，並有提供如欄式視窗配置、全鍵盤操作、快速啟動器等便捷功能，也提供對 AMD、NVIDIA 等 GPU 的支援，被認為是近期十分適合首次入門 Linux 世界的選擇。

### Why Pop!\_OS？

~~可以去找《UNIX 編程藝術》來看…~~雖然會喪失一些應用程式的相容性，但就實務範例來說，Linux 擁有比 Windows 更好的穩定性、安全性與自訂彈性，而且完全免費！對 Windows 頗有微詞而不想升到 Windows 11 的人而言，目前或許是個跳到 Linux 發行版系統的好時機。

如同 Steam Deck 也是採用 Linux 發行版系統作為基底，Linux 已經能夠滿足大多娛樂用途的需求，不論是影音播放、遊戲、實況、3D 建模、影片剪輯…等等，甚至[《艾爾登法環》在 Linux 上的表現還比在 Windows 上好](https://www.ptt.cc/bbs/C_Chat/M.1647167786.A.094.html)！[Blender 在 Linux 上的效能表現也比在 Windows 上平均快了 50%](https://www.youtube.com/watch?v=cpE2B2QSsa0)！

- [在 Arch Linux 上跑 osu!](https://hackmd.io/@nesquate/osu-on-archlinux)

但高自訂彈性也意味著使用者需要對系統有一定程度的知識，這也是過去 Linux 難以走入大眾市場的原因，雖然 Pop!\_OS 已經改善不少使用門檻上的體驗，難免還是會有類似問題，這部份 System76 也提供了[許多疑難雜症解決資源](https://support.system76.com/articles/package-manager-ubuntu/)，網路上也有許多對 Linux 有深入理解的社群，不會在找解方時像 Windows 總是被困在千篇一律的官方標準回覆裡。

- [Linux 101](https://101.ustclug.org/)

### Why not Pop!\_OS？

當然，如同上面提到有些應用程式會失去相容性，過去也有從 Windows 轉移到 Linux 的使用者埋怨 Office 文件無法相容或排版跑掉的問題，Adobe 相關軟體無法在 Linux 上使用等等，若有想搬家的意願，不管是試用模式或在網路上找資料，都建議在做足功課的情況下進行轉移，避免遇到問題時落入得再灌雙 OS 或要去借電腦的窘境。

以及像遊戲效能的部份，Linux 是透過 Wine 引入 Windows 的函式庫作為中介層去執行 Windows 的原生程式，因此雖然在系統面上的資源負擔比較小，用這種方式執行的遊戲效能可能還是劣於 Windows，可以到 [Wine Application Database](https://appdb.winehq.org/) 或 [ProtonDB](https://www.protondb.com/) 上看看想玩的遊戲執行品質如何，或是參考[如這份 2018 年製作的](https://openbenchmarking.org/result/1806206-PTS-RADEONWI59)網路上的跨平台性能測試比較。

## 安裝

- 準備一個 USB 隨身碟
- [Ventoy](https://github.com/ventoy/Ventoy)
- [Pop!\_OS](https://pop.system76.com/)

### 步驟

- 1) 解壓縮 Ventoy，執行 `Ventoy2Disk`
- 2) Device 選擇 USB 隨身碟，進行 Install
- 3) 下載 Pop!\_OS 映像檔，NVIDIA 顯示卡使用者可選附驅動版
- 4) 重開機，改以 USB 碟開機，選擇 Pop!\_OS 映像檔

Pop!\_OS 也有提供試用模式，不想立即安裝也能先試用體驗。

## 安裝後要做的事

- 本文撰寫時 Pop!\_OS 最新版本為 22.04
- [Pop!\_OS: Things to do after installation](https://mutschler.dev/linux/pop-os-post-install/#misc-tweaks-and-settings)
- 開啟終端
  - `Super+T`
- [諸君，不管用哪套 Linux 發行版本，機器一裝好，就先跑：](https://twitter.com/hiroshiyui/status/1405422305841324032)
  - `cd /etc/fonts/conf.d/ && \ sudo sh -c 'rm 11-lcdfilter-default.conf && ln -s ../conf.avail/11-lcdfilter-light.conf .' && \ sudo ln -s ../conf.avail/10-sub-pixel-rgb.conf .`

### 設定主機名稱與時區

- 安裝後亦有圖像介面可操作
- `hostnamectl set-hostname [hostname]`
- 搜尋時區列表
  - `timedatectl list-timezones | grep -i Taiwan`
- 設定時區
  - `timedatectl set-timezone [timezone]`

### 更新系統

```bash
sudo apt update && sudo apt upgrade
sudo apt dist-upgrade
sudo apt autoremove
sudo apt autoclean
sudo fwupdmgr get-devices
sudo fwupdmgr get-updates
sudo fwupdmgr update
flatpak update
sudo pop-upgrade recovery upgrade from-release
sudo reboot now
```

### Fish Shell

```bash
sudo apt install -y fish util-linux-user
chsh -s /usr/bin/fish
```

## 安裝軟體

- Pop!_OS 有提供 Pop!_Shop 可快速下載各類應用程式
- 亦可開啟終端（`Super+T`）使用指令安裝

### neofetch

- 酷炫地秀出你的系統環境
- ![neofetch](https://i.imgur.com/WTuWWyL.png)
- `sudo apt-get install neofetch`

### htop

- 監控系統資源使用狀況
- `sudo apt install htop`
- 監控 GPU 使用狀況
  - `watch -d -n 0.5 nvidia-smi`

### tmux

- `sudo apt install tmux`

### VSCode

- `sudo apt install -y code`
- 新增 GitHub SSH key
  - `cd ~/.ssh`
  - `ssh-keygen -t ed25519 -C "your_email@example.com"`
  - `ssh-add ~/.ssh/id_ed25519`
  - （非必須？）`touch ./config`：
    ```
      Host github.com
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_ed25519

      Host github.com-another-account
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_ed25519-another-account
    ```
  - `ssh-add ~/.ssh/id_ed25519`
    - 若多帳號則另一個 SSH key 也須加入
    - 查看：`ssh-add -l`
    - 刪除：`ssh-add -D`
  - GitHub -> Settings -> Access -> SSH and GPG keys
  - `ssh -T git@github.com`
    - 產生 `known_hosts`
  - `git remote set-url origin git@github.com:USERNAME/REPOSITORY.git`

### mpv

- [mpv—Linux Apps on Flathub](https://flathub.org/apps/details/io.mpv.Mpv)
  - Flatpak 安裝的 mpv 設定檔會放置於 `~/.var/app/io.mpv.Mpv/config/mpv` 
  - Unix 系統底下的 mpv shaders **引號路徑內**的 `;` 須改為 `:`

### Multimedia codecs

- `sudo apt install -y libavcodec-extra libdvd-pkg; sudo dpkg-reconfigure libdvd-pkg`

### 輸入法

- Fcitx5
  - `sudo apt install fcitx5-mozc fcitx5-chewing`
  - `im-config -n fcitx5`
  - `Super` -> `Language Support`
  - Reboot
  - `Super+A` -> `Fcitx Configuration`
    - `skk`
    - `Chewing`

### Wine

- [How to Install Wine (WineHQ) on Pop!\_OS 22.04](https://www.linuxcapable.com/install-wine-winehq-on-pop_os/)
- 安裝需求套件
  - `sudo apt install dirmngr ce-certificates software-properties-common gnupg gnupg2 apt-transport-https curl -y`
- 新增 32-bit 支援
  - `sudo dpkg --add-architecture i386`
- 匯入 WineHQ GPG 金鑰與儲存庫
  - `curl -fsSL https://dl.winehq.org/wine-builds/winehq.key | grp -- dearmor | sudo tee /usr/share/keyrings/winehq.gpg > /dev/null`
  - `echo deb [signed-by=/usr/share/keyrings/winehq.gpg] http://dl.winehq.org/wine-builds/ubuntu/jammy main | sudo tee /etc/apt/sources.list.d/winehq.list`
  - `sudo apt update`
- 安裝 Wine
  - `sudo apt install winehq-stable --install-recommends -y`
- 開啟設定
  - `winecfg`
- 使用 Wine 執行程式
  - 1- 搭配 Lutris 執行
  - 2- `wine PROGRAM [ARGUMENTS...]`
- `sudo winetricks --self-update`
- 建構 32bit 環境
  - `WINEARCH=win32 WINEPREFIX=$HOME/.wine32 winecfg`
  - `WINEARCH=win32 WINEPREFIX=$HOME/.wine32 [program]`
- 新增日語字體支援
  - `winetricks allfonts`
  - `winecfg`
    - Desktop Integration -> Message Box Text -> Meiryo
- 新增 .NET 支援
  - `sudo apt install mono-complete`
- 移除 Wine
  - `sudo apt autoremove winehq-stable -y`

### Steam

- 啟用 Proton
  - Settings -> Steam Play -> Enable Steam Play for all other titles
- 安裝遊戲於副硬碟
  - 給予 flatpak 軟體存取權限
    - `flatpak override --user --filesystem=/欲安裝的硬碟路徑 com.valvesoftware.Steam`
    - [Install Steam Linux Games on Different Hard Drive?](https://steamcommunity.com/app/221410/discussions/0/864969481983128260/)
  - 確認 flatpak 已設定的 override
    - `flatpak override --show app.id`
  - 重設 override
    - `flatpak override --reset app.id`
  - 副硬碟格式必須為 ext4？
- [steamtinkerlaunch](https://github.com/sonic2kk/steamtinkerlaunch)
  - [MangoHud](https://github.com/flightlessmango/MangoHud)
    - `flatpak install MangoHud`
    - `MANGOHUD=1 [program]`
    - `mangohud [program]`
    - `mangohud --dlsym [program]`
  - [gamemode](https://github.com/FeralInteractive/gamemode)

### OBS

- `sudo apt install -y obs-studio`

### NsCDE

- [NsCDE](https://github.com/NsCDE/NsCDE)
- 使用 Release 裡的 `.deb` 檔安裝
- 我沒裝

### Keychron Function 鍵問題

- [kurgol/keychron](https://github.com/Kurgol/keychron/blob/master/k2.md)
- [Keychron Linux Function Keys](https://mikeshade.com/posts/keychron-linux-function-keys/)
  - 長按 `Fn+X+L` 4 秒，將 fucntion 鍵列設為 Function 模式
  - `echo 0 | sudo tee /sys/module/hid_apple/parameters/fnmode`
- 於重開機後保持變更
  - `echo "options hid_apple fnmode=0" | sudo tee -a /etc/modprobe.d/hid_apple.conf`
  - `sudo update-initramfs -u`

### 應用程式捷徑

- Show Applications（`Super+A`）裡的那些東西
- `/usr/share/applications/`
- `~/.local/share/applications/`

### 其他軟體

- [DeaDBeeF](https://deadbeef.sourceforge.io/)
- [Easy Effects](https://github.com/wwmm/easyeffects)
- [Lorien](https://github.com/mbrlabs/Lorien)
- [Boop-GTK](https://github.com/zoeyfyi/Boop-GTK)
- [Input Display](https://moonspod.itch.io/input-display)

## 補充資料

- [Linux：この画面が出てやったこと](https://note.com/histone/n/ncc1d07cbe54b)
- [Pop!\_OS Keyboard Shortcuts](https://support.system76.com/articles/pop-keyboard-shortcuts/)
