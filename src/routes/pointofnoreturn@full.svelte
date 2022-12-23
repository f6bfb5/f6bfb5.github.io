<script>
</script>

<div class="b">
  <div class="c">
    <div class="w">
      <p>死を忘ることなかれ</p>
    </div>
  </div>
</div>

<style scoped>
  .b {
    width: 100%;
    min-height: 100vh;
    background-color: #460609;

    display: flex;
    align-items: center;
  }

  .c {
    margin: auto;
    max-width: 100%;
    max-height: 100vh;
    aspect-ratio: 4 / 3;

    background-color: #460609;
    background-image: url(https://i.imgur.com/9MnFlCB.gif);
    background-size: cover;
    
    user-select: none;
    overflow: hidden;

    object-fit: contain;
    align-self: center;
    flex: 0 0 auto;
  }
  
  .w {
    width: 100%;
    height: 100%;
    
    font-size: calc(100% / 16);
    padding: 1em;
    
    color: white;
    background: linear-gradient(
        217deg,
        rgba(0, 0, 0, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%);
  }
</style>
