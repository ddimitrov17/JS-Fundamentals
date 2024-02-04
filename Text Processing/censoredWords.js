function censoredWord(str,word) {
    let print=str.split(word).join(`*`.repeat(word.length));
    console.log(print);
}

censoredWord('A small sentence with some words','small')
censoredWord('Find the hidden word', 'hidden')
censoredWord(`hello world hello`,`hello`)