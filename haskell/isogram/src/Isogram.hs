module Isogram (isIsogram) where
import Data.Char as Char


isIsogram :: String -> Bool
isIsogram s = 
  not . anyGt 1 . mapToCharCounts . strip . removePunc $ downcasedString
  where
    downcasedString = map toLower $ s
    anyGt :: Int -> [Int] -> Bool
    anyGt n = any ((<) n)
    mapToCharCounts :: String -> [Int]
    mapToCharCounts = map (`count` downcasedString)
    strip :: String -> String
    strip = concat . words 
    count :: Char -> String -> Int
    count c = foldl (\n c2 -> if c == c2 then n + 1 else n) 0
    removePunc xs = [ x | x <- xs, not (x `elem` ",.?!-:;\"\'") ]

 

