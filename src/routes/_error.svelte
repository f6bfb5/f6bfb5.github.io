<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1 style="text-align: center; padding-top: .5em;">{status}</h1>

<p>
  嗨 （´・ω・｀）
  <br />歡迎來到 bourbon house。
  <br />這杯龍舌蘭是請你的，先喝了冷靜下來吧。
  <br />
  <br />
  <br />嗯，「又是我」。不好意思。
  <br />俗話也說事不過三，我也不覺得道歉就能得到原諒。
  <br />
  <br />
  <br
  />但是，我相信當你看到這則頁面的時候，你一定會感受到某種言語無法表達的，類似「悸動」的東西。
  <br />希望你在這動盪的亂世裡，不要忘了這種心情
  <br />帶著這樣的想法，我製作了這則頁面。
  <br />
  <br />
  <br />那麼，你要點什麼呢。
</p>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
