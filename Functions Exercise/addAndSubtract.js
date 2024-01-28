function addAndSubtract(firstNum,secondNum,thirdNum) {
    let firstResult=sum(firstNum,secondNum);
    let finalResult=subtract(firstResult,thirdNum);
    console.log(finalResult);
    function sum(a,b) {
        return a+b;
    }
    function subtract(a,b) {
        return a-b;
    }
}

addAndSubtract(23,

    6,
    
    10)