<script>
  import { onMount, onDestroy } from "svelte";

  // [WMYH Noise](https://codepen.io/MaxDeVos/pen/eYvOdmO)
  // [CSS Noise - The great beyond (Soul)](https://codepen.io/danne32/pen/YzxGNPp)
  const noise = () => {
    let canvas, ctx;
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;
    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }
      noiseData.push(idata);
    };
    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }
      ctx.putImageData(noiseData[frame], 0, 0);
    };
    const loop = () => {
      paintNoise(frame);
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 25);
    };
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
      canvas = document.getElementById("noise");
      if (canvas.classList.contains("is-static")) {
        paintNoise(frame);
      } else {
        loop();
      }
    };
    let resizeThrottle;
    const reset = () => {
      window.addEventListener(
        "resize",
        () => {
          window.clearTimeout(resizeThrottle);
          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        },
        !1
      );
    };
    const init = (() => {
      canvas = document.getElementById("noise");
      ctx = canvas.getContext("2d");
      setup();
    })();
  };

  onMount(() => {
    noise();
  });
</script>

<canvas
  id="noise"
  class="noise"
  width="2560"
  height="1440"
  style="opacity: 0.05;"
/>

<style>
  #noise {
    background-color: rgb(246, 244, 236);
  }
  .noise {
    pointer-events: none;
    opacity: 0.05;
  }
  .noise,
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }
</style>
