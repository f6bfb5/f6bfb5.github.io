<script>
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";
  import ProgressBar from "./ProgressBar.svelte";
</script>

<header>
  <div class="header-container">
    <div class="row">
      <Nav />
      <Logo />
    </div>
    <!-- <ProgressBar /> -->
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
