<script>
  import LibLoader from "$lib/LibLoader.svelte";
  export let text = "example";

  function qrcodeLoaded() {
    // [davidshimjs/qrcodejs]
    // https://github.com/davidshimjs/qrcodejs
    new QRCode(document.getElementById("qrcode"), {
      text,
      width: 64,
      height: 64,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }
</script>

<LibLoader
  url="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
  on:loaded={qrcodeLoaded}
/>

<div id="qrcode" />