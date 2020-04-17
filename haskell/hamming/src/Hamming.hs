module Hamming (distance) where
import Data.List

distance :: String -> String -> Maybe Integer
distance s s' =
  if length s == length s' then
    Just . genericLength . filter id $ zipWith (/=) s s'
  else
    Nothing
