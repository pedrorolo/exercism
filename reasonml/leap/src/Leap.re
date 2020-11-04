let isLeapYear = year => {
  let yDivBy = divisor => year mod divisor == 0;
  yDivBy(4) && !(yDivBy(100) && !yDivBy(400));
};
