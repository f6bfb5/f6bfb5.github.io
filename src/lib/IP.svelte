<script>
  // How to get client's IP address using JavaScript?
  // https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
  import { onMount } from "svelte";

  import { ip } from "$lib/store.js";
  let corsanywhere = "https://cors-anywhere-srmlyuexjbosgg0x.herokuapp.com/";
  let apiUrl = "https://api.ipify.org?format=json";

  onMount(async function () {
    if ($ip === "") {
      await fetch(corsanywhere + apiUrl)
        .then((resp) => resp.json())
        .then((data) => ($ip = data.ip));
    }
  });
</script>

<div class="ip--container">
  <div class="ip--label">
    <span>H3</span>
    <span>LL0</span>
  </div>
  <span>{$ip}</span>
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
    outline: 1px solid #efefef;
  }
  .ip--label span {
    padding: 0 0.25em;
    position: relative;
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
