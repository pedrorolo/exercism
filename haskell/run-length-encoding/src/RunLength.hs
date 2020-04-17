module RunLength (decode, encode) where

import Data.Char

type Cardinality = (Char, Integer)


decode :: String -> String
decode s=
  expandCardinality =<< cardinatities s
  where
    expandCardinality :: Cardinality -> String
    expandCardinality = (take . fromIntegral . snd) <*> repeat . fst
    cardinatities :: String -> [Cardinality]
    cardinatities l =
      if null l
        then []
        else cardinality : cardinatities (tail afterNumber)
      where
        cardinality = (head afterNumber, count)
        count = if isNumber . head $ l
          then (read number) :: Integer
          else 1
        (number, afterNumber) = span isNumber l


encode :: String -> String
encode [] = []
encode (x:xs) =
  merge . foldr reducer initValue $ reverse xs
  where
    initValue = ("", (x,1))
    reducer :: Char -> (String, Cardinality) -> (String, Cardinality)
    reducer c acc@(s,(c', n)) =
      if c == c'
        then (s, (c, succ n))
        else (merge acc, (c, 1))
    merge :: (String, Cardinality) -> String
    merge (s , (c, n)) =  s ++ numberStr n ++ [c]
    numberStr n = if n == 1 then "" else show n

-- main = print encode "XYZ"
