function buildSuffixArray(text: string): number[] {
    const suffixes: { suffix: string, index: number }[] = [];
    for (let i = 0; i < text.length; i++) {
        suffixes.push({ suffix: text.substring(i), index: i });
    }
    suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));
    return suffixes.map(suffix => suffix.index);
}

// Usage
const text = "banana";
const suffixArray = buildSuffixArray(text);
console.log(suffixArray); // [5, 3, 1, 0, 4, 2]
