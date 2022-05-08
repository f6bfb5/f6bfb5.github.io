<script>
  // These props get filled in from the page's front matter
  export let title;
  export let date;
  export let tags;

  let _tags;
  if (tags !== undefined && tags !== null && !Array.isArray(tags)) _tags = tags.split(", ");
  if (Array.isArray(tags)) _tags = tags;

  import BackToTop from "$lib/BackToTop.svelte";
  import BlinkAnchor from "$lib/BlinkAnchor.svelte";
</script>

<header>
  <h1 class="title">
    {#each title as title, index}
      <span
        style="
        animation-delay: {125 + 25 * index}ms;
        {title == ' ' ? 'width: .25em;' : ''}
      "
      >
        {title}
      </span>
    {/each}
  </h1>
  <p class="meta">
    <span class="date">
      {new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </span>
    {#if _tags}
      <div class="tags">
        {#each _tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </p>
</header>
<div class="post--container">
  <article class="post--content">
    <slot />
    <BlinkAnchor />
  </article>
  <BackToTop />
</div>

<style scoped>
  header {
    margin: 0 auto;
    max-width: 45em;
    width: 100%;
    text-align: left;
  }

  header h1 {
    margin: 0.13em 0;
    font-size: 6em;
    line-height: 1.1;
    color: var(--title-color);
  }

  /* need to add 15px for scrollbar width */
  @media all and (max-width: 735px) {
    header h1 {
      font-size: 4em;
    }
  }

  .meta {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .date {
    /* padding: 0 20px; */
    color: var(--subtitle-color);
    text-transform: uppercase;
    font-weight: 600;
  }
  .tags {
    display: inline-block;
    text-align: right;
  }
  .tag {
    padding: 0 4px;
    font-size: .8em;;
    color: var(--subtext-color);
    border: 1px solid var(--subtext-color);
    white-space: nowrap;
  }
  .tag + .tag {
    margin-left: .5em;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .title span:nth-child(9n-8) {
    animation: Title_red 0.5s linear both;
  }
  .title span:nth-child(9n-7) {
    animation: Title_orange 0.5s linear both;
  }
  .title span:nth-child(9n-6) {
    animation: Title_yellow 0.5s linear both;
  }
  .title span:nth-child(9n-5) {
    animation: Title_lime 0.5s linear both;
  }
  .title span:nth-child(9n-4) {
    animation: Title_green 0.5s linear both;
  }
  .title span:nth-child(9n-3) {
    animation: Title_cyan 0.5s linear both;
  }
  .title span:nth-child(9n-2) {
    animation: Title_blue 0.5s linear both;
  }
  .title span:nth-child(9n-1) {
    animation: Title_purple 0.5s linear both;
  }
  .title span:nth-child(9n) {
    animation: Title_pink 0.5s linear both;
  }

  @keyframes Title_red {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #e50020;
      fill: #e50020;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_orange {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #ec6c00;
      fill: #ec6c00;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_yellow {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #fbc600;
      fill: #fbc600;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_lime {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #6fba2c;
      fill: #6fba2c;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_green {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #008b38;
      fill: #008b38;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_cyan {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #009fe8;
      fill: #009fe8;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_blue {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #004da0;
      fill: #004da0;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_purple {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #910782;
      fill: #910782;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_pink {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #e40065;
      fill: #e40065;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }

  .post--container {
    padding: 10px;
  }

  .post--container :global(a) {
    font-weight: bold;
  }

  .post--content {
    padding: 10px;
    border: 1px solid var(--subtitle-color);
    box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);
  }
</style>
