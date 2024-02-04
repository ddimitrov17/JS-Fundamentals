function countStringOccurrences(str,word) {
    let counter=0;
    let splitted=str.split(` `);
    for (let current of splitted) {
        if (current==word) {
            counter++;
        }
    }
    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence',

'is')
countStringOccurrences('softuni is great place for learning new programming languages',

'softuni')