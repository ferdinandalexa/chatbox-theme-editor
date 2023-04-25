import { expect, test } from 'vitest';
import { getKeyframes, getCSSKeyframes } from './getKeyframes';

test('Return JS Animate API Keyframes with 2 steps', () => {
  const expectedKeyframes = [{
    opacity: 0,
    transform: 'translateX(16px)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'none',
    offset: 1
  }];

  const keyframes = getKeyframes('slide', 1, false);

  expect(keyframes).toMatchObject(expectedKeyframes);
});

test('Return JS Animate API Keyframes with 4 steps', () => {
  const expectedKeyframes = [{
    opacity: 0,
    transform: 'translateX(16px)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'none',
    offset: 0.3
  },
  {
    opacity: 1,
    transform: 'none',
    offset: 0.7
  },
  {
    opacity: 0,
    transform: 'translateX(16px)',
    offset: 1
  }];

  const keyframes = getKeyframes('slide', 0.3, true);

  expect(keyframes).toMatchObject(expectedKeyframes);
});

test('No animation type matches (JS Animate API)', () => {
  /**
   * @template T
   * @type {Array<T>}
   * */
  const expectedKeyframes = [];

  const keyframes = getKeyframes('none', 0.3, true);

  expect(keyframes).toMatchObject(expectedKeyframes);
});

test('Return CSS Keyframes with 2 steps', () => {
  const expectedKeyframes = '0%{opacity: 0;}100%{opacity: 1;}';

  const keyframes = getCSSKeyframes('fade', 1, false);

  expect(keyframes).toBe(expectedKeyframes);
});

test('Return CSS Keyframes with 4 steps', () => {
  const expectedKeyframes = '0%{opacity: 0;}30%{opacity: 1;}70%{opacity: 1;}100%{opacity: 0;}';

  const keyframes = getCSSKeyframes('fade', 0.3, true);

  expect(keyframes).toBe(expectedKeyframes);
});

test('No animation type matches (CSS)', () => {
  const expectedKeyframes = '';

  const keyframes = getCSSKeyframes('none', 0.3, true);

  expect(keyframes).toMatchObject(expectedKeyframes);
});
