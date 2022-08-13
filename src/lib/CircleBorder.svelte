<script>
  export let text;
  export let textColor = "black";
  export let image;
  export let size = "80px";
  export let borderColor = "skyblue";
  export let backgroundColor = "white";
</script>

<div
  class="circle-border"
  style="--size: {size}; border: 3px solid {borderColor}; color: {textColor}; background-color: {backgroundColor};"
>
  {#if text != null}
    <span class="circle-border-content">{text}</span>
  {/if}
  {#if image != null}
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
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    /* border: 3px solid skyblue; */
    overflow: hidden;
  }
  .circle-border-content {
    position: absolute;
    display: inline-block;
    width: var(--size);
    left: -3px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    object-fit: cover;
  }
  .image {
    left: 0;
    height: var(--size);
  }
</style>
