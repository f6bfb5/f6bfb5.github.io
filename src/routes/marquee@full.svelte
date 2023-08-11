<script>
  let sentencesToDisplay = [""];
  let canvas;

  import { onMount } from "svelte";
  onMount(() => {
    if (sentencesToDisplay[0].length == 0) {
      sentencesToDisplay = decodeURI(window.location.search)
        .slice(3)
        .split(",");
    }

    const ctx = canvas.getContext("2d");
    const scroller = new Scroller(canvas, {
        text: 'DON\'T LOOK BACK',
        speed: getRandomInt(3, 7),
        textColor: 'black',
        font: '5rem Arial',
        padding: 20
    });
    scroller.animate();
  });

  let displayingIndex = 0;
  let displayingString = sentencesToDisplay[displayingIndex];

  let contentNode;
  let contentNodeWidth;
  let slideOutDuration = getAnimationDuration(displayingString);

  import { afterUpdate } from "svelte";

  function getContentWidth() {
    contentNodeWidth = contentNode.offsetWidth + "px";
  }
  function getAnimationDuration(text) {
    if (text.length == 0) return 0;
    return text.length / 8 > 6 ? text.length / 8 + "s" : "6s";
  }
  function playNext() {
    // second half animation
    if (contentNode.classList.contains("slideIn")) {
      contentNode.classList.remove("slideIn");
      contentNode.classList.add("slideOut");
    }
    // animation end
    else {
      displayingString = sentencesToDisplay[displayingIndex];
      displayingIndex + 1 < sentencesToDisplay.length
        ? displayingIndex++
        : (displayingIndex = 0);

      contentNode.classList.remove("slideOut");
      slideOutDuration = getAnimationDuration(displayingString);
      contentNode.classList.add("slideIn");
    }
  }

  afterUpdate(() => {
    getContentWidth();
  });

  class Scroller {
    constructor(canvas, options = {}) {
      this.canvas = canvas;
      this.context = this.canvas.getContext("2d");
      this.options = Object.assign({}, this.getDefaultOptions, options);
      this.ratio = window.devicePixelRatio || 1;

      this.textHeight = this.measureFontHeight().height;
      this.resize();

      this.yloc = 0;
      this.xloc = this.canvas.width;

      this.animId;
      this.init();
    }

    get getDefaultOptions() {
      return {
        text: "Ok, this is the default text",
        speed: 1,
        color: "#CC0000",
        font: "5rem Arial",
        padding: 20,
      };
    }

    resize() {
      this.canvas.width = this.canvas.clientWidth * this.ratio;

      this.textHeight = this.measureFontHeight().height;
      const lineh = this.measureFontHeight().firstPixel;
      const h = this.textHeight + lineh * 2;
      this.canvas.height = h * this.ratio;
      console.log(this.ratio, this.canvas.height, h);

      this.canvas.style.width = `${this.canvas.clientWidth}px`;
      this.canvas.style.height = `${h}px`;

      this.context.scale(this.ratio, this.ratio);
    }

    init() {
      this.context.font = this.options.font;
      this.textWidth =
        this.context.measureText(this.options.text).width +
        this.options.padding;
      this.duplicator = Math.ceil(this.canvas.width / this.textWidth) + 1;

      this.x = [];

      for (let i = 0; i < this.duplicator; i += 1) {
        const pos =
          i * this.textWidth +
          this.options.padding * (i + 1) +
          this.canvas.width;
        this.x.push(pos);

        if (i === 1) {
          this.originalX = pos;
        }
      }
    }

    animate() {
      this.animId = requestAnimationFrame(() => {
        this.animate();
      });

      this.x.forEach((el, i) => {
        if (this.textWidth + this.x[i] < 0) {
          this.x[i] =
            this.textWidth * (this.duplicator - 1) +
            this.options.padding * (this.duplicator + 1);
        } else {
          this.x[i] -= this.options.speed;
        }
      });

      this.drawText();
    }

    setFont() {
      this.context.font = this.options.font;
      this.context.fillStyle = this.options.textColor;
      this.context.textAlign = "left";
      this.context.textBaseline = "top";
    }

    drawText() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.setFont();

      for (let i = 0; i < this.duplicator; i += 1) {
        this.context.fillText(this.options.text, this.x[i], this.yloc);
      }
    }

    measureFontHeight() {
      this.setFont();
      this.context.fillText(this.options.text, 0, 0);
      const data = this.context.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      ).data;

      let firstY = -1;
      let lastY = -1;

      // loop through each row
      for (let y = 0; y < this.canvas.height; y++) {
        // loop through each column
        for (let x = 0; x < this.canvas.width; x++) {
          const alpha = data[(this.canvas.width * y + x) * 4 + 3];

          if (alpha > 0) {
            firstY = y;
            break;
          }
        }

        if (firstY >= 0) break;
      }

      // loop through each row, this time beginning from the last row
      for (var y = this.canvas.height; y > 0; y--) {
        // loop through each column
        for (let x = 0; x < this.canvas.width; x++) {
          const alpha = data[(this.canvas.width * y + x) * 4 + 3];

          if (alpha > 0) {
            lastY = y;
            // exit the loop
            break;
          }
        }

        if (lastY >= 0) break;
      }

      return {
        height: lastY - firstY,
        firstPixel: firstY,
        lastPixel: lastY,
      };
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
</script>

<canvas bind:this={canvas} />

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
      text-indent: max(724px, 100%);
    }
    38% {
      text-indent: 8px;
    }
    100% {
      text-indent: 8px;
    }
  }
  @keyframes slideOut {
    0% {
      text-indent: 0px;
    }
    100% {
      text-indent: calc(var(--content-width) * -1);
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
    font-size: 120px;
    line-height: 1.5;
    font-weight: 600;
    text-align: left;
    color: #fff;
    -webkit-text-stroke: 8px black;
    paint-order: stroke fill;
    /* text-shadow: -2px -2px black, -2px -1px black, -2px 0px black,
      -2px 1px black, -2px 2px black, -1px -2px black, -1px -1px black,
      -1px 0px black, -1px 1px black, -1px 2px black, 0px -2px black,
      0px -1px black, 0px 0px black, 0px 1px black, 0px 2px black,
      1px -2px black, 1px -1px black, 1px 0px black, 1px 1px black,
      1px 2px black, 2px -2px black, 2px -1px black, 2px 0px black,
      2px 1px black, 2px 2px black; */
  }
  .marquee--content {
    position: absolute;
    margin: 0;
    width: fit-content;
    white-space: nowrap;
    text-indent: max(724px, 100%);
  }
  .slideIn {
    animation: slideIn 2s forwards;
    animation-timing-function: ease;
    animation-delay: 0.5s;
    will-change: text-indent;
  }
  .slideOut {
    animation: slideOut var(--slide-out-duration) forwards;
    animation-timing-function: linear;
    will-change: text-indent;
  }
</style>
