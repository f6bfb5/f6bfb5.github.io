---
title: "純正製品ステッカージェネレーター.md"
date: 2022-06-04T09:32:24.000Z
summary: "ホ〇ダのあれ"
tags: F2E
---

<script>
  import LibLoader from "$lib/LibLoader.svelte";

  function domToImage() {
    // [tsayen/dom-to-image]
    // https://github.com/tsayen/dom-to-image
    const domToImageNode = document.getElementById('sticker');
    domtoimage.toPng(domToImageNode)
      .then(function(dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        img.style = "margin: 0;";
        const domToImageResultNode = document.getElementById('dom-to-image-output-node')
        if (domToImageResultNode.firstChild != null) { domToImageResultNode.firstChild.remove(); }
        domToImageResultNode.appendChild(img);
      })
      .catch(function(error) {
        console.error(error);
      })
  }
  function barcodeLoaded() {
    // [lindell/JsBarcode]
    // https://github.com/lindell/JsBarcode
    JsBarcode("#barcode", "https://f6bfb5.github.io/", {
      width: 1,
      height: 48,
      background: "transparent",
      displayValue: false
    });
  }
  function qrcodeLoaded() {
    // [davidshimjs/qrcodejs]
    // https://github.com/davidshimjs/qrcodejs
    new QRCode(document.getElementById("qrcode"), {
      text: "https://f6bfb5.github.io/",
      width: 64,
      height: 64,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</svelte:head>

<LibLoader
  url="https://cdn.jsdelivr.net/jsbarcode/3.3.20/JsBarcode.all.min.js"
  libraryDetectionObject="JsBarcode"
  on:loaded={barcodeLoaded}
/>

<LibLoader
  url="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
  libraryDetectionObject="qrcode"
  on:loaded={qrcodeLoaded}
/>

<LibLoader
  url="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"
  libraryDetectionObject="domToImage"
/>

<div class="sticker" id="sticker">
  <div class="sticker--header">
    <div class="header--title">
      BONSAI
    </div>
    <div class="header--caption">
      GENUINE PARTS<br/>
      Bonsai Saboten Co. Ltd.
    </div>
    <div class="clearfix" />
  </div>
  <div class="sticker--content">
    <div class="content-bg" />
    <div class="content--qrcode" id="qrcode">
    </div>
    <div class="content--text">
      Deus ex machina
    </div>
    <div class="content--barcode">
      <div class="barcode--text">
        <span>QTY</span>
        <span>2147483647</span>
        <span>0x7FFFFFFF</span>
      </div>
      <div class="barcode">
        <svg id="barcode"></svg>
      </div>
      <div class="barcode--footer">
      MADE IN HEAVEN
      </div>
    </div>    
  </div>
</div>

<button on:click={() => domToImage()}>generate image</button>

<div id="dom-to-image-output-node" />

<style scoped>
  :root {
    --sticker--bg: red;
    --sticker--color: white;
    --sticker--text-size: 16px;

    --content--bg: white;
    --content--color: black;
  }
  
  @media(max-width: 576px) {
    :root {
      --sticker--text-size: 12px;
    }
  }

  .sticker {
    width: calc(32 * var(--sticker--text-size));
    padding: calc(1 * var(--sticker--text-size));
    border-radius: calc(.5 * var(--sticker--text-size));
    overflow: hidden;

    background-color: var(--sticker--bg);
  }

  /* ========== header ========== */
  .sticker--header {
    padding: calc(1 * var(--sticker--text-size));
    height: calc(7 * var(--sticker--text-size));

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--sticker--color);
  }
  .header--title {
    margin-right: auto;
    font-size: calc(3 * var(--sticker--text-size));
    font-family: 'Merriweather', serif;
    transform: scaleY(.7);
  }
  .header--caption {
    padding-bottom: calc(2 * var(--sticker--text-size));
    font-family: 'Exo', sans-serif;
    text-align: center;
  }

  /* ========== content ========== */
  .sticker--content {
    padding: calc(1 * var(--sticker--text-size));
    padding-bottom: 0;
    border-radius: calc(2 * var(--sticker--text-size));
    font-family: 'Chakra Petch', sans-serif;
    background-color: var(--content--bg);
  }
  .content--text {
    font-size: calc(3 * var(--sticker--text-size));
    font-weight: 500;
  }
  .content--qrcode {
    float: right;
  }
  .content--qrcode img {
    margin: 0;
  }

  /* ========== barcode ========== */
  .barcode {
    /* width: 200px; */
    /* display: flex; */
  }
  .barcode--text span {
    font-size: calc(1.25 * var(--sticker--text-size));
  }
  .barcode--text {
    display: flex;
    align-items: flex-end;
  }
  .barcode--text span:nth-child(2) {
    font-size: calc(1.75 * var(--sticker--text-size));
  }
  .barcode--text span + span {
    margin-left: calc(1 * var(--sticker--text-size));
  }
  .barcode--footer {
    margin-top: calc(-1 * var(--sticker--text-size));
    margin-left: calc(1 * var(--sticker--text-size));
    letter-spacing: calc(.25 * var(--sticker--text-size));
    font-weight: 500;
  }

  /* ========== misc ========== */
  .clearfix {
    clear: both;
  }

  /* [tsayen/dom-to-image] 
  Doesn't working with Google Fonts #59
  https://github.com/tsayen/dom-to-image/issues/59 */
  /* thai */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIf6MapbsEk7TDLdtEz1BwkWi6pgeL4.woff2) format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIf6MapbsEk7TDLdtEz1BwkWkKpgeL4.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIf6MapbsEk7TDLdtEz1BwkWkapgeL4.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIf6MapbsEk7TDLdtEz1BwkWn6pg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIflMapbsEk7TDLdtEz1BwkebIl1U5_F7AY.woff2) format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIflMapbsEk7TDLdtEz1BwkebIl1SJ_F7AY.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIflMapbsEk7TDLdtEz1BwkebIl1SZ_F7AY.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Chakra Petch';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/chakrapetch/v9/cIflMapbsEk7TDLdtEz1BwkebIl1R5_F.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Exo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/exo/v19/4UaZrEtFpBI4f1ZSIK9d4LjJ4lM3OwtmO24p.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Exo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/exo/v19/4UaZrEtFpBI4f1ZSIK9d4LjJ4lM3OwpmO24p.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Exo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/exo/v19/4UaZrEtFpBI4f1ZSIK9d4LjJ4lM3OwRmOw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFZVcf6lvg.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFZXMf6lvg.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFZV8f6lvg.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFZVsf6lvg.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/merriweather/v30/u-4n0qyriQwlOrhSvowK_l52_wFZWMf6.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
</style>
