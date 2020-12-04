

type SortedArray = number[] | undefined

type BinarySearchResult = number | null

const binarySearch = (value: number, array: SortedArray): BinarySearchResult => {

    if (!array || array.length == 0)
        return null
    else {
        const attemptedIndex = Math.floor(array.length / 2)
        const attemptedValue = array[attemptedIndex]
        if (attemptedValue == value)
            return attemptedIndex;
        else {
            if (attemptedValue > value) {
                const subarray = array.slice(0, attemptedIndex)
                return binarySearch(value, subarray)
            } else {
                const subarray = array.slice(attemptedIndex + 1, array.length)
                const subres = binarySearch(value, subarray)
                return subres != null ? attemptedIndex + 1 + subres : null
            }
        }
    }
}

export default class BinarySearch {
    array: SortedArray;
    constructor(array: number[]) {
        const sortedArray = Array.from(array).sort((a, b) => a - b)
        if (sortedArray.toString() == array.toString())
            this.array = sortedArray as number[];
        else
            this.array = undefined
    }
    indexOf(value: number): number {
        return binarySearch(value, this.array) || -1
    }
}
