// IMPORTS
import randomIntegerArray from '../../src/generators/random-integer-array'

// FUNCTION
function generateExample (params: {min: number, max: number, repeat: boolean}) {

  const { min, max, repeat } = params

  const range = Math.abs(max - min)
  const length = range * 7

  const array = randomIntegerArray({ min, max, length, repeat })

  return {
    min: Math.min(...array),
    max: Math.max(...array),
    length: length,
    range: range,
    values: array,
  }

}

// TEST
it('Should work with any range of min and max values.', () => {

  let params = { min: 5, max: 15, repeat: true }
  let array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

  params = { min: -15, max: -5, repeat: true }
  array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

  params = { min: -10, max: 10, repeat: true }
  array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

})

// TEST
it('Should work when the min and max values are equal.', () => {

  let params = { min: 10, max: 10, repeat: true }
  let array = generateExample(params)

  expect(array.min).toBeGreaterThanOrEqual(params.min)
  expect(array.max).toBeLessThanOrEqual(params.max)

  params = { min: 0, max: 0, repeat: true }
  array = generateExample(params)

  expect(array.min).toBeGreaterThanOrEqual(params.min)
  expect(array.max).toBeLessThanOrEqual(params.max)

  params = { min: -10, max: -10, repeat: true }
  array = generateExample(params)

  expect(array.min).toBeGreaterThanOrEqual(params.min)
  expect(array.max).toBeLessThanOrEqual(params.max)

})

// TEST
it('Should work when the min and max values are swapped.', () => {

  let params = { min: 10, max: 1, repeat: true }
  let array = generateExample(params)

  expect(array.min).toBeGreaterThanOrEqual(params.max)
  expect(array.max).toBeLessThanOrEqual(params.min)

  params = { min: 10, max: -10, repeat: true }
  array = generateExample(params)

  expect(array.min).toBeGreaterThanOrEqual(params.max)
  expect(array.max).toBeLessThanOrEqual(params.min)

  params = { min: -1, max: -10, repeat: true }
  array = generateExample(params)

  expect(array.min).toBeGreaterThanOrEqual(params.max)
  expect(array.max).toBeLessThanOrEqual(params.min)

})

// TEST
it('Should return an array with the expected size.', () => {

  let params = { min: 1, max: 10, repeat: true, length: 100 }
  let array = randomIntegerArray(params)

  expect(array.length).toBe(100)

  params = { min: 1, max: 10, repeat: true, length: 0 }
  array = randomIntegerArray(params)

  expect(array.length).toBe(0)

  params = { min: 1, max: 10, repeat: true, length: -100 }
  array = randomIntegerArray(params)

  expect(array.length).toBe(0)

})

// TEST
it('Should only generate integer numbers.', () => {

  const params = { min: -10, max: 10, repeat: true }
  const array = generateExample(params)

  let areDecimals = true

  for (const value of array.values) {
    const remainder = Math.abs(value % 1)
    if (remainder > 0) areDecimals = false
  }

  expect(areDecimals).toBeTruthy()

})

// TEST
it('Should not repeat numbers when the repeat options is disabled.', () => {

  const params = { min: 1, max: 10, repeat: false }
  const array = generateExample(params)

  const uniques: number[] = []

  for (const number of array.values) {
    expect(uniques).not.toContain(number)
    uniques.push(number)
  }

})

// TEST
it('Should set a new length equal to the range if the range is less than the length.', () => {

  const params = { min: -10, max: 10, repeat: false, length: 100 }
  const array = randomIntegerArray(params)

  const range = Math.abs(params.max - params.min + 1)

  expect(array.length).toBe(range)

})
