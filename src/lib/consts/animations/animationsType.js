/** @type {Keyframe[]} */
const slideKeyframes = [
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

/** @type {Keyframe[]} */
const fadeKeyframes = [
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

/** @type {Object<string, Keyframe[]>} */
export const animationsType = {
  slide: slideKeyframes,
  fade: fadeKeyframes
}