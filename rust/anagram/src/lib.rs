use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &'a str, possible_anagrams: &'a [&str]) -> HashSet<&'a str> {
  let upcased_word = word.to_uppercase();
  let word_chars = str_to_sorted_char_vec(&upcased_word);
  let is_anagram = |anagram: &&str| -> bool{
    let upcased_anagram = anagram.to_uppercase();
    !(upcased_anagram).eq(&upcased_word) &&
    has_chars(&word_chars, &upcased_anagram)
  };
  possible_anagrams.iter()
                   .map(|x| *x)
                   .filter(is_anagram)
                   .collect()
}

fn has_chars(chars: &Vec<char>, word: &str) -> bool{
  *chars == str_to_sorted_char_vec(word)
}

fn str_to_sorted_char_vec(str: &str) -> Vec<char> {
  let mut result: Vec<char> = str.to_uppercase().chars().collect();
  result.sort();
  result
}

