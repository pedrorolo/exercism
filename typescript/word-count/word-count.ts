type WordCount = Map<string, number>;

const newWordCount = () => { return new Map<string, number>(); };

export const phraseWords = (phrase: string): Array<string> => {
    return phrase
        .split(new RegExp("[^a-zA-Z0-9\u00c0-\u00d6\u00d8-\u00f6\u00f8-\uab6f]+"))
        .filter((e) => e != "");
}
const reducer = (counts: WordCount, word: string): WordCount => {
    let currentWord = word.toLowerCase();
    let currentCount: unknown = counts.get(currentWord);
    if (counts.has(currentWord))
        counts = counts.set(currentWord, (currentCount as number) + 1)
    else
        counts = counts.set(currentWord, 1);
    return counts;
}

export default class Words {
    count(s: string): WordCount {
        let words: Array<string> = phraseWords(s);
        return words.reduce(reducer, newWordCount());
    }
}

