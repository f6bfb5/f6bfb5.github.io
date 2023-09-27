---
title: "component-viewer.md"
date: 1969-07-21T02:56:00.000Z
summary: ""
tags: F2E
---

<script>
  import CircleBorder from "$lib/CircleBorder.svelte";
  import BalloonQuote from "$lib/BalloonQuote.svelte";
  import BalloonQuote2 from "$lib/BalloonQuote2.svelte";
  import AutomaticColorText from "$lib/AutomaticColorText.svelte";
  import BorderedText from "$lib/BorderedText.svelte";
</script>

### CircleBorder + BalloonQuote

<div style="display: flex; align-items: center; gap: 8px;">
  <div style="flex-grow: 1;">
    <CircleBorder text="</>" />
  </div>
  <div style="flex-grow: 1;">
    <BalloonQuote quote="淡漠、什麼精神官能症、各種障礙、非精神病性的繭居族、新型憂鬱症……社會總踩著「是你（無法適應者）的錯，是你很異常」的立場，對於我寫的這些內容，也會覺得非常悲慘吧（實際上在社會裡確實是悲慘的），但心理上（如果沒有旁人的說教或生活上的困頓）是比「以前」更加舒適，也不會再對將來感到不安。當然這不是克服了不安，只是連不安都被虛無吞噬了。在壓倒性的背反邏輯面前，「將來」或「問題」已失去了一切重要性。只剩下「夠了，我不做了」。不會有「我要活在當下！做我想做的事！」這種積極性，在「看見」之後，能做的只有認命。" />
  </div>
</div>

<div style="margin-top: 16px; display: flex; align-items: center; gap: 8px;">
  <div style="flex-grow: 1;">
    <BalloonQuote right quote="「啊」、「咦？」、「啥？」地回過神來、有了這種壓倒性的實際感受後，不論是進行埋洞作業的「精氣」，或是以自我肯定感（為了要（為了要（為了埋平坑洞的作業）而埋平坑洞的作業）而…）激勵自己「精氣」，都枯竭了。想要努力，身與心也提不出力。但也只是不再會有做「該做的事」需要的「精氣」，對於享受喜歡的事不會造成任何問題，「要理解那個就要先學這個」地累積也不會有什麼問題。簡單來說，活下去這件事不會有任何問題。所以說實話，我認為只是至今非法佔據著優先順位最上面的「該做的事＝填坑作業」，回到了原本的地方（地獄）去而已。" />
  </div>
  <div style="flex-grow: 1;">
    <CircleBorder image="https://i.imgur.com/qXRNc2f.png" borderColor="maroon" />
  </div>
</div>

### CircleBorder + BalloonQuote2

<div style="display: flex; align-items: flex-start; gap: 4px;">
  <div style="flex-grow: 1;">
    <CircleBorder size="50px" text="</>" />
  </div>
  <div style="flex-grow: 1;">
    <BalloonQuote2 quote="淡漠、什麼精神官能症、各種障礙、非精神病性的繭居族、新型憂鬱症……社會總踩著「是你（無法適應者）的錯，是你很異常」的立場，對於我寫的這些內容，也會覺得非常悲慘吧（實際上在社會裡確實是悲慘的），但心理上（如果沒有旁人的說教或生活上的困頓）是比「以前」更加舒適，也不會再對將來感到不安。當然這不是克服了不安，只是連不安都被虛無吞噬了。在壓倒性的背反邏輯面前，「將來」或「問題」已失去了一切重要性。只剩下「夠了，我不做了」。不會有「我要活在當下！做我想做的事！」這種積極性，在「看見」之後，能做的只有認命。" />
  </div>
</div>

<div style="margin-top: 16px; display: flex; align-items: flex-start; gap: 4px;">
  <div style="flex-grow: 1;">
    <BalloonQuote2 right quote="「啊」、「咦？」、「啥？」地回過神來、有了這種壓倒性的實際感受後，不論是進行埋洞作業的「精氣」，或是以自我肯定感（為了要（為了要（為了埋平坑洞的作業）而埋平坑洞的作業）而…）激勵自己「精氣」，都枯竭了。想要努力，身與心也提不出力。但也只是不再會有做「該做的事」需要的「精氣」，對於享受喜歡的事不會造成任何問題，「要理解那個就要先學這個」地累積也不會有什麼問題。簡單來說，活下去這件事不會有任何問題。所以說實話，我認為只是至今非法佔據著優先順位最上面的「該做的事＝填坑作業」，回到了原本的地方（地獄）去而已。" />
  </div>
  <div style="flex-grow: 1;">
    <CircleBorder size="50px" image="https://i.imgur.com/qXRNc2f.png" borderColor="maroon" />
  </div>
</div>

### AutomaticColorText

<AutomaticColorText backgroundColor="#00ff95" text="text" />

### BorderedText

<BorderedText />