use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &'a str, possible_anagrams: &'a [&str]) -> HashSet<&'a str> {
  let word_chars = str_to_sorted_char_vec(word);
  possible_anagrams.iter()
                   .filter(|w| has_chars(&word_chars, w))
                    .copied()
                    .collect()
}

fn has_chars(chars: &Vec<char>, word: &str) -> bool{
  *chars == str_to_sorted_char_vec(word)
}

fn str_to_sorted_char_vec(str: &str) -> Vec<char> {
  let mut result: Vec<char> = str.chars().collect();
  result.sort();
  result
}

