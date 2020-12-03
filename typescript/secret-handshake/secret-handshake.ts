enum Command {
    Wink = 1,
    DoubleBlink,
    CloseEyes,
    Jump,
    Reverse,
}



const CommandStrings: {
    [key: number]: string
} = {
    [Command.Wink]: "wink",
    [Command.DoubleBlink]: "double blink",
    [Command.CloseEyes]: "close your eyes",
    [Command.Jump]: "jump"
}


export default class Handshake {
    constructor(private integer: number) { }
    private binary(): string {
        return new Number(this.integer).toString(2)
    }
    commands(): string[] {
        const binaryString = this.binary()
        const pad5DigitsWithZeros = (s: string): string => {
            if (s.length == 5)
                return s
            else return pad5DigitsWithZeros("0" + s)
        }
        const paddedBinaryString = pad5DigitsWithZeros(binaryString);
        const commandForIndex = (idx: number) => 5 - idx
        const reducer = (commands: Command[], element: string, idx: number): Command[] => {
            if (element == "1")
                return commands.concat([commandForIndex(idx)])
            return commands;
        }
        let commands: Command[] = paddedBinaryString.split("")
            .reduce(reducer, [])
        if (commands[0] && commands[0] == Command.Reverse) {
            const [, ...commandsRest] = commands;
            commands = commandsRest.reverse()
        }
        return commands.reverse().map((c) => CommandStrings[c])
    }
}