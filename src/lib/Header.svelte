<script>
  import Logo from "$lib/Logo.svelte";
  import Nav from "$lib/Nav.svelte";
</script>

<header>
  <div class="header-container">
    <div class="row">
      <Nav />
      <Logo />
    </div>
  </div>
</header>

<style scoped>
  header {
    margin: 0 auto;
    /* max-width: 720px; */
    width: 100%;

    position: sticky;
    top: 0;
    z-index: 10000;

    background-color: var(--bg-color);
    /* backdrop-filter: blur(20px); */
  }

  .header-container {
    max-width: 720px;
    margin: auto;
  }
  .row {
    display: flex;
    padding: 2em 0 1em 0;
  }
</style>
