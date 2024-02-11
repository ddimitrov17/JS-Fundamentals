function valueOfAString(input) {
    let str=input[0];
    let sum=0;
    for (let currentLetter of str) {
        if (input[1]==`LOWERCASE`) {
            if (currentLetter.charCodeAt()>=97 && currentLetter.charCodeAt()<=122) {
                sum+=Number(currentLetter.charCodeAt());
            }
        } else {
            if (currentLetter.charCodeAt()>=65 && currentLetter.charCodeAt()<=90) {
                sum+=Number(currentLetter.charCodeAt());
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM','LOWERCASE'])
valueOfAString(['AC/DC',

'UPPERCASE'])