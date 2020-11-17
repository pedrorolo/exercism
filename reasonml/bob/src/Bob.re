let hasNoLetters: string => bool =
  s => s |> Js.String.match([%re "/.*[a-zA-Z].*/"]) |> Belt.Option.isNone;

let isYell: string => bool =
  s => String.(s == uppercase(s) && !(s |> hasNoLetters));

let isNothing: string => bool = s => s |> String.trim == "";
let isQuestion: string => bool =
  s => s |> String.trim |> Js.String.endsWith("?");
type predicateResults = {
  isQuestion: bool,
  isYell: bool,
  isNothing: bool,
};

let hey = (s): string => {
  let predicates = [isQuestion, isYell, isNothing];
  let applyToS: (string => bool) => bool = (|>)(s);
  let [isQuestion, isYell, isNothing]: list(bool) =
    predicates |> List.map(applyToS);
  let predicateResults = {isQuestion, isYell, isNothing};

  switch (predicateResults) {
  | {isNothing: true, isQuestion: false} => "Fine. Be that way!"
  | {isQuestion: true, isYell: true} => "Calm down, I know what I'm doing!"
  | {isQuestion: true} => "Sure."
  | {isYell: true} => "Whoa, chill out!"
  | _ => "Whatever."
  };
};
