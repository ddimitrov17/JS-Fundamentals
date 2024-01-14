function reverseAnArrayOfNumbers(num,arr) {
    let newArr=[];
    let buff=``;
    for (i=0;i<num;i++) {
        a=Number(arr[i]);
        newArr.push(a);
    }
    for (j=newArr.length-1;j>=0;j--) {
        buff+=` `+newArr[j];
    }
    console.log(buff);
} 

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])