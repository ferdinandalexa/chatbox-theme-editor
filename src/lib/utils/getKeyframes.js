import { animationsType } from '../consts/animations/animationsType';

/**
 * @param {string} type
 * @param {number} animationTimeRatio
 * @param {boolean} hideOldMessages
 * @return {Keyframe[] | PropertyIndexedKeyframes}
 * */
export function getKeyframes (type, animationTimeRatio, hideOldMessages) {
  /** @type {number[]} */

  const steps = hideOldMessages
    ? [0, animationTimeRatio, 1 - animationTimeRatio, 1]
    : [0, 1];

  const animationSelected = animationsType[type] ?? [];

  if (animationSelected.length > 0) {
    return steps.map((step, index) => {
      return {
        ...animationSelected[index],
        offset: step
      };
    });
  }

  return [];
}

/**
 * @param {string} type
 * @param {number} animationTimeRatio
 * @param {boolean} hideOldMessages
 * */
export function getCSSKeyframes (type, animationTimeRatio, hideOldMessages) {
  /** @type {number[]} */

  const steps = hideOldMessages
    ? [0, animationTimeRatio, 1 - animationTimeRatio, 1]
    : [0, 1];

  const animationSelected = animationsType[type] ?? [];
  console.log(animationSelected);

  if (animationSelected.length > 0) {
    return steps.map((step, index) => {
      const CSSPropertiesMap = Object.entries(animationSelected[index]).map((rule) => { return rule.join(': '); }).join(';');
      return `${step * 100}%{${CSSPropertiesMap};}`;
    }).join('');
  }

  return '';
}
