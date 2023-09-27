<div class="bartender">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
</div>

<style>
    /* https://twitter.com/trunarla/status/1704936936522293270 */
    .bartender {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
    }
    .bar {
        height: 20%;
        width: 100%;
        background-color: white;
        animation: tend .5s ease-in-out forwards;
        transform: translateX(-100%);
        /* transform: translateX(0%); */
        animation-play-state: paused;
    }
    @keyframes tend {
        0% {
            transform: translateX(-100%);
            /* transform: translateX(0%); */
        }
        100% {
            transform: translateX(0%);
            /* transform: translateX(100%); */
        }
    }
    .bar:nth-child(2) {
        animation-delay: 100ms;
    }
    .bar:nth-child(3) {
        animation-delay: 200ms;
    }
    .bar:nth-child(4) {
        animation-delay: 300ms;
    }
    .bar:nth-child(5) {
        animation-delay: 400ms;
    }

</style>