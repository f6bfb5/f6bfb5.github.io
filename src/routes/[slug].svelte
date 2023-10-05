<script context="module">
  export const load = async ({ params }) => {
    const { slug } = params;

    const postPromise = import(`../routes/posts/${slug}.md`);

    const postResult = await postPromise;
    const { default: page, metadata } = postResult;

    if (!page) {
      return {
        status: 404,
        error: new Error(`slug is not found`),
      };
    }

    return {
      props: {
        slug,
        page,
        metadata,
      },
    };
  };
</script>

<script>
  export let slug;
  export let page;
  export let metadata;
</script>

<svelte:head>
  <!--  Include canonical links to your blog -->
  <link rel="canonical" href="https://f6bfb5.github.io/{slug}" />

  <!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
  <!-- Update content properties with your URL   -->
  <meta property="og:url" content="https://f6bfb5.github.io/{slug}" />
  <meta property="og:type" content="article" />

  {#if metadata}
    <title>{metadata.title}</title>
    <meta property="og:title" content={metadata.title} />
    {#if metadata.summary}
      <meta property="og:description" content={metadata.summary} />
      <meta name="Description" content={metadata.summary} />
    {/if}

    <!--  Link to preferred image  -->
    {#if metadata.image != ""}
      <meta property="og:image" content={metadata.image} />
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" value={metadata.title} />
    {#if metadata.summary}
      <meta name="twitter:description" content={metadata.summary} />
    {/if}
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
