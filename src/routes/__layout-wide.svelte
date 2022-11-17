<script>
  import Loader from "$lib/Loader.svelte";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Favicon from "$lib/Favicon.svelte";
  import Aside from "$lib/Aside.svelte";

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
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-CRDP7WTXSQ"></script>
</svelte:head>

<svelte:window on:load={pageLoaded()} />

<div class="layout" style={isLoaded ? "display: none;" : ""}>
  <div class="loader-container">
    <Loader />
  </div>
</div>

<div class="layout" style={!isLoaded ? "display: none;" : ""}>
  <Favicon />
  <Header />

  <div class="container">
    <main>
      <slot />
    </main>
    <Aside />
  </div>

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

    color: var(--text-color);
    background-color: var(--outer-bg-color);

    overflow: hidden;
    overflow: clip;
  }

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: #242222;
    color: white;
  }

  .container {
    margin: auto;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
  }
  main {
    max-width: 720px;
    width: 100%;
    min-height: 100%;
  }
  @media screen and (max-width: 960px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
