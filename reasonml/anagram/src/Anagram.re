let (>>) = (f, g, x) => g(f(x));
let flip = (f, x, y) => f(y, x);

module String = {
  include String;
  let chars: string => array(string) = Js.String.split("");
  let sort: string => string =
    chars >> Array.to_list >> List.sort(String.compare) >> String.concat("");
  let toLower = Js.String.toLowerCase;

  let sortAndLowercase: string => string = toLower >> sort;
};

let anagrams: (string, list(string)) => list(string) =
  (string, candidates) => {
    let sortedAndLowercased = String.sortAndLowercase @@ string;
    let isAnagram: string => bool =
      candidate =>
        candidate
        |> String.sortAndLowercase
        |> String.equal(sortedAndLowercased)
        && !String.equal(String.toLower(candidate), String.toLower(string));
    candidates |> List.filter(isAnagram);
  };
