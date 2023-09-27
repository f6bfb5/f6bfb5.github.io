
https://en.wikipedia.org/wiki/Arrow_(symbol)

<div style="margin-top: 24px; line-height: 1;">
  <span class="animation-clip-background">🢂</span>
</div>

<!-- <img src="https://i.imgur.com/K6TnpsB.png" style="clip-path: url(#arrow);" /> -->

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24">
  <path d="M8 4 8 2 10 0 12 0 23 11 23 12 12 24 10 24 8 22 8 20 13 15 2 15 0 13 0 11 2 9 13 9" fill="#FFFFFF" />
</svg>

<style>
.animation-clip-background {
  font-size: 288px;
  font-weight: bold;
  
  background: url('https://i.imgur.com/frsPyaZ.png');
  animation: background-timer 1s steps(1, end) infinite;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  user-select: none;

  position: relative;
  z-index: 1;
}
.animation-clip-background::after {
  content: '🡺';
  position: absolute;
  left: 0;
  top: 0;
  /* text-shadow: -1px 1px 0 var(--subtitle-color), 1px 1px 0 var(--subtitle-color), 1px -1px 0 var(--subtitle-color), -1px -1px 0 var(--subtitle-color); */
  /* -webkit-text-stroke: 4px var(--subtitle-color); */
  color: transparent;
  z-index: -1;
}

@keyframes background-timer {
  0%, 100% {
    background-image: url('https://i.imgur.com/K6TnpsB.png');
  }
  17% {
    background-image: url('https://i.imgur.com/wgAOJuq.png');
  }
  30% {
    background-image: url('https://i.imgur.com/erCA0z0.png');
  }
  42% {
    background-image: url('https://i.imgur.com/ugmTTxZ.png');
  }
  63% {
    background-image: url('https://i.imgur.com/iA8Trjg.png');
  }
  71% {
    background-image: url('https://i.imgur.com/mAvTlnE.png');
  }
  90% {
    background-image: url('https://i.imgur.com/SgwJ0Yq.png');
  }
}
</style>