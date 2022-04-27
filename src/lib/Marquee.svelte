<script>
  const sentencesToShow = [
    "馬鹿か！お前は！図体がデカいからって、パイロットが乗ったグランチャーと戦えるほどお前は良く出来ちゃいないんだ！親父達が何と言おうと、お前達は人間を乗せるためのスペースを用意して生まれたんだ！それは何故だかわかるか！？（ﾊﾟﾝｯ）ええっ！？お前達が、この地球の進化の歴史の中で学んだことだよな！人間の反射神経と判断力と感性、それに生殖だけは人間のものを利用するつもりだからな！こいつのコピーは面倒だもんなァ！しかし！力を行使することは自分たちのものにした！ヘッ……人間ってヤツは、力の使い方を知らないエゴイスティックな動物だからだろ？だからお前たちは、お前たちに必要な人間だけを摂取して、地球が育てた生物の生体エネルギーの全てを吸収して、銀河旅行をするつもりだ！……それがお前達だ！けどそういうお前達が、何故かグランチャーとブレンパワードという二つに分かれて生まれた。しかもオスとメスとの関係でもない、もっと根源的に、陰陽とか、プラスマイナスくらいはっきりと反発し合う習性を持ってる。何故だよ！（ﾊﾟﾝｯ）一つで完全無欠に、永遠であるものなど、この世の中には無い！だからこうやって！グチャグチャに生まれてきたんなら、オルファンだってそうだろう！自分の反対にあるものと戦って、探してるものがあるんだろう！ビー・プレートとか、もう一人のオルファンとかさぁ！オーガニックで有機的なものが一つのものであるわきゃないのに！貴様！……お前は！比瑪程度の女にそそのかされて……！！",
    "世界のデジタル化は、人の弱さを助長し、それぞれだけに都合の良い『真実』の生成を加速している。社会に満ちる『真実』の山を見てみるがいい……。高価な兵器が人道的に人を殺し――犯罪者の人権は被害者のプライバシーより丁重に扱われ――希少動物保護の寄付金が集まる傍らで、貧困に苦しむ人達がいる……。誰もがこう言われて育つわ。他人には優しくしよう。でも競争相手は叩きのめせ！『お前は特別だ』『信じていれば夢はかなう』だけど成功できる人間が一部だけなのは、初めから明らかよね……。君達が『自由』を『行使』した、これが結果だ。争いをさけ、傷つかないようにお互いをかばいあうための詭弁――『政治的正しさ』や『価値相対化』というキレイゴトの名の下に、それぞれの『真実』がただ蓄積されていく。衝突を怖れてそれぞれのコミュニティに引きこもり――ぬるま湯の中で適当に甘やかしあいながら、好みの『真実』を垂れ流す。かみ合わないのにぶつからない『真実』の数々。誰も否定されないが故に誰も正しくない。ここでは淘汰も起こらない。世界は『真実』で飽和する。それが世界を終わらせるのだ。緩やかに。",
    "驚く事はない。これは全て偽物だ。おまえの言う、取るに足らない存在だ。だがな、偽物が本物に敵わない、なんて道理はない。おまえが本物だというのなら、悉くを凌駕して、その存在を叩き堕とそう。いくぞ英雄王―――武器の貯蔵は十分か。",
    "狂人の真似とて大路を走らば、即ち狂人なり。悪人の真似とて人を殺さば、即ち悪人なり。驥を学ぶは驥の類ひ、舜を学ぶは舜の徒なり。偽りても賢を学ばんを、賢といふべし。",
    "孤独に歩め。悪をなさず、求めるところは少なく。林の中の象のように。",
    "人間は他人を信じないからさ。信じないから疑い、疑うから他人を悪いと思い始める。人間を間違わせるのさ。",
    "「さぁ始まるザマすよ！」「行くでがんす」「ふんがー」「まともに始めなさいよ！！」",
    "人生は何事をもなさぬにはあまりに長いが何事かをなすにはあまりに短い",
    "あんたが全部あたしのものにならないなら、あたし、なにもいらない",
    "こっちはそんなの全部わかっててエンタメを提供してんの",
    "お前が何を見たとしても………信じろ、信じるということはそういうことだ。",
    "我、生きずして死すこと無し。理想の器、満つらざるとも屈せず。これ、後悔とともに死すこと無し。",
    "嗚呼、斑鳩が行く・・・・・・望まれることなく、浮き世から捨てられし彼等を動かすもの。それは、生きる意志を持つ者の意地に他ならない。",
    "よく来た。ここは１番目の「お前の場所」だ。しかし、今は私の場所だ。奪い返せばよい。…できるものなら。",
    "全部俺のもんだ！孤独も、苦痛も、不安も、後悔も…もったいなくてタナベなんかにやれるかってんだよ！",
    "あなたは赤い部屋が好きですか？",
    "経験は思考から生まれ、思考は行動から生まれる。",
    "Lain is omnipresent, existing everywhere.",
    "Небо очень и очень темное , а Земля голубоватая .",
    "「這是冒險的終結嗎？ 世間的一切都沒有終結。我們來此尋找長生不老的秘密，是為了要成為神？我們是人，人類永遠都是凡人，雖然我們沒有獲得長生不老，但至少我們獲得了真實，我們開始於神話，現在我們要回到現實，不過……這個生活是真實的嗎？不，這只是電影，攝影機往後拉。」",
    '正如要有林林總總部份才能組成一個完整的人，而其中每一部份又要有千差萬別，才得以構成迥然不同之人，異於他人的面容，下意識裡的聲調，夢醒時所見的手掌，兒時的記憶，未來的命運，以及我的電子腦所觸及的信息海洋，所有的這一切，孕育了「我」，個人意識的升華，使我意識到自我的存在，同時也將我限定在"自我"之中。「孩童之時，所言俱為孩童，所感如是孩童，所思亦復孩童， 唯成年之後，便將童心擯棄。」',
    "如果你關心的只是故事，或者可能人設，「那作畫到底有什麼重要的？」是這樣，如果故事在那頭，你在這頭，我們如何讓故事從點 A 到達點 B？我們透過音效、配音、作畫以及其他，你可以想出很多其他元素，不過把故事打包起來運送，我們叫它「敘事」，而為了達到好的敘事，你需要很多藝術家一起來思考這個非常困難的問題，「我們怎麼才能把故事講得最好？」正是他們創造性的答案，決定了他們藝術成品的效果。你可能見過有著非常好故事的動畫被沒勁的敘事拖後腿，你也可能見過非常沒營養的故事，而被非常刺激和富有想像力的敘事所挽救的動畫。你可以將其歸功於導演瞭解如何使用他的作畫團隊，不過確實是動畫家們在做真正的思考，思考「我如何透過動作來表達」、思考「我如何畫一系列的畫來讓觀眾與我筆下的角色感同身受」、思考「我如何讓觀眾理解我的角色所遭遇的經歷」。這就是敘事的本質，動畫家正位於其前線和中心。有些作品很匆忙的製作出來，而沒有人有時間在乎這個問題，導演沒功夫在乎，他就隨手拿漫畫分格當分鏡用，動畫家也沒功夫在乎，因為所有的原畫都被送到海外代工了，當一部片導演沒人在乎、動畫家沒人在乎，所有重要的「我們怎麼才能把故事講得最好」的問題就都沒人回答了。這就是為什麼好的作畫對於高品質敘事的包裝是重要的。最好的電影、電視動畫有一整個團隊，充滿了富有創造力的藝術家，讓他們的血淚和汗水融入到故事的運載工具中，即我們稱的「動畫」，紙面上故事裡要是寫著「某件事情發生了，角色很傷心」，但是卻需要藝術家們的技巧與熱情，來使這些情感和經歷變為真實。",
    "「我當然不會說那是個糟糕的電影，不過，基本上無論什麼娛樂都只是一時的，而且也應該如此，像這種沒有開始也沒有結束，只是一味迷住觀眾使其無法離開的電影，不管它是多了不起的東西，只是有害無益。」「哦，很嚴厲的批評呢，你是不是想說觀眾有自己應該回到的現實呢？」「是的。」「在這裡的觀眾中，也有人一回到現實就會遭到不幸，如果你把那些觀眾的夢想奪走，你承擔得起責任嗎？」「承擔不起啊。但正是在現實生活中拼搏，夢想才有意義，只是把自己投射到別人的夢想裡的話，跟死又有什麼兩樣。」「真是一個現實主義者啊。」「如果你把逃避現實叫做浪漫的話。」「好個堅強的女孩呢。什麼時候你堅信的現實建構完成了，再來叫我們吧。那時我們會從這個電影院裡出來的。」",
    "嗨（´・ω・｀）歡迎來到波本酒屋。這杯龍舌蘭是請你的，先喝了冷靜下來吧。嗯，「又是我」。不好意思。俗話說事不過三，我也不覺得道歉就能得到原諒。但是，我相信當你看到這則頁面的時候，你一定會感受到某種言語無法表達的， 類似「雀躍」的東西。希望你在這動盪的亂世裡，不要忘了這種心情。帶著這樣的想法，我製作了這則頁面。那麼，你要點什麼呢。",
    // "會想求死，是因為滿是不安，會感到不安，是因為有所願，向世界，向自己所祈願的姿態顯得過於巨大，使得雙腳發抖，無法動彈，若是動起身來，就會無法保住自己的願望，你並不是想死，而是想以所願的姿態活著吧。願望是，非得要實現不可的嗎？",
    // "紀子「矢吹你…不會覺得寂寞嗎？其他同齡的青年們帶著情人走遍高山藍海歌頌青春，你卻只是日覆一日關在滿是汗水、凡士林與松脂味的體育館裡，跳著跳繩、做柔軟體操、空揮練拳、敲擊沙包。提到有什麼比較亮麗鮮明的回憶，也只有處在眩目照明的，牢籠般的拳擊場中，散遍著香菸煙霧的鬥技場，丟出椅墊嘲諷的酒醉客人，像鬥雞與鬥犬般互毆至滿頭鮮血的生活…而且明明身高還有成長的可能性，卻要為了控制體重，不能盡情飲食，這實在太不堪、太悲慘了。要將這稱作青春，實在太昏暗了！」矢吹「我不太會說話…但我不是因為有所虧欠，或是欠下人情才在打著拳鬥的。因為我喜歡拳鬥，所以才走到了現在。也許這和小紀你講的歌頌青春有點不同，但我至今已在滿是鮮血的拳擊場上，嘗過了數次那種燃燒般的充實感…這和那種無法點燃、不完全燃燒的虛煙可不同了。雖然僅有短短的一瞬間，但它燃燒得可刺眼了。之後，只留下純白的灰燼…不留一絲未燃的餘燼…純白的灰。我在接觸拳鬥之前，從未嘗過這種充實感。你能瞭解嗎，小紀，我不是因為有所虧欠，或是欠下人情才在打著拳鬥的。因為我喜歡拳鬥，我喜歡這種發狂似地咬緊對方的充實感。」",
  ];
  let nowPlayingIndex = Math.floor(sentencesToShow.length * Math.random());
  let content;
  let contentWidth;
  let slideOutDuration = sentencesToShow[nowPlayingIndex].length / 8 + "s";

  import { afterUpdate } from "svelte";

  function getWidth() {
    console.log(content ? content.offsetWidth : "");
    contentWidth = content.offsetWidth + "px";
  }
  function playNext() {
    if (content.classList.contains("slideIn")) {
      content.classList.remove("slideIn");
      content.classList.add("slideOut");
    } else {
      // play by order
      // if (nowPlayingIndex + 1 >= sentencesToShow.length) {
      //   nowPlayingIndex = 0;
      // } else {
      //   nowPlayingIndex += 1;
      // }

      // play randomly
      nowPlayingIndex = Math.floor(sentencesToShow.length * Math.random());
      content.classList.remove("slideOut");
      slideOutDuration = sentencesToShow[nowPlayingIndex].length / 8 + "s";
      content.classList.add("slideIn");
    }
  }

  afterUpdate(() => {
    getWidth();
  });
</script>

<div
  class="marquee"
  style="--slide-out-duration: {slideOutDuration}; --content-width: {contentWidth};"
>
  <div
    class="marquee--content slideIn"
    on:animationend={playNext}
    bind:this={content}
  >
    {sentencesToShow[nowPlayingIndex]}
  </div>
  <div style="display: none;" class="slideOut" />
</div>

<style scoped>
  :root {
    --marquee-outer-border-color: #242222;
  }

  /* [Simulate marquee tag in CSS and Javascript - Jonathan Petitcolas](https://www.jonathan-petitcolas.com/2013/05/06/simulate-marquee-tag-in-css-and-javascript.html) */
  @keyframes slideIn {
    0% {
      text-indent: 724px;
    }
    38% {
      text-indent: 8px;
    }
    100% {
      text-indent: 8px;
    }
  }
  @keyframes slideOut {
    0% {
      text-indent: 0px;
    }
    100% {
      text-indent: calc(var(--content-width) * -1);
    }
  }

  .marquee {
    /* display */
    position: relative;
    /* height: 100%; */
    height: 1.5em;
    width: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;

    /* typography */
    font-size: 24px;
    line-height: 1.5;
    font-weight: 600;
    text-align: left;
    color: #fff;
    text-shadow: -2px -2px var(--marquee-outer-border-color),
      -2px -1px var(--marquee-outer-border-color),
      -2px 0px var(--marquee-outer-border-color),
      -2px 1px var(--marquee-outer-border-color),
      -2px 2px var(--marquee-outer-border-color),
      -1px -2px var(--marquee-outer-border-color),
      -1px -1px var(--marquee-outer-border-color),
      -1px 0px var(--marquee-outer-border-color),
      -1px 1px var(--marquee-outer-border-color),
      -1px 2px var(--marquee-outer-border-color),
      0px -2px var(--marquee-outer-border-color),
      0px -1px var(--marquee-outer-border-color),
      0px 0px var(--marquee-outer-border-color),
      0px 1px var(--marquee-outer-border-color),
      0px 2px var(--marquee-outer-border-color),
      1px -2px var(--marquee-outer-border-color),
      1px -1px var(--marquee-outer-border-color),
      1px 0px var(--marquee-outer-border-color),
      1px 1px var(--marquee-outer-border-color),
      1px 2px var(--marquee-outer-border-color),
      2px -2px var(--marquee-outer-border-color),
      2px -1px var(--marquee-outer-border-color),
      2px 0px var(--marquee-outer-border-color),
      2px 1px var(--marquee-outer-border-color),
      2px 2px var(--marquee-outer-border-color);
  }
  .marquee--content {
    position: absolute;
    margin: 0;
    width: fit-content;
    /* max-width: 100%; */
    white-space: nowrap;
    text-indent: 724px;
  }
  .slideIn {
    animation: slideIn 2s forwards;
    animation-timing-function: ease;
    animation-delay: 0.5s;
  }
  .slideOut {
    animation: slideOut var(--slide-out-duration) forwards;
    animation-timing-function: linear;
  }
</style>
