<script>
  import { createEventDispatcher } from "svelte";
  import { createListbox } from "svelte-headlessui";

  const dispatch = createEventDispatcher();

  export let value = "";
  export let label = "Field";
  export let reset = false;

  /**@type {string[]} */
  export let options = [];

  const listbox = createListbox({
    label: "show type",
    selected: options[0],
  });

  /**@param {CustomEvent} event*/
  function handleSelect(event) {
    value = event.detail.selected;
    dispatch("input", {
      value,
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
    display: block;
    position: relative;
  }

  .list-input {
    background-color: transparent;
    border: 0.1rem solid #424242;
    color: var(--blue-50);
    border-radius: 0.4rem;
    display: block;
    font-size: 1rem;
    min-height: calc(1.4rem + 26px);
    padding: 0 0.75rem;
    outline: none;
    text-align: left;
    width: 100%;
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
    background-color: var(--blue-600);
    border: 0.1rem solid var(--blue-500);
    border-radius: 0 0 0.4rem 0.4rem;
    color: var(--blue-50);
    position: absolute;
    background-color: #242424;
    max-height: 8rem;
    display: none;
    outline: none;
    width: 100%;
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
    display: block;
    border: 0.1rem solid #424242;

    z-index: 2;
  }

  .list-option {
    padding: 10px 12px 12px;
    border: 0.1rem solid var(--blue-500);
  }

  .list-option.active,
  .list-option.active,
  .list-option.selected.active,
  .list-option.selected.active {
    background-color: #313131;
    border-color: #424242;
  }
</style>
