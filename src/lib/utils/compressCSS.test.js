import { expect, test } from "vitest";
import { compressCSS } from "./compressCSS";

test('Compress CSS with 1 rule', () => {
  const cssInput = `
  h2 { 
    font-size: 1rem;
  }`
  const cssOutputExpected = `h2{font-size: 1rem;}`
  const cssCompressed = compressCSS(cssInput)

  expect(cssCompressed).toEqual(cssOutputExpected)
})


test('Compress CSS with multiple rules', () => {
  const cssInput = `
  h2 { 
    font-size: 1rem;
  }

  p {
    color: red;
    vertical-align: middle;
  }
  `
  const cssOutputExpected = `h2{font-size: 1rem;}p{color: red;vertical-align: middle;}`
  const cssCompressed = compressCSS(cssInput)

  expect(cssCompressed).toEqual(cssOutputExpected)
})