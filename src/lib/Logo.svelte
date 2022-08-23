<script>
  import { logoLinks } from "$lib/store.js";

  function getRandomEleFromArr(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }

  let targetUrl = getRandomEleFromArr($logoLinks);
</script>

<a
  href={targetUrl}
  target="_blank"
  rel="noreferrer noopener"
  on:click={() => (targetUrl = getRandomEleFromArr($logoLinks))}
>
  <img
    src="data:image/gif;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAABbl4Awr28AAAAAAC4pp4ACgUAAFomhAB4aGEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiIiIiQiQiIkREREREJCIiQRERERESIiJBEhEREREiIkFCQRFRESIiQRIRERFRIiJBEREREREiIkE2ZmZmESQiQWYAAAZhJCJBZgAABmEkIkFmAAAGYSQiQWYAAAZhRCJBZgAABmFEIkE2ZmZmMUQiQRERERERRCJERERERERCLABwAAgAMAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAwAA"
    alt="logo"
  />
</a>

<style scoped>
  a {
    margin-right: 20px;
  }
  img {
    width: 36px;
    height: 42px;
    filter: drop-shadow(0 0 12px var(--subtitle-color));
    animation: glow 2s infinite ease;
  }

  @keyframes glow {
    0%,
    100% {
      filter: drop-shadow(0 0 12px var(--subtitle-color));
    }
    50% {
      filter: drop-shadow(0 0 8px var(--bg-color));
    }
  }
</style>
