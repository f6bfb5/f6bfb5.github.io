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
        // href: window.location.origin + window.location.pathname + "#" + q.id,
        // href: isNaN(parseInt(q.id[0])) ? "#" + q.id : "#\\3" + q.id,
        href: q.id,
        text: q.innerText,
      });
    });
    TOC = TOC;
  });
</script>

<div class="toc-dropdown">
  {#if TOC.length !== 0}
    <div class="toc">
      <div class="toc--title">{title}</div>
      <ul>
        {#each TOC as t}
          <li>
            <a
              onclick="document.getElementById('{t.href}')
              .scrollIntoView(&lbrace; behavior: 'smooth' &rbrace;);"
              title={t.text}
            >
              {t.text}
            </a>
          </li>
        {/each}
        <ul />
      </ul>
    </div>
    <div class="toc-menu" />
  {/if}
</div>

<style>
  @media all and (min-width: 1150px) {
    .toc-dropdown {
      position: fixed;
      top: 250px;
      left: calc((100vw - 720px) / 2 - 200px);
      max-width: 150px;
      max-height: calc(100vh - 300px);
      overflow-y: scroll;
    }
    .toc--title {
      font-size: 12px;
    }
    .toc ul {
      list-style-position: inside;
      padding: 0;
    }
    .toc ul li {
      padding: 0;
    }
    .toc ul li::marker {
      content: "# ";
    }
    .toc ul li + li {
      margin-top: 8px;
    }
    a {
      cursor: pointer;
    }
  }
</style>
