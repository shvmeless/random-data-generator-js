
// FUNCTION
export default function randomNumberArray (
  params: { min: number, max: number, length: number },
): number[] {

  const min = Math.min(params.min, params.max)
  const max = Math.max(params.min, params.max)

  const length = params.length
  const range = Math.abs(max - min)

  const array: number[] = []

  while (array.length < length) {

    const random = Math.random() * range + min

    array.push(random)

  }

  return array

}
