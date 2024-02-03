function wordsTracker(input) {
    let wordsToSearchFor=input.shift().split(` `);
    let wordsToSearch={};
    for (let current of wordsToSearchFor) {
        wordsToSearch[current]=0;
    }
    for (let currentWord of input) {
        if (wordsToSearch.hasOwnProperty(currentWord)) {
            wordsToSearch[currentWord]++;
        }
    }
    let descending=Object.entries(wordsToSearch).sort((a,b) => b[1]-a[1]);
    for (let current of descending) {
        console.log(`${current[0]} - ${current[1]}`);
    }
}

wordsTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])
wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])