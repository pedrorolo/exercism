use std::collections::HashSet;
use std;

pub fn anagrams_for<'a>(word: &'a str, possible_anagrams: &'a [&str]) -> HashSet<&'a str> {
  let word_chars= HashSet::from_iter(word.chars());
  possible_anagrams.into_iter()
                   .filter(|w| has_chars(&word_chars, w))
                    .copied()
                    .collect()
}

fn has_chars(chars: &HashSet<char>, word: &str) -> bool{
  HashSet::from_iter(word.chars()) == *chars
}

