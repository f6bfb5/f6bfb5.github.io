<script>
  import { onMount } from "svelte";
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

<div class="layout">
  <main>
    <slot />
  </main>
</div>

<style>
  .layout {
    min-height: 100vh;
    width: 100%;
    background-color: #242222;
  }
  main {
    margin: auto;
    padding-top: 2em;
    padding-bottom: 2em;
    min-height: 100%;
    width: 100%;
    max-width: 960px;
  }
  @media screen and (max-width: 960px) {
    main {
      padding-left: 1em;
      padding-right: 1em;
    }
  }
</style>
