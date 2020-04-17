module Meetup (Weekday(..), Schedule(..), meetupDay) where

import Data.Time.Calendar as Calendar
import Data.Time.Clock.POSIX as POSIX

data Weekday = Monday
             | Tuesday
             | Wednesday
             | Thursday
             | Friday
             | Saturday
             | Sunday
             deriving (Enum)

data Schedule = First
              | Second
              | Third
              | Fourth
              | Last
              | Teenth

type Year = Integer
type Month = Int


meetupDay :: Schedule -> Weekday -> Year -> Month -> Day
meetupDay schedule weekday year month =
  until areWeThereYet succ
  where
    firstSearchDay :: Day
    firstSearchDay = undefined
    areWeThereYet :: Day -> Bool
    areWeThereYet = (== weekday)

intWeekDay day =
