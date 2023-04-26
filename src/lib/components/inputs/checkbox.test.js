import '@testing-library/jest-dom';

import { expect, test } from 'vitest';
import { render } from '@testing-library/svelte';

import Checkbox from './checkbox.svelte';

test('Checkbox change value when is clicked', () => {
  const { getByRole } = render(Checkbox, { value: false });

  const checkboxRendered = getByRole('checkbox');

  expect(checkboxRendered).not.toBeChecked();
  checkboxRendered.click();
  expect(checkboxRendered).toBeChecked();
});
