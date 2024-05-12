// The code below is a stub. Just enough to satisfy the compiler.
// In order to pass the tests you can add-to or change any of this code.
#[derive(Debug)]
pub enum Duration {
  Days(f64),
  Years(f64),
  Seconds(u64)
}

impl Duration{
  pub fn seconds(&self)-> u64{
    match self {
      &Duration::Seconds(seconds) => seconds as f64,
      &Duration::Days(days) => (days * 24.0 * 60.0 * 60.0).round(),
      &Duration::Years(years) => (years * (Earth::sideral_period().seconds() as f64)).round()
    }.round() as u64
  }
}

impl From<u64> for Duration{
  fn from(seconds: u64)-> Duration{
    Duration::Seconds(seconds)
  }
}

pub trait Planet {
    fn years_during(d: &Duration) -> f64 {
      d.seconds() as f64 / Self::sideral_period().seconds() as f64
    }
    fn sideral_period() -> Duration;
}

pub struct Mercury;
pub struct Venus;
pub struct Earth;
pub struct Mars;
pub struct Jupiter;
pub struct Saturn;
pub struct Uranus;
pub struct Neptune;

impl Planet for Mercury {
  fn sideral_period() -> Duration  { Duration::Days(87.97) }
}
impl Planet for Venus {
  fn sideral_period() -> Duration { Duration::Days(224.70) }
}
impl Planet for Earth {
  fn sideral_period() -> Duration { Duration::Days(365.26) }
}
impl Planet for Mars {
  fn sideral_period() -> Duration { Duration::Days(686.98) }
}
impl Planet for Jupiter {
  fn sideral_period() -> Duration { Duration::Years(11.86)  }
}
impl Planet for Saturn {
  fn sideral_period() -> Duration { Duration::Years(29.46) }
}
impl Planet for Uranus {
  fn sideral_period() -> Duration { Duration::Years(84.01) }
}
impl Planet for Neptune {
  fn sideral_period() -> Duration { Duration::Years(164.79) }
}
