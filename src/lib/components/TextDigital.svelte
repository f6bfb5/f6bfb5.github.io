<script>
  let randomNum = [
    Math.floor(Math.random() * 89999) + 10000,
    Math.floor(Math.random() * 89999) + 10000,
    Math.floor(Math.random() * 89999) + 10000,
    Math.floor(Math.random() * 89999) + 10000,
    Math.floor(Math.random() * 89999) + 10000,
  ];
  // setInterval(() => {
  // for(let i=0; i<randomNum.length; i++) {
  // randomNum[i] = Math.floor(Math.random()\*89999) + 10000;
  // }
  // }, 80)
</script>

<div
  style="margin: auto; padding-left: 2px; width: fit-content; background-image: linear-gradient(transparent 0%, rgba(10, 16, 10, 0.5) 50%); background-size: 1000px 2px; -webkit-background-clip: text; color: transparent; font-size: 2em;
  text-shadow: 0 0 10px rgba(175, 175, 175, 0.5), 0 0 5px rgba(240, 240, 240, 0.5);"
>
  {#each randomNum as num, i}
    {#if i !== randomNum.length - 1}
      {num}<br />
    {:else}
      {num}
    {/if}
  {/each}
</div>
