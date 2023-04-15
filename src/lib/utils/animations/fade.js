/**
 * @param {number[]} steps  
 * @return {Keyframe[] | PropertyIndexedKeyframes} */
export function fade(steps) {

  const cssProps = [
    {
      opacity: 0
    },
    {
      opacity: 1
    },
    {
      opacity: 1
    },
    {
      opacity: 0
    },
  ]

  return steps.map((step, index) => {
    return {
      ...cssProps[index],
      offset: step
    }
  })
}