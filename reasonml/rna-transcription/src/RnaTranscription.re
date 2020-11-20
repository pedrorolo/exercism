type dna =
  | A
  | C
  | G
  | T;

type rna =
  | A
  | C
  | G
  | U;


let toRnaNucleide: dna => rna = a => switch(a) {
| G => C
| C => G
| T => A 
| A => U
};

let toRna: list(dna) => list(rna) = List.map(toRnaNucleide)