class Bob {
    hey(s: string): string {
        const trimmed = s.trim()
        const hasLetters = !!s.match(/.*[a-zA-Z].*/)
        const isQuestion = trimmed.endsWith("?")
        const isYell = hasLetters && s.toUpperCase() == s
        if (isQuestion && !isYell)
            return "Sure."
        if (!isQuestion && isYell)
            return 'Whoa, chill out!'
        if (isQuestion && isYell)
            return "Calm down, I know what I'm doing!"
        if (trimmed == "")
            return 'Fine. Be that way!'
        return "Whatever."
    }
}

export default Bob