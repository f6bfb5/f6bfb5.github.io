---
title: "《片道勇者》全成就之路"
date: 2022-08-19T20:00:27.000+08:00
summary: "雖然還是沒拿完全成就。"
tags: ["ACG", "Game"]
---

<style scoped>
  tr td:first-child {
    word-break: keep-all;
    white-space: nowrap;
  }
  .achievement-container {
    display: flex;
    flex-direction: column;
    padding: 4px;
    border: 1px solid black;
    background: white;
    border-radius: 4px;
  }  
  .achievement-item {
    padding: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .achievement-item:nth-child(2n+1) {
    background: #eee;
  }
  .achievement-item--image {
    margin: 0;
    max-width: 2em;
  }

  .filter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .filter-container input {
    margin: 0;
    margin-right: 4px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .text-title {
    font-size: 1.5em;
  }
</style>

<iframe src="https://store.steampowered.com/widget/266210/" title="one way heroics steam shop" frameborder="0" width="646" height="190" style="height: 190px;"></iframe>

- 內容主要參考以下資料：
  - [片道勇者（英名：One Way Heroics）実績コンプ ①](https://sds-page.hateblo.jp/entry/2015/11/15/114417)
    - [片道勇者（英名：One Way Heroics）実績コンプ ②](https://sds-page.hateblo.jp/entry/2015/11/15/192713)
    - [片道勇者（英名：One Way Heroics）実績コンプ ③](https://sds-page.hateblo.jp/entry/2015/11/21/202155)
  - [隠し要素 - 片道勇者プラス攻略 wiki](https://web.archive.org/web/20171202123441/http://katamichiplus.wiki.fc2.com/wiki/%E9%9A%A0%E3%81%97%E8%A6%81%E7%B4%A0)
    - [隠し要素 - 片道勇者 非公式攻略 wiki](https://katamichihero.wiki.fc2.com/wiki/%E9%9A%A0%E3%81%97%E8%A6%81%E7%B4%A0)
  - [片道勇者プラス人早マニア攻略解説 wiki](https://katamichimania.wiki.fc2.com/)

## __成就一覽（WIP）__

<div style="margin: .5em auto 1em; padding: 4px 2px; width: fit-content; transform: skewX(-10deg); font-size: 2em; color: white; background: black;">以下內容含有劇情透露</div>

<div x-data>
<button x-on:click="() => {
  isTasksDoneArr = '[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,false,false,false,true,true,false,false,false,false,false,false]';
  newTasksDoneArrHandler();
}">My progress</button>

<div class="achievement-container">
  <div class="filter-container">
    <input type="text"
      x-bind:value="isTasksDoneArr"
      x-on:change="newTasksDoneArrHandler" />
    <div style="display: flex;">
      <input type="checkbox" id="sortedByFinished"
        x-bind:checked="sortedByFinished" />
      <label for="sortedByFinished">Move finished to bottom</label>
    </div>
  </div>
    <template
      x-for="(achievement, i) in achievementData"
    >
      <div class="achievement-item"
        x-bind:style="achievement.isDone && sortedByFinished && { 'order: 2; opacity: .5;' }"
        >
        <input type="checkbox"
          x-bind:checked="achievement.isDone"
          x-on:change="() => taskDoneHandler(i)" />
        <img class="achievement-item--image"
          x-bind:src="achievement.image"
          x-bind:alt="achievement.title">
        <div class="text-container">
          <span class="text-title" x-text="achievement.title"></span>
          <span x-text="achievement.description"></span>
        </div>
      </div>
    </template>
</div>
</div>

<script>
  const achievementData = [
    {
        "title": "生きる資質",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/271701d5b280c556044bf3484345aab4d36fba71.jpg",
        "description": "生存至第 3 天開始",
        "isDone": false
    },
    {
        "title": "闇の中へ",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/d4a4da8b5dc15ee97524e50343a656bc37df59bf.jpg",
        "description": "被黑暗吞噬",
        "isDone": false
    },
    {
        "title": "初めての次元倉庫",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/74940484ff843342c4c298a727abae73274d3653.jpg",
        "description": "擴充次元倉庫",
        "isDone": false
    },
    {
        "title": "初めての狩り",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/4af27753561259e01b4456e5fbd2d09e98b1bf7a.jpg",
        "description": "解鎖「獵人」職階",
        "isDone": false
    },
    {
        "title": "一流と呼べる者",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/0c6e07c7fd0e6c4290f870703b217d7f32221446.jpg",
        "description": "冒險結束時總和勇者等級達到 50 以上",
        "isDone": false
    },
    {
        "title": "初めての特徴",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/ec5a5fb3eca014dbed415197674487af003fc28b.jpg",
        "description": "取得新的特徵",
        "isDone": false
    },
    {
        "title": "まだ負けない",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/e0c02726d8f2a47b4140ad145bbdc7c400160d66.jpg",
        "description": "到達超過 100 公尺 3 次以上",
        "isDone": false
    },
    {
        "title": "妖精やめよっかな……",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/9eea6fd3ffa0636b85524690019b020aef57a082.jpg",
        "description": "被伊莉絲鬧脾氣",
        "isDone": false
    },
    {
        "title": "初めてのお宝",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/efbaf5212e19b5070af4fb5d9dcdd3f24a057c5a.jpg",
        "description": "解鎖「冒險者」職階",
        "isDone": false
    },
    {
        "title": "果たされた使命",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/b089747d7e5a2bf733b149de756e3e825f91a8a6.jpg",
        "description": "打倒「魔王」通關",
        "isDone": false
    },
    {
        "title": "やさしい旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/c5465d42c9cca809f6e9e0ddd9f9d78848a4da87.jpg",
        "description": "通關「輕鬆旅程」難度",
        "isDone": false
    },
    {
        "title": "初めての理力",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/9515d04ff651d4e39c7218da9f77eb2c0acb3ee4.jpg",
        "description": "解鎖「理術士」職階",
        "isDone": false
    },
    {
        "title": "初めての闇",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/36b0fd603834863767e483250170dd8d9f47775f.jpg",
        "description": "解鎖「海賊」職階",
        "isDone": false
    },
    {
        "title": "君こそ英雄だ",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/e806dbc399255a8a1ca72bedabdf96ab8a13fb11.jpg",
        "description": "冒險結束時總和勇者等級達到 100 以上",
        "isDone": false
    },
    {
        "title": "もっと力を",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/20ce05d98992c1fe29ee1f5ae39a715f4e97e5da.jpg",
        "description": "到達超過 300 公尺 3 次以上",
        "isDone": false
    },
    {
        "title": "初めての仲間",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/7d8852adce1c2bc3c965cd918d4812a76aa6040b.jpg",
        "description": "解鎖「詩人」職階",
        "isDone": false
    },
    {
        "title": "我は世界の盾",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/472a008610fbfdb563168c7f3975d5f05aab3c63.jpg",
        "description": "解鎖「騎士」職階",
        "isDone": false
    },
    {
        "title": "我が剣こそ最強",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/f3f509794d0d9b138fad20fd2cf6d17de7082bf4.jpg",
        "description": "解鎖「劍士」職階",
        "isDone": false
    },
    {
        "title": "勇気の証",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/d496c3d751c96a4c2c3f4b730ab28cd1ef66ad45.jpg",
        "description": "解鎖「勇者」職階",
        "isDone": false
    },
    {
        "title": "本当のやさしい旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/734e99baba0d1aac77dff9ccf91486c6324e3f69.jpg",
        "description": "不使用次元倉庫通關「輕鬆旅程」難度",
        "isDone": false
    },
    {
        "title": "普通の旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/0687f548d3576baea403c44d68d7159ab3816225.jpg",
        "description": "通關「普通旅程」難度",
        "isDone": false
    },
    {
        "title": "海賊だって救世主",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/a6800825c5607efb8527b8d1f252cc799cfe07d5.jpg",
        "description": "使用「海賊」職階通關",
        "isDone": false
    },
    {
        "title": "君は伝説になった",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/e1d5be49a68a2f2b5c365737f8abbd15677fbc03.jpg",
        "description": "冒險結束時總和勇者等級達到 200 以上",
        "isDone": false
    },
    {
        "title": "初めての改築",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/0527a4435bed4ce81992829a9045375f972cab35.jpg",
        "description": "於城堡裡配置居民",
        "isDone": false
    },
    {
        "title": "敵に背中は見せない",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/393312a0af31beff10e62681e63b9545402bb4aa.jpg",
        "description": "使用「勇者」職階通關",
        "isDone": false
    },
    {
        "title": "狩りこそ我が仕事",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/ea0baa6d0dbf8c94a0b53e0bf0a219b564b3e45c.jpg",
        "description": "使用「獵人」職階通關",
        "isDone": false
    },
    {
        "title": "宝探しのついでに",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/53f4a4e6790ce5991338fad674ba757101018ef5.jpg",
        "description": "使用「冒險者」職階通關",
        "isDone": false
    },
    {
        "title": "禁断の魔法",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/22826f5b317acab77fa2ce51c283346487df4333.jpg",
        "description": "使用只有勇者才能使用的禁忌魔法",
        "isDone": false
    },
    {
        "title": "歌は世界を救う",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/d5344308bd7ea8581e885b17423d7fa5e6e35fc6.jpg",
        "description": "使用「詩人」職階通關",
        "isDone": false
    },
    {
        "title": "本当の普通の旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/070e977b4ea57888cf2cbcf48f077cd4cd202711.jpg",
        "description": "不使用次元倉庫通關「普通旅程」難度",
        "isDone": false
    },
    {
        "title": "とどろけ我が理力",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/6376887b6345aaed2dff38e6e53bd31de5adf295.jpg",
        "description": "使用「理術士」職階通關",
        "isDone": false
    },
    {
        "title": "厳しい旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/350d85187d14782528578e63e26387da0b785a34.jpg",
        "description": "通關「艱困旅程」難度",
        "isDone": false
    },
    {
        "title": "世界の果てへ",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/f89794358376ad802691679923b9649b71136d3d.jpg",
        "description": "抵達世界盡頭通關",
        "isDone": false
    },
    {
        "title": "世界の秘密",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/e1c0d9ed9c5c0f0044e73d82bb6c9cffe40be4ae.jpg",
        "description": "和魔王對話",
        "isDone": false
    },
    {
        "title": "また巡り会いたい",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/253037c517557f72e378a832fb1704abb376d062.jpg",
        "description": "解鎖夥伴「フリーダ王女」的劇情",
        "isDone": false
    },
    {
        "title": "魂の解放",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/9cc8e4b4e8e37dcd022386b5fc192cf3c6c444be.jpg",
        "description": "解鎖「理騎士」職階",
        "isDone": false
    },
    {
        "title": "本当の厳しい旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/dc892d11cfd49f9acb0f9b8affca09e96b7a968f.jpg",
        "description": "不使用次元倉庫通關「艱困旅程」",
        "isDone": false
    },
    {
        "title": "ずっと一緒",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/f1b520305699b97440cede8beb9e2b65f09d2628.jpg",
        "description": "解鎖夥伴「ネムリ」的劇情",
        "isDone": false
    },
    {
        "title": "忍びの秘儀",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/e1d3643e078d35337a34377b6b1975329bd5d2c7.jpg",
        "description": "解鎖「忍者」職階",
        "isDone": false
    },
    {
        "title": "真の敵",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/31cc9e44daf029df35815908df068c71b6e197e5.jpg",
        "description": "打倒「闇」通關",
        "isDone": false
    },
    {
        "title": "剣に宿りし理力の光",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/a341a339bac251174c5f66e5cb8be03df1362db8.jpg",
        "description": "使用「理騎士」職階通關",
        "isDone": false
    },
    {
        "title": "残された謎",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/22f8ff6e48d270f5eea9c81aa002b65c71ca5b42.jpg",
        "description": "解鎖夥伴「ヴィクター王」的劇情",
        "isDone": false
    },
    {
        "title": "白紙の旅行記",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/5cd1b3ea711544b61ade8c2acada5c677adde9f9.jpg",
        "description": "解鎖「觀光客」職階",
        "isDone": false
    },
    {
        "title": "傭兵の故郷へ",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/d002bff2589f8f6195c529e8308c0f223c61e5d8.jpg",
        "description": "解鎖夥伴「傭兵パンティ」的劇情",
        "isDone": false
    },
    {
        "title": "片道マニア",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/dcbd3325099db75cb5424788b5ea51950fafb8dd.jpg",
        "description": "通關狂熱者模式",
        "isDone": false
    },
    {
        "title": "人類には早すぎる",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/f344b92d72ec2d39575f39dcb378e3c265fba7c9.jpg",
        "description": "通關「對人類來說還太早了」難度",
        "isDone": false
    },
    {
        "title": "我こそ影の暗殺者",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/dcc0b386d8584bf6cf4b14c0b7d09da0c26ef04d.jpg",
        "description": "使用「忍者」職階通關",
        "isDone": false
    },
    {
        "title": "不思議な旅",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/a6ca13a81f1c90baa8cbafb01f717727a5133427.jpg",
        "description": "解鎖夥伴「魔王」的劇情",
        "isDone": false
    },
    {
        "title": "本当に人類には早すぎる",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/56bb05d3bcf8b2401ab79a5de021b3b4b361ca34.jpg",
        "description": "不使用次元倉庫通關「對人類來說還太早了」難度",
        "isDone": false
    },
    {
        "title": "魂だけの騎士",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/2e366a7a7c51faa00aa62370efb09add254b7fa2.jpg",
        "description": "解鎖夥伴「デュークガルツ」的劇情",
        "isDone": false
    },
    {
        "title": "楽しい旅行",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/37f4c0f29ac41a59178c7ba0e3ae8a2727f53132.jpg",
        "description": "使用「觀光客」職階通關",
        "isDone": false
    },
    {
        "title": "少女と共に",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/83dd034ef507a056d2be45932eb30ca7a037b74f.jpg",
        "description": "解鎖夥伴「ミラ」的劇情",
        "isDone": false
    },
    {
        "title": "食事に釣られて",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/923e01a535b19aa2cd2ebb4d815f968526d5b44c.jpg",
        "description": "解鎖夥伴「アルバート」的劇情",
        "isDone": false
    },
    {
        "title": "次元の支配者",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/932372150ccb6038987b3f38885273f731a808f8.jpg",
        "description": "打倒「次元的支配者」通關",
        "isDone": false
    },
    {
        "title": "完全なる知識",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/34b717fd6fd4be92fa4bc83ac66a1095b733f894.jpg",
        "description": "完成旅行記錄後通關",
        "isDone": false
    },
    {
        "title": "次元の果てへ",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/b6c33c5e96992e44e01f1c41c709cdff034846d0.jpg",
        "description": "抵達次元迴廊的盡頭通關",
        "isDone": false
    },
    {
        "title": "払われた闇",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/3a9f1d82d0ba9832ed011a504b03c956ca13fa11.jpg",
        "description": "解鎖夥伴「ネムリ」的隱藏劇情",
        "isDone": false
    },
    {
        "title": "冒険の完遂",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/d1db5d001c708047e41763fb2730b9d8aaa30f94.jpg",
        "description": "達成度達到 100%",
        "isDone": false
    },
    {
        "title": "全ての物語",
        "image": "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/266210/1aac19c899cfb98c680fb59fefdefac839473af1.jpg",
        "description": "解鎖所有劇情",
        "isDone": false
    }
  ];

  let sortedByFinished = true;
  let isTasksDoneArr = JSON.stringify(achievementData.map(achievement => achievement.isDone));

  function newTasksDoneArrHandler() {
    let newIsTasksDoneArr;
    try {
      newIsTasksDoneArr = JSON.parse(isTasksDoneArr);
      isTasksDoneArr = achievementData.map(achievement => achievement.isDone);
      if (newIsTasksDoneArr.length == isTasksDoneArr.length) {
        newIsTasksDoneArr.forEach((newIsDone, i) => {
          achievementData[i].isDone = Boolean(newIsDone);
        })
        isTasksDoneArr = JSON.stringify([...newIsTasksDoneArr]);
      }
    }
    catch {
      console.log('err')
      isTasksDoneArr = JSON.stringify(achievementData.map(achievement => achievement.isDone));
    }
    console.log(isTasksDoneArr);
  }

  function taskDoneHandler(index) {
    let tempIsTasksDoneArr = JSON.parse(isTasksDoneArr);
    tempIsTasksDoneArr[index] = achievementData[index].isDone;
    isTasksDoneArr = JSON.stringify(tempIsTasksDoneArr);
  }
</script>

### 真の敵

- > 打倒「闇」通關
- 須以 **「普通旅程」以上的難度** 開始遊戲
- 以聖武器使用近距攻擊以外的手段對闇攻擊
  - 會出現「強烈的光芒將闇霧一掃而空！」訊息，就可與闇進行戰鬥
  - 闇仍會繼續移動，被吞沒還是會 Game Over
  - 經過 10 回合後闇會再次被霧包覆，須再次使用聖武器攻擊
- 闇會使用 3 段範圍的吐息攻擊，並召喚「闇之尖兵」
  - 使用吐息之前會出現「闇龍大吸了一口氣！」訊息
- 最好準備好聖弓與火炎無效／減少理力傷害的防具
  - 推薦在 1000km 前後取得聖裝備後開始戰鬥

### 残された謎

- > 解鎖夥伴「ヴィクター王」的劇情
- ヴィクター王會在 **「艱困旅程」以上的難度** 隨機於「大きな街」出現
  - 邀請加入需要魅力 2
  - 每前進 50 公尺提昇 5 點好感
- 第一次好感度事件選擇「英雄になりたいから」提昇 5 點好感
- 第三次好感度事件後能力會大幅上升
  - 此事件是從現有能力加算，可以留到後面再觸發
- 解鎖劇情需要先解鎖第三次好感度事件，並擊破魔王 or 闇之龍
  - 詳細可見「全ての物語」部份

### 傭兵の故郷へ

- > 解鎖夥伴「傭兵パンティ」的劇情
- 僱用パンティ需要魅力 1 與 500 金幣
  - 每過一天會再索取 500 金幣
  - 每開啟一次寶箱（包含破壞）提昇 2 點好感
  - 第一次好感度事件選擇「まさかー」提昇 6 點好感度
- 解鎖劇情需要先解鎖第三次好感度事件，並擊破魔王 or 闇之龍

### 片道マニア

- > 通關狂熱者模式
- 「狂熱者模式」會於 **「通關四種職階以上」** 後解鎖
- 可從難度選擇時的最下方選項開啟
  - 開啟後魔王血量增加、敵人行動變快、無法使用次元倉庫與女神像，後方也會出現敵人
- 此成就以普通難度以上通關即可解鎖

### 人類には早すぎる、本当に人類には早すぎる

- > 通關「對人類來說還太早了」難度
- > 不使用次元倉庫通關「對人類來說還太早了」難度
- 「對人類來說還太早了」難度會於 **「通關四種職階以上」** 後解鎖？

### 不思議な旅

- > 解鎖夥伴「魔王」的劇情
- 向魔王投擲「友好藥水」後，可和魔王進行對話
  - 此時以聖武器使用近距攻擊以外的手段對闇攻擊，**吹散闇霧並且對闇造成至少一次傷害之後，和魔王對話**就會多出成為夥伴的選項（需要魅力 3）
- 魔王沒有好感度，有其他夥伴存在的情況下會以魔王 END 為優先
  - 在魔王成為夥伴的狀態下，打倒闇後即進入魔王 END

### 魂だけの騎士

- > 解鎖夥伴「デュークガルツ」的劇情
- 黒騎士デュークガルツ會在 **「艱困旅程」以上的難度** 隨機於地圖上出現
  - 邀請加入需要「友好藥水」與魅力 3
- 解鎖劇情需要先解鎖第三次好感度事件，並擊破魔王 or 闇之龍

### 楽しい旅行、完全なる知識

- > 使用「觀光客」職階通關
- > 完成旅行記錄後通關
- 可以接下理騎士任務後不履行，藉此避免與魔王的戰鬥
- 訣竅在於如何被敵人包圍
  - 有 4 方敵人就會有 16 倍的頁數加算
  - 可以搭配混亂捲軸，在撰寫旅行紀錄之後使用飛行藥逃離

### 次元の支配者、次元の果てへ

- > 打倒「次元的支配者」通關
- > 抵達次元迴廊的盡頭通關
- 擊破闇，並通關 5 種以上主題世界後，就能在增築城堡裡配置「次元的賢者」
  - 於 **「艱困旅程」以上的難度** 與其對話，即可開始最終決戰任務
- 須於途中收集「次元的金貨」
  - 於隨時間出現的次元賢者
    - 第一次須交付 3 枚
    - 第二次交付 4 枚
  - 再經過約 200km 至 300km 後，就會進入「次元迴廊」地帶
  - 若是覺得準備不足，可以先行拒絕，但 2000km 之後賢者就不會再出現
- 進入次元迴廊地帶後就無法再與闇和魔王戰鬥
  - 右上角的時鐘會變成「次元的支配者」出現的計時器

### 払われた闇

- > 解鎖夥伴「ネムリ」的隱藏劇情
- 解鎖第三次好感度事件，持有「除闇之書」，在獸化前擊破魔王 or 闇之龍後進入 ED
  - 第四次若選擇「恐いからいらない」則無法進入結局劇情
  - 「除闇之書」只會在 **「艱困旅程」或「對人類來說還太早了」以上的難度** 出現

### 冒険の完遂

- > 達成度達到 100%
- 達成主選單畫面左下角的所有指示條件
  - 會自動隨著全成就解鎖？

### 全ての物語

- > 解鎖所有劇情
- 共有 24 種結局劇情？

| 名稱               | 條件                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| [X] 妖精イーリス   | 於「普通旅程」擊破魔王                                                                                                           |
| [X] 妖精イーリス２ | 於「艱困旅程」擊破魔王                                                                                                           |
| [X] 妖精イーリス３ | 擊破闇之龍                                                                                                                       |
| [ ] 妖精イーリス４ | 於「對人類來說還太早了旅程」擊破魔王                                                                                             |
| [X] 傭兵パンティ   | 解鎖第三次好感度事件，並擊破魔王 or 闇之龍                                                                                       |
| [X] ヴィクター王   | 解鎖第三次好感度事件，並擊破魔王                                                                                                 |
| [ ] ヴィクター王＋ | 解鎖第三次好感度事件，並擊破魔王 or 闇之龍                                                                                       |
| [X] フリーダ王女   | 解鎖第三次好感度事件，並擊破魔王 or 闇之龍                                                                                       |
| [ ] デュークガルツ | 解鎖第三次好感度事件，並擊破魔王 or 闇之龍                                                                                       |
| [X] ネムリ         | 解鎖第三次好感度事件（第四次若選擇「恐いからいらない」則無法進入結局劇情），並擊破魔王 or 闇之龍                                 |
| [ ] ネムリ＋       | 解鎖第三次好感度事件（第四次若選擇「恐いからいらない」則無法進入結局劇情），並於持有除闇之書的狀態下，在獸化前擊破魔王 or 闇之龍 |
| [X] 魔王           | 魔王成為夥伴並且生存的狀態下擊破闇之龍                                                                                           |
| [X] 少女ミラ       | 保護後，若於 300km 過後遇見父親會觸發夥伴事件，之後解鎖第三次好感度事件，並擊破魔王 or 闇之龍                                    |
| [X] アルバート     | 解鎖第三次好感度事件，並擊破魔王 or 闇之龍                                                                                       |
| [X] 世界の果て     | 首次抵達 2000 km 會強制進入結局劇情                                                                                              |
| [ ] 世界の果て＋   | 於輕鬆旅程首次抵達 2000km 會強制進入結局劇情                                                                                     |
| [X] 魂の解放       | 通關理騎士任務                                                                                                                   |
| [X] 魂の解放＋     | 使用理騎士通關理騎士任務                                                                                                         |
| [X] 忍者の秘技     | 通關忍者任務                                                                                                                     |
| [X] 忍者の秘技＋   | 使用忍者通關忍者任務                                                                                                             |
| [X] 白紙の旅行記   | 通關觀光客任務                                                                                                                   |
| [ ] 次元の支配者   | 於次元迴廊的旅程擊破次元的支配者                                                                                                 |
| [ ] 次元の果て     | 於次元迴廊首次抵達 3000km 會強制進入結局劇情                                                                                     |
| [ ] 旅行記完成     | 使用觀光客撰寫 1000 頁旅行紀錄                                                                                                   |
