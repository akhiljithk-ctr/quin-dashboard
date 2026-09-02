// calling this function in main.tsx sets the font size fixed in all display scale
// example use in scss:
// font-size: calc(17px * var(--inverse-scale, 1))
// even if initDisplayScaleCompensation function is not used anymore, it won't break above SCSS, it will use the default given pixel
// so disabling this function doesn't need to have any change in scss code.

export function initDisplayScaleCompensation(): void {
  const updateScale = () => {
    const scaleFactor = window.devicePixelRatio || 1
    document.documentElement.style.setProperty('--inverse-scale', String(1 / scaleFactor))
  }

  updateScale()

  window
    .matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
    .addEventListener('change', updateScale)
}
