---
title: "真女神轉生3雜記"
date: 2024-01-01T20:35:38.000+08:00
summary: ""
tags: ["ACG", "Game"]
---

<script>
  const list = [
    [ "マロガレ", "ワダツミ", "アンク", "イヨマンテ", "シラヌイ", "ヒフミ", "カムド", "ナルカミ" ],
    [ "アナテマ", "ミアズマ", "ニルヴァーナ", "ムラクモ", "ゲッシュ", "ジェド", "ムスペル", "ゲヘナ" ] ,
    [ "カムロギ", "サタン", "アダマ", "ヴィマーナ", "グンダリ", "ソフィア", "ガイア", "カイラース" ],
    [ "マサカドゥス" ]
  ];
</script>

<table x-data>
  <template x-for="row in list">
  <tr>
    <template x-for="cell in row">
      <td x-text="cell"></td>
    </template>
  </tr>
  </template>
</table>
