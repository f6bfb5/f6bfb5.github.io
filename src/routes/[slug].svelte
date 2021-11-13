<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;

  import BackToTop from "../components/BackToTop.svelte";
  import TOC from "../components/TOC.svelte";
</script>

<svelte:head>
  <title>{post.title}</title>
  <!--  Include canonical links to your blog -->
  <link rel="canonical" href="https://f6bfb5.github.io/{post.slug}" />

  <!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
  <!-- Update content properties with your URL   -->
  <meta property="og:url" content="https://f6bfb5.github.io/{post.slug}" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta name="Description" content={post.excerpt} />

  <!--  Link to your preferred image  -->
  <meta property="og:image" content={post.image} />

  <meta name="twitter:card" content="summary_large_image" />

  <!--  Link to your Domain  -->
  <!-- 	<meta name="twitter:domain" value="" /> -->

  <!--  Link to your Twitter Account  -->
  <!-- 	<meta name="twitter:creator" value="" /> -->

  <meta name="twitter:title" value={post.title} />
  <meta name="twitter:description" content={post.excerpt} />

  <!--  Link to your preferred image to be displayed on Twitter (832x520px) -->
  <!-- 	<meta name="twitter:image" content="" /> -->

  <meta name="twitter:label1" value="Published on" />
  <meta
    name="twitter:data1"
    value={new Date(post.printDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}
  />
</svelte:head>

<header>
  <h1>{post.title}</h1>
  <p>
    {post.printDate} <small>{post.printReadingTime}</small>
  </p>
</header>
<div class="container">
  <article class="content">
    {@html post.html}
    <TOC title={post.title} html={post.html} />
  </article>
  <BackToTop />
</div>

<style>
  header {
    margin: 0 auto;
    max-width: 45em;
    width: 100%;
    text-align: left;
  }

  header h1 {
    margin: 0;
    font-size: 6em;
    letter-spacing: -0.075em;
    line-height: 1;
    /* margin: 0 0 0.13em -0.025em; */
    margin: 0 0 0.13em 0;
    color: #444;
  }
  @media all and (max-width: 720px) {
    header h1 {
      font-size: 4em;
    }
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-weight: 600;
  }

  p small {
    margin-left: 1em;
  }

  .container {
    padding: 20px;
  }
</style>
