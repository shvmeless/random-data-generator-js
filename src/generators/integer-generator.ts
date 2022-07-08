
// FUNCTION
export default function randomInteger (options: { min: number, max: number }): number {

  const min = Math.trunc(Math.min(options.min, options.max))
  const max = Math.trunc(Math.max(options.min, options.max))

  const range = max - min + 1

  return Math.trunc(Math.random() * range) + min

}
