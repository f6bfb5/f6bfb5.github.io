<script>
  import BorderedText from "$lib/BorderedText.svelte";
</script>

<div
  class="p-with-h"
  style="
        margin-top: 1em;
        margin-left: 1px;
        "
>
  <div
    style="display: inline-block;
          transform: skew(27deg);
          transform-origin: left top;
          background: var(--subtitle-color);
          box-shadow: 2px 2px 0 var(--subtext-color), 4px 4px 0 var(--title-color);"
  >
    <div
      style="display: inline-block;
          padding: 5px 10px 2px; 
          background: var(--subtitle-color);
          color: #fff;
          
          transform: skew(-27deg) scale(.8, 1); transform-origin: top left;"
    >
      <span>ここで一言</span>
    </div>
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

<style>
  @media screen and (max-width: 960px) {
    .p-with-h {
      display: none !important;
      height: 0;
    }
  }
</style>
