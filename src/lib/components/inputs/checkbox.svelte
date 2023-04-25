<script>
  import './input.css';

  /** @type {boolean} */
  export let value;
  export let label = 'field';

  $: isChecked = value;
</script>

<label class="label checkbox" class:isChecked>
  <!-- <span class="box" /> -->
  <input
    type="checkbox"
    class="input"
    bind:checked={value}
    on:input
    {...$$restProps}
  />

  <span>
    {label}
  </span>
</label>
