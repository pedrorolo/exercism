module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year =
  case map divisibleBy [4, 100, 400] of
    False : _ -> False
    True : False : _ -> True
    True : True : [by400] -> by400
  where divisibleBy divisor = year `rem` divisor == 0
