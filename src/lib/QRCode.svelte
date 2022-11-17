<script>
  import LibLoader from "$lib/LibLoader.svelte";
  export let text = "example";
  export let size = 64;

  function qrcodeLoaded() {
    // [davidshimjs/qrcodejs]
    // https://github.com/davidshimjs/qrcodejs
    new QRCode(document.getElementById("qrcode"), {
      text,
      width: size,
      height: size,
      colorDark: "#181818",
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