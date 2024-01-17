function mergeArrays(firstArray,secondArray) {
    let outputArray=[];
    for (i=0;i<firstArray.length;i++) {
        if (i%2==0) { //Even index
            outputArray[i]=Number(firstArray[i]) + Number(secondArray[i]);
        } else { // Odd Index
            outputArray[i]=firstArray[i]+secondArray[i]+``;
        }
    }
    outputArray=outputArray.join(` - `);
    console.log(outputArray);
}

mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])