<script>
  import { onMount } from "svelte";
  import { randomImages } from "$lib/store.js";

  const imageUrl =
    $randomImages[Math.floor($randomImages.length * Math.random())];

  let noiseWidth = "83.5%";
  let noiseHeight = "83.5%";
  onMount(() => {
    const userAgent = navigator.userAgent;
    if (
      // FireFox
      userAgent.indexOf("Firefox") > -1 ||
      // Safari
      (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1)
    ) {
      noiseWidth = "100%";
      noiseHeight = "100%";
    }
  });
</script>

<div
  id="js-random-image-container"
  class="random-image-container adjusted-image-border"
  style="--noise-width: {noiseWidth}; --noise-height: {noiseHeight};"
>
  <img id="js-random-image" src={imageUrl} alt="random retro-style pic" />
  <div class="image-noise" />
</div>

<!-- 
CodePen Embed - Noisy Gradients Image
https://webdesign.tutsplus.com/tutorials/better-web-images-with-svg-grainy-filters--cms-39739
-->
<svg>
  <filter id="noiseFilter">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="6.29"
      numOctaves="6"
      stitchTiles="stitch"
    />
  </filter>
</svg>

<style scoped>
  .random-image-container {
    position: relative;
    margin: 1em auto 0;
    width: fit-content;
  }
  img {
    max-width: 480px;
    width: 100%;
    filter: contrast(100%) brightness(150%);
  }
  .image-noise {
    width: 100%;
  }
  .image-noise::before,
  .image-noise::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* width: 83.5%; */
    /* height: 83.5%; */
    width: var(--noise-width);
    height: var(--noise-height);
    mix-blend-mode: multiply;
  }
  .image-noise::before {
    filter: url(#noiseFilter);
  }
  svg {
    display: none;
  }

  .adjusted-image-border {
    position: relative;
  }
  .adjusted-image-border::before {
    position: absolute;
    content: "";
    inset: 0;
    box-shadow: 0 0 0 2px rgb(220 220 220) inset;
    mix-blend-mode: darken;
    z-index: 1;
  }
</style>
