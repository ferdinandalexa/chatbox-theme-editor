import { animationsType } from "$lib/consts/animations/animationsType"

/**
 * @deprecated Use just the getKeyframe() function.
 * @param {number[]} steps  
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function slide(steps) {
  return steps.map((step, index) => {
    return {
      ...animationsType.slide[index],
      offset: step
    }
  })
}

/**
 * @param {number[]} steps  
 */
export function slideCSSKeframes(steps) {
  return steps.map((step, index) => {
    return `${step * 100}%{${Object.entries(animationsType.slide[index]).map((rule) => { return rule.join(': ') }).join(';')};}`
  }).join('')
}