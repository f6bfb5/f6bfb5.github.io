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
</script>

<svelte:head>
  <title>f6bfb5's Blog</title>

  <meta property="og:type" content="article" />
  <meta property="og:title" content="f6bfb5's blog" />
  <meta name="Description" content="雨天決行" />
  <meta property="og:description" content="雨天決行" />
  <meta property="og:image" content="https://i.imgur.com/mNM7Eg9.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" value="f6bfb5's blog" />
  <meta name="twitter:description" content="雨天決行" />

  <meta
    name="google-site-verification"
    content="C2koaxPTcaB21Oif-Z4U_lyVAKw4H7hb-pM5OiGcSWQ"
  />
</svelte:head>

<div class="container">
  <h1>Articles</h1>
  <!-- TAG FILTER -->
  <TagsFilter {allPostsTags} />

  <!-- ARTICLES -->
  {#each allPostsYears as year}
    {#if posts
      .filter((p) => arrayContainsAny(p.metadata.tags, $tagsSelected))
      .some((p) => new Date(p.metadata.date).getFullYear() === year)}
      <h2>{year}</h2>
      {#each posts
        .filter((p) => arrayContainsAny(p.metadata.tags, $tagsSelected))
        .filter((p) => new Date(p.metadata.date).getFullYear() === year)
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) as { slugPage, metadata: { title, date, tags } }}
        <ul>
          <li>
            <div>
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "2-digit",
                }) +
                  "/" +
                  new Date(date).toLocaleDateString("en-US", {
                    day: "2-digit",
                  })}
                <!-- {("0" + (new Date(date).getMonth() + 1)).slice(-2)}/{(
                "0" + new Date(date).getDate()
              ).slice(-2)} -->
              </span>
              <a href={`${base}/${slugPage}`} sveltekit:prefetch>{title}</a>
            </div>
            {#if tags}
              <div>
                {#each tags as tag}
                  <Tag {tag} />
                {/each}
              </div>
            {/if}
          </li>
        </ul>
      {/each}
    {/if}
  {/each}
</div>

<style scoped>
  h1 {
    margin-left: 16px;
  }
  /* articles list */
  ul {
    margin: 0;
    padding: 0 1rem;
    list-style-position: inside;
  }
  ul li {
    list-style-type: "◼";
    color: var(--title-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul li::marker {
    content: "◼";
    color: var(--title-color);
    display: inline-block;
  }
  /* ul li + li {
    padding: 0.25em 0;
  } */
  ul li div {
    display: inline-block;
  }
  ul li div:first-child {
    margin-left: 8px;
  }
  ul li div:first-child::before {
    content: "◼";
    color: var(--title-color);
  }
  ul li div:last-child {
    flex-shrink: 0;
  }
  @media (max-width: 720px) {
    ul li {
      min-width: 0;
    }
    ul li div:first-child {
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;

      display: list-item;
    }
    ul li div:last-child {
      display: none;
    }
    ul li div:first-child::before {
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
