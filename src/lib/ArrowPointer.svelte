<script>
    export let arrowColor = "#0f380f";
    export let bgColor = "#cadc9f";
</script>

<div class="arrow-pointer" style="--arrowColor: {arrowColor}; --bgColor: {bgColor};" /><div class="arrow-pointer" style="width: 6px; --arrowColor: {arrowColor}; --bgColor: {bgColor};" /><div class="arrow-pointer" style="width: 6px; --arrowColor: {arrowColor}; --bgColor: {bgColor};" />

<style>
  /* https://sharkcoder.com/visual/shapes */
  .arrow-pointer {
    display: inline-block;
    width: 250px;
    --height: .75em;
    height: var(--height);
    margin-right: 4px;
    background: var(--arrowColor);
    position: relative;
  }
  .arrow-pointer::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: calc(var(--height) / 2) solid var(--bgColor);
    border-top: calc(var(--height) / 2) solid transparent;
    border-bottom: calc(var(--height) / 2) solid transparent;
  }
  .arrow-pointer::after {
    content: "";
    position: absolute;
    right: calc(var(--height) * -1 / 2);
    bottom: 0;
    width: 0;
    height: 0;
    border-left: calc(var(--height) / 2) solid var(--arrowColor);
    border-top: calc(var(--height) / 2) solid transparent;
    border-bottom: calc(var(--height) / 2) solid transparent;
  }
  .arrow-pointer:nth-child(3) {
    margin-right: 1em;
  }
  .arrow-pointer:nth-child(3)::after {
    z-index: 1;
  }
  .arrow-pointer:nth-child(3)::before {
    z-index: 2;
  }
  .arrow-pointer:nth-child(2)::after {
    z-index: 3;
  }
  .arrow-pointer:nth-child(2)::before {
    z-index: 4;
  }
  .arrow-pointer:nth-child(1)::after {
    z-index: 5;
  }
  .arrow-pointer:nth-child(1)::before {
    z-index: 6;
    border-left: calc(var(--height) / 2) solid transparent;
  }
</style>
