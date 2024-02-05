function revealWords(words,templates) {
    let wordsToReplace=words.split(`, `);
    let templateArray=templates.split(` `);
    for (let current of wordsToReplace) {
        let templateStars=`*`.repeat(current.length);
        for (i=0;i<templateArray.length;i++) {
            if (templateArray[i]==templateStars) {
                templateArray[i]=current;
            }
        }
    }
    console.log(templateArray.join(` `));
}

revealWords('great',

'softuni is ***** place for learning new programming languages')

revealWords('great, learning',

'softuni is ***** place for ******** new programming languages')