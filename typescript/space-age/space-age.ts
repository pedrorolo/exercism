const earthPeriod = 31557600

type IndexedDict = [string, number][]

const orbitsInEarthYears: IndexedDict = [
    ["earth", 1],
    ["mercury", 0.2408467],
    ["venus", 0.61519726],
    ["mars", 1.8808158],
    ["jupiter", 11.862615],
    ["saturn", 29.447498],
    ["uranus", 84.016846],
    ["neptune", 164.79132]
];

const orbitsInSeconds: IndexedDict = orbitsInEarthYears.map(([p, orbit]) => [p, orbit * earthPeriod])

const withTwoDecimalDigits = (n: number): number => Math.round(n * 100) / 100

interface SpaceAge {
    [onPlanet: string]: any
}

const capitalize = (myString: string): string => myString.replace(/^\w/, (c) => c.toUpperCase());

class SpaceAge {
    constructor(public seconds: number) {
        orbitsInSeconds.forEach(([planet, orbit]) => {
            const ageOnPlanet = withTwoDecimalDigits(seconds / orbit);
            this["on" + capitalize(planet)] = (): number => ageOnPlanet
        })
    }

}

export default SpaceAge;

