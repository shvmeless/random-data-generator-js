
// FUNCTION
export default function randomIntegerSample (
  options: { min: number, max: number, amount: number, repeat?: boolean }
): number[] {

  const min = Math.trunc(Math.min(options.min, options.max))
  const max = Math.trunc(Math.max(options.min, options.max))

  const range = max - min + 1

  const repeat = options.repeat ?? true
  const amount = repeat ? options.amount : Math.min(options.amount, range)

  const sample: number[] = []

  while (sample.length < amount) {

    const random = Math.trunc(Math.random() * range) + min

    if (!repeat && sample.indexOf(random) >= 0) continue
    else sample.push(random)

  }

  return sample

}
