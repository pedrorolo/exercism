type char = string;
type alphabet = char[]
type Option<T> =
    | T
    | null;


const intRange = (a: number, b: number): number[] => [...Array((b + 1) - a).keys()].map((e) => a + e)

const charCode = (c: char): number => c.charCodeAt(0)

const codesChrs: (...codes: number[]) => string = String.fromCharCode

const charRange = (a: char, b: char): char[] => codesChrs(...intRange(
    charCode(a),
    charCode(b))).split("")


const lowerCaseAlphabet: alphabet = charRange('a', 'z')

const encodeLetter = (c: char): Option<char> => {
    const a = lowerCaseAlphabet
    const idx = a.indexOf(c)
    return idx != -1 ? a[a.length - 1 - idx] : null
}

const splitIntoGroupsOf5 = (a: Array<char>): string => {
    const reducer = (acc: string[], elt: char): string[] => {
        const lastGroup = acc[acc.length - 1]
        if (!lastGroup || lastGroup.length == 5 || lastGroup.length == 0) {
            acc.push(elt)
        } else {
            acc[acc.length - 1] = [lastGroup, elt].join("")
        }
        return acc;
    };
    return a.reduce(reducer, []).join(" ");
}

const encodeNumber =
    (c: char): Option<char> =>
        charRange("0", "9").includes(c) && c || null


const encodeChar = (c: char): Option<char> => (
    encodeLetter(c.toLowerCase())
    || encodeNumber(c))

const decodeChar = encodeChar

export default class AtbashCipher {
    encode(s: string): string {
        const chars: char[] = s.split("")
            .map(encodeChar)
            .filter((c) => !!c) as char[]
        return splitIntoGroupsOf5(chars)
    }
    decode(s: string): string {
        return s.split("").map(decodeChar).join("")
    }
}