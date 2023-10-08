<script>
  let result = [];
  const getData = () =>
    fetch(
      "https://live.sk-knower.com/lib/iconjsonp.php?channel=ds83171",
      {}
    ).then((response) => response.json());
  async function init() {
    try {
      result = await getData();
    } catch (err) {
      console.log(err);
    }
    console.log(result);
  }
  let promise = init();
</script>

<table>
  {#each result as stamp}
    <tr>
      <td>{stamp.code}</td>
      <td>{stamp.src}</td>
      <td>{stamp.height}</td>
      <td>{stamp.alt}</td>
    </tr>
  {/each}
</table>
