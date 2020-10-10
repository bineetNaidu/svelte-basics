<script>
  let firstName = 'Bineet';
  let lastName = 'Naidu';
  let beltColor = 'black';

  $: fullName = `${firstName} ${lastName}`; // the "$" is reactive value

  $: {
    console.log(beltColor);
    console.log(firstName);
    console.log(lastName);
  } // this " {  } " is a code block

  // const handleClick = () => {
  //   beltColor = 'orange';
  // };

  // const handleInput = (e) => {
  //   beltColor = e.target.value;
  // };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <p style="color: {beltColor}">{fullName} - {beltColor} belt</p>
  <!-- <button on:click={handleClick}>Update belt</button> -->
  <!-- <input type="text" on:input={handleInput} value={beltColor} /> THIS TWO WAY BINDING -->
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColor} />
</main>
