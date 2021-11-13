<script>
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<button on:click={toggle}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M17 14v2.639c0 1.776-1.625 2.608-2 4.361h-6c-.369-1.782-2-2.582-2-4.361v-2.639h10zm-2.25 8h-5.5l1.451 1.659c.19.216.465.341.752.341h1.094c.287 0 .562-.125.752-.341l1.451-1.659zm-1.25-22c-1.381 0-2.5 1.119-2.5 2.5v10.5h2v-10.5c0-.276.225-.5.5-.5s.5.224.5.5v10.5h2v-10.5c0-1.381-1.119-2.5-2.5-2.5zm-3.5 2.5c0-.953.386-1.817 1.006-2.449-.163-.033-.333-.051-.506-.051-1.381 0-2.5 1.119-2.5 2.5v10.5h2v-10.5z"
    />
  </svg>
</button>

<style>
  button {
    border: none;
    background: transparent;
    margin-bottom: 10px;
    filter: invert(var(--invert));
    cursor: pointer;
    transition: filter 0.2s ease-in-out;
    -webkit-transition: -webkit-filter 0.2s ease-in-out;
  }

  button:hover {
    filter: blur(0.5px) drop-shadow(0 0 4px black) invert(var(--invert));
  }

  :global(body) {
    /* background: var(--bg-color); */
    color: var(--text-color);
    transition: background-color 0.4s;
  }
  :global(body.dark-mode) {
    --bg-color: #1d3040;
    --text-color: #bfc2c7;
    --link-color: #d2d217;
    --invert: 1;
  }
</style>
