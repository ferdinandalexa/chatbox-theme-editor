import { getKeyframes } from "$lib/utils/getKeyframes";
import { createAnimateOpts } from "$lib/utils/createAnimateOpts";

/** @typedef {import('$lib/types/animations').AnimateProps} AnimateProps */

/**
 * @param {HTMLElement} node
 * @param {AnimateProps} params
 */

export const animate = (node, { type, animationTimeRatio, duration, hideOldMessages = false }) => {
  node.animate(getKeyframes(type, animationTimeRatio, hideOldMessages), createAnimateOpts(duration));
};