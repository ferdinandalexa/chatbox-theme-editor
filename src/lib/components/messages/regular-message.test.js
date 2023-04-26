import '@testing-library/jest-dom';

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import RegularMessage from './regular-message.svelte';

test.each([
  'owner', 'member', 'moderator'
])('Regular message: assign author type %s', (authorType) => {
  render(RegularMessage, { authorType });
  const message = screen.getByText(`This is how it looks like a ${authorType} user message.`);
  expect(message).toBeInTheDocument();
});

test('Regular message: don\'t assign author type', () => {
  render(RegularMessage);
  const message = screen.getByText('This is how it looks like a user message.');
  expect(message).toBeInTheDocument();
});
