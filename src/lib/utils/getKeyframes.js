import { slide, slideCSSKeframes } from "$lib/utils/animations/slide";
import { fade, fadeCSSKeframes } from "$lib/utils/animations/fade";

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

/**
 * @param {string} type
 * @param {number} animationTimeRatio
 * @param {boolean} hideOldMessages
 * */
export function getCSSKeyframes(type, animationTimeRatio, hideOldMessages) {
  /**@type {number[]}*/

  const steps = hideOldMessages
    ? [0, animationTimeRatio, 1 - animationTimeRatio, 1]
    : [0, 1]

  if (type === "slide") return slideCSSKeframes(steps)
  if (type === "fade") return fadeCSSKeframes(steps)

  return ''
}