---
title: "實作「使用Twitch登入」"
date: 2023-05-02T20:11:13.000Z
tags: F2E
---

## 1. 於 Twitch developers console 登錄應用

1. 登入 [Twitch Developers](https://dev.twitch.tv/console/apps)
2. 「Register Your Application」
3. 取名，本文範例取為「OAuth Verify」
   - 此名稱會顯示於授權頁面上
   - 以及輸入驗證完後重導向的網址
     - 也就是要用於驗證登入的網址
     - 本文實作範例的網址就是此頁面連結：
       - `https://f6bfb5.github.io/login-with-twitch`
   - 「Create」
4. 「Manage」取得 `Client ID`，之後會用到

## 2. 進行認證取得 access token

- Twitch API 分有兩種 access token
  - User access tokens
    - 用於需要使用者授權才能存取的資源
    - 例如取得聊天室使用者清單、使用者的信箱
  - App access tokens
    - 用於不需要使用者授權就能取得的資源
    - 例如取得使用者的影片一覽
  - 其中 User access tokens 有兩種授權認證方式可取得
    - Implicit grant flow
      - 用於不需要伺服器的應用
    - Authorization code grant flow
      - 用於需要伺服器的應用
      - 可以儲存 client secret，以及傳送伺服器請求
    - 並各提供兩種認證機制
      - OAuth
      - OpenID Connect
        - 基於 OAuth 2.0 的簡易認證層
        - 會另有一個以 JSON Web Token 編碼身份令牌的 ID token
  - App access tokens 則是透過 OAuth Client Credentials Flow 取得
    - 詳細可參照 [Authentication](https://dev.twitch.tv/docs/authentication/#user-access-tokens)
- 以 OAuth Implicit Code Flow 為範例

1. 建立 OAuth 用的網址
   - `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=`[CLIENT ID]`&redirect_uri=`[REDIRECT URL]`&scope=`[SCOPE]
   - Client ID
     - 於第一步取得
   - Redirect URL
     - 重導向網址
     - 本文範例以此頁面作為連結
   - Scope
     - 要取得的授權內容
     - [Twitch Access Token Scopes](https://dev.twitch.tv/docs/authentication/scopes/#twitch-api-scopes)
2. 驗證之後取得 access token
   - Implicit grant flow 會將 access token 回傳到網址上
     - JavaScript 可使用 `document.location.hash` 取得

## 3. 使用 access token 取得使用者資料

- 使用 access token 即可取得使用者資料
  - [Get Users](https://dev.twitch.tv/docs/api/reference/#get-users)
  - ```javascript
    const userApiUrl = "https://api.twitch.tv/helix/users";
    const urlParams = new URLSearchParams(window.location.hash);
    const resultData = fetch(userApiUrl, {
      method: "GET",
      headers: {
        // 從網址取得重導向回傳的 access token
        Authorization: "Bearer " + urlParams.get("#access_token"),
        "Client-Id": clientID,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (r) {
        if (r != undefined) {
          document.getElementById("js-twitch-card").style.display = "block";
          // 資料會位於回傳的 data 屬性裡
          document.getElementById(
            "js-twitch-card--image"
          ).src = `${r.data[0].profile_image_url}`;
          document.getElementById(
            "js-twitch-card--username"
          ).innerText = `${r.data[0].login}(${r.data[0].display_name})`;
        }
      });
    ```
- API 一覽：[Reference](https://dev.twitch.tv/docs/api/reference/)

## 範例

<button id="js-twitch-button">Login with Twitch</button>
<span id="js-twitch-status" />

<div class="twitch-card" id="js-twitch-card" style="display: none">
  <img alt="profile" class="twitch-card--image" id="js-twitch-card--image">
  <div class="twitch-card--username" id="js-twitch-card--username"></div>
</div>

<style>
.twitch-card--image {
  margin-left: 0 !important;
}
</style>

<script>
import { onMount } from "svelte";

const clientID = "duo2s0lhrxlom9n2h2z9gppy137xwn";
const redirectUri = "https://f6bfb5.github.io/login-with-twitch";
// const redirectUri = "http://localhost:3000/login-with-twitch";
const scope = "";
// const scope = "user:read:email";

function handleClick() {
//   document.location.href = `https://id.twitch.tv/oauth2/authorize
// ?client_id=${clientID}
// &redirect_uri=${encodeURIComponent(redirectUri)}
// &response_type=token
// &scope=${encodeURIComponent(scope)}`;
  document.location.href = `https://id.twitch.tv/oauth2/authorize
?client_id=${clientID}
&redirect_uri=${encodeURIComponent(redirectUri)}
&response_type=code
&scope=${encodeURIComponent(scope)}`;
}

onMount(() => {
  document.getElementById("js-twitch-button").addEventListener("click", handleClick);

  // 1. check if access token exists in url params
  const urlParams = new URLSearchParams(window.location.hash);
  if (urlParams.has("#access_token")) {
    // 2. send fetch
    const userApiUrl = "https://api.twitch.tv/helix/users";
    const resultData = fetch(userApiUrl, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + urlParams.get("#access_token"),
        "Client-Id": clientID,
      },
    }).then(function(response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      document.getElementById("js-twitch-status").innerText = "user data got";
      return response.json();
    }).catch(function(error) {
      document.getElementById("js-twitch-status").innerText = error;
    });
    // 4. display user data
    resultData.then(function(r) {
      if (r != undefined) {
        document.getElementById("js-twitch-card").style.display = "block";
        document.getElementById("js-twitch-card--image").src = `${r.data[0].profile_image_url}`;
        document.getElementById("js-twitch-card--username").innerText = `${r.data[0].login}(${r.data[0].display_name})`;
      }
    });
  } else {
    document.getElementById("js-twitch-status").innerText = "Not logged in";
  }
});
</script>
