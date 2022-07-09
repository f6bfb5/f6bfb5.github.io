<footer scoped>
  <a
    href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
    target="_blank"
    rel="noreferrer noopener nofollow"
  >
    CC BY-NC-SA 4.0
  </a>
  <div class="right">
    Made with <span class="heart">❤️</span> and
    <a
      href="https://kit.svelte.dev/"
      target="_blank"
      ref="noreferrer noopener nofollow"
    >
      SvelteKit
    </a>
  </div>
  <div class="clearfix" />
</footer>

<style scoped>
  footer {
    margin: 1em auto;
    padding: 1em 2em;
    max-width: 720px;
    width: 100%;
    font-size: 1em;
    color: var(--text-color);
    /* border-top: 1px solid var(--text-color); */

    background-color: var(--bg-color);

    line-height: 1em;
  }

  .clearfix {
    clear: both;
  }
  .right {
    float: right;
  }
  .heart {
    color: #e25555;
  }
</style>
