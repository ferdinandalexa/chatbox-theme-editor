import { slide } from "$lib/utils/animations/slide";
import { fade } from "$lib/utils/animations/fade";

/**
 * @param {string} type
 * @param {number} steps
 * @return {Keyframe[] | PropertyIndexedKeyframes}
 * */
export function getKeyframes(type, steps) {
  if (type === "slide") return slide(steps)
  if (type === "fade") return fade(steps)

  return []
}