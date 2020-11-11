function isLeapYear(year: number): boolean {
    const yrDivBy = (n: number): boolean => (year % n) == 0;
    return yrDivBy(4) && (!yrDivBy(100) && !yrDivBy(400))
}

export default isLeapYear