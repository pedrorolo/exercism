module DNA (count, nucleotideCounts) where
import Data.Map (Map, fromList, adjust)

count :: Char -> String -> Either String Int
count c s=
  go <$> validateNucleotide c <*> validateDNA s
  where
    go c = length . filter (== c)

validNucleotide :: Char -> Bool
validNucleotide = flip elem validNucleotides

validNucleotides :: String
validNucleotides = "ACTG"

validateDNA :: String -> Either String String
validateDNA s =
  if all validNucleotide s
    then Right s
    else Left s

validateNucleotide :: Char -> Either String Char
validateNucleotide c =
  (!! 0) <$> validateDNA [c]


nucleotideCounts :: String -> Either String (Map Char Int)
nucleotideCounts xs =
  foldr (adjust (+1)) initMap <$> validateDNA xs
  where initMap = fromList . zip validNucleotides $ repeat 0
