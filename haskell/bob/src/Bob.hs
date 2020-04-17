module Bob (responseFor) where
import Data.Char

responseFor :: String -> String
responseFor s
  | isYell s = "Whoa, chill out!"
  | s == "?" || isQuestion s = "Sure."
  | isSilence s = "Fine. Be that way!"
  | otherwise = "Whatever."
  where
    letters = filter isAlpha
    isQuestion' s = not (null  s) && last s == '?'
    isQuestion = isQuestion' . filter (/= ' ')
    isSilence = null . filter isAlphaNum
    isYell' =  all isUpper . letters
    hasLetters = not . null . letters
    isYell s = hasLetters s && isYell' s
