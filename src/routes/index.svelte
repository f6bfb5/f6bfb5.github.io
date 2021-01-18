<script context="module">
  export async function preload({ params, query }) {
    const posts = await this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return posts;
      });
    const sitemap = await this.fetch("sitemap.xml");
    return { posts, sitemap };
  }
</script>

<script>
  export let posts;

  const years = [];
  posts.forEach((post, index) => {
    let currentYear = new Date(post.printDate).getFullYear();
    if (index == 0) {
      years.push(currentYear);
    } else {
      if (currentYear != new Date(posts[index - 1].printDate).getFullYear()) {
        years.push(currentYear);
      }
    }
  });
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
  {#each years as year}
    <h2>{year}</h2>
    <ul>
      {#each posts.filter((p) => new Date(p.printDate).getFullYear() == year) as post}
        <li>
          <a rel="prefetch" href={post.slug}>{post.title}</a>
          <span>{post.printDate}</span>
        </li>
      {/each}
    </ul>
  {/each}
</div>

<style>
</style>
