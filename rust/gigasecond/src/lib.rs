use time::PrimitiveDateTime as DateTime;
use time::Duration as Duration;

// Returns a DateTime one billion seconds after start.
pub fn after(start: DateTime) -> DateTime {
    return start + Duration::new(1000_000_000,0);
}
