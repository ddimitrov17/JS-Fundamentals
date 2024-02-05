function pascalCaseSplitter(input) {
    let printText=[];
    while(input.length>0) {
        let CurrentWord=input[0];
        if (input[0].charCodeAt()>=65 && input[0].charCodeAt()<=90) {
            for (j=1;j<input.length;j++) {
                if (!(input[j].charCodeAt()>=65 && input[j].charCodeAt()<=90)) {
                    CurrentWord+=input[j];
                } else {
                    break;
                }
            }
        }
        printText.push(CurrentWord);
        input=input.substring(CurrentWord.length);
    }
    console.log(printText.join(`, `));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')