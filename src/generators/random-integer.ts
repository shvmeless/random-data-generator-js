
// FUNCTION
export default function randomInteger (params: { min: number, max: number }): number {

  const min = Math.trunc(Math.min(params.min, params.max))
  const max = Math.trunc(Math.max(params.min, params.max))

  const range = max - min + 1

  return Math.trunc(Math.random() * range) + min

}
