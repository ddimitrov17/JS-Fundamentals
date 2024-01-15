function processOddNumbers(array) {
    let printArray=[];
    for(i=array.length-1;i>=0;i--) {
        if (i%2!==0) {
            printArray.push(array[i]*2);
        }
    }
    console.log(printArray.join(` `));
}

// processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])