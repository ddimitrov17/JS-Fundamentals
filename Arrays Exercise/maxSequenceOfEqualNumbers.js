function maxSequenceOfEqualNumbers(array) {
    let printArray=[];
    for (i=0;i<array.length;i++) {
        let counter=0;
        let savedArray=[];
        for (j=i+1;j<array.length;j++) {
            if (array[i]==array[j]) {
                savedArray[counter]=array[i];
                savedArray[counter+1]=array[i];
                counter++; 
            } else {
                break;
            }
        }
        if (printArray.length<savedArray.length) {
            printArray=savedArray;
        }
    }
    console.log(printArray.join(` `));
}

maxSequenceOfEqualNumbers([1,1,2,3,3,4])