function palindromeIntegers(array) {
    for (let currentNum of array) {
        palindromeCheck(currentNum);
    }
   
    function palindromeCheck(num) {
        let stringNum=String(num);
        let reversedNum="";
        for (let i=stringNum.length-1;i>=0;i--) {
            reversedNum+=stringNum[i];
        }
        let check=reversedNum==stringNum;
        console.log(check);
    }

}

palindromeIntegers([123,323,421,121])