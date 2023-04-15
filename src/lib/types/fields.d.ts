interface Fields {
  field: string;
  inputs: Array<Input>;
}


interface InputProps implements HTMLInputElement {
  min?: string,
  max?: string,
  options?: string[]
}

interface Input {
  type: string;
  label?: string;
  cssProp: string;
  props?: InputProps;
  hasDeps: boolean
  deps?: string
  value: string | number | boolean;
}

export type { Fields, Input }