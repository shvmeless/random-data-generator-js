// IMPORTS
import randomInteger from '../../src/generators/random-integer'

// FUNCTION
function generateExample (params: {min: number, max: number}) {

  const { min, max } = params

  const range = Math.abs(max - min) + 1
  const length = range * 7

  const array: number[] = []
  for (let index = 0; index < length; index++) {
    const random = randomInteger({ min, max })
    array.push(random)
  }

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

  let params = { min: 5, max: 15 }
  let array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

  params = { min: -15, max: -5 }
  array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

  params = { min: -10, max: 10 }
  array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

})

// TEST
it('Should work when the min and max values are equal.', () => {

  let params = { min: -10, max: -10 }
  let array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

  params = { min: 0, max: 0 }
  array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

  params = { min: 10, max: 10 }
  array = generateExample(params)

  expect(array.min).toBe(params.min)
  expect(array.max).toBe(params.max)

})

// TEST
it('Should work when the min and max values are swapped.', () => {

  let params = { min: -1, max: -10 }
  let array = generateExample({ min: params.max, max: params.min })

  expect(array.min).toBe(params.max)
  expect(array.max).toBe(params.min)

  params = { min: 10, max: -10 }
  array = generateExample({ min: params.max, max: params.min })

  expect(array.min).toBe(params.max)
  expect(array.max).toBe(params.min)

  params = { min: 10, max: 1 }
  array = generateExample({ min: params.max, max: params.min })

  expect(array.min).toBe(params.max)
  expect(array.max).toBe(params.min)

})

// TEST
it('Should only generate integer numbers.', () => {

  const params = { min: -10, max: 10 }
  const array = generateExample(params)

  let areDecimals = true

  for (const value of array.values) {
    const remainder = Math.abs(value % 1)
    if (remainder > 0) areDecimals = false
  }

  expect(areDecimals).toBeTruthy()

})
