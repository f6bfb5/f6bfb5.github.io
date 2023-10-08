<div style="display: flex; margin-top: 8px;">
  <div
    style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 4px;"
  >
    <img
      src="https://picsum.photos/40/40/"
      alt="placeholder"
      title="placeholder"
      style="margin: 0; padding: 0; display: inline;"
    />
    <span style="transform: scale(0.8, 1); text-wrap: nowrap;">名無し</span>
  </div>
  <div style="margin-left: 8px;">
    <span class="ballon">
      何なんだよ日本。一億総活躍社会じゃねーのかよ。昨日見事に保育園落ちたわ。どうすんだよ私活躍出来ねーじゃねーか。
    </span>
    <time
      style="display: block; margin-top: 4px; max-width: calc(100% - 100px); font-size: 80%; text-align: right; color: gray;"
      >{new Date()
        .toISOString()
        .slice(2)
        .replaceAll("-", "/")
        .replace(
          "T",
          `(${["日", "一", "二", "三", "四", "五", "六"][new Date().getDay()]})`
        )
        .slice(0, -5)}</time
    >
  </div>
</div>

<style>
  .ballon {
    display: inline-block;
  }
  .ballon {
    padding: 0 0.4em 0 0.4em;
    max-width: calc(100% - 100px);
    color: #fff;
    background-color: #929c9a;
    border-radius: 0.4em;
    line-height: 1.5;
    vertical-align: middle;
  }
  .ballon:before {
    content: "";
    position: absolute;
    margin-left: -0.2em;
    padding: 0;
    width: 0;
    border-width: 0 0 0.6em 0.6em;
    border-style: solid;
    border-color: #929c9a transparent;
    transform: translateX(-100%) translateY(calc(1em - 80%));
  }
</style>
