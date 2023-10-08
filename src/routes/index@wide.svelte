<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch("/posts.json").then((res) => res.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import Marquee from "$lib/components/Marquee.svelte";
  import TagsFilter from "$lib/TagsFilter.svelte";
  import ArticlesList from "$lib/ArticlesList.svelte";

  export let posts;

  function getAllPostsYears(posts) {
    return [
      ...new Set(posts.map((p) => new Date(p.metadata.date).getFullYear())),
    ].sort((a, b) => b - a);
  }

  function getAllPostsTags(posts) {
    let otherTag = false;
    let allPostsTags = [
      ...new Set(
        posts
          .map((p) => {
            if (!!p.metadata.tags) {
              return p.metadata.tags.split(", ");
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
    return allPostsTags;
  }

  let allPostsYears = getAllPostsYears(posts);
  let allPostsTags = getAllPostsTags(posts);
</script>

<svelte:head>
  <title>f6bfb5's Blog</title>

  <meta property="og:type" content="article" />
  <meta property="og:title" content="f6bfb5's blog" />
  <meta name="Description" content="雨天決行" />
  <meta property="og:description" content="雨天決行" />
  <meta property="og:image" content="https://i.imgur.com/frsPyaZ.png" />

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

  <div class="navbar">
    <h1 data-text="Articles">Articles</h1>
    <div class="h1-bordered">Articles</div>
    <TagsFilter {allPostsTags} />
  </div>
  <ArticlesList {allPostsYears} {posts} />

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
    color: transparent;
    background: linear-gradient(to bottom, rgba(191,210,85,1) 0%,rgba(142,185,42,1) 50%,rgba(114,170,0,1) 51%,rgba(158,203,45,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 1px green;
    filter: drop-shadow(2px 2px var(--subtext-color));

    position: relative;
    z-index: 0;
  }
  .navbar {
    position: relative;
    z-index: 0;
  }
  .h1-bordered {
  /* h1::after { */
    /* content: attr(data-text); */
    /* font-size: 4em; */
    font-size: 8em;
    color: var(--bg-color);
    text-shadow: -1px 1px 0 var(--subtitle-color),
      1px 1px 0 var(--subtitle-color), 1px -1px 0 var(--subtitle-color),
      -1px -1px 0 var(--subtitle-color);

    position: absolute;
    /* left: 0; */
    /* top: 0; */
    /* transform: translate(3%, -33%); */
    left: 1rem;
    bottom: 0;
    transform: translate(3%, 25%);

    z-index: -1;

    width: 97%;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
  }
</style>
