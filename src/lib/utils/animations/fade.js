import { animationsType } from "$lib/consts/animations/animationsType"

/**
 * @deprecated Use just the getKeyframe() function.
 * @param {number[]} steps  
 */
export function fade(steps) {
  return steps.map((step, index) => {
    return {
      ...animationsType.fade[index],
      offset: step
    }
  })
}

/**
 * @param {number[]} steps  
 */
export function fadeCSSKeframes(steps) {
  return steps.map((step, index) => {
    return `${step * 100}%{${Object.entries(animationsType.fade[index]).map((rule) => { return rule.join(': ') }).join(';')};}`
  }).join('')
}