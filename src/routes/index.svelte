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

  const years = getAllPostsYears(posts);
  const tags = getAllPostsTags(posts);
  tags.push("Other");

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
    return tags;
  }

  function checkAll() {
    let checkboxes = document.getElementsByName("filterCheckbox");
    let state = checkboxes[0].checked;

    selection = state ? tags : [];
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = state;
    }
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
  <div class="tag-group">
    <input
      class="tag-checkbox"
      type="checkbox"
      name="filterCheckbox"
      id="All"
      value="All"
      on:click={checkAll}
    />
    <label class="tag tag-button" for="All">All</label>
    {#each tags as tag}
      <input
        class="tag-checkbox"
        type="checkbox"
        name="filterCheckbox"
        id={tag}
        value={tag}
        bind:group={selection}
      />
      <label class="tag tag-button" for={tag}>{tag}</label>
    {/each}
  </div>
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
              <span class="tag">{tag}</span>
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
    /* list-style: none; */
    list-style-position: inside;
  }
  li::marker {
    content: "＠ ";
  }
  li + li {
    padding: 0.25em 0;
  }

  .tag-group {
    padding: 0 16px;
  }
  /* tag list & tag button */
  .tag {
    padding: 0px 4px;
    border: 1px solid black;
    font-size: 0.8em;
  }
  .tag + .tag {
    margin-left: 0.5em;
  }
  .tag-button {
    position: relative;
    display: inline-block;
    color: #000;
    background: #fff;
    z-index: 1;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .tag-button:after {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #000;
    transition: all 0.3s ease;
  }
  .tag-button:hover {
    color: #fff;
  }
  .tag-button:hover:after {
    left: 0;
    width: 100%;
  }
  .tag-button:active {
    top: 2px;
  }
  .tag-checkbox {
    display: none;
  }
  .tag-checkbox:checked + .tag-button {
    color: #fff;
  }
  .tag-checkbox:checked + .tag-button:after {
    left: 0;
    width: 100%;
  }
</style>
