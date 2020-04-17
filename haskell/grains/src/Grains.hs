module Grains (square, total) where
import Data.Maybe

square :: Integer -> Maybe Integer
square n
  | n == 1 = Just 1
  | isInTheBoard = Just (2 ^ pred n)
  | otherwise = Nothing
  where isInTheBoard = and $ [(>= 1), (<= 64)] <*> pure n

total :: Integer
total = sum $ mapMaybe square [1..64]
