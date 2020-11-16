import { access } from "fs/promises";
const range = (x: number, y: number): number[] => {
    const result: number[] = []
    for (let i = x; i <= y; i++) {
        result.push(i)
    }
    return result;
}


const calculateAlphabet = (): string[] => {
    const a = "a".charCodeAt(0);
    const z = "z".charCodeAt(0);
    const codes: number[] = range(a, z);
    const alphabet: string[] = codes.map((c) => String.fromCharCode(c))
    return alphabet;
}

const alphabet: string[] = calculateAlphabet();
function id<T>(a: T): T { return a }



export default class Pangram {
    constructor(private sentence: string) { }
    isPangram(): boolean {
        if (this.sentence.length == 0) return false;
        type AccMap = Map<string, boolean>;
        const initMap = new Map(alphabet.map((c) => [c, false]))
        const reducer = (acc: AccMap, c: string): AccMap => {
            acc.set(c.toLowerCase(), true)
            return acc;
        }
        const accMap: AccMap =
            this.sentence
                .split('')
                .reduce(reducer, initMap)
        return !Array.from((accMap.values())).some((c: boolean) => c == false)

    }
}