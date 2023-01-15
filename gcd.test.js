const gcd = require('./gcd');

test('The least common divisor of 2 and 6 is 2', () => {
    expect(gcd(2, 6)).toBe(2);
})

test('The least common divisor of 2 and 7 is 1', () => {
    expect(gcd(2, 7)).toBe(1);
})

test('The least common divisor of 629 and 481 is 37', () => {
    expect(gcd(629, 481)).toBe(37);
})

test('The least common divisor of 481 and 629 is 37', () => {
    expect(gcd(481, 629)).toBe(37);
})

test('The least common divisor of 256 and 160 is 32', () => {
    expect(gcd(256, 160)).toBe(32);
})