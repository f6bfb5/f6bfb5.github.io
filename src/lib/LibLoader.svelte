<script>
  // javascript - How do I load an external JS library in Svelte/Sapper?
  // https://stackoverflow.com/questions/59629947/how-do-i-load-an-external-js-library-in-svelte-sapper
  import { onMount, createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  export let url;
  let script;
  
  onMount(async () => {
    script.addEventListener('load', () => {
      dispatch('loaded');
    })
    
    script.addEventListener('error', (event) => {
      console.error("error: ", event);
      dispatch('error');
    });
  });
</script>

<svelte:head>
  <script bind:this={script} src={url} />
</svelte:head>