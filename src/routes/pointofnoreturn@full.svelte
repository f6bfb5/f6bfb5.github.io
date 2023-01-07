<script>
  // import LibLoader from "$lib/LibLoader.svelte";

  // function onLoaded() {}

  import { onMount } from "svelte";

  let containerEl;
  let containerHeight;

  onMount(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries.at(0);
      containerHeight = entry.contentBoxSize[0].blockSize;
    });
    resizeObserver.observe(containerEl);
    return () => resizeObserver.unobserve(containerEl);
  });

  $: dynamicFontSize = containerHeight / 18;
</script>

<div class="b">
  <div class="c">
    <div
      class="w"
      bind:this={containerEl}
      style="--dynamic-font-size: {dynamicFontSize}px"
    >
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>死を忘ることなかれ</p>
      <p>{containerHeight}</p>
    </div>
  </div>
</div>

<style scoped>
  @font-face {
    font-family: PixelMplus10 Regular;
    src: url("https://cdn.leafscape.be/PixelMplus/PixelMplus10-Regular_web.woff2")
      format("woff2");
  }

  .b {
    width: 100%;
    min-height: 100vh;
    background-color: #460609;

    /* display: flex;
    align-items: center; */
  }

  .c {
    margin: auto;
    max-width: 100%;
    max-height: 100vh;
    aspect-ratio: 4 / 3;

    background-color: #460609;
    background-image: url(https://i.imgur.com/9MnFlCB.gif);
    background-size: cover;

    user-select: none;
    overflow: hidden;

    object-fit: contain;
    align-self: center;
    flex: 0 0 auto;
  }

  .w {
    width: 100%;
    height: 100%;

    padding: var(--dynamic-font-size);

    background: linear-gradient(
        217deg,
        rgba(0, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%);
  }
  .w p {
    padding: 0;

    font-family: "PixelMplus10 Regular";
    font-size: var(--dynamic-font-size);
    text-indent: 0em;
    line-height: 1.25;

    color: white;
  }
</style>
