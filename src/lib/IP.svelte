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
    <span>TCP</span>
    <span>IP</span>
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
    padding: 0.125em;
    max-width: 24em;

    color: #efefef;
    background-color: #2f2f2f;
    z-index: 10;
  }
  .ip--label {
    margin-left: 0.225em;
    margin-right: 0.5em;
    border: 1px solid #efefef;
  }
  .ip--label span {
    padding: 0 0.125em;
  }
  .ip--label span:nth-child(1) {
    color: #2f2f2f;
    background-color: #efefef;
  }
  .ip--label span:nth-child(2) {
    padding-left: 0;
  }
</style>
