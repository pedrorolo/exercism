{-# LANGUAGE TupleSections #-}
module Scrabble (scoreLetter, scoreWord) where

import Data.Map as Map
import Data.Char as Char

type Letter = Char
type Score = Integer

scoreMap :: Map Letter Score
scoreMap =
  fromList (input >>= scatterInput)
  where
    scatterInput (w,s) = (,s) <$> w
    input = [
      ("AEIOULNRST",1),
      ("DG",2),
      ("BCMP",3),
      ("FHVWY",4),
      ("K", 5),
      ("JX",8),
      ("QZ",10)]

scoreLetter :: Letter -> Score
scoreLetter l = findWithDefault 0 (toUpper l) scoreMap

scoreWord :: [Letter] -> Score
scoreWord = sum . fmap scoreLetter
