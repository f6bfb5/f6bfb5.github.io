---
title: "Twitch API"
date: 2020-11-08T23:50:09.000Z
published: 2020-11-08T23:50:09.000Z
author: f6bfb5
summary:
layout: blog
---

## Twitch OIDC 認證響應

- Twitch API 文件：[Authentication | Twitch Developers](https://dev.twitch.tv/docs/authentication)
- 註冊 Twitch APP：[Twitch Developers](https://dev.twitch.tv/console/apps)
- [\[JS\] 使用 JavaScript 解析網址與處理網址中的參數（URL Parameters） ~ PJCHENder&lt;br>那些沒告訴你的小細節](https://pjchender.blogspot.com/2018/08/js-javascript-url-parameters.html)

### 驗證

`GET https://id.twitch.tv/oauth2/authorize ?client_id=<your client ID> &redirect_uri=<your registered redirect URI> &response_type=<type> &scope=<space-separated list of scopes> &claims=<JSON object specifying requested claims>`

#### 成功

`<path-to-page>#access_token=<access_token>&id_token=<id_token>&scope=openid+user_read&token_type=bearer`

1. `access_token`
2. `id_token`
3. `scope`
4. `token_type`

`id_token` decoded:

1. `at_hash`
2. `aud`: Audience: client ID of the application requesting a user's authorization.
3. `azp`: Authorized party: client ID of the application which is being authorized. Currently the same as aud.
4. `exp`: Expiration time of the token. This is in UNIX/Epoch format.
5. `iat`: Time when the token was issued. This is in UNIX/Epoch format.
6. `iss`: Issuer of the token.
7. `preferred_username`: Display name of the authorizing user.
8. `sub`: User ID of the authorizing user.

#### 失敗

`<path-to-page>?error=redirect_mismatch&error_description=Parameter+redirect_uri+does+not+match+registered+URI`

1. `error`
2. `error_description`

### 取得使用者帳號

```bash
curl  -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
-X GET 'https://api.twitch.tv/helix/users?id=44322889'
```
