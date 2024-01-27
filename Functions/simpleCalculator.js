function simpleCalculator(num1,num2,operator) {
    let sum=0;
    if (operator==`add`) {
        sum=num1+num2;
    } else if (operator==`subtract`) {
        sum=num1-num2;
    } else if (operator==`multiply`) {
        sum=num1*num2;
    } else {
        sum=num1/num2;
    }
    console.log(sum);
}

simpleCalculator(40,

    8,
    
    'divide')