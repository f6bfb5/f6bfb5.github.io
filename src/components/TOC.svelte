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

{#if TOC.length !== 0}
  <div class="toc">
    <div class="toc--title">
      {title}
    </div>
    <div class="toc-dropdown">
      <ul>
        {#each TOC as t}
          <li>
            <!-- svelte-ignore a11y-missing-attribute -->
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
    <!-- <div class="toc-menu" /> -->
  </div>
{/if}

<style>
  .toc {
    display: none;
  }
  @media all and (min-width: 1280px) {
    .toc {
      left: calc((100vw - 720px) / 2 - 280px) !important;
      max-width: 240px !important;
    }
    .toc ul li {
      font-size: 16px !important;
    }
  }
  @media all and (min-width: 1150px) {
    .toc {
      display: flex;
      flex-direction: column;

      position: fixed;
      top: 250px;
      left: calc((100vw - 720px) / 2 - 200px);
      max-width: 150px;
      max-height: calc(100vh - 300px);

      /* [98.css - A design system for building faithful recreations of old UIs](https://jdan.github.io/98.css/) */
      background: silver;
      box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
        inset -2px -2px grey, inset 2px 2px #fff;
      padding: 3px;
    }
    .toc--title {
      background: linear-gradient(90deg, navy, #1084d0);
      color: white;
      padding: 3px 2px 3px 3px;
      font-size: 12px;
      letter-spacing: 0px;
    }
    .toc-dropdown {
      padding: 3px 2px 3px 3px;
      overflow-y: scroll;
    }
    .toc ul {
      list-style-position: inside;
      padding: 0;
    }
    .toc ul li {
      padding: 0;
      font-size: 14px;
      font-weight: 600;
    }
    .toc ul li::marker {
      content: "‧";
    }
    .toc ul li + li {
      margin-top: 2px;
    }
    a {
      cursor: pointer;
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dfdfdf;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff,
      inset -2px -2px grey, inset 2px 2px #dfdfdf;
  }

  ::-webkit-scrollbar-corner {
    background: #dfdfdf;
  }
</style>
