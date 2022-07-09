
// FUNCTION
export default function randomNumber (options: { min: number, max: number }): number {

  const min = Math.min(options.min, options.max)
  const max = Math.max(options.min, options.max)

  const range = max - min

  return Math.round((Math.random() * range + min))

}
