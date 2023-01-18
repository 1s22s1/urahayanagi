const union = require('./set')

test('The union of 1, 2, 3, 4 and 2, 4, 6, 8 is 1, 2, 3, 4, 6, 8', () => {
    expect(union([1, 2, 3, 4], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 6, 8])
})

test('The union of 1, 2, 3, 4 and 1, 2, 3, 4 is 1, 2, 3, 4', () => {
    expect(union([1, 2, 3, 4], [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('The union of 1, 2, 3, 4 and the empty set is 1, 2, 3, 4', () => {
    expect(union([1, 2, 3, 4], [])).toEqual([1, 2, 3, 4])
})
