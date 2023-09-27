<script>
  import { marqueeTexts } from "$lib/store.js";

  let displayingSentences = [...$marqueeTexts].sort(() => Math.random() - 0.5);
  let displayingString = displayingSentences.shift();

  let contentNode;
  let contentNodeWidth;
  let slideOutDuration = getAnimationDuration(displayingString);

  import { afterUpdate } from "svelte";

  function getContentWidth() {
    contentNodeWidth = contentNode.offsetWidth + "px";
  }
  function getTextLength(text) {
    let chars = text.split("");
    const reg = /^[A-Za-z0-9]*$/;
    let length = 0;
    for(let i=0, ilen = chars.length; i<ilen; i++) {
      length += reg.test(chars[i]) ? 0.5 : 1;
    }
    return length;
  }
  function getAnimationDuration(text) {
    if (text.length == 0) return 0;
    // 8 characters per second
    // return text.length / 8 > 6 ? text.length / 8 + "s" : "6s";
    // return getTextLength(text) / 8 > 6 ? getTextLength(text) / 8 + "s" : "6s";
    return getTextLength(text) / 8 + "s";
  }
  function playNext() {
    if (contentNode.classList.contains("slideIn")) {
      contentNode.classList.remove("slideIn");
      contentNode.classList.add("slideOut");
    } else {
      if (displayingSentences.length <= 0) {
        displayingSentences = [...$marqueeTexts].sort(
          () => Math.random() - 0.5
        );
      }
      displayingString = displayingSentences.shift();
      contentNode.classList.remove("slideOut");
      slideOutDuration = getAnimationDuration(displayingString);
      contentNode.classList.add("slideIn");
    }
  }

  afterUpdate(() => {
    getContentWidth();
  });
</script>

<div
  class="marquee"
  style="--slide-out-duration: {slideOutDuration}; --content-width: {contentNodeWidth};"
>
  <div
    class="marquee--content slideIn"
    on:animationend={playNext}
    bind:this={contentNode}
  >
    {displayingString}
  </div>
  <div style="display: none;" class="slideOut" />
</div>

<style scoped>
  :root {
    --marquee-outer-border-color: #242222;
  }

  /* 
  Simulate marquee tag in CSS and Javascript - Jonathan Petitcolas
  https://www.jonathan-petitcolas.com/2013/05/06/simulate-marquee-tag-in-css-and-javascript.html
  */
  @keyframes slideIn {
    0% {
      /* text-indent: 724px; */
      /* text-indent: max(724px, 100%); */
      transform: translateX(max(724px, 100%));
    }
    38% {
      /* text-indent: 8px; */
      transform: translateX(8px);
    }
    100% {
      /* text-indent: 8px; */
      transform: translateX(8px);
    }
  }
  @keyframes slideOut {
    0% {
      /* text-indent: 0px; */
      transform: translateX(0px);
    }
    100% {
      /* text-indent: calc(var(--content-width) * -1); */
      transform: translateX(calc(var(--content-width) * -1));
    }
  }

  .marquee {
    /* display */
    position: relative;
    /* height: 100%; */
    height: 1.5em;
    width: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;

    z-index: 1;

    /* typography */
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
    text-align: left;
    color: #fff;
    text-shadow: -2px -2px var(--marquee-outer-border-color),
      -2px -1px var(--marquee-outer-border-color),
      -2px 0px var(--marquee-outer-border-color),
      -2px 1px var(--marquee-outer-border-color),
      -2px 2px var(--marquee-outer-border-color),
      -1px -2px var(--marquee-outer-border-color),
      -1px -1px var(--marquee-outer-border-color),
      -1px 0px var(--marquee-outer-border-color),
      -1px 1px var(--marquee-outer-border-color),
      -1px 2px var(--marquee-outer-border-color),
      0px -2px var(--marquee-outer-border-color),
      0px -1px var(--marquee-outer-border-color),
      0px 0px var(--marquee-outer-border-color),
      0px 1px var(--marquee-outer-border-color),
      0px 2px var(--marquee-outer-border-color),
      1px -2px var(--marquee-outer-border-color),
      1px -1px var(--marquee-outer-border-color),
      1px 0px var(--marquee-outer-border-color),
      1px 1px var(--marquee-outer-border-color),
      1px 2px var(--marquee-outer-border-color),
      2px -2px var(--marquee-outer-border-color),
      2px -1px var(--marquee-outer-border-color),
      2px 0px var(--marquee-outer-border-color),
      2px 1px var(--marquee-outer-border-color),
      2px 2px var(--marquee-outer-border-color);
  }
  .marquee--content {
    position: absolute;
    margin: 0;
    width: fit-content;
    /* max-width: 100%; */
    white-space: nowrap;
    /* text-indent: max(724px, 100%); */
    transform: translateX(max(724px, 100%));
  }
  .slideIn {
    animation: slideIn 2s forwards;
    animation-timing-function: ease;
    animation-delay: 0.5s;
    /* will-change: text-indent; */
    will-change: transform;
  }
  .slideOut {
    animation: slideOut var(--slide-out-duration) forwards;
    animation-timing-function: linear;
    /* will-change: text-indent; */
    will-change: transform;
  }
</style>
