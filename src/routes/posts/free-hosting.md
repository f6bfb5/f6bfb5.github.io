---
title: "Free Hosting Platform"
date: 2020-01-19T12:37:01.000Z
published: 2020-01-19T12:37:01.000Z
author: f6bfb5
summary:
layout: blog
---

#### Anchor links using remark-slug

- [Heroku](#heroku)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [Firebase](#firebase)
- [Amazon AWS](#amazon-aws)

## [Heroku](https://www.heroku.com/)

### 環境建置

#### 安裝

- node.js 版本須 > 8
- 須安裝 npm
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

#### 登入

`heroku login`

### 部署

#### 創建 Git 與連結 App

```bash
git init
git add .
git commit -m 'first commit'

heroku create [app-name]
heroku git:remote -a [app-name]

git push heroku master
```

heroku 需要 start 指令才可建置專案，因此需於 `package.json` 裡加入:

```json
"scripts": {
  "test": echo \"Error: no test specified\" && exit 1",
  "start": "node index.js"
},
```

修改專案名稱: `heroku apps:rename --app [old-name] [new-name]`
檢視遠端連結: `git remote -v`

````

### 設置 MySQL

```bash
heroku addons:create cleardb:ignite
heroku config | grep CLEARDB_DATABASE_URL
````

## [Netlify](https://www.netlify.com/)

## [Vercel](https://vercel.com/)

## [Firebase](https://firebase.google.com/)

- [Firebase console](https://console.firebase.google.com/u/0/)
- BaaS (Backend as a Service)

### [介紹](https://qiita.com/uhooi/items/aa6945a5da5dd6172d2b)

1. [Cloud Firestore](https://firebase.google.com/products/firestore)
   <br>├ NoSQL Database
   <br>├ 範例：
   <br>├ iOS App (Swift): [UhooiPicBook/MonstersRepository.swift](https://github.com/uhooi/UhooiPicBook/blob/master/UhooiPicBook/Repository/Monsters/MonstersRepository.swift)
   <br>├ Android App (Kotlin): [UhooiPicBook-Android/MonstersFirestoreClient.kt](https://github.com/uhooi/UhooiPicBook-Android/blob/master/app/src/main/java/com/theuhooi/uhooipicbook/repository/monsters/firebase/MonstersFirestoreClient.kt)
   <br>│ [UhooiPicBook-Android/MonsterItem.kt](https://github.com/uhooi/UhooiPicBook-Android/blob/master/app/src/main/java/com/theuhooi/uhooipicbook/modules/monsterlist/entities/MonsterItem.kt)
   <br>└ Security Rule Test (Typescript): [uhooi/UhooiPicBook-Firebase](https://github.com/uhooi/UhooiPicBook-Firebase)
2. [Cloud Functions](https://firebase.google.com/products/functions)
   <br>└ 執行 serverless back-end code
3. [Authentication](https://firebase.google.com/products/auth)
   <br>├ 認證系統
   <br>└ 實裝登入功能
4. [Hosting](https://firebase.google.com/products/hosting)
   <br>├ Web Hosting
   <br>└ 實裝 LP、PWA
5. [Cloud Storage](https://firebase.google.com/products/storage)
   <br>├ 雲端外部存放空間
   <br>└ 儲存與提供圖片、影片檔案
6. [Realtime Database](https://firebase.google.com/products/realtime-database)
   <br>├ NoSQL Database
   <br>├ 一般會選用 Firestore
   <br>└ 差異參照：[選擇一個數據庫：Cloud Firestore 或實時數據庫](https://firebase.google.com/docs/database/rtdb-vs-firestore)
7. [Crashlytics](https://firebase.google.com/products/crashlytics)
   <br>└ 檢視錯誤
8. [Performance Montioring](https://firebase.google.com/products/performance)
   <br>└ 計測效能
9. [Test Lab](https://firebase.google.com/products/test-lab)
   <br>├ 裝置測試
   <br>└ UI 測試、Monkey Test
10. [Google Analytics](https://firebase.google.com/products/analytics)
    <br>└ 分析使用者
11. [Predictions](https://firebase.google.com/products/predictions)
12. [Cloud Messaging](https://firebase.google.com/products/cloud-messaging)
    <br>├ 推送通知
    <br>├ 範例：
    <br>│ [Implement the foundation for remote push notifications #88](https://github.com/uhooi/UhooiPicBook/pull/88)
    <br>└ [Implement the foundation for remote push notifications #57](https://github.com/uhooi/UhooiPicBook-Android/pull/57)
13. [Remote Config](https://firebase.google.com/products/remote-config)
    <br>├ 遠端變更 App 設定
    <br>└ 期間限定外觀、A/B Test
14. [Dynamic Links](https://firebase.google.com/products/dynamic-links)
    <br>├ Deep Link
    <br>└ 生成一連結，讓使用者已安裝則啟動 App，未安裝則移動至 Store

### [使用](https://qiita.com/iiizoo/items/a31726966c1a42f37809)

1. 新建 Project
2. 從左上齒輪設定 Soruce Location
3. 新增 App
4. `npm i -g firebase-tools`
5. 移動至作業資料夾
6. `npm i --save firebase`
7. `firebase login`
8. `firebase init`
9. `firebase deploy`

### GCP

- [利用 Cloud function 製作 GitHub Apps](https://blog.techbridge.cc/2020/06/21/github-apps-cloudfunction/)

## [Amazon AWS](https://aws.amazon.com/tw/)

- [Serverless 架構應用開發指南 - serverless](https://serverless.ink/)
- [使用 Node.js + serverless framework + AWS Lambda 打造可擴展、更穩定而且更經濟的架構](https://medium.com/visuallylab/%E4%BD%BF%E7%94%A8-node-js-serverless-framework-aws-lambda-%E6%89%93%E9%80%A0%E5%8F%AF%E6%93%B4%E5%B1%95-%E6%9B%B4%E7%A9%A9%E5%AE%9A%E8%80%8C%E4%B8%94%E6%9B%B4%E7%B6%93%E6%BF%9F%E7%9A%84%E6%9E%B6%E6%A7%8B-6a54b51b8988)
