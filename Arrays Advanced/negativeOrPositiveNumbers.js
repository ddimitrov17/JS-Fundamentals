function negativeOrPositiveNumbers(array) {
    let printArray=[];
    for (i=0;i<array.length;i++) {
        if (Number(array[i])<0) {
            printArray.unshift(array[i]);
        } else {
            printArray.push(array[i]);
        }
    }
    console.log(printArray.join(`\n`));
}

// negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])

