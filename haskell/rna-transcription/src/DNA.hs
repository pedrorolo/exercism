module DNA (toRNA) where
import Data.Map as Map

toRNA :: String -> Maybe String
toRNA dna =
  mapM toRNANucleotide dna
  where
    dna2rnaDict =
      Map.fromList [('G','C'),
                   ('C', 'G'),
                   ('T', 'A'),
                   ('A', 'U')]
    toRNANucleotide = flip Map.lookup dna2rnaDict
