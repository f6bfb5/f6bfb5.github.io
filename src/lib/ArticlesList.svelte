<script>
  export let allPostsYears;
  export let posts;

  import { base } from "$app/paths";

  import Tag from "$lib/Tag.svelte";
  import { tagsSelected } from "$lib/store.js";
  $tagsSelected = $tagsSelected;

  function arrayContainsAny(array1_string, array2) {
    if (array2.length == 0) return true;

    let array1 =
      array1_string == undefined ? undefined : array1_string.split(", ");
    if (!array1 || array1.length == 0) {
      return array2.includes("Other") ? true : false;
    }

    let result = false;
    for (let i = 0; i < array2.length; i++) {
      if (array1.includes(array2[i])) result = true;
    }
    return result;
  }
</script>

{#each allPostsYears as year}
  {#if posts
    .filter((p) => arrayContainsAny(p.metadata.tags, $tagsSelected))
    .some((p) => new Date(p.metadata.date).getFullYear() === year)}
    <div class="articles-list--container">
      <h2>{year}</h2>
      <ul class="articles-list">
        {#each posts
          .filter((p) => arrayContainsAny(p.metadata.tags, $tagsSelected))
          .filter((p) => new Date(p.metadata.date).getFullYear() === year)
          .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) as { slug, metadata: { title, date, tags } }}
          <li>
            <div class="articles-list--link">
              <time>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "2-digit",
                }) +
                  "/" +
                  new Date(date).toLocaleDateString("en-US", {
                    day: "2-digit",
                  })}
              </time>
              <a href={`${base}/${slug}`} sveltekit:prefetch>{title}</a>
            </div>
            {#if tags}
              <div class="articles-list--tags">
                {#each tags.split(", ") as tag}
                  <Tag {tag} />
                {/each}
              </div>
            {/if}
          </li>
        {/each}
      </ul>
      <div class="articles-list--bordered-title">{year}</div>
    </div>
  {/if}
{/each}

<style>
  .articles-list--container {
    margin-left: 1em;
    margin-top: 1em;
    margin-right: 1em;
    border: 1px solid var(--subtitle-color);
    box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);

    position: relative;
    /* background-color: var(--bg-color); */
    background-color: #e5edc8;

    z-index: 10;
    overflow: clip;
    overflow: hidden;
  }

  .articles-list--container h2 {
    margin: 0;
  }

  .articles-list {
    margin: 0;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.375em;
    list-style-position: inside;
  }

  .articles-list li {
    list-style-type: "◼";
    color: var(--title-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    line-height: 1;
  }
  .articles-list li + li {
    margin-top: 0.35em;
  }
  .articles-list li::marker {
    content: "◼";
    color: var(--title-color);
    display: inline-block;
  }

  /* .articles-list--link, */
  .articles-list--tags {
    display: inline-block;
  }
  .articles-list--link {
    margin-left: 0.5em;
    display: flex;
    align-items: center;
  }
  .articles-list--link::before {
    content: "◼";
    color: var(--title-color);
  }
  .articles-list--link time {
    white-space: nowrap;
  }
  .articles-list--link a {
    padding-left: 0.5em;
  }

  .articles-list--tags {
    flex-shrink: 0;
  }

  .articles-list--bordered-title {
    font-size: 8em;
    color: #e5edc8;
    text-shadow: -1px 1px 0 var(--subtitle-color),
      1px 1px 0 var(--subtitle-color), 1px -1px 0 var(--subtitle-color),
      -1px -1px 0 var(--subtitle-color);
    position: absolute;
    /* right: 0.25em; */
    right: 0.125em;
    bottom: -0.25em;
    /* bottom: -0.35em; */
    z-index: -1;
    opacity: 0.5;
    user-select: none;
    
    font-family: -apple-system, BlinkMacSystemFont,
      ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo,
      ＭＳ\Ｐゴシック, MS PGothic, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
      Cantarell, "Helvetica Neue", Helvetica, sans-serif;
    font-style: italic;
    font-weight: bold;
  }

  @media (max-width: 720px) {
    ul li {
      min-width: 0;
    }
    .articles-list--link {
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;

      display: list-item;
    }
    .articles-list--link a {
      padding-left: 0;
    }
    .articles-list--tags {
      display: none;
    }
    .articles-list--link::before {
      content: "";
    }
  }

  ul li a {
    margin-left: 2px;
    letter-spacing: 0.52px;
    font-size: 1.125em;
  }
  ul li time {
    margin-left: 0.25rem;
    font-size: 0.75rem;
    color: var(--text-color);
  }
</style>
