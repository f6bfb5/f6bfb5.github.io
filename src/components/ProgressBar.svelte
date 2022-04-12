<!-- [How to Build a Reading Progress Bar With CSS and JavaScript](https://webdesign.tutsplus.com/tutorials/reading-progress-bar-css-javascript--cms-36635) -->
<script>
  let scrollPercent = "0%";
  let processScroll = () => {
    let docElem = document.documentElement,
      docBody = document.body,
      scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
      scrollBottom =
        (docElem["scrollHeight"] || docBody["scrollHeight"]) -
        window.innerHeight;
    scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
  };
</script>

<svelte:window on:scroll={processScroll} />
<div id="progress-bar" style="--scrollAmount: {scrollPercent};" />

<style>
  #progress-bar {
    background-image: linear-gradient(
      120deg,
      var(--subtitle-color) 0%,
      var(--subtext-color) 100%
    );
    width: var(--scrollAmount);
    height: 2px;
  }
</style>
