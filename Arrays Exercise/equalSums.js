function equalSums(array) {
    let isFound=false;
    for (i=0;i<array.length;i++) {
        let leftSum=0;
        let rightSum=0;
        for (j=i-1;j>=0;j--) {
            leftSum+=array[j]; //sum of left Numbers
        }
        for (p=i+1;p<array.length;p++) {
            rightSum+=array[p]; //sum of right Numbers
        }
        if (leftSum==rightSum) { //check
            console.log(i);
            isFound=true;
            break;
        }
    }
    if (!isFound) {
        console.log(`no`);
    }
}

equalSums([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])