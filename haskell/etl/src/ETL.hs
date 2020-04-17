{-# LANGUAGE TupleSections #-}
module ETL (transform) where

import Data.Map as Map
import Data.List as List
import Data.Char as Char

transform :: Map Integer String -> Map Char Integer
transform =
  Map.fromList . List.foldr reducer [] . toList
  where
    reducer (p,xs) = (++) (fmap ((,p) . toLower)  xs)
