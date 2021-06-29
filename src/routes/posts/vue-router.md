---
title: "Vue 筆記 - Router"
date: 2019-12-07T06:45:15.000Z
summary:
tags: F2E, JavaScript
---

## Vue Router

- `vue-router` 提供能在前端模擬路由的功能，在切換頁面時就不需要向後端發出請求

## 安裝

1. 於 `vue-cli` 建置專案時選用 Vue Router
2. `vue add router`
3. `npm i vue-router`
   └ 接著在 `router.js` 中啟用 `Vue.use(VueRouter)`

## 路由配置

1. 進入點與路由頁面可以在 `router.js` 中設定
2. `<router-view></router-view>`：顯示路由組件
   └ `<router-view name="name"></router-view>`
3. `<router-link></router-link>`：配置路由連結
   └ `<router-link to="path">Link</router-link>`

- `vue-router` 有三種路由模式
  ├ hash 模式（預設）
  ├ history 模式
  ├ abstract 模式
  └ 可以從管理路由的 `router.js` 中指定

`router.js`

```javascript
import 組件 from '@/components/組件'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: '組件名稱',
      path: '路徑位置',
      component: import 的組件
    },
  ]
})
```

`App.vue`

```vue
<script>
  import 組件 from '@/components/組件'

  export default {
    components: {
      組件
    }
  }
</script>

<template>
  <div>
    <nav>
      <router-link to="/組件">Link<router-link/>
    </nav>
    <router-view/>
  </div>
</template>
```

### 取得路由參數

1. params：取得於路由設置中自訂的參數

`router.js`

```javascript
{
  // 冒帽後方字串為自訂參數名稱
  // 問號代表此參數可為空
  path: '/Products/:id?',
  component: Products
}
```

- 於網址傳入參數後：`http://localhost:8080/#/Products/1`
- 可於 Vue 中取得參數：`this.$route.params.id`

2. query：取得於網址問號之後的字串

`router.js`

```javascript
{
  // 無需特定設置
  path: '/Products',
  component: Products
}
```

- 於網址傳入參數後：`http://localhost:8080/#/Products?id=1&page=2`
- 可於 Vue 中取得整個字串：`this.$route.query`

## 參考文章

- [Vue Router. 路由基礎 | by Leo Lin | Medium](https://medium.com/@linwei5316/vue-router-4c2aad1cc352)
- [Router 基本入門 Day 9 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10214449)
