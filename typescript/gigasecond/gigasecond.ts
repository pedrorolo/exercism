const GIGASECOND_MILIS = 1000000000000;
export default class Gigasecond {

    private beforeDate: Date;
    constructor(d: Date) {
        this.beforeDate = d;
        return this;
    }
    date(): Date {

        return new Date(this.beforeDate.valueOf() + GIGASECOND_MILIS);
    }
}