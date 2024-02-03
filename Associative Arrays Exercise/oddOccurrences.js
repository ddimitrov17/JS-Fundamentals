function oddOccurrences(symbolsString) {
    let occurrences={};
    let separatedSymbols=symbolsString.split(` `);
    for (let currentSymbol of separatedSymbols) {
        if (currentSymbol.toLowerCase() in occurrences) {
            occurrences[currentSymbol.toLowerCase()]++;
        } else {
            occurrences[currentSymbol.toLowerCase()]=1;
        }
    }
    let odd=Object.entries(occurrences).filter((a) => a[1]%2!=0).sort((a,b) => b[1]-a[1]);
    let concatenated=``;
    for (let current of odd) {
        concatenated+=` ${current[0]}`
    }
    console.log(concatenated);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')
