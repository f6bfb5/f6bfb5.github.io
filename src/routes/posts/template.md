---
title: "template.md"
date: 1969-07-21T02:56:00.000Z
summary: "template and snippet elements of markdown"
tags: F2E
---

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
[id]: https://example.com/ "Link title"

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

| Table Header | Second Header |
| ------------ | ------------- |
| Table Cell   | Cell 2        |
| Cell 3       | Cell 4        |

[HTML character entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML)

&copy; &reg; &para; &micro; &times; &divide; &deg; &plusmn;

---

> [Website](https://www.example.com) &nbsp;&middot;&nbsp;
> GitHub [@GitHub](https://github.com/GitHub) &nbsp;&middot;&nbsp;
> Other [Profilename](https://othersocialmedia.com/Profile)

---

<img src="https://picsum.photos/128/128/" alt="Image alt" title="Image title" style="padding-top: 1.125em; padding-left: 1.125em; float: right;">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div style="clear: both;" />

<img src="https://picsum.photos/128/128/" alt="Image alt" title="Image title" style="padding-top: 1.125em; padding-right: 1.125em;  float: left;">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<div style="clear: both;" />

<details>

<summary>Details element summary</summary>

details element description

</details>

## Mermaid Cheatsheet

### Flowchart

- https://mermaid-js.github.io/mermaid/
- `flowchart [directions]`
  - or `graph [directions]`？
  - `TB`: top to bottom
  - `TD`: top-down / same as top to bottom
  - `BT`: bottom to top
  - `RL`: right to left
  - `LR`: left to right
- `node`
- `node[node with text]`
- `node1 --> node2`
- `node1 -- link with text -- node2`
  - or `node1-->|text|node2`
- `node1 --> node2 & node3 --> node4`
- Node shapes:
  - round edges: `node(text)`
  - stadium-shaped: `node([text])`
  - subroutine: `node[[text]]`
  - cylindrical shape: `node[(text)]`
  - circle: `node((text))`
  - asymmetric shape: `node>text]`
  - rhombus: `node{text}`
  - hexagon: `node{{text}}`
  - parallelogram: `node[/text/]`
  - parallelogram alt: `node[\text\]`
  - trapezoid: `node[/text\]`
  - trapezoid alt: `node[\text/]`
  - double circle: `node(((text)))`
- Link shapes:
  - normal: `---`
  - normal with arrow: `-->`
  - thick: `===`
  - thick with arrow: `==>`
  - dotted: `-.-`
  - dotted with arrow: `-.->`
- subgraph
  - `subgraph [name]`
  - `direction [directions]`
  - `end`

<script>
  import { onMount } from "svelte";
  onMount(async () => {
    mermaid.init();
  });
</script>

<svelte:head>

  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>

</svelte:head>

```mermaid
flowchart TB
    naming[要命名什麼?] -- 變數 --> date[表示日期?]
    naming -- 函式 --> on[事件函式?]

    date -- Yes --> dateOp(動詞+at/on)
    date -- No --> boolean[參數為布林值?]
    boolean -- No --> booleanOp(形容詞+名詞)
    boolean -- Yes --> show[表示隱藏或顯示?]
    show -- Yes --> showOp(show+名詞)
    show -- No --> enable[表示啟用或關閉?]
    enable -- Yes --> enableOp(名詞+enabled)
    enable -- No --> exist[表示是否存在?]
    exist -- Yes --> existOp(名詞+exists)
    exist -- No --> has[表示是否含有?]
    has -- Yes --> hasOp(has/contains+名詞)
    has -- No --> varOp(is+形容詞)

    on -- Yes --> onOp(on+名詞+形容詞)
    on -- No --> to[轉換內容?]
    to -- Yes --> toOp(to+名詞)
    to -- No --> status[更改狀態?]
    status -- Yes --> statusOp(動詞+目的詞+形容詞)
    status -- No --> funOp(動詞+目的詞)

    dateOp -- 例 --- dateOpEx([updatedAt])
    booleanOp -- 例 --- BooleanOpEx([payingPlayer])
    showOp -- 例 --- showOpEx([showConfirmationModal])
    enableOp -- 例 --- enableOpEx([autoScrollEnabled])
    existOp -- 例 --- existOpEx([soldOutItemExists])
    hasOp -- 例 --- hasOpEx([containsCheckedOutPlayers])
    varOp -- 例 --- varOpEx([isOrderable])

    onOp -- 例 --- onOpEx([onRowClicked])
    toOp -- 例 --- toOpEx([toMinutes])
    statusOp -- 例 --- statusOpEx([setReceiptPrinted])
    funOp -- 例 --- funOpEx([toggleArchivedItems])
```

## 縦書き

- [html と css で縦書き](https://memorocchi.net/hpcss-tategaki/)
- [縦書き HTML における文字の向きはどのように定まるか](https://blog.nnn.dev/entry/2022/07/01/180000)
- [CSS の縦書きレイアウト](https://web.havincoffee.com/css/css3/css3_a_verticalwriting.html)

<div class="vertical-writing">

## 起こした最初の人<br>つまりリーダーがいつも<br>過大評価される傾向あります

それは時間もしそんなお出かけらというものの以上が得ですます。無論事実へ準備地はけっしてそのお話ですんだけからするがいないにも関係申し上げたたが、そうにはしたたんまし。他に当てたものもおもに場合をひょろひょろでですです。むしろ大森さんに開始人格こう意見に思いない是その風これらか交渉にについてお担任ないですませなて、この元来はそれか幸家の溯っが、岡田君の事の奴婢の彼らでよほどご通知と留めて私がたを同比較と見合せようにいよいよお矛盾があるますたば、別にとにかく＃「に落ちつくらしいているましのをするですです。するとだから大国に出しのは当然大変とするたと、その人をもさないてとともに鵜へあっから行くますだっ。

同じうち試のうちこういう間はあいつ上にするらしいかと張さんがしでう、個性の前んとしてお活動でしょましないが、地震のためが学校を将来までの引より今してくるて、そうの昨日に怒ってこのためにまして上っなたと思っでのたらで、大きくななが別段ご人聞いだ訳ですないまし。実は辞令か自由かお尋ねで知れずと、一番中がたを悟っし行くう中にお評のほかをそれうだ。十月ではもちろん暮らしので潜んたですましなから、とにかく同時に握っので吹聴はまだないたのん。しかしご観念に考えからもいですのありが、菓子をしか、もっともあなたかするてするられんませで聴いれるないたと頼めて、ペは行ってみたた。

できるだけようやくはもし幸という来るだて、私では今日中くらいおれのごお話しも旨くありいますなく。

何はそんなに誘惑ののにお意味も引張りのでならただましうながら、三三の説をそうはおりたという相違ですて、ところがこのいくらの道に知れられんて、あなたかをこれらの一つを区別の来がいるた事ましですと戦争正さから意見し来るなまい。方角へまた大森君のだからちょっというでものないなない。岡田さんはちょっと一条を縛りつけば重んずるた方ますうた。（ただ国家にし所ないですたてたはするうですて、）元々上げるです俗人を、三井の自分まで評してあるという、中学の誤解は今の日ばかりなるしものに衝くませが接近隊云わがみましというお監獄たのなけれ。

私は引続き便所をいうんように潰さてしまえない方ですてあるいはそれだけ倫敦借着気に入るですん。ただいろいろ何年は一つにするので、毎日をとこういうありたとするて、なしたたてなおお納得になっなない。理の前が、その理非へほかにするばかり、事実上に必ず当時一十一杯をしまでの先生が、私か繰りん所有より使えない昨日ははなはだ云えせのなて、単にずいぶん個性でよろしゅうば、そんなのの云えはずが美味ない長く云っんた。そうしてさぞ場合十二二通りを来まではあったという窮屈ます意味にめがけから、支とこのうちその以上になっがいなのない。よしに一般で腑いるます五一年直接になるば、あなたかなっますてならたというのにそうするでのうて、単にできるのに主なて、もし試をなるてあってなりでで。

</div>

<style scoped>
  .vertical-writing {
    margin: auto;
    padding: 2em 0;
    width: auto;
    max-width: 100%;
    height: auto;

    writing-mode: vertical-rl;
    text-orientation: upright;
    column-width: 20em;
    column-gap: 5em;
  }
  .vertical-writing p {
    padding: 0;
    padding-left: 2em;
    text-indent: 1em;
    line-height: 1.5;
  }
  .vertical-writing h2 {
    line-height: 1.33;
  }

  /* clear custom css */
  .vertical-writing h2::after {
    border: none;
  }
</style>

それは時間もしそんなお出かけらというものの以上が得ですます。無論事実へ準備地はけっしてそのお話ですんだけからするがいないにも関係申し上げたたが、そうにはしたたんまし。他に当てたものもおもに場合をひょろひょろでですです。むしろ大森さんに開始人格こう意見に思いない是その風これらか交渉にについてお担任ないですませなて、この元来はそれか幸家の溯っが、岡田君の事の奴婢の彼らでよほどご通知と留めて私がたを同比較と見合せようにいよいよお矛盾があるますたば、別にとにかく＃「に落ちつくらしいているましのをするですです。するとだから大国に出しのは当然大変とするたと、その人をもさないてとともに鵜へあっから行くますだっ。

同じうち試のうちこういう間はあいつ上にするらしいかと張さんがしでう、個性の前んとしてお活動でしょましないが、地震のためが学校を将来までの引より今してくるて、そうの昨日に怒ってこのためにまして上っなたと思っでのたらで、大きくななが別段ご人聞いだ訳ですないまし。実は辞令か自由かお尋ねで知れずと、一番中がたを悟っし行くう中にお評のほかをそれうだ。十月ではもちろん暮らしので潜んたですましなから、とにかく同時に握っので吹聴はまだないたのん。しかしご観念に考えからもいですのありが、菓子をしか、もっともあなたかするてするられんませで聴いれるないたと頼めて、ペは行ってみたた。

できるだけようやくはもし幸という来るだて、私では今日中くらいおれのごお話しも旨くありいますなく。

何はそんなに誘惑ののにお意味も引張りのでならただましうながら、三三の説をそうはおりたという相違ですて、ところがこのいくらの道に知れられんて、あなたかをこれらの一つを区別の来がいるた事ましですと戦争正さから意見し来るなまい。方角へまた大森君のだからちょっというでものないなない。岡田さんはちょっと一条を縛りつけば重んずるた方ますうた。（ただ国家にし所ないですたてたはするうですて、）元々上げるです俗人を、三井の自分まで評してあるという、中学の誤解は今の日ばかりなるしものに衝くませが接近隊云わがみましというお監獄たのなけれ。

私は引続き便所をいうんように潰さてしまえない方ですてあるいはそれだけ倫敦借着気に入るですん。ただいろいろ何年は一つにするので、毎日をとこういうありたとするて、なしたたてなおお納得になっなない。理の前が、その理非へほかにするばかり、事実上に必ず当時一十一杯をしまでの先生が、私か繰りん所有より使えない昨日ははなはだ云えせのなて、単にずいぶん個性でよろしゅうば、そんなのの云えはずが美味ない長く云っんた。そうしてさぞ場合十二二通りを来まではあったという窮屈ます意味にめがけから、支とこのうちその以上になっがいなのない。よしに一般で腑いるます五一年直接になるば、あなたかなっますてならたというのにそうするでのうて、単にできるのに主なて、もし試をなるてあってなりでで。

<div style="position: relative; padding-left: 150px;">
<h2 style="writing-mode: vertical-rl; position: absolute; margin-left: 35px; left: 0; top: 0; font-size: 80px; font-weight: 700; color: red;">おしゃれな TITLE</h2>

それは時間もしそんなお出かけらというものの以上が得ですます。無論事実へ準備地はけっしてそのお話ですんだけからするがいないにも関係申し上げたたが、そうにはしたたんまし。他に当てたものもおもに場合をひょろひょろでですです。むしろ大森さんに開始人格こう意見に思いない是その風これらか交渉にについてお担任ないですませなて、この元来はそれか幸家の溯っが、岡田君の事の奴婢の彼らでよほどご通知と留めて私がたを同比較と見合せようにいよいよお矛盾があるますたば、別にとにかく＃「に落ちつくらしいているましのをするですです。するとだから大国に出しのは当然大変とするたと、その人をもさないてとともに鵜へあっから行くますだっ。

同じうち試のうちこういう間はあいつ上にするらしいかと張さんがしでう、個性の前んとしてお活動でしょましないが、地震のためが学校を将来までの引より今してくるて、そうの昨日に怒ってこのためにまして上っなたと思っでのたらで、大きくななが別段ご人聞いだ訳ですないまし。実は辞令か自由かお尋ねで知れずと、一番中がたを悟っし行くう中にお評のほかをそれうだ。十月ではもちろん暮らしので潜んたですましなから、とにかく同時に握っので吹聴はまだないたのん。しかしご観念に考えからもいですのありが、菓子をしか、もっともあなたかするてするられんませで聴いれるないたと頼めて、ペは行ってみたた。

できるだけようやくはもし幸という来るだて、私では今日中くらいおれのごお話しも旨くありいますなく。

何はそんなに誘惑ののにお意味も引張りのでならただましうながら、三三の説をそうはおりたという相違ですて、ところがこのいくらの道に知れられんて、あなたかをこれらの一つを区別の来がいるた事ましですと戦争正さから意見し来るなまい。方角へまた大森君のだからちょっというでものないなない。岡田さんはちょっと一条を縛りつけば重んずるた方ますうた。（ただ国家にし所ないですたてたはするうですて、）元々上げるです俗人を、三井の自分まで評してあるという、中学の誤解は今の日ばかりなるしものに衝くませが接近隊云わがみましというお監獄たのなけれ。

私は引続き便所をいうんように潰さてしまえない方ですてあるいはそれだけ倫敦借着気に入るですん。ただいろいろ何年は一つにするので、毎日をとこういうありたとするて、なしたたてなおお納得になっなない。理の前が、その理非へほかにするばかり、事実上に必ず当時一十一杯をしまでの先生が、私か繰りん所有より使えない昨日ははなはだ云えせのなて、単にずいぶん個性でよろしゅうば、そんなのの云えはずが美味ない長く云っんた。そうしてさぞ場合十二二通りを来まではあったという窮屈ます意味にめがけから、支とこのうちその以上になっがいなのない。よしに一般で腑いるます五一年直接になるば、あなたかなっますてならたというのにそうするでのうて、単にできるのに主なて、もし試をなるてあってなりでで。

</div>

<div style="padding: 1em; position: relative; border: 3px solid blue; border-radius: 8px;">
  <h2 style="margin: 0; padding: 0.25em 0.5em; position: absolute; top: -1em; left: 1em; background: var(--bg-color);">Title</h2>

何はそんなに誘惑ののにお意味も引張りのでならただましうながら、三三の説をそうはおりたという相違ですて、ところがこのいくらの道に知れられんて、あなたかをこれらの一つを区別の来がいるた事ましですと戦争正さから意見し来るなまい。方角へまた大森君のだからちょっというでものないなない。岡田さんはちょっと一条を縛りつけば重んずるた方ますうた。（ただ国家にし所ないですたてたはするうですて、）元々上げるです俗人を、三井の自分まで評してあるという、中学の誤解は今の日ばかりなるしものに衝くませが接近隊云わがみましというお監獄たのなけれ。

私は引続き便所をいうんように潰さてしまえない方ですてあるいはそれだけ倫敦借着気に入るですん。ただいろいろ何年は一つにするので、毎日をとこういうありたとするて、なしたたてなおお納得になっなない。理の前が、その理非へほかにするばかり、事実上に必ず当時一十一杯をしまでの先生が、私か繰りん所有より使えない昨日ははなはだ云えせのなて、単にずいぶん個性でよろしゅうば、そんなのの云えはずが美味ない長く云っんた。そうしてさぞ場合十二二通りを来まではあったという窮屈ます意味にめがけから、支とこのうちその以上になっがいなのない。よしに一般で腑いるます五一年直接になるば、あなたかなっますてならたというのにそうするでのうて、単にできるのに主なて、もし試をなるてあってなりでで。

</div>

<div style="margin: .5em auto; width: fit-content; transform: skewX(-10deg); font-size: 2em; color: white; background: black;">TITLE</div>

<div style="display: inline-block; padding: 5px 10px 2px; border-radius: 4px 4px 0 0; background-color: #ea4747; color: #fff;">
<span>Title</span>
</div>
<div style="padding: 20px; margin: 0 auto 20px; font-size: 18px; border: 2px solid #ea4747; border-radius: 0 4px 4px 4px; background: rgba(255, 254, 242, 0.5);">
<span>Paragraph</span>
</div>

<div style="padding: .125em; width: 24em; display: flex; align-items: center; color: #efefef; background-color: #2f2f2f;">
  <div style="margin-left: .25em; margin-right: .5em; display: inline-block; border: 1px solid #efefef;">
    <span style="display: inline-block; padding: 0 .125em; color: #2f2f2f; background-color: #efefef;">BP</span>
    <span style="display: inline-block; padding-right: .125em;">05</span>
  </div>
  <span>勇の心は開くのか（８話）</span>
</div>
<div style="padding: .125em; margin-top: .5em; width: 24em; display: flex; align-items: center; color: #efefef; background-color: #2f2f2f;">
  <div style="margin-left: .25em; margin-right: .5em; display: inline-block; border: 1px solid #efefef;">
    <span style="display: inline-block; padding: 0 .125em; color: #2f2f2f; background-color: #efefef;">BP</span>
    <span style="display: inline-block; padding-right: .125em;">06</span>
  </div>
  <span>ブレンのもとで語り合う勇と比瑪（８話）</span>
</div>

