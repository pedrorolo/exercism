open Belt
let twoFer = (name) => {
    Option.getWithDefault(name,"you")
      |> (n) => {j|One for $n, one for me.|j};
}