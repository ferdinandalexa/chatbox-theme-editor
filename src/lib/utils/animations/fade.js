import { fadeKeyframes } from "$lib/consts/animations/fadeKeyframes"

/**
 * @param {number[]} steps  
 */
export function fade(steps) {
  return steps.map((step, index) => {
    return {
      ...fadeKeyframes[index],
      offset: step
    }
  })
}

/**
 * @param {number[]} steps  
 */
export function fadeCSSKeframes(steps) {
  return steps.map((step, index) => {
    return `${step * 100}%{${Object.entries(fadeKeyframes[index]).map((rule) => { return rule.join(': ') }).join(';')};}`
  }).join('')
}