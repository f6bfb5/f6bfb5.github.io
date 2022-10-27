---
title: "我的YouTube清單"
date: 2022-10-11T23:29:45.000Z
summary: "literally 清單"
tags:
---

<script>
  const categoryOptions = {
    'language': {
      name: "語言",
      bgColor: "#00cc99",
      textColor: "white",
    },
    'job': {
      name: "職業",
      bgColor: "#9900cc",
      textColor: "white",
    },
    'anime': {
      name: "動畫",
      bgColor: "#990033",
      textColor: "white",
    },
    'game': {
      name: "遊戲",
      bgColor: "#0066ff",
      textColor: "white",
    },
    'painting': {
      name: "作畫",
      bgColor: "#ffff66",
      textColor: "black",
    },
    'explaination': {
      name: "解說",
      bgColor: "#ff9900",
      textColor: "black",
    },
    'creation': {
      name: "創作",
      bgColor: "white",
      textColor: "black",
    },
    'life': {
      name: "生活",
      bgColor: "#999999",
      textColor: "white",
    }
  };
  const languageOptions = {
    'jpn': '日',
    'eng': '英',
    'cht': '中',
  };
  let filterOption = {
    category: 'all',
    lang: 'all',
    isSortedByCategory: true,
  }
  const channelsData = [
    {
      name: "ゆる言語学ラジオ",
      url: "https://www.youtube.com/channel/UCmpkIzF3xFzhPez7gXOyhVg",
      category: categoryOptions['language'],
      language: languageOptions['jpn'],
      description: "以電台節目的形式輕鬆閒聊各種語言主題內容。",
      videoId: "yzTqAU_kiKM",
      addedDate: "221011",
    },
    {
      name: "なむ",
      url: "https://www.youtube.com/channel/UCCj7tBSvrrG8_aErflpNgyQ",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description:
        "「遊戲散步」會依據遊戲種類或內容，找來不同領域的專家，一同談論遊戲裡的各種內容。日後轉為由<a href='https://www.youtube.com/user/gotouchi10sec/videos' rel='noreferrer noopener' target='_blank'>livedoor NEWS</a>擴大發展。早期なむ頻道的《死亡擱淺》步荷到後期livedoor NEWS頻道的三國志歷史都相當有趣。",
      videoId: "B8iqcLckSgI",
      addedDate: "221011",
    },
    {
      name: "ことラボ",
      url: "https://www.youtube.com/channel/UCYnZM101sbjg7ujmBrj4Ipg",
      category: categoryOptions['language'],
      language: languageOptions['jpn'],
      description: "探究語言的不可思議之處。",
      videoId: "ICoLPKN08EE",
      addedDate: "221011",
    },
    {
      name: "ありがひとし作画ch",
      url: "https://www.youtube.com/user/ArigaHitoshi",
      category: categoryOptions['painting'],
      language: languageOptions['jpn'],
      description:
        "曾經手《洛克人進行曲》系列漫畫、《寶可夢X・Y》與後續系列的寶可夢設計的有賀等的作畫頻道。",
      videoId: "xsmtbAXjX8k",
      addedDate: "221011",
    },
    {
      name: "RCAnime",
      url: "https://www.youtube.com/user/RCAnimes",
      category: categoryOptions['anime'],
      language: languageOptions['eng'],
      description:
        "從建築、音響、背景美術、運鏡到角色設計，雖然並不能說講得相當深入，但範疇確實相當廣泛的動畫評論頻道。",
      videoId: "-aChpK2jcnQ",
      addedDate: "221011",
    },
    {
      name: "shu3",
      url: "https://www.youtube.com/channel/UCO-n0T-9rJ4f6smFPK3vFiQ",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description: "超時空之鑰版的十里坡劍神、只用帕青哥賺來的錢當上寶可夢大師、單用一隻史來姆拯救DQ5的世界、只用一個Lv1角色打敗所有FF7隱藏頭目…各種看似破天荒的目標，shu3運用了簡潔易懂的圖文與片段為觀眾講解闡明背後機制，以及堅毅不拔的恆心，投注數百甚至到數千小時才完成的挑戰都有，片片精彩片片好看。",
      videoId: "aPhPKv9mV30",
      addedDate: "221011",
    },
    {
      name: "jitensya37",
      url: "https://www.youtube.com/c/jitensya37",
      category: categoryOptions['explaination'],
      language: languageOptions['jpn'],
      description: "實際走訪各種日本道路，並搭配地圖解說歷史變化。",
      videoId: "wdRlS46X7dc",
      addedDate: "221011",
    },
    {
      name: "Every Frame a Painting",
      url: "https://www.youtube.com/c/everyframeapainting",
      category: categoryOptions['anime'],
      language: languageOptions['eng'],
      description: "老牌的影評頻道，他們的<a href='https://brettlin-78528.medium.com/every-frame-a-painting-%E5%91%8A%E5%88%A5%E5%BF%83%E5%BE%97%E6%84%9F%E8%A8%80-%E4%B8%AD%E6%96%87%E7%BF%BB%E8%AD%AF-c46ade3e93db' rel='noreferrer noopener' target='_blank'>告別心得感言</a>也相當值得一看。",
      videoId: "oz49vQwSoTE",
      addedDate: "221011",
    },
    {
      name: "AKIHITO YOSHITOMI",
      url: "https://www.youtube.com/channel/UCeySBnV71dyC-gwqapq9NwQ",
      category: categoryOptions['painting'],
      language: languageOptions['jpn'],
      description: "《螺絲俠》作者吉富昭仁的作畫頻道。",
      videoId: "dSf0UYDi9sA",
      addedDate: "221011",
    },
    {
      name: "GrumpyJiisan",
      url: "https://www.youtube.com/user/GrumpyJiisan",
      category: categoryOptions['anime'],
      language: languageOptions['eng'],
      description: "自2007年起就在YouTube上傳動畫評論影片，由於居住在亞利桑那州，日本觀眾稱呼他為「亞利桑那的老人」，並有熱心網友協助翻譯成日文：<a href='https://www.youtube.com/user/MrKyoujun2010' rel='noreferrer noopener' target='_blank'>MrKyoujun2010</a>。接觸的作品相當廣泛，從人氣的《涼宮春日的憂鬱》、《天元突破》到冷僻的《惑星奇航》、《電腦線圈》都有評論，對於故事劇情的掌握度相當高，也會談及製作人員的資料，很可惜在2011年年中之後就音訊全無，至今仍然不曉得這位老人的去向。",
      videoId: "PoXlh7PovVs",
      addedDate: "221011",
    },
    {
      name: "ゲーム夜話",
      url: "https://www.youtube.com/channel/UC-HNwUxGklhKSe67EitgqgA",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description: "「大人認真地用影片談論大人製作的遊戲」，遊戲夜話會從遊戲歷史與製作背景談起，之後切入遊戲內容與故事主題或機制設計，即使是乍看之下覺得理所當然的地方，也能在遊戲夜話仔細談論後有更深的體會。",
      videoId: "-ddHV6Wua9E",
      addedDate: "221011",
    },
    {
      name: "テレビ朝日映像撮影部",
      url: "https://www.youtube.com/channel/UC6Bb0qmxNbgAIS33JpQBUgQ",
      category: categoryOptions['job'],
      language: languageOptions['jpn'],
      description: "現職朝日電視台的攝影師分享攝影技巧、電視幕後秘辛。",
      videoId: "LuHRt49iQl4",
      addedDate: "221011",
    },
    {
      name: "yoshitoshi ABe's room.",
      url: "https://www.youtube.com/user/abflygm",
      category: categoryOptions['painting'],
      language: languageOptions['jpn'],
      description: "經手《Serial Experiments Lain》角色設計、《灰羽連盟》原作與腳本的安倍吉俊的作畫頻道。",
      videoId: "SgdXPUPd1YM",
      addedDate: "221011",
    },
    {
      name: "大工の正やんShoyan",
      url: "https://www.youtube.com/channel/UCdrVc2ByfvnNW14R6o_WpkA",
      category: categoryOptions['job'],
      language: languageOptions['jpn'],
      description: "從事50年木工的現職木匠分享木工相關知識。",
      videoId: "VBtczVLW8XA",
      addedDate: "221011",
    },
    {
      name: "内藤かんチャン",
      url: "https://www.youtube.com/channel/UCoqlPbFmBltcQjWxW0KPuBg",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description: "《勇者鬥惡龍3》與《勇者鬥惡龍4》的主要程式設計師內藤寬分享當時的製作秘辛，以及搭配相關工具，解析各種bug背後的發生原因。",
      videoId: "OE6K0kx3Z7g",
      addedDate: "221011",
    },
    {
      name: "会社を辞めてNinja250で日本一周",
      url: "https://www.youtube.com/user/peten456",
      category: categoryOptions['life'],
      language: languageOptions['jpn'],
      description: "辭職後騎著Ninja250環遊日本一圈，內容密度相當高，除了各地景點和歷史解說，也有許多動畫漫畫梗，定期更換的高品質片頭影片也很值得一看。",
      videoId: "Y-bm8jsC9BE",
      addedDate: "221011",
    },
    {
      name: "低分少年 Low Score Boy",
      url: "https://www.youtube.com/user/lowscoreboy",
      category: categoryOptions['game'],
      language: languageOptions['cht'],
      description: "以老遊戲相關內容為主，大多解說主機硬體或遊戲機制的頻道。",
      videoId: "eZDQO_9GEVM",
      addedDate: "221011",
    },
    {
      name: "京都はんなりチャンネル",
      url: "https://www.youtube.com/user/masaomi7894",
      category: categoryOptions['job'],
      language: languageOptions['jpn'],
      description: "京都的舊車零件、維修商齋藤商會的日常紀錄，除了復舊紀錄與產品介紹外，與業界人士的對談也相當有趣。",
      videoId: "kXvn7D_IGwo",
      addedDate: "221011",
    },
    {
      name: "岡本吉起 ゲームch",
      url: "https://www.youtube.com/channel/UCjuSyACqtoJEm3A1X87Zi6Q",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description: "曾任卡普空的東京開發室負責人，經手過《快打旋風2》、《怪物彈珠》等作製作的岡本吉起，從開發內幕到疑問解答，最近也與《星之卡比》發案人櫻井政博對談，對老遊戲愛好者而言可說是不能錯過的頻道。",
      videoId: "gkMDT5dQJeg",
      addedDate: "221011",
    },
    {
      name: "山口つばさの遊び場",
      url: "https://www.youtube.com/channel/UC_I0zTgZqix95l63q3dBMKg",
      category: categoryOptions['painting'],
      language: languageOptions['jpn'],
      description: "《藍色時期》作者山口翼的作畫頻道。",
      videoId: "-HeAjYI8Juo",
      addedDate: "221011",
    },
    {
      name: "Soichi Noguchi",
      url: "https://www.youtube.com/user/astrosoichi",
      category: categoryOptions['job'],
      language: languageOptions['jpn'],
      description: "曾於2020年搭乘SpaceX的日本太空人野口聰一的宇宙生活紀錄頻道。",
      videoId: "J9-Mu22EuCc",
      addedDate: "221011",
    },
    {
      name: "SkyCorp Home Video",
      url: "https://www.youtube.com/channel/UCIoDNWuAq3wPv11BXbr5xMg",
      category: categoryOptions['creation'],
      language: languageOptions['eng'],
      description: "80年代的美國教育與廣告影片的戲仿頻道。",
      videoId: "CbZ_O5Y9pgg",
      addedDate: "221011",
    },
    {
      name: "Shingo Tamagawa",
      url: "https://www.youtube.com/channel/UCu0Ynxpk6fQFJ_HSnWYLmDw",
      category: categoryOptions['anime'],
      language: languageOptions['jpn'],
      description: "以極為精緻的《PUPARIA》打響名號的玉川真吾的頻道。",
      videoId: "CWnqX41JHuM",
      addedDate: "221011",
    },
    {
      name: "4096",
      url: "https://www.youtube.com/channel/UCTH6s1SMIQicvyd8OLBYMtQ",
      category: categoryOptions['creation'],
      language: languageOptions['eng'],
      description:
        "運用非常巧妙的轉場手法，呈現各種主題（影音平台、第一人稱射擊、攝影品牌、遊戲主機…）的演變進化經歷。",
      videoId: "e9DfSCk-6Ko",
      addedDate: "221011",
    },
    {
      name: "片付けトントン",
      url: "https://www.youtube.com/channel/UCx9u_-L46feayiuj7wb7-bQ",
      category: categoryOptions['job'],
      language: languageOptions['jpn'],
      description: "愛知縣的住居整理公司片付けトントン的工作紀錄頻道，就各種意義上來說都相當有衝擊性。",
      videoId: "lwZ_7jhxZMI",
      addedDate: "221011",
    },
    {
      name: "Yuki in Ancient Egypt",
      url: "https://www.youtube.com/channel/UCdB2b2qy6kFGZiXbFsS4QNw",
      category: categoryOptions['job'],
      language: languageOptions['jpn'],
      description: "埃及考古學家河江肖剩分享關於埃及的各種知識與現地的實際考古經驗。",
      videoId: "eCWJnqCOWq4",
      addedDate: "221011",
    },
    {
      name: "歪理邪说",
      url: "https://www.youtube.com/channel/UCUTs-xnvj7o-wXuU4VHWgaQ",
      category: categoryOptions['explaination'],
      language: languageOptions['cht'],
      description: "以科技和網路相關內容為主，從過去的網路應用重新審視今日的技術發展相當有趣。",
      videoId: "E4Z3c4mvSgM",
      addedDate: "221011",
    },
    {
      name: "有隣堂しか知らない世界",
      url: "https://www.youtube.com/channel/UCmKlo3BXt60nzgk2r_JgvwQ",
      category: categoryOptions['life'],
      language: languageOptions['jpn'],
      description: "於神奈川、東京、千葉都有展店的書店有隣堂的頻道，以文具、書籍介紹與業界對談為主，偶爾會有像「將J-POP翻成古文重唱」、「徘徊於夜晚的書店」或食物介紹等比較特別的內容。",
      videoId: "BanYVWRVZ90",
      addedDate: "221011",
    },
    {
      name: "The Voice of Shadow 〜JAPAN DEEP documentary〜",
      url: "https://www.youtube.com/channel/UCkw_ybvh0ECxp4Vn1ewK2mg",
      category: categoryOptions['explaination'],
      language: languageOptions['jpn'],
      description: "從不同觀點探討日本較為敏感的議題。",
      videoId: "lX0p_Els5Rw",
      addedDate: "221011",
    },
    {
      name: "まだら牛",
      url: "https://www.youtube.com/channel/UCPox1SfaUhAXaY6WqHi38kQ",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description: "TRPG《狂氣山脈》的製作人，除了主持TRPG之外，也有如與遊戲散步合作的登山關聯影片。",
      videoId: "BIcG2ULJ0ts",
      addedDate: "221011",
    },
    {
      name: "ときどチャンネル / Tokido",
      url: "https://www.youtube.com/channel/UCLN8AGZFd8BxGr3kx1r-dbg",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description: "職業格鬥遊戲玩家Tokido的頻道。除了遊戲影片之外，也有器材評測、活動紀實與跨界對談等不同內容。",
      videoId: "Ii6Bo4WZnCo",
      addedDate: "221011",
    },
    {
      name: "桜井政博のゲーム作るには",
      url: "https://www.youtube.com/c/sora_sakurai_jp",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description:
        "以《星之卡比》、《任天堂明星大亂鬥》聞名的遊戲設計師、總監櫻井政博為了促進遊戲業界成長而開設的遊戲製作知識頻道，內容簡潔明瞭而不失深度，即使不是業界人士或想投身遊戲創作的人，也能藉此一窺幕後人士的想法與觀點。",
      videoId: "i4v8X-lfX5o",
      addedDate: "221011",
    },
    {
      name: "地理の雑学ゆっくり解説",
      url: "https://www.youtube.com/c/%E5%9C%B0%E7%90%86%E3%81%AE%E9%9B%91%E5%AD%A6-%E3%82%86%E3%81%A3%E3%81%8F%E3%82%8A%E8%A7%A3%E8%AA%AC2020",
      category: categoryOptions['explaination'],
      language: languageOptions['jpn'],
      description:
        "以高中到大學程度的地理為主的解說頻道，饅饅來的對話形式讓內容變得相當有趣，各種主題像「氣候雨林與人類的時間概念」、「讓世界看起來變大的麥卡托投影法」、「掌握稀金屬的中國逆襲地政學」也可說與生活息息相關。",
      videoId: "vvV5sz597JY",
      addedDate: "221011",
    },
    {
      name: "4ST",
      url: "https://www.youtube.com/c/4STUDIO",
      category: categoryOptions['game'],
      language: languageOptions['jpn'],
      description:
        "以紅白機為主的遊戲與製作人員的都市傳說考察和檢證。",
      videoId: "xoe9yWfjTzU",
      addedDate: "221026",
    },
  ];

  $: filteredChannelsData = channelsData
    .filter(d => 
      filterOption.category === 'all' ? true : filterOption.category === d.category.name
    )
    .filter(d => 
      filterOption.lang === 'all' ? true : filterOption.lang === d.language
    )
    .sort((a, b) => 
      filterOption.isSortedByCategory ? b.category.name.localeCompare(a.category.name) : true
    );
</script>

<div style="display: flex; align-items: center;">
  <span style="margin-right: .25em; padding: .5em;
    border: 1px solid black; background-color: #fafafa;">類別</span>
  <div style="display: flex; align-items: center;">
    <input type="radio" id="c-all" name="category" value="all"
             bind:group={filterOption.category}
             checked style="margin-top: 0; margin-bottom: 0">
    <label for="c-all" style="user-select: none;">All</label>
  </div>
  {#each Object.values(categoryOptions) as c_item}
  <div style="display: flex; align-items: center;">
    <input type="radio" id="{c_item.name}" name="category" value="{c_item.name}"
             bind:group={filterOption.category}
             style="margin-top: 0; margin-bottom: 0">
    <label for="{c_item.name}" style="user-select: none;">{c_item.name}</label>
  </div>
  {/each}
</div>

<div style="margin-top: .5em; display: flex; align-items: center;">
  <span style="margin-right: .25em; padding: .5em;
    border: 1px solid black; background-color: #fafafa;">語言</span>
  <div style="display: flex; align-items: center;">
    <input type="radio" id="l-all" name="language" value="all"
             bind:group={filterOption.lang}
             checked style="margin-top: 0; margin-bottom: 0">
    <label for="l-all" style="user-select: none;">All</label>
  </div>
  {#each Object.values(languageOptions) as l}
  <div style="display: flex; align-items: center;">
    <input type="radio" id="{l}" name="language" value="{l}"
             bind:group={filterOption.lang}
             checked style="margin-top: 0; margin-bottom: 0">
    <label for="{l}" style="user-select: none;">{l}</label>
  </div>
  {/each}
</div>

<div style="margin-top: .5em; display: flex; align-items: center;">
  <span style="margin-right: .25em; padding: .5em;
    border: 1px solid black; background-color: #fafafa;">其他</span>
  <div style="display: flex; align-items: center;">
    <input type="checkbox" id="huey" name="language" bind:checked={filterOption.isSortedByCategory} 
             style="margin-top: 0; margin-bottom: 0;">
    <label for="huey" style="user-select: none;">依照類別排序</label>
  </div>
</div>

<div>
  {#each filteredChannelsData as channelData}
    <div style="margin-top: 1em; border: 1px solid black; background-color: #fafafa;">
      <div style="display: flex;">
        <div style="padding: 1em; border-bottom: 1px solid black; background-color: {channelData.category.bgColor}; color: {channelData.category.textColor};
          display: flex; align-items: center; white-space: nowrap;">
          {channelData.category.name}
        </div>
        <div style="padding: 1em; flex-grow: 1; text-align: left; border-left: 1px solid black; border-bottom: 1px solid black;
          text-decoration: underline; text-decoration-thickness: 0.1em; text-underline-position: under;">
          <a href={channelData.url} rel="noreferrer noopener" target="_blank" style="color: #c05b4d;">
            {channelData.name}
          </a>
        </div>
        <div style="padding: 1em; border-left: 1px solid black; border-bottom: 1px solid black;
          display: flex; align-items: center; white-space: nowrap;">
          {channelData.language}
        </div>
        <div style="padding: 1em; border-left: 1px solid black; border-bottom: 1px solid black;
          display: flex; align-items: center; white-space: nowrap;">
          {channelData.addedDate}
        </div>
      </div>
      <div style="display: flex;">
        <div style="flex-basis: 120px; flex-shrink: 0; display: table;">
          <div style="display: table-cell; vertical-align: middle; background-color: #ccc;">
            <!-- https://yt-thumb.canbeuseful.com/en -->
            <img src="http://img.youtube.com/vi/{channelData.videoId}/mqdefault.jpg" style="margin: 0;" />
          </div>
        </div>
        <p style="padding: 1em; flex-grow: 1; text-align: left; border-left: 1px solid black;">
          {@html channelData.description}
        </p>
      </div>
    </div>
  {/each}
</div>
