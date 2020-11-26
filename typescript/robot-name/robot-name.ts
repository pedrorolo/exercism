import { match } from "assert"

type RobotsExistenceDict = {
    [key: string]: boolean
}

const robots: RobotsExistenceDict = {}



const randomBetween = (x: number, y: number) => {
    const domainSize = y - x
    const randWithout1 = (): number => {
        const rand = Math.random()
        if (rand != 1)
            return rand
        return randWithout1()
    }
    return x + Math.floor((domainSize + 1) * randWithout1())
}


const genRandUpcaseLetter = () => {
    const code = (letter: string) => letter.codePointAt(0) as number
    const a = code("A")
    const z = code("Z")
    return String.fromCodePoint(randomBetween(a, z))
}


const genRandomNumDigit = () => {
    return "" + randomBetween(0, 9)
}

const genRobotName = (): string => {
    const d = genRandomNumDigit
    const l = genRandUpcaseLetter
    const candidate = l() + l() + d() + d() + d()
    if (!robots[candidate]) {
        robots[candidate] = true
        return candidate;
    }
    return genRobotName()
}

export default class RobotName {
    name: string
    constructor() {
        this.name = genRobotName()
    }
    resetName(): void {
        this.name = genRobotName()
    }
}
