<script>
  const imageUrlsArray = [
    "https://i.imgur.com/tdh6Lx8.png",
    "https://i.imgur.com/JuPO2pq.png",
    "https://i.imgur.com/wfrGELX.png",
    "https://i.imgur.com/mDbpu8Y.png",
    "https://i.imgur.com/qXRNc2f.png",
    "https://i.imgur.com/A3mWcEM.png",
    "https://i.imgur.com/lYVTGos.png",
    "https://i.imgur.com/R6mXTLQ.png",
    "https://i.imgur.com/FrB5LXZ.png",
    "https://i.imgur.com/BaLhn5v.png",
    "https://i.imgur.com/VjGDpsw.png",
    "https://i.imgur.com/u4DyT6c.png",
    "https://i.imgur.com/RmYyZX6.png",
    "https://i.imgur.com/e0ebkFy.png",
    "https://i.imgur.com/gHbQvYY.png",
    "https://i.imgur.com/zT1ex8v.png",
    "https://i.imgur.com/E5TWzEs.png",
    "https://i.imgur.com/iepJccR.png",
    "https://i.imgur.com/9SOlqJV.png",
    "https://i.imgur.com/rssA92w.png",
    "https://i.imgur.com/XHOlLwQ.png",
    "https://i.imgur.com/vCT9925.png",
    "https://i.imgur.com/VKSRtGQ.png",
  ];
  const imageUrl =
    imageUrlsArray[Math.floor(imageUrlsArray.length * Math.random())];
</script>

<div id="js-random-image-container" class="random-image-container">
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
    margin: 16px auto 0;
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
    width: 83.5%;
    height: 83.5%;
    mix-blend-mode: multiply;
  }
  .image-noise::before {
    filter: url(#noiseFilter);
  }
  svg {
    display: none;
  }
</style>
