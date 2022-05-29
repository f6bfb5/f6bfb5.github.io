<div class="loader">
  <span class="loader-text loader-step1">/</span>
  <span class="loader-text loader-step1">-</span>
  <span class="loader-text loader-step1">\</span>
  <span class="loader-text loader-step1">|</span>
</div>

<style>
  :root {
    --loader-size: 24px;
  }
  .loader {
    display: flex;

    width: var(--loader-size);
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;

    animation: loading-animation 0.5s steps(4, end) infinite;
  }
  .loader-text {
    flex: 1;
    min-width: var(--loader-size);
    font-size: var(--loader-size);
    text-align: center;
  }
  @keyframes loading-animation {
    from {
      text-indent: 0;
    }
    to {
      text-indent: calc(var(--loader-size) * -8);
    }
  }
</style>
