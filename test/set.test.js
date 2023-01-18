const set = require('../src/set')

describe('union', () => {
  test('given 1, 2 and 2, 4 is 1, 2, 4', () => {
    expect(set.union([1, 2], [2, 4])).toEqual([1, 2, 4])
  })

  test('given 1, 2 and 1, 2 is 1, 2', () => {
    expect(set.union([1, 2], [1, 2])).toEqual([1, 2])
  })

  test('given 1, 2 and the empty set is 1, 2', () => {
    expect(set.union([1, 2], [])).toEqual([1, 2])
  })
})

describe('intersection', () => {
  test('given 1, 2 and 2, 4 is 1, 2, 4', () => {
    expect(set.intersection([1, 2], [2, 4])).toEqual([2])
  })

  test('given 1, 2 and 1, 2 is 1, 2', () => {
    expect(set.intersection([1, 2], [1, 2])).toEqual([1, 2])
  })

  test('given 1, 2 and the empty set is 1, 2', () => {
    expect(set.intersection([1, 2], [])).toEqual([])
  })
})

describe('difference', () => {
  test('given 1, 2 and 2, 4 is 1, 2, 4', () => {
    expect(set.difference([1, 2], [2, 4])).toEqual([1])
  })

  test('given 1, 2 and 1, 2 is 1, 2', () => {
    expect(set.difference([1, 2], [1, 2])).toEqual([])
  })

  test('given 1, 2 and the empty set is 1, 2', () => {
    expect(set.difference([1, 2], [])).toEqual([1, 2])
  })
})
