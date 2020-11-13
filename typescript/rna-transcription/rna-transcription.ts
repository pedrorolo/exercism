enum DNANuc {
    A = "A",
    C = "C",
    G = "G",
    T = "T"
};

enum RNANuc {
    A = "A",
    C = "C",
    G = "G",
    U = "U"
};


const dnaRnaMap = new Map([
    ["G", 'C'],
    ["C", 'G'],
    ["T", 'A'],
    ["A", 'U']]) as Map<DNANuc, RNANuc>;



const strToDNA = (s: string): DNANuc[] =>
    s.split('')
        .map((s) => {
            if (dnaRnaMap.has(s as DNANuc))
                return s as DNANuc
            else
                throw 'Invalid input DNA.'
        })

const rnaNucsToString = (nucs: Array<RNANuc>) => nucs.reduce((s, n) => s + n, "")


class Transcriptor {
    toRna(dnaStrand: string): string {
        let dnaNucs = strToDNA(dnaStrand);
        let rnaNucs = dnaNucs.map((n) => dnaRnaMap.get(n) as RNANuc);
        return rnaNucsToString(rnaNucs);
    }
}
export default Transcriptor;