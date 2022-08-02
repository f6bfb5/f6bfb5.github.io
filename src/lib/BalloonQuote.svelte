<script>
  export let quote;
  export let right;
</script>

<div class="balloon-quote {right ? 'right' : ''}">
  <p>{quote}</p>
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
    border: 3px solid var(--balloon-quote-border-color);
    background: var(--balloon-quote-background-color);
    border-radius: 10px;
  }
  .balloon-quote:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -24px;
    margin-top: -12px;
    border: 12px solid transparent;
    border-right: 12px solid var(--balloon-quote-background-color);
    z-index: 2;
  }
  .balloon-quote:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    margin-top: -14px;
    border: 14px solid transparent;
    border-right: 14px solid var(--balloon-quote-border-color);
    z-index: 1;
  }
  .balloon-quote.right {
    margin-left: 0;
    margin-right: 14px;
  }
  .balloon-quote.right:before {
    left: auto;
    border-right: none;
    right: -12px;
    border-left: 12px solid var(--balloon-quote-background-color);
  }
  .balloon-quote.right:after {
    left: auto;
    border-right: none;
    right: -16px;
    border-left: 14px solid var(--balloon-quote-border-color);
  }
  .balloon-quote p {
    margin: 0;
    padding: 0;
  }
</style>