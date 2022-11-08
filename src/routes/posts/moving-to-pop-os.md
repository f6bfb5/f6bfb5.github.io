---
title: "搬家到Pop!_OS"
date: 2022-11-04T20:43:59.000Z
summary: ""
tags:
---

雖然標題這樣寫，但我還沒搬，這是一篇搬離前的準備整理。

## Pop!\_OS 是什麼？

Pop!\_OS 是一套由美國電腦硬體製造商 System76 基於 Linux 發行版系統 Ubuntu 再行修改的作業系統，採用修改自 GNOME 的桌面環境，預先安裝好 LibreOffice、FireFox 等應用程式，並有提供如欄式視窗配置、全鍵盤操作、快速啟動器等便捷功能，也提供對 AMD、NVIDIA 等 GPU 的支援，被認為是近期十分適合首次入門 Linux 世界的選擇。

### Why Pop!\_OS？

~~可以去找《UNIX 編程藝術》來看…~~雖然會喪失一些應用程式的相容性，但就實務範例來說，Linux 都有比 Windows 更好的穩定性、安全性與自訂彈性，而且完全免費！在對於 Windows 頗有微詞而不想升到 Windows 11 的人而言，這時候或許是個跳到 Linux 的好時機。

而且如同 Steam Deck 也是採用 Linux 系統作為基底，Linux 已經能夠滿足大多娛樂用途的需求，不論是影音播放、遊戲、實況、3D 建模、影片剪輯…等等，甚至[《艾爾登法環》在 Linux 上的表現還比在 Windows 上好](https://www.ptt.cc/bbs/C_Chat/M.1647167786.A.094.html)！[Blender 在 Linux 上的效能表現也比在 Windows 上平均快了 50%](https://www.youtube.com/watch?v=cpE2B2QSsa0)！

但高自訂彈性也意味著使用者需要對系統有一定程度的知識，這也是過去 Linux 難以走入大眾市場的原因，雖然 Pop!_OS 已經改善不少使用門檻上的體驗，難免還是會有類似問題，不過 System76 也提供了[許多疑難雜症解決資源](https://support.system76.com/articles/package-manager-ubuntu/)，網路上也有許多對 Linux 有深入理解的社群，不會在找解方時像 Windows 總是被困在千篇一律的官方標準回覆裡。

- [Linux 101](https://101.ustclug.org/)

### Why not Pop!_OS？

當然，如同上面提到有些應用程式會失去相容性，過去也有從 Windows 轉移到 Linux 的使用者埋怨 Office 的相關檔案會有不相容的問題等等，若有想搬家的意願，不管是試用模式或在網路上找資料，都建議在做足功課的情況下進行轉移，避免遇到問題時落入得再灌雙 OS 或要去借電腦的窘境。

## 安裝

- 準備一個 USB 隨身碟
- [Ventoy](https://github.com/ventoy/Ventoy)
- [Pop!\_OS](https://pop.system76.com/)

1. 解壓縮 Ventoy，執行 `Ventoy2Disk`
2. Device 選擇 USB 隨身碟，進行 Install
3. 下載 Pop!\_OS 映像檔，NVIDIA 顯示卡使用者可選附驅動版
4. 重開機，改以 USB 碟開機，選擇 Pop!\_OS 映像檔

Pop!\_OS 也有提供試用模式，不想立即安裝也能試用體驗。

## 安裝後要做的事

- 本文撰寫時的 Pop!\_OS 最新版本為 22.04
- [Pop!\_OS: Things to do after installation](https://mutschler.dev/linux/pop-os-post-install/#misc-tweaks-and-settings)
- [諸君，不管用哪套 Linux 發行版本，機器一裝好，就先跑：](https://twitter.com/hiroshiyui/status/1405422305841324032)
  - `cd /etc/fonts/conf.d/ && \ sudo sh -c 'rm 11-lcdfilter-default.conf && ln -s ../conf.avail/11-lcdfilter-light.conf .' && \ sudo ln -s ../conf.avail/10-sub-pixel-rgb.conf .`

### 設定主機名稱

- `hostnamectl set-hostname [hostname]`

### 更改時區

- 搜尋時區列表
  - `timedatectl list-timezones | grep -i Taiwan`
- 設定時區
  - `timedatectl set-timezone [timezone]`

### 更新系統

```bash
sudo apt update
sudo apt upgrade
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

### htop

- `sudo apt install htop`

### tmux

- `sudo apt install tmux`

### VSCode

- `sudo apt install -y code`

### Multimedia codecs

- `sudo apt install -y libavcodec-extra libdvd-pkg; sudo dpkg-reconfigure libdvd-pkg`

### OBS

- `sudo apt install -y obs-studio`

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
- 完成設定
  - `winecfg`
- 使用 Wine 執行程式
  1. 直接雙擊 `.exe` 程式
  2. `wine PROGRAM [ARGUMENTS...]`
- 移除 Wine
  - `sudo apt autoremove winehq-stable -y`

### NsCDE

- [NsCDE](https://github.com/NsCDE/NsCDE)
- 使用 Release 裡的 `.deb` 檔安裝

## 補充資料

- [Linux：この画面が出てやったこと](https://note.com/histone/n/ncc1d07cbe54b)
- [Pop!\_OS Keyboard Shortcuts](https://support.system76.com/articles/pop-keyboard-shortcuts/)
