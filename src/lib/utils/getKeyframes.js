import { slide } from "$lib/utils/animations/slide";
import { fade } from "$lib/utils/animations/fade";

/**
 * @param {string} type
 * @param {number} steps
 * @param {boolean} hasOut
 * @return {Keyframe[] | PropertyIndexedKeyframes}
 * */
export function getKeyframes(type, steps, hasOut) {
  if (type === "slide") return slide(steps, hasOut)
  if (type === "fade") return fade(steps, hasOut)

  return []
}