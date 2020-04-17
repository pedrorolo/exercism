defmodule SecretHandshake do
  import Enum
  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    process_command = fn str, cmds ->
      add = &([&1] ++ cmds)
      case str do
        "1" -> add.("wink")
        "10" -> add.("double blink")
        "100" -> add.("close your eyes")
        "1000" -> add.("jump")
        "10000" -> List.reverse cmdsexer
      end
    end
    split_into_commands = fn(str) ->
      hd = &Kernel.hd/1
      Regex.scan(~r/(10*)/,str) |> map(hd)
    end
    code
      |> Integer.digits(2)
      |> map(&to_charlist/1)
      |> join
      |> split_into_commands.()
      |> reduce([], process_command)
      |> reverse
  end
end
