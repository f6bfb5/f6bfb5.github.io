<script>
  // CSSのfilterを使って、背景色に合わせた文字色を自動的に設定する
  // https://blanktar.jp/blog/2020/11/css-automate-foreground-text-color
  export let backgroundColor;
  export let size = "1em";
  export let text;
</script>

<span
  style="
  display: inline-block; 
  background-color: {backgroundColor};
  "
>
  <span
    style="
    color: {backgroundColor}; 
    filter: invert(100%) grayscale(100%) contrast(100); 
    font-size: {size};
    "
  >
    {text}
  </span>
</span>
