function charactersInRange(firstSymbol,secondSymbol) {
    firstChar=firstSymbol.charCodeAt();
    secondChar=secondSymbol.charCodeAt();
    let minChar=Math.min(firstChar,secondChar);
    let maxChar=Math.max(firstChar,secondChar);
    printResult(minChar,maxChar)
    function printResult(a,b) {
        let resultArray=[];
        for (i=minChar+1;i<maxChar;i++) {
            let currentChar=String.fromCharCode(i);
            resultArray.push(currentChar);
        }
        console.log(resultArray.join(` `));
    }
}

charactersInRange('a','d')
// charactersInRange('C','#')