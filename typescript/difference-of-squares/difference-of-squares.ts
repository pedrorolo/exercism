import { getHeapStatistics } from "v8";

function sumOfSquaress(n: number): number {
    return (n == 0) ? 0 : (n * n) + sumOfSquaress(n - 1);
}

function sums(n: number): number {
    return n == 0 ? 0 : n + sums(n - 1);
}


export default class Squares {
    sumOfSquares: number;
    squareOfSum: number;
    difference: number;
    constructor(n: number) {
        this.sumOfSquares = sumOfSquaress(n);
        const s: number = sums(n)
        this.squareOfSum = s * s;
        this.difference = this.squareOfSum - this.sumOfSquares
        return this;
    }

}