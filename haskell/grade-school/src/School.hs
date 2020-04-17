module School (School, add, School.empty, grade, sorted) where
import Data.Maybe
import Data.Map as Map
import Data.List as List

type Grade = Integer
type Student = String
type School = Map Grade [Student]

add :: Grade -> Student -> School -> School
add g st = Map.insertWith inserter g [st]
  where inserter new = List.insert (head new)

empty :: School
empty = Map.empty

grade :: Grade -> School -> [Student]
grade = findWithDefault []

sorted :: School -> [(Grade, [Student])]
sorted  = sort . toList
