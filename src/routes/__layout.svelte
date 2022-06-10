<script>
  import Loader from "$lib/Loader.svelte";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Favicon from "$lib/Favicon.svelte";

  import { onMount } from "svelte";

  let isLoaded = false;
  function pageLoaded() {
    isLoaded = true;
  }

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

<svelte:window on:load={pageLoaded()} />

<!-- if statement of svelte would not render slot page to static file in root -->

<div class="layout" style={isLoaded ? "display: none;" : ""}>
  <div class="loader-container">
    <Loader />
  </div>
</div>

<div class="layout" style={!isLoaded ? "display: none;" : ""}>
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
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: black;
    color: white;
  }

  main {
    position: relative;

    display: flex;
    flex: 1;
    flex-direction: column;

    margin: 0 auto;
    max-width: 720px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    background-color: var(--bg-color);
  }
</style>
