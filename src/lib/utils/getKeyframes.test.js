import { expect, test } from "vitest";
import { getKeyframes } from "./getKeyframes";

test('Return JS Animate API Keyframes with 2 steps', () => {
  const expectedKeyframes = [{
    opacity: 0,
    transform: "translateX(16px)",
    offset: 0
  },
  {
    opacity: 1,
    transform: "none",
    offset: 1
  }];

  const keyframes = getKeyframes('slide', 1, false);

  expect(keyframes).toMatchObject(expectedKeyframes);
})

test('Return JS Animate API Keyframes with 4 steps', () => {
  const expectedKeyframes = [{
    opacity: 0,
    transform: "translateX(16px)",
    offset: 0
  },
  {
    opacity: 1,
    transform: "none",
    offset: 0.3
  },
  {
    opacity: 1,
    transform: "none",
    offset: 0.7
  },
  {
    opacity: 0,
    transform: "translateX(16px)",
    offset: 1,
  }];

  const keyframes = getKeyframes('slide', 0.3, true);

  expect(keyframes).toMatchObject(expectedKeyframes);
})

test('No animation type matches', () => {
  /**
   * @template T
   * @type {Array<T>} 
   * */
  const expectedKeyframes = [];

  const keyframes = getKeyframes('none', 0.3, true);

  expect(keyframes).toMatchObject(expectedKeyframes);
})