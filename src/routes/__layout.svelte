<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  // import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte";
  // import { stores } from "@sapper/app";
  // import { getStores } from "$app/stores";
  // import GoogleAdsense from "$lib/GoogleAdsense.svelte";
  import Favicon from "$lib/Favicon.svelte";

  // let ga_measurement_id = "UA-114661136-2";
  // let ga_client_id = "ca-pub-9613661448556355";
</script>

<div class="layout">
  <!-- <GoogleAnalytics {getStores} id={ga_measurement_id} /> -->
  <!-- <GoogleAdsense id={ga_client_id} /> -->

  <Favicon />
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;

    position: relative;

    min-height: 100%;
    min-height: 100vh;
    background-color: var(--outer-bg-color);
  }

  main {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 auto;
    max-width: 720px;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--bg-color);
  }
</style>
