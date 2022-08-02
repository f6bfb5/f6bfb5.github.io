<script>
  export let text;
  export let image;
</script>

<div class="circle-border">
  {#if text}
    <span class="circle-border-content">{text}</span>
  {:else}
    <img
      class="circle-border-content image"
      src={image}
      alt="circle-bordered"
    />
  {/if}
</div>

<style>
  .circle-border {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    border: 3px solid skyblue;
    overflow: hidden;
  }
  .circle-border-content {
    position: absolute;
    display: inline-block;
    width: 80px;
    left: -3px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    object-fit: cover;
  }
  .image {
    left: 0;
    height: 80px;
  }
</style>
