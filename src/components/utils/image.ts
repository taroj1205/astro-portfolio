export const generateSizesAndWidths = (width: number, height: number) => {
  const aspectRatio = height / width
  const w = Math.round(width * aspectRatio)
  const h = Math.round(height * aspectRatio)
  const widths = [284, 557, 784].map((w) => Math.round(w * aspectRatio))
  const sizes = `(max-width: 600px) ${widths[0]}px, (max-width: 900px) ${widths[1]}px, ${widths[2]}px`
  return { width: w, height: h, widths, sizes }
}
