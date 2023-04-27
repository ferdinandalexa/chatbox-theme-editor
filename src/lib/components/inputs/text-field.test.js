import '@testing-library/jest-dom';

import { expect, test } from 'vitest';
import { render } from '@testing-library/svelte';

import TextField from './text-field.svelte';

const inputTypes = [
  {
    type: 'text',
    value: 'default',
    role: 'textbox'
  },
  {
    type: 'number',
    value: 2,
    role: 'spinbutton'
  }
];

test.each(inputTypes)('TextField: apply input type given',
  ({ type, value, role }) => {
    const { getByRole } = render(TextField, { type, value });

    const textFieldRendered = getByRole(role);
    expect(textFieldRendered).toHaveAttribute('type', type);
  });
