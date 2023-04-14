/**
 * @param {number} steps 
 * @param {boolean} hasOut 
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function slide(steps, hasOut) {
  const keyframes = hasOut ? [
    {
      opacity: 0,
      transform: "translateX(16px)",
      offset: 0,
    },
    {
      opacity: 1,
      transform: "none",
      offset: steps,
    },
    {
      opacity: 1,
      transform: "none",
      offset: 1 - steps,
    },
    {
      opacity: 0,
      transform: "translateX(16px)",
      offset: 1,
    },
  ] : [
    {
      opacity: 0,
      transform: "translateX(16px)",
    },
    {
      opacity: 1,
      transform: "none",
    },
  ]

  return keyframes;
}