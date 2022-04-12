<script>
  import Logo from "./Logo.svelte";
  // import DarkmodeButton from "./DarkmodeButton.svelte";
  import Nav from "./Nav.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  export let segment;
</script>

<header>
  <div class="row">
    <Nav {segment} />
    <!-- <DarkmodeButton /> -->
    <Logo />
  </div>
  <ProgressBar />
</header>

<style>
  header {
    margin: 0 auto;
    max-width: 720px;
    width: 100%;

    position: sticky;
    top: 0;
    z-index: 10;

    background-color: var(--bg-color);
  }
  .row {
    display: flex;
    padding: 2em 0 1em 0;
  }
</style>
