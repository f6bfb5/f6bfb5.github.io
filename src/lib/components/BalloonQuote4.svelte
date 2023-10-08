<div style="margin-top: 1em;">
  <div style="display: flex; align-items: center;">
    <img
      src="https://picsum.photos/40/40/"
      alt="placeholder"
      title="placeholder"
      style="margin: 0; padding: 0; display: inline;"
    />
    <div style="margin-left: 1em;">
      <span>以下、名無し が送りします:</span>
      <time
        style="display: block; margin-top: 4px; font-size: 80%; color: gray;"
        >{new Date()
          .toISOString()
          .slice(2)
          .replaceAll("-", "/")
          .replace(
            "T",
            `(${
              ["日", "一", "二", "三", "四", "五", "六"][new Date().getDay()]
            })`
          )
          .slice(0, -5)}</time
      >
    </div>
  </div>
  <p class="ballon2">
    何なんだよ日本。一億総活躍社会じゃねーのかよ。昨日見事に保育園落ちたわ。どうすんだよ私活躍出来ねーじゃねーか。
  </p>
</div>

<style>
  .ballon2 {
    padding: 0 0.4em 0 0.4em;
    max-width: calc(100% - 100px);
    color: #fff;
    background-color: #929c9a;
    border-radius: 0.4em;
    line-height: 1.5;
    vertical-align: middle;
  }
  .ballon2 {
    margin-top: 0.6em;
  }
  .ballon2:before {
    content: "";
    position: absolute;
    margin-top: -0.45em;
    left: 2em;
    border-width: 0 0.6em 0.6em 0;
    border-style: solid;
    border-color: transparent transparent #929c9a transparent;
  }
</style>
