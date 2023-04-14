import { getKeyframes } from "$lib/utils/getKeyframes";
import { createAnimateOpts } from "$lib/utils/createAnimateOpts";

/**
 * @param {HTMLElement} node
 * @param {Object} params
 * @param {number} params.steps
 * @param {number} params.duration
 * @param {string} params.type
 * @param {boolean} params.hasOut
 */
export const animate = (node, { type, steps, duration, hasOut = false }) => {
  node.animate(getKeyframes(type, steps, hasOut), createAnimateOpts(duration));
  return {
    /**
     * @param {Object} newParams
     * @param {number} newParams.steps
     * @param {number} newParams.duration
     */
    update({ steps, duration }) {
      node.animate(getKeyframes(type, steps, hasOut), createAnimateOpts(duration));
    },
  };
};