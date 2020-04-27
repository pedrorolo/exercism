defmodule WordCount do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t()) :: map
  def count(sentence) do
    add_string_to_acc = fn string, map ->
      key = String.downcase(string)
      Map.update(map, key, 1, &(&1 + 1))
    end

    sentence
    |> String.split(~r/[^A-Za-zÀ-ÖØ-öø-ÿ0-9\-]/, trim: true)
    |> Enum.reduce(%{}, add_string_to_acc)
  end
end
