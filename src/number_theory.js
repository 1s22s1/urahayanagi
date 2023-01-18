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