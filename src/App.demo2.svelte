<script>
  import Modal from './Modal.svelte';
  import AddPersonForm from './AddPersonForm.svelte';

  let people = [
    { name: 'Bineet', beltColor: 'black', id: 1, age: 16 },
    { name: 'Zayn', beltColor: 'orange', id: 2, age: 22 },
    { name: 'Cris', beltColor: 'brown', id: 3, age: 25 },
  ];

  const handleClick = (id) => (people = people.filter((p) => p.id !== id));

  let showModal = false;

  const toggleModal = () => (showModal = !showModal);

  // let num = 5;

  const addperson = (e) => {
    people = [...people, e.detail];
    showModal = false;
  };
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

<!-- {#if num > 20}
  <p>Greater than 20</p>
{:else if num > 5}
  <p>Greater than 5</p>
{:else}
  <p>Not Greater than 5</p>
{/if} -->

<Modal isPromo={false} {showModal} on:click={toggleModal}>
  <AddPersonForm on:ADD_PERSON={addperson} />
  <!-- <div slot="title">
    <h3>from another slot</h3>
  </div> -->
</Modal>
<main>
  <button on:click|once={toggleModal}>Modal</button>
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      {#if person.beltColor === 'black'}
        <p><strong>MASTER NINJA</strong></p>
      {/if}
      <p>{person.age} yrs old, {person.beltColor} belt</p>
      <button on:click={() => handleClick(person.id)}>Delete</button>
    </div>
  {:else}
    <p>There are no people to show...</p>
  {/each}
</main>
