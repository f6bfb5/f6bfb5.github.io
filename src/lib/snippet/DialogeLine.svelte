<script>
  export let speakerText;
  export let speakerColor;
  export let speakerBackground;
</script>

<p>
  <span
    style="padding: 2px; color: {speakerColor}; background: {speakerBackground};"
  >
    {speakerText}</span
  >：<slot />
</p>
