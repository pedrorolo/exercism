open Belt;
let twoFer = n =>
  Option.getWithDefault(n, "you") |> (n => {j|One for $n, one for me.|j});