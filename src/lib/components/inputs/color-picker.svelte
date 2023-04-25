<script>
  export let value = '#ffffff00';
  export let label = 'Field';
</script>

<div>
  <span>{label}</span>
  <input type="text" class="input coloris" bind:value on:input />
</div>

<style>
  input {
    width: 100%;
    padding: 0.5rem;
    padding-left: 2.25rem;
    border-bottom: 0.0125rem solid #424242;
    background-color: transparent;
    border-radius: 0;
    color: #cacaca;
  }

  div span {
    display: block;
    margin-bottom: 0.3rem;
    color: #cacaca;
  }
</style>
