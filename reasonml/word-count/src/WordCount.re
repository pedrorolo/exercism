open Belt
module StringCounter = {
  type t = Js.Dict.t(int);
  let empty: unit => t = () => Js.Dict.empty()
  let countWord: (string, t) => t =
    (word, counter) => {
      let newCount =
        switch (Js.Dict.get(counter,word)) {
        | None => 1
        | Some(n) => n + 1
        };
      Js.Dict.set(counter, word, newCount)
      counter
    };
};

let wordRegExp: Js.Re.t = [%re "/[a-zA-Z0-9]+([\\'\\`\'][a-zA-Z0-9])*/gi"];

let wordCount:  string => Js.Dict.t(int) = s =>{
  let matches: array(string)= s->Js.String2.match(wordRegExp)->Option.getWithDefault([||])
  let wordsReducer = (counter, word) => Js.String.(word -> toLowerCase -> StringCounter.countWord(counter))
  matches -> Array.reduce(StringCounter.empty(), wordsReducer)
}
  