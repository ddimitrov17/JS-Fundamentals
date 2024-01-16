function sorted(array) {
    let sortedArray=array.sort((a,b) => a-b );
    let printArray=[];
    while (sortedArray.length>0) {
        let biggest=sortedArray.pop();
        printArray.push(biggest);
        if (sortedArray.length!==1) {
            let smallest=sortedArray.shift();
            printArray.push(smallest);
        }
    }
    console.log(printArray.join(` `));
}

sorted([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])