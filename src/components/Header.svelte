<script>
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

  export let segment;
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 720px;
    padding: 2em 0 0 0;
    width: 100%;
  }
</style>

<header>
  <Nav {segment} />
  <Logo />
</header>
