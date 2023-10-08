<script>
  export let size = "16px";
  export let left = "auto";
  export let right = "auto";
  export let delay = "0s";
  export let duration = "0";
</script>

<div class="cube-wrapper"
style="--cube-size: {size}; left: {left}; right: {right}; animation-delay: {delay}; animation-duration: {duration}">
  <div
    class="cube"
    style="--cube-size: {size}; animation-duration: {duration}"
  >
    <div class="front" />
    <div class="back" />
    <div class="top" />
    <div class="bottom" />
    <div class="left" />
    <div class="right" />
  </div>
</div>

<style scoped>
  .cube-wrapper {
    position: absolute;
    /* bottom: calc(var(--cube-size) * -2); */
    bottom: calc(-5em - (var(--cube-size) * 2));
    animation: movement 5s infinite;
    transition-timing-function: ease-in-out;
  }
  @keyframes movement {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    80% {
      transform: translateY(-60vh);
      opacity: 0;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }

  /* [\[CSS\] Floating Cube](https://codepen.io/sam_designer/pen/qJEXdY?editors=1100) */
  .cube {
    position: relative;
    width: var(--cube-size);
    height: var(--cube-size);
    transform-style: preserve-3d;
    animation: cubeRotation 5s infinite;
  }
  @keyframes cubeRotation {
    0% {
      transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-382deg) rotateY(-398deg) rotateZ(0deg);
    }
  }
  .cube > div {
    position: absolute;
    width: var(--cube-size);
    height: var(--cube-size);
    outline: 1px solid black;
  }
  .front {
    transform: translateZ(calc(var(--cube-size) / 2));
  }
  .back {
    transform: translateZ(calc(var(--cube-size) / 2 * -1));
  }
  .top {
    transform: rotateX(-90deg) translateY(calc(var(--cube-size) / 2 * -1));
    transform-origin: top center;
  }
  .bottom {
    transform: rotateX(90deg) translateY(calc(var(--cube-size) / 2));
    transform-origin: bottom center;
  }
  .left {
    transform: rotateY(270deg) translateX(calc(var(--cube-size) / 2 * -1));
    transform-origin: center left;
  }
  .right {
    transform: rotateY(-270deg) translateX(calc(var(--cube-size) / 2));
    transform-origin: top right;
  }
</style>
