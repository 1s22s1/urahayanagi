exports.gcd = (m, n) => {
  let [a, b] = m > n ? [m, n] : [n, m]

  while (true) {
    const remainder = a % b

    if (remainder === 0) {
      return b
    }

    a = b
    b = remainder
  }
}

// m * n = gcd(m, n) * lcm(m, n) holds.
// cf. https://manabitimes.jp/math/1032
exports.lcm = (m, n) => {
  return m * n / this.gcd(m, n)
}
