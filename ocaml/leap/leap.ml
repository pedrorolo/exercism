let leap_year year = 
    let yrDivBy n =  (Int.rem year n) == 0 in 
        (yrDivBy 4) && not (yrDivBy 100 &&  not (yrDivBy 400))
    ;;

