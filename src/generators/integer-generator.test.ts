// IMPORTS
import randomInteger from './integer-generator'

// FUNCTION
function randomSample (options: Parameters<typeof randomInteger>[0]) {

  const { min, max } = options
  const range = Math.abs(max - min) + 1
  const count = range * 7

  const sample: number[] = []
  for (let index = 0; index < count; index++) {
    const random = randomInteger({ min, max })
    sample.push(random)
  }

  return {
    minGenerated: Math.min(...sample),
    maxGenerated: Math.max(...sample),
    sample: sample,
  }

}

// TEST
it('Should work with any range.', () => {

  let limits = { min: 5, max: 15 }
  let sample = randomSample(limits)

  expect(sample.minGenerated).toEqual(limits.min)
  expect(sample.maxGenerated).toEqual(limits.max)

  limits = { min: -15, max: -5 }
  sample = randomSample(limits)

  expect(sample.minGenerated).toEqual(limits.min)
  expect(sample.maxGenerated).toEqual(limits.max)

  limits = { min: -10, max: 10 }
  sample = randomSample(limits)

  expect(sample.minGenerated).toEqual(limits.min)
  expect(sample.maxGenerated).toEqual(limits.max)

})

// TEST
it('Should work with a range of 1.', () => {

  let limits = { min: -10, max: -10 }
  let sample = randomSample(limits)

  expect(sample.minGenerated).toEqual(limits.min)
  expect(sample.maxGenerated).toEqual(limits.max)

  limits = { min: 0, max: 0 }
  sample = randomSample(limits)

  expect(sample.minGenerated).toEqual(limits.min)
  expect(sample.maxGenerated).toEqual(limits.max)

  limits = { min: 10, max: 10 }
  sample = randomSample(limits)

  expect(sample.minGenerated).toEqual(limits.min)
  expect(sample.maxGenerated).toEqual(limits.max)

})

// TEST
it('Should fix a not valid range.', () => {

  let limits = { min: -1, max: -10 }
  let sample = randomSample({ min: limits.max, max: limits.min })

  expect(sample.minGenerated).toEqual(limits.max)
  expect(sample.maxGenerated).toEqual(limits.min)

  limits = { min: 10, max: -10 }
  sample = randomSample({ min: limits.max, max: limits.min })

  expect(sample.minGenerated).toEqual(limits.max)
  expect(sample.maxGenerated).toEqual(limits.min)

  limits = { min: 10, max: 1 }
  sample = randomSample({ min: limits.max, max: limits.min })

  expect(sample.minGenerated).toEqual(limits.max)
  expect(sample.maxGenerated).toEqual(limits.min)

})
