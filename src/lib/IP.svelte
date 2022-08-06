<script>
  // How to get client's IP address using JavaScript?
  // https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
  import { onMount } from "svelte";

  import LibLoader from "$lib/LibLoader.svelte";
  // import { ip } from "$lib/store.js";
  // let corsanywhere = "https://cors-anywhere-srmlyuexjbosgg0x.herokuapp.com/";
  // let apiUrl = "https://api.ipify.org?format=json";

  let ip = "";
  let nav = "";

  onMount(async function () {
    // if ($ip === "") {
    //   await fetch(corsanywhere + apiUrl)
    //     .then((resp) => resp.json())
    //     .then((data) => ($ip = data.ip));
    // }
    nav = `${navigator.appCodeName} ${navigator.appVersion}`;
  });
  function onLoaded() {
    getIPs()
      .then((res) => (ip = res))
  }
</script>

<LibLoader
  url="https://cdn.jsdelivr.net/gh/joeymalvinni/webrtc-ip/dist/bundle.dev.js"
  on:loaded={onLoaded}
/>

<div class="ip--container">
  <div class="ip--label">
    <span>H3</span>
    <span>LL0</span>
  </div>
  <span>{ip}</span>
</div>
<div class="ip--container">
  <div class="ip--label">
    <span>FR1</span>
    <span>3ND</span>
  </div>
  <span>{nav}</span>
</div>

<style scoped>
  .ip--container {
    position: relative;
    display: flex;
    align-items: center;

    margin-left: 26px;
    margin-right: 20px;
    margin-bottom: 0.25em;
    padding: 0.25em;
    max-width: 24em;

    color: #efefef;
    background-color: #2f2f2f;
    z-index: 10;
  }
  .ip--label {
    display: flex;
    margin-left: 0.225em;
    margin-right: 0.5em;
    min-width: 4em;
    outline: 1px solid #efefef;
  }
  .ip--label span {
    padding: 0 0.25em;
    position: relative;
    width: 100%;
    word-break: keep-all;
  }
  .ip--label span:nth-child(1) {
    color: #2f2f2f;
    background-color: #efefef;
  }
  /* .ip--label span:nth-child(2) {
    padding-left: 0.25em;
  } */
  .ip--label span:nth-child(1)::after,
  .ip--label span:nth-child(2)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
    top: 0;
  }
  /* 
      x >
    y
    v 
  
  polygon(x0 y0, x1 y1, x2 y2)
  the last coordinate would create a line to the first coordinate
  */
  .ip--label span:nth-child(1)::after {
    right: -2px;
    clip-path: polygon(0 0, 0 100%, 100% 0);
    background-color: #efefef;
  }
  .ip--label span:nth-child(2)::before {
    left: -2px;
    clip-path: polygon(0 100%, 100% 100%, 100% 0);
    background-color: #503232;
  }
</style>
