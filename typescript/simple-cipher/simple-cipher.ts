
type char = string;

const cc = (e: char): number => e.charCodeAt(0)
const c: (cc: number) => char = String.fromCharCode
const cz = cc('z')
const ca = cc('a')

const range = (start: number, end: number) =>
    Array.from(Array((end - start) + 1).keys()).map((k) => k + start)

const alphabet = String.fromCharCode(...range(cc('a'), cc('z')))

const shiftChar = (offset: number, input: char): char => {
    const inputIdx = alphabet.indexOf(input)
    const indexesSum = offset + inputIdx
    if (indexesSum >= alphabet.length)
        return alphabet[indexesSum - alphabet.length]
    else if (indexesSum < 0)
        return alphabet[indexesSum + alphabet.length]
    else
        return alphabet[indexesSum]
}
const unshiftChar = (offset: number, input: char): char => shiftChar(-offset, input)

type Key = string;

const randomChar = () => alphabet[Math.floor(Math.random() * alphabet.length)]




class SimpleCipher {
    public key: Key
    randomKey(): Key {
        const size = Math.floor(100 + Math.random() * 1000)
        return range(0, size).map(randomChar).join("")
    }
    constructor(key?: Key) {
        this.key = key ? key : this.randomKey();
    }
    offsetForIndex(idx: number) {
        const keyIdx = idx % this.key.length
        return alphabet.indexOf(this.key[keyIdx])
    }
    encodeChar(c: char, idx: number) {
        return shiftChar(this.offsetForIndex(idx), c)
    }
    decodeChar(c: char, idx: number) {
        return unshiftChar(this.offsetForIndex(idx), c)
    }
    encode(text: string): string {
        return text.split("").map(this.encodeChar.bind(this)).join("")
    }

    decode(text: string) {
        return text.split("").map(this.decodeChar.bind(this)).join("")
    }
}

export default SimpleCipher
