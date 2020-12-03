type ClockStruct = { hours: number, minutes: number }


const balance = (hours: number, minutes: number): ClockStruct => {
    if (minutes < 0) {
        hours -= Math.ceil(Math.abs(minutes / 60))
        minutes = 60 + minutes % 60
    }
    if (minutes >= 60) {
        hours += Math.floor(minutes / 60)
        minutes = minutes % 60
    }
    if (hours < 0) {
        hours = 24 - (Math.abs(hours) % 24)
    }
    if (hours >= 24) {
        hours = hours % 24
    }
    return { hours, minutes }
}

const padTwoDigitNumber = (n: number): string => n >= 10 ? "" + n : "0" + n;

export default class Clock {
    constructor(private hours: number, private minutes = 0) {
        const { hours: hs, minutes: ms } = balance(hours, minutes)
        this.hours = hs
        this.minutes = ms
    }
    toString(): string {
        return `${padTwoDigitNumber(this.hours)}:${padTwoDigitNumber(this.minutes)}`
    }
    plus(minutes: number): Clock {
        const { hours: hs, minutes: ms } = balance(this.hours, this.minutes + minutes)
        this.hours = hs
        this.minutes = ms
        return this;
    }
    minus(minutes: number): Clock {
        return this.plus(-minutes)
    }
    equals(clock: Clock): boolean {
        return this.toString() == clock.toString()
    }
}