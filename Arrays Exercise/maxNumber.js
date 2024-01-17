function maxNumber(array) {
    let topNumbers=[];
    let counter=0;
    for (i=0;i<array.length;i++) {
        let isTop=true;
        for(j=i+1;j<array.length;j++) {
            if (array[i]<=array[j]) {
                isTop=false;
                break;
            }
        }
        if (isTop) {
            topNumbers[counter]=array[i];
            counter++;
        }
    }
    console.log(topNumbers.join(` `));
}

maxNumber([14, 24, 3, 19, 15, 17])