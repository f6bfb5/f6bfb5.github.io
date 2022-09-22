<script>
  // Dark Souls - Entering Zone
  // https://codepen.io/Retzudo/pen/gPrrPq
  import { onMount } from 'svelte';
  export let title = "Heide's Tower of Flame";
  
  let animate = false;

  onMount(() => {
    animate = true;
  })
</script>

<div class="title" class:animate={animate}>{title}</div>

<style>
  .title {
    font-size: 3.3em;
    text-align: center;
    color: #fff;
    opacity: 0;
  }
  .title:after {
    content: '';
    display: block;
    height: 3px;
    width: 700px;
    margin-top: 4px;
    margin-left: auto;
    margin-right: auto;
    background: radial-gradient(ellipse at center, #fff 0%, #fff 63%, rgba(255, 255, 255, 0) 90%);
  }

  .animate {
    animation: appear 6s forwards;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
</style>