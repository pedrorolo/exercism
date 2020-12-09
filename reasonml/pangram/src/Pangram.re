/*
 In this implementation I tried to learn how to fiddle
 with Functors instead of attempting to do the shortest possible solution
 */

let (>>) = (f, g, x) => x |> f |> g;
let flip = (f, x, y) => f(y, x);

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
    succ == finish ? res : append(res, range(succ, finish));
  };
};

module OrdChar = {
  include Char;
  let succ = c => Char.code(c) + 1 |> Char.chr;
};

module RangeChar = MakeRange(OrdChar);

module CharSet = Set.Make(Char);

let alphabet: CharSet.t = RangeChar.range('a', 'z') |> CharSet.of_list;

module String = {
  include String;
  let chars = s => {
    s
    |> Js.String.split("")
    |> Array.map(flip(String.get, 0))
    |> Array.to_list;
  };
};

let isPangram: string => bool =
  String.chars
  >> List.map(Char.lowercase_ascii)
  >> CharSet.(of_list >> diff(alphabet) >> is_empty);
