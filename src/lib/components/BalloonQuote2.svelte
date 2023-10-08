<script>
  import BorderedText from "$lib/components/BorderedText.svelte";

  export let quote;
  export let image;

  export let component;
  export let component_prop;

  export let right;
  export let arrow = false;
</script>

<div
  class="balloon-quote {right ? 'right' : ''}"
  style={arrow ? "cursor: pointer;" : ""}
>
  {#if quote != null}
    <p>{@html quote}</p>
  {/if}

  {#if image != null}
    <img src={image} alt="in-balloon" />
  {/if}

  {#if component != null}
    <svelte:component
      this={component}
      text={component_prop != null ? component_prop : ""}
    />
  {/if}

  {#if arrow}
    <div class="balloon-arrow">
      <BorderedText text="▼" />
    </div>
  {/if}
</div>

<style>
  :root {
    --balloon-quote-border-color: #555;
    --balloon-quote-background-color: white;
  }

  .balloon-quote {
    position: relative;
    display: inline-block;
    margin-left: 14px;
    padding: 7px 10px;
    min-width: 120px;
    max-width: 100%;
    border: 2px solid var(--balloon-quote-border-color);
    background: var(--balloon-quote-background-color);
    border-radius: 6px;
  }
  .balloon-quote:before {
    content: "";
    position: absolute;
    top: 16px;
    left: -14px;
    border: 7px solid transparent;
    border-right: 7px solid var(--balloon-quote-background-color);
    z-index: 2;
  }
  .balloon-quote:after {
    content: "";
    position: absolute;
    top: 15px;
    left: -18px;
    border: 8px solid transparent;
    border-right: 8px solid var(--balloon-quote-border-color);
    z-index: 1;
  }
  .balloon-quote.right {
    margin-left: 0;
    margin-right: 14px;
  }
  .balloon-quote.right:before {
    left: auto;
    border-right: none;
    right: -7px;
    border-left: 7px solid var(--balloon-quote-background-color);
  }
  .balloon-quote.right:after {
    left: auto;
    border-right: none;
    right: -10px;
    border-left: 8px solid var(--balloon-quote-border-color);
  }
  .balloon-quote p {
    margin: 0;
    padding: 0;
  }

  .balloon-quote img {
    max-width: 480px;
    width: 100%;
  }

  .balloon-arrow {
    position: absolute;
    right: 1em;
    animation: arrow-move 0.8s steps(2) infinite;
  }
  @keyframes arrow-move {
    from {
      bottom: -0.5em;
    }
    to {
      bottom: -0.75em;
    }
  }
</style>
