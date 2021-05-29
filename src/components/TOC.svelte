<script>
  export let title;
  export let html;

  import { onMount } from "svelte";

  $: TOC = [];
  onMount(async () => {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(html, "text/html");

    parsedDocument.querySelectorAll("h2").forEach((q) => {
      TOC.push({
        href: window.location.origin + window.location.pathname + "#" + q.id,
        text: q.innerText,
      });
    });
    console.log(TOC);
    TOC = TOC;
  });
</script>

<div class="toc-dropdown">
  {#if TOC.length !== 0}
    <div class="toc">
      <div class="toc--title">{title}</div>
      <ul>
        {#each TOC as t}
          <li><a href={t.href} title={t.text}>{t.text}</a></li>
        {/each}
        <ul />
      </ul>
    </div>
    <div class="toc-menu" />
  {/if}
</div>

<style>
  @media all and (min-width: 1024px) {
    .toc-dropdown {
      position: fixed;
      top: 250px;
      left: calc((100vw - 720px) / 2 - 200px);
      max-width: 150px;
    }
    .toc--title {
      font-size: 12px;
    }
    .toc ul li {
      padding: 0;
    }
  }
</style>
