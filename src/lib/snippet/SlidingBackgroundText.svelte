<script>
    
</script>

<div class="sliding-background-text">ごめん⏎⏎⏎さよなら</div>

<style>
  .sliding-background-text {
    position: relative;
    width: fit-content;
    color: transparent;
    overflow: hidden;
    animation: 0.6s sliding-text steps(1, end) forwards;
  }
  .sliding-background-text:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: white;
    animation: 0.6s sliding-background ease forwards;
  }
  @keyframes sliding-text {
    0% {
      color: transparent;
    }
    50%,
    100% {
      color: white;
    }
  }
  @keyframes sliding-background {
    0% {
      width: 0;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
</style>
