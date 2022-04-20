<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Favicon from "$lib/Favicon.svelte";

  import { onMount } from "svelte";
  onMount(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-CRDP7WTXSQ");
  });

  // import GoogleAdsense from "$lib/GoogleAdsense.svelte";
  // let ga_client_id = "ca-pub-9613661448556355";
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-CRDP7WTXSQ"></script>
</svelte:head>

<div class="layout">
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
