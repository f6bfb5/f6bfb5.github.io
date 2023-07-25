<script>
  // These props get filled in from the page's front matter
  export let title;
  export let date;
  export let tags;

  let _tags;
  if (tags !== undefined && tags !== null && !Array.isArray(tags)) _tags = tags.split(", ");
  if (Array.isArray(tags)) _tags = tags;

  import PostTitle from "$lib/PostTitle.svelte";
  import BackToTop from "$lib/BackToTop.svelte";
  import BlinkAnchor from "$lib/BlinkAnchor.svelte";
</script>

<header>
  <PostTitle title={title} />
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

  .post--container {
    padding: 10px;
  }

  .post--container :global(a) {
    font-weight: bold;
  }

  .post--content {
    position: relative;
    padding: 10px;
    border: 1px solid var(--subtitle-color);
    box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);
    background-color: #e5edc8;
  }
</style>
