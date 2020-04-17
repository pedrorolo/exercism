module LinkedList
    ( LinkedList
    , datum
    , fromList
    , isNil
    , new
    , next
    , nil
    , reverseLinkedList
    , toList
    ) where
import Data.List as List
import Data.Semigroup as Semigroup
import qualified Control.Applicative as Applicative
data LinkedList a = Empty | Pair a (LinkedList a)

instance Monoid (LinkedList a) where
  mempty = Empty
  mappend Empty ys = ys
  mappend (Pair x Empty) ys =  Pair x ys
  mappend (Pair x xs) zs = Pair x $ mappend xs zs

instance Semigroup (LinkedList a) where (<>) = mappend

instance Foldable LinkedList where
  foldMap _ Empty = mempty
  foldMap toMonoid (Pair x xs) = mappend (toMonoid x) $ foldMap toMonoid xs

datum :: LinkedList a -> a
datum (Pair a _) = a

pure :: a -> LinkedList a
pure = flip Pair Empty

fromList :: [a] -> LinkedList a
fromList = foldMap LinkedList.pure

isNil :: LinkedList a -> Bool
isNil = null

new :: a -> LinkedList a -> LinkedList a
new x ys= LinkedList.pure x <> ys

next :: LinkedList a -> LinkedList a
next (Pair x xs) = xs

nil :: LinkedList a
nil = mempty

reverseLinkedList :: LinkedList a -> LinkedList a
reverseLinkedList = fromList . reverse . toList

toList :: LinkedList a -> [a]
toList = foldMap Applicative.pure
