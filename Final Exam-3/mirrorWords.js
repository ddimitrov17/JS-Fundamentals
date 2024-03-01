function mirrorWords(input) {
    let str=input.shift();
    let pattern=/([@#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let matches=str.matchAll(pattern);
    let row=[];
    let counter=0;
    for (let match of matches) {
        counter++;
        let reversedWord=match.groups.secondWord.split(``).reverse().join(``);
        if (match.groups.firstWord===reversedWord) {
            row.push(`${match.groups.firstWord} <=> ${match.groups.secondWord}`);
        }
    }
    if (counter==0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (row.length==0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(row.join(`, `));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )