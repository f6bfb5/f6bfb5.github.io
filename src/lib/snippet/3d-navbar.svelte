<ul>
    <li><a style="z-index: 5;" href="#">Home</a></li>
    <li><a style="z-index: 4;" href="#">About</a></li>
    <li><a style="z-index: 3;" href="#">Contact</a></li>
    <li><a style="z-index: 2;" href="#">Projects</a></li>
    <li><a style="z-index: 1;" href="#">Resume</a></li>
</ul>

<style>
    /* https://twitter.com/iamdillion/status/1705275799245398290 */
    ul {
        list-style: none;
        padding: 0;
        transform: skewY(-15deg);
    }
    ul li a {
        display: inline-block;
        padding: 15px 25px;
        --color: green;
        background-color: var(--color);
        color: white;
        text-decoration: none;
        position: relative;
        left: 0;
        transition: left 300ms,
          background-color 300ms;
    }
    ul li a:hover {
        --color: red;
        left: -20px;
    }
    ul li a::before {
        content: '';
        width: 20px;
        height: 100%;
        position: absolute;
        left: -20px;
        bottom: 10px;
        background-color: color-mix(
            in srgb,
            var(--color),
            black 20%
        );
        transform: skewY(45deg);
        transition: background-color 300ms;
    }
    ul li a::after {
        content: '';
        width: 100%;
        position: absolute;
        left: -10px;
        top: -20px;
        height: 20px;
        background-color: color-mix(
            in srgb,
            var(--color),
            black 20%
        );
        z-index: -1;
        transform: skewX(45deg);
        transition: background-color 300ms;
    }
</style>