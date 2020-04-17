{-# LANGUAGE TypeSynonymInstances #-}
{-# LANGUAGE FlexibleInstances #-}


module SecretHandshake (handshake) where
import Data.Bits
import Data.Traversable
import Data.Maybe

type Binary = Bool
type Event = String

class Handshake a where
  toBinary :: a -> [Binary]

instance Handshake String where
  toBinary = padWithFalse . fromMaybe [] . traverse mapper where
    mapper :: Char -> Maybe Binary
    mapper = flip lookup binaryDict
    binaryDict = [('0',False), ('1',True)]
    padWithFalse xs = falsesPadding ++ xs
      where
        falsesPadding = replicate (5 - length xs) False

instance Handshake Int where
  toBinary val = reverse . take 5 $ map (testBit val) [0..(pred size)]
    where size = fromMaybe 0 $ bitSizeMaybe val

handshake :: (Handshake a) => a -> [Event]
handshake = go . toBinary where
  go :: [Binary] -> [Event]
  go xxs = case xxs of
    [] -> []
    [x, y, z, w, u] ->
      let maybeReverse = if not x then reverse else id
          y' = ["jump" | y]
          z' = ["close your eyes" | z]
          w' = ["double blink" | w]
          u' = ["wink" | u]
      in maybeReverse $ y' ++ z' ++ w' ++ u'
