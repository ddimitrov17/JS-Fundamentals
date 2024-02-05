function replaceRepeatingChars(input) {
    let symb=input[0];
    let uniqueSymbs=[symb];
    for (i=1;i<input.length;i++) {
        if (input[i]!=symb) {
            uniqueSymbs.push(input[i]);
            symb=input[i];
        }
    }
    console.log(uniqueSymbs.join(``));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')