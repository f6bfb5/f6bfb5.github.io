---
title: "template.md"
date: 1969-07-21T02:56:00.000Z
summary: "template and snippet elements of markdown"
tags: ["F2E"]
---

<!--
⣠⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣷⣄⣀⣤⠰
⣿⣿⣤⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣥⠖
⡘⣿⣿⣿⣷⣤⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿
⢳⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸
⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟
⠀⠀⠀⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⠟
⣀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⠿⠁
⠀⠉⠛⠿⠿⠿⠿⠟⠋⠁
-->

# Title 1

## Title 2

### Title 3

#### Title 4

##### Title 5

###### Title 6

First Paragraph
_Emphasis_
**Bold**
**_Emphasis Bold_**
~~Delete~~
[Link](https://example.com "Link title")
Reference-style [link][id]
Reference-style 2 [link2][]
[id]: https://example.com/ "Link title"
[link2]: https://example.com/ "Link title"

> Blockquote `inline code snippet`

```javascript
const stringToDisplay = [
  "This is a example of multi-line coding snippet",
  "You can use it to highlight your code",
];

stringToDisplay.forEach((s) => {
  console.log(s);
});
```

Second Paragraph That's one small step for man, one giant leap for mankind.

> Second Blockquote

![Image alt](https://picsum.photos/24/24/ "Image title")

- Unordered list item
  - Sub unordered list item
  - Sub unordered list item
    - More Sub unordered list item
- Unordered list item
- Unordered list item

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

- [ ] Todo 1
- [x] Todo 2
  - [ ] Todo 2-1
  - [ ] Todo 2-2
- [ ] Todo 3

| Table Header | Second Header | Third Header |
| :----------- | :-----------: | -----------: |
| Table Cell   |    Cell 2     |       Cell 3 |
| Left align   | Center Align  |  Right align |

## Useful source

- [HTML character entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML)
- [gihyo.jp 編集部における Markdown 記法](https://gihyo.jp/article/2022/08/gihyojp-markdown)
- [マークアップのわかり方](https://yuheiy.com/2022-11-03-how-to-understand-the-markup)

&copy; &reg; &para; &micro; &times; &divide; &deg; &plusmn; ＆nbsp;

---

> [Website](https://www.example.com) &nbsp;&middot;&nbsp;
> GitHub [@GitHub](https://github.com/GitHub) &nbsp;&middot;&nbsp;
> Other [Profilename](https://othersocialmedia.com/Profile)

---

<details>

<summary>Details element summary</summary>

<div>
  details element description
</div>

</details>

## Experiments

<div style="padding: .125em; display: flex; align-items: center; color: #efefef; background-color: #2f2f2f;">
  <div style="margin-left: .25em; margin-right: .5em; display: inline-block; border: 1px solid #efefef;">
    <span style="display: inline-block; padding: 0 .125em; color: #2f2f2f; background-color: #efefef;">BP</span>
    <span style="display: inline-block; padding-right: .125em;">05</span>
  </div>
  <span>勇の心は開くのか（８話）</span>
</div>
<div style="padding: .125em; margin-top: .5em; display: flex; align-items: center; color: #efefef; background-color: #2f2f2f; text-wrap: nowrap; overflow: hidden;">
  <div style="margin-left: .25em; margin-right: .5em; display: inline-block; border: 1px solid #efefef;">
    <span style="display: inline-block; padding: 0 .125em; color: #2f2f2f; background-color: #efefef;">BP</span>
    <span style="display: inline-block; padding-right: .125em;">06</span>
  </div>
  <span>ブレンのもとで語り合う勇と比瑪（８話）</span>
</div>

---

<!-- https://bindup.jp/camp/bind/howto/31221 -->
<div style="margin-top: 1em; padding: 4em; background-image: linear-gradient(110deg,transparent 20%,#e5ebf0 20%)" />
<div style="margin-left: .5em; width: 48%; float: left;">
  <h2 style="margin-top: -4em; margin-left: 1em;">TITLE</h2>
  <img src="https://i.imgur.com/iepJccR.png" alt="placeholder" style="margin-top: -2em;" />
  <p>Lorem lorem lorem lorem lorem lorem</p>
</div>
<div style="margin-left: .5em; width: 48%; float: left;">
  <p style="margin-left: 5em; margin-top: 1em;">Lorem lorem lorem lorem lorem lorem</p>
  <img src="https://i.imgur.com/u4DyT6c.png" alt="placeholder" />
  <h4 style="text-align: right;">SUBTITLE</h4>
</div>
<div style="clear: both;" />

---

<div style="font-size: 4em; height: .5em; overflow: hidden; color: var(--subtitle-color);">TEXT</div>
<div style="font-size: 4em; height: .5em; overflow: hidden; color: var(--subtext-color);">TEXT</div>
<div style="font-size: 4em; height: .5em; overflow: hidden; color: var(--title-color);">TEXT</div>
<div style="font-size: 4em;">TEXT</div>
<div style="font-size: 4em; color: #e5edc8;
  text-shadow: -1px 1px 0 var(--subtitle-color), 1px 1px 0 var(--subtitle-color), 1px -1px 0 var(--subtitle-color), -1px -1px 0 var(--subtitle-color);">
  TEXT
</div>

---

<span style="padding-left: 2px; color: yellow; background-color: red; border-bottom: 1px solid red;">TEXT</span><span style="background-color: red; clip-path: polygon(0 0, 100% 100%, 0 100%); border-bottom: 1px solid red;">&nbsp;</span><span style="display: inline-block; margin-left: -2px; width: 8em; border-bottom: 1px solid red;">TEXT</span>

---

<div style="margin-top: 16px;">
  <span style="color: #ff4b00;">#ff4b00</span>
  <span style="color: #f6aa00;">#f6aa00</span>
  <span style="color: #f2e700;">#f2e700</span>
  <span style="color: #00b06b;">#00b06b</span>
  <span style="color: #1971ff;">#1971ff</span>
  <span style="color: #990099;">#990099</span>
</div>

<div style="margin-top: 16px;">
  <div>
    <span style="color: #ff0000;">R #ff0000</span>
    <span style="color: #00ff00;">G #00ff00</span>
    <span style="color: #0000ff;">B #0000ff</span>
  </div>
  <div>
    <span style="color: #00ffff;">C #00ffff</span>
    <span style="color: #ff00ff;">M #ff00ff</span>
    <span style="color: #ffff00;">Y #ffff00</span>
  </div>
  <div>
    <span style="color: #ffffff;">W #ffffff</span>
    <span style="color: #000000;">B #000000</span>
    <span style="color: #808080;">G #808080</span>
  </div>
</div>

<div style="margin-top: 16px; margin-bottom: 16px;">
  <div>
    <span style="padding: 0 .25em; color: #00ff95; background: #004466;">#00ff95</span>
    <span style="padding: 0 .25em; color: #004466; background: #00ff95;">#004466</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; color: #82fccc; background: #0c030a;">#82fccc</span>
    <span style="padding: 0 .25em; color: #bee943; background: #1d022d;">#bee943</span>
    <span style="padding: 0 .25em; color: #fad320; background: #131920;">#fad320</span>
    <span style="padding: 0 .25em; color: #cfc452; background: #0e0a0a;">#cfc452</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; color: #7ff7e6; background: #0d0409;">#7ff7e6</span>
    <span style="padding: 0 .25em; color: #68e573; background: #371359;">#68e573</span>
    <span style="padding: 0 .25em; color: #1c68ef; background: #fdfd26;">#1c68ef</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background-color: #fe2728; color: white;">#fe2728</span>
    <span style="padding: 0 .25em; background-color: #6db714; color: white;">#6db714</span>
    <span style="padding: 0 .25em; background-color: #19a3c8; color: white;">#19a3c8</span>
    <span style="padding: 0 .25em; background-color: #2a2928; color: #eee;">#2a2928</span>
  </div>
  <!-- https://ethanschoonover.com/solarized/ -->
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background-color: #002b36; color: white;">#002b36</span>
    <span style="padding: 0 .25em; background-color: #073642; color: white;">#073642</span>
    <span style="padding: 0 .25em; background-color: #586e75; color: white;">#586e75</span>
    <span style="padding: 0 .25em; background-color: #657b83; color: white;">#657b83</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background-color: #839496; color: white;">#839496</span>
    <span style="padding: 0 .25em; background-color: #93a1a1; color: white;">#93a1a1</span>
    <span style="padding: 0 .25em; background-color: #eee8d5; color: black;">#eee8d5</span>
    <span style="padding: 0 .25em; background-color: #fdf6e3; color: black;">#fdf6e3</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background-color: #b58900; color: white;">#b58900</span>
    <span style="padding: 0 .25em; background-color: #cb4b16; color: white;">#cb4b16</span>
    <span style="padding: 0 .25em; background-color: #dc322f; color: white;">#dc322f</span>
    <span style="padding: 0 .25em; background-color: #d33682; color: #eee;">#d33682</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background-color: #6c71c4; color: white;">#6c71c4</span>
    <span style="padding: 0 .25em; background-color: #268bd2; color: white;">#268bd2</span>
    <span style="padding: 0 .25em; background-color: #2aa198; color: white;">#2aa198</span>
    <span style="padding: 0 .25em; background-color: #859900; color: #eee;">#859900</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background-color: #FFF9C4; color: black;">#FFF9C4</span>
    <span style="padding: 0 .25em; background-color: #ffcdd2; color: black;">#ffcdd2</span>
  </div>
</div>

<div style="margin-top: 16px; margin-bottom: 16px;">
  <div>
    <span style="padding: 0 .25em; background: #f0f0f0;">#f0f0f0</span>
    <span style="padding: 0 .25em; background: #d4d4d4;">#d4d4d4</span>
    <span style="padding: 0 .25em; background: #b8b8b8;">#b8b8b8</span>
    <span style="padding: 0 .25em; background: #9c9c9c;">#9c9c9c</span>
    <span style="padding: 0 .25em; background: #7f7f7f;">#7f7f7f</span>
    <span style="padding: 0 .25em; color: white; background: #636363;">#636363</span>
    <span style="padding: 0 .25em; color: white; background: #474747;">#474747</span>
    <span style="padding: 0 .25em; color: white; background: #2b2b2b;">#2b2b2b</span>
    <span style="padding: 0 .25em; color: white; background: #0f0f0f;">#0f0f0f</span>
  </div>
  <div style="margin-top: 8px;">
    <span style="padding: 0 .25em; background: #f2f3f4;">#f2f3f4</span>
    <span style="padding: 0 .25em; background: #dadedf;">#dadedf</span>
    <span style="padding: 0 .25em; background: #c1c7c9;">#c1c7c9</span>
    <span style="padding: 0 .25em; background: #a7afb2;">#a7afb2</span>
    <span style="padding: 0 .25em; background: #8c979a;">#8c979a</span>
    <span style="padding: 0 .25em; color: white; background: #6f7c80;">#6f7c80</span>
    <span style="padding: 0 .25em; color: white; background: #555f61;">#555f61</span>
    <span style="padding: 0 .25em; color: white; background: #373d3f;">#373d3f</span>
    <span style="padding: 0 .25em; color: white; background: #131516;">#131516</span>
  </div>
</div>

<!-- -135 -45 45 -->
<div style="display: flex;">
  <div style="display: grid; place-content: center; width: 18px; height: 24px; border:1px solid black; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; transform: rotate(-135deg); background: white;"><span style="transform: rotate(135deg);">T</span></div>
  <div style="display: grid; place-content: center; margin-left: 4px; width: 18px; height: 24px; border:1px solid black; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; transform: rotate(-45deg); background: white;"><span style="transform: rotate(45deg);">H</span></div>
  <div style="display: grid; place-content: center; margin-left: 4px; width: 18px; height: 24px; border:1px solid black; border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; transform: rotate(45deg); background: white;"><span style="transform: rotate(-45deg);">K</span></div>
</div>

<div style="margin-top: 1em; border: 1px solid #333; background: #999;">
  <div style="width: 78%; height: 10px; background: #78d461;" />
</div>

<div style="margin-top: 1em; margin-bottom: 1em; border: 1px solid #333; background: #999;">
  <div style="width: 23%; height: 10px; background: #ff5623;" />
</div>

<div style="position: relative; min-height: 480px; background: url('https://i.imgur.com/XHOlLwQ.png'); background-size: cover; background-repeat: no-repeat; overflow: hidden;">
  <div style="position: absolute; width: 100%; min-height: 150%; left: -40%; top: -7%; background: white; transform: rotate(-20deg);">
  </div>
</div>

<div class="hi"></div>

<div class="explosion"></div>

<p style="transform: scale(.8, 1); transform-origin: top left; width: 125%; line-height: 2;">
  淡漠、什麼精神官能症、各種障礙、非精神病性的繭居族、新型憂鬱症……社會總踩著「是你（無法適應者）的錯，是你很異常」的立場，對於我寫的這些內容，也會覺得非常悲慘吧（實際上在社會裡確實是悲慘的），但心理上（如果沒有旁人的說教或生活上的困頓）是比「以前」更加舒適，也不會再對將來感到不安。當然這不是克服了不安，只是連不安都被虛無吞噬了。在壓倒性的背反邏輯面前，「將來」或「問題」已失去了一切重要性。只剩下「夠了，我不做了」。不會有「我要活在當下！做我想做的事！」這種積極性，在「看見」之後，能做的只有認命。
</p>



<span class="sliver-glitter">███████████</span>

<span class="gold-glitter">███████████</span>

<!-- https://copypet.jp/2206/ -->

<span style="padding: 4px 16px; font-size: 1.3em; background-color: transparent; background-image: repeating-linear-gradient(-45deg, white, white 2px, transparent 0, transparent 4px);">GARA HAIKEI</span>

<!-- https://125naroom.com/web/3737 -->
<div style="
  background-color: #ffe9a7;
  background-image:  linear-gradient(30deg, #ffc107 12%, transparent 12.5%, transparent 87%, #ffc107 87.5%, #ffc107), linear-gradient(150deg, #ffc107 12%, transparent 12.5%, transparent 87%, #ffc107 87.5%, #ffc107), linear-gradient(30deg, #ffc107 12%, transparent 12.5%, transparent 87%, #ffc107 87.5%, #ffc107), linear-gradient(150deg, #ffc107 12%, transparent 12.5%, transparent 87%, #ffc107 87.5%, #ffc107), linear-gradient(60deg, #ffc10777 25%, transparent 25.5%, transparent 75%, #ffc10777 75%, #ffc10777), linear-gradient(60deg, #ffc10777 25%, transparent 25.5%, transparent 75%, #ffc10777 75%, #ffc10777);
  background-size: 40px 70px;
  background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px;">
  <p style="text-align: center;">lorem</p>
</div>

<!-- https://qiita.com/xrxoxcxox/items/073d30615a1d73c089fc -->
<div style="columns: 100px 3;">
  <div class="adjusted-image-border">
    <img src="https://i.imgur.com/vCT9925.png" alt="thanks for playing" />
  </div>
  <div class="adjusted-image-border">

![sky in the building](https://i.imgur.com/lYVTGos.png)

  </div>
  <div class="adjusted-image-border">

![rainbow ballon](https://i.imgur.com/JuPO2pq.png)

  </div>
</div>

<div style="padding: 1em; max-widt 100%; background-color: #ffffee;">
<div style="margin: 4px auto; max-width: 576px;
  color: rgb(128,0,0); background-color: #f0e0d6;">
  <div>
    <span style="color: #cc1105; font-weight: bold;">無題</span>
    <span>Name</span>
    <span style="color: #117743; font-weight: bold;">名無し</span>
    <time>{new Date().toISOString().slice(2).replaceAll('-', '/').replace('T', `(${['日', '一','二','三','四','五','六'][new Date().getDay()]})`).slice(0,-5)}</time>
    <span style="text-decoration: underline;">No.{+new Date()}</span>
  </div>
  <div style="padding: 16px 40px; line-height: 1.2;">
    <div style="color: #789922;">
      > 淡漠、什麼精神官能症、各種障礙、非精神病性的繭居族、新型憂鬱症……社會總踩著「是你（無法適應者）的錯，是你很異常」的立場，對於我寫的這些內容，也會覺得非常悲慘吧（實際上在社會裡確實是悲慘的），但心理上（如果沒有旁人的說教或生活上的困頓）是比「以前」更加舒適，也不會再對將來感到不安。當然這不是克服了不安，只是連不安都被虛無吞噬了。在壓倒性的背反邏輯面前，「將來」或「問題」已失去了一切重要性。只剩下「夠了，我不做了」。不會有「我要活在當下！做我想做的事！」這種積極性，在「看見」之後，能做的只有認命。
    </div>
    「啊」、「咦？」、「啥？」地回過神來、有了這種壓倒性的實際感受後，不論是進行埋洞作業的「精氣」，或是以自我肯定感（為了要（為了要（為了埋平坑洞的作業）而埋平坑洞的作業）而…）激勵自己「精氣」，都枯竭了。想要努力，身與心也提不出力。但也只是不再會有做「該做的事」需要的「精氣」，對於享受喜歡的事不會造成任何問題，「要理解那個就要先學這個」地累積也不會有什麼問題。簡單來說，活下去這件事不會有任何問題。所以說實話，我認為只是至今非法佔據著優先順位最上面的「該做的事＝填坑作業」，回到了原本的地方（地獄）去而已。
  </div>
</div>
</div>

<!-- <dialog style="position: fixed; top: 50%;" open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>CLOSE</button>
  </form>
</dialog> -->

<div style="padding: 10px 0; background: #000;">
  <span style="padding-left: 10px; border-left: 35px solid #d6000f; color: white;">TITLE HERE</span>
</div>

<fieldset>
    <legend>Select a maintenance drone:</legend>
    <div>
      <input type="radio" id="huey" name="drone" value="huey"
             checked>
      <label for="huey">Huey</label>
    </div>
    <div>
      <input type="radio" id="dewey" name="drone" value="dewey">
      <label for="dewey">Dewey</label>
    </div>
    <div>
      <input type="radio" id="louie" name="drone" value="louie">
      <label for="louie">Louie</label>
    </div>
</fieldset>

<style scoped>
  .hi {
    width: 50px;
    height: 72px;
    background-image: url("http://s.cdpn.io/79/sprite-steps.png");
    
    animation: play .8s steps(10) infinite;
  }
  @keyframes play {
    from { background-position: 0px; }
    to { background-position: -500px; }
  }

  .explosion {
    width: 100px;
    height: 100px;
    background:url('http://hasgraphics.com/wp-content/uploads/2010/08/spritesheet1.png') no-repeat;

    animation: exp-x 500ms infinite steps(9), exp-y 4.5s infinite steps(9);
  }
  @keyframes exp-x {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: -900px;
    }
  }
  @keyframes exp-y {
    from {
      background-position-y: 0;
    }
    to {
      background-position-y: -900px;
    }
  }

  /* ---------- */

  .sliver-glitter {
    background-image: repeating-linear-gradient(75deg, #555555 0, #999999 25px, #f3f3f3 40px, #999999 65px, #555555 100px);
  }
  .gold-glitter {
    background-image: repeating-linear-gradient(75deg, #b67b03 0, #daaf08 15px, #fee9a0 30px, #daaf08 55px, #b67b03 90px, #b67b03 100px);
  }
  .sliver-glitter,
  .gold-glitter {
    background-size: 300vw 100px;
    color: transparent;
    animation: glitter 1.5s linear infinite;
  }
  @keyframes glitter {
    0% {
      background-position-x: 150vw;
      background-position-y: 50px;
    }
    100% {
      background-position-x: calc(150vw - 96.5926px);
      background-position-y: calc(50px + 25.8819px);
    }
  }

  /* ---------- */
  
  .adjusted-image-border {
    position: relative;
  }
  .adjusted-image-border p {
    padding: 0;
  }
  .adjusted-image-border::before {
    position: absolute;
    content: "";
    inset: 0;
    box-shadow: 0 0 0 2px rgb(220 220 220) inset;
    mix-blend-mode: darken;
  }

  /* ---------- */

  details {
    padding: 0;
  }
  details summary {
    cursor: pointer;
    background: var(--bg-color);
    border-radius: 6px;
  }
  details summary > * {
    display: inline;
  }
  details summary,
  details > div {
    padding: 1rem;
  }

</style>
