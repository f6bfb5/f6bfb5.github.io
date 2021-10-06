---
title: "實作「使用 Discord 登入」"
date: 2021-01-14T00:24:23.000Z
---

- [「Discord の ID でログイン」を実装する(Oauth2) - Qiita](https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98)

## 於 Discord Developer Portal 登錄 Application

### 取得 「Client ID」和「Client Secert」

1. 登入 [Discord Developer Portal](https://discord.com/developers/applications)
2. 點擊右上角的「New Application」
3. 取名，本例使用 `OAuth Vertify`，點擊「Create」
4. `Client ID` 和 `Client Secert` 位於資訊頁的右方

### 建立 OAuth 用的網址

1. 點擊左側的「OAuth2」
2. 點擊右側的「Add Redirect」，輸入驗證登入的網址
3. 勾選下方「SCOPE」（索取的資訊欄位）裡的「identify」（Discord 的 ID）和「email」
4. 就可於頁面下方取得認證用的連結
   <br>例：`https://discord.com/api/oauth2/authorize?client_id=`CLIENT ID`&redirect_uri=`REDIRECT URL`&response_type=code&scope=`SCOPE

## 從認證連結取得「code」

使用認證連結登入，並 redirect 到後續頁面後，會回傳一個 `code` 參數到網址上

## 使用「code」取得「token」

我們要再使用這個 `code` 去取得 `access_token`，才能得到存取資料的權限

1. 傳送 POST 請求到 Discord API

```bash
curl -X POST
     -H "Content-Type:application/x-www-form-urlencoded"
     -d "client_id=CLIENT ID
     &client_secret=CLIENT SECRET
     &grant_type=authorization_code
     &code=CODE
     &redirect_uri=REDIRECT URL（要與認證 URL 相同）"
     https://discordapp.com/api/oauth2/token
```

2. 若成功就可取得 `access token`

```json
{
  "access_token": ACCESS TOKEN,
  "expires_in": 604800,
  "refresh_token": REFRESH TOKEN,
  "scope": SCOPE,
  "token_type": "Bearer"
}
```

- `code` 為一次性使用，同一個 `code` 無法存取第二次
- `access token` 的有效期限為 604800 秒＝一個禮拜
  <br>若有更新需求，須使用 `refresh token` 重新送出請求

## 使用「token」取得使用者資料

1. 傳送 GET 請求到 Discord API

```bash
curl -H "Authorization: Bearer ACCESS TOKEN"
     https://discordapp.com/api/users/@me
```

2. 若成功就可取得相關資料

```json
{
   "id": Discord ID,
   "username": 使用者名稱,
   "avatar": 大頭貼 ID,
   "discriminator": 使用者編號（在名稱#後面的數字）,
   "public_flags": 0,
   "flags": 0,
   "email": 信箱,
   "verified": true,
   "locale": 使用語言,
   "mfa_enabled": false
}
```

- 頭像可以使用 `https://cdn.discordapp.com/avatars/`Discord ID`/`大頭貼 ID 取得

## 使用 refresh token 重新取得 access token

1. 傳送 POST 請求到 Discord API

```bash
curl -X POST
     -H "Content-Type:application/x-www-form-urlencoded"
     -d "client_id=CLIENT ID
     &client_secret=CLIENT SECRET
     &grant_type=refresh_token
     &refresh_token=REFRESH TOKEN"
     https://discordapp.com/api/oauth2/token
```

2. 若成功就可取得 access token

```json
{
   "access_token": ACCESS TOKEN,
   "expires_in": 604800,
   "refresh_token": REFRESH TOKEN,
   "scope": SCOPE,
   "token_type": "Bearer"
}
```

## 範例

以下示範透過此方式，取得你的 Discord ID 與大頭貼圖片。
如果未顯示「Not logged in」或點擊按鍵無反應，請重新整理頁面。

<button id="js-discord-button">Login with Discord</button>
<span id="js-discord-status" />

<div class="discord-card" id="js-discord-card" style="display: none">
  <img class="discord-card--image" id="js-discord-card--image">
  <div class="discord-card--username" id="js-discord-card--username"></div>
</div>

<style>
.discord-card--image {
  margin-left: 0 !important;
}
</style>

<script>
const clientID = "798950274114781204";
const redirectUri = "https://f6bfb5.github.io/login-with-discord";
const scope = "identify email"

function handleClick() {
   document.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}`;
}

window.addEventListener('load', function() {
   document.getElementById("js-discord-button").addEventListener("click", handleClick);
   // 1. get code from url params
   const urlParams = new URLSearchParams(window.location.search);
   if(urlParams.has("code")) { 
     // 2. post code to get token
     const clientSecret = "3c-TeN5NxElL4la8E6h5BlT4zDHigser";
     const apiUrl = 'https://discordapp.com/api/oauth2/token'
     const data = {
        'client_id': clientID,
        'client_secret': clientSecret,
        'grant_type': 'authorization_code',
        'code': urlParams.get("code"),
        'redirect_uri': redirectUri,
        'scope': scope
     }
     // put payload together
     const formBody = 
     Object.keys(data)
     .map(key => encodeURIComponent(key) 
       + '=' 
       + encodeURIComponent(data[key]))
     .join('&');
     // send post
     const resultData = fetch(apiUrl, {
        method: "POST",
        headers: {
           "content-type": "application/x-www-form-urlencoded"
        },
        body: formBody,
     })
     .then(function(response) {
        if( !response.ok ) {
           throw new Error(response.statusText)
        }
        document.getElementById("js-discord-status").innerText = "token got";
        return response.json()
     })
     // 3. get user data
     .then(function(data) {
        let accessToken = data.access_token;
        const userApiUrl = 'https://discordapp.com/api/users/@me';
        return fetch(userApiUrl, {
           method: "GET",
           headers: {
              "authorization": "Bearer " + accessToken,
           }
        })
     })
     .then(function(response) {
        if( !response.ok ) {
           throw new Error(response.statusText)
        }
        document.getElementById("js-discord-status").innerText = "user data got";
        return response.json();
     })
     .catch(function(error) {
        document.getElementById("js-discord-status").innerText = error;
     })
     // 4. display user data
     resultData.then(function(r) {
        if(r != undefined){
          document.getElementById("js-discord-card").style.display="block";
          document.getElementById("js-discord-card--image").src=`https://cdn.discordapp.com/avatars/${r.id}/${r.avatar}`;
          document.getElementById("js-discord-card--username").innerText=`${r.username}#${r.discriminator}`
        }
     })
   } else {
      document.getElementById("js-discord-status").innerText = "Not logged in";
   }
})
</script>
