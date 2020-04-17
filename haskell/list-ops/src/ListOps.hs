module ListOps
  ( length
  , reverse
  , map
  , filter
  , foldr
  , foldl'
  , (++)
  , concat
  ) where

import Prelude hiding
  ( length, reverse, map, filter, foldr, (++), concat )

import Data.Composition as Composition

foldl' :: (b -> a -> b) -> b -> [a] -> b
foldl' _ xs [] = xs
foldl' f xs' (x:xs) = seq xs'' $ foldl' f xs'' xs
  where xs'' = f xs' x

foldr :: (a -> b -> b) -> b -> [a] -> b
foldr _ xs [] = xs
foldr f xs (y:ys) = f y $ foldr f xs ys


length :: [a] -> Int
length = foldr (succ .: flip const) 0

reverse :: [a] -> [a]
reverse = foldl' reducer [] where
  reducer ys x = x : ys

map :: (a -> b) -> [a] -> [b]
map f = foldr reducer [] where
  reducer x ys = f x : ys

filter :: (a -> Bool) -> [a] -> [a]
filter test = foldr reducer [] where
  reducer x ys = if test x then x : ys else ys

(++) :: [a] -> [a] -> [a]
xs ++ [] = xs
[] ++ ys = ys
[x] ++ ys =  x:ys
xs ++ [y] = reverse $ y : reverse xs
(x:xs) ++ ys = seq (xs ++ ys) $ [x] ++ (xs ++ ys)


concat :: [[a]] -> [a]
concat = foldl' (++) []
