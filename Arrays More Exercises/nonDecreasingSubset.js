function nonDecreasingSubset(array) {
    let printArray=[];
    let c=0;
    let arrayMax=Number.MIN_SAFE_INTEGER;
    for(i=0;i<array.length;i++) {
        if (array[i]>=arrayMax) {
            printArray[c]=array[i];
            arrayMax=Number(array[i]);
            c++;
        }
    }
    console.log(printArray.join(` `));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])
nonDecreasingSubset([20,20,20,2,24])