---
title: "Vue - Cheatsheet"
date: 2020-08-22T19:37:32.000Z
published: 2020-08-22T19:37:32.000Z
author: f6bfb5
summary:
layout: blog
---

[Vue-Essentials-Cheat-Sheet.pdf](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)

## Expressions

```html
<div id="app">
  <p>I have a {{ product }}</p>
  <p>{{ product + 's' }}</p>
  <p>{{ isWorking ? 'YES' : 'NO' }}</p>
  <p>{{ product.getSalePrice() }}</p>
</div>
```

## Directives

```html
<p v-if="inStock">{{ product }}</p>
```

```html
<p v-else-if="onSale">...</p>
<p v-else>...</p>
```

Toggles CSS property: `display: none`

```html
<p v-show="showProductDetails">...</p>
```

Two-way data binding

```html
<input v-model="firstName" />
```

- `v-model.lazy="..."`
- `v-model.number="..."`
- `v-model.trim="..."`

## List Rendering

```html
<li v-for="item in items" :key="item.id">{{ item }}</li>
```

取得陣列座標：

```html
<li v-for="(item, index) in items">...</li>
```

遞迴物件：

```html
<li v-for="(value, key) in object">...</li>
```

使用於 component 時：

```html
<cart-product
  v-for="iotem in products"
  :profuct="item"
  :key="item.id"
></cart-product>
```

## Binding

```html
<a v-bind:href="url">...</a>
```

可簡寫為

```html
<a :href="url">...</a>
```

```html
<button :disabled="isButtonDisabled">...</button>
```

當 `isActive` 為真時，會加入 `active` class

```html
<div :class="{ active: isActive }">...</div>
```

```html
<div :style="{ color: activeColor }"></div>
```

## Actions / Events

```html
<button v-on:click="addToCart">...</button>
```

可簡寫為

```html
<button @click="addToCart">...</button>
```

可傳入參數

```html
<button @click="addToCart(product)">...</button>
```

可預防如重載頁面的預設行為

```html
<form @submit.prevent="addProduct">...</form>
```

或只觸發一次

```html
<img @mouseover.once="showImage" />...
```

- `.stop`：阻止所有 event propagation
- `.self`：只有當 `event.target` 為元素本身時才觸發

按鍵觸發：

```html
<input @keyup.enter="submit" />
```

```html
<input @keyup.ctrl.c="onCopy" />
```

按鍵裝飾詞：

- `.tab`
- `.delete`
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`
- `.crtl`
- `.alt`
- `.shift`
- `.meta`

滑鼠裝飾詞：

`.left`
`.right`
`.middle`

## Component Anatomy

```javascript
Vue.component('my-component', {
  components: {
    // Components that can be used in template
    ProductComponent, ReviewComponent
  },
  props: {
    // The parameters the component accepts
    message: String,
    product: Object,
    email: {
      type: String,
      required: true,
      default: "none",
      validator: function (value) {
        // Should return true if value is vaild
      }
    }
  },
  data: function() {
    // must be a function
    return {
      firstName: 'Vue',
      lastName: 'Mastery'
    }
  },
  computed: {
    // Return cached values until dependcies change
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    // called when firstName changes value
    firstName: function (value, oldValue) { ... }
  },
  methods: { ... },
  template: '<span>{{ message }}</span>,
  // Can also use backticks for multi-line
})
```

## Custom Events

Use props (above) to pass data into child components,
custom events to pass data to parent elements.

Set listener on component, within its parent:

```html
<button-counter v-on:incrementBy="incWithVal"></button-counter>
```

Inside parent component:

```javascript
methods: {
incWithVal: function (toAdd) { ... }
}
```

Inside button-counter template:

```javascript
this.$emit("incrementBy", 5);
```

## Lifecycle Hooks

- `beforeCreate`
- `created`
- `beforeMount`
- `mounted`
- `beforeUpdate`
- `updated`
- `beforeDestroy`
- `destroyed`

## Using A Single Slot

Component template:

```html
<div>
  <h2>I'm a title</h2>
  <slot> Only displayed if no slot content </slot>
</div>
```

Use of component with data for slot:

```html
<my-component>
  <p>This will go in the slot</p>
</my-component>
```

## Multiple Slots

Component template:

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot>Default content</slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

Use of component with data for slot:

```html
<app-layout>
  <h1 slot="header">Page Title</h1>
  <p>the main content.</p>
  <p slot="footer">Contact info</p>
</app-layout>
```

## Libraries You Should Know

- Vue CLI
- Vue Router
- Vue DevTools
- Nuxt.js
