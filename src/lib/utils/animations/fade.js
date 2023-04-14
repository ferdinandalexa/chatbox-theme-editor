/**
 * @param {number} steps 
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function fade(steps) {
  const keyframes = [
    {
      opacity: 0,
      offset: 0,
    },
    {
      opacity: 1,
      offset: steps,
    },
    {
      opacity: 1,
      offset: 1 - steps,
    },
    {
      opacity: 0,
      offset: 1,
    },
  ];

  return keyframes;
}