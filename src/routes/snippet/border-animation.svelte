<div class="container">
    <div class="top"></div>
    <div class="right"></div>
    <div class="bottom"></div>
    <div class="left"></div>
</div>
    
<style>
    /* https://fes.nijisanji.jp/2022/ */
    .container {
        max-width: 100vw;
        min-height: 100vh;
        position: relative;
    }
    .top, .right, .bottom, .left {
        position: absolute;
    }
    .top {
        top: 0;
        background: linear-gradient(90deg, #e2371a 25%, #fee03f 25%, #fee03f 50%, #64d937 50%, #64d937 75%, #7740ff 75%);
        background-repeat: repeat-x;
        background-size: 400% 100%;
        animation: ani-top 3s linear infinite;
    }
    .right {
        right: 0;
        background: linear-gradient(180deg, #e2371a 25%, #fee03f 25%, #fee03f 50%, #64d937 50%, #64d937 75%, #7740ff 75%);

    }
    .bottom {
        bottom: 0;
        left: 1em;
        background: linear-gradient(270deg, #e2371a 25%, #fee03f 25%, #fee03f 50%, #64d937 50%, #64d937 75%, #7740ff 75%);
    }
    .left {
        top: 1em;
        left: 0;
        background: linear-gradient(0deg, #e2371a 25%, #fee03f 25%, #fee03f 50%, #64d937 50%, #64d937 75%, #7740ff 75%);
    }
    @keyframes ani-top {
        0% { background-position: 100% 50% }
        100% { background-position: -33% 50% }
    }
    .top, .bottom {
        width: calc(100% - 1em);
        height: 1em;
    }
    .right, .left {
        width: 1em;
        height: calc(100% - 1em);
    }
</style>