
// FUNCTION
export default function randomNumberSample (
  options: { min: number, max: number, amount: number }
): number[] {

  const min = Math.min(options.min, options.max)
  const max = Math.max(options.min, options.max)
  const amount = options.amount

  const range = max - min

  const sample: number[] = []

  while (sample.length < amount) {

    const random = Math.random() * range + min

    sample.push(random)

  }

  return sample

}
