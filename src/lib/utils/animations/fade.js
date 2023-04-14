/**
 * @param {number} steps 
 * @param {boolean} hasOut 
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function fade(steps, hasOut) {
  const keyframes = hasOut ? [
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
  ] :
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ]

  return keyframes;
}