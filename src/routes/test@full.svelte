<script>
  import { onMount, onDestroy } from "svelte";

  let text1 = "",
    text2 = "";
  let sentences = [
    ["ﾈｺ", "と和解せよ"],
    ["", ""],
  ];
  let index = 0;

  let interval;

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

    interval = setInterval(() => {
      text1 = sentences[index][0];
      text2 = sentences[index][1];
      index++;
      if (index >= sentences.length) index = 0;
    }, 167);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="c">
  <canvas
    id="noise"
    class="noise"
    width="2560"
    height="1400"
    style="opacity: 0.05;"
  />
  <div class="tc">
    <span class="t vhs" style="color: red;" data-text={text1}>{text1}</span>
    <span class="t vhs" data-text={text2}>{text2}</span>
  </div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="squiggly-0">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="0"
      />
      <feDisplacementMap
        id="displacement"
        in="SourceGraphic"
        in2="noise"
        scale="6"
      />
    </filter>
    <filter id="squiggly-1">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="1"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>

    <filter id="squiggly-2">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="2"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-3">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="3"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>

    <filter id="squiggly-4">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="4"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
  </defs>
</svg>

<style scoped>
  .c {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "DM Serif Display", serif;
    color: white;
    background-color: black;

    user-select: none;
    overflow: hidden;
  }
  .tc {
    padding: 1em;
    text-align: center;
  }
  .t {
    display: inline-block;
    width: fit-content;
    height: fit-content;

    font-size: 48px;
    white-space: pre-line;

    animation: jitter 5s infinite, squiggly-anim 0.34s linear infinite;
  }

  .vhs {
    text-transform: uppercase;
    position: relative;
    mix-blend-mode: screen;
    color: transparent;
    text-shadow: 0 0 0.125rem #0f0;
    /* animation: jitter 5s infinite; */
  }
  .vhs::before,
  .vhs::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
    animation: glitch 5s infinite alternate;
  }
  .vhs::before {
    text-shadow: 0 0 0.125rem #f00;
  }
  .vhs::after {
    text-shadow: 0 0 0.125rem #00f;
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
  }

  @keyframes glitch {
    0% {
      transform: rotate(0deg) translate(0.11rem) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(0.11rem) rotate(-360deg);
    }
  }

  @keyframes jitter {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(0);
    }
    50.1% {
      transform: translateX(0.1em) skew(40deg);
    }
    50.2% {
      transform: translateX(-0.2em) skew(-40deg);
    }
    50.3% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }

  svg {
    display: block;
    height: 0;
  }

  @keyframes squiggly-anim {
    0% {
      filter: url("#squiggly-0");
    }
    25% {
      filter: url("#squiggly-1");
    }
    50% {
      filter: url("#squiggly-2");
    }
    75% {
      filter: url("#squiggly-3");
    }
    100% {
      filter: url("#squiggly-4");
    }
  }

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
