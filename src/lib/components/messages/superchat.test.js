import '@testing-library/jest-dom';

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Superchat from './superchat.svelte';

test('Render superchat message', () => {
  render(Superchat);
  const message = screen.getByText('$5.00');
  expect(message).toBeInTheDocument();
});
