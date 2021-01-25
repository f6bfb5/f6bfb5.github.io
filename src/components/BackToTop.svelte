<script>
  export let showOnPx = 150;
  let hidden = true;
  let innerWidth;
  $: right = innerWidth > 720 ? innerWidth / 2 - 360 + 32 + "px" : "2em";

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} bind:innerWidth />

<div class="back-to-top" style="right: {right}" on:click={goTop} class:hidden>
  Back to top
</div>

<style>
  .back-to-top {
    /* padding: 4px; */
    position: fixed;
    bottom: 2em;
    z-index: 99;
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    color: white;
    background-color: black;
    user-select: none;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
