import { slideKeyframes } from "$lib/consts/animations/slideKeyframes"

/**
 * @param {number[]} steps  
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function slide(steps) {
  return steps.map((step, index) => {
    return {
      ...slideKeyframes[index],
      offset: step
    }
  })
}

/**
 * @param {number[]} steps  
 */
export function slideCSSKeframes(steps) {
  return steps.map((step, index) => {
    return `${step * 100}%{${Object.entries(slideKeyframes[index]).map((rule) => { return rule.join(': ') }).join(';')};}`
  }).join('')
}