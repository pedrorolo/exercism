class ReverseString {
    static reverse(s: string): string {
        return s.split("").reduce((res, char) => char + res, "")
    }
}

export default ReverseString
