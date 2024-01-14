function condenseArrayToNumber(arr) {
    let a=arr.length;
    for(j=0;j<a-1;j++) {
        let condensed=[];
        for (i=0;i<arr.length-1;i++) {
        condensed[i] = arr[i] + arr[i+1];
        }
        arr=condensed;
    }
    console.log(arr[0]);
}

condenseArrayToNumber([1])