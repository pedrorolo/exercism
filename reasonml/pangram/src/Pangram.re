let (>>) = (f, g, x) => x |> f |> g;
let flip = (f, x, y) => f(y, x);

/*
 this stuff is just to get a flavor of how to work with functors.
 I know its a huge YAGNI
 */
module type Ord = {
  type t;
  let succ: t => t;
};

module MakeRange = (O: Ord) => {
  include O;
  let rec range = (start, finish) => {
    open List;
    let succ = O.succ(start);
    let res = [start, succ];
    start == finish ? res : append(res, range(succ, finish));
  };
};

module OrdChar = {
  include Char;
  let succ = c => Char.code(c) + 1 |> Char.chr;
};

module RangeChar = MakeRange(OrdChar);

module CharSet = Set.Make(Char);

module String = {
  include String;
  let chars = s => {
    s->Js.String.split("")
    |> Array.map(flip(String.get, 0))
    |> Array.to_list;
  };
};

let alphabet: CharSet.t = RangeChar.range('a', 'z') |> CharSet.of_list;

let isPangram: string => bool = s => {};
