---
title: "Twitch API Authentication"
date: 2020-11-08T23:50:09.000Z
published: 2020-11-08T23:50:09.000Z
author: f6bfb5
summary: "前陣子剛好有機會，寫了個用到 Twitch OAuth 登入認證的網站，順手記錄用到的內容"
layout: blog
---

前陣子剛好有機會，寫了個用到 Twitch OAuth 登入認證的網站，順手記錄用到的內容

<summary>

## 官方文章：[理解哪種協議與流程適合你](https://blog.twitch.tv/zh-tw/2019/11/06/twitch-authentication-understanding-which-protocol-and-flow-is-right-for-you/)

</summary>
<details>

在首次使用 Twitch 開發新的整合或擴充套件時，最常見的障礙之一是確定最適合您需求的驗證方法。這個決定可能會讓人感到困惑，特別是當你是對 REST API 進行身份驗證的新手時，但本指南將涵蓋如何就協議、必要的 token 型別以及使用協議的適當方式做出明智的決定。

Twitch 提供了兩種協議，即 OAuth 和 OIDC，以使用您選擇的 flow 來連線和獲取 token 。flow 只是指您的應用程式與 Twitch 進行互動以交換 token 的方式，以及回傳 token 的方式。

此外，在選擇兩種協議的同時，您還需要圍繞您所需的 token 型別做出重要決定；有三種不同的 token 可供選擇，每種 token 都有不同的用途。

這些決定可能會根據一些因素而變化，例如正在構建的整合型別，您的應用程式如何架構，以及您使用認證協議的經驗水平。

簡而言之，有一個簡單的圖表，顯示了不同型別的 token 和基礎設施，以幫助您的決策過程。請注意，這並不是絕對的，您的情況可能會有所不同，您應該選擇最適合您需求的選項。

|                   | 擁有後端                     | 沒有後端／SPA      | 伺服器對伺服器（無前端） |
| ----------------- | ---------------------------- | ------------------ | ------------------------ |
| ID Token          | OIDC 授權碼                  | OIDC 隱式碼        | \-                       |
| User Access Token | OAuth／OIDC 授權碼           | OAuth／OIDC 隱式碼 | \-                       |
| App Access Token  | OAuth 客戶證書（於後端處理） | \-                 | OAuth 客戶證書           |

### 協議

如前所述，在應用中認證使用者時有兩種協議可供選擇：OAuth 2.0 和 OIDC。這兩個協議在功能上非常相似，因為 OIDC 是建立在 OAuth 2.0 規範之上的，但也有理由選擇一個而不是另一個。

#### OAuth 2.0

我們要介紹的第一個協議是 OAuth 2.0（以下簡稱 OAuth），它是使用 Twitch 平臺授權的最常見方式之一。OAuth 在許多組織中被廣泛採用，它本身就傾向於為幾乎所有的程式語言提供大量可供公眾使用的庫，這意味著在你的應用程式中構建授權是快速和簡單的，只需要很少的定製工作。OAuth 可以提供「使用者存取 token」（User Access Token，通常簡稱為「存取 token」／access token）或「應用程式存取 token」（App Access Token）。「使用者存取 token」允許您的應用程式代表經過認證的使用者，在給定的一組範圍（許可權）內執行操作。另一方面，「應用程式存取 token」僅用於伺服器對伺服器的呼叫，不提供對一些受保護的 API 端點的存取。

「使用者存取 token」和「應用存取 token」用於針對 Twitch 的 API 進行認證呼叫。

然而，OAuth 的一個主要問題是，它不是一個認證協議。OAuth 本身並不告訴使用者是誰，而是提供了一組委託許可權，允許透過提供的存取 token 存取受保護的資源。這授權 token 存取材料，但並不對使用者進行身份驗證。

你可以透過 Twitch API 的 Get User 端點來獲取授權 token 的使用者的詳細資訊，但是僅僅為了獲取使用者身份而呼叫這個端點是對 OAuth 的濫用，因為它只會告訴你 token 的所有者，但不會告訴你他們已經認證進入你的應用。

這裡的區別主要涉及安全原則。 token 不是使用者認證的證明，就像前門鑰匙不是房屋所有權的證明一樣。 token 只能證明使用者已經授權您的應用程式代表他們行事，這也是我們建議使用下面描述的第二個協議的主要原因之一。

#### OpenID 連線

OpenID Connect（OIDC）是建立在 OAuth 之上的，它將 OAuth 規範中的一些東西標準化，讓人們可以選擇。此外，OIDC 除了提供授權之外，還提供了認證。由於 OIDC 是在 OAuth 的基礎上分層的，所以如果你已經熟悉 OAuth，很多東西都是一樣的，因此很容易學習。

與 OIDC 的主要區別之一是它可以回傳一個「ID Token」，這是一個 JSON Web Token (JWT)，其中包含了認證使用者的資訊。這個 token 可以透過索賠包含使用者的基本資訊，也可以包含使用者的詳細資訊。索賠可以包括（但不限於）使用者名稱、電子郵件和個人資料圖片。這些資訊無需額外的 API 呼叫即可獲得，並為這些資訊提供了快速資源。這可以驗證使用者的身份，以確保使用者是存取材料的人。

一個 JWT 的範例：

`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEifQ.eyJhdWQiOiJhOGF2NHo3MGY1M2QyMnNwZXBlemJkaWx5Y29yaHQiLCJleHAiOjE1NTk2NzY2NDEsImlhdCI6MTU1OTY3NTc0MSwiaXNzIjoiaHR0cHM6Ly9pZC50d2l0Y2gudHYvb2F1dGgyIiwic3ViIjoiNDQ2MzU1OTYiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9qdHZfdXNlcl9waWN0dXJlcy8zNzVlZTZmZC04ZGNkLTQ3ZjEtOTNkYi04MTY2NzgyODhlMTMtcHJvZmlsZV9pbWFnZS0xNTB4MTUwLnBuZyIsInByZWZlcnJlZF91c2VybmFtZSI6IkNvbmNyZXRlRW50cmVlIn0.xz44-jsojGL188TkO5TqqEVusAnCEFWUXdkX5awV-0m5FFTHqEfZOTHxUMV3UCfmDGaz76g0kVm0NErYT4GRZjYmeahIYOWFQhQ0tdf31JGflrh3IXCjHAEnAcVHiHLQirrK9gC2zuqIbW3383lLmiFbakG1KdginYScWjUTHF3RPyeQsWjQI8iscRr_i9ogmRnHfq1bj3sS0DBQiJ1OTmUwBhXFXI9dWZGskvCXDAQ2m06ulB7lYgkl_yaqYaXOfnhcrvIrfcwSTqByPJP3bpUwFUsDpePhShFuogxEpzF1hWSXb1x819uldtF0PQfBhAtIs28f5DrSDUWNb5IChQ`

經過解碼（使用 [https://jwt.io/](https://jwt.io/)）後會變為

```json
{
  "aud": "a8av4z70f53d22spepezbdilycorht",
  "exp": 1559676641,
  "iat": 1559675741,
  "iss": "https://id.twitch.tv/oauth2",
  "sub": "44635596",
  "picture": "https://static-cdn.jtvnw.net/jtv_user_pictures/375ee6fd-8dcd-47f1-93db-816678288e13-profile_image-150x150.png",
  "preferred_username": "ConcreteEntree"
}
```

這些資訊也可以用於展示目的，所以，例如，React 應用程式可以將 JWT 儲存在狀態中，並引用使用者名稱作為頁面頭部的一部分，而不是將其儲存在資料庫的某個地方，需要在登入時獲取；該資料也會隨著每次 token 的重新整理而更新，這意味著資料是最新的。

需要注意的是，ID Token 並不是用來進行 API 請求的，它只是認證以及使用者身份的證明。

OIDC 除了 ID Token 之外，還可以回傳一個標準的使用者存取 token ，既可以代表使用者行動，也可以知道使用者是誰。

OIDC 的主要注意事項是，它不支援回傳應用存取 token ，這意味著對於伺服器到伺服器的通訊，OAuth 是你唯一的選擇。儘管如此，我們還是建議在所有其他情況下儘可能使用 OIDC。

### Flows

對於 OAuth 和 OIDC 來說，它們都支援兩種不同的 flow ，或者說是獲取 token 的方法。它們是「授權碼（Authorization Code）flow」和「隱式（Implicit Code）flow」。

這兩種 flow 在幾個關鍵方面有所不同。「授權碼 flow」應該用於有伺服器進行呼叫以獲取 token，並使用該 token 存取受保護的 API 端點的情況。有額外的 handshakes，提供必要的資訊，這意味著使用者永遠不會獲得他們的實際存取 token （除非你把它傳送到前端），使其更加安全。此外，這個 flow 還回傳一個「重新整理 token」 ，這意味著你的使用者在未來不必重新授權你的應用程式。這些「重新整理 token」被你的應用程式用來給使用者一個新的存取 token ，並有一個新的到期日期。

「隱式碼 flow」是在客戶端（使用者代理）進行呼叫時使用的。這在使用 React 或 Vue 等框架的單頁應用（SPA）中最為常見。使用者進行身份驗證，瀏覽器在本地獲取並儲存 token ，以代表使用者進行額外的呼叫，或者說 SPA 沒有後端儲存使用者資料。雖然 SPA 架構涉及到一個儲存程式碼的 Web 服務，但這個服務永遠不會獲得使用者的存取 token（除非客戶端將其傳送到後端）。這個 flow 不會回傳「重新整理 token」，所以你需要使用者在 token 過期時重新授權應用。

最後，還有一個「客戶端憑證 flow」，它允許你獲取「應用存取 token」。這個 flow 只有透過 OAuth 協議才能使用，也是獲取「應用存取 token」的唯一途徑。如上所述，這些 token 由於缺乏使用者原則，無法使用存取給定使用者受保護資料的端點（例如 GET /users 端點中的使用者電子郵件），並且僅用於伺服器到伺服器的呼叫。該 flow 不回傳「重新整理 token」。

#### 授權碼 flow

如上所述，與其他 flow 相比，「授權碼 flow」需要一些額外的呼叫，但是由於在授權過程中不需要向瀏覽器傳輸存取 token ，因此最終的應用更加安全。

授權碼的 flow 是

1. 你的應用程式將使用者重定向到 Twitch 登入端點
2. 使用者登入並授權給應用程式所要求的作用域
3. 一旦成功授權，Twitch 就會重定向回您的應用程式，並在 query parameters 中包含一段程式碼。
4. 然後，使用一個特殊的端點，用後端伺服器將程式碼交換為您所需的代幣。

這個過程可以讓你安全而謹慎地儲存代幣。雖然比隱式 flow 的步驟更多，但這是 Twitch 的首選方法。

#### 隱性碼 flow

另一種面向使用者的 flow 是「隱式 flow」 。這種 flow 專注於儘可能安全地傳輸存取 token ，然而無論如何，存取 token 都會暴露在終端使用者面前。正因為如此，隱式流不支援重新整理 token ，需要使用者每次重新認證才能獲得有效的使用者 token 。

這種方式是透過：

1. 使用者會被重定向到 Twitch 登入（使用彈窗或瀏覽器重定向）。
2. 然後，使用者授權應用程式
3. 然後，使用者會被 Twitch 用 URL 片段中的 token 重定向到重定向 URI（於 Twitch 開發後台設置）。
4. 該 URL 看起來像：`https://yoururlhere/index.html#access_token=token...`

這種情況下的 token 不在 request query 中，因為 request query 會被傳送到後端伺服器（以及中間可能出現的任何其他伺服器）。相反，它使用的是 URL 片段，它對後端伺服器不可見，因此更加安全。URL 片段可以透過客戶端的 JavaScript 存取，允許你從 URL 中提取出來，並儲存起來以備後用。

#### 客戶證書

最後，「客戶端憑證 flow」的目的是當你需要從「伺服器到伺服器」進行呼叫時。這個 token 不能新增任何額外的作用域，因為沒有一個使用者來繫結這個 token ；相反，這些 token 是為了不特定於任何使用者的後端任務。它可能是涉及應用級分析或需要更高速率限制的任務。

正如表格中所指出的，這個 flow 只能使用 OAuth，而不是 OIDC。因此，在選擇這個 flow 時要記住這一點。

flow 相當簡單，後臺伺服器向 Twitch 發出請求，要求獲得一個 token ，並得到一個回應。回應格式與授權碼回應相同，因此您能夠以同樣的方式重新整理 token 。

但與其他 flow 不同的是，由於這只生成一個應用存取 token ，所以不能將其分配給使用者，因此您不能為這個 token 分配作用域。使用這種型別的 token 通常用於提高呼叫的速率限制，以確保你不會發出未經認證的請求。

### 總結

確定使用什麼技術讓使用者授權你的應用，是你早期要做的一個相當重要的決定。由於可用的選項數量眾多，在剛開始專案時可能會讓人不知所措。然而，簡單地說，對於大多數用例，如果您可以使用 OIDC，您就應該這樣做。鑑於 OIDC 是建立在 OAuth 之上的，對於終端使用者來說，授權 flow 保持不變，你獲得了額外的功能，同時也保留了 OAuth 的所有易用性，而不需要更多的額外複雜性。

</details>

## Twitch OIDC 認證回應

- Twitch API 文件：[Authentication | Twitch Developers](https://dev.twitch.tv/docs/authentication)
- 註冊 Twitch APP：[Twitch Developers](https://dev.twitch.tv/console/apps)
- [\[JS\] 使用 JavaScript 解析網址與處理網址中的參數（URL Parameters） ~ PJCHENder&lt;br>那些沒告訴你的小細節](https://pjchender.blogspot.com/2018/08/js-javascript-url-parameters.html)

### 驗證

`GET https://id.twitch.tv/oauth2/authorize?client_id=`your client ID`&redirect_uri=`your registered redirect URI`&response_type=`type`&scope=`space-separated list of scopes`&claims=`JSON object specifying requested claims

#### 成功

登入並驗證成功後，會導向回註冊的網址，以及附帶相關參數至網址後方

`https://`registered_uri`#access_token=`access_token`&id_token=`id_token`&scope=openid+user_read&token_type=bearer`

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

如果驗證不過，或有其它地方設定錯誤，也會導向回註冊的網址，以及附帶相關參數至網址後方

例如：`https://`registered_uri`?error=redirect_mismatch&error_description=Parameter+redirect_uri+does+not+match+registered+URI`

1. `error`
2. `error_description`

### 取得使用者帳號

驗證成功後，就可使用取得的 `access_token` 進行相關資料存取
<br>`access_token` 需輸入於 Header 的 `Authorization: Bearer` 後方

```bash
curl  -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
-H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
-X GET 'https://api.twitch.tv/helix/users?id=44322889'
```
