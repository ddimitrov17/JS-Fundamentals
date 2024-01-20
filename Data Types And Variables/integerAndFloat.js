function integerAndFloat(firstNum,secondNum,thirdNum) {
    let sum=firstNum+secondNum+thirdNum;
    let type=``;
    if (sum%1!=0) {
        type=`Float`;
    } else {
        type=`Integer`
    }
    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1)