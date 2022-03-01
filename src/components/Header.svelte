<script>
  import Logo from "./Logo.svelte";
  // import DarkmodeButton from "./DarkmodeButton.svelte";
  import Nav from "./Nav.svelte";

  export let segment;
</script>

<header>
  <Nav {segment} />
  <!-- <DarkmodeButton /> -->
  <Logo />
</header>

<style>
  header {
    display: flex;
    margin: 0 auto;
    padding: 2em 0 1em 0;
    max-width: 720px;
    width: 100%;

    position: sticky;
    top: 0;
    z-index: 10;

    background-color: var(--bg-color);
  }
</style>
