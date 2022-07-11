
// FUNCTION
export default function randomIntegerArray (
  params: { min: number, max: number, length: number, repeat?: boolean },
): number[] {

  const min = Math.trunc(Math.min(params.min, params.max))
  const max = Math.trunc(Math.max(params.min, params.max))

  const range = Math.abs(max - min) + 1
  const repeat = params.repeat ?? true
  const length = repeat ? params.length : Math.min(params.length, range)

  const array: number[] = []

  while (array.length < length) {

    const random = Math.trunc(Math.random() * range) + min

    if (!repeat && array.indexOf(random) >= 0) continue
    else array.push(random)

  }

  return array

}
