<script>
  import { page } from "$app/stores";
  // import { onDestroy } from "svelte";
  // let currentPage;

  // const unsubscribe = page.subscribe((value) => {
  //   currentPage = value;
  // });
  // onDestroy(unsubscribe);
</script>

<nav>
  <a
    class={$page.url.pathname === undefined ? "selected" : ""}
    href=".."
    sveltekit:prefetch>トリコじかけの明け暮れ</a
  >
  <!-- <a
    class={$page.url.pathname === "about" ? "selected" : ""}
    href="about"
    sveltekit:prefetch>about</a
  >
  <a
    class={$page.url.pathname === "rss" ? "selected" : ""}
    href="rss.xml"
    sveltekit:prefetch>rss</a
  > -->
</nav>

<style scoped>
  nav {
    display: flex;
    flex: 1;
    min-width: 0;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
  }

  a {
    margin-left: 20px;
    padding: 10px 5px;
    display: block;
    position: relative;
    color: inherit;
    text-decoration: none;

    white-space: nowrap;
  }
  a:first-child {
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
  a:last-child {
    margin-right: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #fd6378;
  }
</style>
