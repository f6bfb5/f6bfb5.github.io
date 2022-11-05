---
title: "搬家到Pop!_OS"
date: 2022-11-04T20:43:59.000Z
summary: ""
tags:
---

雖然標題這樣寫，但我還沒搬，這是一篇搬離前的準備整理。

## 安裝

- 準備一個 USB 隨身碟
- [Ventoy](https://github.com/ventoy/Ventoy)
- [Pop!_OS](https://pop.system76.com/)

1. 解壓縮 Ventoy，執行 `Ventoy2Disk`
2. Device 選擇 USB 隨身碟，進行 Install
3. 下載 Pop!\_OS 映像檔，NVIDIA 顯示卡使用者可選附驅動版
4. 重開機，改以 USB 碟開機，選擇 Pop!\_OS 映像檔

Pop!\_OS 也有提供試用環境，不想立即安裝也能試用體驗。

## 安裝後要做的事

- 本文撰寫時的 Pop!_OS 最新版本為 22.04
- [Pop!_OS: Things to do after installation](https://mutschler.dev/linux/pop-os-post-install/#misc-tweaks-and-settings)
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

### VSCode

- `sudo apt install -y code`

### Multimedia codecs

- `sudo apt install -y libavcodec-extra libdvd-pkg; sudo dpkg-reconfigure libdvd-pkg`

### OBS

- `sudo apt install -y obs-studio`

### Wine

- [How to Install Wine (WineHQ) on Pop!_OS 22.04](https://www.linuxcapable.com/install-wine-winehq-on-pop_os/)
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