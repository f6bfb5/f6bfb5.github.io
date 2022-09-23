<script>
  import RandomImage from "$lib/RandomImage.svelte";
  import BorderedText from "$lib/BorderedText.svelte";
  import { base } from "$app/paths";
</script>

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
      <img src="https://i.imgur.com/lR5H4mK.gif" alt="Nico Nico Douga" />
    </a>
    <div class="aside-row">
      <a href={`${base}/rss.xml`} rel="noreferrer noopener" target="_blank">
        <img src="https://i.imgur.com/IWb6pKA.gif" alt="RSS-Feed" />
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
        <img src="https://i.imgur.com/9nOliqP.gif" alt="VSCode" />
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
      <img src="https://i.imgur.com/yGy1Kug.gif" alt="Anti-code and run" />
    </div>
    <div class="aside-row">
      <a
        href="https://www.mozilla.org/en-US/firefox/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/BE9jeOu.gif" alt="Firefox Now" />
      </a>
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
        href="https://www.henrypp.org/product/chrlauncher"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/ovYrVHT.png" alt="Chromium Now" />
      </a>
      <img src="https://i.imgur.com/krlMLQO.gif" alt="a-now" />
    </div>
    <div class="aside-row">
      <img src="https://i.imgur.com/iu8VKcQ.gif" alt="Milk Tea Now" />
      <img src="https://i.imgur.com/DjCDr0e.gif" alt="Candy Bars Now" />
    </div>
    <div class="aside-row">
      <a href="https://discord.com/" rel="noreferrer noopener" target="_blank">
        <img src="https://i.imgur.com/TDbUDP9.png" alt="Just get discord" />
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
        <img src="https://i.imgur.com/mllX3po.gif" alt="Dream Diary" />
      </a>
      <a
        href="https://store.steampowered.com/app/1451940/NEEDY_GIRL_OVERDOSE/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/qHtVN6o.png" alt="Windose 2.0" />
      </a>
    </div>
    <div class="aside-row">
      <a href="http://n64.com/" rel="noreferrer noopener" target="_blank">
        <img src="https://i.imgur.com/wA4QzQk.gif" alt="N64.com" />
      </a>
      <a
        href="https://lsdrevamped.net/index.html"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/KVKEils.gif" alt="PlayStation" />
      </a>
    </div>
    <div class="aside-row">
      <img src="https://i.imgur.com/fl9sleS.png" alt="PATAPON" />
      <a
        href="http://info.cern.ch/hypertext/WWW/TheProject.html"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/9blk2hu.gif" alt="World Wide Web" />
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
        href="https://www.nicovideo.jp/watch/sm11509720"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/odrujzt.gif" alt="Nyan Cat" />
      </a>
      <a
        href="https://soundcloud.com/f6bfb5/sets/k4psq4s1vpbd"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/G2YrwKe.png" alt="Soundcloud" />
      </a>
    </div>
    <div class="aside-row">
      <a href="https://bandcamp.com/" rel="noreferrer noopener" target="_blank">
        <img src="https://i.imgur.com/2phTejB.png" alt="bandcamp" />
      </a>
      <a href="https://twitter.com/" rel="noreferrer noopener" target="_blank">
        <img src="https://i.imgur.com/h5dyP9M.gif" alt="Twitter" />
      </a>
    </div>
    <div class="aside-row">
      <a
        href="https://www.youtube.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/U49kFeD.gif" alt="YouTube" />
      </a>
      <a
        href="https://stallman.org/facebook.html"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="https://i.imgur.com/mBfzsPg.gif" alt="f-facebook" />
      </a>
    </div>
    <div class="aside-row">
      <img src="https://i.imgur.com/iLeESpJ.gif" alt="lain" />
    </div>

    <!-- ---------- -->
    <div
      on:click={() => window.location.assign("./mementomori")}
      style="margin: auto; width: fit-content;"
    >
      <RandomImage />
    </div>

    <!-- ---------- -->
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
        <span>ここで一言</span>
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
          
          transform: scale(.8, 1); transform-origin: top left; width: 125%; line-height: 2; 
          letter-spacing: 2px;"
      >
        <!-- <span>THANK YOU FOR PLAYING</span> -->
        <BorderedText text="THANK YOU FOR PLAYING" />
      </div>
    </div>
  </div>
</aside>

<style>
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
    .aside-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
