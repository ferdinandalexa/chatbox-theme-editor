/**
 * @param {number} duration
 * @return {KeyframeAnimationOptions}
 * */
export function createAnimateOpts(duration) {
  return {
    duration,
    fill: "both",
  };
}