function evenAndOddSubstraction(arr) {
    let sumEven=0;
    let sumOdd=0;
    for(i=0;i<arr.length;i++) {
        if (arr[i]%2==0) {
            sumEven+=Number(arr[i]);
        } else {
            sumOdd+=Number(arr[i]);
        }
    }
    console.log(sumEven-sumOdd);
}

evenAndOddSubstraction([1,2,3,4,5,6])