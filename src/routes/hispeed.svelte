<div class="hispeed-lane-container">
  <div class="hispeed-lane1">
    <div class="hispeed-note1" />
    <div class="hispeed-trigger1" />
  </div>
  <div class="hispeed-lane2">
    <div class="hispeed-note2" />
  </div>
  <div class="hispeed-lane3">
    <div class="hispeed-note3" />
  </div>
  <div class="hispeed-lane4">
    <div class="hispeed-note4" />
  </div>
  <div class="hispeed-lane5">
    <div class="hispeed-note5" />
  </div>
  <div class="hispeed-lane6">
    <div class="hispeed-note6" />
  </div>
  <div class="hispeed-lane7">
    <div class="hispeed-note7" />
  </div>
  <div class="hispeed-lane8">
    <div class="hispeed-note8" />
  </div>
  <div class="hispeed-judgetext">
    GREAT
  </div>
</div>
<div class="hispeed-bottomline" />

<div class="hispeed-input-container">
  <div class="hispeed-input1">
    <input type="text" maxlength="1" />
  </div>
</div>

<style>
  .hispeed-lane-container {
    width: 430px;
    height: 760px;
    display: flex;
    position: relative;
    background: black;
    border-left: 2px solid white;
    border-right: 2px solid white;
    overflow: hidden;
  }
  .hispeed-lane1,
  .hispeed-lane2,
  .hispeed-lane3,
  .hispeed-lane4,
  .hispeed-lane5,
  .hispeed-lane6,
  .hispeed-lane7,
  .hispeed-lane8 {
    position: relative; 
  }
  .hispeed-lane1 {
    width: 100px;
  }
  .hispeed-lane2,
  .hispeed-lane4,
  .hispeed-lane6,
  .hispeed-lane8 {
    width: 60px;
    border-left: 2px solid white;
  }
  .hispeed-lane3,
  .hispeed-lane5,
  .hispeed-lane7 {
    width: 50px;
    border-left: 2px solid white;
  }
  .hispeed-judgetext {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4em;
    color: white;
    animation: shining .25s infinite linear;
  }
  @keyframes shining {
    0% {
      filter: brightness(1.75);
    }
    33% {
      color: red;
    }
    50% {
      filter: brightness(1);
    }
    66% {
      color: green;
    }
    100% {
      color: blue;
      filter: brightness(1.75);
    }
  }
  .hispeed-bottomline {
    margin-left: 2px;
    width: 426px;
    border-top: 8px solid red;
    filter: drop-shadow(0 -6px 12px var(--subtitle-color));
    animation: glow .5s infinite ease;
  }
  @keyframes glow {
    0%,
    100% {
      filter: drop-shadow(0 -6px 12px var(--subtitle-color));
    }
    50% {
      filter: drop-shadow(0 -6px 8px var(--bg-color));
    }
  }
  
  .hispeed-note1 {
    position: absolute;
    width: 100%;
    height: 8px;
    top: 0;
    left: 0;
    background-color: pink;
    animation: moving 2s infinite linear;
  }
  .hispeed-note2,
  .hispeed-note4,
  .hispeed-note6,
  .hispeed-note8 {
    position: absolute;
    width: 100%;
    height: 8px;
    top: 0;
    left: 0;
    background-color: white;
    animation: moving 2s infinite linear;
  }
  .hispeed-note3,
  .hispeed-note5,
  .hispeed-note7 {
    position: absolute;
    width: 100%;
    height: 8px;
    top: 0;
    left: 0;
    background-color: blue;
    animation: moving 2s infinite linear;
  }

  @keyframes moving {
    from {
      top: 0;
    }
    to {
      top: 120%;
    }
  }

  .hispeed-trigger1 {
    position: absolute;
    width: 66%;
    height: 30%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    /* background: linear-gradient(90deg, transparent, blue, transparent); */
    border-radius: 90px 90px 0 0;
  }

  .hispeed-input-container {
    width: 460px;
  }
  .hispeed-input1,
  .hispeed-input1 input {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid red;
  }
  .hispeed-input1 {
    position: relative;
    background: black;
  }
  .hispeed-input1:after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: blue;
  }
  .hispeed-input1 input {
    border: none;
    background: transparent;
    color: white;
    text-align: center;
    font-size: 4em;
    text-transform: uppercase;
  }
  .hispeed-input1 input:focus {
    outline: none;
  }
</style>
