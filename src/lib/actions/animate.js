import { getKeyframes } from "$lib/utils/getKeyframes";
import { createAnimateOpts } from "$lib/utils/createAnimateOpts";

/**
 * @param {HTMLElement} node
 * @param {Object} params
 * @param {number} params.steps
 * @param {number} params.duration
 */
export const animate = (node, { steps, duration }) => {
  node.animate(getKeyframes(steps), createAnimateOpts(duration));
  return {
    /**
     * @param {Object} newParams
     * @param {number} newParams.steps
     * @param {number} newParams.duration
     */
    update({ steps, duration }) {
      console.log(duration);
      node.animate(getKeyframes(steps), createAnimateOpts(duration));
    },
  };
};