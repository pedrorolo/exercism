open Belt
let divBy(x,y)= x mod y == 0

let raindrops: int => string = (n) => {
    let divBy = (d) => (n mod d)  == 0
    
    let divMap = 
        [(3, "Pling"),
         (5, "Plang"),
         (7, "Plong")]
    let answers: string = List.(
        divMap 
        -> keep(((d,_)) => divBy(d)) 
        -> map(((_,a)) => a)
        |> String.concat(""))
    answers == "" ?  Int.toString(n) : answers

}