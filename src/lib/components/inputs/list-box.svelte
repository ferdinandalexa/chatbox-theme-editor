<script>
  import { createEventDispatcher } from 'svelte';
  import { createListbox } from 'svelte-headlessui';

  const dispatch = createEventDispatcher();

  export let value = '';
  export let label = 'Field';
  export let reset = false;

  /** @type {string[]} */
  export let options = [];

  const listbox = createListbox({
    label: 'show type',
    selected: options[0]
  });

  /** @param {CustomEvent} event */
  function handleSelect (event) {
    value = event.detail.selected;
    dispatch('input', {
      value
    });
  }

  $: if (reset) {
    listbox.set({ selected: options[0] });
  }
</script>

<div class="list" class:open={$listbox.expanded}>
  <span class="label">{label}</span>
  <button
    use:listbox.button
    on:select={handleSelect}
    on:input
    class="list-input"
  >
    <span>{$listbox.selected}</span>
  </button>
  <ul use:listbox.items class="list-menu">
    {#each options as option}
      {@const active = $listbox.active === option}
      {@const selected = $listbox.selected === option}
      <li
        use:listbox.item={{ value: option }}
        class="list-option"
        class:selected
        class:active
      >
        <span>{option}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
  .list {
    position: relative;
    display: block;
  }

  .list-input {
    display: block;
    width: 100%;
    min-height: calc(1.4rem + 26px);
    padding: 0 0.75rem;
    border: 0.1rem solid #424242;
    background-color: transparent;
    border-radius: 0.4rem;
    color: var(--blue-50);
    font-size: 1rem;
    outline: none;
    text-align: left;
  }

  .open .list-input {
    background-color: #424242;
    border-radius: 0.4rem 0.4rem 0 0;
  }

  .list-input:is(:hover, :focus-within) {
    border-color: #cacaca;
  }

  .label {
    display: block;
    margin-bottom: 0.3rem;
    color: #cacaca;
  }

  .list-menu {
    position: absolute;
    display: none;
    width: 100%;
    max-height: 8rem;
    border: 0.1rem solid var(--blue-500);
    background-color: var(--blue-600);
    background-color: #242424;
    border-radius: 0 0 0.4rem 0.4rem;
    color: var(--blue-50);
    outline: none;
    overflow-y: auto;
  }

  .list-menu {
    --sb-track-menu-color: #242424;
    --sb-thumb-menu-color: #424242;
    --sb-size-menu: 0;

    scrollbar-color: var(--sb-thumb-menu-color) var(--sb-track-menu-color);
  }

  .list-menu::-webkit-scrollbar {
    width: var(--sb-size-menu);
  }

  .list-menu::-webkit-scrollbar-track {
    background: var(--sb-track-menu-color);
    border-radius: 8px;
  }

  .list-menu::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-menu-color);
    border-radius: 8px;
  }

  .open .list-menu {
    --sb-size-menu: 8px;

    z-index: 2;
    display: block;
    border: 0.1rem solid #424242;
  }

  .list-option {
    padding: 10px 12px 12px;
    border: 0.1rem solid var(--blue-500);
  }

  .list-option.active,
  .list-option.active,
  .list-option.selected.active,
  .list-option.selected.active {
    border-color: #424242;
    background-color: #313131;
  }
</style>
