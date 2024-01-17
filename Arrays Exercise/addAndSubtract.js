function addAndSubtract(array) {
    let sum=0;
    let firstSum=0;
    for(j=0;j<array.length;j++) { // sum of First Array
        firstSum+=array[j];
    }
    for (i=0;i<array.length;i++) {
        if (array[i]%2==0) { //even
            array[i]=Number(array[i])+i;
        } else {
            array[i]=Number(array[i])-i;
        }
        sum+=Number(array[i]);
    }
    console.log(array);
    console.log(firstSum);
    console.log(sum);
}

addAndSubtract([5, 15, 23, 56, 35])