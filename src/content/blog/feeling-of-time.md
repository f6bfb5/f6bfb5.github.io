---
title: "時間感"
date: 2023-10-08T09:56:00.000+08:00
summary: "把人生分割成五等分來想的「最近」或「以前」"
tags: ["F2E"]
---

<script>
	let nowYear = new Date().getFullYear();
	const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
	const yearArr = range(nowYear, 1976, -1);
	const ageArr = [10, 15, 20, 25, 30, 35, 40, 45, 50];
	const bgColorArr = ["b-purple", "b-cyan", "b-green", "b-orange", "b-red", "b-gray"];
	let option = 'event';
	let highlightedRow = 0, highlightedCol = 0;

    function highlightRowAndCol(event) {
	  const allCells = event.target.closest('table').querySelectorAll(`tr td`);
	  allCells.forEach(cell => cell.classList.remove('highlighted'));
	  const rowCells = event.target.parentElement.querySelectorAll('td');
      const colCells = event.target.closest('table').querySelectorAll(`tr td:nth-child(${event.target.cellIndex + 2})`);
      rowCells.forEach(cell => cell.classList.add('highlighted'));
	  if (highlightedCol !== 9) {
		colCells.forEach(cell => cell.classList.add('highlighted'));
	  }
	}

	// https://anond.hatelabo.jp/20230817095200
	const yearAnime = {
		2019: '<b style="color: #fe9619;">令和元年</b>',
		2018: '比宇宙更遠的地方',
		2017: '動物朋友',
		2014: '妖怪手錶',
		2013: '進擊的巨人',
		2012: '刀劍神域、少女與戰車',
		2011: '魔法少女小圓、Fate/Zero、我們仍未知道那天所看見的花名。',
		2009: 'K-ON！輕音部、化物語、科學超電磁砲',
		2008: 'TIGER×DRAGON！、夏目友人帳、魔法禁書目錄',
		2007: '幸運☆星、天元突破紅蓮螺巖、電腦線圈、向陽素描',
		2006: '涼宮春日的憂鬱、Code Geass 反叛的魯路修、暮蟬悲鳴時、零之使魔',
		2005: '交響詩篇艾蕾卡7、灼眼的夏娜',
		2004: '光之美少女、Keroro軍曹、琉球武士瘋雲錄',
		2003: '鋼之鍊金術師、惑星奇航',
		2002: '火影忍者、機動戰士鋼彈SEED、攻殼機動隊 STAND ALONE COMPLEX、笑園漫畫大王、星空的邂逅',
		2001: '神隱少女、棋靈王、網球王子',
		2000: '犬夜叉',
		1999: '數碼寶貝大冒險、海賊王、鈴鐺貓娘、小魔女DoReMi',
		1998: '庫洛魔法使、星際牛仔、頭文字D',
		1997: '寶可夢、少女革命',
		1996: '名偵探柯南、神劍闖江湖、妖精狩獵者',
		1995: '新世紀福音戰士、秀逗魔導士',
		1993: '灌籃高手、無責任艦長',
		1992: '美少女戰士、蠟筆小新、幽☆遊☆白書',
		1990: '櫻桃小丸子',
		1989: '<b style="color: #fe9619;">平成元年</b>、七龍珠Z',
		1988: 'AKIRA',
		1986: '天空之城',
		1979: '機動戰士鋼彈',
	};
	const yearEvent = {
		2024: '能登半島地震、大選年、花蓮地震、國會改革法案爭議',
		2023: 'Twitter更名、阿克薩洪水行動',
		2022: '俄羅斯入侵烏克蘭、寶可夢 朱／紫發售、孤獨搖滾！播出',
		2021: '川普支持者闖入國會、長賜輪擱淺、日本東奧、太魯閣號出軌、小玉換臉',
		2020: '<b>PlayStation 5發售</b>、英國正式脫歐、BLM、黎巴嫩大爆炸',
		2019: '<b style="color: #fe9619;">令和元年</b>、反送中遊行、反紅媒遊行、COVID-19爆發、寶可夢 劍／盾發售、寄生上流上映',
		2018: '花蓮強震、普悠瑪號出軌、法國黃背心',
		2017: '<b>任天堂Switch發售</b>、天堂文件、台灣同婚合法化、好萊塢性侵醜聞、齊柏林墜機逝世、林奕含之死',
		2016: '你的名字。上映、TikTok上線、寶可夢 太陽／月亮發售、烏龍派出所完結、絆愛開始活動、英國脫歐、巴拿馬文件',
		2015: '八仙塵爆、Discord發布、遠雄大巨蛋爭議、復興航空墜河、大寮監獄挾持事件、阿帕契、查理週刊槍擊案',
		2014: '太陽花學運、鄭捷事件、雨傘革命、俄羅斯併吞克里米亞、頂新黑心油案',
		2013: '<b>PlayStation 4發售</b>、小海女,半澤直樹播出、無名小站結束營運、寶可夢 X／Y發售',
		2012: 'SOPA法案撤回、東京晴空塔完工、林來瘋、Gangnam Style爆紅、習近平上任',
		2011: '東日本大震災、魔法少女小圓播出、<b>任天堂3DS發售</b>、LINE發布',
		2010: '阿拉伯之春、寶可夢 黑／白發售',
		2009: 'Minecraft發售、英雄聯盟推出、K-ON！輕音部播出',
		2008: '海角七號上映、女神異聞錄4發售、全球金融海嘯',
		2007: 'iPhone發售、次貸危機、初音未來發售',
		2006: '<b><img src="/images/Ps3_03_60gb.gif" alt="PlayStation 3" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />PlayStation 3,<img src="/images/Wii.gif" alt="Wii" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />Wii發售</b>、NicoNico動畫創立、Twitter創立、寶可夢 鑽石／珍珠發售、涼宮春日的憂鬱播出',
		2005: '電車男播出、YouTube創立',
		2004: '<b><img src="/images/Psp_b01.gif" alt="PlayStation Portable" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />PlayStation Portable,<img src="/images/NintendoDS_01.gif" alt="Nintendo DS" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />任天堂DS發售</b>、背水的逆轉劇、Facebook創立、台北101完工',
		2003: 'SARS爆發、伊拉克戰爭、Skype發布',
		2002: '寶可夢 紅寶石／藍寶石發售',
		2001: '911恐攻、神隱少女上映、<b><img src="/images/Gba02.gif" alt="Gameboy Advance" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />Gameboy Advance發售</b>、哈利波特上映、流星花園播出',
		2000: '<b><img src="/images/Ps2_03.gif" alt="PlayStation 2" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />PlayStation 2發售</b>、大逃殺上映、台灣首次政黨輪替、麻辣鮮師播出',
		1999: '駭客任務上映、寶可夢 金／銀發售、數碼寶貝大冒險播出、921地震、無名小站創立、中華電信推出ADSL、MSN Messenger發布',
		1998: '獵人開始連載、Google創立、Yahoo!奇摩即時通發布',
		1997: '鐵達尼號上映、FF7發售、ONE PIECE開始連載',
		1996: '寶可夢 紅／綠發售、台灣首次總統直選、巴哈姆特電玩資訊站創立、台海飛彈危機、ICQ發布、台灣首家網路咖啡廳開張',
		1995: '阪神大地震、地下鐵沙林事件、新世紀福音戰士播出、PTT創立',
		1994: '<b><img src="/images/Ps01.gif" alt="PlayStation 1" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />PlayStation 1發售</b>',
		1993: '侏儸紀公園上映',
		1992: '日本泡沫經濟破裂',
		1991: '蘇聯解體，冷戰結束',
		1990: '野百合學運、<b><img src="/images/Sfc_3.gif" alt="Super Famicom" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />Super Famicom發售</b>、迷宮傳奇播出、波斯灣戰爭',
		1989: '<b style="color: #fe9619;">平成元年</b>／<b><img src="/images/Gameboy05.gif" alt="Gameboy" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />Gameboy發售</b>、首個全球資訊網頁問世、無殼蝸牛運動、鄭南榕自焚、天安門事件、柏林圍牆倒塌',
		1988: 'AKIRA上映',
		1987: '台灣解嚴',
		1986: '天空之城上映、車諾比事件、哈雷彗星接近',
		1985: '回到未來上映、Windows發售',
		1984: '七龍珠開始連載',
		1983: '<b><img src="/images/Fc_03.gif" alt="Famicom" style="display: inline-block; margin-right: 2px; height: 1.3em; vertical-align: bottom;" />Famicom發售</b>',
		1979: '機動戰士鋼彈播出、美麗島事件',
		1977: '星際大戰上映',
		1976: '文化大革命結束、烏龍派出所開始連載',
	};
</script>

<h1 class="t-center">
  把人生分割成五等分來想的「最近」或「以前」
  <small><a href="https://twitter.com/niconicogalaxy/status/1307980102857191425">元ネタ</a></small>
</h1>

<p class="t-center">
  <span class="purple">■</span>＝最近、
  <span class="cyan">■</span>＝之前、
  <span class="green">■</span>＝以前、
  <span class="orange">■</span>＝曾經、
  <span class="red">■</span>＝從前、
	<span class="gray">■</span>＝古時
</p>

<div x-data class="grid">
<!-- <button x-on:click="option = 'anime'">Anime</button> -->
<table style="margin: 0 calc(50% - 45vw); background-color: #e5edc8; justify-self: center;">
  <thead>
    <tr>
      <th></th>
	  <template x-for="age in ageArr">
      <th x-text="age + '歲'"></th>
	  </template>
      <th>主要事件</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
	<template x-for="(year, row) in yearArr">
    <tr x-on:highlight="highlightedRow = $event.target.parentElement.rowIndex; highlightedCol = $event.target.cellIndex; highlightRowAndCol($event)">
      <td x-text="year"></td>
	  <template x-for="(age, col) in ageArr">
	    <td
		  class="t-center"
		  x-text="age - row > 0 ? age - row : ''"
		  x-bind:class="bgColorArr[Math.floor(Math.min((nowYear - year)*5 / age, 5))]"
		  x-on:mouseover="$dispatch('highlight', { row: highlightedRow, col: $event.target.cellIndex })"
		></td>
	  </template>
	  <td
	    x-html="option == 'event' ? yearEvent[year] ? yearEvent[year] : '' : yearAnime[year] ? yearAnime[year] : ''"
	    x-on:mouseover="$dispatch('highlight', { row: highlightedRow, col: $event.target.cellIndex })"
	  ></td>
      <td x-text="year"></td>
    </tr>
	</template>
  </tbody>
</table>
</div>

<style>
h1 small {
  font-size: 1rem;
}

table, th, td {
  border: 1px solid #333;
  padding: 0;
}
th, td:first-child, td:last-child {
  padding: 2px 4px;
  white-space: nowrap;
}

.t-center {
  text-align: center;
}
.purple {
  color: #ff00fe;
}
.b-purple {
  background-color: #ff00fe;
}
.cyan {
  color: #01fffe;
}
.b-cyan {
  background-color: #01fffe;
}
.green {
  color: #00ff01;
}
.b-green {
  background-color: #00ff01;
}
.orange {
  color: #fe9900;
}
.b-orange {
  background-color: #fe9900;
}
.red {
  color: #fe0000;
}
.b-red {
  background-color: #fe0000;
}
.gray {
  color: #434343;
}
.b-gray {
  background-color: #434343;
}
.highlighted {
  filter: brightness(75%) saturate(80%);
}
</style>
