<script>
  export let segment;
</script>

<nav>
  <a class={segment === undefined ? "selected" : ""} href=".">f6bfb5's blog</a>
  <a class={segment === "about" ? "selected" : ""} href="about">about</a>
  <a class={segment === "rss" ? "selected" : ""} href="rss.xml">rss</a>
</nav>

<style>
  nav {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
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
