const bit = require('../src/bit')

describe('.isOn', () => {
  test.each([
    [0, 10, false],
    [1, 10, true],
    [2, 10, false],
    [3, 10, true]
  ])('The %dth bit %d is %s', (bitNum, num, expected) => {
    expect(bit.isOn(num, bitNum)).toBe(expected)
  })
})
