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
    <slot />
</div>

<style>
  .layout {
    margin: auto;
    min-height: 100%;
    min-height: 100vh;
    max-width: 960px;
    width: 100%;
    background-color: var(--outer-bg-color);
  }

</style>

