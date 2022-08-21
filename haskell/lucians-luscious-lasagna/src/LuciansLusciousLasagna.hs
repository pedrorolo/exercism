module LuciansLusciousLasagna (elapsedTimeInMinutes, expectedMinutesInOven, preparationTimeInMinutes) where

-- TODO: define the expectedMinutesInOven constant

-- TODO: define the preparationTimeInMinutes function

-- TODO: define the elapsedTimeInMinutes function

expectedMinutesInOven = 40

preparationTimeInMinutes layers = 2 * layers

elapsedTimeInMinutes layers minutes =
  minutes + preparationTimeInMinutes layers