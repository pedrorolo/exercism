type Nullable<T> = T | null;
interface Reducer<A, E> {
    (acc: A, el: E): A
}

export default class List<T> {

    constructor(public values: Array<T> = []) {
    }
    isEmpty(): boolean {
        return this.values.length == 0
    }
    first(): Nullable<T> {
        return this.isEmpty() ? null : this.values[0]
    }
    rest(): List<T> {
        if (this.isEmpty())
            return this;
        const [_fst, ...rst] = this.values;
        return new List(rst);
    }
    append(l: List<T>): List<T> {
        if (l.isEmpty())
            return this;
        else
            return new List([...this.values, l.first() as T]).append(l.rest());
    }
    concat(l: List<List<T>>): List<T> {
        if (l.isEmpty())
            return this;
        else
            return this.append(l.first() as List<T>).concat(l.rest());
    }
    foldl<A>(reducer: Reducer<A, T>, acc: A): A {
        if (this.isEmpty())
            return acc;
        else
            return this.rest().foldl(reducer, reducer(acc, this.first() as T))
    }
    filter(predicate: (el: T) => boolean) {
        const filterReducer =
            (acc: List<T>, el: T) => predicate(el) ? acc.append(new List([el])) : acc
        return this.foldl(filterReducer, new List())
    }
    length() {
        return this.foldl((acc, _e) => acc + 1, 0)
    }
    map<R>(mapper: (el: T) => R) {
        const mapReducer = (acc: List<R>, el: T) => acc.append(new List([mapper(el)]))
        return this.foldl(mapReducer, new List())
    }
    reverse() {
        const reverseReducer = (acc: List<T>, el: T) => new List([el]).append(acc)
        return this.foldl(reverseReducer, new List())
    }
    last() {
        return this.reverse().first()
    }
    foldr<A>(reducer: Reducer<A, T>, acc: A): A {
        if (this.isEmpty())
            return acc;
        else {
            const beforeLast = this.reverse().rest().reverse()
            return beforeLast.foldr(reducer, reducer(acc, this.last() as T))
        }
    }
}