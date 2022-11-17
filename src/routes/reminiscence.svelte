<script>
  import { beforeUpdate, afterUpdate } from "svelte";

  import CircleBorder from "$lib/CircleBorder.svelte";
  import BorderedText from "$lib/BorderedText.svelte";
  import BalloonQuote2 from "$lib/BalloonQuote2.svelte";
  import QRCode from "$lib/QRCode.svelte";

  let wideContainerNode;
  let autoscroll;

  beforeUpdate(() => {
    autoscroll =
      wideContainerNode &&
      wideContainerNode.offsetHeight + wideContainerNode.scrollTop >
        wideContainerNode.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll)
      window.scrollTo({
        left: 0,
        top: wideContainerNode.scrollHeight || document.body.scrollHeight,
        behavior: "smooth",
      });
  });

  let quotesArray = [
    ["quote", "……"],
    ["quote", "噢，你好！"],
    ["quote", "這是個對話模擬 Demo 頁面。"],
    ["quote", "可以顯示圖片。"],
    ["image", "https://i.imgur.com/7vSdphr.png"],
    [
      "quote",
      "可以加入<a href='https://www.youtube.com/watch?v=BoZ0Zwab6Oc' rel='noreferrer noopener' target='_blank'>連結</a>。",
    ],
    ["quote", "還可以加入 QRCode！"],
    ["component", QRCode, "Nice Boat."],
    ["quote", "……"],
    ["quote", "也可以嵌入 YouTube？"],
    [
      "quote",
      "<iframe width='0' height='0' src='//www.youtube.com/embed/dTCEG95B7JQ?autoplay=1&loop=1' frameborder='0' allowfullscreen></iframe>",
    ],
    ["quote", "……"],
  ];
  let displayArray = new Array(quotesArray[0]);
  let pushIndex = 0;
  let isEnded = false;

  function pushQuote() {
    if (pushIndex + 1 < quotesArray.length) {
      pushIndex++;
      displayArray.push(quotesArray[pushIndex]);
      displayArray = displayArray;
    }
    if (pushIndex + 1 >= quotesArray.length) {
      isEnded = true;
    }
  }

  $: displayArray = displayArray;
</script>

<div class="wide-container" bind:this={wideContainerNode}>
  {#each displayArray as [type, content, component_text], i}
    <div class="balloon-container" style="animation-delay: 0.2s;">
      <div class="balloon-icon">
        <CircleBorder size="60px" image="https://i.imgur.com/JuPO2pq.png" />
        <div style="display: inline-block; margin-top: -1em; z-index: 1;">
          <BorderedText text="< />" />
        </div>
      </div>
      <div class="balloon-text" on:click={pushQuote}>
        <BalloonQuote2
          quote={type === "quote" ? content : null}
          image={type === "image" ? content : null}
          component={type === "component" ? content : null}
          component_prop={component_text != null ? component_text : null}
          arrow={i + 1 === displayArray.length && !isEnded ? true : false}
        />
      </div>
    </div>
  {/each}
</div>

<style scoped>
  .wide-container {
    margin: 0;
    padding: 0;
  }
  .balloon-container {
    display: flex;
    align-items: flex-start;
    gap: 4px;

    opacity: 0;
    transform: translate3d(0, 50%, 0);
    animation: 0.5s slide-in ease-out forwards;
  }
  .balloon-container + .balloon-container {
    margin-top: 1em;
  }
  .balloon-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .balloon-text {
    padding-top: 0.5em;
    flex-grow: 1;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
