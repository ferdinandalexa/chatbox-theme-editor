import { expect, test } from "vitest";
import { slide } from "./slide";

test('Return Slide Keyframes with 2 steps', () => {
  const steps = [0, 1];
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

  const keyframes = slide(steps);

  expect(keyframes).toMatchObject(expectedKeyframes);
})

test('Return Slide Keyframes with 4 steps', () => {
  const steps = [0, 0.3, 0.7, 1];
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

  const keyframes = slide(steps);

  expect(keyframes).toMatchObject(expectedKeyframes);
})