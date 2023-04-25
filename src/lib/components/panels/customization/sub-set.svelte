<script>
  import { getContext } from 'svelte';

  import Checkbox from '$lib/components/inputs/checkbox.svelte';
  import ColorPicker from '$lib/components/inputs/color-picker.svelte';
  import TextField from '$lib/components/inputs/text-field.svelte';
  import ListBox from '$lib/components/inputs/list-box.svelte';

  export let name = 'Sub set';

  /** @typedef {import('$lib/types/fields').Input} Input */
  /** @type {Array<Input>} */
  export let inputs = [];

  /** @type {Symbol | null} */
  export let storeKey = null;

  const stylesStore = getContext(storeKey);

  const nameFormated = name.toLowerCase().split(' ').join('-');

  /** @typedef {import ("svelte").ComponentType} ComponentType; */
  /** @type {Object<string, ComponentType>} */
  const inputType = {
    color: ColorPicker,
    text: TextField,
    number: TextField,
    checkbox: Checkbox,
    listbox: ListBox
  };

  /**
   * @param {string} property
   * @param {string | number | boolean} value
   * @param {CustomEvent | InputEvent | Checkbox } event
   */
  const handleChange = (property, value, event) => {
    const isCustomEvent =
      Object.getPrototypeOf(event) === CustomEvent.prototype;
    if (isCustomEvent) {
      stylesStore.update({ [property]: event?.detail?.value });
    } else {
      if (event?.target?.type === 'checkbox') {
        stylesStore.update({ [property]: event?.target?.checked });
      } else {
        stylesStore.update({ [property]: value });
      }
    }
  };
</script>

<section aria-labelledby={nameFormated}>
  <h3 id={nameFormated}>
    {name}
  </h3>

  <div>
    {#each inputs as { cssProp, type, label, props, hasDeps, deps, value }}
      {#if !hasDeps || (hasDeps && $stylesStore[deps])}
        <svelte:component
          this={inputType[type]}
          {label}
          {type}
          bind:value
          on:input={(event) => {
            handleChange(cssProp, value, event);
          }}
          on:input
          {...props}
          {...$$restProps}
        />
      {/if}
    {/each}
  </div>
</section>

<style>
  section {
    padding: 1rem;
    margin-block: 0.75rem;
  }

  section div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h3 {
    margin-bottom: 1.25rem;
    font-size: 1rem;
  }
</style>
