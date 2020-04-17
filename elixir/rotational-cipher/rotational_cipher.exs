defmodule RotationalCipher do
  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  def rotate(text, shift) do
    text
      |> to_charlist()
      |> Enum.map(&(rotate_char(&1,shift)))
      |> to_string()
  end

  def rotate_char(char,shift) do
    IO.inspect(char)
    if char >= ?a && char <= ?z do
      new_char_candidate = char + shift
      if new_char_candidate >= ?z do
        new_char_candidate - ?z
      else
        new_char_candidate
      end
    else
      char
    end
  end
end
