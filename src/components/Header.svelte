<script>
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

  export let segment;
</script>

<header>
  <Nav {segment} />
  <Logo />
</header>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 720px;
    padding: 2em 0 0 0;
    width: 100%;
  }
</style>
