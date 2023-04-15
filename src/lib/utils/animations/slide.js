/**
 * @param {number[]} steps 
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function slide(steps) {

  const cssProps = [
    {
      opacity: 0,
      transform: "translateX(16px)",
    },
    {
      opacity: 1,
      transform: "none",
    },
    {
      opacity: 1,
      transform: "none",
    },
    {
      opacity: 0,
      transform: "translateX(16px)",
    },
  ]

  return steps.map((step, index) => {
    return {
      ...cssProps[index],
      offset: step
    }
  })
}