<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  const randomAnchorName = [
    "共同幻想",
    "晴耕雨読",
    "雨天決行",
    "森羅万象",
    "諸行無常",
    "一期一会",
    "有象無象",
    "最短経路",
    "滅尽滅相",
    "残留思念",
    "右往左往",
    "万物流転",
    "片道切符",
    "天声人語",
    "他言無用",
    "有言実行",
    "盛者必衰",
    "沈思黙考",
    "熱願冷諦",
    "自他境界",
    "人身御供",
    "疑似同期",
    "毀誉褒貶",
    // 林纈
    // 翳光
    // Mary Sue
    // Ambivalence
    // Unparalleled
    // シズル感
    // ゆめうつつ
    // 兵どもが夢の跡
    // 虚飾で彩られたカラス
    // 禍福はあざなえる縄のごとし
    // 三十六劇
    // ラプラスの悪魔
    // シミュレーション仮説
  ];
</script>

<nav>
  <a class={$page.url.pathname === "/" ? "selected" : ""} href={`${base}/`}>
    トリコじかけの明け暮れ
  </a>
  <a
    class={$page.url.pathname === "/about" ? "selected" : ""}
    href={`${base}/about`}
  >
    about
  </a>
  <a
    class={$page.url.pathname === "/rss" ? "selected" : ""}
    href={`${base}/rss.xml`}
    target="_blank"
  >
    rss
  </a>
  <a style="display: none;" href={`${base}/sitemap.xml`} target="_blank">
    sitemap
  </a>
</nav>

<style scoped>
  nav {
    display: flex;
    flex: 1;
    min-width: 0;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
  }

  a {
    margin-left: 20px;
    padding: 10px 5px;
    display: block;
    position: relative;
    color: inherit;
    text-decoration: none;

    white-space: nowrap;
  }
  a:first-child {
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
  a:last-child {
    margin-right: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #fd6378;
  }
</style>
