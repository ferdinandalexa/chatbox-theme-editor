/**@param {string} css*/
export function compressCSS(css) {
  return css.trim()
    .replace(/\s*([;,{}])\s*/g, "$1")
    .replace(/\/\*.*\*\//g, "")
    .replace(/\n/g, "")
}