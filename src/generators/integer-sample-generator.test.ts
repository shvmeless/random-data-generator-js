// IMPORTS
import randomIntegerSample from './integer-sample-generator'

// FUNCTION
function setOptions (options: {min: number, max: number, repeat: boolean}): Parameters<typeof randomIntegerSample>[0] {

  return {
    min: options.min,
    max: options.max,
    amount: (Math.abs(options.max - options.min) + 1) * 7,
    repeat: options.repeat
  }

}

// TEST
it('Should work with any range.', () => {

  let options = setOptions({ min: 5, max: 15, repeat: true })
  let sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.min)
  expect(Math.max(...sample)).toBe(options.max)

  options = setOptions({ min: -15, max: -5, repeat: true })
  sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.min)
  expect(Math.max(...sample)).toBe(options.max)

  options = setOptions({ min: -10, max: 10, repeat: true })
  sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.min)
  expect(Math.max(...sample)).toBe(options.max)

})

// TEST
it('Should work with a range of 1.', () => {

  let options = setOptions({ min: -10, max: -10, repeat: true })
  let sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.min)
  expect(Math.max(...sample)).toBe(options.max)

  options = setOptions({ min: 0, max: 0, repeat: true })
  sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.min)
  expect(Math.max(...sample)).toBe(options.max)

  options = setOptions({ min: 10, max: 10, repeat: true })
  sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.min)
  expect(Math.max(...sample)).toBe(options.max)

})

// TEST
it('Should fix a not valid range.', () => {

  let options = setOptions({ min: -1, max: -10, repeat: true })
  let sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.max)
  expect(Math.max(...sample)).toBe(options.min)

  options = setOptions({ min: 10, max: -10, repeat: true })
  sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.max)
  expect(Math.max(...sample)).toBe(options.min)

  options = setOptions({ min: 10, max: 1, repeat: true })
  sample = randomIntegerSample(options)

  expect(Math.min(...sample)).toBe(options.max)
  expect(Math.max(...sample)).toBe(options.min)

})

// TEST
it('Should not repeat numbers when the repeat options is disabled.', () => {

  const options = setOptions({ min: -10, max: 10, repeat: false })
  const sample = randomIntegerSample(options)

  const uniques: number[] = []

  for (const number of sample) {
    expect(uniques).not.toContain(number)
    uniques.push(number)
  }

})

// TEST
it('Should set a new amount equal to the range if the range is less than the amount.', () => {

  const min = -10
  const max = 10
  const range = Math.abs(max - min) + 1
  const amount = 100

  const sample = randomIntegerSample({ min, max, amount, repeat: false })

  expect(sample.length).toBe(range)

})
