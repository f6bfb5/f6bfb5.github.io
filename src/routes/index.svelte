<script context="module">
  export async function preload({ params, query }) {
    const posts = await this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return posts;
      });
    const sitemap = await this.fetch("sitemap.xml");
    return { posts };
  }
</script>

<script>
  export let posts;

  import TagsFilter from "../components/TagsFilter.svelte";
  import Tag from "../components/Tag.svelte";

  const years = getAllPostsYears(posts);

  const tags = getAllPostsTags(posts);

  let selection = [];

  function getAllPostsYears(posts) {
    let years = [];
    posts.forEach((post, index) => {
      let postYear = new Date(post.printDate).getFullYear();
      years.includes(postYear) ? "" : years.push(postYear);
    });
    return years;
  }

  function getAllPostsTags(posts) {
    let tags = [];
    posts.forEach((post, index) => {
      post.tags.forEach((tag) => {
        tags.includes(tag) ? "" : tags.push(tag);
      });
    });
    tags.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    tags.push("Other");
    return tags;
  }

  function arrayContainsAny(array1, array2) {
    if (array2.length == 0) return true;

    if (array1.length == 0) {
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

  <meta property="og:image" content="https://i.imgur.com/hQnfcyo.jpg" />

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
  <TagsFilter bind:selection {tags} />
  <!-- ARTICLES -->
  {#each years as year}
    {#if getAllPostsYears(posts.filter( (p) => arrayContainsAny(p.tags, selection) )).includes(year)}
      <h2>
        {year}
      </h2>
    {/if}
    <ul>
      {#each posts
        .filter((p) => new Date(p.printDate).getFullYear() == year)
        .filter((p) => arrayContainsAny(p.tags, selection)) as post (post.slug)}
        <li>
          <a rel="prefetch" href={post.slug}>{post.title}</a>
          {#if post.tags}
            {#each post.tags as tag}
              <Tag {tag} />
            {/each}
          {/if}
          <span>{post.printDate}</span>
        </li>
      {/each}
    </ul>
  {/each}
</div>

<style>
  /* articles list */
  ul {
    margin: 0;
    padding: 0 1rem;
    list-style-position: inside;
  }
  ul li::marker {
    content: "◼";
    display: inline-block;
  }
  ul li + li {
    padding: 0.25em 0;
  }
  ul li a {
    margin-left: 8px;
    letter-spacing: 0.52px;
  }
  ul li span {
    margin-left: 0.25rem;
    font-size: 0.75rem;
  }
</style>
