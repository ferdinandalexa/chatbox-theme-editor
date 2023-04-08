<script>
  import SubSet from "$lib/components/panels/customization/sub-set.svelte";

  export let name = "Panel name";
  export let disabled = false;

  /**@type {Symbol | undefined}*/
  export let storeKey;

  /** @typedef {import('$lib/types/fields').Fields} Fields */
  /**@type {Array<Fields>} */
  export let fields = [];
</script>

<details>
  <summary class:disabled
    ><h2>{name}</h2>
    {#if disabled}
      <span>Coming soon</span>
    {/if}</summary
  >
  {#if fields?.length > 0}
    {#each fields as { field, inputs }}
      <SubSet name={field} {inputs} {storeKey} />
    {/each}
  {/if}
</details>

<style>
  summary {
    display: block;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    background-color: #424242;
    padding-block: 1rem;
    padding-inline: 1rem;
    user-select: none;
  }

  summary:hover {
    background-color: #323232;
  }

  summary.disabled {
    opacity: 0.4;
  }

  h2 {
    font-size: 1rem;
  }

  summary span {
    color: #bababa;
  }
</style>
