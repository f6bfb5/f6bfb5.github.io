<script>
  export let text;
</script>

<span class="vhs" data-text={text}>{text}</span>

<style>
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
