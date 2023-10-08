<script>
  export let text;
</script>

<span class="squiggly-text">{text}</span>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="squiggly-0">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="0"
      />
      <feDisplacementMap
        id="displacement"
        in="SourceGraphic"
        in2="noise"
        scale="6"
      />
    </filter>
    <filter id="squiggly-1">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="1"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>

    <filter id="squiggly-2">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="2"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-3">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="3"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>

    <filter id="squiggly-4">
      <feTurbulence
        id="turbulence"
        baseFrequency="0.02"
        numOctaves="3"
        result="noise"
        seed="4"
      />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
  </defs>
</svg>

<style>
  .squiggly-text {
    animation: jitter 5s infinite, squiggly-anim 0.34s linear infinite;
  }
  svg {
    display: block;
    height: 0;
  }

  @keyframes squiggly-anim {
    0% {
      filter: url("#squiggly-0");
    }
    25% {
      filter: url("#squiggly-1");
    }
    50% {
      filter: url("#squiggly-2");
    }
    75% {
      filter: url("#squiggly-3");
    }
    100% {
      filter: url("#squiggly-4");
    }
  }
</style>
