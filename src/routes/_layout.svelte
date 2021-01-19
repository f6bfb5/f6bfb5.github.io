<script>
  import Header from "../components/Header.svelte";
  import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  import { stores } from "@sapper/app";
  import GoogleAdsense from "../components/GoogleAdsense.svelte";
  import Favicon from "../components/Favicon.svelte";

  let ga_measurement_id = "UA-114661136-2";
  let ga_client_id = "ca-pub-9613661448556355";

  export let segment;
</script>

<div class="layout">
  <GoogleAnalytics {stores} id={ga_measurement_id} />
  <GoogleAdsense id={ga_client_id} />
  <Favicon />
  <Header {segment} />

  <main>
    <slot />
  </main>

  <footer>
    <span>
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noreferrer noopener nofollow">CC BY-SA 4.0.</a
      >
    </span>
  </footer>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 auto;
    padding: 1em 2em;
    max-width: 1400px;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }

  footer {
    margin: 1em auto;
    padding: 1em 2em;
    max-width: 720px;
    width: 100%;
    font-size: 1em;
    color: #aaa;
    border-top: 1px solid #e6e6e6;
  }
</style>
