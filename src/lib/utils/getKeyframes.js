import { slide } from "$lib/utils/animations/slide";
import { fade } from "$lib/utils/animations/fade";

/**
 * @param {string} type
 * @param {number} animationTimeRatio
 * @param {boolean} hideOldMessages
 * @return {Keyframe[] | PropertyIndexedKeyframes}
 * */
export function getKeyframes(type, animationTimeRatio, hideOldMessages) {
  /**@type {number[]}*/

  const steps = hideOldMessages
    ? [0, animationTimeRatio, 1 - animationTimeRatio, 1]
    : [0, 1]

  if (type === "slide") return slide(steps)
  if (type === "fade") return fade(steps)

  return []
}