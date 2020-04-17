defmodule Bob do
  def hey(input_) do
    input = String.strip input_
    cond do
      is_question?(input) && is_yelling?(input) -> "Calm down, I know what I'm doing!"
      is_question?(input)  -> "Sure"
      is_yelling?(input)  ->  "Whoa, chill out!"
      is_mute?(input) -> "Fine. Be that way!"
      true -> "Whatever."
    end
  end

  @spec is_mute?(String.t) :: boolean
  defp is_mute?(s), do: !String.match?(s, ~r/[a-zA-Z0-9]/)

  @spec is_question?(String.t) :: boolean
  defp is_question?(s), do: String.ends_with?(s, "?")

  @spec is_yelling?(String.t) :: boolean
  defp is_yelling?(s), do: s == String.upcase(s)

end
