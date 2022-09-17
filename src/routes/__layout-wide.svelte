<script>
  import Loader from "$lib/Loader.svelte";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import Favicon from "$lib/Favicon.svelte";
  import RandomImage from "$lib/RandomImage.svelte";

  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { marqueeTexts } from "$lib/store.js";

  let randomString = [...$marqueeTexts].sort(() => Math.random() - 0.5).shift();

  let isLoaded = false;
  function pageLoaded() {
    isLoaded = true;
  }

  onMount(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-CRDP7WTXSQ");
  });
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-CRDP7WTXSQ"></script>
</svelte:head>

<svelte:window on:load={pageLoaded()} />

<div class="layout" style={isLoaded ? "display: none;" : ""}>
  <div class="loader-container">
    <Loader />
  </div>
</div>

<div class="layout" style={!isLoaded ? "display: none;" : ""}>
  <Favicon />
  <Header />

  <div class="container">
    <main>
      <slot />
    </main>
    <!-- ------------ -->
    <aside>
      <div class="aside-wrapper">
        <a
          href="https://sites.google.com/site/happybusy/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="https://i.imgur.com/kNtfPAo.png" alt="no-time" />
        </a>
        <a
          href="http://n-yaruki.sh49.net/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="https://i.imgur.com/6gWrqDW.jpg" alt="no-motivation" />
        </a>
        <a
          href="https://www.nicovideo.jp/ranking/genre/all?video_ranking_menu"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src="https://i.imgur.com/lR5H4mK.gif" alt="no-motivation" />
        </a>
        <div class="aside-row">
          <a href={`${base}/rss.xml`} rel="noreferrer noopener" target="_blank">
            <img src="https://i.imgur.com/IWb6pKA.gif" alt="rss-feed" />
          </a>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/7DntYek.gif" alt="by-nc-sa" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://code.visualstudio.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/9nOliqP.gif" alt="vscode" />
          </a>
          <a
            href="https://cssreference.io/"
            refl="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/WnG0vbp.png" alt="CSS is Awesome" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://javascript.info/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/EOscOlQ.gif" alt="JavaScript Now" />
          </a>
          <img src="https://i.imgur.com/yGy1Kug.gif" alt="anti-code and run" />
        </div>
        <div class="aside-row">
          <img src="https://i.imgur.com/krlMLQO.gif" alt="a-now" />
          <img src="https://i.imgur.com/iu8VKcQ.gif" alt="Milk Tea Now" />
        </div>
        <div class="aside-row">
          <a
            href="https://www.mozilla.org/en-US/firefox/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/BE9jeOu.gif" alt="firefox now" />
          </a>
          <a
            href="https://www.henrypp.org/product/chrlauncher"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/ovYrVHT.png" alt="chromium now" />
          </a>
        </div>
        <div class="aside-row">
          <img src="https://i.imgur.com/iLeESpJ.gif" alt="lain" />
          <a
            href="https://www.torproject.org/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/t1twsds.gif" alt="Tor" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://discord.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/TDbUDP9.png" alt="just get discord" />
          </a>
          <a
            href="https://store.steampowered.com/about/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/OOKXDku.gif" alt="Play with Steam" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://store.steampowered.com/app/650700/Yume_Nikki/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/mllX3po.gif" alt="dream diary" />
          </a>
          <a
            href="https://store.steampowered.com/app/1451940/NEEDY_GIRL_OVERDOSE/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/qHtVN6o.png" alt="windose 2.0" />
          </a>
        </div>

        <div class="aside-row">
          <img src="https://i.imgur.com/fl9sleS.png" alt="PATAPON" />
          <a
            href="https://bandcamp.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/2phTejB.png" alt="bandcamp" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://twitter.com/ariga_megamix"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/C8wcPXl.gif" alt="Ariga MEGAMIX" />
          </a>
          <a
            href="https://www.nicovideo.jp/watch/sm742045"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/I76cWcs.png" alt="Windows ME" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://www.nicovideo.jp/watch/sm1864146"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/4XPls4h.gif" alt="caramelldansen" />
          </a>
          <a
            href="https://www.nicovideo.jp/watch/sm10722893"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/fizTd92.gif" alt="ochame kinou" />
          </a>
        </div>
        <div class="aside-row">
          <a
            href="https://twitter.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/h5dyP9M.gif" alt="Twitter" />
          </a>
          <a
            href="https://www.youtube.com/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://i.imgur.com/U49kFeD.gif" alt="YouTube" />
          </a>
        </div>
        <div class="aside-row">
          <img src="https://i.imgur.com/6Y6hPvZ.gif" alt="World Wide Web" />
          <img src="https://i.imgur.com/mBfzsPg.gif" alt="f-facebook" />
        </div>
        <div
          on:click={() => window.location.assign("./reminiscence")}
          style="margin: auto; width: fit-content;"
        >
          <RandomImage />
        </div>
        <div class="p-with-h">
          <div
            style="display: inline-block; 
          margin-top: 1em;
          margin-left: 1px;
          padding: 5px 10px 2px; 
          box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);
          background-color: var(--subtitle-color); 
          color: #fff;
          
          transform: scale(.8, 1); transform-origin: top left;"
          >
            <span>Random Text</span>
          </div>
          <div
            style="position: relative;
          padding: .25em;
          padding-left: .75em;
          font-size: .75em;
          border: 1px solid var(--subtitle-color);
          box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);
          background: #e5edc8;
          z-index: 1;
          
          transform: scale(.8, 1); transform-origin: top left; width: 125%; line-height: 2;"
          >
            <span>{randomString}</span>
          </div>
        </div>
      </div>
    </aside>
  </div>

  <Footer />
</div>

<style>
  .layout {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;
    min-height: 100vh;

    color: var(--text-color);
    background-color: var(--outer-bg-color);
  }

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background-color: #242222;
    color: white;
  }

  .container {
    margin: auto;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
  }
  main {
    max-width: 720px;
    width: 100%;
    min-height: 100%;
  }

  /* ------------ */
  aside {
    width: 200px;
  }
  .aside-wrapper {
    position: sticky;
    top: calc(90px + 1em);
  }
  .aside-row {
    margin-top: 1em;
    display: flex;
    justify-content: space-around;
  }
  aside a:not(:first-child):not(.aside-row a) {
    margin-top: 1em;
    display: block;
  }
  aside img {
    height: initial;
    margin: 0;
  }
  @media screen and (max-width: 960px) {
    aside {
      margin-top: 1em;
      width: 100%;
    }
    aside a,
    aside a img,
    .aside-row,
    .p-with-h {
      display: none !important;
      height: 0;
    }
    .aside-wrapper {
      display: flex;
    }
    .container,
    .aside-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
