<script>
  import "./input.css";

  /**@type {("text" | "number")}*/
  export let type = "text";

  /**@type {number | string}*/
  export let value;

  export let label = "field";

  /**@param {HTMLInputElement} node*/
  function typeInput(node) {
    node.type = type;
  }
</script>

<label class="label textfield">
  <span>{label}</span>
  <input bind:value class="input" on:input use:typeInput {...$$restProps} />
</label>
