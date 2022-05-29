<hr />

<style>
  hr {
    background: linear-gradient(
      to left,
      var(--text-color) calc(50% - 16px),
      transparent calc(50% - 16px),
      transparent calc(50% + 16px),
      var(--text-color) calc(50% + 16px)
    );
    background-color: transparent !important;
    border: none;
    height: 1px !important;
    width: 95%;
    overflow: visible;
    position: relative;

    margin-block-start: 2em;
    margin-block-end: 2em;
  }

  hr::before,
  hr::after {
    background: var(--text-color);
    content: "";
    display: block;
    height: 1.6rem;
    position: absolute;
    top: calc(50% - 0.8rem);
    transform: rotate(22.5deg);
    width: 1px;
  }
  hr::before {
    left: calc(50% - 0.5rem);
  }
  hr::after {
    right: calc(50% - 0.5rem);
  }
</style>
