function wordOccurrencies(input) {
    let words={};
    for (let currentWord of input) {
        if (words.hasOwnProperty(currentWord)) {
            words[currentWord]++;
        } else {
            words[currentWord]=1;
        }
    }
    let sorted=Object.entries(words).sort((a,b) => b[1]-a[1]);
    // entries.sort(())
    for (let current of sorted) {
        console.log(`${current[0]} -> ${current[1]} times`);
    }
}

wordOccurrencies(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])