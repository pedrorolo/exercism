module Raindrops (convert) where

type Drop = (String, Integer)

drops :: [Drop]
drops = [("Pling", 3 ), ("Plang", 5), ("Plong", 7)]

convert :: Integer -> String
convert d =
  if null result then show d else result
  where
    result = concatMap fst dropsWithFactor
    dropsWithFactor = filter (hasFactor d . snd) drops
    hasFactor d f = mod d f == 0
