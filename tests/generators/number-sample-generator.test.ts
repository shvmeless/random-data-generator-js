// IMPORTS
import randomNumberSample from '../../src/generators/number-sample-generator'

// FUNCTION
function setOptions (options: {min: number, max: number}): Parameters<typeof randomNumberSample>[0] {

  return {
    min: options.min,
    max: options.max,
    amount: (Math.abs(options.max - options.min) + 1) * 7,
  }

}

// TEST
it('Should work with any range.', () => {

  let options = setOptions({ min: 5, max: 15 })
  let sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.min)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.max)

  options = setOptions({ min: -15, max: -5 })
  sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.min)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.max)

  options = setOptions({ min: -10, max: 10 })
  sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.min)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.max)

})

// TEST
it('Should work with a range of 1.', () => {

  let options = setOptions({ min: -10, max: -10 })
  let sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.min)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.max)

  options = setOptions({ min: 0, max: 0 })
  sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.min)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.max)

  options = setOptions({ min: 10, max: 10 })
  sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.min)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.max)

})

// TEST
it('Should fix a not valid range.', () => {

  let options = setOptions({ min: -1, max: -10 })
  let sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.max)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.min)

  options = setOptions({ min: 10, max: -10 })
  sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.max)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.min)

  options = setOptions({ min: 10, max: 1 })
  sample = randomNumberSample(options)

  expect(Math.min(...sample)).toBeGreaterThanOrEqual(options.max)
  expect(Math.max(...sample)).toBeLessThanOrEqual(options.min)

})

// TEST
it('Should generate decimal numbers.', () => {

  const options = setOptions({ min: -10, max: 10 })
  const sample = randomNumberSample(options)

  for (const value of sample) {
    expect(Math.abs(value % 1)).toBeGreaterThan(0)
  }

})
