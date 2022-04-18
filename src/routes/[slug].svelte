<script context="module">
  const allPosts = import.meta.globEager(`../routes/posts/*.md`);
  let body = [];

  for (let path in allPosts) {
    const post = allPosts[path];
    const metadata = post.metadata;
    const namePage = path.split("/");
    const slugPage = namePage[namePage.length - 1].slice(0, -3);
    const p = {
      post,
      path,
      metadata,
      slugPage,
    };
    body.push(p);
  }

  export const load = ({ params }) => {
    const posts = body;
    const { slug } = params;

    const filteredPosts = posts.filter((p) => {
      return slug.toLowerCase() === p.slugPage.toLowerCase();
    });
    if (filteredPosts.length === 0) {
      return {
        props: {},
      };
    } else {
      return {
        props: {
          page: filteredPosts[0].post.default,
          metadata: filteredPosts[0].metadata,
          slugPage: slug,
        },
      };
    }
  };
</script>

<script>
  export let page;
  export let metadata;
  export let slugPage;
</script>

<svelte:head>
  <!--  Include canonical links to your blog -->
  <link rel="canonical" href="https://f6bfb5.github.io/{slugPage}" />

  <!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
  <!-- Update content properties with your URL   -->
  <meta property="og:url" content="https://f6bfb5.github.io/{slugPage}" />
  <meta property="og:type" content="article" />

  {#if metadata}
    <title>{metadata.title}</title>
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.summary} />
    <meta name="Description" content={metadata.summary} />

    <!--  Link to your preferred image  -->
    {#if metadata.image != ""}
      <meta property="og:image" content={metadata.image} />
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" value={metadata.title} />
    <meta name="twitter:description" content={metadata.summary} />
    <meta name="twitter:label1" value="Published on" />
    <meta
      name="twitter:data1"
      value={new Date(metadata.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    />
  {/if}
</svelte:head>

<svelte:component this={page} />
