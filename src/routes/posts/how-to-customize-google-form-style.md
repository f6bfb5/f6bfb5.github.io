---
title: "自訂 Google 表單的外觀"
date: 2020-06-10T14:59:54.000Z
summary:
---

## 事前準備

1. 先在 Google Form 製作好和需求相同形式的 Form
2. 點擊右上預覽表單
3. 開啟開發者工具
4. 尋找 `<form>` 標籤 `action` 屬性中的傳送表單網址
   <br>├ `action=[表單網址]`
   <br>└ `https://docs.google.com/forms/u/0/d/e/xxxxxxx/formResponse`
5. 尋找所有提問的 id
   <br>├ `name=[提問 ID]`
   <br>└ 通常為 `entry.xxxxxxx`，可使用此關鍵字快速搜尋
6. 撰寫自訂表格網頁，並將傳送行為綁定至自訂的傳送按鍵上

## 傳送表單

1. jQuery

```javascript
function request() {
  var url = "https://docs.google.com/forms/u/0/d/e/xxxxxxx/formResponse";
  var data = {
    "entry.xxxxxxx": $("#data1").text(),
    "entry.xxxxxxx": $("#data2").val(),
  };

  $.ajax({
    type: "GET",
    url: url,
    data: data,
    complete: function () {
      alert("response sent!");
    },
  });
}
```

2. Vue
   <br>└ 搭配 [vue-resource](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md) 使用

```javascript
export default {
  // ...
  data: function () {
    return {
      data1: "value1",
      data2: "value2",
    };
  },
  methods: {
    submitForm() {
      const url = "https://docs.google.com/forms/u/0/d/e/xxxxxxx/formResponse";
      const data = {
        "entry.xxxxxxx": this.data1,
        "entry.xxxxxxx": this.data2,
      };
      this.$http.jsonp(url, {
        method: "GET",
        params: data,
      });
    },
  },
  // ...
};
```

## 參考文章

- [独自フォームと Google フォームを連携してかっこよくスマートにアンケート回収する - Qiita](https://qiita.com/inoue2002/items/78dac54dba93ea4a087a)
- [【2020 年最新版】カスタマイズしたフォームから JavaScript で Google フォームに回答を送信 - Qiita](https://qiita.com/Robot-Inventor/items/56e2b7b69760d045fad3)
- [【GAS】自動返信機能付き Google フォームの作り方 – Valmore](https://valmore.work/auto-response-from-google-form/)
