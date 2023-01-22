const bit = require('../src/bit')

describe('isOn', () => {
  test('The 0th bit of 10 is off', () => {
    expect(bit.isOn(10, 0)).toBe(false)
  })

  test('The 1st bit of 10 is on', () => {
    expect(bit.isOn(10, 1)).toBe(true)
  })

  test('The 2nd bit of 10 is off', () => {
    expect(bit.isOn(10, 2)).toBe(false)
  })

  test('The 3rd bit of 10 is on', () => {
    expect(bit.isOn(10, 3)).toBe(true)
  })
})
