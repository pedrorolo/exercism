module Anagram (anagramsFor) where
import Data.Char as Char
import Data.String as String
import Data.List as List


anagramsFor :: String -> [String] -> [String]
anagramsFor xs =
  filter ((`elem` possibleAnagrams) . toLowerString) . removeIdentical . caseInsensitiveDelete xs
  where
    caseInsensitiveDelete :: String -> [String] -> [String]
    caseInsensitiveDelete = deleteBy caseInsensitiveCompare
    caseInsensitiveCompare x y = toLowerString x == toLowerString y
    possibleAnagrams = delete lowerCaseInput lowerCasePermutations
    lowerCasePermutations = permutations lowerCaseInput
    toLowerString :: String -> String
    toLowerString = fmap toLower
    lowerCaseInput = toLowerString xs
    removeIdentical = foldl' reducer [] where
      reducer acc el =
        if toLowerString el `elem` (toLowerString <$> acc)
          then acc else el : acc
