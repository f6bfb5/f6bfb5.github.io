<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
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

<style>
</style>

<svelte:head>
  <title>Blog</title>
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
