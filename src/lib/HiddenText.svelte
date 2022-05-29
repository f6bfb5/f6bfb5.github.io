<script>
  export let text;
</script>

<span class="hide">{text}</span>

<style>
  .hide {
    background-color: var(--title-color);
    color: var(--title-color);
  }
  .hide:hover {
    color: var(--subtitle-color);
  }
</style>
