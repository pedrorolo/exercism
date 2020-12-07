const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

type Pair = [number, number]

interface Pair2Pair {
    (pair: Pair): Pair
}

export default class Rational {
    constructor(public numerator: number, private denominator: number) {
        if (numerator == 0)
            denominator = 1
        if (denominator < 0) {
            denominator = - denominator
            numerator = - numerator
        }
        const thisGcd = gcd(numerator, denominator)
        this.numerator = numerator / thisGcd
        this.denominator = denominator / thisGcd
    }
    asPair(): [number, number] {
        return [this.numerator, this.denominator]
    }

    map(fn: Pair2Pair): Rational {
        return new Rational(...fn(this.asPair()))
    }
    add(other: Rational): Rational {
        return this.map(([a1, b1]): [number, number] => {
            const [a2, b2] = other.asPair()
            return [a1 * b2 + a2 * b1, b1 * b2];
        });
    }
    sub(other: Rational): Rational {
        return this.add(new Rational(-other.numerator, other.denominator))
    }
    mul(other: Rational): Rational {
        return this.map(([a1, b1]) => {
            const [a2, b2] = other.asPair()
            return [(a1 * a2), (b1 * b2)]
        });
    }
    inverse(): Rational {
        return this.map(([a, b]) => [b, a])
    }
    div(other: Rational): Rational {
        return this.mul(other.inverse())
    }
    abs(): Rational {
        return this.map(([n, d]) => [n < 0 ? -n : n, d])

    }
    exprational(exp: number): Rational {
        return this.map(([n, d]) => [n ** exp, d ** exp])
    }

    expreal(x: number): number {
        const [a, b] = this.asPair()
        // See https://en.wikipedia.org/wiki/Nth_root#Logarithmic_calculation
        // Using logarithmic calculation gets us the precision necessary to pass
        // the test "Raise a real number to a positive rational number".
        return 2 ** (Math.log2(x ** a) / b);
    }
    reduce(): Rational {
        return this.map((p) => p)
    }
}