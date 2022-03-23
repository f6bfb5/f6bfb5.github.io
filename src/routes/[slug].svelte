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
  <!-- <h1>{post.title}</h1> -->
  <h1 class="title">
    {#each post.title as title, index}
      <span
        style="
        animation-delay: {125 + 25 * index}ms;
        {title == ' ' ? 'width: .25em;' : ''}
      "
      >
        {title}</span
      >
    {/each}
  </h1>
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
    margin: 0.13em 0;
    font-size: 6em;
    /* letter-spacing: -0.075em; */
    /* line-height: 1; */
    line-height: 1.1;
    color: var(--title-color);
  }

  /* need to add 15px for scrollbar width */
  @media all and (max-width: 735px) {
    header h1 {
      font-size: 4em;
    }
  }

  header p {
    padding: 0 20px;
    color: var(--subtitle-color);
    text-transform: uppercase;
    font-weight: 600;
  }

  p small {
    margin-left: 1em;
  }

  .title {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  /* .title span {
    width: 1em;
  } */

  .title span:nth-child(9n-8) {
    animation: Title_red 0.5s linear both;
  }
  .title span:nth-child(9n-7) {
    animation: Title_orange 0.5s linear both;
  }
  .title span:nth-child(9n-6) {
    animation: Title_yellow 0.5s linear both;
  }
  .title span:nth-child(9n-5) {
    animation: Title_lime 0.5s linear both;
  }
  .title span:nth-child(9n-4) {
    animation: Title_green 0.5s linear both;
  }
  .title span:nth-child(9n-3) {
    animation: Title_cyan 0.5s linear both;
  }
  .title span:nth-child(9n-2) {
    animation: Title_blue 0.5s linear both;
  }
  .title span:nth-child(9n-1) {
    animation: Title_purple 0.5s linear both;
  }
  .title span:nth-child(9n) {
    animation: Title_pink 0.5s linear both;
  }

  @keyframes Title_red {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #e50020;
      fill: #e50020;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_orange {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #ec6c00;
      fill: #ec6c00;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_yellow {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #fbc600;
      fill: #fbc600;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_lime {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #6fba2c;
      fill: #6fba2c;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_green {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #008b38;
      fill: #008b38;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_cyan {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #009fe8;
      fill: #009fe8;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_blue {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #004da0;
      fill: #004da0;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_purple {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #910782;
      fill: #910782;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }
  @keyframes Title_pink {
    0% {
      color: var(--bg-color);
      fill: transparent;
    }
    50% {
      color: #e40065;
      fill: #e40065;
    }
    100% {
      color: var(--title-color);
      fill: var(--title-color);
    }
  }

  .container {
    padding: 20px;
  }

  .container :global(a) {
    font-weight: bold;
  }
</style>
