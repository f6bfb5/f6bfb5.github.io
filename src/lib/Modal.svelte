<script>
  export let content = 'Hello world!';
</script>

<dialog open>
  <p>{content}</p>
  <form method="dialog">
    <button>CLOSE</button>
  </form>
</dialog>

<style scoped>
  dialog {
    position: fixed;
    top: 50%;
  }
</style>