---
title: "HTML 筆記"
date: 2021-01-11T00:27:30.000Z
tags: F2E, HTML
---

- [label で input\[type="file"\] を装飾するな](https://zenn.dev/dqn/articles/7505cfa1bed278)

```html
<label>
  選擇檔案
  <input type="file" />
</label>

<style>
  label {
    /* ... */
  }

  input {
    display: none;
  }
</style>
```

如果將 `input` 設為 `display: none`，使用 `label` 來取代 `input` 元素的顯示處
理，會導致無法聚焦到 `input`，即使將 `tabindex` 設為非負值，由於 `label` 不是 clickable 元素，也無法觸發 space／enter 鍵。

```html
<button>選擇檔案</button>
<input type="file" />

<script>
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("input").click();
  });
</script>

<style>
  button {
    /* ... */
  }

  input {
    display: none;
  }
</style>
```

替代方案可以改為使用 `button` 元素，透過 event listener 觸發 `input` 元素的 click 事件。

```html
<div role="button" tabindex="0">選擇檔案</div>
<input type="file" />

<script>
  const buttonElement = document.querySelector("div");

  buttonElement.addEventListener("click", () => {
    document.querySelector("input").click();
  });

  buttonElement.addEventListener("keydown", (event) => {
    if (!buttonElement.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("input").click();
    }
  });
</script>

<style>
  div {
    /* ... */
  }

  input {
    display: none;
  }
</style>
```

或是改為無障礙友善的類按鍵元素。
