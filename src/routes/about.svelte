<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h1>About</h1>
  <figure>
    <img src="https://i.imgur.com/pA9yPzD.jpg" alt="television-man" />
    <figcaption>
      <a href="https://unsplash.com/photos/KssYQvWXCv0" targer="blank">
        Yondon Batbileg(@prike) - Unsplash
      </a>
    </figcaption>
  </figure>
  <div class="bubble-container">
    <img
      src="./e0724_0.svg"
      onerror="this.onerror=null; this.src=''"
      alt="Message Bubble"
      class="bubble-border"
    />
    <div class="bubble-content">
      <p>
        「願意聽別人說話的人並不多。每個人都只想說話，而說的話又不是什麼有內容的話。我也是其中之一。」
      </p>
      <p>「該說的話都已經被說過，但是因為沒人在聽，所以還得全都再說一遍。」</p>
    </div>
  </div>
  <div class="clearfix" />
  <hr />
  <p style="font-size: 0.875rem; text-align: center;">
    いつでも捜しているよ
    <br />どっかに君の姿を
    <br />カバンの中も 机の中も
    <br />探したけれど見つからないのに
    <br />それより僕と踊りませんか
    <br />朝が来るまで終わる事のないダンスを
    <br />踊ってない夜を知らない
    <br />踊ってない夜が気に入らない
    <br />君は知ってるかい？
    <br />踊らな死ぬ事を
  </p>
  <p style="font-size: 0.875rem; text-align: center;">
    Make me sad, Make me mad, Make me feel alright.
  </p>
</div>

<style>
  .container {
    overflow: hidden;
    padding: 0 16px 16px;
  }

  figure {
    float: right;
    width: 40%;
    margin-left: 1em;
    margin-bottom: 1em;
  }

  .clearfix {
    clear: both;
  }

  .bubble-container {
    position: relative;
    width: 70%;
  }
  .bubble-border {
    position: absolute;
  }

  .bubble-content {
    position: absolute;
    padding: 7.5% 12.5% 0 15%;
    color: #171717;
  }
  .bubble-content p {
    padding: 10px 0;
  }
  @media screen and (max-width: 720px) {
    .bubble-content {
      padding: 7.5% 12.5% 0 20%;
    }
    .bubble-content p {
      padding: 0 0 1.38vw 0;
      font-size: 2.5vw;
      line-height: calc(0.5vw * 7);
    }
  }
</style>
