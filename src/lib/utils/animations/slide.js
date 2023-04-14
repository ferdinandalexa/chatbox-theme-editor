/**
 * @param {number} steps 
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function slide(steps) {
  const keyframes = [
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
  ];

  return keyframes;
}