<script>
  import Cube from "$lib/Cube.svelte";
</script>

<!-- 12 16 20 24 32 -->
<div class="floating-cubes">
  <div class="floating-cubes-wrapper">
    <Cube size={"16px"} left={"10%"} delay={"2s"} duration={"12s"} />
    <Cube size={"12px"} left={"25%"} />
    <Cube size={"12px"} right={"60%"} delay={"10s"} duration={"8s"} />
    <Cube size={"32px"} right={"50%"} delay={"3s"} duration={"8s"} />
    <Cube size={"20px"} right={"35%"} delay={"4s"} duration={"10s"} />
    <Cube size={"24px"} right={"30%"} delay={"1s"} />
    <Cube size={"24px"} right={"10%"} delay={"12s"} duration={"10s"} />
  </div>
</div>

<style>
  .floating-cubes {
    position: fixed;
    bottom: 0;
    left: 0;
    /* position: relative; */
    width: 100%;
    /* height: 100%; */
    z-index: 0;
  }
  .floating-cubes-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
