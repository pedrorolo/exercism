use std::fmt;

#[derive(Debug,PartialEq)]
pub struct Clock{
  hours: i32,
  minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
      Clock {hours, minutes}
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
      let total_minutes_from_hour = self.minutes + minutes;
      let hours_incremented =self.add_hours(total_minutes_from_hour / 60);
      Self {
        hours: hours_incremented.hours, 
        minutes: total_minutes_from_hour % 60
      }
    }

    fn add_hours(&self, hours: i32) -> Self {
      let total_hours = self.hours + hours;
      Self {
        hours: total_hours % 24,
        minutes: self.minutes
      }
    }
}

impl fmt::Display for Clock{
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    // is very similar to `println!`.
    write!(f, "{:0>2}:{:0>2}", self.hours, self.minutes)
  }
}
