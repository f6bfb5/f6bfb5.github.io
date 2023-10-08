<script>
  export let size = 2;
  export let borderColor = "#242222";
  export let color;
  export let text = "text";

  // https://stackoverflow.com/questions/51568098/javascript-find-the-inverse-of-a-hex-code
  const inv = (hex) =>
    "#" +
    hex
      .match(/[a-f0-9]{2}/gi)
      .map((e) =>
        ((255 - parseInt(e, 16)) | 0)
          .toString(16)
          .replace(/^([a-f0-9])$/, "0$1")
      )
      .join("");

  let style = "text-shadow: ";
  for (let i = size * -1; i <= size; i++) {
    for (let j = size * -1; j <= size; j++) {
      style +=
        i == size && j == size
          ? `${i}px ${j}px ${borderColor};`
          : `${i}px ${j}px ${borderColor},`;
    }
  }

  style += `color: ${ color != undefined ? color : inv(borderColor)};`;
</script>

<span {style}>{text}</span>
