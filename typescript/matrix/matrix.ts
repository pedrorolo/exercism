/* eslint-disable @typescript-eslint/explicit-function-return-type */




class Matrix {
    rows: number[][];
    columns: number[][];
    constructor(s: string) {
        const lines = s.split("\n").filter((a) => a != "")
        const isNotNan = (a: any) => !isNaN(a)
        const parseLine = (l: string) => l.split(" ").map((i) => parseInt(i)).filter(isNotNan)
        const rows = lines.map(parseLine)
        this.rows = rows
        const columnsFromRows = () => {
            return rows[0].map((_: unknown, rowIdx: number) =>
                rows.map((r: number[]) => r[rowIdx]))
        }
        this.columns = rows.length == 0 ? [] : columnsFromRows()
    }
}

export default Matrix
