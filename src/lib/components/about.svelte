<script>
  import { aboutImages, aboutLinks } from "$lib/store.js";
  import TextVHS from "$lib/components/TextVHS.svelte";

  function getRandomEleFromArr(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }

  const backgroundImage = getRandomEleFromArr($aboutImages);
  let targetUrl = getRandomEleFromArr($aboutLinks);
  const text = "追体験で人は幸福になれない";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div
  class="about--background"
  style="background-image: url('{backgroundImage}')"
>
  <a
    href={targetUrl}
    class="about--background-caption"
    target="_blank"
    rel="noreferrer noopener"
    on:click={() => (targetUrl = getRandomEleFromArr($aboutLinks))}
  >
    <TextVHS {text} />
  </a>
</div>

<style scoped>
  .about--background {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 1000;
    transform: translate(-50%, -50%);
    overflow: hidden;

    background-color: #242222;
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
  }

  .about--background-caption {
    align-self: center;
    min-height: 100%;

    font-size: 40px;
    text-align: center;
  }

  @media screen and (max-width: 576px) {
    .about--background-caption {
      font-size: 28px;
    }
  }
</style>
