module Beer (song) where

song :: String
song = reverse [0..99] >>= verse
  where verse n
          | n == 0 = "No more bottles of beer on the wall, no more bottles of beer.\n\
                    \Go to the store and buy some more, 99 bottles of beer on the wall.\n"
          | n > 2 = sn ++ " bottles of beer on the wall, " ++ sn ++ " bottles of beer.\n\
                    \Take one down and pass it around, " ++ show (pred n) ++ " bottles of beer on the wall.\n\
                    \\n"
          | n == 2 =  "2 bottles of beer on the wall, 2 bottles of beer.\n\
                      \Take one down and pass it around, 1 bottle of beer on the wall.\n\
                      \\n"
          | n == 1 =  "1 bottle of beer on the wall, 1 bottle of beer.\n\
                      \Take it down and pass it around, no more bottles of beer on the wall.\n\
                      \\n"
          where sn = show n
