<script>
  // How To Create a Typing Effect
  // https://www.w3schools.com/howto/howto_js_typewriter.asp
  import { onMount } from "svelte";

  export let stringsArray = ["first string", "second string", "third string"]
  export let speed = 50;

  let arrayIndex = 0;
  let charIndex = 0;
  let displayString = "";
  let isEnd = false;
  function typewriter() {
    if (charIndex < stringsArray[arrayIndex].length) {
      displayString += stringsArray[arrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typewriter, speed);
    } else {
      isEnd = true;
    }
  }
  function onClicked() {
    if (isEnd) {
      displayString = "";
      charIndex = 0;
      arrayIndex = arrayIndex + 1 >= stringsArray.length ? 0 : arrayIndex + 1;
      typewriter();
    }
  }
  onMount(() => {
    typewriter();
  });

  $: displayString = displayString;
</script>

<span on:click={onClicked}>{displayString}</span>
