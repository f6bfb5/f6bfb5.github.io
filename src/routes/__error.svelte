<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
</script>

<script>
  export let status;
  export let error;

  import BlinkAnchor from "$lib/components/BlinkAnchor.svelte";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="wrapper">
  <div class="error-container">
    <h1>{status}</h1>
    <p>An error has occurred. To continue:</p>
    <ul>
      <li>Please click any link on the header to go back.</li>
      <li>
        Or you can drink a cup of coffee and listen to a
        <a
          href="https://www.youtube.com/watch?v=OGWO3u8zgTU"
          rel="noreferrer noopener"
          target="_blank">song</a
        >
        ♪
      </li>
    </ul>
    <p>Error: {error.message.toUpperCase()}</p>
    <p class="center">Press any link to continue <BlinkAnchor /></p>
  </div>
</div>

<style scoped>
  .center {
    text-align: center;
  }
  .wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    background-color: #0102ac;
  }
  .error-container {
    padding: 4em;
    width: 100%;
  }
  @media (max-width: 576px) {
    .error-container {
      padding: 2em;
    }
  }
  h1 {
    margin: 0 auto 0.5em;
    padding: 0 0.75em;
    width: fit-content;

    font-weight: 700;
    color: #0a0876;
    background-color: #b3b1b2;
  }
  p,
  ul {
    color: #f8f8ff;
  }
  p {
    text-indent: 0;
  }
  a {
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: 700;
    color: #0a0876;
    background-color: #b3b1b2;
  }
  ul {
    padding: 0 0.5em;
    list-style-type: "*";
  }
  ul li::marker {
    color: #f8f8ff;
  }
  ul li {
    text-indent: 1em;
  }
</style>
