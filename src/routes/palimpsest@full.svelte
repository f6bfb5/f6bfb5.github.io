<script>
  import QRCode from "$lib/QRCode.svelte";
</script>

<div class="c">
  <div class="bs">
    <QRCode text={+new Date()} size="128" />
  </div>
</div>

<style>
  .c {
    width: 100%;
    min-height: 100vh;

    color: white;
    background-color: #181818;

    user-select: none;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bs {
    box-shadow: 0 0 16px #71c7db;
    animation: bs-a 5s infinite;
  }
  @keyframes bs-a {
    0%, 100% {
      box-shadow: 0 0 16px #71c7db;
    }
    50% {
      box-shadow: 0 0 32px #71c7db;
    }
  }
</style>
