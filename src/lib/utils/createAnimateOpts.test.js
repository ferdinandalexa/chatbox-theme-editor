import { expect, test } from 'vitest';
import { createAnimateOpts } from './createAnimateOpts';

test('Return JS Animate API options', () => {
  const duration = 20_000;
  const animateOpts = { duration: 20_000, fill: 'both' };
  expect(createAnimateOpts(duration)).toMatchObject(animateOpts);
});
