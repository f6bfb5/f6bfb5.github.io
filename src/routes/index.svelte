<script context="module">
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);
  let body = [];

  for (let path in allPosts) {
    const post = allPosts[path];
    const metadata = post.metadata;

    if (typeof metadata.tags === "string")
      metadata.tags = [...new Set(metadata.tags.split(", "))];

    const year = new Date(metadata.date).getFullYear();
    const namePage = path.split("/");
    const slugPage = namePage[namePage.length - 1].slice(0, -3);

    const p = {
      path,
      metadata,
      slugPage,
      year,
    };
    body.push(p);
  }

  export const load = async () => {
    return {
      props: {
        posts: body,
      },
    };
  };
</script>

<script>
  import { base } from "$app/paths";

  export let posts;

  let allPostsYears = [...new Set(posts.map((p) => p.year))].sort(
    (a, b) => b - a
  );
  let otherTag = false;
  let allPostsTags = [
    ...new Set(
      posts
        .map((p) => {
          if (!!p.metadata.tags) {
            return p.metadata.tags;
          } else if (!otherTag) {
            otherTag = true;
          }
        })
        .filter((tag) => !!tag)
        .flat()
        .sort()
    ),
  ];
  if (otherTag) allPostsTags.push("Other");

  import TagsFilter from "$lib/TagsFilter.svelte";
  import Tag from "$lib/Tag.svelte";

  import { tagsSelected } from "$lib/store.js";
  $tagsSelected = $tagsSelected;

  function arrayContainsAny(array1, array2) {
    if (array2.length == 0) return true;

    if (!array1 || array1.length == 0) {
      return array2.includes("Other") ? true : false;
    }

    let result = false;
    for (let i = 0; i < array2.length; i++) {
      if (array1.includes(array2[i])) result = true;
    }
    return result;
  }

  import Marquee from "$lib/Marquee.svelte";
  import FloatingCubes from "$lib/FloatingCubes.svelte";
</script>

<svelte:head>
  <title>f6bfb5's Blog</title>

  <meta property="og:type" content="article" />
  <meta property="og:title" content="f6bfb5's blog" />
  <meta name="Description" content="雨天決行" />
  <meta property="og:description" content="雨天決行" />
  <meta property="og:image" content="https://i.imgur.com/pA9yPzD.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" value="f6bfb5's blog" />
  <meta name="twitter:description" content="雨天決行" />

  <meta
    name="google-site-verification"
    content="C2koaxPTcaB21Oif-Z4U_lyVAKw4H7hb-pM5OiGcSWQ"
  />
</svelte:head>

<div class="container">
  <Marquee />

  <h1 data-text="Articles">Articles</h1>
  <TagsFilter {allPostsTags} />

  <!-- ARTICLES -->
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
            .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) as { slugPage, metadata: { title, date, tags } }}
            <li>
              <div class="articles-list--link">
                <span>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "2-digit",
                  }) +
                    "/" +
                    new Date(date).toLocaleDateString("en-US", {
                      day: "2-digit",
                    })}
                </span>
                <a href={`${base}/${slugPage}`} sveltekit:prefetch>{title}</a>
              </div>
              {#if tags}
                <div class="articles-list--tags">
                  {#each tags as tag}
                    <Tag {tag} />
                  {/each}
                </div>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  {/each}

  {#if $tagsSelected.length === 0}
    <div class="articles-list--container">
      <h2>？？？</h2>
      <ul class="articles-list">
        <li>
          <div class="articles-list--link">
            <a href="./test">？？？</a>
          </div>
        </li>
      </ul>
    </div>
  {/if}

  <FloatingCubes />
</div>

<style scoped>
  .container {
    height: 100%;
  }
  h1 {
    margin-left: 16px;

    position: relative;
    z-index: 0;
  }
  h1::after {
    content: attr(data-text);
    font-size: 4em;
    color: var(--bg-color);
    text-shadow: -1px 1px 0 var(--subtitle-color),
      1px 1px 0 var(--subtitle-color), 1px -1px 0 var(--subtitle-color),
      -1px -1px 0 var(--subtitle-color);

    position: absolute;
    left: 0;
    top: 0;
    transform: translate(3%, -33%);
    z-index: -1;

    width: 97%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }

  /* articles list */
  .articles-list--container {
    margin-left: 1em;
    margin-top: 1em;
    margin-right: 1em;
    border: 1px solid var(--subtitle-color);
    box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);

    position: relative;
    background-color: var(--bg-color);

    z-index: 10;
  }
  .articles-list--container h2 {
    margin: 0;
  }
  .articles-list {
    margin: 0;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 6px;
    list-style-position: inside;
  }
  .articles-list li {
    list-style-type: "◼";
    color: var(--title-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .articles-list li::marker {
    content: "◼";
    color: var(--title-color);
    display: inline-block;
  }
  /* ul li + li {
    padding: 0.25em 0;
  } */
  .articles-list--link,
  .articles-list--tags {
    display: inline-block;
  }
  .articles-list--link {
    margin-left: 8px;
  }
  .articles-list--link::before {
    content: "◼";
    color: var(--title-color);
  }
  .articles-list--tags {
    flex-shrink: 0;
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
  ul li span {
    margin-left: 0.25rem;
    font-size: 0.75rem;
    color: var(--text-color);
  }
</style>
