<script context="module">
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);
  const body = [];

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

  export const load = () => {
    return {
      props: {
        posts: body,
      },
    };
  };
</script>

<script>
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

  import Marquee from "$lib/Marquee.svelte";
  import IP from "$lib/IP.svelte";
  import TagsFilter from "$lib/TagsFilter.svelte";
  import ArticlesList from "$lib/ArticlesList.svelte";
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
  <IP />
  <Marquee />

  <h1 data-text="Articles">Articles</h1>
  <TagsFilter {allPostsTags} />
  <ArticlesList {allPostsYears} {posts} />

  <div
    on:click={() => window.location.assign("./reminiscence")}
    style="margin: auto; width: fit-content;"
  >
  </div>

  <a href="https://github.com/f6bfb5" rel="me" style="display: none;">
    github.com/f6bfb5
  </a>
</div>

<style scoped>
  /* keep main content max-width in 720px (16px*45em) */
  .container {
    margin: 0 auto;
    /* max-width: 720px; */
    width: 100%;
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
</style>
