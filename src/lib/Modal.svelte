<script>
  export let content = "Hello world!";
</script>

<!-- http://youmightnotneedjs.com/ -->
<a class="modalTrigger" id="modalTrigger" href="#modalDialog"> Open dialog </a>

<dialog class="modal" id="modalDialog" tabindex="-1">
  <div>
    <a href="#modalTrigger" aria-label="Close">&times;</a>
    <p>{content}</p>
  </div>
</dialog>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
  }
  .modal p {
    font-size: 1.5em;
  }

  .modal > div {
    background: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    padding: 1em;
    position: relative;
    width: 50%;
  }
  .modal {
    opacity: 0;
    visibility: hidden;
  }

  #modalDialog:target {
    opacity: 1;
    visibility: hidden;
  }
</style>
