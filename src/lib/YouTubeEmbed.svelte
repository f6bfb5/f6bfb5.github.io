<script>
  import LibLoader from "$lib/LibLoader.svelte";

  export let videoId = 'BoZ0Zwab6Oc';

  function onYouTubePlayerAPIReady() {
    window.YT.ready(() => {
      new YT.Player("ytplayer", {
        videoId,
        playerVars: {
          autoplay: 1,
        },
      });
    });
  }
</script>

<LibLoader
  url="https://www.youtube.com/player_api"
  libraryDetectionObject="YouTubePlayerAPI"
  on:loaded={onYouTubePlayerAPIReady}
/>

<div id="ytplayer" />
