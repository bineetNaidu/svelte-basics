<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();

  let name;
  let beltColor;
  let age;
  // let fighting = false;
  // let sneaking = false;
  // let running = false;
  let skills = [];

  const handleSubmit = () => {
    // console.log({ name, beltColor, age, fighting, sneaking, running });
    const person = { name, beltColor, age, skills, id: Math.random() };
    console.log(person);
    dispatch('ADD_PERSON', person);
  };
</script>

<style>
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="name" bind:value={name} />
  <input type="number" bind:value={age} placeholder="Age" />
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Skill:</label>
  <!-- <input type="checkbox" bind:checked={fighting} />Fighting
  <br />
  <input type="checkbox" bind:checked={sneaking} />Sneaking
  <br />
  <input type="checkbox" bind:checked={running} />Running
  <br /> -->

  <input type="checkbox" bind:group={skills} value="fighting" />Fighting
  <br />
  <input type="checkbox" bind:group={skills} value="sneaking" />Sneaking
  <br />
  <input type="checkbox" bind:group={skills} value="running" />Running
  <br />

  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Belts:</label>
  <select bind:value={beltColor}>
    <option value="black">Black</option>
    <option value="red">red</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
  </select>

  <button>Add Person</button>
</form>
