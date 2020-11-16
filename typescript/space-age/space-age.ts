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

const orbitsMap = new Map<string, number>(orbitsInSeconds)

const withTwoDecimalDigits = (n: number): number => Math.round(n * 100) / 100

class SpaceAge {
    constructor(public seconds: number) { }

    private ageOnPlanet(planet: string): number {
        const result = this.seconds / (orbitsMap.get(planet) as number)
        return withTwoDecimalDigits(result);
    }
    onEarth(): number { return this.ageOnPlanet("earth") }
    onMercury(): number { return this.ageOnPlanet("mercury") }
    onVenus(): number { return this.ageOnPlanet("venus") }
    onMars(): number { return this.ageOnPlanet("mars") }
    onJupiter(): number { return this.ageOnPlanet("jupiter") }
    onSaturn(): number { return this.ageOnPlanet("saturn") }
    onUranus(): number { return this.ageOnPlanet("uranus") }
    onNeptune(): number { return this.ageOnPlanet("neptune") }
}

export default SpaceAge;

