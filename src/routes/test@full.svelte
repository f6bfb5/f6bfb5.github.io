<script>
  import { onMount, onDestroy } from "svelte";

  let text1 = "",
    text2 = "";
  let color1 = "white",
    color2 = "red";
  let sentences = [
    ["失望", "の海", "red", "white"],
    ["", "", "white", "white"],
    ["脆弱な", "心", "white", "red"],
    ["", "", "white", "white"],
    ["偽り", "の微笑み", "red", "white"],
    ["", "", "white", "white"],
    ["病的な", "被写体", "white", "red"],
    ["", "", "white", "white"],
    ["自我の", "崩壊", "white", "red"],
    ["", "", "white", "white"],
    ["残酷", "な他人", "red", "white"],
    ["", "", "white", "white"],
    ["代理の", "異性", "white", "red"],
    ["", "", "white", "white"],
    ["刹那", "な癒し", "red", "white"],
    ["", "", "white", "white"],
    ["蔓延する", "虚脱", "white", "red"],
    ["", "", "white", "white"],
    ["無", "への願望", "red", "white"],
    ["", "", "white", "white"],
    ["閉塞", "した自分", "red", "white"],
    ["", "", "white", "white"],
    ["分離への", "不安", "white", "red"],
    ["", "", "white", "white"],
    ["一方的な", "勘違い", "white", "red"],
    ["", "", "white", "white"],
    ["他人の", "恐怖", "white", "red"],
    ["", "", "white", "white"],
    ["危険", "な思考", "red", "white"],
    ["", "", "white", "white"],
    ["他者との", "拒絶", "white", "red"],
    ["", "", "white", "white"],
    ["同調への", "嫌悪", "white", "red"],
    ["", "", "white", "white"],
    ["傲慢", "な把握", "red", "white"],
    ["", "", "white", "white"],
    ["弱者への", "憐れみ", "white", "red"],
    ["", "", "white", "white"],
    ["不愉快", "な写真", "red", "white"],
    ["", "", "white", "white"],
    ["過去の", "傷痕", "white", "red"],
    ["", "", "white", "white"],
    ["曖昧", "な境界", "red", "white"],
    ["", "", "white", "white"],
    ["常識の", "逸脱", "white", "red"],
    ["", "", "white", "white"],
    ["孤独な", "ヒトビト", "red", "white"],
    ["", "", "white", "white"],
    ["価値への", "疑問", "white", "red"],
    ["", "", "white", "white"],
    ["情欲", "との融合", "red", "white"],
    ["", "", "white", "white"],
    ["胎内", "への回帰", "red", "white"],
    ["", "", "white", "white"],
    ["空しい", "時間", "red", "white"],
    ["", "", "white", "white"],
    ["破滅", "への憧憬", "red", "white"],
    ["", "", "white", "white"],
    ["要らない", "ワタシ", "white", "red"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["虚構", "の始まり", "red", "white"],
    ["虚構", "の始まり", "red", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["現実の", "続き", "white", "red"],
    ["現実の", "続き", "white", "red"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["それは、", "夢の終わり", "white", "red"],
    ["それは、", "夢の終わり", "white", "red"],
    ["それは、", "夢の終わり", "white", "red"],
    ["それは、", "夢の終わり", "white", "red"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
    ["", "", "white", "white"],
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
      color1 = sentences[index][2];
      color2 = sentences[index][3];
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
    href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="c">
  <div class="w">
    <canvas
      id="noise"
      class="noise"
      width="2560"
      height="1400"
      style="opacity: 0.05;"
    />
    <div class="ht">では、<br />あなたは何故、ココにいるの？</div>
    <div class="tc">
      <span class="t vhs" style="color: {color1};" data-text={text1}
        >{text1}</span
      >
      <span class="t vhs" style="color: {color2};" data-text={text2}
        >{text2}</span
      >
    </div>
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

    font-family: "Zen Old Mincho", serif;
    color: white;
    background-color: #460609;

    user-select: none;
    overflow: hidden;
  }
  .w {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    background: linear-gradient(
        217deg,
        rgba(0, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%);
  }
  .tc {
    padding: 0.5em;
    text-align: center;

    z-index: 10;
  }
  .t {
    display: inline-block;
    width: fit-content;
    height: fit-content;

    font-size: 5.5em;
    white-space: pre-line;
    text-align: center;

    animation: jitter 5s infinite, squiggly-anim 0.34s linear infinite;
  }

  .ht {
    padding: 1em;
    position: absolute;
    /* top: -50%; */
    /* left: -50%; */

    font-size: 3em;

    transform: skewX(-30deg) rotateZ(-30deg);
    animation: squiggly-anim 2s linear infinite;

    text-align: center;
    line-height: 3;
    opacity: 0.2;
    z-index: 10;
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
