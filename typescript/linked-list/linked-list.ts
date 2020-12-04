type Cell<T> = { prev: CellRef<T>, value: T, next: CellRef<T> }
type CellRef<T> = Cell<T> | null;

function newCell<T>(value: T): Cell<T> {
    return {
        prev: null,
        value: value,
        next: null
    }
}

export default class LinkedList<T>  {
    private start: CellRef<T>
    private end: CellRef<T>
    constructor() {
        this.start = null;
        this.end = null
    }
    push(element: T): LinkedList<T> {
        const cell: Cell<T> = newCell<T>(element)
        if (this.end) {
            const oldEnd = this.end
            this.end.next = cell
            cell.prev = oldEnd
        } else {
            this.start = cell
        }
        this.end = cell
        return this
    }
    pop(): T | null {
        if (this.end) {
            const value = this.end.value
            this.end = this.end.prev
            if (this.end == null)
                this.start = null
            return value;
        } else return null;
    }
    shift(): T | null {
        if (this.start) {
            const value = this.start.value
            this.start = this.start.next
            if (this.start == null)
                this.end = null
            return value;
        } else return null;
    }
    unshift(element: T): LinkedList<T> {
        const cell: Cell<T> = newCell<T>(element)
        if (this.start) {
            const oldStart = this.start
            this.start.prev = cell
            cell.next = oldStart
        } else {
            this.end = cell
        }
        this.start = cell
        return this
    }
    count(): number {
        let count = 0;
        let cell = this.start;
        while (cell) {
            count++;
            cell = cell.next
        }
        return count;
    }
    delete(val: T): LinkedList<T> {
        let cell = this.start;
        while (cell) {
            if (cell.value == val) {
                if (cell == this.start)
                    this.start = cell.next
                if (cell == this.end)
                    this.end = cell.prev
                const next = cell.next;
                const prev = cell.prev;
                if (next)
                    next.prev = prev;
                if (prev)
                    prev.next = next;
            }
            cell = cell.next
        }
        return this
    }
}