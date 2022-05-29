<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Favicon from "$lib/Favicon.svelte";

  import { onMount } from "svelte";

  let isLoaded = false;
  function loaded() {
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

<svelte:window on:load={loaded()} />

{#if !isLoaded}
  <div class="layout">
    <div class="loader-container">
      <div class="loader">
        <span class="loader-text loader-step1">/</span>
        <span class="loader-text loader-step1">-</span>
        <span class="loader-text loader-step1">\</span>
        <span class="loader-text loader-step1">|</span>
      </div>
    </div>
  </div>
{:else}
  <div class="layout">
    <!-- <GoogleAdsense id={ga_client_id} /> -->

    <Favicon />
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
{/if}

<style>
  .layout {
    position: relative;

    display: flex;
    flex-direction: column;

    min-height: 100%;
    min-height: 100vh;
    background-color: var(--outer-bg-color);
  }

  :root {
    --loader-size: 24px;
  }
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100%;
    min-height: 100vh;
    
    background-color: black;
    color: white;
  }
  .loader {
    display: flex;

    width: var(--loader-size);
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;
    
    animation: loading-animation 0.5s steps(4, end) infinite;
  }
  .loader-text {
    flex: 1;
    min-width: var(--loader-size);
    font-size: var(--loader-size);
    text-align: center;
  }
  @keyframes loading-animation {
    from {
      text-indent: 0;
    }
    to {
      text-indent: calc(var(--loader-size) * -8);
    }
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
