function stringSubstring(word,text) {
    word=word.toLowerCase();
    let textArray=text.toLowerCase().split(` `);
    if (textArray.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',

'JavaScript is the best programming language')