function magicSum(array,magicSum) {
    for (i=0;i<array.length;i++) {
        for (j=i+1;j<array.length;j++) {
            if (array[i]+array[j]==magicSum) {
                console.log(array[i]+` `+array[j]);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],

    8)