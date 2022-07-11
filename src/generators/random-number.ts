
// FUNCTION
export default function randomNumber (params: { min: number, max: number }): number {

  const min = Math.min(params.min, params.max)
  const max = Math.max(params.min, params.max)

  const range = Math.abs(max - min)

  return Math.random() * range + min

}
