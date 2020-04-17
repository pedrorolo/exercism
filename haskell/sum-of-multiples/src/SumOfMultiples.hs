module SumOfMultiples (sumOfMultiples) where
import Data.List

sumOfMultiples:: [Int] -> Int -> Int
sumOfMultiples factors limit =
  sum allMultiples
  where
    allMultiples =
      nub . concat $ factorMultiples <$> factors
    factorMultiples f =
      takeWhile (< limit) $ iterate (+ f) f
