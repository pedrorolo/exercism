module Robot
    ( Bearing(East, North, South, West)
    , bearing
    , coordinates
    , mkRobot
    , simulate
    , turnLeft
    , turnRight
    ) where

import Data.List (foldl')

data Bearing = North
             | East
             | South
             | West
             deriving (Eq, Show, Enum)

data Robot = Robot {
    bearing :: Bearing,
    coordinates :: Coordinates
  } deriving (Show)

type Action = Char
type Side = Action
type Coordinates = (Integer, Integer)

mkRobot :: Bearing -> Coordinates -> Robot
mkRobot = Robot

simulate :: Robot -> [Action] -> Robot
simulate = foldl' $ flip act
  where
    act :: Action -> Robot -> Robot
    act 'A' = advance
    act side = mkRobot <$> turnFunctionFor side . bearing <*> coordinates
    turnFunctionFor :: Side -> (Bearing -> Bearing)
    turnFunctionFor side = case side of
      'L' -> turnLeft
      'R' -> turnRight


advance :: Robot -> Robot
advance (Robot b c) =
  mkRobot b . sumOffset c $ offsetFor b
  where
    sumOffset (x,y) (x',y') = (x + x', y + y')
    offsetFor b = case b of
      North -> (0, 1)
      South -> (0, -1)
      West -> (-1, 0)
      East -> (1, 0)


turnLeft :: Bearing -> Bearing
turnLeft = pred

turnRight :: Bearing -> Bearing
turnRight = succ
