<script>
  import DarkSoulsZoneTitle from "$lib/DarkSoulsZoneTitle.svelte";
</script>

<div class="c">
  <div class="w">
    <p style="font-size: 10vw; width: 0; opacity: 0;">死を忘ることなかれ</p>
    <DarkSoulsZoneTitle title="Close the world,.txEn eht nepO" />
  </div>
</div>

<style scoped>
  .c {
    width: 100%;
    min-height: 100vh;

    color: white;
    background-color: #460609;
    background-image: url(https://i.imgur.com/9MnFlCB.gif);
    background-size: cover;

    user-select: none;
    overflow: hidden;
  }
  .w {
    width: 100%;
    min-height: 100vh;

    background: linear-gradient(
        217deg,
        rgba(0, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%);

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
