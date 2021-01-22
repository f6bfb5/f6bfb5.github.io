---
title: "Docker 筆記"
date: 2020-08-21T15:12:42.000Z
published: 2020-08-21T15:12:42.000Z
author: f6bfb5
summary:
layout: blog
---

Docker 的出現，是為了解決在 deploy 作業途中時會出現的各種問題。

## Deploy 的歷史

早前的網路環境（約莫至 1990 年左右）是以一台大型電腦做為伺服器，處理所有的 request，但是這樣的設計會受限於製造商的品牌硬體，造成高成本、欠缺柔軟性和擴充性的問題。

之後技術進步，隨著小型電腦的性能提升與價格下降，出現了串接多台小型電腦，分散配置系統與功能的構築手法，這種手法稱為 Engine downsizing，成為了當時的主流作法，但這波變化又帶來了新的問題。

### 虛擬化

首先不難想像的是隨著電腦增加造成的管理與使用的困難，有 100 台電腦就需要進行 100 次的環境設定，若之後有更新也要這 100 台電腦全部都裝過一遍，並且這些電腦並不是時常保持滿載處理的，總是會出現閒置的電腦。

並且在安全性與維護性上也有所疑慮，當其中一台電腦受到攻擊，就會影響到所有在上面執行的程式。

以及隨著作業系統的多樣化，會有在不相容的伺服器上無法執行的程式，這時出現的技術就是虛擬化，透過軟體整合多種硬體，能夠自由模擬各種規格的電腦環境。

雖然虛擬化以及虛擬機器的登場解決了許多 deploy 時會遇到的問題，但虛擬機器也有其弱點，那就是系統背後執行的，其它與程式無關的系統服務，會造成大量的系統開銷與資源浪費。

### 容器（Container）虛擬化

於是容器虛擬化因而誕生了。容器虛擬化指的是執行的程式自開發與執行環境隔離開來，能夠安全並且快速地執行多個程式。並且這套技術不需要安裝新的作業系統，而是透過系統的多個功能，讓應用程式在同一個作業系統上，執行於不同的容器隔離空間中。

### Docker

Docker 就是使用了容器虛擬化的應用程式之一，而也有許多其它使用容器虛擬化的應用程式存在。

Docker 以名為 `Dockerfile` 的檔案做為基底產生容器（執行程式），Docker 會依照檔案內所記載的依序執行指令。因此擁有 1. 能夠簡單多次產生容器 2. 能夠將容器帶著走 3. 能夠簡便管理應用程式的版本 等等許多優點。

原本 Docker 是 LinuxOS 專用的功能，之後 macOS 和 Windows 上面也有了如 `Docker Desktop for Mac` 或 `Docker for Windows` 這類先於電腦上執行 Linux 環境的虛擬機器，再於其中執行 Docker 的應用程式。

## 安裝

- MAC、Windows：[Docker Desktop for Mac and Windows | Docker](https://www.docker.com/products/docker-desktop)
- Linux：
  <br>├ 移除舊版本：`sudo apt-get remove docker docker-engine docker.io`
  <br>├ 使用腳本安裝：`curl -fsSL https://get.docker.com -o get-docker.sh`
  <br>│ `sudo sh get-docker.sh`
  <br>├ 若想使用非 root 使用者執行 docker，可將此使用者加至 `docker` 身份組中
  <br>└ `sudo usermod -aG docker your-user`

## 使用

- `docker images`：查看 images
- `docker run`：執行 images
- `docker ps`：查看執行中的 container
- 撰寫 Dockerfile

```dockerfile
# fetch node v4 LTS codename argon
FROM node:argon

# Request samplename build argument
ARG samplename

# Create app directory
RUN mkdir -p /usr/src/spfx-samples
WORKDIR /usr/src/spfx-samples

# Install app dependencies
RUN git clone https://github.com/SharePoint/sp-dev-fx-webparts.git .
WORKDIR /usr/src/spfx-samples/samples/$samplename

# Install gulp on a global scope
RUN npm install gulp -g

# RUN ["npm", "install", "gulp"]
RUN npm install
RUN npm cache clean

# Expose required ports
EXPOSE 4321 35729 5432

# Run Sample
CMD ["gulp", "serve"]
```

- 監看工具: `top`、`htop`、`ctop`、`gtop`、`conky`

## 參考資料

- [いまさらだけど Docker に入門したので分かりやすくまとめてみた - Qiita](https://qiita.com/gold-kou/items/44860fbda1a34a001fc1)
- [Docker を体系的に学べる公式チュートリアル和訳 - Qiita](https://qiita.com/Michinosuke/items/5778e0d9e9c04038903c)
- [【図解】Docker の全体像を理解する -前編-](https://qiita.com/etaroid/items/b1024c7d200a75b992fc)
- [「Docker」を全く知らない人のために「Docker」の魅力を伝えるための「Docker」入門](https://qiita.com/bremen/items/4604f530fe25786240db)
- [Docker を体系的に学び直してみた(導入編)](https://qiita.com/takuya_tsurumi/items/182d2de3f3ce7bb63edb)
- [Docker で立ち上げた開発環境を VS Code で開く!](https://qiita.com/yoskeoka/items/01c52c069123e0298660)
