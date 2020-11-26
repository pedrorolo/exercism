let (>>) = (f, g,x) => g(f(x))
let id = (a) => a
let validate: int => bool = (n) =>{
    let string = Belt.Int.toString @@ n
    let digitFloats: array(float) = 
        string 
        |> Js.String.split("") 
        |> Array.map(Belt.Float.fromString >> Belt.Option.getUnsafe);
    let nLength: float = string |> Js.String.length |> Belt.Float.fromInt  
    let amstrongParcels = digitFloats |> Array.map((n) => n ** nLength)
    let amstrongSum = amstrongParcels |> Array.fold_left((+.),0.0)
    Belt.Int.fromFloat(amstrongSum) == n
}

