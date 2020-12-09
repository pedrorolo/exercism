let (>>) = (f, g, x) => g(f(x));
let flip = (f, x, y) => f(y, x);

module Set = {
  include Set;
  module Char = Set.Make(Char);
};

module String = {
  include String;
  let chars: string => array(char) =
    Js.String.split("") >> Array.map(flip(String.get, 0));
  let letters: string => array(char) =
    chars >> Js.Array.filter(c => c >= 'A' && c <= 'z');
};

module Option = {
  include Belt.Option;
  let bind: ('t => option('o), option('t)) => option('o) =
    (f, opt) =>
      switch (opt) {
      | None => None
      | Some(a) => f(a)
      };
  let (>==) = flip(bind);
};

let is_isogram: string => bool =
  s => {
    open Option;
    open Set.Char;
    let isogramChars: option(Set.Char.t) = Some(empty);
    let accReducer = (acc, char) => {
      acc
      >== (
        chars => {
          let char = char |> Char.lowercase;
          find_opt(char, chars) == None ? Some(add(char, chars)) : None;
        }
      );
    };
    String.(
      s
      |> letters
      |> Array.fold_left(accReducer, isogramChars)
      |> Option.isSome
    );
  };
