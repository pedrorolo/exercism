module Triangle (TriangleType(..), triangleType) where

import Data.List

data TriangleType = Equilateral
                  | Isosceles
                  | Scalene
                  | Illegal
                  deriving (Eq, Show)

triangleType :: (Num a, Eq a, Ord a) => a -> a -> a -> TriangleType
triangleType a b c =
  if  illegal
    then Illegal
    else
      valid
  where
    valid =
      case length $ filter id equalityProduct of
        3 -> Scalene
        5 -> Isosceles
        9 -> Equilateral
        _ -> Illegal
    firstBiggerThenTailSum [x,y,z] = x > z + y
    equalityProduct = (==) <$> l <*> l
    l = [a,b,c]
    illegal = elem 0 l || any firstBiggerThenTailSum (permutations l)
