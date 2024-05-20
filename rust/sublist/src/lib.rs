#[derive(Debug, PartialEq, Eq, Clone)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

impl Comparison {
  pub fn reverse(&self) -> Comparison{
    match self {
      Comparison::Sublist => Comparison::Superlist,
      Comparison::Superlist => Comparison::Sublist,
      other => other.clone()
    }
  }
}

pub fn sublist<T: PartialEq>(first_list: &[T], second_list: &[T]) -> Comparison {
  if first_list == second_list {
    Comparison::Equal
  }else if first_list.len() > second_list.len() && is_sublist(first_list, second_list) {
    Comparison::Superlist
  }else if first_list.len() < second_list.len() && is_sublist(second_list, first_list){
    Comparison::Sublist
  } else {
    Comparison::Unequal
  }
}

fn is_sublist<T: PartialEq>(big_list: &[T], small_list: &[T]) -> bool{
  let len_diff = big_list.len() - small_list.len();
  let small_copy = &small_list[0..small_list.len()];

  (0..(len_diff + 1)).any(|offset| {
    let slice_range = offset..(small_list.len() + offset);
    let slice: &[T] = &big_list[slice_range];
    *slice == *small_copy
  })
}
