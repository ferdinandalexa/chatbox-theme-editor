import '@testing-library/jest-dom';

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Sponsor from './sponsor.svelte';

test('Render sponsor message', () => {
  render(Sponsor);
  const message = screen.getByText('NEW SPONSOR!');
  expect(message).toBeInTheDocument();
});
