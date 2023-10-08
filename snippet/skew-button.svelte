<div style="position: relative; text-align: center;">
  {#each [1, 2, 3, 4] as index}
  <button style="position: relative; padding: 0; outline: none; border: none; background-color: transparent; cursor: pointer;">
    <span class="skew-button-text">
      Title {index}
    </span>
  </button>
  {/each}
</div>

<style>
  .skew-button-text {
    position: relative;
    display: block;
    padding: 0.25em 1em;
  }
  .skew-button-text::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) skewX(-25deg);
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
  .skew-button-text:hover::before {
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>
