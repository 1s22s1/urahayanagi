function gcd(m, n) {
    let [a, b] = m > n ? [m, n] : [n, m];

    while(true) {
        const quotient = Math.floor(a / b);
        const remainder = a % b;

        if (remainder == 0) {
            return b;
        }

        a = b;
        b = remainder;
    }

}

module.exports = gcd;