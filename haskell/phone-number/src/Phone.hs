module Phone (areaCode, number, prettyPrint) where

import Data.Char

areaCode :: String -> Maybe String
areaCode n =
  take 3 <$> number n

number :: String -> Maybe String
number n
  | l == 10 = Just onlyNumeric
  | l == 11 && head onlyNumeric == '1' = Just $ tail onlyNumeric
  | otherwise = Nothing
  where l = length onlyNumeric
        onlyNumeric = filter isNumber n

prettyPrint :: String -> Maybe String
prettyPrint n=
  prettify <$> number n
  where
    prettify = frame . sequence [take 3, take 3 . drop 3, drop 6]
    frame [x,y,z] = "(" ++ x ++ ") " ++ y ++ "-" ++ z
