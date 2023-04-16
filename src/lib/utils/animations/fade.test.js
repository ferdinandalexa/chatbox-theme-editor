import { expect, test } from "vitest";
import { fade } from "./fade";

test('Return fade Keyframes with 2 steps', () => {
  const steps = [0, 1];
  const expectedKeyframes = [{
    opacity: 0,
    offset: 0
  },
  {
    opacity: 1,
    offset: 1
  }];

  const keyframes = fade(steps);

  expect(keyframes).toMatchObject(expectedKeyframes);
})

test('Return Slide Keyframes with 4 steps', () => {
  const steps = [0, 0.3, 0.7, 1];
  const expectedKeyframes = [{
    opacity: 0,
    offset: 0
  },
  {
    opacity: 1,
    offset: 0.3
  },
  {
    opacity: 1,
    offset: 0.7
  },
  {
    opacity: 0,
    offset: 1,
  }];

  const keyframes = fade(steps);

  expect(keyframes).toMatchObject(expectedKeyframes);
})