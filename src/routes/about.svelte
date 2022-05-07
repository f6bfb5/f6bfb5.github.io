<script>
  const backgroundImageUrls = [
    "https://media4.giphy.com/media/PZrjGkr334fXa/giphy.gif",
    "https://media0.giphy.com/media/udK21RQeWtaGQ/giphy.gif",
    // https://tenor.com/view/anime-girl-gif-24497284
    "https://c.tenor.com/xK6H41lmjrQAAAAC/anime-girl.gif",
    // "https://c.tenor.com/ZwiXDI5sKe0AAAAC/lain-serial-experiments-lain.gif",
    "https://c.tenor.com/_v4H6lwCZZ0AAAAC/serial-experiments-lain-lain.gif",
    "https://c.tenor.com/1nD0WjJfRr4AAAAC/lain-lain-iwakura.gif",
    "https://c.tenor.com/rz-36T9kAEIAAAAC/lain-playstation.gif",
    "https://c.tenor.com/AL_kKT7aS9IAAAAC/serial-experiments-lain-yasuo-iwakura.gif",
    "https://c.tenor.com/I2pOVoq3YAIAAAAC/lain-serial-experiments.gif",
    // "https://media4.giphy.com/media/nlk3Y1u3r1n5C/giphy.gif",
    "https://64.media.tumblr.com/tumblr_m50esawubi1qghl49o1_r1_500.gifv",
    // "https://media0.giphy.com/media/jsoMtBuP1Ahpu/giphy.gif",
    "https://64.media.tumblr.com/697566623f56a200b381fa731c5d4b15/tumblr_merrziLMqG1qghl49o1_r1_500.gifv",
    "https://c.tenor.com/0lv-4Uu_h_EAAAAC/giygas.gif",
    "https://c.tenor.com/Ky-q-qGYd4AAAAAC/darker-than-black-dtb-hei.gif",
    "https://c.tenor.com/8LexFYcsTmQAAAAC/va11hall-a-jill.gif",
    "https://c.tenor.com/SjuAbL0uMakAAAAC/yume-nikki-yume.gif",
    "https://i.imgur.com/P3EwTea.gif",
    "https://c.tenor.com/TCEyVCo9wG0AAAAC/dark-souls-bonfire.gif",
    // "https://c.tenor.com/URM4MiNuWrUAAAAC/pixel-art-shrine.gif",
    "https://c.tenor.com/BrNtIejIcXUAAAAC/pixel-art.gif",
    "https://c.tenor.com/a6pDrWf6gJgAAAAC/pixel-city-art.gif",
    // "https://c.tenor.com/cYRncpJTFXcAAAAC/waneella-pixel-art.gif",
    "https://c.tenor.com/6L6itJ6PXKoAAAAC/chrono-trigger-courtroom.gif",
    "https://c.tenor.com/e6DP5Mypb2MAAAAC/xenogears-cross.gif",
    "https://c.tenor.com/43Sbat6QfUoAAAAC/xenogears-mecha.gif",
    // https://tenor.com/view/namco-x-capcom-anime-video-games-kosmos-xenogears-gif-16674177
    "https://c.tenor.com/Z44G6YGKlnkAAAAC/namco-x-capcom-anime.gif",
    "https://c.tenor.com/IAMhMzkdFkAAAAAC/playstation.gif",
    "https://c.tenor.com/-GZI0TXyO-AAAAAC/subway-yuri.gif",
    "https://c.tenor.com/cd2lzZRW9WUAAAAC/omega-zero-megaman.gif",
    "https://c.tenor.com/aHBrM0hpUokAAAAC/air-airtv.gif",
    "https://c.tenor.com/tFggqYir3gEAAAAC/brain-powerd-brain-powered.gif",
    "https://i.imgur.com/SqCn8Gj.jpg",
  ];
  const backgroundImage =
    backgroundImageUrls[Math.floor(backgroundImageUrls.length * Math.random())];

  const text = "追体験で人は幸福になれない";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div
  class="about--background"
  style="background-image: url('{backgroundImage}')"
>
  <a
    href="https://www.youtube.com/watch?v=SM36ykdccsQ"
    class="about--background-caption vhs"
    target="_blank"
    data-text={text}
  >
    {text}
  </a>
</div>

<style scoped>
  .about--background {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1000;
    transform: translate(-50%, -50%);
    overflow: hidden;

    background-color: black;
    /* background-image: url('https://i.imgur.com/pA9yPzD.jpg'); */
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
  }

  .about--background-caption {
    align-self: center;
    min-height: 100%;

    font-size: 40px;
    text-align: center;
  }

  @media screen and (max-width: 576px) {
    .about--background-caption {
      font-size: 28px;
    }
  }

  /* .hide {
    background-color: var(--title-color);
    color: var(--title-color);
  }
  .hide:hover {
    color: var(--subtitle-color);
  } */

  /* https://codepen.io/simonbreiter/pen/NrmyjR */
  .vhs {
    text-transform: uppercase;
    position: relative;
    mix-blend-mode: screen;
    color: transparent;
    text-shadow: 0 0 0.125rem #0f0;
    animation: jitter 5s infinite;
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
</style>
