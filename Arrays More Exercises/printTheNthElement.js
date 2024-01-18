function printTheNthElement(array) {
    let step=Number(array[array.length-1]);
    let printArray=[];
    let p=0;
    for (i=0;i<array.length-1;i+=step) {
        printArray[p]=array[i];
        p++;
    }
    console.log(printArray.join(` `));
}

printTheNthElement(['dsa', 'asd', 'test', 'test', '2'])