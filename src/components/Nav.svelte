<script>
  export let segment;
</script>

<style>
  nav {
    align-items: flex-start;
    display: flex;
    flex: 1;
    justify-content: flex-start;
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

<nav>
  <a class={segment === undefined ? 'selected' : ''} href=".">blog</a>
  <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
  <a class={segment === 'rss' ? 'selected' : ''} href="rss">rss</a>
</nav>
