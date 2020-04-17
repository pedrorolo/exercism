module Garden
    ( Plant (..)
    , defaultGarden
    , garden
    , lookupPlants
    ) where

import Data.Map as Map
import Data.List as List
import Data.List.Split (chunksOf)

data Plant = Clover
           | Grass
           | Radishes
           | Violets
           deriving (Eq, Show)

type Garden = Map String [Plant]
type Student = String

defaultStudents :: [Student]
defaultStudents = ["Alice", "Bob", "Charlie", "David",
           "Eve", "Fred", "Ginny", "Harriet",
           "Ileana", "Joseph", "Kincaid", "Larry"]

plant :: Char -> Plant
plant 'C' = Clover
plant 'G' = Grass
plant 'R' = Radishes
plant 'V' = Violets

defaultGarden :: String -> Garden
defaultGarden = garden defaultStudents

garden :: [Student] -> String -> Garden
garden children plantChars=
  fromList $ zip (sort children) plantsPerChildren
  where
    [firstRow, secondRow] = chunksOf 2 <$> lines plantChars
    plantsPerChildren = fmap plant <$> zipWith (++) firstRow secondRow

lookupPlants :: Student -> Garden -> [Plant]
lookupPlants = flip (!)
