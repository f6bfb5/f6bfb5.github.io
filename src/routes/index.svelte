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
    <label class="tag tag-button" for="All">
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 24 24"
      >
        <path
          d="M14.872 17.711c-.29.54-1.002.918-1.729.918-.447 0-.849-.147-1.15-.416-.301.269-.704.416-1.149.416-.729 0-1.44-.378-1.73-.918-.309-.576.536-1.14.94-.424.102.181.432.375.761.375.692 0 .631-.738.631-1.3-.423-.211-.717-.63-.717-1.006 0-.527.57-.762 1.271-.762s1.271.235 1.271.762c0 .38-.299.805-.73 1.014 0 .587-.056 1.254.599 1.254.341 0 .729-.208.863-.393.45-.624 1.185-.106.869.48zm.128-6.211c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.822-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm-6-2.667c-.46 0-.834.374-.834.834 0 .459.374.833.834.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.834-.822-1.834-1.833 0-1.012.823-1.834 1.834-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm12.113 3.986c-.78-7.61-2.462-11.289-4.568-13.869-1.21 1.055-2.044 1.769-3.321 3.667-.74-.121-1.769-.119-2.486.006-1.538-1.838-2.574-2.676-3.813-3.654-2.037 2.484-3.503 6.137-4.117 13.723-1.14-1.732-1.808-3.801-1.808-6.026 0-6.065 4.934-11 11-11 6.065 0 11 4.935 11 11 0 2.277-.696 4.396-1.887 6.153zm-9.113 4.847c-3.298 0-6.254-1.466-8.272-3.772.304-4.521 1.094-10.361 3.357-13.517 1.728 1.421 2.717 2.682 3.276 3.359.748-.19 1.823-.358 3.316.007.96-1.452 1.508-2.222 2.74-3.347 1.989 2.717 3.26 7.267 3.8 13.558-2.017 2.271-4.949 3.712-8.217 3.712zm0-23c-6.623 0-12 5.377-12 12 0 6.627 5.4 12 12 12 6.559 0 12-5.33 12-12 0-6.623-5.377-12-12-12z"
        />
      </svg>
      All
    </label>
    {#each tags as tag}
      <input
        class="tag-checkbox"
        type="checkbox"
        name="filterCheckbox"
        id={tag}
        value={tag}
        bind:group={selection}
      />
      <label class="tag tag-button" for={tag}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          ><path
            d="M12.876 2h-8.876v9.015l10.972 11.124 9.028-9.028-11.124-11.111zm-3.139 5.737c-.684.684-1.791.684-2.475 0s-.684-1.791 0-2.474c.684-.684 1.791-.684 2.475 0 .684.683.684 1.791 0 2.474zm1.866 13.827l-1.369 1.436-10.234-10.257v-7.743h2v6.891l9.603 9.673z"
          /></svg
        >
        {tag}
      </label>
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
