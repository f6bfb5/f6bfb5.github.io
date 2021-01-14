---
title: "實作「使用 Discord 登入」"
date: 2021-01-14T00:24:23.000Z
---

- [「Discord の ID でログイン」を実装する(Oauth2) - Qiita](https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98#token%E3%81%A8%E5%85%B1%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%83%A6%E3%83%BC%E3%82%B6%E6%83%85%E5%A0%B1%E3%82%92%E5%BE%97%E3%82%8B)

## 於 Discord Developer Portal 登錄 Application

### 取得 「Client ID」和「Client Secert」

1. 登入 [Discord Developer Portal](https://discord.com/developers/applications)
2. 點擊右上角的「New Application」
3. 取名，本例使用 `OAuth Vertify`，點擊「Create」
4. `Client ID` 和 `Client Secert` 位於資訊頁的右方

### 建立 OAuth 用的網址

1. 點擊左側的「OAuth2」
2. 點擊右側的「Add Redirect」，輸入驗證登入用的網址
3. 勾選下方「SCOPE」（索取的資訊欄位）裡的「identify」（Discord 的 ID）和「email」
4. 就可取得認證用的連結 `https://discord.com/api/oauth2/authorize?client_id=`CLIENT ID`&redirect_uri=`REDIRECT URL`&response_type=code&scope=`SCOPE

## 於認證連結取得「Code」

1. 於認證連結登入後，會回傳一個 `code` 參數到網址上

## 將「Code」轉換成「Token」

1. 傳送 POST 請求到 Discord API
   > `curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d "client_id=`CLIENT ID`&client_secret=`CLIENT SECRET`&grant_type=authorization_code&code=`CODE`&redirect_uri=`REDIRECT URL(要與認證 URL 相同)`" https://discordapp.com/api/oauth2/token`
2. 若成功就可取得 Access Token
   > `{"access_token": `ACCESS TOKEN`, "expires_in": 604800, "refresh_token": `REFRESH TOKEN`, "scope": `SCOPE`, "token_type": "Bearer"}`

- Code 為一次性使用，同一個 code 無法存取第二次
- Access Token 的有效期限為 604800 秒＝一個禮拜，若有更新需求須使用 REFRESH TOKEN 重新請求

## 使用「Token」取得使用者資料

1. 傳送 POST 請求到 Discord API
   <br>`curl -H "Authorization: Bearer `ACCESS TOKEN`" https://discordapp.com/api/users/@me`
2. 若成功就可取得相關資料
   > `{"id": `Discord ID`, "username": `使用者名稱`, "avatar": `大頭貼 ID`, "discriminator": `使用者編號(在名稱#後面的數字)`, "public_flags": 0, "flags": 0, "email": `信箱`, "verified": true, "locale": `使用語言`, "mfa_enabled": false}`

- 頭像可以使用 `https://cdn.discordapp.com/avatars/`Discord ID`/`大頭貼 ID 取得

## 使用 REFRESH TOKEN 重新取得 ACCESS TOKEN

1. 傳送 POST 請求到 Discord API
   > `curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d "client_id=`CLIENT ID`&client_secret=`CLIENT SECRET`&grant_type=refresh_token&refresh_token=`REFRESH TOKEN`" https://discordapp.com/api/oauth2/token`
2. 若成功就可取得 Access Token
   > `{"access_token": `ACCESS TOKEN`, "expires_in": 604800, "refresh_token": `REFRESH TOKEN`, "scope": `SCOPE`, "token_type": "Bearer"}`
