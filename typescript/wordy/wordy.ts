
export const ArgumentError = "The question is not a math problem"

const repeatChar = (char: string, times: number) => {
    if (times == 0)
        return "";
    else
        return char + repeatChar(char, times - 1)
}

export class WordProblem {
    constructor(public question: string) { }
    answer(): number {
        const mathValueMatches = this.question.match(/What is ([^\?]+)?/);
        if (!mathValueMatches || !mathValueMatches[1])
            throw (ArgumentError)
        const mathValue = mathValueMatches[1] as string
        const mathString = mathValue
            .replace(/minus/g, ") -")
            .replace(/plus/g, ") +")
            .replace(/multiplied by/g, ") *")
            .replace(/divided by/g, " ) /")
        if (/^[\ \- \+ \* \/\)\(0-9]*$/.test(mathString)) {
            const closeParensMatches = mathString.match(/(\))/g)
            const mathStringWithOpenParens = mathString
                ? repeatChar("(", (closeParensMatches?.length as number)) + mathString
                : mathString;
            try {
                return eval(mathStringWithOpenParens)
            } catch (_e) {
                throw (ArgumentError)
            }
        } else
            throw (ArgumentError)
    }
}